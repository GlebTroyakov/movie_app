import { Alert } from 'antd'
import CSS from 'csstype'

export const NotNetwork = function () {
  const styleDivNotFound: CSS.Properties = {
    margin: '20px auto',
    textAlign: 'center',
    width: '500px',
  }

  const alert = <Alert message="Error" description="Not Network" type="error" showIcon />

  return (
    <>
      <div style={styleDivNotFound}>{alert}</div>
    </>
  )
}
