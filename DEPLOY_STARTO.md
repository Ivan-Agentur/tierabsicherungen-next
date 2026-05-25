# Deploy zu Starto (Git/Repo)

Kurzanleitung, um das `tierabsicherungen-next` Next.js-Projekt per Git-Repository auf Starto zu deployen.

1) Voraussetzungen
- Ein Starto-Account und Zugriff auf Starto Dashboard
- Repository mit diesem Projekt in einer Git-Remote (z. B. GitHub, GitLab)

2) Empfohlene Einstellungen in Starto (bei Einrichtung einer neuen App)
- Repository: wähle das Repo/Branch
- Build Command: `npm ci && npm run build`
- Start Command: `npm run start -- -p $PORT`
- Runtime / Environment: Node.js (wähle eine Node-Version passend zu `package.json`, z. B. 18+)

3) Environment-Variablen
- Setze `NODE_ENV=production` (oft automatisch gesetzt)
- Falls API-Keys / Secrets benötigt werden: im Starto-Dashboard unter Environment hinzufügen

4) Domain & HTTPS
- Nach erfolgreichem Deploy kannst du im Dashboard eine benutzerdefinierte Domain hinzufügen und das automatische TLS/HTTPS aktivieren.

5) Branch Previews / Webhooks
- Wenn Starto Branch-Previews unterstützt, aktiviere sie für Pull-Requests/Branches, damit jede Änderung automatisch gebaut wird.

6) Troubleshooting
- Build-Fehler: Logs im Starto-Dashboard prüfen; lokal reproduzieren mit `npm ci && npm run build`.
- Start-Probleme: Stelle sicher, dass Start Command den `$PORT` verwendet (`npm run start -- -p $PORT`).

7) Lokales Testen vor Deploy
```bash
# Abhängigkeiten installieren
npm ci

# Build lokal
npm run build

# Start lokal auf Port 3000
npm run start -- -p 3000
```

Wenn du möchtest, erstelle ich noch eine Datei `starto.yaml` mit Beispiel-Konfiguration (falls Starto sie unterstützt) oder helfe beim Einrichten des Git-Repository-Links im Starto-Dashboard.
