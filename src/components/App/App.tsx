import { Layout, Typography } from 'antd'

import { MovieServices } from '../../services/MovieServices'
import { CardList } from '../CardList/CardList'

const { Header, Content, Footer } = Layout
const { Title } = Typography

export function App(): JSX.Element {
  const { films } = MovieServices()

  return (
    <div>
      <Header className="header">
        <Title level={2} style={{ color: 'white', textAlign: 'center', paddingTop: '10px' }}>
          Header
        </Title>
      </Header>

      <Content className="header">
        <Title level={2} style={{ color: 'Red', textAlign: 'center', paddingTop: '10px' }}>
          Content
        </Title>

        {<CardList films={films} />}
      </Content>

      <Footer className="header">
        <Title level={2} style={{ color: 'blue', textAlign: 'center', paddingTop: '10px' }}>
          Footer
        </Title>
      </Footer>
    </div>
  )
}
