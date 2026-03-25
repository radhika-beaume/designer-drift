# Designer_Drift — Product Requirements Document
Version 1.0 — March 2026
Last verified against Figma: March 2026

**Figma is the absolute source of truth. Where PRD and Figma conflict, Figma wins.**

---

## 1. Product Overview

### 1.1 What Designer_Drift Is
Designer_Drift is a Progressive Web App (PWA) for French UX designers experiencing workplace frustration. It maps common triggering patterns to explanations grounded in neuroscience (Robert Sapolsky) and Advaita Vedanta philosophy (Acharya Prashant).

The app is not prescriptive. It does not offer advice, techniques, or 3-step frameworks. It offers understanding — naming what is happening neurologically and philosophically when workplace dynamics feel unbearable.

### 1.2 Core Principles
- Exploratory, not sequential — users access any scenario in any order
- Stateless and anonymous — no accounts, no data collection, no GDPR burden
- No completion state — the app is a reference, not a course
- Light Vedanta — an introduction, not transformation
- Mobile-first — users arrive emotionally activated, phone in hand

### 1.3 Target User
French UX designers working in product teams, agencies, or consulting contexts. They are mid-career, technically literate, and experiencing recurring frustration with how their expertise is treated organizationally.

### 1.4 Content Structure
Four scenarios, each mapping a workplace pattern to a specific Vedantic concept:
- Scenario 1 — Expertise Bypass: false identification with expertise (I am my expertise)
- Scenario 2 — Strategic Exclusion: false identification with position (I am my level)
- Scenario 3 — Authority Override: sakam karma (attachment to outcome when presenting evidence)
- Scenario 4 — Opaque Evaluation: two models of success (future/externally validated vs. present/internally complete)

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + Vite |
| Styling | Tailwind CSS |
| Components | Shadcn/ui |
| Icons | react-icons/md (Material Design subset — NOT Lucide) |
| i18n | react-i18next |
| PWA | vite-plugin-pwa |
| Hosting | Vercel (free tier) or Netlify (free tier) |
| Backend | None — fully static, no server, no database |
| Auth | None — anonymous access only |
| State | React useState / useContext — no external state library needed |
| Storage | None — stateless. URL param ?lang=en / ?lang=fr for language only |

### Critical Icon Instruction
Shadcn ships with Lucide icons by default. This project uses Material Design icons via react-icons/md. Every Shadcn default Lucide icon must be replaced with its Material Design equivalent. Install react-icons, not @mui/icons-material.

```js
import { MdArrowBack, MdClose, MdExpandMore, MdExpandLess } from 'react-icons/md'
```

### PWA Setup
Configure vite-plugin-pwa to enable Add to Home Screen on mobile. This is the primary reason for PWA — home screen shortcut for fast access when emotionally activated.

```js
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

plugins: [VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Designer Drift',
    short_name: 'Designer Drift',
    theme_color: '#2E2724',
    background_color: '#F5EDE6',
    display: 'standalone',
    icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }]
  }
})]
```

---

## 3. Design Tokens

### 3.1 Color Palette

| CSS Variable | Hex | Usage |
|---|---|---|
| --background | #DDCFC5 | Page background, non-tappable content areas |
| --surface-light | #F5EDE6 | Tappable surfaces: chips, accordion headers, cards |
| --border-chips | #E4AD86 | Chip border (bottom only), pill outlines, dividers |
| --text-primary | #2E2724 | Primary text, dark header band background |
| --text-secondary | #4F433E | Secondary text in pills, quotes, chip numbers |
| --text-light | #F5EDE6 | Text on dark (#2E2724) backgrounds |
| --accent | #077A98 | Links, labels, active states, borders, toggle active |

### Global Tappable Rule — NO EXCEPTIONS
- `#F5EDE6` background = tappable element (chip, accordion header, card, button)
- `#DDCFC5` background = content area — NOT tappable (open accordion body, page background)

### 3.2 Typography

| Role | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display / Title | Lora | 32px | Bold 700 | 40px | -0.5px |
| Scenario Title | Lora | 24px | SemiBold 600 | 32px | -0.3px |
| Body | Source Sans 3 | 16px | Regular 400 | 26px | 0 |
| Body Small / Subtitle | Source Sans 3 | 14px | Regular 400 | 22px | 0 |
| Label / Toggle | Azeret Mono | 10px | Medium 500 | — | 1.5px |
| Chip number (decorative) | Lora | 32px | Bold 700 | 40px | -0.5px — opacity 30%, color #4F433E |

### 3.3 Spacing & Radius

| Property | Value |
|---|---|
| Chip padding | 16px horizontal, 12px vertical |
| Chip gap (between chips) | 16px |
| Chip border radius | 8px |
| Chip border | Bottom only — 1px solid #E4AD86 |
| Screen horizontal margin | 16px |
| Accordion section gap | 0 (sections stack flush) |
| Card border radius | 8px |

### 3.4 CSS Custom Properties
```css
:root {
  --background: #DDCFC5;
  --surface-light: #F5EDE6;
  --border-chips: #E4AD86;
  --text-primary: #2E2724;
  --text-secondary: #4F433E;
  --text-light: #F5EDE6;
  --accent: #077A98;
}
```

