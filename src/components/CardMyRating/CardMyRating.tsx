import { Rate } from 'antd'
import './CardMyRating.css'

export const CardMyRating = function ({
  changeMyRating,
  id,
  myRating,
}: {
  changeMyRating: (id: number, newRating: number) => void
  id: number
  myRating: number
}): JSX.Element {
  function onChange(event: number) {
    console.log(event, id)
    changeMyRating(id, event)
  }

  return <Rate count={10} onChange={(event) => onChange(event)} value={myRating} />
}
