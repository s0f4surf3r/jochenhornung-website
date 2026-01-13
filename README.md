# Jochen Hornung Website

Raum für Menschlichkeit und Tiefe

## Technologie

- **Eleventy** - Static Site Generator
- **Decap CMS** - Backend zum Texte schreiben
- **Netlify** - Hosting & automatisches Deployment
- **GitHub** - Code & Content Storage

## Struktur

```
src/
├── _layouts/       # Templates
├── _includes/      # Wiederverwendbare Komponenten
├── css/            # Styles
├── images/         # Bilder
├── admin/          # CMS Backend
├── texte/          # Deine Gedichte & Essays (Markdown)
├── index.njk       # Startseite
├── texte.njk       # Texte-Übersicht (automatisch generiert)
├── coaching.md     # Coaching-Seite
├── produkte.njk    # Produkte-Seite
├── kaktus.md       # Kaktus-Seite
└── ueber.md        # Über mich
```

## Setup

1. `npm install` - Dependencies installieren
2. `npm start` - Lokal entwickeln
3. `npm run build` - Build für Produktion

## CMS nutzen

Nach Deployment auf Netlify:
1. Gehe zu `jochenhornung.de/admin`
2. Login mit Netlify Identity
3. Texte schreiben → werden automatisch zu Seiten generiert

## Deployment

Wird automatisch gebaut bei jedem Git Push über Netlify.
