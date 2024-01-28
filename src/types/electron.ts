import type { IpcMainEvent } from 'electron'

export type IpcMainEventHandler = (event: IpcMainEvent, ...args: unknown[]) => void
