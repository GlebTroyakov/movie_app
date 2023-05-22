import { FilmProps } from '../../models'
import './Card.css'
import { CardHeader } from '../CardHeader'
import { CardPoster } from '../CardPoster'
import { CardInfo } from '../CardInfo'
import { CardMyRating } from '../CardMyRating'

export const Card = function ({ film }: FilmProps): JSX.Element {
  const { title, releaseDate, overview, posterPath, rating, genreList } = film

  return (
    <div className="card">
      <CardPoster posterPath={posterPath} />
      <div className="card__text-info">
        <CardHeader title={title} rating={rating} />
        <CardInfo releaseDate={releaseDate} genreList={genreList} overview={overview} />
        <CardMyRating />
      </div>
    </div>
  )
}
