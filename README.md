# mindtosafety

Static website for Mind to Safety with seven training and advisory services, made with HTML, CSS, and a small browser script for the mobile menu. There is no app runtime, package manager, build step, or backend.

## Preview locally

Serve the project root with a basic static-file server, for example `python -m http.server 8765`, then open `http://localhost:8765/`. Use HTTP for preview so the logo's image mask loads correctly.

## Publish on GitHub Pages

In repository settings, choose **Pages → Build and deployment → Source → GitHub Actions**. The workflow in `.github/workflows/static.yml` deploys the repository root on pushes to `main`. After renaming the repository to `mindtosafety`, GitHub changes the default project-site URL to use `/mindtosafety/`; the relative HTML, CSS, JavaScript, and asset links continue to work without a build. If `mindtosafety.se` is configured as a custom Pages domain, its URL stays the same. Domain and DNS settings are separate from the repository rename.

The contact page provides direct email and telephone links. There is no contact form, authentication, database, payment, or API integration in this project.

## Maintain pages and SEO

Each route is a standalone HTML file under its route directory. Keep its title, description, canonical URL, Open Graph values, and sitemap entry aligned when editing routes. Shared visual tokens and responsive styles live in `styles.css`; site imagery and the favicon live in `assets/`. Keep navigation and asset references relative so GitHub Pages project URLs continue to work.

## Change journal

Document changes in Swedish in [ANDRINGSJOURNAL.md](ANDRINGSJOURNAL.md). Keep the customer summary grouped by website section and distinguish prepared changes from confirmed publication.
