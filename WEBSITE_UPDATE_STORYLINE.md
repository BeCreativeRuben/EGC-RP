# Website Update: Storyline Sectie Toevoegen

Dit document beschrijft hoe de quest-overview website bijgewerkt moet worden om de storyline/world main idea toe te voegen. Gebaseerd op `STORYLINE.md`.

---

## Overzicht

**Nieuwe sectie:** "Storyline & Wereld" toevoegen aan de website, tussen "KD-levels & NPC's" en "Koning & metgezellen" (of na "Koning & metgezellen", afhankelijk van logische flow).

**Doel:** Teamleden kunnen snel de storyline/world lore bekijken zonder het volledige STORYLINE.md document te lezen.

---

## Navigatie Update

**Bestand:** `quest-overview/index.html`

**Locatie:** Regel ~16-25 (nav-links)

**Toevoegen:**
```html
<li><a href="#storyline">Storyline & Wereld</a></li>
```

**Plaatsing:** Na "KD-levels & NPC's" en voor "Koning & metgezellen", of na "Koning & metgezellen" (keuze: logischer na KD-levels omdat storyline context geeft voor de rest).

---

## Nieuwe Sectie: Storyline & Wereld

**Bestand:** `quest-overview/index.html`

**Locatie:** Na sectie `id="kd-levels"` (rond regel 200+) en voor `id="koning"`

**HTML-structuur:**

```html
<section id="storyline" class="section section-collapsible">
  <h2 class="section-title">Storyline & Wereld</h2>
  <div class="section-content">
    <!-- Content hieronder -->
  </div>
</section>
```

---

## Content voor de Sectie

### 1. Hoofdverhaal – Korte Samenvatting

**Tekst:**
```html
<p>Door de tijd heen zien spelers <strong>anomalies</strong> van een <strong>Seal</strong> die opengaat, en een <strong>Black Mage/Wizard</strong> die probeert te ontsnappen met zijn corrupte krachten. De wizard bestuurt dingen op de map via zijn krachten omdat hij zelf nog niet volledig van achter de seal uitkomt.</p>

<p><strong>3 werelden zijn samengevoegd</strong> in één realiteit: de <strong>Onderwereld</strong> (Black Mage + goons), de <strong>Oude Wereld</strong> (waar spelers vandaan komen, onwetend), en de <strong>Huidige Wereld</strong> (handelsposten + ruïnes). <strong>De Orde van Vijf</strong> (5 heroes/resistance) hebben de merge veroorzaakt om beschaving te redden — anders was de hele wereld kapot en was het plan van de wizard gelukt.</p>

<p>De <strong>handelsposten</strong> hebben overleefd omdat ze een deal hebben gemaakt met de wizard — een geheim dat alleen de eigenaren kennen. De <strong>finale boss battle</strong> vindt plaats bij de originele seal-locatie (lang verborgen); alle Kingdoms moeten samenwerken om de seal tegen te houden.</p>
```

### 2. Kernpersonages (Cards/Grid)

**Styling:** Gebruik bestaande `.kd-levels-cards` grid of maak nieuwe `.storyline-cards` grid.

**Cards:**

#### Black Mage / Wizard
```html
<div class="storyline-card">
  <h3>Black Mage / Wizard</h3>
  <p><strong>Status:</strong> Oude, verzegelde antagonist (lang geleden verzegeld).</p>
  <p><strong>Plan:</strong> De wereld kapot maken.</p>
  <p><strong>Huidige situatie:</strong> Bestuurt dingen op de map via krachten; goons zijn betoverde mensen (NPCs, permanent corrupt).</p>
</div>
```

#### De Orde van Vijf
```html
<div class="storyline-card">
  <h3>De Orde van Vijf</h3>
  <p><strong>Status:</strong> Nog in leven, maar niemand weet het; komen terug op het einde.</p>
  <p><strong>Rollen:</strong> De Leider (nobody), De Ex-Koning, De Ex-Handelsmeester, De Culturele, De Nerd. Namen blijven abstract voor mysterieuze feeling.</p>
  <p><strong>Ontdekking:</strong> Via ruïnes (hints), handelsposten questline, vertakkingen.</p>
</div>
```

