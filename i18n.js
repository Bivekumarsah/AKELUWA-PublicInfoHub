// Client-side interface translation; records, URLs and source attestations remain unchanged.
const UI_LANGUAGES = Object.freeze(["en", "ne"]);
const UI_WORDS = {
  ne: {
    "Categories":"वर्गहरू","Provinces":"प्रदेशहरू","Services":"सेवाहरू","Offices":"कार्यालयहरू","About":"हाम्रो बारेमा",
    "Explore services ↗":"सेवाहरू हेर्नुहोस् ↗","Menu":"मेनु","Independent public information directory • Nepal":"स्वतन्त्र सार्वजनिक सूचना निर्देशिका • नेपाल",
    "Public services.":"सार्वजनिक सेवाहरू.","One place to start.":"सुरु गर्ने एउटै ठाउँ.",
    "Explore Nepal government departments, service information, and official website links through a simple, accessible directory built by AKELUWA Softwarehub.":"AKELUWA Softwarehub को सरल निर्देशिकाबाट नेपालका सरकारी विभाग, सेवा जानकारी र आधिकारिक वेबसाइटका लिङ्क खोज्नुहोस्।",
    "Search →":"खोज्नुहोस् →","Provinces":"प्रदेशहरू","Districts nationwide":"देशभरका जिल्ला","Local governments":"स्थानीय तह",
    "Explore by category":"वर्गअनुसार खोज्नुहोस्","Discover relevant public resources without searching multiple websites.":"धेरै वेबसाइट नखोली सार्वजनिक स्रोतहरू पत्ता लगाउनुहोस्।",
    "Government Offices":"सरकारी कार्यालयहरू","Ministries and departments":"मन्त्रालय तथा विभागहरू","Identity & Documents":"परिचयपत्र तथा कागजात","Passport, identity, registration":"राहदानी, परिचयपत्र र दर्ता",
    "Business & Tax":"व्यवसाय तथा कर","Company and PAN services":"कम्पनी र स्थायी लेखा नम्बर सेवा","Transport Services":"यातायात सेवाहरू","Licensing and transport":"सवारी अनुमति तथा यातायात",
    "Explore Nepal's provinces":"नेपालका प्रदेशहरू हेर्नुहोस्",
    "Choose a province and district to browse our partial directory of checked local-government websites. Not every district has an indexed office.":"जाँच गरिएका स्थानीय सरकारका वेबसाइट हेर्न प्रदेश र जिल्ला छान्नुहोस्। यो अपूर्ण सूची हो; सबै जिल्लाका कार्यालय समेटिएका छैनन्।",
    "Select a province to view its districts.":"जिल्ला हेर्न प्रदेश छान्नुहोस्।",
    "Discover public services":"सार्वजनिक सेवाहरू खोज्नुहोस्","Browse example service entries":"नमुना सेवा विवरण हेर्नुहोस्","Clear search and filters":"खोज र फिल्टर हटाउनुहोस्",
    "Official government offices":"आधिकारिक सरकारी कार्यालयहरू",
    "A source-backed directory of government homepages across all seven provinces. Browse the growing selection of official government websites. Filter by province, office location district, category or government level. Selecting a district shows indexed headquarters there, not every public service available locally.":"सातै प्रदेशका सरकारी वेबसाइटको स्रोतसहितको आंशिक निर्देशिका। प्रदेश, जिल्ला, वर्ग वा सरकारको तहअनुसार फिल्टर गर्नुहोस्। जिल्लाको छनोटले त्यहाँ सूचीकृत कार्यालय मात्र देखाउँछ, सबै सेवा होइन।",
    "Find a government office":"सरकारी कार्यालय खोज्नुहोस्",
    "Reset office filters":"कार्यालय फिल्टर हटाउनुहोस्",
    "Government organization identities and homepage links were checked on 9 October 2026. Fees, documents, appointments and local office availability must be confirmed on the linked government website.":"सरकारी संस्थाको पहिचान र वेबसाइट लिङ्क ९ अक्टोबर २०२६ मा जाँच गरिएको हो। शुल्क, कागजात, समय र सेवा उपलब्धता सम्बन्धित सरकारी वेबसाइटमै पुष्टि गर्नुहोस्।",
    "Independent information platform.":"स्वतन्त्र सूचना मञ्च.",
    "Public information made easier to discover.":"सार्वजनिक जानकारी खोज्न सजिलो।",
    "All":"सबै","Identity":"परिचय","Tax":"कर","Business":"व्यवसाय","Transport":"यातायात","Land":"भूमि","Local Government":"स्थानीय सरकार","Civil Registration":"घटना दर्ता",
    "Federal":"संघीय","Local":"स्थानीय","Provincial":"प्रादेशिक",
    "All categories":"सबै वर्ग","All provinces":"सबै प्रदेश","All headquarters districts":"सबै कार्यालय जिल्ला",
    "All government levels":"सरकारका सबै तह","Federal departments":"संघीय विभागहरू","Local governments":"स्थानीय तह",
    "Official homepage checked":"आधिकारिक वेबसाइट जाँच गरिएको","Location:":"स्थान:","Last checked:":"अन्तिम जाँच:","Source:":"स्रोत:",
    "Open official government website ↗":"आधिकारिक सरकारी वेबसाइट खोल्नुहोस् ↗","View service details →":"सेवाको विवरण हेर्नुहोस् →",
    "No matching organization homepages. Try resetting the office filters.":"मिल्ने कार्यालय वेबसाइट भेटिएन। फिल्टर हटाएर प्रयास गर्नुहोस्।",
    "No matching example services. Search for a different service, or browse the district index.":"मिल्ने नमुना सेवा भेटिएन। अर्को सेवा खोज्नुहोस् वा जिल्लाको सूची हेर्नुहोस्।",
    "Close service details":"सेवा विवरण बन्द गर्नुहोस्","Responsible organization:":"जिम्मेवार संस्था:","Scope:":"कार्यक्षेत्र:","Open government website ↗":"सरकारी वेबसाइट खोल्नुहोस् ↗",
    "Fees, requirements, deadlines and processing times are not verified here.":"शुल्क, आवश्यक कागजात, म्याद र प्रक्रिया समय यहाँ पुष्टि गरिएको छैन।",
    "Passport Information":"राहदानी जानकारी","PAN Registration":"स्थायी लेखा नम्बर (PAN) दर्ता","Company Registration":"कम्पनी दर्ता","Driving License":"सवारी चालक अनुमतिपत्र","National Identity Card":"राष्ट्रिय परिचयपत्र","Birth Registration":"जन्मदर्ता",
    "Department of Passports":"राहदानी विभाग","Inland Revenue Department":"आन्तरिक राजस्व विभाग","Office of Company Registrar":"कम्पनी रजिष्ट्रारको कार्यालय","Department of Transport Management":"यातायात व्यवस्था विभाग","Department of National ID and Civil Registration":"राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभाग",
    "Find passport application guidance and the responsible government department.":"राहदानी आवेदनसम्बन्धी जानकारी र सम्बन्धित सरकारी विभाग खोज्नुहोस्।",
    "Find information about Personal and Business Permanent Account Numbers.":"व्यक्तिगत तथा व्यावसायिक स्थायी लेखा नम्बरबारे जानकारी खोज्नुहोस्।",
    "Find official company registration information and requirements.":"कम्पनी दर्ताको आधिकारिक जानकारी र आवश्यकताहरू खोज्नुहोस्।",
    "Find driving license information. Available offices and processes can vary by province.":"सवारी चालक अनुमतिपत्रको जानकारी खोज्नुहोस्। कार्यालय र प्रक्रिया प्रदेशअनुसार फरक हुन सक्छ।",
    "Find official information about national identity card services.":"राष्ट्रिय परिचयपत्र सेवाबारे आधिकारिक जानकारी खोज्नुहोस्।",
    "Learn where to start with civil registration through local government.":"स्थानीय तहबाट घटना दर्ता कहाँ सुरु गर्ने भन्ने जानकारी लिनुहोस्।"
  }
};
const UI_PROVINCES_NE = Object.freeze({Koshi:"कोशी",Madhesh:"मधेश",Bagmati:"बागमती",Gandaki:"गण्डकी",Lumbini:"लुम्बिनी",Karnali:"कर्णाली",Sudurpashchim:"सुदूरपश्चिम"});
let uiLanguage = "en";
const uiText = (value) => uiLanguage === "ne" ? (UI_WORDS.ne[String(value)] || String(value)) : String(value);
const uiProvince = value => uiLanguage === "ne" ? (UI_PROVINCES_NE[value] || value) : value;
const uiDigits = value => uiLanguage === "ne" ? String(value).replace(/[0-9]/g, n => "०१२३४५६७८९"[Number(n)]) : String(value);
const uiOfficeName = office => uiLanguage === "ne" ? office.nameNe : office.name;
const UI_STATIC = [
  [".skip-link","Skip to main content","मुख्य सामग्रीमा जानुहोस्"],
  [".eyebrow","Independent public information directory • Nepal"],
  [".hero h1",null,"सार्वजनिक सेवाहरू.<br>सुरु गर्ने एउटै ठाउँ."],
  [".hero p","Explore Nepal government departments, service information, and official website links through a simple, accessible directory built by AKELUWA Softwarehub."],
  [".search button","Search →"],
  [".stats > div:nth-child(1)","Provinces",null,true],
  [".stats > div:nth-child(2)","Districts nationwide",null,true],
  [".stats > div:nth-child(3)","Local governments",null,true],
  ["#categories h2","Explore by category"],
  ["#categories .heading p","Discover relevant public resources without searching multiple websites."],
  ["#categories .card:nth-child(1) h3","Government Offices"],
  ["#categories .card:nth-child(1) p","Ministries and departments"],
  ["#categories .card:nth-child(2) h3","Identity & Documents"],
  ["#categories .card:nth-child(2) p","Passport, identity, registration"],
  ["#categories .card:nth-child(3) h3","Business & Tax"],
  ["#categories .card:nth-child(3) p","Company and PAN services"],
  ["#categories .card:nth-child(4) h3","Transport Services"],
  ["#categories .card:nth-child(4) p","Licensing and transport"],
  ["#provinces-section h2","Explore Nepal's provinces"],
  ["#provinces-section .heading p","Choose a province and district to browse our partial directory of checked local-government websites. Not every district has an indexed office."],
  ["#services h2","Discover public services"],
  ["#clearFilters","Clear search and filters"],
  ["#offices h2","Official government offices"],
  ["#offices .heading p","A source-backed directory of government homepages across all seven provinces. Browse the growing selection of official government websites. Filter by province, office location district, category or government level. Selecting a district shows indexed headquarters there, not every public service available locally."],
  [".office-toolbar label","Find a government office"],
  ["#resetOfficeFilters","Reset office filters"],
  [".office-caution","Government organization identities and homepage links were checked on 9 October 2026. Fees, documents, appointments and local office availability must be confirmed on the linked government website."],
  [".bottom p","Public information made easier to discover."]
];
function translateStaticUi() {
  document.documentElement.lang = uiLanguage;
  document.title = uiLanguage === "ne" ? "AKELUWA PublicInfoHub | नेपालका सार्वजनिक सेवा" : "AKELUWA PublicInfoHub | Nepal Public Services";
  for(const [selector, en, ne, preserveStrong] of UI_STATIC) {
    const el = document.querySelector(selector);
    if(!el) continue;
    if(selector === ".hero h1"){el.innerHTML = uiLanguage === "ne" ? ne : "Public services.<br>One place to start.";continue;}
    if(preserveStrong){const strong=el.querySelector("strong");el.replaceChildren(strong,document.createTextNode(uiLanguage === "ne" ? " "+uiText(en) : en));continue;}
    el.textContent = uiLanguage === "ne" && ne ? ne : uiText(en);
  }
  document.querySelectorAll("#primaryNav a").forEach((a,i)=>{a.textContent=uiText(["Categories","Provinces","Services","Offices","About"][i]);});
  const pill=document.querySelector(".nav > .pill"); if(pill) pill.textContent=uiText("Explore services ↗");
  const menu=document.querySelector("#menuToggle span"); if(menu) menu.textContent=uiText("Menu");
  document.querySelector("#searchInput").placeholder = uiLanguage === "ne" ? "राहदानी, PAN, चालक अनुमतिपत्र, काठमाडौँ..." : "Try passport, PAN, driving license, Kathmandu...";
  document.querySelector("#searchInput").setAttribute("aria-label",uiLanguage === "ne" ? "सेवा खोज्नुहोस्" : "Search services");
  document.querySelector("#officeSearch").placeholder = uiLanguage === "ne" ? "कार्यालय, नेपाली नाम, वर्ग वा स्थान खोज्नुहोस्" : "Search office, नेपाली नाम, category or location";
  document.querySelector("#officeSearch").setAttribute("aria-label",uiLanguage === "ne" ? "सरकारी कार्यालय वेबसाइट खोज्नुहोस्" : "Search verified office homepages");
  document.querySelector("#langSwitch").textContent=uiLanguage === "ne" ? "English" : "नेपाली";
  document.querySelector("#langSwitch").lang=uiLanguage === "ne" ? "en" : "ne";
  document.querySelector("#menuToggle").setAttribute("aria-label",uiLanguage === "ne" ? "नेभिगेसन मेनु खोल्नुहोस्" : "Open navigation menu");
  document.querySelector("#langSwitch").setAttribute("aria-label",uiLanguage === "ne" ? "Switch to English" : "नेपाली भाषामा परिवर्तन गर्नुहोस्");
  const labels={officeCategory:"Filter offices by category",officeProvince:"Filter offices by province",officeDistrict:"Filter office headquarters by district",officeLevel:"Filter offices by government level"};
  const nepali={officeCategory:"वर्गअनुसार फिल्टर",officeProvince:"प्रदेशअनुसार फिल्टर",officeDistrict:"जिल्लाअनुसार फिल्टर",officeLevel:"सरकारको तहअनुसार फिल्टर"};
  Object.keys(labels).forEach(id => document.getElementById(id).setAttribute("aria-label",uiLanguage === "ne" ? nepali[id] : labels[id]));
  const notice=document.querySelector("#about .notice");
  if(notice) notice.textContent=uiLanguage === "ne"
    ? "स्वतन्त्र सूचना मञ्च। AKELUWA PublicInfoHub, AKELUWA Softwarehub ले निर्माण गरेको स्वतन्त्र निर्देशिका हो। यो नेपाल सरकारद्वारा सञ्चालित, सम्बद्ध वा अनुमोदित होइन। विवरण र लिङ्क सम्बन्धित सरकारी वेबसाइटमै पुष्टि गर्नुहोस्। भौगोलिक सूची खोजीका लागि मात्र हो। कार्यालयका वेबसाइट जाँच गरिएका भए पनि सेवा प्रक्रिया, शुल्क र उपलब्धता पुष्टि गरिएको छैन।"
    : "Independent information platform. AKELUWA PublicInfoHub is developed by AKELUWA Softwarehub. It is not operated, affiliated with, or endorsed by the Government of Nepal. Details and official links should be verified on the respective government websites. The geographic index is for browsing only; government office records and application guidance require independent source checks. Government organization homepages have been separately checked, but current procedures and service coverage remain unverified.";
}
