const { BrowserWindow, app } = require('electron');

const isDev = !app.isPackaged;

const main = () => {
  let win = new BrowserWindow({ width: 800, height: 600, title: 'Boilerplate' });

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
