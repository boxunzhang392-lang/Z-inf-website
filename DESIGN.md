---
name: Zinf
description: A charcoal editorial system for the next generation of AI builders.
colors:
  ink: "#101111"
  surface: "#151616"
  surface-soft: "#1d1f1e"
  silver: "#d8d9d6"
  silver-strong: "#f0f1ee"
  smoke: "#9a9d98"
  line: "rgb(216 217 214 / 0.18)"
  accent: "#1683ff"
  focus: "#70b4ff"
typography:
  display:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(3.25rem, 7.5vw, 8.8rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.07em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 4.7vw, 5.7rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.06em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  sharp: "0px"
spacing:
  shell-gutter: "clamp(1rem, 4vw, 4.5rem)"
  section-start: "clamp(6rem, 12vw, 11rem)"
  section-end: "clamp(3rem, 7vw, 7rem)"
  control-x: "1.3rem"
components:
  button-solid:
    backgroundColor: "{colors.silver-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "0 1.3rem"
    height: "3.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.silver-strong}"
    rounded: "{rounded.sharp}"
    padding: "0 1.3rem"
    height: "3.25rem"
  media-frame:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.sharp}"
---

# Design System: Zinf

## Overview

**Creative North Star: “The Youth AI Darkroom”**

**Design thesis:** Youth AI work moves from first spark to durable project momentum. The interface expresses that journey through charcoal cinema, documentary imagery, oversized editorial type, and long sections that feel assembled rather than templated. It should feel culturally current and experimental while retaining the precision of an AI lab.

The system is dark, monochrome, flat, and deliberately sharp. Cool silver type provides hierarchy; smoke tones carry supporting information; the Zinf brand blue marks orientation and interaction without turning the site colorful. Composition depends on scale, crop, asymmetry, hairlines, and pacing—not decoration.

**Key characteristics:**

- Full-bleed documentary media with restrained monochrome grading.
- Section-specific synthetic placeholder media prevents project, journey, Story wall, and participation scenes from recycling the same three photographs.
- Extreme type-scale contrast: compact labels beside monumental declarations.
- Sharp frames, thin dividers, flat surfaces, and no ornamental shadows.
- Spacious editorial sequencing with asymmetric desktop compositions.
- A subtle fixed grain that unifies type, photography, and charcoal surfaces.

## Colors

The palette is a narrow charcoal-to-silver spectrum with one Zinf-blue signal color sampled from the approved wordmark. The frontmatter tokens are normative.

### Primary

- **Zinf Brand Blue** (`accent`): section indices, stage numbers, connectors, highlighted letters, selection, and hover cues. Use it sparingly so it remains a navigational signal. `#1683ff` is the brighter portion of the logo gradient selected to keep small text AA-compliant on every charcoal surface.
- **Pale Focus Blue** (`focus`): keyboard focus outlines only; it is brighter than the accent to remain visible on every charcoal surface.

### Neutral

- **Charcoal Ink** (`ink`): page background and deepest image scrims.
- **Raised Charcoal** (`surface`): alternating section field; it separates chapters without implying a card.
- **Soft Charcoal** (`surface-soft`): media loading and empty-frame backing.
- **Cool Silver** (`silver`): primary body text and outlined controls.
- **Bright Silver** (`silver-strong`): display type, high-priority labels, brand marks, and filled controls.
- **Smoke** (`smoke`): descriptions, metadata, captions, and de-emphasized legal content.
- **Hairline Silver** (`line`): low-contrast dividers and structural borders.

**The One Signal Rule.** Zinf blue is the only chromatic UI voice. Do not introduce competing accent colors, colored gradients, or broad accent-filled surfaces.

## Typography

**Display font:** Archivo Black, a single-weight, compressed-feeling voice for major editorial statements.

**Body font:** Manrope, used for navigation, body copy, labels, metadata, controls, and the giant hero wordmark.

Archivo Black carries section headlines, manifesto lines, participation titles, and closing statements in uppercase with tight tracking and compressed line-height. Manrope provides the quieter, highly legible counterpoint for the hero promise, navigation, labels, and body copy. The oversized hero `Zinf` crop uses the approved transparent wordmark asset directly rather than approximating it with a font. Chinese text remains in the Manrope sans-serif stack and should be tested for readable fallback behavior.

### Hierarchy

- **Display:** the `display` token is the recurring section-title baseline. Larger signatures are allowed where already established: manifesto text reaches `11rem`, participation titles `9rem`, and the closing statement `19rem` through fluid clamps.
- **Headline:** the `headline` token is for important mixed-case statements that need less theatrical weight than Archivo Black.
- **Body:** use the `body` token for explanatory Chinese and English. Keep paragraphs narrow—generally `23–35rem`—and preserve the generous `1.7–1.85` line-height.
- **Label:** use the `label` token for section indices, stage markers, media notes, and taxonomy. Labels are typically uppercase and never replace readable body copy.
- **Manifesto translation:** Manrope at `1rem`, medium weight, smoke tone, and generous leading. On desktop it sits beside the corresponding English declaration as an editorial annotation; on mobile it follows directly below.
- **Hero promise:** Manrope at modest scale, medium weight, tight tracking, and centered measure. Its restraint lets the background and giant wordmark carry the first viewport.

