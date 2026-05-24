# JSDoc Patterns

Use these patterns to ensure consistency across different TypeScript constructs.

## 1. Utility Functions

```typescript
/**
 * @description Formats a date string into a localized format.
 * @param {string} date - The ISO date string to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting.
 * @returns {string} The formatted date string.
 * @example
 * const formatted = formatDate('2023-10-27T10:00:00Z', 'id-ID');
 * // returns "27 Oktober 2023"
 */
export function formatDate(date: string, locale: string = 'en-US'): string {
    // ... implementation
}
```

## 2. React Components

```tsx
interface ButtonProps {
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary'
}

/**
 * @description A reusable button component with variant support.
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered button component.
 * @example
 * <Button
 *   label="Click Me"
 *   onClick={() => console.log('clicked')}
 *   variant="primary"
 * />
 */
export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
}) => {
    // ... implementation
}
```

## 3. Custom Hooks

```typescript
/**
 * @description Hook to manage a simple boolean toggle state.
 * @param {boolean} [initialValue=false] - The initial state.
 * @returns {[boolean, () => void]} A tuple containing the state and a toggle function.
 * @example
 * const [isOpen, toggleOpen] = useToggle(false);
 */
export function useToggle(
    initialValue: boolean = false,
): [boolean, () => void] {
    // ... implementation
}
```
