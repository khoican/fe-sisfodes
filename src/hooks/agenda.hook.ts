import type { Agenda } from '#/types/agenda';
import type { CountdownParts } from '#/utils/agenda.util';
import { AgendaHelper } from '#/utils/agenda.util';
import { useEffect, useMemo, useState } from 'react';

/**
 * Custom hook for managing agenda state and logic.
 * 
 * @param {Agenda[]} agenda - Raw agenda data.
 * @returns {Object} Processed agenda data and countdown.
 */
export function useAgenda(agenda: Agenda[]) {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const helper = useMemo(() => new AgendaHelper(agenda), [agenda])

  const upcoming = useMemo(() => helper.getUpcoming(now), [helper, now])
  const nextVillageAgenda = useMemo(() => helper.getNextVillageAgenda(now), [helper, now])
  const nextHoliday = useMemo(() => helper.getNextHoliday(now), [helper, now])

  const listEvents = useMemo(() => {
    if (!nextVillageAgenda) return upcoming
    return upcoming.filter(item => item.id !== nextVillageAgenda.id)
  }, [upcoming, nextVillageAgenda])

  const countdown: CountdownParts | null = useMemo(() => {
    if (!nextVillageAgenda) return null
    return AgendaHelper.calculateCountdown(nextVillageAgenda.date.start, now)
  }, [nextVillageAgenda, now])

  return {
    now,
    upcoming,
    nextVillageAgenda,
    nextHoliday,
    listEvents,
    countdown
  }
}
