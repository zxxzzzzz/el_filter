const { app, BrowserWindow, ipcMain } = require('electron');
const Store = require('electron-store');
// require('./server')
const path = require('path');

const store = new Store();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // win.webContents.openDevTools()
  // win.loadFile('./dist/index.html')
  win.loadURL('http://127.0.0.1:5173/');
};
// {ti:'',remark:'',useful:''}
const addArticle = (e, info) => {
  console.log('set', info);
  store.set(info?.ti, info);
  return info;
};
const getArticle = (e, k) => {
  const t = store.get(k) || {};
  // console.log('get', t);
  return t;
};

app.whenReady().then(() => {
  ipcMain.handle('addArticle', addArticle);
  ipcMain.handle('getArticle', getArticle);
  createWindow();
});
