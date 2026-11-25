# Uppdrag 7: Bråk om specialen

**Nivå:** Avancerad · **Tid:** cirka 30 minuter · **Du behöver:** en partner, och att ni har gjort uppdrag 5

## Mål

Ni har ändrat samma rad samtidigt, fått en merge conflict och löst den.

En merge conflict är inget fel. Git vet bara inte vilken ändring som ska gälla, så det frågar er.

## Steg

Ni arbetar i ett av era repon, där båda är med sedan uppdrag 5. Kalla er **A** och **B**.

1. **Båda hämtar det senaste.** Byt till `main` nere till vänster i VS Code och klicka **Sync Changes**.
2. **Båda skapar en egen branch.** A skapar `feature/special-a` och B skapar `feature/special-b`.
3. **Båda ändrar samma rad.** Öppna världsfilen och skriv en egen rätt i `specialOfTheDay`. Skriv olika saker. Spara, gör en commit och klicka **Publish Branch**.
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

Gör om övningen, men lös konflikten i VS Code i stället. Hämta `main` till din branch med **Git: Merge Branch...** så öppnas konflikten i VS Code. Där kan du välja **Accept Current**, **Accept Incoming** eller **Accept Both**.

## Om något går fel

- **Ingen konflikt uppstod:** ni ändrade troligen olika rader eller olika filer. Kontrollera att båda ändrade `specialOfTheDay` i samma världsfil.
- **Innehållskontrollen klagar efter lösningen:** en markeringsrad eller ett citattecken blev kvar. Den säger vilken rad det gäller.

**Läs mer i guiden:** Merge conflicts.
