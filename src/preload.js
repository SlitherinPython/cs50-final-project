const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
	sendPlaySignal: () => ipcRenderer.send("play-music"),
	sendStopSignal: () => ipcRenderer.send("stop-music"),
});
