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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Designer Drift',
        short_name: 'Designer Drift',
        theme_color: '#2E2724',
        background_color: '#F5EDE6',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
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
| --text-secondary | #4F433E | Secondary text in pills, quotes|
| --text-light | #F6E9CD | Text on dark (#2E2724) backgrounds |
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
| Body Small| Source Sans 3 | 14px | Regular 400 | 22px | 0 |
| Subtitle | Source Sans 3 | 16px | Regular 400 | 26px | 0 |
| Label / Toggle | Azeret Mono | 10px | Medium 500 | — | 1.5px |


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
  --text-light: #F6E9CD;
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
| Active language indicator | Small dot under active language: 2px square, border-radius 1px, centered horizontally below the text. Color: #F6E9CD on dark variant, #2E2724 on light variant. Hidden under inactive language. |
| Tap target | Minimum 44×44px invisible touch area around each button |
| Dark header variant | #F6E9CD text (Entry, Scenario Detail, Follow-up screens) |
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

 Global Navigation Bar (all screens except Entry Screen)
 └─ Home icon → Entry Screen (/)
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
There is no bottom navigation bar, no sidebar, and no hamburger menu. A Global Navigation Bar (Section 5.5) appears on all screens except the Entry Screen — it is minimal (38px, 80% opacity) and contains back navigation, home access, and the language toggle."

### 5.5 Global Navigation Bar

Appears on every screen **except** Entry Screen.

| Property | Value |
|---|---|
| Height | 38px |
| Background | #2E2724 at 80% opacity |
| Padding | 8px top, 16px left, 16px right |
| Layout | justify-between: back arrow left, home icon center, language toggle right |

