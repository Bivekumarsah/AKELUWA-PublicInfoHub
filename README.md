# AKELUWA PublicInfoHub — geographic directory beta

A lightweight standalone geographic directory with seven provinces, 77 districts, searchable names, sample service filters, service detail dialogs and links to government department homepages.

## PublicInfoHub branding

The responsive navigation header displays `assets/publicinfohub-logo.webp`, resized directly from the user's approved blue-A-and-globe artwork. The browser favicon at `assets/publicinfohub-favicon.webp` uses the **same exact design**, resized for a tab icon (no substituted information emblem). Both are self-hosted in the PublicInfoHub repository and work through the `/publicinfohub/` nested route; they do not affect the main AKELUWA company logo or AKELUWA Toolbox. Because these are compact web assets, retain the original high-resolution master image for future marketing and print design.

## Local setup
Download/clone the repo and open index.html in a browser, or run `python -m http.server 8000` and open http://localhost:8000.

## Important limitations
- Sample directory entries only; NOT a verified nationwide government directory.
- Province selection now displays the 77-district geographic index; no district-level office/service records have been verified or added.
- Province/district choice does NOT imply the sample nationwide services are available locally.
- There is no backend, user account, admin panel, analytics, or payment processing.
- Official links and procedures must be reverified before production publication.
- Not affiliated with the Government of Nepal.