**The Scale-Contrast Rule.** Pair monumental display type with compact supporting copy. Avoid several adjacent medium-sized headings, which flattens the editorial hierarchy.

## Layout

The shared content shell is capped at `1680px` with fluid gutters from `1rem` to `4.5rem`. Vertical rhythm is intentionally expansive: headings open chapters with fluid top and bottom spacing, and major sections often use viewport-aware height or padding. Desktop layouts combine split headings, alternating media/text rows, a 12-column project composition, a horizontally scrolling event strip, and full-width participation panels.

The hero is a full-viewport composition: a preloaded full-bleed image under a fixed `68px` navigation bar, centered infinity mark and two-line promise near the upper third, and a giant cropped `Zinf` wordmark occupying the lower field. The monumental wordmark uses a continuous `i → n → f` ligature so its middle reads as one flowing gesture rather than separate blocks; the `n` gains weight through its arch, with a right downstroke visibly heavier than its left entry stroke. Preserve the large empty field between the central message and the wordmark.

Recurring section patterns are:

- A small blue section index followed by an oversized title and a narrow explanatory paragraph.
- Hairline borders marking chapter starts, rows, and data-like lists.
- Every growth-journey stage is a scroll-driven convergence scene: a centered portrait frame holds its ground while the stage title splits into two balanced phrases that travel inward from the viewport edges, from “发现 / 人才” through “早期 / 孵化”.
- Projects use offset spans and varied image proportions rather than uniform cards.
- The Story wall forms a variable-width film strip that moves automatically at a restrained pace. Its position rail remains visible and interactive at all times for mouse, touch, and keyboard scrubbing; visitors may seek during playback or while paused, and automatic playback continues from the selected position.
- The ecosystem reads left-to-right from discovery channels through a narrow Zinf connection axis into a larger youth-and-project field, showing only confirmed relationships. Its item numbering forms one uninterrupted `01–10` sequence across both fields; group headings never consume or restart the sequence.
- Participation uses edge-to-edge photographic panels; the closing section returns to a sparse shell and oversized type.

Below `768px`, the system becomes purpose-built for the compact viewport: gutters become `1rem`, the header becomes `64px`, desktop navigation becomes an accessible menu, all six journey stages preserve their central image and edge-to-center type movement with titles measured so both halves remain fully visible, project and event media standardize to `4:3`, the event strip becomes a vertical list, the ecosystem reorders into discovery channels → Zinf → youth and projects, and participation, CTA, and footer content stack. Display sizes remain bold but clamp aggressively, and long headings may wrap anywhere when necessary. Below `390px`, the brand mark and join-label width tighten further.

**The Editorial Assembly Rule.** Desktop sections may be asymmetric, but mobile reading order must always follow the semantic DOM and become linear.

## Elevation & Depth

There are no box shadows. Depth comes from the three charcoal surface tones, low-opacity hairlines, image scrims, controlled opacity, scale contrast, and the hero wordmark’s screen blend. A fixed, pointer-transparent grain layer repeats at `240px`, uses soft-light blending, and stays at `0.055` opacity; it should register as material texture, never as visible noise.

Media uses a documentary monochrome grade at rest: full grayscale, slightly reduced contrast, and lowered brightness. Selected project, event, and participation imagery may gain a restrained amount of color and a very small scale shift on hover or keyboard focus. The hero remains decisively monochrome beneath layered radial and vertical scrims.

**The Flat Darkroom Rule.** Never use shadows to lift cards or controls. Create separation with tone, image treatment, borders, crop, and spacing.

## Shapes

The dominant form language is rectangular and sharp (`0px` radius). Buttons, navigation surfaces, media frames, panels, QR placeholders, and section containers use hard corners and thin rules. The infinity mark is the deliberate exception: three overlapping ellipses used only as a brand gesture, not as a general rounded-component motif.

Media is clipped to controlled editorial aspect ratios—`16:10`, `2:1`, `4:5`, `5:6`, or `4:3` depending on the composition. Do not turn these frames into rounded cards or detached tiles.

## Components

### Navigation

The header is fixed over the hero with a top-to-bottom charcoal gradient. Desktop navigation is centered, the Archivo Black wordmark anchors the left, and a solid silver join action anchors the right. Below `768px`, replace link navigation with a `40px` sharp menu button and a full-width charcoal menu whose rows are at least `52px` high.

### Buttons and links

Filled actions invert the palette with bright silver on charcoal ink; outlined actions remain transparent with silver borders. Controls are sharp, compact, and label-led, with arrow icons indicating outward movement. Enabled controls use subtle `180ms` translate or press feedback. Unavailable destinations must remain disabled, visibly muted, titled, and labeled `待开放`; never make placeholder actions appear functional.

