const { app, BrowserWindow, ipcMain, Menu } = require('electron');

let mainWindow;

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Todo'
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

// Add extra menu option on Mac OS X
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

app.on('ready', () => {
  // spawns new browser window
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);

  // Can use this method to change the menu throughout the application.
  Menu.setApplicationMenu(mainMenu);
});

// listens to event from front-end
ipcMain.on('noun:verb', (event, message) => {
  // sends message back to front-end
  mainWindow.webContents.send('noun:verb2', message);
});
