import { Spin } from 'antd'

import { FilmsProps, IFilmTransform } from '../../models'
import { Card } from '../Card'

import './CardList.css'

export const CardList = ({ films, loading, changeMyRating }: FilmsProps): JSX.Element => {
  const filmsList = films.map((film: IFilmTransform) => {
    return <Card film={film} key={film.id} changeMyRating={changeMyRating} />
  })

  return (
    <>
      {loading && (
        <div className="films-spin">
          <Spin />
        </div>
      )}
      <div className="films-cards">{filmsList}</div>
    </>
  )
}
