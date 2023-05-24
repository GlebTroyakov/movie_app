import { Alert } from 'antd'
import { Offline } from 'react-detect-offline'
import './NotNetwork.css'

export const NotNetwork = function () {
  const alert = <Alert message="Error" description="Not Network" type="error" showIcon />

  return (
    <Offline polling={false}>
      <div className="not-network">{alert}</div>
    </Offline>
  )
}
