import { enGB } from 'date-fns/locale'
import format from 'date-fns/format'

import { cutText } from '../../services/cutText'
import { FilmProps } from '../../models'

// import posterNotFound from './pnf.png'
import './Card.css'

export const Card = function ({ film }: FilmProps): JSX.Element {
  const { title, releaseDate, overview, posterPath } = film
  const posterNotFound =
    'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
  const usrPoster = posterPath ? 'https://image.tmdb.org/t/p/original' + posterPath : posterNotFound
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
