import { cutText } from '../../services/cutText'
import './CardInfoOverview.css'

export const CardInfoOverview = function ({ overview }: { overview: string }): JSX.Element {
  return (
    <div className="card-info__overview">
      <span className="card-info__overview-text">{cutText(overview, 165)}</span>
    </div>
  )
}
