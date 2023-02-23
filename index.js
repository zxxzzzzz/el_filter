const { app, BrowserWindow } = require('electron')
// require('./server')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // win.webContents.openDevTools()
  // win.loadFile('./dist/index.html')
  win.loadURL('http://127.0.0.1:5173/')

}

app.whenReady().then(() => {
  createWindow()
})