/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { ipcRenderer } = require('electron');

console.log('preload.js executed');

window.addEventListener('DOMContentLoaded', () => {
  // 定义全局函数
  console.log(window);
  window.showAlert = function (type, buttons, title, message) {
    ipcRenderer.send('show-alert', { type, buttons, title, message });
  };
});
