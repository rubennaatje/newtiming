import fs from 'fs';
import path from 'path';
import { Menu, MenuItem, app } from 'electron';
import electronDebug from 'electron-debug';
import vueDevtools from 'vue-devtools';
import { ELECTRON_RELAUNCH_CODE } from '../../.electron-nuxt/config';
import mainWinHandler from './mainWindow';
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

electronDebug({
  showDevTools: false,
  devToolsMode: 'right',
});

// work around https://github.com/MarshallOfSound/electron-devtools-installer/issues/122
// which seems to be a result of https://github.com/electron/electron/issues/19468
if (process.platform === 'win32') {
  const appUserDataPath = app.getPath('userData');
  const devToolsExtensionsPath = path.join(appUserDataPath, 'DevTools Extensions');
  try {
    fs.unlinkSync(devToolsExtensionsPath);
  } catch (_) {
    // don't complain if the file doesn't exist
  }
}

app.on('ready', () => {
  vueDevtools.install();
  const menu = Menu.getApplicationMenu();
  const refreshButton = new MenuItem({
    label: 'Relaunch electron',
    accelerator: 'CommandOrControl+E',
    click: () => {
      app.exit(ELECTRON_RELAUNCH_CODE);
    },
  });
  menu.append(refreshButton);

  const spotterGuideButton = new MenuItem({
    label: 'Spotter guide',
    accelerator: 'CommandOrControl+P',
    click: async () => {
      const { shell } = require('electron');
      await shell.openExternal('https://spotterguides.com/portfolio/20_lm/');
    },
  });
  menu.append(spotterGuideButton);

  const scratchpad = new MenuItem({
    label: 'Scratch pad',
    accelerator: 'CommandOrControl+P',
    click: async () => {
      const { shell } = require('electron');
      await shell.openExternal('https://docs.google.com/document/d/1h4eG_mt6ZwYchXCfkgsvKT672M72sTP9hbMQ41QwMYI/edit?usp=sharing');
    },
  });
  menu.append(scratchpad);

  Menu.setApplicationMenu(menu);
});

mainWinHandler.onCreated(browserWindow => {
  browserWindow.webContents.openDevTools();
});

// Require `main` process to boot app
require('./index');
