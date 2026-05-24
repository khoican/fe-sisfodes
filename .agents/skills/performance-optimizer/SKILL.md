---
name: performance-optimizer
description: Generates high-performance component and page code. Use when creating or updating UI components, data fetching, or page architecture to achieve a Lighthouse Performance score of 99 by applying lazy loading, memoization, and efficient resource handling.
---

# Performance Optimizer Skill

This skill provides guidelines and patterns for generating high-performance code to achieve a Lighthouse Performance score of 99.

## Workflow

1.  **Analyze**: Identify the component or route that needs performance optimization.
2.  **Optimize**:
    - **Code Splitting**: Utilize dynamic imports and `React.lazy` for routes and heavy components.
    - **Memoization**: Use `useMemo` and `useCallback` to prevent unnecessary re-renders for expensive computations.
    - **Resource Handling**: Optimize image delivery, utilize modern image formats, and implement proper loading strategies (`lazy`, `eager`).
    - **Data Fetching**: Optimize TanStack Query configurations to minimize network impact and utilize prefetching.
3.  **Validate**: Verify bundle size, render performance, and network activity.

## Best Practices

- **Components**: Keep components small and focused. Use `React.memo` where beneficial.
- **Images**: Always specify dimensions. Use `next/image` equivalent or native browser optimization.
- **Network**: Avoid excessive third-party scripts. Prefer local assets.
- **State**: Keep critical state in the URL. Use TanStack Query for cache management.

## References

- [Performance Patterns](references/patterns.md) - Standardized code patterns for performance optimization.
