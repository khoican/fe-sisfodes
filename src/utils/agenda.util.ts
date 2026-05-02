import type { Agenda } from '#/types/agenda'

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
}

/**
 * Helper class for managing Agenda data using OOP principles.
 */
export class AgendaHelper {
  private agenda: Agenda[]

  /**
   * @param {Agenda[]} agenda - List of agenda items.
   */
  constructor(agenda: Agenda[]) {
    this.agenda = agenda
  }

  /**
   * Sorts agenda items by start date.
   * @returns {Agenda[]} Sorted agenda.
   */
  getSorted(): Agenda[] {
    return [...this.agenda].sort(
      (a, b) => new Date(a.date.start).getTime() - new Date(b.date.start).getTime()
    )
  }

  /**
   * Filters agenda items that are still upcoming or ongoing.
   * @param {Date} now - Current date time.
   * @returns {Agenda[]} Upcoming agenda.
   */
  getUpcoming(now: Date): Agenda[] {
    return this.getSorted().filter(item => new Date(item.date.end) >= now)
  }

  /**
   * Finds the nearest village agenda (non-holiday).
   * @param {Date} now - Current date time.
   * @returns {Agenda | undefined} Next village agenda.
   */
  getNextVillageAgenda(now: Date): Agenda | undefined {
    return this.getUpcoming(now).find(item => !item.is_holiday)
  }

  /**
   * Finds the nearest national holiday.
   * @param {Date} now - Current date time.
   * @returns {Agenda | undefined} Next holiday.
   */
  getNextHoliday(now: Date): Agenda | undefined {
    return this.getUpcoming(now).find(item => item.is_holiday)
  }

  /**
   * Calculates countdown parts from a target date.
   * @param {string} targetDate - Target date string.
   * @param {Date} now - Current date time.
   * @returns {CountdownParts} Calculated countdown.
   */
  static calculateCountdown(targetDate: string, now: Date): CountdownParts {
    const target = new Date(targetDate)
    const diff = target.getTime() - now.getTime()

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    return { days, hours, minutes }
  }
}
