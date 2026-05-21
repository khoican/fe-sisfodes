---
name: accessibility-enhancer
description: Improves accessibility and Lighthouse scores for UI components and pages. Use when creating/updating React components or routes to ensure semantic HTML, proper ARIA labeling, and keyboard navigation.
---

# Accessibility Enhancer

## Overview
This skill guides the implementation of WCAG-compliant UI patterns in the SISFODES project, targeting a Lighthouse Accessibility score of 99.

## Workflow

1. **Audit Semantic Structure**: Ensure use of appropriate HTML landmarks (`<nav>`, `<main>`, `<section>`, etc.) and heading levels (`<h1>`-`<h6>`).
2. **Apply ARIA Patterns**:
   - Use `aria-label` or `aria-labelledby` for all interactive components lacking visible descriptive text.
   - For custom interactive elements, ensure proper `role` and state (`aria-expanded`, `aria-selected`, etc.).
3. **Keyboard Navigation**:
   - Ensure all interactive elements are focusable (`tabIndex`).
   - Implement focus trapping for dialogs and modals using native Radix patterns.
4. **Validation**: Use automated `axe-core` checks and manual keyboard navigation smoke testing.

## Standards & Patterns

- **Button/Input Labels**: Always include descriptive labels for screen readers.
- **Dynamic Content**: Ensure visual feedback for focus states (Tailwind `focus-visible:`).
- **Landmarks**: Every route must have a clear main landmark.

## Resources
- [ARIA Pattern Guide](references/aria-patterns.md) - Best practices for common UI components.
