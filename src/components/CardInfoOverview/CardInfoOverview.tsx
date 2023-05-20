import { cutText } from '../../services/cutText'
import './CardInfoOverview.css'

export const CardInfoOverview = function ({ overview }: { overview: string }): JSX.Element {
  return <span className="card-info__overview">{cutText(overview, 150)}</span>
}
