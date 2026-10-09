// Public information pointers, researched 2026-10-09. Official page != permanent availability.
// Do not expand these curated records by inference from the comparator's directory.
const CITIZEN_EMERGENCY=Object.freeze([
 {id:"police",name:"Police",ne:"नेपाल प्रहरी",number:"100",icon:"🚓",source:"https://nepalpolice.gov.np/stations/emergency-contacts/"},
 {id:"fire",name:"Fire",ne:"दमकल",number:"101",icon:"🚒",source:"https://www.ncell.com.np/en/individual/emergency-services-information"},
 {id:"ambulance",name:"Ambulance",ne:"एम्बुलेन्स",number:"102",icon:"🚑",source:"https://www.ncell.com.np/en/individual/emergency-services-information"},
 {id:"traffic",name:"Traffic Police",ne:"ट्राफिक प्रहरी",number:"103",icon:"🚦",source:"https://traffic.nepalpolice.gov.np/stations/emergency-contacts/"}
]);
const PROVINCIAL_GOVERNMENT=Object.freeze([
 {province:"Koshi",label:"Provincial government portal",url:"https://koshi.gov.np/"},
 {province:"Madhesh",label:"Provincial government portal",url:"https://madhesh.gov.np/"},
 {province:"Bagmati",label:"Office of the Chief Minister and Council of Ministers",url:"https://ocmcm.bagamati.gov.np/"},
 {province:"Gandaki",label:"Office of the Chief Minister and Council of Ministers",url:"https://ocmcm.gandaki.gov.np/"},
 {province:"Lumbini",label:"Office of the Chief Minister and Council of Ministers",url:"https://ocmcm.lumbini.gov.np/"},
 {province:"Karnali",label:"Office of the Chief Minister and Council of Ministers",url:"https://ocmcm.karnali.gov.np/"},
 {province:"Sudurpashchim",label:"Office of the Chief Minister and Council of Ministers",url:"https://ocmcm.sudurpashchim.gov.np/"}
]);
const CITIZEN_GUIDES=Object.freeze([
 {id:"citizenship",name:"Citizenship and local documents",ne:"नागरिकता तथा स्थानीय कागजात",level:"Local / district administration",levelNe:"स्थानीय तह / जिल्ला प्रशासन",desc:"Start with local registration or recommendations if required. Citizenship procedures are handled through the responsible District Administration Office. Follow the official document checklist.",descNe:"आवश्यक परे स्थानीय दर्ता वा सिफारिसबाट सुरु गर्नुहोस्। नागरिकताका लागि सम्बन्धित जिल्ला प्रशासन कार्यालयको आधिकारिक कागजात सूची जाँच गर्नुहोस्।",url:"https://moha.gov.np/"},
 {id:"passport",name:"Passport and e-Passport",ne:"राहदानी तथा ई-पासपोर्ट",level:"Federal",levelNe:"संघीय",desc:"Check the Department of Passports for the correct application process, appointments, documentation and fee before travelling.",descNe:"आवेदन, समय निर्धारण, कागजात र शुल्क सम्बन्धित राहदानी विभागको आधिकारिक साइटमा जाँच गर्नुहोस्।",url:"https://nepalpassport.gov.np/"},
 {id:"pan",name:"PAN and taxpayer services",ne:"प्यान तथा करदाता सेवा",level:"Federal",levelNe:"संघीय",desc:"Consult Inland Revenue Department instructions for personal/business PAN registration and taxpayer services.",descNe:"व्यक्तिगत वा व्यावसायिक प्यान दर्ता तथा करदाता सेवाका लागि आन्तरिक राजस्व विभाग हेर्नुहोस्।",url:"https://ird.gov.np/"},
 {id:"nid",name:"National ID",ne:"राष्ट्रिय परिचयपत्र",level:"Federal / designated centres",levelNe:"संघीय / तोकिएका केन्द्र",desc:"Follow National ID and Civil Registration department instructions for enrolment and any required in-person biometrics.",descNe:"दर्ता तथा आवश्यक बायोमेट्रिक प्रक्रियाका लागि राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभागका निर्देशन हेर्नुहोस्।",url:"https://donidcr.gov.np/"},
 {id:"driving",name:"Driving licence",ne:"सवारी चालक अनुमतिपत्र",level:"Provincial / transport",levelNe:"प्रदेश / यातायात",desc:"Applications, trials and visits may depend on province. Consult the responsible transport authority and official notices.",descNe:"आवेदन, ट्रायल र कार्यालय जानुपर्ने प्रक्रिया प्रदेशअनुसार फरक हुन सक्छ। सम्बन्धित यातायात निकायको सूचना हेर्नुहोस्।",url:"https://dotm.gov.np/"}
]);
