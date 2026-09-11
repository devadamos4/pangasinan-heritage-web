Project Title: Pangasinan Heritage Web
Student Name: [Adamos, Ma. Daniela Joy A. Adamos]
Selected Framework: React (Vite)

Live Website:

[GitHub Pages URL]

## About

A single-page, smooth-scrolling React tourism site introducing three of Pangasinan's most
visited landmarks: **Hundred Islands National Park**, the **Minor Basilica of Our Lady of the
Rosary of Manaoag**, and **Cape Bolinao Lighthouse**.

## Pages / sections

The site scrolls continuously through four "pages," reached via the sticky nav or the
in-page "Discover More" / "Back to Destinations" buttons:

1. **Home** (`#home`) — hero, intro to Pangasinan, featured destination cards (`#destinations`)
2. **Hundred Islands National Park** (`#hundred-islands`) — famous for, location, description, activities, why visit
3. **Manaoag Basilica** (`#manaoag`) — famous for, location, description, highlights, why visit
4. **Cape Bolinao Lighthouse** (`#cape-bolinao`) — famous for, location, description, highlights, "Experience Cape Bolinao," why visit

A short **About** section and footer close out the page.

## Requirements

| Tool | Version | Check with |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18.x or newer (20 LTS recommended) | `node -v` |
| npm | 9.x or newer (comes with Node.js) | `npm -v` |
| [VS Code](https://code.visualstudio.com/) | any recent version | — |

No API keys or paid services needed — everything runs locally. An internet connection is
needed at runtime only to load the destination photos (served from Wikimedia Commons) and the
Google Fonts used for headings/body text.

## Running it in VS Code

1. **Unzip** the project, then in VS Code: `File → Open Folder…` and select it.
2. **Open a terminal:** `` Terminal → New Terminal `` (or `` Ctrl+` ``).
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. Open the printed local URL (typically `http://localhost:5173`) in your browser. Edits to
   any file in `src/` hot-reload instantly.

### Other commands

```bash
npm run build      # production build, output in dist/
npm run preview    # preview the production build locally
```

## Project structure

```
pangasinan-heritage-web/
├── index.html                 # fonts + page title/meta description
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # assembles Navbar + all sections + Footer
│   ├── index.css                # design tokens, layout utilities, scroll-reveal animation
│   ├── data/
│   │   └── destinations.js      # all destination copy + Wikimedia image URLs, single source of truth
│   ├── components/
│   │   ├── Navbar.jsx / .css     # sticky nav, scroll-spy active link, mobile hamburger
│   │   ├── Footer.jsx / .css
│   │   ├── Reveal.jsx            # IntersectionObserver fade/slide-up wrapper (used everywhere)
│   │   ├── SectionHero.jsx / .css   # full-width hero banner per destination
│   │   ├── FactStrip.jsx / .css     # "Famous For" / "Location" band
│   │   ├── DestinationCard.jsx / .css  # featured destination cards (Home)
│   │   └── InfoCard.jsx / .css      # activity / highlight icon cards
│   └── sections/
│       ├── Home.jsx / .css
│       ├── HundredIslands.jsx
│       ├── Manaoag.jsx
│       ├── CapeBolinao.jsx
│       ├── DestinationSection.css   # shared styles for the three destination sections
│       └── About.jsx / .css
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the
site with Vite and publishes `dist/` to GitHub Pages automatically on every push to `main`.

1. Push the repo to GitHub under the name **pangasinan-heritage-web** (the build's `base` path
   in `vite.config.js` is set to `/pangasinan-heritage-web/` to match).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. The live URL will be
   `https://<your-github-username>.github.io/pangasinan-heritage-web/`.

If you rename the repo, update the `base` value in `vite.config.js` to match.

## Tech stack

- **React 18** with functional components + hooks (`useState`, `useEffect`, `useRef`)
- **Vite** as the dev server / build tool
- Plain CSS with custom properties — no CSS framework
- `IntersectionObserver`-based scroll-reveal animation (`Reveal.jsx`), used instead of a
  third-party animation library to keep the project lightweight
- Destination photos load from Wikimedia Commons (Creative Commons–licensed); swap any URL in
  `src/data/destinations.js` to use your own images instead
