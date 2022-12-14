const { dialog, ipcMain } = require('electron');
const { exec } = require('child_process');
const { dirname } = require('path');

ipcMain.on('dialog-save', async (e, ...a) => {
  e.reply('dialog-save', dialog.showSaveDialogSync(a[0]));
});

ipcMain.on('exec', (e, ...a) => {
  exec(a[0], a[1], (error, stdout, stderr) => {
    e.reply('exec', error ? error : stdout);
  });
});

ipcMain.handle('exec', async (e, ...a) => {
  exec(a[0], a[1], (error, stdout, stderr) => {
    return error ? error : stdout;
  });
});

ipcMain.handle('basename', async (e, ...a) => {
  return basename(a[0]);
});

ipcMain.handle('dirname', async (e, ...a) => {
  return dirname(a[0]);
});

ipcMain.handle('extname', async (e, ...a) => {
  return extname(a[0]);
});