const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    generate: (data?: string) => ipcRenderer.send('generate', data),
    reply: (callback: any) => ipcRenderer.on('reply', callback),
    ping: () => ipcRenderer.invoke('ping'),
});