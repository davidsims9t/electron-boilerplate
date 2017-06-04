const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  // spawns new browser window
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
