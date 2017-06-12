const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(app) {
    super({
      width: 300,
      height: 500,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: { backgroundThrottling: false }
    });

    this.app = app;

    this.on('closed', this.onClose.bind(this));
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }

  onClose() {
    this.app.quit()
  }
}

module.exports = MainWindow;
