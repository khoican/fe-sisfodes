---
name: seo-optimizer
description: Generates SEO-friendly code for components and pages. Use when creating or updating UI components, routes, or pages to ensure a Lighthouse SEO score of 100 by managing meta tags, semantic HTML, and accessibility attributes.
---

# SEO Optimizer Skill

This skill provides guidelines and patterns for generating SEO-friendly code to achieve a Lighthouse SEO score of 100.

## Workflow

1.  **Analyze**: Identify the component or page that requires SEO optimization.
2.  **Optimize**:
    - **Meta Tags**: Ensure unique, descriptive `<title>` and `<meta name="description">` tags.
    - **Semantic HTML**: Use correct tags (`<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`, `<h1>` to `<h6>`).
    - **Accessibility**: Add `aria-label`, `alt` attributes for images, and ensure good contrast.
    - **Performance**: Use optimized assets and lazy loading where appropriate.
3.  **Validate**: Verify SEO metadata and structure.

## Best Practices

- **Meta Tags**: Use TanStack Router's `meta` configuration or dynamic head injection.
- **Semantic Structure**: Every page MUST have exactly one `<h1>`. Use `<h2>`–`<h6>` for logical hierarchy.
- **Images**: All `<img>` tags MUST have descriptive `alt` text.
- **Links**: All links (`<a>`, `<Link>`) MUST have descriptive text or `aria-label` if using icons.

## References

- [SEO Patterns](references/patterns.md) - Standardized SEO code patterns and structures.
