import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Route as DomisiliRoute } from '#/routes/layanan/domisili'
import { Route as KehilanganRoute } from '#/routes/layanan/kehilangan'
import { Route as TidakMampuRoute } from '#/routes/layanan/tidak-mampu'
import { Route as PindahKawinRoute } from '#/routes/layanan/pindah-kawin'

describe('Layanan Publik Form Integration Tests', () => {
    it('should successfully submit Domisili form', async () => {
        vi.useFakeTimers()
        const DomisiliPage = DomisiliRoute.options.component
        if (!DomisiliPage) throw new Error('Domisili component not found')

        const { container } = render(<DomisiliPage />)

        // Verify page header
        expect(screen.getByText('Surat Keterangan')).toBeDefined()

        // Fill form fields
        const nameInput = container.querySelector('#name')!
        const nikInput = container.querySelector('#nik')!
        const addressInput = container.querySelector('#address')!

        fireEvent.change(nameInput, { target: { value: 'Budi Santoso' } })
        fireEvent.change(nikInput, { target: { value: '1234567890123456' } })
        fireEvent.change(addressInput, { target: { value: 'Dusun Krajan RT 01 RW 02' } })

        // Submit form directly
        const form = container.querySelector('form')!
        fireEvent.submit(form)

        // Advance timers to trigger simulated 1.5s api delay
        act(() => {
            vi.advanceTimersByTime(1500)
        })

        // Check success screen
        expect(screen.getByText(/Permohonan Berhasil Dikirim/i)).toBeDefined()
        vi.useRealTimers()
    })

    it('should successfully submit Kehilangan form', async () => {
        vi.useFakeTimers()
        const KehilanganPage = KehilanganRoute.options.component
        if (!KehilanganPage) throw new Error('Kehilangan component not found')

        const { container } = render(<KehilanganPage />)

        // Fill form fields
        const nameInput = container.querySelector('#name')!
        const itemInput = container.querySelector('#loss_item')!

        fireEvent.change(nameInput, { target: { value: 'Andi Wijaya' } })
        fireEvent.change(itemInput, { target: { value: 'Kartu Tanda Penduduk (KTP)' } })

        // Submit form
        const form = container.querySelector('form')!
        fireEvent.submit(form)

        act(() => {
            vi.advanceTimersByTime(1500)
        })

        expect(screen.getByText(/Laporan Berhasil Dikirim/i)).toBeDefined()
        vi.useRealTimers()
    })

    it('should successfully submit Tidak Mampu (SKTM) form', async () => {
        vi.useFakeTimers()
        const TidakMampuPage = TidakMampuRoute.options.component
        if (!TidakMampuPage) throw new Error('TidakMampu component not found')

        const { container } = render(<TidakMampuPage />)

        // Fill form fields
        const nameInput = container.querySelector('#name')!

        fireEvent.change(nameInput, { target: { value: 'Siti Rahma' } })

        // Submit form
        const form = container.querySelector('form')!
        fireEvent.submit(form)

        act(() => {
            vi.advanceTimersByTime(1500)
        })

        expect(screen.getByText(/Permohonan Berhasil Dikirim/i)).toBeDefined()
        vi.useRealTimers()
    })

    it('should successfully submit Pindah Kawin form', async () => {
        vi.useFakeTimers()
        const PindahKawinPage = PindahKawinRoute.options.component
        if (!PindahKawinPage) throw new Error('PindahKawin component not found')

        const { container } = render(<PindahKawinPage />)

        // Fill form fields
        const nameInput = container.querySelector('#name')!
        const destinationInput = container.querySelector('#destination')!

        fireEvent.change(nameInput, { target: { value: 'Joko Widodo' } })
        fireEvent.change(destinationInput, { target: { value: 'Solo, Jawa Tengah' } })

        // Submit form
        const form = container.querySelector('form')!
        fireEvent.submit(form)

        act(() => {
            vi.advanceTimersByTime(1500)
        })

        expect(screen.getByText(/Permohonan Berhasil Dikirim/i)).toBeDefined()
        vi.useRealTimers()
    })
})
