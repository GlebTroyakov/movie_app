import { enGB } from 'date-fns/locale'
import format from 'date-fns/format'

import './CardInfo.css'

export const CardInfo = function ({ releaseDate }: { releaseDate: string }): JSX.Element {
  let date = 'Not date'
  if (releaseDate) {
    date = format(new Date(releaseDate.toString()), 'MMMM dd, yyyy', { locale: enGB })
  }

  return (
    <div className="card-info">
      <p className="card-info__date">{date}</p>
      {/* <p>Ganres</p> */}
    </div>
  )
}
