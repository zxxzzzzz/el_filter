const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  addArticle: (info) => ipcRenderer.invoke('addArticle', info),
  getArticle: (key) => ipcRenderer.invoke('getArticle', key),
});
