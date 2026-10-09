import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = name => readFile(new URL("../" + name, import.meta.url), "utf8");

test("all published offices have unique IDs, homepage sources and check dates", async () => {
  const offices = vm.runInNewContext((await source("offices.js")) + "\nGOVERNMENT_OFFICES");
  assert.equal(offices.length, 16);
  assert.equal(new Set(offices.map(record => record.id)).size, offices.length);
  for (const record of offices) {
    assert.ok(["Federal","Local"].includes(record.level));
    assert.ok(record.district && record.province);
    assert.equal(record.status, "homepage-verified");
    assert.equal(Number.isNaN(Date.parse(record.checkedOn)), false);
    assert.equal(record.checkedOn, "2026-10-09");
    assert.ok(record.name && record.nameNe && record.city && record.description);
    const official = new URL(record.website);
    const cited = new URL(record.sourceUrl);
    assert.equal(official.protocol, "https:");
    assert.equal(cited.protocol, "https:");
    assert.equal(cited.hostname.replace("www.", ""), official.hostname.replace("www.", ""));
    assert.ok(official.hostname.endsWith(".gov.np"));
  }
  assert.equal(offices.filter(office => office.level === "Local").length, 9);
  assert.equal(offices.filter(office => office.level === "Federal").length, 7);
  assert.equal(new Set(offices.filter(office => office.level === "Local").map(office => office.province)).size, 7);
  const regions = vm.runInNewContext((await source("data.js")) + "\nNEPAL_REGIONS");
  const allDistricts = new Set(regions.flatMap(region => region.districts));
  for (const office of offices) {
    assert.ok(regions.some(region => region.name === office.province && region.districts.includes(office.district)));
    assert.ok(allDistricts.has(office.district));
  }
});

test("office records are wired into the nested deployment", async () => {
  const html = await source("index.html");
  const app = await source("app.js");
  assert.ok(html.includes('src="offices.js"'));
  assert.ok(html.includes('id="officeGrid"'));
  assert.ok(html.includes('id="officeSearch"'));
  assert.ok(html.includes('id="officeProvince"'));
  assert.ok(html.includes('id="officeDistrict"'));
  assert.ok(html.includes('id="officeLevel"'));
  assert.ok(app.includes('office.province === officeProvince'));
  assert.ok(app.includes("initOfficeFilters()"));
  assert.ok(app.includes('office.district === officeDistrict'));
  assert.ok(app.includes('office.level === officeLevel'));
  assert.ok(app.includes("renderOffices()"));
  assert.ok(app.includes("escapeHtml(office.name)"));
  assert.ok(app.includes("escapeHtml(office.website)"));
  assert.ok(html.indexOf('src="offices.js"') < html.indexOf('src="app.js"'));
});