#### Handelsposten Eigenaren
```html
<div class="storyline-card">
  <h3>Handelsposten Eigenaren</h3>
  <p><strong>Noordhaven:</strong> Stubborn, stoer, kordaat, bruut — houdt het geheim.</p>
  <p><strong>Zuidmarkt:</strong> Losser, optimistisch — laat per ongeluk het geheim los; wordt later gepakt door Black Wizard; vervanger (rechterhand) neemt over.</p>
  <p><strong>Geheim:</strong> Deal met wizard; handelsposten blijven functioneel na onthulling.</p>
</div>
```

### 3. Wereld & Locaties

**Subsectie:**

```html
<h3 class="storyline-subtitle">3 Werelden Gefuseerd</h3>
<ul class="storyline-list">
  <li><strong>Onderwereld:</strong> Black Mage + goons komen hier vandaan; bron van corruptie en anomalies.</li>
  <li><strong>Oude Wereld:</strong> Waar spelers vandaan komen (onwetend); enige wereld met hoop → geselecteerd door Orde van Vijf.</li>
  <li><strong>Huidige Wereld:</strong> Handelsposten + ruïnes van Black Mage's onderwereldse krachten; waar de 3 werelden nu samenkomen.</li>
</ul>

<h3 class="storyline-subtitle">Seal-locatie</h3>
<p>Lang verborgen, magisch verborgen; verschijnt pas bij bepaalde voorwaarden. Hier vindt de finale boss battle plaats.</p>

<h3 class="storyline-subtitle">13 Caves</h3>
<p>Verborgen op de map (moeten ontdekt worden). Elke cave heeft een uniek type monsters (van onderwereld, gestuurd door Black Mage). Doel: <strong>Runes farmen</strong> (voor Kingdom Upgrades), XP, resources, en specifieke beesten killen voor quest-objectives. Caves zijn altijd beschikbaar; quests zijn meermalig.</p>
```

### 4. Story-structuur & Progressie

**Subsectie:**

```html
<h3 class="storyline-subtitle">Anomalies</h3>
<p>Getriggerd door <strong>Staff & events</strong> OF in <strong>bepaalde quests</strong> (niet door Kingdom-milestones of corruption meters).</p>

<h3 class="storyline-subtitle">Story Gates</h3>
<ul class="storyline-list">
  <li><strong>Level 5 (Town):</strong> Eerste echte Kingdom Quest (King's Advice Room) → introductie wereldproblemen</li>
  <li><strong>Level 10 (County):</strong> Verplicht Kingdom Storyline tot County-chapter (story gate)</li>
  <li><strong>Level 15 (Kingdom):</strong> Finale boss battle bij seal-locatie</li>
  <li><strong>Na Level 15:</strong> Restoratie-quests en uitroeiing van overgebleven anomalies</li>
</ul>

<h3 class="storyline-subtitle">Spelers Ontdekken de Story</h3>
<p>Progressieve onthulling: ruïnes (hints) → handelsposten questline → Zuidmarkt handelsmeester laat geheim los → plot twist (havemeesters beïnvloed door Black Mage) → seal-locatie onthuld → Orde van Vijf komt terug op het einde.</p>
```

### 5. Finale Boss Battle

**Subsectie:**

```html
<h3 class="storyline-subtitle">Finale Boss Battle</h3>
<p><strong>Server-wide event:</strong> Alle Kingdoms moeten deelnemen bij de seal-locatie.</p>
<p><strong>Seal requirements:</strong> Nog later te bepalen. Het hele Kingdom moet binnen 1 uur veel requirements behalen om de seal tegen te houden.</p>
<p><strong>Twee uitkomsten:</strong></p>
<ul class="storyline-list">
  <li><strong>Seal tegengehouden:</strong> Makkelijkere eindbattle</li>
  <li><strong>Seal NIET tegengehouden:</strong> Boss battle 5x sterker (later te bepalen hoe precies)</li>
</ul>
<p><strong>Na finale:</strong> Main questline voltooid; follow-up quests voor schadeherstel, gesprekken met belangrijke personen (Orde van Vijf, handelsposten eigenaren), en uitroeiing van overgebleven anomalies.</p>
```

### 6. Runes-systeem (Kort)

**Subsectie:**

