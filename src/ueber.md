---
layout: base
title: Über mich
---

<div class="content-page">
<a href="/" class="back-link">← Zurück</a>

<div class="text-content">

<div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
<img src="/images/jochen1.jpeg" alt="Jochen Hornung" style="width: 200px; height: auto; border-radius: 8px; object-fit: cover;">
<img src="/images/jochen2.jpeg" alt="Jochen Hornung" style="width: 200px; height: auto; border-radius: 8px; object-fit: cover;">
</div>

Jochen Hornung. <span id="age">43</span> Jahre. Berlin-Mitte.

Philosoph, Coach, Vater. Auf der Suche nach dem, was bleibt, wenn man den Lärm weglässt.

## Hintergrund

Magister in Politikwissenschaft, Vokswirtschaftslehre und Bildungswissenschaft. Ausbildung in neurosystemischer Integration bei Verena König. Jahrelang in Strukturen gearbeitet, die Menschen zu Funktionen machen. Dagegen wehre ich mich.

## Was mich antreibt

Die Frage, wie wir Menschlichkeit bewahren in einer Zeit, die uns zu Maschinen machen will. Wie wir Tiefe finden, wenn alles nach Oberfläche schreit. Wie wir bei uns bleiben, wenn alles uns wegzieht.

## Kontakt

info@jochenhornung.de

</div>
</div>

<script>
// Dynamisches Alter berechnen (Geburtsdatum: 23. Mai 1982)
const birthDate = new Date(1982, 4, 23); // Monat ist 0-basiert, also 4 = Mai
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}
document.getElementById('age').textContent = age;
</script>
