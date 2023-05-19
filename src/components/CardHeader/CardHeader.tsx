import { cutText } from '../../services/cutText'

import './CardHeader.css'

export const CardHeader = function ({ title, rating }: { title: string; rating: number }): JSX.Element {
  let colorCircle = ''

  if (rating <= 3) {
    colorCircle = '#E90000'
  } else if (rating <= 5) {
    colorCircle = '#E97E00'
  } else if (rating <= 7) {
    colorCircle = '#E9D100'
  } else {
    colorCircle = '#66E900'
  }

  return (
    <div className="card-header">
      <h3 className="card-header__title">{cutText(title, 34)}</h3>
      <div className="card-header__rating" style={{ borderColor: colorCircle }}>
        <span className="card-header__rating-number">{rating.toFixed(1)}</span>
      </div>
    </div>
  )
}
