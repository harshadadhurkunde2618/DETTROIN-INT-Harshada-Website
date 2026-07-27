# DETTROIN-INT-Harshada-Website

A modern, redesigned take on a CBSE school website — built for the DETTROIN internship frontend assignment.

**Live demo:** _add your GitHub Pages link here after deploying_

## About this project

This project reimagines a typical Indian school website (mega-menus, static image carousels, plain stat blocks) as a modern, animated, single-page experience — while keeping the same core content parents and students expect: about, admissions, academics, gallery, and results.

## What's different from a typical school site

- Slim navigation instead of a deep nested mega-menu
- Animated "growth ring" illustration in the hero (signature visual element)
- Scrolling live-notice ticker
- Count-up statistics that animate on scroll
- Horizontal scroll-snap "Campus Story" section
- Interactive student portal demo (enter a roll number, see mock results with animated bars)
- Dark mode and font-size accessibility toggles
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`

## Folder structure

```
DETTROIN-INT-Harshada-Website/
├── index.html          Main page markup
├── css/
│   └── style.css       All styling, design tokens as CSS variables
├── js/
│   └── main.js         Scroll animations, portal demo logic, dark mode toggle
└── README.md
```

## Tech stack

Plain HTML, CSS, and JavaScript — no build tools or frameworks required. Fonts loaded from Google Fonts (Fraunces, Inter, IBM Plex Mono).

## Running locally

Just open `index.html` in a browser, or use a local server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Deployed via GitHub Pages: Settings → Pages → Branch: `main` → `/ (root)`.
