import { format } from 'date-fns'
import { id } from 'date-fns/locale'

interface DateFormat {
  date: Date
  options?: {
    format?: string
  }
}

export const dateFormat = ({ date, options }: DateFormat) => {
 const { format: datePattern = 'dd MMMM yyyy' } = options || {}

  const raw = new Date(date)

  const parse = format(raw, datePattern, { locale: id })
  return parse
}