### Media and project features

Images fill their frames with `object-fit: cover`, reserve dimensions through explicit aspect ratios, and use `next/image` sizing. Hero media is priority-loaded; below-the-fold media remains eligible for lazy loading. Project and journey features are editorial rows, not generic cards, and image movement must stay subtle enough to preserve legibility of adjacent text.

All generated images are synthetic placeholders. Before public use, replace them with authorized, Zinf-owned real activity and project media. Until replacement, keep the visible placeholder note and an alt description that explicitly identifies the image as synthetic and pending authorized replacement.

The three participation actions route to separate student, school, and partner pages. Until their content is confirmed, each route intentionally renders the same empty near-black canvas rather than invented copy or calls to action.

### Content placeholders

Unverified projects, Story wall entries, participation paths, contact details, social channels, and legal fields live in `data/site-content.ts`. Use explicit values such as `待确认`, `待补充`, and `待开放`; never scatter invented proof or silent placeholder facts through components. Media objects retain `placeholder: true`, and visible labels, alt text, button states, and centralized data must be updated together when real content arrives.

### Motion

The first viewport opens like an AI darkroom exposure: the documentary background develops from a near-black, slightly enlarged frame into focus over roughly `1.05s`, accompanied by one broad monochrome exposure wash that never loops. The monumental `Zinf` asset rises from below, the infinity mark expands, the promise and supporting lines emerge through clipped horizontal masks, and the navigation follows. All moving layers use only transform and opacity, while the wash's blur is static. On the first scroll, the hero stage remains pinned while only the monumental `Zinf` asset rises at a deliberately slowed rate: its scroll runway is `2.2×` the visual lift on desktop and `2×` in compact viewports. Only after the asset reaches the viewport edge may the About chapter cover the hero. The `Z` and `inf` definition chapters each provide a `0.72`-viewport reading runway: a continuous diagonal opacity mask travels across each bilingual type block while the type field advances upward, avoiding line-by-line stepping without intercepting the wheel. The hero, `Z` definition, and `inf` definition share the hero's near-black surface with no dividing rules; restrained top shadows preserve the sense of one page covering another without breaking the continuous scene. Each of the six growth stages adds a `0.36`-viewport native-scroll runway beneath a fixed stage (`0.4` on compact screens). The first `25%` is a fully static reading dwell, the next `55%` uses a quadratic ease-out to bring the two title halves together while the central `4:5` image scales from `0.7` to `1`, and the final `20%` holds the completed composition. Consecutive panels overlap by only `0.08` viewport, so the following page does not enter until the convergence is complete and the supporting copy has had a clear reading interval. One passive scroll listener and one animation-frame scheduler update all six stages, with no per-stage listeners. Scroll reveals travel `38px` upward over `0.72s`, run once when roughly `18%` visible, and use the editorial ease `cubic-bezier(0.16, 1, 0.3, 1)`. Image transforms use `700ms`; image filter changes use `500ms`; control feedback stays near `180ms`; the mobile menu uses `250ms`.

Motion must honor both `useReducedMotion` and `prefers-reduced-motion`. Reduced-motion mode removes entrance offsets, scaling, and smooth scrolling; animations and transitions collapse to effectively immediate timing. Do not rely on motion to convey content or state.

### Accessibility

Preserve the `zh-CN` document language, semantic landmarks, labelled sections, descriptive media text, and the skip link. Every link, button, and focusable gallery item needs a visible `2px` pale-blue focus outline with sufficient offset. Hover behavior must have a keyboard equivalent where it reveals emphasis. Maintain WCAG AA contrast, stable media dimensions, readable bilingual copy, and clear disabled states. Do not add a sound control unless real audio is present.

## Do's and Don'ts

### Do:

- **Do** preserve the charcoal, silver, smoke, and single-accent hierarchy.
- **Do** use asymmetry, crop, hairlines, and vertical pacing to create energy.
- **Do** keep body copy narrow and calm beside oversized display type.
- **Do** turn complex layouts into explicit single-column flows below `768px`.
- **Do** keep synthetic media and unverified facts visibly marked until authorized content replaces them.
- **Do** verify keyboard focus, reduced motion, bilingual wrapping, contrast, and media alt text whenever a section changes.

### Don't:

- **Don't** introduce rounded cards, soft pills, floating panels, or ornamental shadows.
- **Don't** convert the page into a conventional education grid or SaaS feature-card layout.
- **Don't** add neon AI gradients, multiple accents, glossy glass effects, or decorative color noise.
- **Don't** use cheerful stock photography or full-color imagery that breaks the documentary monochrome treatment.
- **Don't** fabricate partners, schools, people, projects, metrics, dates, awards, testimonials, or legal details.
- **Don't** hide placeholder status, activate unavailable controls, or treat synthetic imagery as real documentation.
- **Don't** add constant ambient motion, exaggerated parallax, or transitions without reduced-motion parity.
