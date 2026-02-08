import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  closeWindow: () => ipcRenderer.send("app:close")
});