```html
<h3 class="storyline-subtitle">Runes & Kingdom Upgrades</h3>
<p>Runes kunnen gebruikt worden om <strong>Kingdom Upgrades</strong> te kopen. Er zijn 6 categorieën met elk 6 levels:</p>
<ul class="storyline-list">
  <li><strong>Influence:</strong> Religion slots, chest locks, ally slots, extra claims, settlements, block interaction range</li>
  <li><strong>Forging:</strong> Furnace speed en fuel efficiency (+5% tot +30%)</li>
  <li><strong>Alchemy:</strong> Bonus XP en War Shield (+5% tot +17.5% XP, +10% War Shield)</li>
  <li><strong>Cultivation:</strong> Crop speed en Fishing Skill (+10% tot +30% crop speed, +8% tot +14.5% fishing)</li>
  <li><strong>Commerce:</strong> Market discount (+3.25% tot +8%)</li>
  <li><strong>Warfare:</strong> Enchantment cap (Level 27-42) en War Cooldown (-10%)</li>
</ul>
<p>Runes worden gefarmd in de 13 caves op de map.</p>
```

### 7. Link naar Volledige Documentatie

**Aan het einde van de sectie:**

```html
<p class="storyline-link"><a href="../STORYLINE.md" target="_blank">→ Zie STORYLINE.md voor volledige documentatie, Q&A en suggesties</a></p>
```

---

## CSS Styling (Nieuwe Classes)

**Bestand:** `quest-overview/styles.css`

**Toevoegen na bestaande `.kd-level-card` styles (rond regel 500+):**

```css
/* ----- Storyline sectie ----- */
.storyline-subtitle {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--gold-dim);
  margin: 1.5rem 0 0.75rem;
  font-weight: 600;
}

.storyline-list {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.storyline-list li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.storyline-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.storyline-card {
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: linear-gradient(135deg, var(--parchment-dark) 0%, var(--parchment) 100%);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.storyline-card:hover {
  border-color: var(--gold);
  box-shadow: 0 2px 8px var(--shadow);
}

.storyline-card h3 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--gold-dim);
  margin: 0 0 0.75rem;
}

.storyline-card p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: var(--text);
}

.storyline-card p:first-of-type {
  margin-top: 0;
}

.storyline-card p:last-of-type {
  margin-bottom: 0;
}

.storyline-link {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border);
}

.storyline-link a {
  color: var(--gold-dim);
  text-decoration: none;
}

.storyline-link a:hover {
  color: var(--gold);
  text-decoration: underline;
}
```

---

## Volledige HTML Sectie (Copy-Paste Ready)

**Bestand:** `quest-overview/index.html`

**Plaatsing:** Na `</section>` van `id="kd-levels"` (rond regel 200+) en voor `id="koning"`

**HTML:**

