export type ElectronType = {
    notificationApi: {
        sendNotification: (message: string) => void
    },
    batteryApi: Object,
    filesApi: Object
  };