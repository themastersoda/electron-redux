import { IPCEvents } from '../constants'
import { RendererStateSyncEnhancerOptions } from '../options/RendererStateSyncEnhancerOptions'

function fetchInitialState<T>(options: RendererStateSyncEnhancerOptions): T {
    const state = options.ipcRenderer?.sendSync(IPCEvents.INIT_STATE)
    return JSON.parse(state, options.deserializer)
}

export default fetchInitialState
