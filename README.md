# GoIT JavaScript Homework 9

A small Vite-powered project for GoIT homework with two interactive pages:
- **Gallery** (`1-gallery.html`) with a lightbox powered by `simplelightbox`
- **Feedback form** (`2-form.html`) with draft autosave using `localStorage`

## Project structure

- `src/index.html` — landing page and navigation
- `src/1-gallery.html` — gallery page with image thumbnails and lightbox previews
- `src/2-form.html` — feedback form page with state persistence
- `src/css/` — stylesheet files
- `src/js/1-gallery.js` — gallery rendering and SimpleLightbox initialization
- `src/js/2-form.js` — form state storage and submit handling
- `src/img/` — local image assets and logo

## Features

- Responsive gallery with clickable thumbnails
- Lightbox captions and image previews
- Feedback form that saves typed values automatically
- Local storage restore after page refresh
- Vite development server and build tooling

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app at:
   ```
   http://localhost:5173
   ```

## Scripts

- `npm run dev` — start Vite development server
- `npm run build` — build production files
- `npm run preview` — preview the built site locally

## Deployment notes

The build command currently uses a GitHub Pages base path:

```json
"build": "vite build --base=/goit-js-hw-09/"
```

If you deploy this repository under a different repository name, update the
`--base` value in `package.json` accordingly.

## How to use

- Visit `src/1-gallery.html` to see the gallery and open images in a lightbox.
- Visit `src/2-form.html` to fill the feedback form and see your input saved in
  browser storage.
- On form submit, the data is logged to the console and stored state is cleared.

## Notes

- The app is built with Vite using ESM imports.
- `simplelightbox` is installed as a dependency and imported in `src/js/1-gallery.js`.
- Local storage key used by the form is `feedback-form-state`.
