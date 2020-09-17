/* globals INCLUDE_RESOURCES_PATH */
import { app } from 'electron';

/**
 * Set `__resources` path to resources files in renderer process
 */
global.__resources = undefined; // eslint-disable-line no-underscore-dangle
// noinspection BadExpressionStatementJS
INCLUDE_RESOURCES_PATH; // eslint-disable-line no-unused-expressions
if (__resources === undefined) { console.error('[Main-process]: Resources path is undefined'); }

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

global.sharedObj = {
  name: '2017 24 Hours of Le mans',
  socketUrl: 'http://localhost:4001/',
};
global.user = { entryNumber: 7, username: 'Rubennaatje' };
global.sharedObject = { socketIOAddress: process.argv[1] };

// Load here all startup windows
require('./mainWindow');
