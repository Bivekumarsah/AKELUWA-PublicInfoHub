import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {readFile} from "node:fs/promises";
const read=name=>readFile(new URL("../"+name,import.meta.url),"utf8");

test("Sourced emergency contacts have known numbers and legitimate source URLs",async()=>{
 const items=vm.runInNewContext((await read("citizen-resources-data.js"))+"\nCITIZEN_EMERGENCY");
 assert.equal(items.length,4);
 assert.deepEqual(Array.from(items,x=>x.number),["100","101","102","103"]);
 for(const item of items){assert.equal(new URL(item.source).protocol,"https:");assert.ok(item.name&&item.ne);}
});
test("All seven provincial offices link to the expected province's own government subdomain",async()=>{
 const items=vm.runInNewContext((await read("citizen-resources-data.js"))+"\nPROVINCIAL_GOVERNMENT");
 const regions=vm.runInNewContext((await read("data.js"))+"\nNEPAL_REGIONS");
 assert.deepEqual(Array.from(items,x=>x.province).sort(),Array.from(regions,x=>x.name).sort());
 for(const item of items)assert.ok(new URL(item.url).hostname.endsWith(".gov.np"));
});
test("Citizen guidance is independently written, bilingual and source linked",async()=>{
 const data=await read("citizen-resources-data.js");
 const html=await read("index.html");
 const script=await read("citizen-resources.js");
 const styles=await read("styles.css");
 const guides=vm.runInNewContext(data+"\nCITIZEN_GUIDES");
 assert.equal(guides.length,5);
 for(const g of guides){assert.ok(g.name&&g.ne&&g.desc&&g.descNe);assert.ok(new URL(g.url).hostname.endsWith(".gov.np"));}
 for(const id of ["citizen-resources","emergencyGrid","provGovGrid","citizenGuides","safetySteps","quickDistrict"])assert.ok(html.includes('id="'+id+'"'));
 assert.ok(script.includes('href="tel:'));
 assert.ok(script.includes('target="_blank" rel="noopener noreferrer"'));
 assert.ok(script.includes('addEventListener("click",renderCitizenResources)'));
 assert.ok(styles.includes(".emergency-grid"));
 assert.ok(!html.includes('type="password"'));
});
