# Uppdrag 1: Nycklarna till baren

**Nivå:** Grund · **Tid:** cirka 20 minuter · **Du behöver:** ett GitHub-konto

## Mål

Du har en egen kopia av projektet, sidan är publicerad och baren har ditt namn.

## Steg

1. **Skapa din kopia.** Gå till mallrepot och klicka **Use this template → Create a new repository**. Välj ditt eget konto som ägare, skriv ett namn, till exempel `first-shift`, välj **Public** och klicka **Create repository**.
2. **Slå på GitHub Pages.** I ditt nya repo: **Settings → Pages**. Under **Source**, välj **GitHub Actions**.
   - Ser du ett rött kryss under fliken **Actions** redan nu? Det är väntat. Den första körningen startade innan Pages var påslaget.
3. **Välj värld.** Öppna mappen `src/worlds/` och välj en fil: `space.js`, `fantasy.js` eller `paradox.js`.
4. **Redigera filen.** Klicka på pennan uppe till höger i filen.
5. **Ge baren ett namn.** Leta upp `TODO (Beginner, task 1)`. Byt texten mellan citattecknen på raden `name:`. Behåll citattecknen och kommatecknet.
6. **Spara med en commit.** Klicka **Commit changes**. Skriv ett meddelande, till exempel `Byt namn på baren`, och klicka **Commit changes** igen.
7. **Vänta på publiceringen.** Öppna fliken **Actions**. Efter en eller två minuter blir körningen grön.
8. **Öppna din sida.** Gå till **Settings → Pages**. Adressen står överst. Klicka på den.

## Klart när

Din sida är öppen i webbläsaren och visar barens nya namn. Välj din värld med knapparna överst om den inte syns direkt.

## Om något går fel

- **Körningen i Actions blir röd:** klicka på den. Står det att Pages inte är påslaget, gör steg 2 igen och välj sedan **Re-run all jobs**.
- **Innehållskontrollen klagar:** den säger vilken rad det gäller. Oftast saknas ett citattecken eller ett kommatecken.

**Läs mer i guiden:** Skapa ett repo, och Vad händer när du sparar en version?
