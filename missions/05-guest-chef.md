# Uppdrag 5: Gästkocken

**Nivå:** Fortsättning · **Tid:** cirka 45 minuter · **Du behöver:** en partner, och att ni båda har gjort uppdrag 1 och 2

## Mål

Din partner har lagt till en rätt i din meny med en egen branch och en pull request, och du har granskat och slagit ihop den. Sedan byter ni roller.

I det här uppdraget är du **värd** och din partner **gästkock**.

## Steg för värden

1. **Bjud in gästkocken.** I ditt repo på GitHub: **Settings → Collaborators → Add people**. Skriv din partners användarnamn och klicka **Add**.

## Steg för gästkocken

2. **Tacka ja.** Du får ett mejl. Du hittar också inbjudan under klockan uppe till höger på GitHub. Klicka **Accept invitation**.
3. **Hämta värdens repo.** I VS Code: **Git: Clone** och välj värdens repo. Det står under värdens namn.
4. **Skapa en branch.** Klicka på `main` nere till vänster i VS Code och välj **Create new branch**. Skriv ett namn efter mönstret `feature/gastkock-` och rätten, till exempel `feature/gastkock-pasta`. Använd inte å, ä eller ö.
5. **Lägg till en rätt.** Öppna värdens världsfil i `src/worlds/`. Leta upp `TODO (Intermediate)`. Kopiera ett helt `{ ... },`-block i menyn och ändra texten. Spara.
6. **Gör en commit och skicka upp branchen.** Skriv ett meddelande, till exempel `Lägg till pasta i menyn`. Klicka **Publish Branch**.
7. **Öppna en pull request.** Gå till värdens repo på GitHub. Klicka den gula knappen **Compare & pull request**. Skriv en kort beskrivning av rätten och klicka **Create pull request**.

## Steg för värden igen

8. **Granska.** Öppna fliken **Pull requests** och klicka på förslaget. Titta under **Files changed**. Grönt är det som läggs till.
9. **Godkänn.** Klicka **Review changes**, välj **Approve**, skriv gärna en kommentar och klicka **Submit review**.
10. **Slå ihop.** Gå tillbaka till fliken **Conversation**. Klicka **Merge pull request** och sedan **Confirm merge**. Klicka **Delete branch**.

## Klart när

Den nya rätten syns på värdens publicerade sida, och pull requesten står som **Merged**.

## Byt roller

Gör samma steg igen, men i din partners repo. Den som var värd blir gästkock.

## Om något går fel

- **Gästkocken ser inte repot:** inbjudan är inte godkänd än. Se steg 2.
- **Knappen Compare & pull request syns inte:** öppna **Pull requests → New pull request** och välj din branch i den högra listan.
- **Innehållskontrollen klagar i pull requesten:** gästkocken rättar raden på samma branch, gör en ny commit och skickar upp. Pull requesten uppdateras av sig själv.

**Läs mer i guiden:** Branches, och Pull requests.
