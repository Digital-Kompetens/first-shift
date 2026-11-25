# Uppdrag 2: Första skiftet

**Nivå:** Grund · **Tid:** cirka 30 minuter · **Du behöver:** VS Code och Git installerat

## Mål

Du har hämtat ditt repo till datorn, gjort ändringar där och skickat upp dem till GitHub.

Stegen visar hur du gör i VS Code. Under vissa steg finns **Samma sak i terminalen**. Öppna det om du är nyfiken, annars kan du hoppa över det.

## Steg

1. **Hämta repot.** I VS Code: tryck **Ctrl+Shift+P** (Mac: **Cmd+Shift+P**), skriv **Git: Clone**, välj **Clone from GitHub** och välj ditt repo. Välj en mapp och klicka **Open**.

   <details>
   <summary>Samma sak i terminalen</summary>

   Byt `DITT-ANVÄNDARNAMN` mot ditt användarnamn på GitHub.

   ```bash
   git clone https://github.com/DITT-ANVÄNDARNAMN/first-shift.git
   cd first-shift
   code .
   ```

   `code .` öppnar mappen i VS Code.
   </details>

2. **Öppna din världsfil** i `src/worlds/`.
3. **Visa öppettiderna.** Leta upp `TODO (Beginner, task 2)`. Ta bort raden med `/*` och raden med `*/`. Spara.
4. **Skriv dagens special.** Leta upp `TODO (Beginner, task 3)`. Skriv en rätt mellan citattecknen, till exempel `'Nebulosagryta'`. Spara.
5. **Gör en commit.** Klicka på **Source Control** i sidomenyn. Klicka **+** vid filen, skriv ett meddelande, till exempel `Show opening hours and add today's special`, och klicka **Commit**.

   <details>
   <summary>Samma sak i terminalen</summary>

   ```bash
   git add .
   git commit -m "Show opening hours and add today's special"
   ```

   `git add .` väljer alla ändrade filer. Det motsvarar **+** i VS Code.
   </details>

6. **Skicka upp.** Klicka **Sync Changes**.

   <details>
   <summary>Samma sak i terminalen</summary>

   ```bash
   git pull
   git push
   ```

   **Sync Changes** gör båda: först hämtar det nytt från GitHub, sedan skickar det upp dina commits.
   </details>

7. **Kontrollera.** Vänta tills körningen under **Actions** är grön och ladda om din sida.

## Klart när

Öppettiderna och dagens special syns på sidan, och värden har slutat klaga.

## Bra att veta

- **Terminalen i VS Code, Git Bash och Terminal på Mac** förstår samma Git-kommandon. Git Bash följer med Git på Windows.
- **Föredrar du GitHub Desktop?** Det fungerar också. Läs avsnittet *Välj var du arbetar* i guiden.

## Extra, om du vill

Kör sidan på din egen dator med `npm install` och `npm run dev`. Då ser du ändringarna direkt när du sparar, utan att vänta på GitHub.

## Om något går fel

- **VS Code ber dig logga in på GitHub:** godkänn i webbläsaren.
- **Commit fungerar inte och VS Code nämner `user.name`:** se sidan *Förbered VS Code* i guiden.

**Läs mer i guiden:** VS Code: hämta ett repo, och VS Code: spara och skicka.