---

## 4. Internationalisation (i18n)

### 4.1 Setup
Use react-i18next. Create two JSON string files: en.json and fr.json. For MVP, both files contain the same English content. French translations slot in as a Phase 2 task — no architecture change required.

```js
// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr } },
  lng: 'en',
  fallbackLng: 'en',
})
```

### 4.2 Language State
Language preference is stored in a URL parameter, not localStorage. Default is English.

```js
// src/main.jsx — runs once at app start
const params = new URLSearchParams(window.location.search)
const lang = params.get('lang') || 'en'
i18n.changeLanguage(lang)

// On toggle, update URL and i18n language
const switchLang = (newLang) => {
  params.set('lang', newLang)
  window.history.replaceState({}, '', '?' + params.toString())
  i18n.changeLanguage(newLang)
}
```

### 4.3 Language Toggle Component
The toggle appears on every screen header. It is a small, unobtrusive text element — not a button component.

| Property | Value |
|---|---|
| Font | Azeret Mono Medium, 10px |
| Text | EN \| FR — uppercase, letter-spacing 1.5px |
| Active language | Full opacity |
| Inactive language | 40% opacity |
| Separator \| | 40% opacity, static, not tappable |
| Active language indicator | Small dot under active language: 2px square, border-radius 1px, centered horizontally below the text. Color: #F5EDE6 on dark variant, #2E2724 on light variant. Hidden under inactive language. |
| Tap target | Minimum 44×44px invisible touch area around each button |
| Dark header variant | #F5EDE6 text (Entry, Scenario Detail, Follow-up screens) |
| Light header variant | #2E2724 text (Scenario List, Exit Flow screens) |
| Placement | Every screen header, right-aligned, same row as back arrow |
| Row layout | justify-between: back arrow left, toggle right |
| Gap between toggle and title | 24px (verified in build — Figma value of 8px did not render correctly) |

---

## 5. Screen Architecture & Navigation

### 5.1 Screen Inventory

| Screen | Description |
|---|---|
| Screen 1 | Entry Screen — chip selection |
| Screen 2 | Scenario Detail — collapsed state (all accordions closed) |
| Screen 3 | Scenario Detail — open state (one accordion expanded) |
| Screen 4 | Scenario List — all 4 scenarios visible |
| Screen 5 | Exit Flow — acknowledgment + optional next step |
| Screen 6 | Follow-up Question — Chip 03 disambiguation only |

### 5.2 Navigation Map
```
Entry Screen (6 chips)
 ├─ Chip 01 → Scenario Detail (Expertise Bypass)         → /scenario/expertise-bypass
 ├─ Chip 02 → Scenario Detail (Authority Override)       → /scenario/authority-override
 ├─ Chip 03 → Follow-up Question Screen                  → /followup
 │   ├─ Option A → Scenario Detail (Expertise Bypass)    → /scenario/expertise-bypass
 │   └─ Option B → Scenario Detail (Strategic Exclusion) → /scenario/strategic-exclusion
 ├─ Chip 04 → Scenario Detail (Strategic Exclusion)      → /scenario/strategic-exclusion
 ├─ Chip 05 → Scenario Detail (Authority Override)       → /scenario/authority-override
 └─ Chip 06 → Scenario Detail (Opaque Evaluation)        → /scenario/opaque-evaluation

Scenario Detail (any scenario)
 ├─ Tap accordion header → open / collapse section
 ├─ 'This doesn't quite match what happened?' → Scenario List  → /scenarios
 ├─ 'See other situations →' → Scenario List                   → /scenarios
 └─ Scroll to bottom → Exit Flow                               → /exit

Scenario List
 └─ Tap any card → Scenario Detail

Exit Flow
 └─ 'If you want to investigate further →' → [external link — coming soon for MVP]
```

### 5.3 Back Arrow Behaviour

| Screen | Back goes to |
|---|---|
| Scenario Detail (reached via chip directly) | Entry Screen |
| Scenario Detail (reached via Follow-up Question) | Follow-up Question Screen |
| Scenario List | Scenario Detail (whichever was previously open) |
| Exit Flow | Scenario Detail |
| Follow-up Question | Entry Screen |

### 5.4 No Persistent Navigation
There is no bottom navigation bar, no sidebar, no hamburger menu, and no persistent navigation chrome. Back arrows are the only navigation element on content screens. This is intentional — permanent chrome is the wrong register for emotional content.

---

## 6. Chip-to-Scenario Mapping

### 6.1 Mapping Table

| Chip # | Chip Label (EN) | → Scenario | Logic |
|---|---|---|---|
| 01 | I wasn't invited to the design meeting | Scenario 1 | Direct 1:1 |
| 02 | I did research, nobody cares | Scenario 3 | Direct 1:1 |
| 03 | I was excluded from strategic meetings | Scenario 1 OR 2 | Triggers Follow-up Question |
| 04 | I was left alone for stakeholder management | Scenario 2 | Direct 1:1 |
| 05 | I was overruled by hierarchy | Scenario 3 | Direct 1:1 |
| 06 | My promotion was refused with no explanation | Scenario 4 | Direct 1:1 |

