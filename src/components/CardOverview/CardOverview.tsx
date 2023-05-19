import { cutText } from '../../services/cutText'
import './CardOverview.css'

export const CardOverview = function ({ overview }: { overview: string }): JSX.Element {
  return (
    <div className="card-overview">
      <p className="card-overview__text">{cutText(overview, 150)}</p>
    </div>
  )
}
