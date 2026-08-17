---
name: mobile-first
description: Enforces mobile-first design, prioritizing responsiveness, premium UX, and quality design for all UI development.
---

# Mobile-First Design & Quality UX Rule

When working on UI development, layout changes, or creating new web pages, you must treat "mobile-first" as a holistic philosophy that encompasses both technical responsiveness and premium design quality.

## 1. Quality UX and Design
- **Premium Aesthetics**: Mobile layouts must look intentional and polished, not like a squished desktop view. Use appropriate typography scaling, ample whitespace, and beautiful UI elements.
- **Content Summarization**: Mobile users don't want to read "walls of text". Use progressive disclosure patterns (like native `<details>`/`<summary>` expanders) to make dense content scannable.
- **Touch Ergonomics**: All interactive elements (buttons, links, navigation pills) must be easily tappable on a touch screen. Avoid tiny hit targets.

## 2. Technical Responsiveness
- **Always assume a mobile-first approach**: Ensure the layout works gracefully on small screens first, using fluid widths (100%), flex-wrap, and vertically stacked elements.
- **Enhance for Desktop**: Use standard CSS media queries (`@media (min-width: 768px)`) to progressively enhance the layout for larger screens.
- **No Fixed Widths**: Never create fixed-width layouts that will overflow horizontally on a typical mobile device (e.g., 320px - 400px width). 
- **Adaptive Navigation**: Sticky sidebars or complex desktop navigation MUST adapt to mobile elegantly (e.g., transforming into sticky horizontal scrolling pills, hamburger menus, or bottom bars).

## 3. Self-Correction & Validation
- After implementing UI code, always ask yourself: "Does this look premium and work perfectly on a mobile phone?" If the layout breaks or looks clunky, you must refactor it.
