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
  const localOffices = GOVERNMENT_OFFICES.filter(office => office.level === "Local" && office.province === province && office.district === district);
  const label = district ?
    (localOffices.length ? district + ", " + province + ": " + localOffices.length + " checked local government homepage" + (localOffices.length === 1 ? "" : "s") + " available in our partial directory. Service availability is not verified." :
      district + ", " + province + ": no local government homepages indexed yet. This does not mean there are no government offices in this district.") :
    selected ? "Select a district to find checked local government homepages, where available. Coverage is partial." :
    query && !visible.length ? "No matching districts. Try another search term." : "";
  $("districtMessage").textContent=label;
  const districtOfficeAction = $("districtOfficeAction");
  districtOfficeAction.hidden = !district || localOffices.length === 0;
  districtOfficeAction.textContent = district && localOffices.length ?
    "View " + localOffices.length + " listed local government office" + (localOffices.length === 1 ? "" : "s") + " in " + district + " →" : "";
  document.querySelectorAll("[data-province]").forEach(btn=>btn.addEventListener("click",()=>{
    province=province===btn.dataset.province?"":btn.dataset.province;district="";render();
  }));
  document.querySelectorAll("[data-district]").forEach(btn=>btn.addEventListener("click",()=>{
    province=btn.dataset.region;
    district=district===btn.dataset.district?"":btn.dataset.district;
    render();
  }));
}
function openSelectedDistrictOffices() {
  if (!province || !district) return;
  const matching = GOVERNMENT_OFFICES.some(office => office.level === "Local" && office.province === province && office.district === district);
  if (!matching) return;
  $("officeSearch").value = "";
  $("officeCategory").value = "All";
  $("officeLevel").value = "Local";
  $("officeProvince").value = province;
  $("officeProvince").dispatchEvent(new Event("change"));
  $("officeDistrict").value = district;
  renderOffices();
  $("offices").scrollIntoView({behavior:"smooth"});
  $("officeDistrict").focus({preventScroll:true});
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

function initOfficeFilters() {
  const provinceSelect = $("officeProvince");
  const districtSelect = $("officeDistrict");
  const regionNames = NEPAL_REGIONS.map(region => region.name);
  provinceSelect.innerHTML = '<option value="All">All provinces</option>' + regionNames.map(name =>
    '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + '</option>'
  ).join("");
  const refreshDistrictOptions = () => {
    const selectedProvince = provinceSelect.value;
    const previous = districtSelect.value;
    const districts = [...new Set(GOVERNMENT_OFFICES
      .filter(office => selectedProvince === "All" || office.province === selectedProvince)
      .map(office => office.district))].sort();
    districtSelect.innerHTML = '<option value="All">All headquarters districts</option>' +
      districts.map(name => '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + '</option>').join("");
    districtSelect.value = districts.includes(previous) ? previous : "All";
    renderOffices();
  };
  const localCount = GOVERNMENT_OFFICES.filter(office => office.level === "Local").length;
  const coverageCount = new Set(GOVERNMENT_OFFICES.filter(office => office.level === "Local").map(office => office.province)).size;
  $("officeSummary").textContent = GOVERNMENT_OFFICES.length + " indexed government organization homepages (" + localCount + " local governments, " + (GOVERNMENT_OFFICES.length - localCount) + " federal departments) across " + coverageCount + " provinces. This is a partial directory, not a complete nationwide registry.";
  $("resetOfficeFilters").addEventListener("click", () => {
    $("officeSearch").value = "";
    $("officeCategory").value = "All";
    $("officeLevel").value = "All";
    provinceSelect.value = "All";
    districtSelect.value = "All";
    refreshDistrictOptions();
    $("officeSearch").focus();
  });
  $("officeSearch").addEventListener("input", renderOffices);
  $("officeCategory").addEventListener("change", renderOffices);
  $("officeLevel").addEventListener("change", renderOffices);
  districtSelect.addEventListener("change", renderOffices);
  provinceSelect.addEventListener("change", refreshDistrictOptions);
  refreshDistrictOptions();
}

function renderOffices() {
  const officeQuery = $("officeSearch").value.trim().toLocaleLowerCase();
  const officeCategory = $("officeCategory").value;
  const officeProvince = $("officeProvince").value;
  const officeDistrict = $("officeDistrict").value;
  const officeLevel = $("officeLevel").value;
  const matches = GOVERNMENT_OFFICES.filter(office =>
    (officeCategory === "All" || office.category === officeCategory) &&
    (officeProvince === "All" || office.province === officeProvince) &&
    (officeDistrict === "All" || office.district === officeDistrict) &&
    (officeLevel === "All" || office.level === officeLevel) &&
    (!officeQuery || [office.name, office.nameNe, office.category, office.level, office.city, office.province, office.district, office.description]
      .join(" ").toLocaleLowerCase().includes(officeQuery))
  );
  $("officeCount").textContent = matches.length + " checked government organization homepage" + (matches.length === 1 ? "" : "s") + " found";
  $("officeGrid").innerHTML = matches.length ? matches.map(office =>
    '<article class="card office-card"><div class="office-meta"><span class="tag">' + escapeHtml(office.category) +
    ' · ' + escapeHtml(office.level) + '</span><span class="verified-label">Official homepage checked</span></div><h3>' + escapeHtml(office.name) +
    '</h3><p class="office-ne">' + escapeHtml(office.nameNe) +
    '</p><p>' + escapeHtml(office.description) +
    '</p><p><strong>Location:</strong> ' + escapeHtml(office.city) + ', ' + escapeHtml(office.province) + ' Province' +
    '</p><p><strong>Last checked:</strong> ' + escapeHtml(office.checkedOn) +
    '</p><a class="office-link" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(office.website) +
    '">Open official government website ↗</a><p class="office-source">Source: <a target="_blank" rel="noopener noreferrer" href="' +
    escapeHtml(office.sourceUrl) + '">' + escapeHtml(new URL(office.sourceUrl).hostname) + '</a></p></article>'
  ).join("") : '<p class="empty">No matching organization homepages. Try resetting the office filters.</p>';
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
  $("modal").setAttribute("aria-hidden","true");
  if(previousFocus&&typeof previousFocus.focus==="function")previousFocus.focus();
}
document.addEventListener("DOMContentLoaded",()=>{
  $("districtOfficeAction").addEventListener("click", openSelectedDistrictOffices);
  const menuToggle = $("menuToggle");
  const primaryNav = $("primaryNav");
  function closeMenu() {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
  menuToggle.addEventListener("click", () => {
    const opened = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "Close navigation menu" : "Open navigation menu");
  });
  primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("click", event => {
    if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  initOfficeFilters();
  $("modal").setAttribute("aria-hidden","true");
  $("modal").setAttribute("aria-labelledby","dialogTitle");
  $("searchForm").addEventListener("submit",event=>{
    event.preventDefault();query=$("searchInput").value.trim().toLowerCase();render();
    const districtMatches=NEPAL_REGIONS.some(region=>region.name.toLowerCase().includes(query)||region.districts.some(d=>d.toLowerCase().includes(query)));
    const serviceMatches=services.some(item=>searchText(item).includes(query));
    const officeMatches=GOVERNMENT_OFFICES.some(item=>[item.name,item.nameNe,item.city,item.province,item.district,item.category].join(" ").toLocaleLowerCase().includes(query));
    if(officeMatches && !serviceMatches && !districtMatches) {
      $("officeSearch").value=$("searchInput").value.trim();
      renderOffices();
    }
    $(districtMatches?"provinces-section":serviceMatches?"services":officeMatches?"offices":"services").scrollIntoView({behavior:"smooth"});
  });
  $("clearFilters").addEventListener("click",()=>{
    query="";category="All";province="";district="";$("searchInput").value="";render();
  });
  document.querySelectorAll("#categories .card").forEach((card,index)=>{
    card.addEventListener("click",event=>{
      event.preventDefault();
      if (index === 0) {
        $("offices").scrollIntoView({behavior:"smooth"});
        $("officeSearch").focus({preventScroll:true});
        return;
      }
      category=[ "All","Identity","Business","Transport" ][index];
      render();$("services").scrollIntoView({behavior:"smooth"});
    });
  });
  $("modal").addEventListener("click",event=>{if(event.target===$("modal"))closeModal()});
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){closeModal();closeMenu();}
    if(event.key==="Tab"&&$("modal").classList.contains("show")){
      const focusables=[...$("detail").querySelectorAll("button,a[href]")];
      const first=focusables[0],last=focusables[focusables.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
  });
  render();
});
