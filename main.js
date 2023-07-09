const { app, BrowserWindow, Tray } = require('electron')

function createWindow() {

    const icon = '/anaconda.png'

    const appIcon = new Tray(__dirname + './call.png')

    const windows = new BrowserWindow({
        icon: __dirname + './call.png'
    })

    windows.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
    createWindow()
})