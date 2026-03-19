---
layout: base
title: Über mich
description: "Jochen Hornung, 43, Berlin. Coach für neurosystemische Integration, Entwickler digitaler Werkzeuge, Vater. Texte über das Menschsein."
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

Jochen Hornung. <span id="age">43</span> Jahre. Berlin-Mitte.

## Ich kenne die dunklen Orte. Ich war selbst dort.

Mein eigener Weg durch Trauma, ADHS und Sucht hat mir gezeigt: Wir haben uns trainiert, schlechte Maschinen zu sein. Jetzt, wo echte Maschinen das besser können, bleibt die Frage — was bleibt, wenn man den Lärm weglässt?

## Was ich tue

Ich begleite Menschen, die sich im Funktionieren verloren haben. Besonders Männer, die gelernt haben stark zu sein und dabei vergessen haben zu fühlen. Ressourcenorientiert, körperbasiert, mit dem Nervensystem — nicht gegen es.

Gleichzeitig baue ich digitale Werkzeuge, die Tiefe ermöglichen statt abzusaugen. Sechs Produkte sind fertig — vom Gefühlskompass über interaktive Meditation bis zum Retro-Spiel für meinen Sohn. Kein Lock-in, kein Dark Pattern, kein Chi-Chi.

Ich schreibe über das Menschsein in einer Zeit, die uns zu Maschinen machen will.

## Hintergrund

Magister in Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft (Universität Heidelberg, 2013). Zertifizierter Coach für Neurosystemische Integration (Verena König, 2024). Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen — IKEA, Convergys, Apple. Dagegen wehre ich mich.

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
