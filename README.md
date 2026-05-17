# Orbitiy

Modern ERP for schools and colleges — admissions, academics, finance, and communication on one platform.

**Live site:** [https://ketandevra.github.io/orbitiy/](https://ketandevra.github.io/orbitiy/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (GitHub Pages)

```bash
npm run build:pages
```

Static output is written to the `out/` directory. Pushes to `main` deploy automatically via GitHub Actions to the `gh-pages` branch.

### GitHub Pages settings

In **Settings → Pages**, set:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

Do **not** deploy from `main` — that serves this README instead of the built site.
