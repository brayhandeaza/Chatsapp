const { app, Menu, BrowserWindow } = require('electron')

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        minWidth: 845,
        width: 845,
        minHeight: 800,
        height: 800,
    })

    win.loadURL("http://localhost:3000/")
    app.setName("CChat")
})