#### Icons
| Element | Value |
|---|---|
| Back arrow | MdArrowBack, 16px, color --text-light (#F6E9CD) |
| Home icon | MdHome, 16px, color --text-light (#F6E9CD), 44×44px tap target → navigates to Entry Screen (/) |
| Tap targets | All icons minimum 44×44px |

#### Language Toggle in Nav Bar
| Element | Value |
|---|---|
| EN (active) | Azeret Mono 10px, --text-light (#F6E9CD), full opacity |
| Active dot | 2px square, border-radius 1px, --text-light (#F6E9CD), centered below EN |
| Separator \| | --text-light (#F6E9CD), 40% opacity |
| FR (inactive) | --text-light (#F6E9CD), 40% opacity |

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
- Thumbnail (left): 54×54px, border-radius 16px, center-aligned vertically with chip text
- Text (right): Source Sans 3 Regular 16px, color #2E2724 — the actual chip label
- Gap between thumbnail and text: 12px

Chips are single-select only. Tapping a chip immediately navigates — no confirmation state.

#### Chip Thumbnail
Each chip displays a scenario illustration thumbnail on the left side.

| Property | Value |
|---|---|
| Size | 54×54px |
| Border radius | 16px |
| Vertical alignment | Center-aligned with chip text |
| File location | public/thumbnails/ |
| Filenames | expertise-bypass-thumb.png, strategic-exclusion-thumb.png, authority-override-thumb.png, opaque-evaluation-thumb.png, mixedthumbnail.png |

---

## 7. Screen Specifications

### Screen 1 — Entry Screen
Figma node: 76:10

#### Header Band
| Property | Value |
|---|---|
| Background | linear-gradient(to right, #2E2724 0%, #7B4B29 100%)
| Title text | What happened? |
| Title font | Lora Bold 32px, color #F6E9CD, letter-spacing -0.5px, whitespace-nowrap |
| Subtitle text | Select what triggered you today |
| Body Small | Source Sans 3 Regular 14px, color #F5EDE6 |
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
| Thumbnail | Left side, 54×54px, border-radius 16px, center-aligned vertically|
| Text style | Source Sans 3 Regular 16px, #2E2724 |
| Gap between thumbnail and text | 12px |
| Page background | #DDCFC5 |

**No Match CTA:** This link does NOT appear on the Entry Screen. It appears on the Scenario Detail screen footer, after the user has landed on a scenario.

---

### Screen 2 & 3 — Scenario Detail (Collapsed + Open)
Figma node: 100:366

#### Illustration Header
| Property | Value |
|---|---|
| Illustration zone height | 449px, full width |
| Illustration files | public/illustrations/[scenario-slug].png |
| Gradient overlay | linear-gradient(to right, #2E2724 0%, #7B4B29 100%) over bottom portion of illustration |
| Title text | `scenarioTitle` field |
| Title font | Lora SemiBold 24px, color #F6E9CD, letter-spacing -0.3px, left-aligned |
| Subtitle text | `title` field (the scenario question) |
| Subtitle font | Source Sans 3 Regular 16px, color #F6E9CD |
| Back arrow | Top left, MdArrowBack, #F6E9CD, 44×44px — floats over illustration on dark bar |
|Home icon | Middle,MdHome,#F6E9CD, 44×44px  — same dark bar |
| Language toggle | Top right, same row as back arrow, #F6E9CD text — same dark bar |

#### Accordion Sections
Each scenario has 4 accordion sections. All sections are collapsed by default (Screen 2). Tapping a header opens it (Screen 3). Only one section can be open at a time.

Each accordion section has TWO text elements:
- **Label** (top): Azeret Mono 10px, uppercase, letter-spacing 1.5px, color #077A98 — category label
- **Heading** (bottom): Lora Medium 500, 20px, #2E2724 — section title

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
| Padding | 8px horizontal, 8px vertical |

#### Accordion Body (Open — NOT Tappable)
| Property | Value |
|---|---|
| Background | #DDCFC5 (content area — not tappable) |
| Padding | 16px all sides |
| Icon on header when open | MdExpandLess (Material) |

#### Content Visual Treatments Inside Accordion Body
Three distinct visual treatments — never use uniform text blocks:
- **Situation descriptions**: plain paragraphs, Source Sans 3 Regular 16px, #2E2724
- **Body feelings / emotional states**: pills — hugs content, NOT full width, flows inline with siblings (flex-wrap: wrap, gap: 8px). Border 1px solid #E4AD86, border-radius 16px, padding 8px 4px, Source Sans 3 Regular 14px, #4F433E
- **Designer quotes**: left border 3px solid #077A98, italic, Source Sans 3 Regular 16px, #4F433E, padding-left 12px

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
Global Navigation Bar applies — same dark nav bar as all other screens. 'All situations' title and subtitle render as page content below the nav bar, not in a separate sticky header.

#### Scenario Cards
4 cards, one per scenario, vertically stacked with 16px gap.

| Property | Value |
|---|---|
| Card image band | Pre-cropped file from public/illustrations/[scenario-slug]-card.png, height 100px, full card width, object-fit cover, border-radius 8px 8px 0 0 |
| Card background | #F5EDE6 |
| Card border | Bottom only — 1px solid #E4AD86 |
| Card border radius | 4px |
| Card padding | 16px — applies to content below image band only |
| No SITUATION label | Cards do NOT have the Azeret Mono SITUATION label |
| Title | `scenarioTitle` field — Lora Bold, #2E2724 |
| Description | `trigger` field — Source Sans 3 Regular 16px, #4F433E |
| Footer | Book/document icon + "4 sections" text — Source Sans 3 Regular 14px, #4F433E |
| Tap behaviour | Full card tappable → navigates to Scenario Detail |
| No reading time | Do not show read time estimates |

#### Scenario Card Image Files
| Scenario | File |
|---|---|
| Expertise Bypass | public/illustrations/expertise-bypass-card.png |
| Strategic Exclusion | public/illustrations/strategic-exclusion-card.png |
| Authority Override | public/illustrations/authority-override-card.png |
| Opaque Evaluation | public/illustrations/opaque-evaluation-card.png |

**4 scenario card titles and descriptions:**
- Expertise Bypass — "Your work was sidelined. Decisions were made without you, and you're expected to execute them"
- Exclusion from Strategic Decisions — "You're doing the work but not in the room where it's shaped. You find out what was decided, not why."
- Authority Override — "You brought evidence. They brought hierarchy. The decision was already made before you spoke."
- Opaque Evaluation — "You don't know what good looks like here. The goalposts move and nobody tells you where they are."

---

### Screen 5 — Exit Flow

- Full screen illustration: `public/illustrations/exit-flow.png` — covers entire screen background
- Global Navigation Bar applies — floats over full-screen illustration. Nav bar background #2E2724 at 80% opacity provides separation from illustration."
- Acknowledgment text: wired from i18n `exit.acknowledgment` — Lora Medium Italic, 32px, line-height 40px, letter-spacing -0.5px, #2E2724, left-aligned, 16px margin, positioned over upper portion of illustration
- Investigate further link: anchored to bottom of screen, center aligned,  #F5EDE6 background surface, 16px padding, active and tappable for MVP

---

### Screen 6 — Follow-up Question (Chip 03 only)
Figma node: 100:366

#### Header Band
Global Navigation Bar applies — same dark nav bar as all other screens.
| Property | Value |
|---|---|
| Background |linear-gradient(to right, #2E2724 0%, #7B4B29 100%) |
| No SITUATION label | This screen does NOT have the Azeret Mono SITUATION label |
| Title | I was excluded from strategic meetings — Lora SemiBold 24px, letter-spacing -0.3px, color #F6E9CD, left-aligned |
| Subtitle | Which sounds closer? — Source Sans 3 Regular 16px, color #F6E9CD |

#### Two-Option Chips
| Property | Value |
|---|---|
| Option A text | Decisions were made about my design work without me |
| Option A destination | Scenario 1 → /scenario/expertise-bypass |
| Option B text | My strategic role was not recognized |
| Option B destination | Scenario 2 → /scenario/strategic-exclusion |
| Chip style | Same as Entry Screen chips — #F5EDE6 background, border-bottom 1px solid #E4AD86, border-radius 8px |
| Thumbnail | Left side, 54×54px, border-radius 16px, center-aligned vertically |
|Option A thumbnail | public/thumbnails/expertise-bypass-thumb.png |
|Option B thumbnail | public/thumbnails/strategic-exclusion-thumb.png |
No numbersThese chips do NOT have decorative numbers
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
    scenarioTitle: 'Expertise Bypass',
    title: "If my work doesn't count, do I still count?",
    trigger: "You weren't in the meeting. The decisions were made. You're expected to execute.",
    sections: [
      { id: 'when', sectionLabel: 'RECOGNITION', heading: 'When this happens', content: [] },
      { id: 'coping', sectionLabel: 'YOUR WORKAROUND', heading: 'What most designers do', content: [] },
      { id: 'brain', sectionLabel: 'NEUROSCIENCE', heading: "What's happening in your brain", content: [] },
      { id: 'vedanta', sectionLabel: 'THE ROOT CAUSE', heading: 'The source of pain', content: [] },
    ]
  },
  {
    id: 'scenario-2',
    slug: 'strategic-exclusion',
    label: 'SITUATION',
    scenarioTitle: 'Exclusion from Strategic Decisions',
    title: "If I'm not invited, am I still at execution level?",
    trigger: "You're doing the work but not in the room where it's shaped. You find out what was decided, not why.",
    sections: [
      { id: 'when', sectionLabel: 'RECOGNITION', heading: 'When this happens', content: [] },
      { id: 'coping', sectionLabel: 'YOUR WORKAROUND', heading: 'What most designers do', content: [] },
      { id: 'brain', sectionLabel: 'NEUROSCIENCE', heading: "What's happening in your brain", content: [] },
      { id: 'vedanta', sectionLabel: 'THE ROOT CAUSE', heading: 'The source of pain', content: [] },
    ]
  },
  {
    id: 'scenario-3',
    slug: 'authority-override',
    label: 'SITUATION',
    scenarioTitle: 'Authority Override',
    title: "Does truth matter at all here?",
    trigger: "You brought evidence. They brought hierarchy. The decision was already made before you spoke.",
    sections: [
      { id: 'when', sectionLabel: 'RECOGNITION', heading: 'When this happens', content: [] },
      { id: 'coping', sectionLabel: 'YOUR WORKAROUND', heading: 'What most designers do', content: [] },
      { id: 'brain', sectionLabel: 'NEUROSCIENCE', heading: "What's happening in your brain", content: [] },
      { id: 'vedanta', sectionLabel: 'THE ROOT CAUSE', heading: 'The source of pain', content: [] },
    ]
  },
  {
    id: 'scenario-4',
    slug: 'opaque-evaluation',
    label: 'SITUATION',
    scenarioTitle: 'Opaque Evaluation',
    title: "Who will plan and track my progress, if not me?",
    trigger: "You don't know what good looks like here. The goalposts move and nobody tells you where they are.",
    sections: [
      { id: 'when', sectionLabel: 'RECOGNITION', heading: 'When this happens', content: [] },
      { id: 'coping', sectionLabel: 'YOUR WORKAROUND', heading: 'What most designers do', content: [] },
      { id: 'brain', sectionLabel: 'NEUROSCIENCE', heading: "What's happening in your brain", content: [] },
      { id: 'vedanta', sectionLabel: 'THE ROOT CAUSE', heading: 'The source of pain', content: [] },
    ]
  }
]
```
```

### 8.2 Content Types

| Type | Rendering |
|---|---|
| paragraph | Plain body text — Source Sans 3 Regular 16px, #2E2724, left-aligned |
| subsection-label | Standalone heading — Source Sans 3 SemiBold 16px, #2E2724. Used for: "You might feel", "Other designers say", "Why this helps temporarily?", "Why this doesn't solve it?" |
| quote | Designer quote — left border 3px solid #077A98, Source Sans 3 Italic 16px, #4F433E, padding-left 8px |
| pill | Body feeling — hugs content, NOT full width, flex-wrap: wrap, gap: 8px. Border 1px solid #E4AD86, border-radius 16px,  padding 8px 4px, Source Sans 3 Regular 14px, #4F433E. NO text-transform: uppercase — render Title Case exactly as written in data |
| strategy | Left border + two lines Left border 2px solid #E4AD86. Action text: Source Sans 3 Regular 16px, #2E2724. Thought text: Source Sans 3 Italic 14px, #2E2724, directly below. No icon. |
| neuroscience-card | Composite block — title (Source Sans 3 SemiBold 16px, #2E2724) → introText (Source Sans 3 Regular 14px, #2E2724) → highlight block (background rgba(79,67,62,0.15), left border 3px solid #077A98, padding 8px: highlightLabel Azeret Mono 10px #077A98 uppercase, highlightBody Source Sans 3 Regular 14px #2E2724) → trailingText (Source Sans 3 Regular 14px, #2E2724, 4px gap below highlight). Cards separated by divider. |
| vedanta-card | Composite block — title (Azeret Mono 10px, #077A98, uppercase, letter-spacing 1.5px — renders as label NOT heading) → insightText (Lora Italic 20px, line-height 28px, letter-spacing 0, #4F433E) → body (Source Sans 3 Regular 16px, #2E2724). Cards separated by divider. |
| divider | Between neuroscience-cards and vedanta-cards — #E4AD86, ~50% width centered, 1px height, margin 12px top and bottom |

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
- Added Google Fonts to `index.html`: Lora (700), Source Sans 3 (400), Azeret Mono (400, 500)

**Verified `:root` tokens (Figma-confirmed):**
```css
:root {
  --background: #DDCFC5;
  --surface-light: #F5EDE6;
  --border-chips: #E4AD86;
  --text-primary: #2E2724;
  --text-secondary: #4F433E;  /* verified against Figma — not #4F443E */
  --text-light: #F6E9CD;
  --accent: #077A98;
}
```

---

### Module 2 — Entry Screen (COMPLETE)

**What was built:**
- `src/screens/EntryScreen.jsx` — Entry Screen component
- `src/components/Chip.jsx` — Chip component with decorative number (Lora Bold 32px, 30% opacity, top-aligned) and text (Source Sans 3 16px) - numbers are gone, thumbnails replaced them
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

- Two chips WITH decorative numbers 01 and 02 — reuse Chip component - no decorative numbers, thumbnail replaced them
- Option A → /scenario/expertise-bypass
- Option B → /scenario/strategic-exclusion
- Back arrow → Entry Screen (/)
- Wire i18n strings from `followup` keys

---

### Module 4 — Scenario Detail Screen (Screens 2 & 3)

Build `src/screens/ScenarioDetail.jsx`. Full screen spec in Section 7 Screen 2 & 3.

- Read scenario slug from URL params, match against scenarios.js
- 4 accordion sections, all collapsed by default, only one open at a time
- Back arrow: if user arrived via /followup → back to /followup. If arrived directly via chip → back to Entry Screen (/). Use React Router location state to track origin.
- Wire scenario data from scenarios.js
- Wire i18n strings for UI labels

---

### Module 5 — Scenario List Screen (Screen 4)

Build `src/screens/ScenarioList.jsx`. Full screen spec in Section 7 Screen 4.

- 4 scenario cards, tap card → corresponding Scenario Detail
- Back arrow → previous Scenario Detail
- Wire i18n strings from `scenarios` keys

---

### Module 6 — Exit Flow Screen (Screen 5)

Build `src/screens/ExitFlow.jsx`. Full screen spec in Section 7 Screen 5.

- Back arrow → Scenario Detail
- Wire i18n strings from `exit` keys

---

### Module 7 — Routing & Navigation

- Routes: /, /scenario/:slug, /scenarios, /exit, /followup
- Valid slugs: expertise-bypass, strategic-exclusion, authority-override, opaque-evaluation
- Pass lang URL param through all route transitions
- Back arrow behaviour per Section 5.3 exactly
- PWA home screen launch opens Entry Screen (/)

---

### Module 8 — QA & PWA Validation

#### 8.1 Visual QA
- Test all screens at 390px viewport width
- Verify #F5EDE6 = tappable / #DDCFC5 = not tappable — no exceptions
- Verify accordion collapsed headers all use #F5EDE6 background
- Verify accordion body (open) uses #DDCFC5 background
- Verify all tap targets minimum 44×44px
- Verify Global Navigation Bar appears on all screens except Entry Screen
- Verify Global Navigation Bar background is #2E2724 at 80% opacity
- Verify Entry Screen header uses gradient: linear-gradient(to right, #2E2724 0%, #7B4B29 100%)
- Verify Scenario Detail illustration zone is 449px height, full width
- Verify gradient overlay renders correctly over illustration bottom portion
- Verify chip thumbnails render at 54×54px with 16px border-radius
- Verify Scenario List cards have 100px image band at top
- Verify Exit Flow full-screen illustration renders correctly
- WCAG AA contrast check on all text/background combinations

#### 8.2 Content Renderer QA
- Verify all 7 content types render: paragraph, subsection-label, pill, quote, strategy, neuroscience-card, vedanta-card
- Pills: NO text-transform: uppercase — Title Case only
- Pills: flex-wrap, NOT full-width
- Quotes: left border 3px solid #077A98, italic, 14px
- Strategy: left border 2px solid #E4AD86, action + thought on separate lines, NO icon
- Neuroscience cards: highlight block background is rgba(79,67,62,0.15) with left border #077A98
- Vedanta cards: title renders as Azeret Mono 10px #077A98 uppercase label — NOT a heading
- Vedanta cards: body text renders at 16px not 14px
- Dividers appear between cards in neuroscience and vedanta sections
- subsection-label: Source Sans 3 SemiBold 16px — NOT Azeret Mono

#### 8.3 Data Field QA
- Scenario Detail illustration: correct file loads per slug from public/illustrations/[slug].png
- Scenario Detail header: `scenarioTitle` renders as Lora SemiBold 24px
- Scenario Detail header: `title` renders as Source Sans 3 Regular 16px subtitle
- Scenario List cards: `scenarioTitle` as card title, `trigger` as card description
- Scenario List cards: correct image file loads per slug from public/illustrations/[slug]-card.png
- Chip thumbnails: correct file loads per slug from public/thumbnails/

#### 8.4 Navigation QA
- lang URL param persists across all screen transitions
- Back arrow behaviour matches Section 5.3 exactly for all entry paths
- Home icon in nav bar always navigates to Entry Screen (/)
- Chip 03 → Follow-up screen → correct scenario routing

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
| Nav bar | Global nav bar (Section 5.5) on all screens except Entry Screen — no other persistent chrome |
| Figma authority | Where PRD and Figma conflict, Figma wins |
