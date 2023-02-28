import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormatter(date?: string) {
  if (date) {
    const dateFormatted = formatDistanceToNow(new Date(date), {
      locale: ptBR,
      addSuffix: true,
    })

    return dateFormatted
  }
}
