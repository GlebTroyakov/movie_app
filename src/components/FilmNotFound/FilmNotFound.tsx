import { Alert } from 'antd'
import CSS from 'csstype'

export const FilmNotFound = function ({ textError }: { textError: string }) {
  const styleDivNotFound: CSS.Properties = {
    margin: '20px auto',
    textAlign: 'center',
    width: '500px',
  }

  const alert = <Alert message="Error" description={textError} type="error" showIcon />

  return <>{textError && <div style={styleDivNotFound}>{alert}</div>}</>
}
