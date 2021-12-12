import path from 'path';
import { nativeImage as NativeImage } from 'electron';
import { AbstractWindow } from '../contracts/abstract-window';

export default class MainWindow extends AbstractWindow {
  constructor () {
    super({
      rendererName: 'app',
      browserWindowOptions: {
        width: 1200,
        height: 600,
        icon: NativeImage.createFromPath(path.join(__dirname, '..', 'assets', 'icon.png')),
        webPreferences: {
          nodeIntegration: false,
          webSecurity: true,
          enableRemoteModule: false,
          contextIsolation: true,
          preload: 'preload',
        },
        title: 'Explore English'
      }
    })
  }
}
