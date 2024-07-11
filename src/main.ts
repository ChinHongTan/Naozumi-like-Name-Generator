import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        vibrancy: 'menu',
        frame: false,
        // transparent: true,
        // backgroundColor: "#00ffffff",
        titleBarStyle: 'hidden',
        visualEffectState: 'followWindow',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
    // win.webContents.openDevTools({mode: "detach"});
}

function generateNaozumiNickname() {
    let name = '';
    const namePrefix = 'Nao';
    const nameSuffix = 'i';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    name = namePrefix + consonants[Math.floor(Math.random() * consonants.length)] + vowels[Math.floor(Math.random() * vowels.length)] + consonants[Math.floor(Math.random() * consonants.length)] + nameSuffix;
    return name;
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    createWindow();
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

ipcMain.on('generate', (event, data) => {
    event.reply('reply', generateNaozumiNickname());
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

