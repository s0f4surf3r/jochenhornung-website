---
layout: base
title: Über mich
---

<div class="content-page">
  <a href="/" class="back-link">← Zurück</a>

  <!-- Lokales Styling nur für diese Seite -->
  <style>
    .about-photos {
      display: flex;
      gap: 12px; /* ca. 3mm */
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

  <!-- Bilder außerhalb von .text-content, damit globale img-Regeln nicht greifen -->
  <div class="about-photos">
    <img src="/images/jochen1.jpeg" alt="Jochen Hornung">
    <img src="/images/jochen2.jpeg" alt="Jochen Hornung">
  </div>

  <div class="text-content">
    Jochen Hornung. <span id="age">43</span> Jahre. Berlin-Mitte.

    Philosoph, Coach, Vater. Auf der Suche nach dem, was bleibt, wenn man den Lärm weglässt.

    <h2>Hintergrund</h2>
    Magister in Politikwissenschaft, Volkswirtschaftslehre und Bildungswissenschaft. Ausbildung in neurosystemischer Integration bei Verena König. Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen. Dagegen wehre ich mich.

    <h2>Was mich antreibt</h2>
    Die Frage, wie wir Menschlichkeit bewahren in einer Zeit, die uns zu Maschinen machen will. Wie wir Tiefe finden, wenn alles nach Oberfläche schreit. Wie wir bei uns bleiben, wenn alles uns wegzieht.

    <h2>Kontakt</h2>
    info@jochenhornung.de
  </div>
</div>

<script>
  // Dynamisches Alter berechnen (Geburtsdatum: 23. Mai 1982)
  const birthDate = new Date(1982, 4, 23);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('age').textContent = age;
</script>
