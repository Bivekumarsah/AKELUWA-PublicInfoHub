const services=[
{id:"passport",name:"Passport Information",category:"Identity",icon:"🛂",desc:"Find passport application guidance and the responsible government department.",agency:"Department of Passports",url:"https://nepalpassport.gov.np/",scope:"Federal"},
{id:"pan",name:"PAN Registration",category:"Tax",icon:"🧾",desc:"Find information about Personal and Business Permanent Account Numbers.",agency:"Inland Revenue Department",url:"https://ird.gov.np/",scope:"Federal"},
{id:"company",name:"Company Registration",category:"Business",icon:"🏢",desc:"Find official company registration information and requirements.",agency:"Office of Company Registrar",url:"https://ocr.gov.np/",scope:"Federal"},
{id:"license",name:"Driving License",category:"Transport",icon:"🚗",desc:"Find driving license information. Available offices and processes can vary by province.",agency:"Department of Transport Management",url:"https://dotm.gov.np/",scope:"Provincial"},
{id:"nid",name:"National Identity Card",category:"Identity",icon:"🪪",desc:"Find official information about national identity card services.",agency:"Department of National ID and Civil Registration",url:"https://donidcr.gov.np/",scope:"Federal"},
{id:"birth",name:"Birth Registration",category:"Civil Registration",icon:"👶",desc:"Learn where to start with civil registration through local government.",agency:"Local Government / DONIDCR",url:"https://donidcr.gov.np/",scope:"Local"}
];
let query = "", category = "All", province = "", district = "";
const $ = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
})[char]);
const regionFor = name => NEPAL_REGIONS.find(region => region.name === name);
const searchText = item => [item.name,item.desc,item.agency,item.category,item.scope].join(" ").toLowerCase();
const renderButton = (label, type, active) =>
  '<button type="button" class="'+type+(active?' active':'')+'" data-'+type+'="'+escapeHtml(label)+'" aria-pressed="'+active+'">'+escapeHtml(label)+'</button>';

function renderRegions() {
  $("provinces").innerHTML = NEPAL_REGIONS.map(region =>
    '<button type="button" class="province'+(region.name===province?' active':'')+'" data-province="'+escapeHtml(region.name)+'" aria-pressed="'+(region.name===province)+'"><span>'+escapeHtml(region.name)+'</span><span>'+region.districts.length+' districts →</span></button>'
  ).join("");
  const selected=regionFor(province);
  const visible=selected ? selected.districts.filter(name=>name.toLowerCase().includes(query)) :
    query ? NEPAL_REGIONS.flatMap(region=>region.districts.map(name=>({name,region:region.name}))).filter(item=>item.name.toLowerCase().includes(query)||item.region.toLowerCase().includes(query)) : [];
  if(selected){
    $("provinceMessage").textContent=province+" Province • "+selected.districts.length+" districts";
  } else if(query && visible.length) {
    $("provinceMessage").textContent="District matches across Nepal. Select a province to browse its districts.";
  } else {
    $("provinceMessage").textContent="Select a province to browse its districts.";
  }
  $("districts").innerHTML=(selected ? visible.map(name=>({name,region:province})):visible).map(item=>
    '<button type="button" class="district'+(item.name===district&&item.region===province?' active':'')+'" data-district="'+escapeHtml(item.name)+'" data-region="'+escapeHtml(item.region)+'" aria-pressed="'+(item.name===district&&item.region===province)+'">'+escapeHtml(item.name)+(selected?'':' <small>'+escapeHtml(item.region)+'</small>')+'</button>'
  ).join("");
  const label=district ? district+", "+province+": local office listings are being verified. Please use the responsible government website for current services." :
    selected ? "District names only — local government offices and application procedures have not been verified yet." :
    query && !visible.length ? "No matching districts. Try another search term." : "";
  $("districtMessage").textContent=label;
  document.querySelectorAll("[data-province]").forEach(btn=>btn.addEventListener("click",()=>{
    province=province===btn.dataset.province?"":btn.dataset.province;district="";render();
  }));
  document.querySelectorAll("[data-district]").forEach(btn=>btn.addEventListener("click",()=>{
    province=btn.dataset.region;
    district=district===btn.dataset.district?"":btn.dataset.district;
    render();
  }));
}
function render() {
  const cats=["All",...new Set(services.map(s=>s.category))];
  $("filters").innerHTML=cats.map(cat=>renderButton(cat,"filter",category===cat)).join("");
  document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    category=btn.dataset.filter;render();
  }));
  const matches=services.filter(item=>(category==="All"||item.category===category)&&(!query||searchText(item).includes(query)));
  $("serviceGrid").innerHTML=matches.length ? matches.map(item=>
    '<button type="button" class="card service" data-service="'+escapeHtml(item.id)+'"><div class="symbol">'+escapeHtml(item.icon)+'</div><span class="tag">'+escapeHtml(item.category)+'</span><h3>'+escapeHtml(item.name)+'</h3><p>'+escapeHtml(item.desc)+'</p><footer>View service details →</footer></button>'
  ).join("") : '<div class="empty">No matching example services. Search for a different service, or browse the district index.</div>';
  document.querySelectorAll("[data-service]").forEach(btn=>btn.addEventListener("click",()=>showService(btn.dataset.service)));
  $("resultCount").textContent=matches.length+" sample service"+(matches.length===1?"":"s")+" • These are national references, not district-specific office listings.";
  renderRegions();
}

