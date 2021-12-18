import { BrowserWindow, app, ipcMain, Notification } from 'electron';
import path from 'path';

const main = () => {
  let win = new BrowserWindow({ 
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: true,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
    title: 'Explore English'
  });

  if (process.env.NODE_ENV == 'production') {
    win.loadFile('index.html');
  } else { 
    win.loadURL('http://localhost:3000');
  }
}

app.whenReady().then(() => {
  main();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    main();
  }
});

ipcMain.on('notify', (_: any, message: string) => {
  new Notification({
    title: 'Notifiation', 
    body: message
  })
    .show();
});