### 6.2 Chip 03 Follow-up Question
When the user taps Chip 03, they are taken to the Follow-up Question screen before reaching a scenario.

| Property | Value |
|---|---|
| Header title | I was excluded from strategic meetings |
| Subtitle | Which sounds closer? |
| Option A | Decisions were made about my design work without me → Scenario 1 |
| Option B | My strategic role was not recognized → Scenario 2 |

### 6.3 Chip Anatomy
Each chip has two elements side by side:
- Number (left): Lora Bold 32px, 30% opacity, color #4F433E — decorative, not interactive
- Text (right): Source Sans 3 Regular 16px, color #2E2724 — the actual chip label
- Inner container alignment: align-items flex-start (top alignment — NOT center)
- Gap between number and text: 12px

Chips are single-select only. Tapping a chip immediately navigates — no confirmation state.

---

## 7. Screen Specifications

### Screen 1 — Entry Screen
Figma node: 76:10

#### Header Band
| Property | Value |
|---|---|
| Background | #2E2724 (full width, dark band) |
| Title text | What happened? |
| Title font | Lora Bold 32px, color #F5EDE6, letter-spacing -0.5px, whitespace-nowrap |
| Subtitle text | Select what triggered you today |
| Subtitle font | Source Sans 3 Regular 14px, color #F5EDE6 |
| Language toggle | Top right — EN \| FR, Azeret Mono 10px, #F5EDE6 active / 40% opacity inactive |
| Title row height | 85px, padding: top 16px, right 8px, bottom 8px, left 16px |
| Subtitle row padding | bottom 8px, left 16px |

#### Chip List
| Property | Value |
|---|---|
| Layout | Single column, 16px gap between chips, 16px horizontal margin |
| Chip background | #F5EDE6 (tappable signal) |
| Chip border | Bottom only, 1px solid #E4AD86 — NO border on top/left/right |
| Chip border radius | 8px |
| Chip padding | 16px horizontal, 12px vertical |
| Chip width | Full width (stretch to screen minus 16px margins each side = 358px at 390px) |
| Number style | Lora Bold 32px, 30% opacity, #4F433E, align-items flex-start |
| Text style | Source Sans 3 Regular 16px, #2E2724 |
| Gap between number and text | 12px |
| Page background | #DDCFC5 |

**No Match CTA:** This link does NOT appear on the Entry Screen. It appears on the Scenario Detail screen footer, after the user has landed on a scenario.

---

### Screen 2 & 3 — Scenario Detail (Collapsed + Open)
Figma node: 100:366

