import { GenresContext } from '../GenreContext'
import { ListGenresType } from '../../models'
import './CardInfoGenres.css'

export const CardInfoGenres = function ({ genreList }: { genreList: number[] }): JSX.Element {
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
      return (
        <span className="card-info__genre" key={genre}>
          {genre}
        </span>
      )
    })
    return listGenres.length === 0 ? <span className="card-info__genre">Genres not found</span> : divGenres
  }

  return (
    <GenresContext.Consumer>
      {(genres) => {
        return <div className="card-info__genres">{getDivGenres(genres)}</div>
      }}
    </GenresContext.Consumer>
  )
}
