const { Tray } = require('electron');

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.setToolTip('Timer App');
    this.mainWindow = mainWindow;
    this.on('click', this.onClick.bind(this));
    this.on('right-click', this.onRightClick.bind(this));
  }

  onClick(event, bounds) {
    // Window width and height
    const { width, height } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const x = bounds.x - width / 2;
      const y = process.platform === 'darwin' ? bounds.y : bounds.y - height;

      this.mainWindow.setBounds({x, y, width, height});
      this.mainWindow.show();
    }
  }

  onRightClick() {
    
  }
}

module.exports = { TimerTray };
