import type { IpcMainEventHandler } from 'types/electron'
import { CHANNELS } from 'consts/channels'

export const onPing: IpcMainEventHandler = (event) => {
  setTimeout(() => {
    event.sender.send(CHANNELS.PING, 'Pong!')
  }, 1000)
}
