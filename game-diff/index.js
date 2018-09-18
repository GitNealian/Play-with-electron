const electron = require('electron')
const {
  BrowserWindow,
  ipcMain
} = require('electron')
const app = electron.app;
let window;

function createAppWindow() {
  window = new BrowserWindow({
    width: 490,
    height: 380
  });
  // window.setSize(1000,800);
  window.loadFile("dist/index.html");
  // window.openDevTools();
}
app.on('ready', createAppWindow)

ipcMain.on('window-size-change', (event, size) => {
  console.log('recieved');
  window.setSize(2 * size * 10 + 90,  size * 10 + 180);
})