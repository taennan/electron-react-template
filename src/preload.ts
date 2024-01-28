import type { ElectronApi, ResponseFnCallback } from 'types/electronApi'

import { contextBridge, ipcRenderer } from 'electron'
import { CHANNELS } from 'consts/channels'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeListener = (channel: string, fn: ResponseFnCallback<any>) => {
  ipcRenderer.removeListener(channel, fn)
}

const electronApi: ElectronApi = {
  ping: () => ipcRenderer.send(CHANNELS.PING),
  quit: () => ipcRenderer.sendSync(CHANNELS.QUIT),
  onPingResponse: (fn) => {
    ipcRenderer.on(CHANNELS.PING, (_, ...args) => fn(args[0]))
  },
  removePingListener: (fn) => removeListener(CHANNELS.PING, fn),
}

contextBridge.exposeInMainWorld('electron', electronApi)