#### Header Band
| Property | Value |
|---|---|
| Background | #2E2724 (dark band) |
| Title text | Scenario name (e.g. 'Expert bypass') — NOT the question |
| Title font | Lora SemiBold 24px, color #F5EDE6, letter-spacing -0.3px, left-aligned |
| Subtitle text | Scenario question (e.g. 'If my work doesn't count, do I still count?') |
| Subtitle font | Source Sans 3 Regular 14px, color #F5EDE6 |
| Back arrow | Top left, MdArrowBack, color #F5EDE6, 44×44px tap target |
| Language toggle | Top right, same row as back arrow, #F5EDE6 text |

#### Accordion Sections
Each scenario has 4 accordion sections. All sections are collapsed by default (Screen 2). Tapping a header opens it (Screen 3). Only one section can be open at a time.

Each accordion section has TWO text elements:
- **Label** (top): Azeret Mono 10px, uppercase, letter-spacing 1.5px, color #077A98 — category label
- **Heading** (bottom): Source Sans 3 Regular 16px, color #2E2724 — section title

| Section | Label | Heading |
|---|---|---|
| 1 | RECOGNITION | When this happens |
| 2 | YOUR WORKAROUND | What most designers do |
| 3 | NEUROSCIENCE | What's happening in your brain |
| 4 | THE ROOT CAUSE | The source of pain |

#### Accordion Header (Collapsed — Tappable)
| Property | Value |
|---|---|
| Background | #F5EDE6 (tappable signal) |
| Label | Azeret Mono 10px, #077A98, uppercase, letter-spacing 1.5px |
| Heading text | Lora Medium 500, 20px, #2E2724, normal case |
| Icon | MdExpandMore (Material) — right aligned, color #2E2724 |
| Border bottom | 1px solid #077A98 (accent) |
| Border radius | First accordion: top-left 4px, top-right 4px, bottom-left 0, bottom-right 0. Middle accordions: all corners 0. Last accordion: top-left 0, top-right 0, bottom-left 4px, bottom-right 4px. |
| Padding | 16px horizontal, 14px vertical |

#### Accordion Body (Open — NOT Tappable)
| Property | Value |
|---|---|
| Background | #DDCFC5 (content area — not tappable) |
| Padding | 16px all sides |
| Icon on header when open | MdExpandLess (Material) |

#### Content Visual Treatments Inside Accordion Body
Three distinct visual treatments — never use uniform text blocks:
- **Situation descriptions**: plain paragraphs, Source Sans 3 Regular 16px, #2E2724
- **Body feelings / emotional states**: pills — hugs content, NOT full width, flows inline with siblings (flex-wrap: wrap, gap: 8px). Border 1px solid #E4AD86, border-radius 16px, padding 4px 12px, Source Sans 3 Regular 14px, #4F433E
- **Designer quotes**: left border 3px solid #077A98, italic, Source Sans 3 Italic 14px, #4F433E, padding-left 8px

#### Footer of Scenario Detail
| Property | Value |
|---|---|
| Line 1 text | This doesn't quite match what happened? |
| Line 1 style | Source Sans 3 Regular 14px, color #2E2724, plain text — NOT a link |
| Line 2 text | See other situations → |
| Line 2 style | Source Sans 3 Regular 14px, color #077A98, underlined, tappable link |
| Both navigate to | Scenario List (/scenarios) |
| Placement | After last accordion section, before scroll ends |

---

### Screen 4 — Scenario List
Figma node: Screens page

#### Header
| Property | Value |
|---|---|
| Background | #DDCFC5 |
| Title text | All situations |
| Title font | Lora Bold 24px, #2E2724 |
| Subtitle text | One of these will feel familiar. |
| Subtitle font | Source Sans 3 Regular 14px, #2E2724 |
| Back arrow | MdArrowBack, #2E2724, 44×44px tap target |
| Language toggle | #2E2724 text variant |
| Header sticky | YES — position: sticky, top: 0, background #DDCFC5, no shadow or border |

#### Scenario Cards
4 cards, one per scenario, vertically stacked with 16px gap.

| Property | Value |
|---|---|
| Card background | #F5EDE6 |
| Card border | 1px solid #E4AD86, border-radius 8px |
| Card padding | 16px |
| No SITUATION label | Cards do NOT have the Azeret Mono SITUATION label |
| Title | `scenarioTitle` field — Lora Bold, #2E2724 |
| Description | `trigger` field — Source Sans 3 Regular 14px, #4F433E |
| Footer | Book/document icon + "4 sections" text — Source Sans 3 Regular 12px, #4F433E |
| Tap behaviour | Full card tappable → navigates to Scenario Detail |
| No images | No thumbnail, no illustration, no hero image |
| No reading time | Do not show read time estimates |

**4 scenario card titles and descriptions:**
- Expertise Bypass — "Your work was sidelined. Decisions were made without you, and you're expected to execute them"
- Exclusion from Strategic Decisions — "You're doing the work but not in the room where it's shaped. You find out what was decided, not why."
- Authority Override — "You brought evidence. They brought hierarchy. The decision was already made before you spoke."
- Opaque Evaluation — "You don't know what good looks like here. The goalposts move and nobody tells you where they are."

---

### Screen 5 — Exit Flow

#### Header
| Property | Value |
|---|---|
| Background | #DDCFC5 |
| Back arrow | MdArrowBack, #2E2724 |
| Language toggle | #2E2724 text variant |
| Header sticky | YES — position: sticky, top: 0 |

#### Acknowledgment Text
| Property | Value |
|---|---|
| Text | This pattern will repeat. You've started to see what's driving it. Keep recognizing it. |
| Font | Lora Bold — large display size, color #2E2724 |
| Alignment | Left, 16px margin |

#### Divider
A horizontal line divider (#E4AD86) sits between the acknowledgment text and the investigate further link.

#### Investigate Further Link
| Property | Value |
|---|---|
| Icon | Book/document icon, color #077A98 |
| Text | If you want to investigate further |
| Arrow | → after text |
| Style | Source Sans 3, color #077A98, underlined |
| State for MVP | Active and tappable — links to external Acharya Prashant resources |
| NOT coming soon | Figma shows this as an active teal link, not greyed out |

---

### Screen 6 — Follow-up Question (Chip 03 only)
Figma node: 100:366

#### Header Band
| Property | Value |
|---|---|
| Background | #2E2724 |
| No SITUATION label | This screen does NOT have the Azeret Mono SITUATION label |
| Title | I was excluded from strategic meetings — Lora Bold 24px, letter-spacing -0.3px, color #F5EDE6, left-aligned |
| Subtitle | Which sounds closer? — Source Sans 3 Regular 14px, color #F5EDE6 |
| Back arrow | MdArrowBack, #F5EDE6 |
| Language toggle | #F5EDE6 text variant |

#### Two-Option Chips
| Property | Value |
|---|---|
| Option A text | Decisions were made about my design work without me |
| Option A destination | Scenario 1 → /scenario/expertise-bypass |
| Option B text | My strategic role was not recognized |
| Option B destination | Scenario 2 → /scenario/strategic-exclusion |
| Chip style | Same as Entry Screen chips — #F5EDE6 background, border-bottom #E4AD86, 8px radius |
| Numbers | Chips have decorative numbers — 01 and 02 — same style as Entry Screen chips |

---

## 8. Content Data Structure

### 8.1 Scenario Object
All scenario content is stored in a static JavaScript/JSON file. No backend, no CMS.

```js
// src/data/scenarios.js
export const scenarios = [
  {
    id: 'scenario-1',
    slug: 'expertise-bypass',
    label: 'SITUATION',
    scenarioTitle: 'Expertise Bypass',                        // renders as card title in Scenario List
    title: "If my work doesn't count, do I still count?",    // renders as subtitle in Scenario Detail header
    trigger: "You weren't in the meeting. The decisions were made. You're expected to execute.",  // renders in Scenario Detail header AND Scenario List card description
    sections: [
      { id: 'when', sectionLabel: 'RECOGNITION', heading: 'When this happens', content: [] },
      { id: 'coping', sectionLabel: 'YOUR WORKAROUND', heading: 'What most designers do', content: [] },
      { id: 'brain', sectionLabel: 'NEUROSCIENCE', heading: "What's happening in your brain", content: [] },
      { id: 'vedanta', sectionLabel: 'THE ROOT CAUSE', heading: 'The source of pain', content: [] },
    ]
  },
  // ... repeat shape for scenarios 2, 3, 4
]
```

**Field rendering map:**
| Field | Renders in | Style |
|---|---|---|
| `slug` | URL: /scenario/:slug | — |
| `label` | Not rendered — always "SITUATION", reserved for future use | — |
| `scenarioTitle` | Scenario Detail header — title line + Scenario List card title | Lora SemiBold 24px, #F5EDE6 (header) / Lora Bold, #2E2724 (card) |
| `title` | Scenario Detail header — subtitle line | Source Sans 3 Regular 14px, #F5EDE6 |
| `trigger` | Scenario Detail header — body line AND Scenario List card description | Source Sans 3 Regular 14px, #F5EDE6 (header) / #4F433E (card) |
| `sections[].sectionLabel` | Accordion header — label | Azeret Mono 10px, #077A98, uppercase |
| `sections[].heading` | Accordion header — heading | Lora Medium 500, 20px, #2E2724 |

### 8.2 Content Types

**7 content types total. One shared component renders `subsection-label` regardless of context.**

---

#### `paragraph`
Plain body text.
| Property | Value |
|---|---|
| Font | Source Sans 3 Regular 16px |
| Color | #2E2724 |
| Line-height | 26px |

---

#### `subsection-label`
Standalone heading that introduces a group below it. Used for: "You might feel", "Other designers say", "Why this helps temporarily?", "Why this doesn't solve it?". Same rendering in all contexts — context does not change the component.
| Property | Value |
|---|---|
| Font | Source Sans 3 SemiBold 16px |
| Color | #2E2724 |
| Line-height | 26px |

---

#### `pill`
Body feeling / emotional state. Hugs content — NOT full width. Flows inline with siblings.
| Property | Value |
|---|---|
| Font | Source Sans 3 Regular 14px |
| Color | #4F433E |
| Border | 0.5px solid #E4AD86 |
| Border-radius | 16px |
| Padding | 4px 12px |
| Layout | flex-wrap: wrap, gap: 14px 13px |
| Text case | Title Case (e.g. "Heart racing" not "HEART RACING") |

---

#### `quote`
Designer quote from interview. Full width.
| Property | Value |
|---|---|
| Font | Source Sans 3 Italic 14px |
| Color | #4F433E |
| Left border | 3px solid #077A98 |
| Padding-left | 8px |

---

#### `strategy`
Coping strategy item. Two lines — action + thought. Appears only in the YOUR WORKAROUND section.
| Property | Value |
|---|---|
| Icon | MdModeOfTravel, 16px, #2E2724 — left of action text, same row |
| `action` text | Source Sans 3 Regular 16px, #2E2724 — what the designer does |
| `thought` text | Source Sans 3 Italic 14px, #2E2724 — the internal belief, rendered directly below action |
| Gap between icon and action | 4px |
| Gap between action and thought | 0 (thought is flush below action) |
| Icon not in data | Icon is fixed per component — NOT a data field |

```js
{ type: "strategy", action: "Vent to colleagues or friends", thought: "\"They're being unfair. Anyone would feel sidelined here.\"" }
```

---

#### `neuroscience-card`
Self-contained neuroscience explanation block. Appears only in the NEUROSCIENCE section. Cards are separated by a divider.

**Rendering order (top to bottom):**
1. `title` — same styles as `subsection-label`: Source Sans 3 SemiBold 16px, #2E2724
2. `introText` — Source Sans 3 Regular 14px, #2E2724
3. Highlight block:
   - Background: rgba(79, 67, 62, 0.1) — translucent warm tint
   - Left border: 3px solid #077A98
   - Padding: 8px
   - Gap between label and body: 9px
   - `highlightLabel` — Azeret Mono Regular 10px, #077A98, uppercase
   - `highlightBody` — Source Sans 3 Regular 14px, #2E2724
4. `trailingText` — Source Sans 3 Regular 14px, #2E2724, 4px gap below highlight block

```js
{
  type: "neuroscience-card",
  title: "Your brain reads exclusion as danger",
  introText: "When you're excluded from decisions or your expertise is dismissed, your brain doesn't distinguish between social rejection and physical threat.",
  highlightLabel: "SOCIAL PAIN = PHYSICAL PAIN",
  highlightBody: "The same pain circuits that fire when you're physically hurt light up when you're professionally dismissed.",
  trailingText: "Social pain is physical pain to your nervous system."
}
```

---

#### `vedanta-card`
Self-contained Vedantic explanation block. Appears only in THE ROOT CAUSE section. Cards are separated by a divider.

**Rendering order (top to bottom):**
1. `title` — Azeret Mono Regular 10px, #077A98, uppercase (renders as a label — same visual as sectionLabel)
2. `insightText` — Source Sans 3 Italic 14px, #4F433E (short condensed insight, max 5 words)
3. `body` — Source Sans 3 Regular 14px, #2E2724

```js
{
  type: "vedanta-card",
  title: "The shift you didn't notice",
  insightText: "I am this skill.",
  body: "You worked hard and built real expertise. Then you stopped saying \"I have this skill\" and started saying \"I am this skill.\""
}
```

---

#### Divider between cards
A thin horizontal line separating neuroscience-cards and vedanta-cards from each other.
| Property | Value |
|---|---|
| Color | #E4AD86 (--border-chips) |
| Width | ~50% of container, centered |
| Height | 1px |
| Margin | 12px top and bottom |

### 8.3 i18n String Keys
All UI strings (not scenario content) are in the translation files. For MVP, en.json and fr.json are identical.

```json
{
  "entry": {
    "title": "What happened?",
    "subtitle": "Select what triggered you today"
  },
  "nav": {
    "back": "Back",
    "no_match": "This doesn't quite match what happened?",
    "see_other": "See other situations",
    "investigate": "If you want to investigate further"
  },
  "scenarios": {
    "title": "All situations",
    "subtitle": "One of these will feel familiar.",
    "sections_count": "4 sections"
  },
  "chips": {
    "01": "I wasn't invited to the design meeting",
    "02": "I did research, nobody cares",
    "03": "I was excluded from strategic meetings",
    "04": "I was left alone for stakeholder management",
    "05": "I was overruled by hierarchy",
    "06": "My promotion was refused with no explanation"
  },
  "followup": {
    "title": "I was excluded from strategic meetings",
    "subtitle": "Which sounds closer?",
    "option_a": "Decisions were made about my design work without me",
    "option_b": "My strategic role was not recognized"
  },
  "exit": {
    "acknowledgment": "This pattern will repeat. You've started to see what's driving it. Keep recognizing it.",
    "investigate": "If you want to investigate further"
  }
}
```

---

## 9. Development Modules

**IMPORTANT: Send one module at a time to Windsurf. Windsurf will generate a to-do list per module. This enables version control and clean retraction if something breaks.**

---

### Module 1 — Project Scaffold + Design Tokens (COMPLETE)

**What was built:**
- Initialised React + Vite project (Vite v7.3.1 — vite-plugin-pwa does not support Vite 8)
- Installed dependencies: Tailwind CSS, Shadcn/ui, react-icons, react-i18next, i18next, vite-plugin-pwa
- Configured vite-plugin-pwa with manifest (name, theme_color #2E2724, background_color #F5EDE6, display standalone)
- Created `src/i18n.js` with react-i18next setup, default language English
- Created `src/locales/en.json` and `src/locales/fr.json` — identical content for MVP
- Created `src/data/scenarios.js` as empty array `export const scenarios = []`
- Created global CSS `:root` tokens in `src/index.css`
- Configured `tailwind.config.js` to scan `./src/**/*.{js,jsx}` with Tailwind color mappings:
  - `canvas` → `var(--background)`
  - `surface` → `var(--surface-light)`
  - `chip-border` → `var(--border-chips)`
  - `primary` → `var(--text-primary)`
  - `secondary` → `var(--text-secondary)`
  - `light` → `var(--text-light)`
  - `teal` → `var(--accent)`
- Removed dark-mode `:root` block (no dark mode in this app)
- Added Google Fonts to `index.html`: Lora (700, 600, 500), Source Sans 3 (400, 600), Azeret Mono (400, 500)

**Verified `:root` tokens (Figma-confirmed):**
```css
:root {
  --background: #DDCFC5;
  --surface-light: #F5EDE6;
  --border-chips: #E4AD86;
  --text-primary: #2E2724;
  --text-secondary: #4F433E;
  --text-light: #F5EDE6;
  --accent: #077A98;
}
```

**ACTION REQUIRED — scenarios.js:**
The scaffold created `src/data/scenarios.js` as an empty array. Replace it entirely with the final `scenarios.js` content file before starting Module 4. The file contains all 4 scenarios with complete content. Data shape per scenario:
- `id`, `slug`, `label`, `scenarioTitle`, `title`, `trigger`
- `sections[]` → each has `id`, `sectionLabel`, `heading`, `content[]`
- `content[]` → 7 types: `paragraph`, `subsection-label`, `pill`, `quote`, `strategy`, `neuroscience-card`, `vedanta-card`

---

### Module 2 — Entry Screen (COMPLETE)

**What was built:**
- `src/screens/EntryScreen.jsx` — Entry Screen component
- `src/components/Chip.jsx` — Chip component with decorative number (Lora Bold 32px, 30% opacity, top-aligned) and text (Source Sans 3 16px)
- `src/components/LanguageToggle.jsx` — reusable toggle with `variant="dark"|"light"` prop, active dot indicator, 44×44px tap targets, URL param persistence
- Chip tap → navigates to correct scenario or follow-up screen per mapping in Section 6.1
- Language toggle reads `?lang=` URL param on mount (in `src/main.jsx`)
- All chip labels wired from i18n `chips` keys
- Header text wired from i18n `entry` keys
- Route `/scenarios` wired for Scenario List (placeholder)
- No "This doesn't match" link on Entry Screen — it belongs on Scenario Detail footer

**Known cosmetic issue (deferred to Module 8):**
- Language toggle position in header: gap between toggle and title set to 24px (Figma specifies 8px but 8px caused visual overlap in build)

---

### Module 3 — Follow-up Question Screen (Screen 6) (IN PROGRESS)

Build `src/screens/FollowupScreen.jsx`. Full screen spec in Section 7 Screen 6.

- Dark header band (#2E2724) — no SITUATION label on this screen
- Header title: "I was excluded from strategic meetings" — Lora SemiBold 24px, #F5EDE6, letter-spacing -0.3px — wired from i18n `followup.title`
- Header subtitle: "Which sounds closer?" — Source Sans 3 Regular 14px, #F5EDE6 — wired from i18n `followup.subtitle`
- Back arrow: MdArrowBack, #F5EDE6, top-left, 44×44px tap target → navigates to Entry Screen (/)
- Language toggle: dark variant (#F5EDE6 text), top-right, same row as back arrow
- Two chips WITH decorative numbers 01 and 02 — reuse Chip component from Module 2
- Option A text: wired from i18n `followup.option_a` → navigates to /scenario/expertise-bypass
- Option B text: wired from i18n `followup.option_b` → navigates to /scenario/strategic-exclusion
- Page background: #DDCFC5

---

### Module 4 — Scenario Detail Screen (Screens 2 & 3)

Build `src/screens/ScenarioDetail.jsx`. Full screen spec in Section 7 Screen 2 & 3.

#### 4.1 Screen structure
- Read scenario `slug` from URL params, match against scenarios array in scenarios.js
- Render `scenarioTitle` as header title — Lora SemiBold 24px, #F5EDE6
- Render `title` as header subtitle — Source Sans 3 Regular 14px, #F5EDE6
- 4 accordion sections, all collapsed by default, only one open at a time
- Back arrow: if user arrived via /followup → back to /followup. If arrived directly via chip → back to Entry Screen (/). Use React Router location state to track origin.

#### 4.2 Accordion section header
Each section renders two text elements:
- `sectionLabel` — Azeret Mono 10px, #077A98, uppercase
- `heading` — Lora Medium 500, 20px, #2E2724
- Expand icon: MdExpandMore (collapsed) / MdExpandLess (open) — right aligned, #2E2724
- Border-bottom: 1px solid #077A98 (accent) — both collapsed and open states
- Border-radius: first section top corners 4px, last section bottom corners 4px, middle sections 0

#### 4.3 Content renderer
Build a `ContentRenderer` component that maps each content item's `type` field to the correct component. **Exactly 7 types — no others.**

**CRITICAL: There is no `card-header` type. Use `subsection-label` instead.**

| Type | Component | Notes |
|---|---|---|
| `paragraph` | `<p>` | Source Sans 3 Regular 16px, #2E2724, line-height 26px |
| `subsection-label` | `<p>` bold | Source Sans 3 SemiBold 16px, #2E2724. Used for: "You might feel", "Other designers say", "Why this helps temporarily?", "Why this doesn't solve it?" |
| `pill` | Inline pill | Border 0.5px solid #E4AD86, border-radius 16px, padding 4px 12px, Source Sans 3 Regular 14px, #4F433E. flex-wrap: wrap, gap: 14px 13px. **NO text-transform: uppercase** — render text exactly as written in data (Title Case) |
| `quote` | Left-border block | Source Sans 3 Italic 14px, #4F433E, left border 3px solid #077A98, padding-left 8px |
| `strategy` | Icon + two lines | MdModeOfTravel 16px #2E2724 + action text (Source Sans 3 Regular 16px, #2E2724) on same row. Thought text (Source Sans 3 Italic 14px, #2E2724) directly below. Icon is hardcoded in component — NOT from data |
| `neuroscience-card` | Composite block | See Section 8.2 for exact rendering order: title → introText → highlight block → trailingText. Separated from next card by divider |
| `vedanta-card` | Composite block | See Section 8.2 for exact rendering order: title (Azeret Mono 10px, #077A98, uppercase) → insightText (Source Sans 3 Italic 14px, #4F433E) → body (Source Sans 3 Regular 14px, #2E2724). Separated from next card by divider |

#### 4.4 Divider between cards
Between each `neuroscience-card` and between each `vedanta-card`:
- Color: #E4AD86
- Width: ~50% of container, centered
- Height: 1px, margin 12px top and bottom

---

### Module 5 — Scenario List Screen (Screen 4)

Build `src/screens/ScenarioList.jsx`. Full screen spec in Section 7 Screen 4.

- 4 scenario cards, one per scenario from scenarios.js
- Card title: `scenarioTitle` field — Lora Bold, #2E2724
- Card description: `trigger` field — Source Sans 3 Regular 14px, #4F433E
- Tap full card → navigate to /scenario/:slug
- Back arrow → previous Scenario Detail
- Wire i18n strings from `scenarios` keys

---

### Module 6 — Exit Flow Screen (Screen 5)

Build `src/screens/ExitFlow.jsx`. Full screen spec in Section 7 Screen 5.

- Light header (#DDCFC5), sticky — position: sticky, top: 0
- Back arrow: MdArrowBack, #2E2724, 44×44px tap target → navigates back to Scenario Detail
- Language toggle: light variant (#2E2724 text), top-right, same row as back arrow
- Acknowledgment text: wired from i18n `exit.acknowledgment` — Lora Bold, large display size, #2E2724, left-aligned, 16px margin
- Horizontal divider: #E4AD86, between acknowledgment text and investigate further link
- Investigate further link:
  - Book/document icon, #077A98
  - Text: wired from i18n `exit.investigate`
  - Arrow → after text
  - Source Sans 3, #077A98, underlined
  - **Active and tappable for MVP** — links to external Acharya Prashant resources
  - NOT greyed out — Figma shows active teal link
- Page background: #DDCFC5

---

### Module 7 — Routing & Navigation

- Install React Router if not already installed
- Routes: `/`, `/scenario/:slug`, `/scenarios`, `/exit`, `/followup`
- Valid slugs: `expertise-bypass`, `strategic-exclusion`, `authority-override`, `opaque-evaluation`
- Invalid slug → redirect to Entry Screen (/)
- Pass `?lang=` URL param through ALL route transitions — never drop it on navigation
- Use React Router `location.state` to track navigation origin for back arrow behaviour
- Back arrow behaviour per Section 5.3 exactly:
  - Scenario Detail reached via chip → back to /
  - Scenario Detail reached via /followup → back to /followup
  - Scenario List → back to previous Scenario Detail
  - Exit Flow → back to Scenario Detail
  - Follow-up Question → back to /
- PWA home screen launch opens Entry Screen (/)

---

### Module 8 — QA & PWA Validation

#### 8.1 Visual QA
- Test all screens at 390px viewport width
- Verify #F5EDE6 = tappable / #DDCFC5 = not tappable — no exceptions across all screens
- Verify accordion collapsed headers all use #F5EDE6 background
- Verify accordion body (open) uses #DDCFC5 background
- Verify all tap targets minimum 44×44px (chips, accordion headers, back arrows, language toggle buttons, cards)
- Fix language toggle gap if visual overlap persists (currently 24px, Figma specifies 8px)
- WCAG AA contrast check on all text/background combinations

#### 8.2 Content renderer QA
- Verify all 7 content types render correctly in Scenario Detail
- Pills: confirm NO text-transform: uppercase — text must display in Title Case exactly as in data
- Pills: confirm flex-wrap with gap, NOT full-width
- Quotes: confirm left border 3px solid #077A98, italic, 14px — NOT 16px
- Strategy items: confirm MdModeOfTravel icon renders at 16px, action + thought on separate lines
- Neuroscience cards: confirm highlight block background is rgba(79,67,62,0.1) with left border #077A98
- Vedanta cards: confirm title renders as Azeret Mono 10px #077A98 uppercase label — NOT as a heading
- Confirm dividers appear between cards (neuroscience and vedanta sections)
- subsection-label: confirm Source Sans 3 SemiBold 16px — NOT Azeret Mono

#### 8.3 Data field QA
- Scenario Detail header: `scenarioTitle` renders as Lora SemiBold 24px title
- Scenario Detail header: `title` renders as Source Sans 3 Regular 14px subtitle
- Scenario List cards: `scenarioTitle` as card title, `trigger` as card description
- Accordion headers: `sectionLabel` as Azeret Mono 10px label, `heading` as Lora Medium 500 20px

#### 8.4 Navigation QA
- Verify lang URL param persists across all screen transitions
- Verify back arrow behaviour matches Section 5.3 exactly for all entry paths
- Verify Chip 03 → Follow-up screen → correct scenario routing

#### 8.5 PWA QA
- Test Add to Home Screen on iOS Safari
- Test Add to Home Screen on Android Chrome
- Verify home screen launch opens Entry Screen (/)
- Add PWA icon: create `public/icon-192.png`

---

## 10. Out of Scope for MVP
- French translation — strings structure is wired, FR content is Phase 2
- User accounts, authentication, email collection
- localStorage or any client-side persistence beyond URL param
- Progress tracking, completion states, achievement system
- Analytics or any tracking
- Back-office or content management system
- RAG or AI-generated content
- Illustrations or images of any kind
- Reading time estimates

---

## 11. Hard Constraints

| Constraint | Rule |
|---|---|
| Budget | Zero — all tools and hosting must be free tier |
| Codebase | Solo builder, no team — keep complexity minimal |
| Distribution | Free public URL — no app store, no paywall |
| Data | No user data collected, no GDPR obligations |
| Framework | React + Vite only — NOT Next.js |
| Icons | react-icons/md only — NOT Lucide, NOT @mui/icons-material |
| Tappable rule | #F5EDE6 = tappable, #DDCFC5 = not tappable — no exceptions |
| No form elements | No HTML form tags — use onClick handlers only |
| Mobile-first | All screens designed and tested at 390px width first |
| No chrome | No persistent bottom nav, no sidebar, no hamburger menu |
| Figma authority | Where PRD and Figma conflict, Figma wins |
