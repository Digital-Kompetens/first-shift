# First Shift

Välkommen till ditt första skift. Här öppnar du en påhittad bar i en av tre världar och övar Git och GitHub i din egen takt. Du kan inte förstöra något: allt går att ändra tillbaka.

| Värld | Värd | Stämning |
| --- | --- | --- |
| Baren vid bältets ände | SERV-7, en servicebot som har sett allt | Rymd, torr humor |
| Värdshuset Halva Draken | Mäster Brokk, dramatisk värdshusvärd | Fantasy, storslaget |
| Kafé Paradox | Baristan, som minns dig fast ni inte har träffats | Tid och tyngdkraft är frivilliga |

Alla tre världarna har samma kod. Det enda som skiljer är texterna och färgerna. Välj den du gillar.

## Kom igång

1. Klicka **Use this template → Create a new repository** uppe till höger. Välj ditt eget konto som ägare och ge repot ett namn.
2. Följ uppdragen i ordning, så långt du vill:
   - [Uppdrag 1: Nycklarna till baren](missions/01-keys-to-the-bar.md) – allt görs på GitHub-webben
   - [Uppdrag 2: Första skiftet](missions/02-first-shift.md) – hämta repot till VS Code
   - [Uppdrag 3: Ny inredning](missions/03-new-decor.md) – ett varv till, på egen hand

Fler uppdrag om samarbete, kanban och merge conflicts kommer.

## Nivåer

Uppgifterna finns i tre nivåer. Välj det som passar dig i dag. Du kan stanna kvar i samma repo och ta nästa nivå senare.

| Nivå | Du arbetar i | Exempel |
| --- | --- | --- |
| Grund | `src/worlds/` och `src/themes/` | Byt namn, visa öppettiderna, skriv dagens special, byt en färg |
| Fortsättning | Även `src/components/` och `src/styles/` | Fler rätter i menyn, en ny sektion, en egen värld |
| Avancerad | Även `src/App.jsx` | Bläddra i menyn, värden reagerar på mer, sidan minns vald värld |

Leta efter `TODO` i koden. Varje uppgift står där, på engelska, med nivån inom parentes. Filer märkta `SAFE TO EDIT` är gjorda för att ändras.

## Om något går fel

- **Sidan byggs inte:** öppna fliken **Actions** och klicka på den röda körningen. Innehållskontrollen säger vilken fil och rad det gäller.
- **Du vill börja om med en fil:** öppna filen i mallrepot, kopiera innehållet och klistra in det i din fil.
- **Du har fastnat:** det är helt okej. Fråga någon, eller ta en paus och kom tillbaka.

## Köra sidan på din egen dator (valfritt)

Kräver Node.js. Versionen står i `.nvmrc`.

```bash
npm install
npm run dev
```

Öppna adressen som visas, oftast `http://localhost:5173`. Sidan uppdateras när du sparar.

| Kommando | Gör |
| --- | --- |
| `npm run dev` | Startar sidan lokalt |
| `npm run check` | Kontrollerar världsfilerna |
| `npm run build` | Kontrollerar och bygger den färdiga sidan |

## För dig som underhåller mallen

- Publiceringen sker med `.github/workflows/deploy.yml`. Den läser repots namn själv, så ingen inställning behöver ändras i kopior.
- `package-lock.json` ska finnas i repot. Uppdatera beroenden med `npm update` och committa den nya låsfilen.
- Ändringar i mallen görs med pull request. Kopior som redan har skapats påverkas inte.

Licens: MIT. Se [LICENSE](LICENSE).