function renderOffices() {
  const officeQuery = $("officeSearch").value.trim().toLocaleLowerCase();
  const officeCategory = $("officeCategory").value;
  const matches = GOVERNMENT_OFFICES.filter(office =>
    (officeCategory === "All" || office.category === officeCategory) &&
    (!officeQuery || [office.name, office.nameNe, office.category, office.city, office.province, office.district, office.description]
      .join(" ").toLocaleLowerCase().includes(officeQuery))
  );
  $("officeCount").textContent = matches.length + " verified department homepage" + (matches.length === 1 ? "" : "s") + " found";
  $("officeGrid").innerHTML = matches.length ? matches.map(office =>
    '<article class="card office-card"><div class="office-meta"><span class="tag">' + escapeHtml(office.category) +
    '</span><span class="verified-label">Official homepage checked</span></div><h3>' + escapeHtml(office.name) +
    '</h3><p class="office-ne">' + escapeHtml(office.nameNe) +
    '</p><p>' + escapeHtml(office.description) +
    '</p><p><strong>Headquarters:</strong> ' + escapeHtml(office.city) +
    '</p><p><strong>Last checked:</strong> ' + escapeHtml(office.checkedOn) +
    '</p><a class="office-link" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(office.website) +
    '">Open official department website ↗</a><p class="office-source">Source: <a target="_blank" rel="noopener noreferrer" href="' +
    escapeHtml(office.sourceUrl) + '">' + escapeHtml(new URL(office.sourceUrl).hostname) + '</a></p></article>'
  ).join("") : '<p class="empty">No matching verified department homepages. Try another name or category.</p>';
}

let previousFocus=null;
function showService(id) {
  const item=services.find(s=>s.id===id);
  if(!item)return;
  previousFocus=document.activeElement;
  const detail=$("detail");
  detail.innerHTML='<button type="button" class="close" id="closeDetail" aria-label="Close service details">✕</button>'+
    '<div class="symbol">'+escapeHtml(item.icon)+'</div><span class="tag">'+escapeHtml(item.category)+'</span><h2 id="dialogTitle">'+escapeHtml(item.name)+'</h2>'+
    '<p class="muted">'+escapeHtml(item.desc)+'</p><p><strong>Responsible organization:</strong> '+escapeHtml(item.agency)+'</p>'+
    '<p><strong>Scope:</strong> '+escapeHtml(item.scope)+'</p><p><strong>Source:</strong> Department homepage; confirm current procedures on the official site.</p>'+
    '<p><a href="'+escapeHtml(item.url)+'" target="_blank" rel="noopener noreferrer">Open government website ↗</a></p>'+
    '<p class="muted">Fees, requirements, deadlines and processing times are not verified here.</p>';
  $("modal").classList.add("show");
  $("modal").setAttribute("aria-hidden","false");
  $("closeDetail").addEventListener("click",closeModal);
  $("closeDetail").focus();
}
function closeModal() {
  if(!$("modal").classList.contains("show"))return;
  $("modal").classList.remove("show");
  $("officeSearch").addEventListener("input", renderOffices);
  $("officeCategory").addEventListener("change", renderOffices);
  renderOffices();
  $("modal").setAttribute("aria-hidden","true");
  if(previousFocus&&typeof previousFocus.focus==="function")previousFocus.focus();
}
document.addEventListener("DOMContentLoaded",()=>{
  $("modal").setAttribute("aria-hidden","true");
  $("modal").setAttribute("aria-labelledby","dialogTitle");
  $("searchForm").addEventListener("submit",event=>{
    event.preventDefault();query=$("searchInput").value.trim().toLowerCase();render();
    const districtMatches=NEPAL_REGIONS.some(region=>region.name.toLowerCase().includes(query)||region.districts.some(d=>d.toLowerCase().includes(query)));
    $(districtMatches?"provinces-section":"services").scrollIntoView({behavior:"smooth"});
  });
  $("clearFilters").addEventListener("click",()=>{
    query="";category="All";province="";district="";$("searchInput").value="";render();
  });
  document.querySelectorAll("#categories .card").forEach((card,index)=>{
    card.addEventListener("click",event=>{
      event.preventDefault();
      category=[ "All","Identity","Business","Transport" ][index];
      render();$("services").scrollIntoView({behavior:"smooth"});
    });
  });
  $("modal").addEventListener("click",event=>{if(event.target===$("modal"))closeModal()});
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape")closeModal();
    if(event.key==="Tab"&&$("modal").classList.contains("show")){
      const focusables=[...$("detail").querySelectorAll("button,a[href]")];
      const first=focusables[0],last=focusables[focusables.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
  });
  render();
});
