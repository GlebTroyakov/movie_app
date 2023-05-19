import { enGB } from 'date-fns/locale'
import format from 'date-fns/format'

import './CardInfo.css'
import { GenresContext } from '../GenreContext'
import { ListGenresType } from '../../models'

export const CardInfo = function ({
  releaseDate,
  genreList,
}: {
  releaseDate: string
  genreList: number[]
}): JSX.Element {
  let date = 'Not date'
  if (releaseDate) {
    date = format(new Date(releaseDate.toString()), 'MMMM dd, yyyy', { locale: enGB })
  }

  function getListGenres(genres: ListGenresType) {
    const listGenres: string[] = []
    genres.forEach((elem) => {
      if (genreList.indexOf(elem.id) !== -1) {
        listGenres.push(elem.name)
      }
    })
    return listGenres
  }

  function getDivGenres(genres: ListGenresType) {
    const listGenres = getListGenres(genres).splice(0, 3)
    let divGenres = listGenres.map((genre) => {
      return <span className="card-info__genre">{genre}</span>
    })
    return listGenres.length === 0 ? <span className="card-info__genre">Genres not found</span> : divGenres
  }

  return (
    <GenresContext.Consumer>
      {(genres) => {
        return (
          <div className="card-info">
            <p className="card-info__date">{date}</p>
            <div className="card-info__genres">{getDivGenres(genres)}</div>
          </div>
        )
      }}
    </GenresContext.Consumer>
  )
}
