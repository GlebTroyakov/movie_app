import { FilmsProps, IFilm } from '../../models'
import { Card } from '../Card'

export const CardList = ({ films }: FilmsProps) => {
  const filmsList = films.map((film: IFilm) => {
    return <Card film={film} key={film.id} />
  })

  return <ul>{filmsList}</ul>
}
