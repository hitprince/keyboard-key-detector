const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        height: 750,
        width: 1400,
        resizable: true,
        title: "键盘按键检测器",
        autoHideMenuBar: true,
        acceptFirstMouse: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./build/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

//mac依旧直接关闭
//app.on('window-all-closed', () => {
//    if (process.platform !== 'darwin') app.quit()
//})
