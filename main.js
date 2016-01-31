var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 48*16, height: 750});

  mainWindow.loadURL('file://' + __dirname + '/glyphs.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});