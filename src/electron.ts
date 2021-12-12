import { BrowserWindow, app, ipcMain, Notification } from 'electron';
import MainWindow from './windows/main';
import AboutWindow from './windows/about';

require('./preload-scripts/preload');

const main = () => {
  const main = new MainWindow();
  main.show();

  const about = new AboutWindow();
  about.show();
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


ipcMain.on('notify', (_: any, message: any) => {
  new Notification({title: 'Notifiation', body: message}).show();
});