```html
    <section id="storyline" class="section section-collapsible">
      <h2 class="section-title">Storyline & Wereld</h2>
      <div class="section-content">
        <p>Door de tijd heen zien spelers <strong>anomalies</strong> van een <strong>Seal</strong> die opengaat, en een <strong>Black Mage/Wizard</strong> die probeert te ontsnappen met zijn corrupte krachten. De wizard bestuurt dingen op de map via zijn krachten omdat hij zelf nog niet volledig van achter de seal uitkomt.</p>

        <p><strong>3 werelden zijn samengevoegd</strong> in één realiteit: de <strong>Onderwereld</strong> (Black Mage + goons), de <strong>Oude Wereld</strong> (waar spelers vandaan komen, onwetend), en de <strong>Huidige Wereld</strong> (handelsposten + ruïnes). <strong>De Orde van Vijf</strong> (5 heroes/resistance) hebben de merge veroorzaakt om beschaving te redden — anders was de hele wereld kapot en was het plan van de wizard gelukt.</p>

        <p>De <strong>handelsposten</strong> hebben overleefd omdat ze een deal hebben gemaakt met de wizard — een geheim dat alleen de eigenaren kennen. De <strong>finale boss battle</strong> vindt plaats bij de originele seal-locatie (lang verborgen); alle Kingdoms moeten samenwerken om de seal tegen te houden.</p>

        <div class="storyline-cards">
          <div class="storyline-card">
            <h3>Black Mage / Wizard</h3>
            <p><strong>Status:</strong> Oude, verzegelde antagonist (lang geleden verzegeld).</p>
            <p><strong>Plan:</strong> De wereld kapot maken.</p>
            <p><strong>Huidige situatie:</strong> Bestuurt dingen op de map via krachten; goons zijn betoverde mensen (NPCs, permanent corrupt).</p>
          </div>

          <div class="storyline-card">
            <h3>De Orde van Vijf</h3>
            <p><strong>Status:</strong> Nog in leven, maar niemand weet het; komen terug op het einde.</p>
            <p><strong>Rollen:</strong> De Leider (nobody), De Ex-Koning, De Ex-Handelsmeester, De Culturele, De Nerd. Namen blijven abstract voor mysterieuze feeling.</p>
            <p><strong>Ontdekking:</strong> Via ruïnes (hints), handelsposten questline, vertakkingen.</p>
          </div>

          <div class="storyline-card">
            <h3>Handelsposten Eigenaren</h3>
            <p><strong>Noordhaven:</strong> Stubborn, stoer, kordaat, bruut — houdt het geheim.</p>
            <p><strong>Zuidmarkt:</strong> Losser, optimistisch — laat per ongeluk het geheim los; wordt later gepakt door Black Wizard; vervanger (rechterhand) neemt over.</p>
            <p><strong>Geheim:</strong> Deal met wizard; handelsposten blijven functioneel na onthulling.</p>
          </div>
        </div>

        <h3 class="storyline-subtitle">3 Werelden Gefuseerd</h3>
        <ul class="storyline-list">
          <li><strong>Onderwereld:</strong> Black Mage + goons komen hier vandaan; bron van corruptie en anomalies.</li>
          <li><strong>Oude Wereld:</strong> Waar spelers vandaan komen (onwetend); enige wereld met hoop → geselecteerd door Orde van Vijf.</li>
          <li><strong>Huidige Wereld:</strong> Handelsposten + ruïnes van Black Mage's onderwereldse krachten; waar de 3 werelden nu samenkomen.</li>
        </ul>

        <h3 class="storyline-subtitle">Seal-locatie</h3>
        <p>Lang verborgen, magisch verborgen; verschijnt pas bij bepaalde voorwaarden. Hier vindt de finale boss battle plaats.</p>

        <h3 class="storyline-subtitle">13 Caves</h3>
        <p>Verborgen op de map (moeten ontdekt worden). Elke cave heeft een uniek type monsters (van onderwereld, gestuurd door Black Mage). Doel: <strong>Runes farmen</strong> (voor Kingdom Upgrades), XP, resources, en specifieke beesten killen voor quest-objectives. Caves zijn altijd beschikbaar; quests zijn meermalig.</p>

        <h3 class="storyline-subtitle">Anomalies</h3>
        <p>Getriggerd door <strong>Staff & events</strong> OF in <strong>bepaalde quests</strong> (niet door Kingdom-milestones of corruption meters).</p>

        <h3 class="storyline-subtitle">Story Gates</h3>
        <ul class="storyline-list">
          <li><strong>Level 5 (Town):</strong> Eerste echte Kingdom Quest (King's Advice Room) → introductie wereldproblemen</li>
          <li><strong>Level 10 (County):</strong> Verplicht Kingdom Storyline tot County-chapter (story gate)</li>
          <li><strong>Level 15 (Kingdom):</strong> Finale boss battle bij seal-locatie</li>
          <li><strong>Na Level 15:</strong> Restoratie-quests en uitroeiing van overgebleven anomalies</li>
        </ul>

        <h3 class="storyline-subtitle">Spelers Ontdekken de Story</h3>
        <p>Progressieve onthulling: ruïnes (hints) → handelsposten questline → Zuidmarkt handelsmeester laat geheim los → plot twist (havemeesters beïnvloed door Black Mage) → seal-locatie onthuld → Orde van Vijf komt terug op het einde.</p>

        <h3 class="storyline-subtitle">Finale Boss Battle</h3>
        <p><strong>Server-wide event:</strong> Alle Kingdoms moeten deelnemen bij de seal-locatie.</p>
        <p><strong>Seal requirements:</strong> Nog later te bepalen. Het hele Kingdom moet binnen 1 uur veel requirements behalen om de seal tegen te houden.</p>
        <p><strong>Twee uitkomsten:</strong></p>
        <ul class="storyline-list">
          <li><strong>Seal tegengehouden:</strong> Makkelijkere eindbattle</li>
          <li><strong>Seal NIET tegengehouden:</strong> Boss battle 5x sterker (later te bepalen hoe precies)</li>
        </ul>
        <p><strong>Na finale:</strong> Main questline voltooid; follow-up quests voor schadeherstel, gesprekken met belangrijke personen (Orde van Vijf, handelsposten eigenaren), en uitroeiing van overgebleven anomalies.</p>

        <h3 class="storyline-subtitle">Runes & Kingdom Upgrades</h3>
        <p>Runes kunnen gebruikt worden om <strong>Kingdom Upgrades</strong> te kopen. Er zijn 6 categorieën met elk 6 levels:</p>
        <ul class="storyline-list">
          <li><strong>Influence:</strong> Religion slots, chest locks, ally slots, extra claims, settlements, block interaction range</li>
          <li><strong>Forging:</strong> Furnace speed en fuel efficiency (+5% tot +30%)</li>
          <li><strong>Alchemy:</strong> Bonus XP en War Shield (+5% tot +17.5% XP, +10% War Shield)</li>
          <li><strong>Cultivation:</strong> Crop speed en Fishing Skill (+10% tot +30% crop speed, +8% tot +14.5% fishing)</li>
          <li><strong>Commerce:</strong> Market discount (+3.25% tot +8%)</li>
          <li><strong>Warfare:</strong> Enchantment cap (Level 27-42) en War Cooldown (-10%)</li>
        </ul>
        <p>Runes worden gefarmd in de 13 caves op de map.</p>

        <p class="storyline-link"><a href="../STORYLINE.md" target="_blank">→ Zie STORYLINE.md voor volledige documentatie, Q&A en suggesties</a></p>
      </div>
    </section>
```

