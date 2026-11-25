# Uppdrag 4: Hoppsan

**Nivå:** Grund · **Tid:** cirka 20 minuter · **Du behöver:** ditt repo i VS Code, från uppdrag 2

## Mål

Du har ångrat en ändring på två sätt: en som inte var sparad i Git, och en som redan var skickad till GitHub.

## Del 1: Ångra innan commit

1. **Hämta det senaste.** Klicka **Sync Changes** i **Source Control**, eller på pilarna nere till vänster.
2. **Gör en ändring du inte vill ha.** Öppna din världsfil i `src/worlds/`. Byt barens namn till något helt fel. Spara.
3. **Titta i Source Control.** Filen syns under **Changes**. Klicka på den för att se vad som ändrats.
4. **Ångra.** Håll muspekaren över filen och klicka på den böjda pilen, **Discard Changes**. Bekräfta.

Filen är tillbaka som den var vid senaste commit.

## Del 2: Ångra en commit som redan är skickad

1. **Gör en ändring och skicka upp den.** Byt dagens special till något du ångrar, till exempel `'Kall soppa utan sked'`. Spara, gör en commit med meddelandet `Byt dagens special` och klicka **Sync Changes**.
2. **Öppna terminalen.** Välj **Terminal → New Terminal** i menyn.
3. **Ta tillbaka committen.** Skriv kommandot och tryck Enter:

   ```bash
   git revert HEAD --no-edit
   ```

   `HEAD` betyder den senaste committen. Git skapar en ny commit som gör det motsatta.
4. **Skicka upp.** Klicka **Sync Changes**.
5. **Titta i historiken.** På GitHub, klicka på **Commits** i ditt repo. Båda committarna finns kvar: ändringen och den som tar tillbaka den.

## Klart när

Dagens special på din sida är som innan del 2, och historiken visar en commit som börjar med `Revert`.

## Bra att veta

- **Discard Changes går inte att ångra.** Använd det bara på ändringar du verkligen vill slänga.
- **Revert ändrar inte historiken.** Det är därför det är det säkra sättet att ångra något som andra kanske redan har hämtat.

## Om något går fel

- **Terminalen säger `nothing to commit` eller `not a git repository`:** kontrollera att VS Code har ditt repo öppet, inte en annan mapp.
- **Ett textfönster öppnas i terminalen:** du skrev kommandot utan `--no-edit`. Skriv `:wq` och tryck Enter för att spara och stänga.

**Läs mer i guiden:** Ångra och återställ.
