import { enGB } from 'date-fns/locale'
import format from 'date-fns/format'

import { cutText } from '../../services/cutText'
import { FilmProps } from '../../models'
import './Card.css'

export const Card = function ({ film }: FilmProps): JSX.Element {
  const { title, releaseDate, overview, posterPath } = film
  const usrPoster = 'https://image.tmdb.org/t/p/original' + posterPath
  let date = 'Not date'
  if (releaseDate) {
    date = format(new Date(releaseDate.toString()), 'MMMM dd, yyyy', { locale: enGB })
  }

  return (
    <div className="card">
      <img src={usrPoster} alt="poster" width="180px" />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__date">{date}</p>
        <p className="card__overview">{cutText(overview)}</p>
      </div>
    </div>
  )
}
