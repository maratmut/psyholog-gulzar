# React and Vite migration

**Goal:** Preserve the approved website's appearance, copy, assets, links and interactions while moving its rendering and UI state to React.

**Architecture:** Section components in `src/components/`, React menu and image dialog state, unchanged CSS in `src/styles.css`. Vite serves assets from `public/` and creates a deployable `dist/` directory.

- [x] Capture the current page structure, text, styles, assets and desktop/mobile geometry as a comparison baseline.
- [x] Add a regression check and confirm that the missing React implementation fails it.
- [x] Convert the existing markup to JSX section components, retain exact whitespace and attributes, and implement menu/gallery state with React.
- [x] Build with Vite, update run/deployment instructions, and retire the former entry script and server.
- [x] Compare the rendered markup, text, styles and assets to the baseline; verify browser interactions and responsive geometry.
- [ ] Commit and push the verified migration to the existing GitHub repository.
