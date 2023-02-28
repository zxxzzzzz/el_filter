const { app, BrowserWindow, ipcMain } = require('electron');
const Store = require('electron-store');
// require('./server')
const path = require('path');

const store = new Store();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // win.webContents.openDevTools()
  win.loadFile('./dist/index.html')
  // win.loadURL('http://127.0.0.1:5173/');
};
// {ti:'',remark:'',useful:''}
const addArticle = (e, info) => {
  if (info?.key?.[0]) {
    store.set(info.key[0], info);
    return info;
  }
};
const getArticle = (e, k) => {
  if (!k) {
    return store.store;
  }
  const t = store.get(k) || {};
  return t;
};

app.whenReady().then(() => {
  ipcMain.handle('addArticle', addArticle);
  ipcMain.handle('getArticle', getArticle);
  createWindow();
});
