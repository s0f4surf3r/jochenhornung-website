---
layout: base
title: Über mich
description: "Jochen Hornung, 43, Berlin. Coach für neurosystemische Integration, Vater, Philosoph im Geiste. Hintergrund und Kontakt."
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
Philosoph im Geiste, Coach, Vater. Auf der Suche nach dem, was bleibt, wenn man den Lärm weglässt.

## Hintergrund

Magister in Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft an der Universität Heidelberg (2013). Ausbildung in neurosystemischer Integration bei Verena König (2023). Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen. Dagegen wehre ich mich.

## Was mich antreibt

Die Frage, wie wir Menschlichkeit bewahren in einer Zeit, die uns zu Maschinen machen will. Wie wir Tiefe finden, wenn alles nach Oberfläche schreit. Wie wir bei uns bleiben, wenn alles uns wegzieht.

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
