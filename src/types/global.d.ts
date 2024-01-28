import type { ElectronApi } from 'types/electronApi'

declare global {
  declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string
  declare const MAIN_WINDOW_VITE_NAME: string

  const electron: ElectronApi
  interface Window {
    electron: ElectronApi
  }
}
