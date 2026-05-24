# Performance Patterns

## 1. Memoization (useMemo/useCallback)

```tsx
// Use when computations are expensive or reference stability is critical for children
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b])

const handleAction = useCallback(() => {
    doSomething(id)
}, [id])
```

## 2. Dynamic Imports (Code Splitting)

```tsx
// For components that aren't immediately visible
const HeavyComponent = React.lazy(
    () => import('#components/shared/HeavyComponent'),
)

// Inside component
;<React.Suspense fallback={<LoadingSpinner />}>
    <HeavyComponent />
</React.Suspense>
```

## 3. Efficient Image Loading

```tsx
// Always lazy load below the fold
<img
    src="/hero.jpg"
    alt="Description"
    width="800"
    height="600"
    loading="lazy"
/>
```

## 4. TanStack Query Prefetching

```tsx
// Prefetch data before user navigation
const queryClient = useQueryClient()
const prefetchData = () => {
    queryClient.prefetchQuery({
        queryKey: ['agenda'],
        queryFn: fetchAgenda,
    })
}
```
