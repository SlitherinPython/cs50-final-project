const { app, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path');
function playMusicFuncInMain(event){
    const soundcloudWindow = new BrowserWindow({
      height: 1080,
      width: 1920,
      show: true,
      // This means the window isn't going to show by default
    });
    const url = "https://soundcloud.com/djdropg/summer-special-super-mix-2018-best-of-deep-house-sessions-music-2018-chill-out-mix-by-drop-g?si=fa3057fc8e294420aa503ab1dec2bdca&#t=0%3A00%3A01";
    
    soundcloudWindow.loadURL(url);
    code_to_mute = `window.mute()`;
    soundcloudWindow.webContents.executeJavaScript(code_to_mute);
    soundcloudWindow.once("ready-to-show", async () => {
    soundcloudWindow.webContents.setAudioMuted(false);
    soundcloudWindow.show();
    // await soundcloudWindow.webContents.setAudioMuted(true);

    console.log("Music should start playing now. ");
    const code_to_pause = `pause = document.querySelector('a[title="Pause"][tabindex="0"]');
    pause.click()`;
    
    
    soundcloudWindow.webContents.executeJavaScript(code_to_pause);
    // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    // await delay(10000);

    // await soundcloudWindow.close();
    // await console.log("Window is now closed. ");
  });
}
const menuItems = [
	{
		label: "Window",
		submenu: [
			{
				label: "Music at 5 hours",
				click: playMusicFuncInMain

			},
      {role: "toggleDevTools"},
    ]
	},
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  
  ipcMain.on('play-music', playMusicFuncInMain);
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'startMenu.html'));
  mainWindow.maximize();
  mainWindow.show();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

