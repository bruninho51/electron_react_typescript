import path from 'path';
import { nativeImage as NativeImage } from 'electron';
import { AbstractWindow } from '../contracts/abstract-window';

export default class AboutWindow extends AbstractWindow {
  constructor () {
    super({
      rendererName: 'about',
      browserWindowOptions: {
        width: 400,
        height: 400,
        icon: NativeImage.createFromPath(path.join(__dirname, '..', 'assets', 'icon.png')),
        webPreferences: {
          nodeIntegration: false,
          webSecurity: true,
          enableRemoteModule: false,
          contextIsolation: true,
          preload: 'preload',
        },
        resizable: false,
        title: 'About'
      }
    })
  }
}
