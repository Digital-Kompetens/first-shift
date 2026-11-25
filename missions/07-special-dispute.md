# Uppdrag 7: Bråk om specialen

**Nivå:** Avancerad · **Tid:** cirka 30 minuter · **Du behöver:** en partner, och att ni har gjort uppdrag 5

## Mål

Ni har ändrat samma rad samtidigt, fått en merge conflict och löst den.

En merge conflict är inget fel. Git vet bara inte vilken ändring som ska gälla, så det frågar er.

## Steg

Ni arbetar i ett av era repon, där båda är med sedan uppdrag 5. Kalla er **A** och **B**.

1. **Båda hämtar det senaste.** Byt till `main` nere till vänster i VS Code och klicka **Sync Changes**.
2. **Båda skapar en egen branch.** A skapar `feature/special-a` och B skapar `feature/special-b`.

   <details>
   <summary>Steg 1 och 2 i terminalen</summary>

   B skriver `feature/special-b` i stället.

   ```bash
   git switch main
   git pull
   git switch -c feature/special-a
   ```

   </details>

3. **Båda ändrar samma rad.** Öppna världsfilen och skriv en egen rätt i `specialOfTheDay`. Skriv olika saker. Spara, gör en commit med meddelandet `Change today's special` och klicka **Publish Branch**.

   <details>
   <summary>Samma sak i terminalen</summary>

   ```bash
   git add .
   git commit -m "Change today's special"
   git push -u origin feature/special-a
   ```

   </details>

4. **A öppnar en pull request.** B granskar och klickar **Merge pull request**.
5. **B öppnar en pull request.** GitHub visar nu **This branch has conflicts that must be resolved**.
6. **Lös konflikten.** Klicka **Resolve conflicts**. Raden visas med markeringar:

   ```text
   <<<<<<< feature/special-b
     specialOfTheDay: 'B:s rätt',
   =======
     specialOfTheDay: 'A:s rätt',
   >>>>>>> main
   ```

   Bestäm tillsammans vad som ska stå. Behåll en rad, eller skriv en ny som kombinerar båda. Ta bort de tre markeringsraderna: `<<<<<<<`, `=======` och `>>>>>>>`.
7. **Spara lösningen.** Klicka **Mark as resolved** och sedan **Commit merge**.
8. **Slå ihop.** A granskar och klickar **Merge pull request**.

## Klart när

Båda pull requests står som **Merged**, och sidan visar den special ni kom överens om.

## Vill du mer?

Gör om övningen, men lös konflikten i VS Code i stället. Stå på din branch och välj **Git: Merge Branch...** och sedan `origin/main`. Konflikten öppnas i VS Code. Där kan du välja **Accept Current**, **Accept Incoming** eller **Accept Both**. Spara, gör en commit och skicka upp.

<details>
<summary>Samma sak i terminalen</summary>

```bash
git fetch
git merge origin/main
```

`git fetch` hämtar det senaste från GitHub utan att ändra dina filer. Efter `git merge` visar `git status` vilken fil som har en konflikt. Lös den i VS Code, och avsluta sedan med `git add .`, `git commit --no-edit` och `git push`.
</details>

## Om något går fel

- **Ingen konflikt uppstod:** ni ändrade troligen olika rader eller olika filer. Kontrollera att båda ändrade `specialOfTheDay` i samma världsfil.
- **Innehållskontrollen klagar efter lösningen:** en markeringsrad eller ett citattecken blev kvar. Den säger vilken rad det gäller.

**Läs mer i guiden:** Merge conflicts.