const { app, BrowserWindow, ipcMain, Menu } = require('electron');

let mainWindow;
let addWindow;

const createAddWindow = () => {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo'
  });

  addWindow.loadURL(`file://${__dirname}/add.html`);
  addWindow.on('closed', () => addWindow = null);
};

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Todo',
        click() {
          createAddWindow()
        }
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

// Enable developer tools in anything but production
if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'Developer',
    submenu: [
      { role: 'reload' },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

app.on('ready', () => {
  // spawns new browser window
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);

  // Can use this method to change the menu throughout the application.
  Menu.setApplicationMenu(mainMenu);
});

// listens to event from front-end
ipcMain.on('noun:verb', (event, message) => {
  // sends message back to front-end
  mainWindow.webContents.send('noun:verb2', message);
});

ipcMain.on('noun:verb3', (event, message) => {
  mainWindow.webContents.send('noun:verb4', message);
  addWindow.close();
});
