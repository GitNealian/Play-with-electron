const electron = require('electron')
const { BrowserWindow } = require('electron')
const app = electron.app;

function createAppWindow() {
  const window = new BrowserWindow({
    width: 1100,
    height: 600
  });
  window.loadFile("dist/index.html");
//window.openDevTools();
}
app.on('ready', createAppWindow)
