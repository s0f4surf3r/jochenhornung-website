---
layout: base
title: Über mich
description: "Jochen Hornung, Berlin. Baut digitale Werkzeuge aus eigener Tiefe. Schreibt über das Menschsein."
---
<div class="content-page">
  <a href="/" class="back-link">← Zurück</a>
  <style>
    .about-photo {
      max-width: 100%;
      width: 450px;
      height: auto;
      border-radius: 8px;
      display: block;
      margin: 2rem 0 1.5rem 0;
    }
  </style>
  <img src="/images/jochen1u2.png" alt="Jochen Hornung" class="about-photo">
  <div class="text-content">

Jochen Hornung. <span id="age">43</span> Jahre. Berlin.

## Ich kenne die dunklen Orte. Ich war selbst dort.

Mein eigener Weg durch Trauma, ADHS und Sucht hat mir gezeigt: Wir haben uns trainiert, schlechte Maschinen zu sein. Jetzt, wo echte Maschinen das besser können, bleibt die Frage — was bleibt, wenn man den Lärm weglässt?

## Was ich tue

Ich baue digitale Werkzeuge, die Tiefe ermöglichen statt abzusaugen. Spiele, die sich anfühlen. Meditations-Apps, die atmen. Websites, die Menschen zeigen statt verkaufen.

Ich schreibe über das Menschsein in einer Zeit, die uns zu Maschinen machen will.

Manchmal [begleite ich Menschen](/coaching/) — wenn sie fragen. Nicht als Beruf, sondern weil ich den Weg kenne.

## Was ich baue

Code · Design · Bewusstsein · zu viele Projekte · Berlin.

**J-THRUST** — Retro-Gravitation, C64-Seele
**M-Sphere** — Meditation als Erlebnis
**Klarsite** — Websites die Menschen zeigen, nicht verkaufen
**Spüra** — Emotionales Self-Tracking
**Prüfstein** — Ethische Bewertung von KI-Entscheidungen

Kein Lock-in, kein Dark Pattern, kein Chi-Chi. Shipping > Perfecting.

## Hintergrund

Magister in Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft (Universität Heidelberg, 2013). Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen — IKEA, Convergys, Apple. Dagegen wehre ich mich.

## Kontakt

kontakt@jochenhornung.de

  </div>
</div>
<script>
  const birthDate = new Date(1982, 4, 23);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById('age').textContent = age;
</script>
