# AKELUWA PublicInfoHub — geographic directory beta

A lightweight standalone geographic directory with seven provinces, 77 districts, searchable names, sample service filters, service detail dialogs and links to government department homepages.

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

## Next steps
Add verified government source data, a persistent database, administration workflows, Nepali translations, accessible routing and SEO pages.

## Deploy under the existing company domain

The standalone Vercel deployment supports both the root of its own deployment and the nested path `/publicinfohub/`. The new `vercel.json` rewrites nested paths to the existing `index.html`, `styles.css`, and `app.js`.

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
