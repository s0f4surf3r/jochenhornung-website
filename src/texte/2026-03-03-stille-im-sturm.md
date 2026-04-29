---
layout: text
tags: text
title: Stille im Sturm
date: 2026-03-03T13:37:00.000+01:00
type: Gedicht
excerpt: Aufgetaucht zwischen Sufi-Echos und Webseite-Bauen.
heroImage: /images/stille-im-sturm-stimmung.png
---
<style>
.lang-toggle {
    display: flex;
    gap: 0.6rem;
    margin: 0 0 2rem;
    font-family: -apple-system, 'Helvetica Neue', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
}
.lang-toggle button {
    background: transparent;
    border: 1px solid #d8d2c4;
    border-radius: 999px;
    padding: 5px 14px;
    color: #6b5a47;
    cursor: pointer;
    font: inherit;
    transition: all 0.15s ease;
}
.lang-toggle button:hover {
    border-color: #8d7c63;
    color: #1a1a1a;
}
.lang-toggle button.active {
    background: #1a1a1a;
    border-color: #1a1a1a;
    color: #faf7f2;
}
.lang { display: none; }
.lang.active { display: block; }
.lang-ar {
    font-family: 'Noto Naskh Arabic', 'Iowan Old Style', Georgia, serif;
    font-size: 1.55rem;
    line-height: 1.85;
}
</style>

<div class="lang-toggle" role="tablist">
    <button type="button" data-lang="de" class="active">DE</button>
    <button type="button" data-lang="en">EN</button>
    <button type="button" data-lang="ar">العربية</button>
</div>

<div class="lang lang-de active" lang="de">

Mitten im Sturm  
liegt eine Stille,  
die keine Worte kennt –  
nur Atem.

Und in diesem Atem  
findet sich  
was immer schon da war:  
das ruhige Wissen  
des eigenen Herzens.

Nicht der Sturm trägt uns fort,  
sondern unsere Angst vor ihm.  
Lass ihn ziehen.  
Du bist die Stille dahinter.

</div>

<div class="lang lang-en" lang="en">

In the middle of the storm  
lies a stillness  
that knows no words –  
only breath.

And in this breath  
is found  
what was always already there:  
the quiet knowing  
of your own heart.

It is not the storm that carries us away,  
but our fear of it.  
Let it pass.  
You are the stillness behind it.

</div>

<div class="lang lang-ar" lang="ar" dir="rtl">

في قَلْبِ العاصِفَة  
سُكونٌ  
لا يَعْرِفُ الكَلام –  
فقط النَّفَس.

وفي هذا النَّفَس  
يَكْمُنُ  
ما كانَ موجوداً دائماً:  
المَعْرِفَةُ الهادِئَة  
لِقَلْبِك.

ليست العاصِفَةُ ما تَحْمِلُنا بَعيداً،  
بل خَوْفُنا مِنها.  
دَعْها تَمضي.  
أنتَ السُّكونُ خَلْفَها.

</div>

<script>
(function() {
    const buttons = document.querySelectorAll('.lang-toggle button');
    const langs = document.querySelectorAll('.lang');

    function setLang(lang) {
        buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        langs.forEach(el => el.classList.toggle('active', el.classList.contains('lang-' + lang)));
        try { localStorage.setItem('stille-lang', lang); } catch(e) {}
    }

    buttons.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

    let saved;
    try { saved = localStorage.getItem('stille-lang'); } catch(e) {}
    if (saved && ['de','en','ar'].includes(saved)) setLang(saved);
})();
</script>
