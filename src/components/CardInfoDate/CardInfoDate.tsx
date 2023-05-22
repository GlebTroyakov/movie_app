import { enGB } from 'date-fns/locale'
import format from 'date-fns/format'

import './CardInfoDate.css'

export const CardInfoDate = function ({ releaseDate }: { releaseDate: string }): JSX.Element {
  let date = 'Not date'
  if (releaseDate) {
    date = format(new Date(releaseDate.toString()), 'MMMM dd, yyyy', { locale: enGB })
  }

  return (
    <div className="card-info__date">
      <span className="card-info__date-text">{date}</span>
    </div>
  )
}
