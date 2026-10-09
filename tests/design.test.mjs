import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
const read=name=>readFile(new URL("../"+name,import.meta.url),"utf8");

test("Phase 13 keeps real directory entry points and logo intact",async()=>{
 const html=await read("index.html");
 for(const id of ["mainContent","primaryNav","langSwitch","searchForm","searchInput","categories","provinces-section","provinces","districts","services","serviceGrid","offices","officeGrid","officeSearch","loksewa","loksewaGrid","about"])
   assert.ok(html.includes('id="'+id+'"'),"missing existing "+id);
 assert.ok(html.includes('class="brand-logo" src="assets/publicinfohub-logo.webp"'));
 assert.ok(html.includes('href="#loksewa"'));
 assert.ok(!html.includes('akeluwasoftwarehub.gov.np'));
 assert.ok(!html.includes("© 2024"));
});
test("Phase 13 provides substantive footer routes, site notices, and transparent ownership",async()=>{
 const html=await read("index.html");
 for(const id of ["footer","privacy","terms","accessibility","sources","about","footerYear"])
   assert.ok(html.includes('id="'+id+'"'));
 for(const target of ["#privacy","#terms","#accessibility","#sources","#mainContent","#loksewa","#offices"])
   assert.ok(html.includes('href="'+target+'"'));
 assert.ok(html.includes("https://www.akeluwasoftwarehub.com.np/"));
 assert.ok(html.includes("We are not a government agency."));
 assert.ok(html.includes("External")||html.includes("external link"));
 assert.ok(html.includes("Search and filters run in your browser."));
 assert.ok(!html.includes("mailto:")&&!html.includes("example.com"));
});
test("Phase 13 styles responsive, readable, keyboard-accessible UI",async()=>{
 const css=await read("styles.css");
 const i18n=await read("i18n.js");
 assert.ok(css.includes(".category-grid"));
 assert.ok(css.includes(".footer-layout"));
 assert.ok(css.includes(".policy-grid"));
 assert.ok(css.includes(":focus-visible"));
 assert.ok(css.includes("prefers-reduced-motion"));
 assert.ok(css.includes("@media(max-width:580px)"));
 assert.ok(i18n.includes('"Privacy notice":"गोपनीयता सूचना"'));
 assert.ok(i18n.includes('Public services.<br><span>Clear paths to the right place.</span>'));
 assert.ok(i18n.includes('const icon=el.querySelector(".stat-icon")'));
});
