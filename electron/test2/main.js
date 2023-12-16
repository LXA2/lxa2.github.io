const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow(window_width,window_height) {
  mainWindow = new BrowserWindow({
    width: window_width,
    height: window_height,
    webPreferences: {
      nodeIntegration: false, // 禁用 nodeIntegration
      contextIsolation: true, // 启用上下文隔离
      preload: path.join(__dirname, 'preload.js'), // 指定 preload 脚本
  },
  });

  mainWindow.loadFile('index.html');
  
  // 打开开发者工具
  mainWindow.webContents.openDevTools();

  // 监听窗口关闭事件
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow(1920,1080);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

ipcMain.on('show-alert', ((event, args) => {
  // 使用 dialog 模块创建一个对话框
  const { type, buttons, title, message } = args;

  // 使用 dialog 模块创建一个对话框
  const options = {
    type,
    buttons,
    title,
    message,
  };

  dialog.showMessageBox(null, options, () => {
    // 对话框关闭时，通过 ipcRenderer 发送事件到渲染进程
    //event.reply('alert-closed');
    console.log('alert-closed');
  });
}));