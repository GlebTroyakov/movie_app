import { Rate } from 'antd'
import './CardMyRating.css'

export const CardMyRating = function ({
  id,
  myRating,
  rateMovie,
}: {
  id: number
  myRating: number
  rateMovie?: (id: number, newRating: number) => void
}): JSX.Element {
  function onChange(event: number) {
    if (rateMovie) {
      rateMovie(id, event)
    }
  }

  if (rateMovie) {
    return <Rate count={10} onChange={(event) => onChange(event)} value={myRating} />
  }
  return <Rate count={10} disabled value={myRating} />
}
