import { Alert } from 'antd'
import './FilmNotFound.css'

export const FilmNotFound = function ({ textError }: { textError: string }) {
  const alert = <Alert message="Error" description={textError} type="error" showIcon />

  return <>{textError && <div className="film-not-found">{alert}</div>}</>
}
