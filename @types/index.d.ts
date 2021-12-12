export {};

declare global{
  var electron: {
    notificationApi: {
        sendNotification: (message: string) => void
    },
    batteryApi: Object,
    filesApi: Object
  };
}
