const {app,BrowserWindow}=require('electron');
const path = require('path');

function createWindow(){
    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadfile(__dirname,'index.html');
    mainWindow.on('closed',function(){
        app.quit();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed',function(){
    if(process.platform!=='darwin') app.quit();
});

app.on('active',function(){
    if (BrowserWindow.getAllWindows().length===0) createWindow();
})