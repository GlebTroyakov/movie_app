import { CardList } from '../CardList/CardList'
import { MovieServices } from '../../services/MovieServices'

export function App() {
  const { films } = MovieServices()

  return <div>{<CardList films={films} />}</div>
}
