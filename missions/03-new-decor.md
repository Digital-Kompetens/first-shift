# Uppdrag 3: Ny inredning

**Nivå:** Grund · **Tid:** cirka 20–40 minuter

## Mål

Du gör ett varv till på egen hand: hämta, ändra, commit, skicka upp. Den här gången utan steg-för-steg.

## Börja här: ändra README på GitHub

Små ändringar, som en rättad text i `README.md`, går snabbast att göra direkt på GitHub.

1. Öppna `README.md` i ditt repo på GitHub och klicka på pennan.
2. Skriv barens namn som rubrik överst och lägg till länken till din sida.
3. Klicka **Commit changes** med ett meddelande, till exempel `Add bar name and site link to README`.

Nu finns en commit på GitHub som inte finns på din dator. **Hämta den innan du ändrar något i VS Code:** klicka **Sync Changes** i **Source Control**.

<details>
<summary>Samma sak i terminalen</summary>

```bash
git pull
```

</details>

Hoppar du över att hämta kan GitHub säga nej när du ska skicka upp senare. Det går att lösa, men det är enklare att hämta först.

## Välj sedan en eller båda

- **Byt färg.** Öppna din världs fil i `src/themes/`. Leta upp `TODO (Beginner, task 4)` och byt färgkoden för `--color-accent`.
- **Utöka menyn** (lite svårare). Leta upp `TODO (Intermediate)` i din världsfil i `src/worlds/`. Kopiera ett helt `{ ... },`-block i menyn och ändra texten.

## Tips

- Gör en commit per sak, med ett meddelande som säger vad committen gör. Till exempel `Change accent color to teal` eller `Add two dishes to the menu`.
- Börja alltid med att hämta det senaste, och avsluta med att skicka upp.

## Klart när

README visar barens namn, och den nya färgen eller de nya rätterna syns på din publicerade sida.

## Vill du mer?

Leta efter `TODO (Intermediate)` och `TODO (Advanced)` i koden. Där finns nästa steg, till exempel en egen värld eller en meny som går att bläddra i.

**Läs mer i guiden:** Ett arbetspass, och Samma steg, olika verktyg.