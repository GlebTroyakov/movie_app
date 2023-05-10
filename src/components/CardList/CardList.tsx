import { Col, Row, Spin } from 'antd'
import CSS from 'csstype'

import { FilmsProps, IFilmTransform } from '../../models'
import { Card } from '../Card'

export const CardList = ({ films, loading }: FilmsProps): JSX.Element => {
  const filmsList = films.map((film: IFilmTransform) => {
    return (
      <Col className="gutter-row" span={12} key={film.id}>
        <Card film={film} />
      </Col>
    )
  })

  const styleDivSpin: CSS.Properties = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
  }

  const styleRow: CSS.Properties = {
    marginBottom: '36px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  return (
    <>
      {loading && (
        <div style={styleDivSpin}>
          <Spin />
        </div>
      )}
      <Row gutter={[40, 40]} style={styleRow}>
        {filmsList}
      </Row>
    </>
  )
}
// {{lg: 32,}}
