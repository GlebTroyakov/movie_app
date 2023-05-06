import { Col, Row } from 'antd'

import { FilmsProps, IFilmTransform } from '../../models'
import { Card } from '../Card'

export const CardList = ({ films }: FilmsProps): JSX.Element => {
  const filmsList = films.map((film: IFilmTransform) => {
    return (
      <Col className="gutter-row" span={12} key={film.id}>
        <Card film={film} />
      </Col>
    )
  })

  return (
    <>
      <Row
        gutter={[40, 40]}
        style={{
          // backgroundColor: 'pink',
          marginBottom: '15px',
          width: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {filmsList}
      </Row>
    </>
  )
}
