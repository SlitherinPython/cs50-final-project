const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
	sendMusicSignal: () => ipcRenderer.send("play-music"),
});
