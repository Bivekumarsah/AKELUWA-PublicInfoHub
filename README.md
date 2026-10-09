# AKELUWA PublicInfoHub — frontend prototype

A lightweight, responsive standalone prototype with working search, category filters, province selection, service detail dialogs, and outward links to official department homepages.

## Local setup
Download/clone the repo and open index.html in a browser, or run `python -m http.server 8000` and open http://localhost:8000.

## Important limitations
- Sample directory entries only; NOT a verified nationwide government directory.
- Province selection is a demonstration, not a live province-specific data filter.
- There is no backend, user account, admin panel, analytics, or payment processing.
- Official links and procedures must be reverified before production publication.
- Not affiliated with the Government of Nepal.

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

The company's routing is intentionally **disabled** until `PUBLIC_INFO_HUB_ORIGIN` is set. Do not point it back to the company domain, which could cause a rewrite loop. No change to Toolbox is necessary.

The prototype still only includes illustrative service entries; do not treat them as verified application instructions.
