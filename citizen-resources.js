// Phase 14: independent, source-linked citizen resource hub.
const civicT=(en,ne)=>uiLanguage==="ne"?ne:en;
function renderCitizenResources(){
 const el=id=>document.getElementById(id);
 const markup={
  citizenHubHeading:["Citizen resources & official links","नागरिक स्रोत तथा आधिकारिक लिङ्क"],
  citizenHubIntro:["Find the right government level, provincial portal and emergency contact. Always verify important information with its original source.","सम्बन्धित सरकारको तह, प्रदेश पोर्टल र आपतकालीन सम्पर्क पत्ता लगाउनुहोस्। महत्त्वपूर्ण जानकारी आधिकारिक स्रोतमा पुष्टि गर्नुहोस्।"],
  hotlineHeading:["Emergency numbers in Nepal","नेपालका आपतकालीन नम्बरहरू"],
  hotlineDescription:["Tap a number to call where your device supports calling. For urgent situations, contact the responsible service directly.","फोन गर्न मिल्ने उपकरणबाट नम्बर थिचेर सम्पर्क गर्नुहोस्। आपतकालमा सम्बन्धित सेवासँग सीधा सम्पर्क गर्नुहोस्।"],
  emergencyDisclaimer:["National short codes may not connect from every device, network or location. Confirm service availability locally.","राष्ट्रिय छोटा नम्बर सबै उपकरण, नेटवर्क वा ठाउँबाट नलाग्न सक्छन्। स्थानीय रूपमा सेवा उपलब्धता पुष्टि गर्नुहोस्।"],
  provGovHeading:["Seven provincial government websites","सातै प्रदेश सरकारका वेबसाइट"],
  provGovDescription:["Official provincial portals or Chief Minister's offices. These are not Lok Sewa application links.","आधिकारिक प्रदेश पोर्टल वा मुख्यमन्त्री कार्यालयका वेबसाइटहरू। यी लोक सेवा आवेदन लिङ्क होइनन्।"],
  guidesHeading:["Where should I start?","कहाँबाट सुरु गर्ने?"],
  guidesDescription:["Practical navigation guides, not guaranteed current fees, document lists or appointment availability.","सामान्य मार्गदर्शन मात्र हो। हालको शुल्क, कागजात वा सेवा समय सुनिश्चित गरिएको छैन।"],
  safetyHeading:["How to check a real government website","वास्तविक सरकारी वेबसाइट कसरी चिन्ने?"],
  safetySource:["Sources are linked on each card. PublicInfoHub is independent and cannot accept applications.","प्रत्येक कार्डमा स्रोत लिङ्क छ। PublicInfoHub स्वतन्त्र निर्देशिका हो, आवेदन स्वीकार गर्दैन।"]
 };
 for(const [id,[en,ne]] of Object.entries(markup))if(el(id))el(id).textContent=civicT(en,ne);
 const safety=civicT(
 ["Read the full website hostname before signing in.","Use links published by the responsible government agency.","Do not share OTPs, passwords or payments with unknown contacts.","Check official rules, fees and deadlines before acting."],
 ["लगइन गर्नुअघि वेबसाइटको पूरा ठेगाना जाँच गर्नुहोस्।","सम्बन्धित सरकारी निकायले दिएको लिङ्क मात्रै प्रयोग गर्नुहोस्।","अपरिचित व्यक्तिलाई OTP, पासवर्ड वा रकम नपठाउनुहोस्।","सेवा लिनुअघि आधिकारिक नियम, शुल्क र म्याद जाँच गर्नुहोस्।"]
 );
 el("safetySteps").innerHTML=safety.map(s=>"<li>"+escapeHtml(s)+"</li>").join("");
 const sourceLabel=civicT("Source ↗","स्रोत ↗");
 el("emergencyGrid").innerHTML=CITIZEN_EMERGENCY.map(item=>'<article class="civic-card emergency-card"><span class="civic-emoji" aria-hidden="true">'+item.icon+'</span><h4>'+escapeHtml(civicT(item.name,item.ne))+'</h4><a class="civic-call" href="tel:'+item.number+'" aria-label="'+escapeHtml(civicT("Call ","फोन गर्नुहोस् ")+item.name+" "+item.number)+'">'+uiDigits(item.number)+'</a><a class="civic-source" target="_blank" rel="noopener noreferrer" href="'+escapeHtml(item.source)+'">'+sourceLabel+'</a></article>').join("");
 el("provGovGrid").innerHTML=PROVINCIAL_GOVERNMENT.map(item=>'<article class="civic-card"><span class="civic-emoji" aria-hidden="true">🏛️</span><h4>'+escapeHtml(uiProvince(item.province))+'</h4><p>'+escapeHtml(civicT(item.label,item.label==="Provincial government portal"?"प्रदेश सरकारको पोर्टल":"मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय"))+'</p><a class="civic-go" target="_blank" rel="noopener noreferrer" href="'+escapeHtml(item.url)+'">'+escapeHtml(civicT("Open official website ↗","आधिकारिक वेबसाइट ↗"))+'</a><small>'+escapeHtml(new URL(item.url).hostname)+'</small></article>').join("");
 el("citizenGuides").innerHTML=CITIZEN_GUIDES.map(item=>'<article class="civic-card guide-card"><h4>'+escapeHtml(civicT(item.name,item.ne))+'</h4><span class="tag">'+escapeHtml(civicT(item.level,item.levelNe))+'</span><p>'+escapeHtml(civicT(item.desc,item.descNe))+'</p><a class="civic-go" href="'+escapeHtml(item.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(civicT("Visit responsible authority ↗","सम्बन्धित निकाय हेर्नुहोस् ↗"))+'</a><small>'+escapeHtml(new URL(item.url).hostname)+'</small></article>').join("");
 const footer=document.querySelector('.footer-links:nth-child(2) a[href="#citizen-resources"]');
 if(footer)footer.textContent=civicT("Citizen resources","नागरिक स्रोतहरू");
}
document.addEventListener("DOMContentLoaded",()=>{
 renderCitizenResources();
 document.getElementById("langSwitch").addEventListener("click",renderCitizenResources);
});
