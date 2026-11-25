# Uppdrag 2: Första skiftet

**Nivå:** Grund · **Tid:** cirka 30 minuter · **Du behöver:** VS Code och Git installerat

## Mål

Du har hämtat ditt repo till datorn, gjort ändringar där och skickat upp dem till GitHub.

## Steg

1. **Hämta repot.** I VS Code: tryck **Ctrl+Shift+P** (Mac: **Cmd+Shift+P**), skriv **Git: Clone**, välj **Clone from GitHub** och välj ditt repo. Välj en mapp och klicka **Open**.
2. **Öppna din världsfil** i `src/worlds/`.
3. **Visa öppettiderna.** Leta upp `TODO (Beginner, task 2)`. Ta bort raden med `/*` och raden med `*/`. Spara.
4. **Skriv dagens special.** Leta upp `TODO (Beginner, task 3)`. Skriv en rätt mellan citattecknen, till exempel `'Nebulosagryta'`. Spara.
5. **Gör en commit.** Klicka på **Source Control** i sidomenyn. Klicka **+** vid filen, skriv ett meddelande, till exempel `Lägg till öppettider och dagens special`, och klicka **Commit**.
6. **Skicka upp.** Klicka **Sync Changes**.
7. **Kontrollera.** Vänta tills körningen under **Actions** är grön och ladda om din sida.

## Klart när

Öppettiderna och dagens special syns på sidan, och värden har slutat klaga.

## Extra, om du vill

Kör sidan på din egen dator med `npm install` och `npm run dev`. Då ser du ändringarna direkt när du sparar, utan att vänta på GitHub.

## Om något går fel

- **VS Code ber dig logga in på GitHub:** godkänn i webbläsaren.
- **Commit fungerar inte och VS Code nämner `user.name`:** se sidan *Förbered VS Code* i guiden.

**Läs mer i guiden:** VS Code: hämta ett repo, och VS Code: spara och skicka.
