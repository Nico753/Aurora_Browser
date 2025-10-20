// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Crea una nuova finestra del browser.
  const mainWindow = new BrowserWindow({
    width: 1920, // Larghezza adeguata per i 3 pannelli
    height: 1080,
    minWidth: 800, // Dimensione minima per evitare rotture di layout
    minHeight: 600,
    webPreferences: {
      // Impostazioni di sicurezza fondamentali per Electron
      // 'renderer.js' verrà caricato in un contesto sicuro (preload)
      preload: path.join(__dirname, 'renderer', 'js', 'renderer.js'), 
      contextIsolation: true, 
      nodeIntegration: false 
    }
  });

  // Carica il file HTML dell'interfaccia utente (la scocca del tuo browser)
  // Assicurati che il percorso sia corretto: 'renderer/index.html'
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // Utile per vedere gli errori di console e ispezionare gli elementi (debug)
  // Rimuovi o commenta questa riga quando rilasci il prodotto.
  // mainWindow.webContents.openDevTools(); 
}

// Quando Electron ha finito di inizializzarsi, crea la finestra.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Per macOS, ricrea la finestra se era stata chiusa
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Esci dall'app quando tutte le finestre sono chiuse (su Windows e Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});