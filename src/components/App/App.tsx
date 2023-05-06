import { Layout, Typography } from 'antd'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'
import { FilmNotFound } from '../FilmNotFound'
import './App.css'

const { Header, Content, Footer } = Layout
const { Title } = Typography

export function App(): JSX.Element {
  const { films, loading, error } = MovieServices()

  return (
    <div>
      <Header className="header">
        <Title level={2} style={{ color: 'white', textAlign: 'center', paddingTop: '10px' }}>
          Header
        </Title>
      </Header>

      <Content className="content">
        <Title level={2} style={{ color: 'Red', textAlign: 'center', paddingTop: '10px' }}>
          Content
        </Title>
        {error && <FilmNotFound textError={error} />}
        {/* {loading && <Spin style={{ paddingTop: '30px', paddingLeft: '490px', scale: '2' }} />} */}
        {<CardList films={films} loading={loading} />}
      </Content>

      <Footer className="footer">
        <Title level={2} style={{ color: 'blue', textAlign: 'center', paddingTop: '10px' }}>
          Footer
        </Title>
      </Footer>
    </div>
  )
}
