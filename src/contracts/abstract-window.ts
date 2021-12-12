import fs from 'fs';
import path from 'path';
import { app, BrowserWindow } from "electron";
import { BrowserWindowConstructorOptions } from 'electron/main';

export abstract class AbstractWindow {
  private window: BrowserWindow;

  constructor(protected readonly conf: WindowConf) {
    const browserOptions: BrowserWindowConstructorOptions = {
      ...conf.browserWindowOptions,
      webPreferences: {
        ...conf.browserWindowOptions.webPreferences,
        preload: path.join(__dirname, `${conf.browserWindowOptions.webPreferences.preload}.js`),
      }
    }

    this.window = new BrowserWindow(browserOptions);

    const isDev = !app.isPackaged;
    if (isDev) {
      this.startHotReload();
    }
  }

  show(): BrowserWindow {
    this.window.loadFile(`${this.conf.rendererName}.html`);
    return this.window;
  }

  protected startHotReload() {
    const watcher = fs.watch(path.join(__dirname, `${this.conf.rendererName}.js`));
    watcher.on('change', () => {
      this.window.loadFile(`${this.conf.rendererName}.html`);
    });
  }
}

export type WindowConf = {
  rendererName: string;
  browserWindowOptions: BrowserWindowConstructorOptions;
}
