const { app, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path');


const menuItems = [
	{
		label: "Window",
		submenu: [
			{
				label: "Start music",
				click: playMusicFuncInMain},
      {
        label: "Stop music",
        click: stopMusicFuncInMain
      },
      {role: "toggleDevTools"},
    ]
	},
];
function playMusicFuncInMain(){	
  soundcloudWindow.webContents.audioMuted = false;
	console.log("Music should start playing now");
	code_to_play = `play = document.querySelector('a[title="Play"][tabindex="0"]')
	play.click()`;
  soundcloudWindow.webContents.executeJavaScript(code_to_play);
}

function stopMusicFuncInMain(){
    soundcloudWindow.webContents.audioMuted = true;
    console.log("Music should stop playing now");
    const code_to_pause = `pause = document.querySelector('a[title="Pause"][tabindex="0"]');
pause.click()`;

    soundcloudWindow.webContents.executeJavaScript(code_to_pause);
}
const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
	// ipcMain.on('play-music', playMusicFuncInMain);
	const mainWindow = new BrowserWindow({
	  width: 1920,
	  height: 1080,
	  show: false,
	  webPreferences: {
	    preload: path.join(__dirname, 'preload.js'),
	  },
	});


	mainWindow.loadFile(path.join(__dirname, 'startMenu.html'));
	mainWindow.maximize();
	mainWindow.show();

  globalThis.soundcloudWindow = new BrowserWindow({
		height: 1080,
		width: 1920,
		show: false,
	});
	const url =
		"https://soundcloud.com/djdropg/summer-special-super-mix-2018-best-of-deep-house-sessions-music-2018-chill-out-mix-by-drop-g?si=fa3057fc8e294420aa503ab1dec2bdca&#t=0%3A22%3A01";

	soundcloudWindow.loadURL(url);
	soundcloudWindow.webContents.audioMuted = true;
	soundcloudWindow.once("ready-to-show", async () => {
		const code_to_pause = `pause = document.querySelector('a[title="Pause"][tabindex="0"]');
    pause.click()`;
		soundcloudWindow.webContents.executeJavaScript(code_to_pause);
	});
  console.log("Prerender for music done.")
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

