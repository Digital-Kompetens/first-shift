# Uppdrag 5: Gästkocken

**Nivå:** Fortsättning · **Tid:** cirka 45 minuter · **Du behöver:** en partner, och att ni båda har gjort uppdrag 1 och 2

## Mål

Din partner har lagt till en rätt i din meny med en egen branch och en pull request, och du har granskat och slagit ihop den. Sedan byter ni roller.

I det här uppdraget är du **värd** och din partner **gästkock**.

## Steg för värden

1. **Bjud in gästkocken.** I ditt repo på GitHub: **Settings → Collaborators → Add people**. Skriv din partners användarnamn och klicka **Add**.

## Steg för gästkocken

2. **Tacka ja.** Du får ett mejl. Du hittar också inbjudan under klockan uppe till höger på GitHub. Klicka **Accept invitation**.
3. **Hämta värdens repo.** I VS Code: **Git: Clone** och välj värdens repo. Det står under värdens namn. Välj en annan mapp än den där ditt eget repo ligger.

   <details>
   <summary>Samma sak i terminalen</summary>

   Byt `VÄRDENS-ANVÄNDARNAMN` mot värdens användarnamn på GitHub. Sista ordet är namnet på mappen, så att den inte krockar med ditt eget repo.

   ```bash
   git clone https://github.com/VÄRDENS-ANVÄNDARNAMN/first-shift.git guest-chef
   cd guest-chef
   code .
   ```

   </details>

4. **Skapa en branch.** Klicka på `main` nere till vänster i VS Code och välj **Create new branch**. Skriv ett namn efter mönstret `feature/guest-chef-` och rätten, till exempel `feature/guest-chef-pasta`.

   <details>
   <summary>Samma sak i terminalen</summary>

   ```bash
   git switch -c feature/guest-chef-pasta
   ```

   `-c` betyder att branchen skapas. Utan `-c` byter du bara till en branch som redan finns.
   </details>

5. **Lägg till en rätt.** Öppna värdens världsfil i `src/worlds/`. Leta upp `TODO (Intermediate)`. Kopiera ett helt `{ ... },`-block i menyn och ändra texten. Spara.
6. **Gör en commit och skicka upp branchen.** Skriv ett meddelande, till exempel `Add pasta to the menu`. Klicka **Publish Branch**.

   <details>
   <summary>Samma sak i terminalen</summary>

   ```bash
   git add .
   git commit -m "Add pasta to the menu"
   git push -u origin feature/guest-chef-pasta
   ```

   `-u origin …` behövs första gången du skickar upp en ny branch. Sedan räcker `git push`.
   </details>

7. **Öppna en pull request.** Gå till värdens repo på GitHub. Klicka den gula knappen **Compare & pull request**. Skriv en kort beskrivning av rätten och klicka **Create pull request**.

## Steg för värden igen

8. **Granska.** Öppna fliken **Pull requests** och klicka på förslaget. Titta under **Files changed**. Grönt är det som läggs till.
9. **Godkänn.** Klicka **Review changes**, välj **Approve**, skriv gärna en kommentar och klicka **Submit review**.
10. **Slå ihop.** Gå tillbaka till fliken **Conversation**. Klicka **Merge pull request** och sedan **Confirm merge**. Klicka **Delete branch**.

## Klart när

Den nya rätten syns på värdens publicerade sida, och pull requesten står som **Merged**.

## Byt roller

Gör samma steg igen, men i din partners repo. Den som var värd blir gästkock.

## Bra att veta

- **Branchnamn skrivs på engelska**, med små bokstäver och bindestreck i stället för mellanslag. Ordet före snedstrecket säger vad det gäller: `feature/` för något nytt och `fix/` för en rättelse.

## Om något går fel

- **Gästkocken ser inte repot:** inbjudan är inte godkänd än. Se steg 2.
- **Hämtningen säger att mappen redan finns:** du har redan en mapp som heter `first-shift` på samma plats. Välj en annan mapp, eller ge den nya ett annat namn.
- **Knappen Compare & pull request syns inte:** öppna **Pull requests → New pull request** och välj din branch i den högra listan.
- **Innehållskontrollen klagar i pull requesten:** gästkocken rättar raden på samma branch, gör en ny commit och skickar upp. Pull requesten uppdateras av sig själv.

**Läs mer i guiden:** Branches, och Pull requests.