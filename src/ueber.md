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

Ich baue digitale Werkzeuge, die Tiefe ermöglichen statt abzusaugen. Sechs Produkte sind fertig — vom Gefühlskompass über interaktive Meditation bis zum Retro-Spiel für meinen Sohn. Kein Lock-in, kein Dark Pattern, kein Chi-Chi.

Ich schreibe über das Menschsein in einer Zeit, die uns [zu Maschinen machen will](/texte/2026-01-27-menschen-wollen-maschinen-sein-–-teil-1-die-flucht-vor-dem-fühlen/).

Manchmal [begleite ich Menschen](/coaching/) — wenn sie fragen. Nicht als Beruf, sondern weil ich den Weg kenne.

## Was ich baue

<div style="display:flex;flex-direction:column;gap:0.4rem;line-height:1.6;">
<div><img src="/images/jthrust-icon.png" alt="" style="width:22px;height:22px;vertical-align:middle;margin-right:0.3rem;border-radius:4px;display:inline;"><strong>J-THRUST</strong> — Retro-Gravitation, C64-Seele</div>
<div><img src="/images/msphere-icon-192.png" alt="" style="width:22px;height:22px;vertical-align:middle;margin-right:0.3rem;border-radius:4px;display:inline;"><strong>M-Sphere</strong> — Meditation als Erlebnis</div>
<div><img src="/images/klarsite-logo.svg" alt="" style="width:22px;height:22px;vertical-align:middle;margin-right:0.3rem;border-radius:4px;display:inline;"><strong>Klarsite</strong> — Websites für Menschen</div>
<div><img src="/images/spuera-icon-192.png" alt="" style="width:22px;height:22px;vertical-align:middle;margin-right:0.3rem;border-radius:4px;display:inline;"><strong>Spüra</strong> — Emotionales Self-Tracking</div>
</div>

## Woher ich komme

Geboren in Schwäbisch Hall. Aufgewachsen in der schwäbischen Provinz — zwischen Fachwerk und dem Gefühl, dass da noch was anderes sein muss.

Studium in Heidelberg: Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft (Magister 2013). Dann jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen — IKEA, Convergys, Apple. Die Erkenntnis kam langsam: Ich war selbst eine Funktion geworden.

Berlin seit über 14 Jahren. Zertifizierter Coach für Neurosystemische Integration (Verena König, 2024). Nicht um ein Schild an die Tür zu hängen, sondern um zu verstehen, was mir selbst passiert ist.

Heute baue ich Werkzeuge aus eigener Tiefe. Und ich wehre mich — gegen Systeme die Menschen absaugen, gegen Lock-in, gegen Design das manipuliert statt einlädt.

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
