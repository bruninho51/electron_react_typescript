
const { ipcRenderer, contextBridge } = require('electron');

if (contextBridge?.exposeInMainWorld) {
  contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
      sendNotification(message: any) {
        ipcRenderer.send('notify', message);
      }
    },
    batteryApi: {
  
    },
    filesApi: {
  
    }
  })
}
