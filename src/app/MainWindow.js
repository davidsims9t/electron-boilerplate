const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      width: 300,
      height: 500,
      frame: false,
      resizable: false,
      show: false
    });

    this.on('closed', this.onClose.bind(this));
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }

  onClose() {
    this.quit()
  }
}

module.exports = MainWindow;
