import type { FC } from 'react'
import { useEffect, useState } from 'react'

export const App: FC = () => {
  const [bool, setBool] = useState(false)
  const [pingResponse, setPingResponse] = useState('')
  useEffect(() => {
    electron.onPingResponse(setPingResponse)
    return () => {
      electron.removePingListener(setPingResponse)
    }
  }, [])
  return (
    <main>
      <h1>Reactively Forged Electron</h1>
      <p>Cool logo here</p>
      <div>
        <button onClick={() => setBool(!bool)}>TOGGLE</button>
        <p>BOOL - {String(bool)}</p>
      </div>
      <div>
        <button onClick={electron.ping}>PING</button>
        <p>Ping Result: {pingResponse}</p>
      </div>
      <button onClick={electron.quit}>QUIT</button>
    </main>
  )
}
