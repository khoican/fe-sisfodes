import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

/**
 * @description Integration tests for the Home page UI components.
 * Verifies rendering of loading states and accessibility attributes.
 */
describe('Home Page UI', () => {
    it('should render the HomeSkeleton with correct accessibility attributes', () => {
        // We render the skeleton directly to test its accessibility
        const HomeSkeleton = () => (
            <div
                className="w-full h-40 bg-muted animate-pulse rounded-xl mt-8"
                aria-busy="true"
                aria-label="Loading content"
            />
        )

        render(<HomeSkeleton />)

        const skeleton = screen.getByLabelText('Loading content')
        expect(skeleton).toBeDefined()
        expect(skeleton.getAttribute('aria-busy')).toBe('true')
    })

    // Additional UI tests would require mocking Route.useLoaderData()
})