---

## Stappenplan voor Implementatie

1. **Navigatie updaten:**
   - Open `quest-overview/index.html`
   - Voeg `<li><a href="#storyline">Storyline & Wereld</a></li>` toe aan nav-links (rond regel 20)

2. **CSS toevoegen:**
   - Open `quest-overview/styles.css`
   - Voeg de nieuwe CSS-classes toe (`.storyline-subtitle`, `.storyline-list`, `.storyline-cards`, `.storyline-card`, `.storyline-link`) na de bestaande `.kd-level-card` styles

3. **HTML-sectie toevoegen:**
   - Open `quest-overview/index.html`
   - Plaats de volledige HTML-sectie (hierboven) na de `</section>` van `id="kd-levels"` en voor `id="koning"`

4. **Testen:**
   - Open `quest-overview/index.html` in browser
   - Controleer of de nieuwe sectie zichtbaar is
   - Test de navigatie-link
   - Controleer of de styling correct is (cards, lists, subtitles)
   - Test collapsible functionaliteit (klik op titel)

---

## Opmerkingen

- **Styling:** Gebruikt bestaande kingdom-theme (parchment, gold, borders) voor consistentie
- **Collapsible:** Sectie heeft `.section-collapsible` class, dus klik op titel om uit te klappen/in te klappen
- **Link naar STORYLINE.md:** Relatief pad `../STORYLINE.md` (aannemend dat STORYLINE.md in de root staat en quest-overview/ een submap is)
- **Content:** Samenvatting van belangrijkste punten; volledige details staan in STORYLINE.md
- **Cards:** 3 cards voor kernpersonages (Black Mage, Orde van Vijf, Handelsposten) — responsive grid zoals KD-level cards

---

## Optionele Verbeteringen (Later)

- **Mermaid-diagrammen:** Timeline of wereldstructuur-diagram toevoegen (als mermaid.js werkt in de browser)
- **Anker-links:** Links naar subsecties binnen de storyline-sectie (bijv. `#storyline-anomalies`, `#storyline-boss-battle`)
- **Visuele elementen:** Icoontjes of kleine illustraties bij cards (bijv. wizard-icoon, groep-icoon)
- **Expandable subsecties:** Subsecties kunnen ook collapsible zijn (bijv. "Kernpersonages" uitklapbaar)

---

*Dit document kan gebruikt worden om de website bij te werken. Alle content is gebaseerd op STORYLINE.md.*
