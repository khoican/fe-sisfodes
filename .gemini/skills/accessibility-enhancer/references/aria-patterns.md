# ARIA Pattern Guide

This reference provides standardized accessibility patterns for common UI components within the SISFODES project, ensuring consistency with WCAG standards and Shadcn UI conventions.

## 1. Buttons & Links
- **Buttons**: Must be `<button type="button">`. Avoid using `<div>` or `<span>` with `onClick`.
  - Use `aria-label` if no visible text exists (e.g., icon-only buttons).
- **Links**: Use `<a>`. Avoid using `<button>` for navigation.

## 2. Interactive Components (Dropdowns, Dialogs)
- **Dialogs/Modals**:
  - Must use `aria-modal="true"` and `role="dialog"`.
  - Use `aria-labelledby` to point to the dialog title.
- **Dropdowns**:
  - Use `aria-haspopup="true"` and `aria-expanded` (toggle boolean state).
  - Ensure escape key closes the menu.

## 3. Form Inputs
- **Labels**: Every input MUST have a corresponding `<label for="id">` or be wrapped in a label.
- **Error Messages**: Use `aria-describedby` to associate the input with an error message or hint.
- **Required Fields**: Use the `required` attribute and, if visually indicated, `aria-required="true"`.

## 4. Semantic Landmarks
- Always wrap main content in `<main>`.
- Use `<nav>` for the navigation menu.
- Use `<header>` and `<footer>` for persistent structural elements.

## 5. Focus Management
- Always use `focus-visible:` utility class in Tailwind to ensure custom focus styles are only visible when navigated by keyboard.
- Never use `outline: none` without providing a robust, highly visible custom focus state.
