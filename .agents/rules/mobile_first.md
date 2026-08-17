---
name: mobile-first
description: Enforces mobile-first responsive design for all UI development.
---

# Mobile-First Design Rule

When working on UI development, layout changes, or creating new web pages:

1. **Always assume a mobile-first approach.** Ensure the layout works gracefully on small screens (e.g., stacking columns vertically, using fluid widths like 100% or flex-wrap, adjusting padding/fonts).
2. **Handle Desktop/Tablet via Media Queries.** Use standard CSS media queries or framework-specific responsive utilities (e.g., Tailwind's `sm:`, `md:`, `lg:` prefixes, or standard `@media (min-width: 768px)`) to progressively enhance the layout for larger screens.
3. **Responsive Sidebars & Navigation.** Sticky sidebars or complex desktop navigation MUST gracefully hide, convert to a hamburger menu, or stack horizontally on mobile views to avoid breaking the viewport.
4. **Never create fixed-width layouts** that will overflow horizontally on a typical mobile device (e.g., 320px - 400px width). 
5. **Self-Correction & Validation.** After implementing UI code, always ask yourself: "What happens to this layout on a mobile phone?" If the code doesn't explicitly handle it, you must refactor the layout to be responsive.
