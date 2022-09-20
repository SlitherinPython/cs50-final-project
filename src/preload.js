const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
	sendPlaySignal: () => ipcRenderer.send("play-music"),
	sendStopSignal: () => ipcRenderer.send("stop-music"),
	editSetting: (setting, value) => ipcRenderer.send("edit-setting", setting, value),
});
