export type ResponseFnCallback<Args> = (args: Args) => void
type ResponseFn<CallbackArgs> = (fn: ResponseFnCallback<CallbackArgs>) => void
type RemoveListenerFn<CallbackArgs> = (fn: ResponseFnCallback<CallbackArgs>) => void

export interface ElectronApi {
  ping: () => void
  quit: () => void
  onPingResponse: ResponseFn<string>
  removePingListener: RemoveListenerFn<string>
}
