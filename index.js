const { app, ipcMain, Menu } = require('electron');
const TimerTray = require('./src/app/TimerTray');
const MainWindow = require('./src/app/MainWindow');
const menuTemplate = require('./src/app/menuTemplate');

let mainWindow;
let addWindow;
let tray;

app.on('ready', () => {
  // hide the app from the dock
  app.dock.hide();

  // spawns new browser window
  mainWindow = new MainWindow();
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);

  // Can use this method to change the menu throughout the application.
  Menu.setApplicationMenu(mainMenu);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = `${__dirname}/src/assets/${iconName}`;

  tray = new TimerTray(iconPath, mainWindow);
  tray.setTitle('Test');
});

// listens to event from front-end
ipcMain.on('noun:verb', (event, message) => {
  // sends message back to front-end
  mainWindow.webContents.send('noun:verb2', message);
});

ipcMain.on('noun:verb3', (event, message) => {
  mainWindow.webContents.send('noun:verb4', message);
  // addWindow.close();
});
