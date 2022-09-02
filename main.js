const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    autoHideMenuBar: true,
  });
  if (process.env.DEBUG) win.webContents.openDevTools();
  if (process.env.DEBUG) {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile("./build/index.html");
  }
};

app.on("ready", createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows.length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (process.env.platform !== "darwin") app.quit();
});
