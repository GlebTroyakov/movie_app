import { FilmProps } from '../../models'
import './Card.css'
import { CardHeader } from '../CardHeader'
import { CardPoster } from '../CardPoster'
import { CardInfo } from '../CardInfo'
import { CardOverview } from '../CardOverview'

export const Card = function ({ film }: FilmProps): JSX.Element {
  const { title, releaseDate, overview, posterPath, rating } = film

  return (
    <div className="card">
      <CardPoster posterPath={posterPath} />
      <div className="card_text-info">
        <CardHeader title={title} rating={rating} />
        <CardInfo releaseDate={releaseDate} />
        <CardOverview overview={overview} />
      </div>
    </div>
  )
}
