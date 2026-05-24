---
name: jsdoc-generator
description: Generates standardized JSDoc for TypeScript code. Use when creating, refactoring, or updating functions, classes, and components to ensure consistent documentation with @description, @param, @return, and @example tags.
---

# JSDoc Generator

This skill provides a standardized workflow for documenting TypeScript code using JSDoc.

## Workflow

1.  **Analyze**: Identify the TypeScript construct (function, interface, class, or React component).
2.  **Generate**: Create a JSDoc block using the following mandatory tags:
    - `@description`: A concise explanation of the construct's purpose.
    - `@param`: For each parameter, include its name, type (TypeScript syntax), and a brief description.
    - `@return`: Describe the return value and its type.
    - `@example`: Provide a practical, runnable TypeScript usage example.
3.  **Apply**: Prepend the JSDoc block to the construct in the source file.

## Best Practices

- **Be Concise**: Focus on the _why_ and _how_ that isn't immediately obvious from the code.
- **Keep it Updated**: Always re-verify JSDoc after refactoring logic or changing signatures.
- **TypeScript Integration**: Use TypeScript types directly in JSDoc for better IDE support.

## Examples

See [references/patterns.md](references/patterns.md) for standardized patterns for various constructs.
