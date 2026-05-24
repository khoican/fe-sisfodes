# SEO Patterns

## 1. Page Metadata (TanStack Router)

```tsx
// Example in src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: IndexPage,
    head: () => ({
        meta: [
            { title: 'Village Information System - SISFODES' },
            {
                name: 'description',
                content:
                    'Comprehensive portal for village population, budget, and services.',
            },
        ],
    }),
})
```

## 2. Semantic Structure

```tsx
// Example layout
export function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </>
    )
}
```

## 3. Accessible Images

```tsx
// Good: descriptive alt
<img src="/logo.png" alt="SISFODES Village Information System Logo" />

// Good: decorative
<img src="/spacer.png" alt="" aria-hidden="true" />
```
