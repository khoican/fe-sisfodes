import * as React from 'react'

import { cn } from '#/lib/utils'
import type { Holiday } from '#/types/holiday'

type CountdownParts = {
	days: number
	hours: number
	minutes: number
}

type NearestHoliday = {
	holiday: Holiday
	target: Date
}

function normalizeHolidayDate (date: Date) {
	const normalized = new Date(date)
	normalized.setHours(0, 0, 0, 0)
	return normalized
}

function getNearestUpcomingHoliday (
	holidays: Holiday[],
	now: Date
): NearestHoliday | null {
	const upcoming = holidays
		.map((h) => ({
			holiday: h,
			target: normalizeHolidayDate(h.date)
		}))
		.filter(({ target }) => target.getTime() > now.getTime())
		.sort((a, b) => a.target.getTime() - b.target.getTime())

	return upcoming[0] ?? null
}

function getCountdownParts (target: Date, now: Date): CountdownParts {
	const diffMs = Math.max(0, target.getTime() - now.getTime())

	const minute = 60 * 1000
	const hour = 60 * minute
	const day = 24 * hour

	const days = Math.floor(diffMs / day)
	const hours = Math.floor((diffMs % day) / hour)
	const minutes = Math.floor((diffMs % hour) / minute)

	return { days, hours, minutes }
}

interface CountdownProps {
	holidays: Holiday[]
	className?: {
		root?: string
		name?: string
		items?: string
		item?: string
		value?: string
		label?: string
	}
}

export default function Countdown ({ holidays, className }: CountdownProps) {
	const [now, setNow] = React.useState<Date | null>(null)

	React.useEffect(() => {
		setNow(new Date())
		const id = window.setInterval(() => setNow(new Date()), 1000)
		return () => window.clearInterval(id)
	}, [])

	if (!now) return null

	const nearest = getNearestUpcomingHoliday(holidays, now)
	if (!nearest) return null

	const parts = getCountdownParts(nearest.target, now)

	return (
		<section className={cn('w-full relative', className?.root)}>
            <div className='w-24 h-24 rounded-full bg-white/10 z-0 absolute -top-6 -left-10'></div>
            <div className='w-40 h-40 rounded-full bg-white/10 z-0 absolute -bottom-20 -right-10'></div>

			<p className={cn('text-white/80 text-sm', className?.name)}>
				{nearest.holiday.name}
			</p>

			<div className={cn('flex items-center gap-4 mt-4', className?.items)}>
				<div className={cn('flex flex-col', className?.item)}>
					<span className={cn('text-white text-3xl font-bold tabular-nums', className?.value)}>
						{parts.days}
					</span>
					<span className={cn('text-white/70 text-xs uppercase tracking-wider', className?.label)}>
						Hari
					</span>
				</div>

				<div className={cn('flex flex-col', className?.item)}>
					<span className={cn('text-white text-3xl font-bold tabular-nums', className?.value)}>
						{String(parts.hours).padStart(2, '0')}
					</span>
					<span className={cn('text-white/70 text-xs uppercase tracking-wider', className?.label)}>
						Jam
					</span>
				</div>

				<div className={cn('flex flex-col', className?.item)}>
					<span className={cn('text-white text-3xl font-bold tabular-nums', className?.value)}>
						{String(parts.minutes).padStart(2, '0')}
					</span>
					<span className={cn('text-white/70 text-xs uppercase tracking-wider', className?.label)}>
						Menit
					</span>
				</div>
			</div>
		</section>
	)
}

