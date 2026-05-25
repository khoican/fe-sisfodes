import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Route } from '#/routes/pengaduan'

// Spy/mock useLoaderData before importing and rendering component
vi.spyOn(Route, 'useLoaderData').mockReturnValue({
    profil: {
        address: {
            province: 'Jawa Timur',
            regency: 'Jember',
            district: 'Mayang',
            village: 'Sumberkejayan',
            address: 'Jl. Raya Banyuwangi No. 6, Tegalan',
        },
        contact: {
            phone: '081234567890',
            email: 'sumberkejayan@desa.id',
            instagram: '@desasumberkejayan',
            tiktok: '@desasumberkejayan',
        },
    },
})

describe('Pengaduan Form Integration Tests', () => {
    it('should successfully submit public complaint form', async () => {
        vi.useFakeTimers()
        const PengaduanPage = Route.options.component
        if (!PengaduanPage) throw new Error('Pengaduan component not found')

        const { container } = render(<PengaduanPage />)

        // Verify layout
        expect(screen.getByRole('heading', { name: /Layanan Pengaduan/i })).toBeDefined()
        expect(screen.getByText('081234567890')).toBeDefined()

        // Fill form fields
        const nameInput = container.querySelector('#name')!
        const contactInput = container.querySelector('#contact')!
        const titleInput = container.querySelector('#title')!
        const messageInput = container.querySelector('#message')!

        fireEvent.change(nameInput, { target: { value: 'Rian Hidayat' } })
        fireEvent.change(contactInput, { target: { value: '089876543210' } })
        fireEvent.change(titleInput, { target: { value: 'Jalan Rusak di RT 03' } })
        fireEvent.change(messageInput, { target: { value: 'Jalan berlubang cukup parah dan membahayakan pengendara motor.' } })

        // Submit form
        const form = container.querySelector('form')!
        fireEvent.submit(form)

        // Advance timers to trigger simulated 1.5s api delay
        act(() => {
            vi.advanceTimersByTime(1500)
        })

        // Check success screen
        expect(screen.getByText(/Laporan Berhasil Terkirim/i)).toBeDefined()
        vi.useRealTimers()
    })
})
