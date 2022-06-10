import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatPostDates(date: Date) {
  const publishedDateFormatted = format(
    date,
    "d 'de' LLLL 'às' H:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return {
    publishedDateFormatted,
    publishedDateRelativeToNow
  }
}