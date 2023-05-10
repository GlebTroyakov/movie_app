import { Layout, Typography } from 'antd'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'
import { FilmNotFound } from '../FilmNotFound'
import { NotNetwork } from '../NotNetwork'
import { SearchFilmForm } from '../SearchFilmForm'
import './App.css'
import { MoviePagination } from '../MoviePagination'

const { Content } = Layout
const { Title } = Typography

export function App(): JSX.Element {
  const { films, loading, error, searchFilm, startFilmList, totalResults, currentPage, changePage, setCurrentPage } =
    MovieServices()

  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <Content
        className="content"
        style={{ width: '1000px', margin: '0 auto', padding: '36px', backgroundColor: '#FFFFFF' }}
      >
        <Title level={2} style={{ color: 'Red', textAlign: 'center', paddingTop: '10px' }}>
          Content
        </Title>
        <SearchFilmForm searchFilm={searchFilm} startFilmList={startFilmList} setCurrentPage={setCurrentPage} />
        <NotNetwork />
        <FilmNotFound textError={error} />
        <CardList films={films} loading={loading} />
        <MoviePagination totalResults={totalResults} currentPage={currentPage} changePage={changePage} />
      </Content>
    </div>
  )
}
