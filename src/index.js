const { app, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');

var mainWindow;
const menuItems = [];

function editSetting(event, setting, value){
	const file_name = __dirname + "/../extraResources/" + "config.json";
	var file_content = fs.readFileSync(file_name);
	var content = JSON.parse(file_content);
	
	content[setting] = value;
	fs.writeFileSync(file_name, JSON.stringify(content));
}
// Adapted from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
	var tmp = Math.floor(Math.random() * (max - min + 1) + min);
	tmp = tmp.toString();
	if (tmp.length < 2){
		tmp = '0' + tmp;
	}
	return tmp;
}

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
var mainWindow;
function sendJson(){
	const file_name = __dirname + "/../extraResources/" + "config.json";
	var file_content = fs.readFileSync(file_name);
	var content = JSON.parse(file_content);
	mainWindow.webContents.send('heres-json', content);
}
const createWindow = () => {
	ipcMain.on('edit-setting', editSetting);
	ipcMain.on('play-music', playMusicFuncInMain);
	ipcMain.on('stop-music', stopMusicFuncInMain);
	ipcMain.on('send-me-json', sendJson);
	mainWindow = new BrowserWindow({
	  width: 1920,
	  height: 1080,
	  show: false,
	  webPreferences: {
	    preload: path.join(__dirname, 'preload.js'),
	  },
	});
	mainWindow.on("closed", () => {
		soundcloudWindow.close();
	});

	mainWindow.loadFile(path.join(__dirname, 'startMenu.html'));
	mainWindow.maximize();
	mainWindow.show();

  globalThis.soundcloudWindow = new BrowserWindow({
		height: 1080,
		width: 1920,
		show: false,
	});
	var seconds = randomIntFromInterval(1, 59);
	var minutes = randomIntFromInterval(1, 59);
	var hours = randomIntFromInterval(0, 5)[0];

	const url =
		`https://soundcloud.com/djdropg/summer-special-super-mix-2018-best-of-deep-house-sessions-music-2018-chill-out-mix-by-drop-g?si=fa3057fc8e294420aa503ab1dec2bdca&#t=${hours}%3A${minutes}%3A${seconds}`;

	soundcloudWindow.loadURL(url);
	soundcloudWindow.webContents.audioMuted = true;
	const code_to_pause = `pause = document.querySelector('a[title="Pause"][tabindex="0"]');
pause.click()`;

	soundcloudWindow.webContents.executeJavaScript(code_to_pause);
}

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

