---
layout: base
title: Über mich
---
<div class="content-page">
  <a href="/" class="back-link">← Zurück</a>
  <style>
    .about-photos {
      display: flex;
      gap: 12px;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 2rem 0 1.5rem 0;
      flex-wrap: nowrap;
    }
    .about-photos img {
      width: clamp(140px, 45vw, 220px);
      height: auto;
      border-radius: 8px;
      display: block;
      margin: 0;
      max-width: 100%;
      object-fit: cover;
    }
  </style>
  <div class="about-photos">
    <img src="/images/jochen1.jpeg" alt="Jochen Hornung">
    <img src="/images/jochen2.jpeg" alt="Jochen Hornung">
  </div>
  <div class="text-content">

Jochen Hornung. <span id="age">43</span> Jahre. Berlin-Mitte.
Philosoph, Coach, Vater. Auf der Suche nach dem, was bleibt, wenn man den Lärm weglässt.

## Hintergrund
Magister in Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft. Ausbildung in neurosystemischer Integration bei Verena König. Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen. Dagegen wehre ich mich.

## Was mich antreibt
Die Frage, wie wir Menschlichkeit bewahren in einer Zeit, die uns zu Maschinen machen will. Wie wir Tiefe finden, wenn alles nach Oberfläche schreit. Wie wir bei uns bleiben, wenn alles uns wegzieht.

## Kontakt
info@jochenhornung.de

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