## Phase 2 verification
- Geographic labels are indexed in `data.js`. Names can have transliteration variants; treat this as a navigation index, not a certified administrative register.
- Cross-check province names with the [Nepal Tourism Board](https://ntb.gov.np/en/provinces), district names with the [Election Commission](https://election.gov.np/en/election-offices) and the [Nepal Law Commission](https://repository.lawcommission.gov.np/).
- Run `node --test tests/*.test.mjs` to validate dataset counts and basic static delivery configuration.
- PublicInfoHub is still independent from the Government of Nepal. The existing six services are general references only, and official sites must be checked for current procedures.

## Phase 3: First source-backed federal departments\nFive initial federal government department homepages were checked on 2026-10-09 and recorded in `offices.js`: Department of Passports, Inland Revenue Department, Office of Company Registrar, Department of Transport Management, and Department of National ID and Civil Registration. Each record contains its official source URL, a check date, a headquarters location, and a narrow `homepage-verified` status.\n\nVerification here means only that the homepage represented the listed government organization at review time. It does **not** certify current procedures, local service provision, fees, appointments, or contact details. The initial five Phase 3 office records were federal headquarters in Kathmandu; Phase 4 adds three municipal administrations and two more federal departments. The directory does **not** enumerate all municipal governments or field offices.\n\nThe office section is independently searchable using the office name, Nepali name, category and location. Run `node --test tests/*.test.mjs` for tests. To add records, manually check the first-party government website and provide a new source URL and genuine review date. Do not invent field offices to populate geographic filters.\n\n## Phase 4: Local-government directory starter set

The office index now contains 10 organizations: seven federal departments and **three source-checked municipal government websites** in Bagmati Province: [Kathmandu Metropolitan City](https://kathmandu.gov.np/), [Lalitpur Metropolitan City](https://lmc.gov.np/en/), and [Bhaktapur Municipality](https://bhaktapurmun.gov.np/en). The two new federal departments are [Department of Survey](https://dos.gov.np/contact-us/) and [Department of Land Management and Archive](https://www.dolrm.gov.np/). Sources were reviewed on 2026-10-09.

The directory can filter headquarters by Kathmandu, Lalitpur or Bhaktapur district and by Federal/Local level. These **headquarters filters are separate** from province/district browsing: selecting a district in the geography navigator does not assert which government services are available there. `homepage-verified` only means the organization and its official homepage were checked. Do not publish application fees, hours, direct contacts, ward-level services or sub-offices without further verification.

## Phase 5: All-seven-province starter coverage

Six additional local-government websites have been checked against their first-party government homepages (2026-10-09), bringing the office index to **16 organization records: seven federal and nine local**, with at least one local government in each of Nepal's seven provinces.

| Province | Local government added | Official source |
| --- | --- | --- |
| Koshi | Biratnagar Metropolitan City | https://biratnagarmun.gov.np/en |
| Madhesh | Janakpurdham Sub-Metropolitan City | https://janakpurmun.gov.np/en |
| Gandaki | Pokhara Metropolitan City | https://pokharamun.gov.np/ |
| Lumbini | Butwal Sub-Metropolitan City | https://butwalmun.gov.np/ |
| Karnali | Birendranagar Municipality | https://birendranagarmun.gov.np/en |
| Sudurpashchim | Dhangadhi Sub-Metropolitan City | https://dhangadhimun.gov.np/ |

Bagmati already has three local-government entries from Phase 4. Office filters for province and headquarters district are now generated from actual records, rather than a fixed list. A bug where office search listeners only initialized after closing a service modal was also fixed.

**Limit:** one record in a province does not establish a complete municipal roster, verified service availability, or the total number of local governments listed. Government procedures, fees, ward offices and contacts require further fact-checking. Existing federal headquarters remain indexed in Bagmati only.

## Phase 6: Seven additional municipal official-source links

Phase 6 adds seven local governments to the source-backed directory, bringing the index to **23 organizations: 16 local governments and 7 federal departments**. This remains a curated *subset*, not a directory of all 753 local governments. Each entry includes a government homepage/source and a dated review (2026-10-09).

| Province | New organization | First-party government source |
| --- | --- | --- |
| Koshi | Itahari Sub-Metropolitan City (Sunsari) | https://www.itaharimun.gov.np/en/node/32 |
| Madhesh | Birgunj Metropolitan City (Parsa) | https://www.birgunjmun.gov.np/en |
| Bagmati | Bharatpur Metropolitan City (Chitwan) | https://bharatpurmun.gov.np/en |
| Bagmati | Hetauda Sub-Metropolitan City (Makwanpur) | https://hetaudamun.gov.np/en |
| Gandaki | Gorkha Municipality (Gorkha) | https://gorkhamun.gov.np/en |
| Lumbini | Ghorahi Sub-Metropolitan City (Dang) | https://www.ghorahimun.gov.np/en/content/welcome-official-website-ghorahi-sub-metropolitan-city |
| Sudurpashchim | Tikapur Municipality (Kailali) | https://tikapurmun.gov.np/en |

The office index now reports the actual number of records and provides a reset control for government-office filters. It does not claim that these sites provide every service, fee, application requirement, or ward-level contact. The offices' listed headquarters district is **not** a service-availability filter.

## Phase 7: Mobile navigation and search experience

- Adds a keyboard-accessible mobile menu with proper expanded state, dismissal when a link is selected, outside-click dismissal and Escape support.
- Adds a visible-on-focus **Skip to main content** link and clearly labeled search landmarks.
- Homepage search now routes results to the most relevant service, district or government-office section; office-only searches also prefill the office-specific search.
- The Government Offices category card now navigates to the real office directory, instead of presenting it as a sample service category.
- Improves touch-target sizes, responsive office filter layout, service cards, reduced-motion behavior and focus visibility.
- Does not change the 23 government office records, their verification scope or the existing government disclaimer.

**Manual preview checks:** test header navigation on a small screen, close it with Escape and with a selected link, search for `passport`, `Kathmandu`, and `Biratnagar`, then confirm old category filters, province browsing, office search and modal controls still work.

## Phase 8: Five more source-checked municipal homepages and district-to-office discovery

Adds five independently checked municipal government homepages, for **28 indexed organization records** (21 local governments; 7 federal departments):

| Office | Province | District | Official first-party source |
| --- | --- | --- | --- |
| Dharan Sub-Metropolitan City | Koshi | Sunsari | https://www.dharan.gov.np/en |
| Damak Municipality | Koshi | Jhapa | https://www.damakmun.gov.np/en |
| Dhulikhel Municipality | Bagmati | Kavrepalanchok | https://www.dhulikhelmun.gov.np/en |
| Banepa Municipality | Bagmati | Kavrepalanchok | https://www.banepamun.gov.np/en |
| Nepalgunj Sub-Metropolitan City | Lumbini | Banke | https://www.nepalgunjmun.gov.np/en |

All five were checked on **2026-10-09** for government identity and official homepage only; current appointments, fees, eligibility, ward services and uptime are **not** verified.

The provinces/districts section now explains how many **listed local-government homepages** match a selected district and shows a **View listed local government offices** action only if a corresponding source-backed record exists. The action opens the offices section and selects **Local** government level, province and district. Districts without a current record display an honest incomplete-coverage message, not a claim that an office does not exist.

Preview checks before merging: select Bagmati → Kavrepalanchok (2 listed offices), Koshi → Sunsari (2 listed offices), Lumbini → Banke (1 listed office), and a district without indexed offices (no action). Verify reset controls, independent office filters, logo/favicon and mobile layout. This release does not change the main company repository or Toolbox.

## Phase 9: English and Nepali interface

A visible `नेपाली / English` toggle updates the interface language **without refreshing the page**. The header, navigation, search instructions, category cards, province names, district counts, office filters, result summaries, sample service cards, dialogs, and independence/verification disclaimer have Nepali UI strings. `<html lang>` and accessible form names update on switch.

Canonical directory filters still use unchanged English keys, and government offices retain their source-provided English and Nepali names, original government links and 2026-10-09 homepage-check records. This is a **first-pass interface translation**, not a legal/official translation of government application procedures. District names, some office addresses and underlying source-provided data can remain in English; government instructions must be checked on the official sites.

Manual QA before merge: toggle language both ways on desktop/mobile; open Passport details; try Nepali text in search; change office province and district filters *before and after switching*; test reset, modal accessibility and mobile menu; confirm all existing verified links and disclaimer remain present.

## Next steps
Add verified government source data, a persistent database, administration workflows, Nepali translations, accessible routing and SEO pages.

## Deploy under the existing company domain

The standalone Vercel deployment supports both the root of its own deployment and `/publicinfohub/`. `vercel.json` rewrites nested paths to static files such as `index.html`, `styles.css`, `data.js`, `offices.js`, and `app.js`.

1. Import this repository into Vercel as a separate project. Choose **Other** for Framework Preset, and leave the build command empty. Ensure the output directory is the repository root (do not select a subdirectory).
2. Confirm these URLs work on the PublicInfoHub Vercel deployment:
   - `https://<your-publicinfohub-project>.vercel.app/publicinfohub/`
   - `https://<your-publicinfohub-project>.vercel.app/publicinfohub/styles.css`
   - `https://<your-publicinfohub-project>.vercel.app/publicinfohub/app.js`
3. In the **AKELUWA-SH-Full-Stack** Vercel project, create the environment variable `PUBLIC_INFO_HUB_ORIGIN=https://<your-publicinfohub-project>.vercel.app` (without a trailing slash). Set it for Production; optionally Preview and Development if useful.
4. Redeploy the company website so Next.js reads the variable at build time.
5. Verify `https://www.akeluwasoftwarehub.com.np/publicinfohub/` as well as existing `/akeluwatoolbox/` pages.

The current company integration uses a dedicated proxy route and defaults to `https://publicinfohub.vercel.app` when `PUBLIC_INFO_HUB_ORIGIN` is not set. Do not point the origin back to the company domain, which could create a loop. No change to Toolbox is necessary.

The site still only includes illustrative service entries; do not treat them as verified application instructions.
