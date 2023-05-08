import { Layout, Typography } from 'antd'
import { Offline } from 'react-detect-offline'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'
import { FilmNotFound } from '../FilmNotFound'
import { NotNetwork } from '../NotNetwork'
import { SearchFilmForm } from '../SearchFilmForm'
import './App.css'

const { Content } = Layout
const { Title } = Typography

export function App(): JSX.Element {
  const { films, loading, error, searchFilm, startFilmList } = MovieServices()

  return (
    <div>
      <Content className="content">
        <Title level={2} style={{ color: 'Red', textAlign: 'center', paddingTop: '10px' }}>
          Content
        </Title>
        <SearchFilmForm searchFilm={searchFilm} startFilmList={startFilmList} />
        <div>
          <Offline>
            <NotNetwork />
          </Offline>
        </div>
        {error && <FilmNotFound textError={error} />}
        {<CardList films={films} loading={loading} />}
      </Content>
    </div>
  )
}
