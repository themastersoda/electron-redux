import { IpcRenderer } from "electron";

export interface StateSyncOptions {
    /**
     * Custom list for actions that should never replay across stores
     */
    denyList?: RegExp[]

    /**
     * Prevent replaying actions in the current process
     */
    preventActionReplay?: boolean

    /**
     * Not necessary if nodeIntegration is enabled.
     */
    ipcRenderer?: IpcRenderer
}
