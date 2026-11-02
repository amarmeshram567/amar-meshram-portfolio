# Amar Meshram — Portfolio ("The Digital Film")

Cinematic developer portfolio built with React, Vite, JavaScript, Tailwind CSS, Lucide React and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Before you publish: fill in the placeholders

- `src/data/content.js`
  - `profile.linkedin`: your LinkedIn URL.
  - `projects`: replace every `TODO` (role, year, stack, live/source URLs, case-study text).
  - `toolbox`: confirm the tools you want to show.
  - `resumePreview`: real education and experience entries.
- `public/amar.jpg`: add your portrait (monochrome grading is applied in CSS).
- `public/resume.pdf`: add your resume PDF.
- `public/og-image.jpg`: add a 1200×630 social preview image.
- `src/components/Contact.jsx`: the form simulates submission. Connect it to a real endpoint (Formspree, your own API, etc.) before going live.

## Notes

- The GitHub contribution graph uses the public `ghchart.rshah.org` service, so it needs no API token.
- Intro sequence can be skipped with click, Enter, Space or Escape.
- Custom cursor is enabled only on fine pointers at desktop widths; touch devices get the native cursor.
- All animations are disabled under `prefers-reduced-motion`.
- The project scenes and detail content are kept in the data file, so adding a new project means adding one object.

## Project screenshots

Put one screenshot per project in `public/projects/` using these names:
`sentio-ai.jpg`, `vaultshare.jpg`, `invoiceflow.jpg`, `unifiedops.jpg`, `jg-university.jpg`.
If a file is missing, the site shows the matching designed mockup instead.
