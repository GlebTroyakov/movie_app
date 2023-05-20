import './CardInfo.css'
import { CardInfoDate } from '../CardInfoDate'
import { CardInfoGenres } from '../CardInfoGenres'
import { CardInfoOverview } from '../CardInfoOverview'

export const CardInfo = function ({
  releaseDate,
  genreList,
  overview,
}: {
  releaseDate: string
  genreList: number[]
  overview: string
}): JSX.Element {
  return (
    <div className="card-info">
      <CardInfoDate releaseDate={releaseDate} />
      <CardInfoGenres genreList={genreList} />
      <CardInfoOverview overview={overview} />
    </div>
  )
}
