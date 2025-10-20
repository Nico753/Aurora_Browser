# 🚀 Aurora Browser: Il Browser con Intelligenza Contestuale

**Autore:** Dominici Nicols, Tsaturyan Igor, Pansardi Nicolò
**Anno:** 2025/2026

---

## 🌌 Descrizione del Progetto

**Aurora Browser** è un’applicazione desktop sviluppata con **Electron**, progettata per rivoluzionare l’esperienza di navigazione web grazie a un **Assistente IA proattivo e contestuale**.

L’obiettivo è eliminare la barriera tra utente e Intelligenza Artificiale: invece di copiare e incollare testi in una chat separata, Aurora integra direttamente l’IA nel flusso di navigazione, permettendo un’interazione fluida, intelligente e personalizzata con qualsiasi pagina web.

---

## ✨ Il Problema e la Soluzione

### 🔸 Il Problema
I browser tradizionali non sfruttano l’intelligenza artificiale in tempo reale.  
L’utente deve continuamente interrompere la navigazione per chiedere assistenza o analizzare contenuti su servizi esterni (es. ChatGPT, Gemini, ecc.).

### 🔹 La Soluzione — *Aurora Browser*
Aurora stabilisce un “ponte” tra il **motore di rendering web** e un **modello IA**, che può:
- leggere e comprendere il contenuto della pagina visualizzata,
- fornire assistenza personalizzata e contestuale,
- agire direttamente sul contenuto (es. modificare il DOM o filtrare elementi).

---

## 🛠️ Stack Tecnologico e Architettura

| Componente | Ruolo | Tecnologie / Dettagli |
|-------------|--------|------------------------|
| **Frontend/UI** | Interfaccia utente e pannello IA | HTML5, CSS3, JavaScript |
| **Browser Engine** | Motore di rendering pagine | Chromium (integrato in Electron) — gestito tramite `<webview>` |
| **Core Application** | Logica principale e gestione processi | Electron (Main Process), Node.js |
| **Assistente IA** | Analisi, NLP e generazione risposte | [Gemini API / OpenAI API / Altro modello scelto] |
| **Comunicazione Interna** | Scambio dati tra processi | Electron IPC (Inter-Process Communication) |

### 🔧 Architettura Logica
```
+---------------------------------------------------------------+
|                        Aurora Browser                         |
|---------------------------------------------------------------|
|  UI (HTML/CSS/JS)  |   <webview> Chromium  |   Pannello IA     |
|---------------------------------------------------------------|
|          Electron Renderer Process (Frontend)                 |
|---------------------------------------------------------------|
|          Electron Main Process + Node.js (Backend)            |
|---------------------------------------------------------------|
|               Modello IA (API esterna o locale)               |
+---------------------------------------------------------------+
```

---

## 💡 Funzionalità Chiave dell’Intelligenza Contestuale

### 🧠 1. Potenziamento del Contenuto e Manipolazione del DOM
- **Adattamento Dinamico:**  
  L’IA analizza la pagina (es. una ricetta) e genera comandi JavaScript per adattare i contenuti — ad esempio, ricalcolare le quantità per un numero diverso di persone.  
- **Rimozione Intelligente del Rumore:**  
  Identifica ed elimina banner, pop-up o elementi invasivi, migliorando la leggibilità della pagina.

---

### 🛍️ 2. Strumenti di Ricerca e Acquisto Avanzati
- **Confronto Prezzi Intelligente:**  
  Estrae i dati da un prodotto visualizzato e li confronta con altri siti, mostrando le migliori offerte nel pannello laterale IA.  
- **Sintesi SERP (Motori di Ricerca):**  
  Riassume i risultati delle ricerche e fornisce un’anteprima del contenuto, evitando all’utente di aprire manualmente ogni link.

---

### ⚙️ 3. Produttività e Sicurezza
- **Analizzatore di Entità Strutturate:**  
  Rileva automaticamente dati come nomi, indirizzi e numeri, organizzandoli in schede copiabili.  
- **[Funzione Traduzione Sottotitoli]:**  
  Traduzione in tempo reale dei sottotitoli video, mostrata nel pannello IA.  
- **[Funzione Analisi Privacy]:**  
  Valuta il livello di privacy di un sito (“Privacy Grade”) analizzando tracker e policy.

---

## 🧩 Requisiti e Dipendenze

- **Node.js** v18+  
- **Electron** v25+  
- **npm** o **pnpm**  
- (Opzionale) **API Key IA** (OpenAI, Gemini o altra)

---

## 🧠 Idee Future / Sviluppi Possibili
- Integrazione di un modello IA locale per la privacy totale  
- Estensioni modulari (plugin system)  
- Supporto multi-tab avanzato  
- Voice Assistant integrato nel pannello laterale  
- Sincronizzazione account e preferenze IA nel cloud  

---

## 🔒 Licenza
Progetto rilasciato con licenza **MIT** (o altra di tua scelta).  
Consulta il file `LICENSE` per maggiori dettagli.

---

> “Aurora Browser — l’intelligenza artificiale non come destinazione, ma come compagna di viaggio nella navigazione web.” 🌠