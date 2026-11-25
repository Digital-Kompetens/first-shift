// =====================================================================
// SAFE TO EDIT
// World: The Half Dragon Inn (fantasy)
// Level: Beginner and up
//
// Everything the visitor reads in this world lives in this file.
// Text inside quotes ('like this') is shown on the page. Change it freely.
// Keep the quotes, the commas at the end of lines and the brackets.
// If something breaks, the build will tell you which line to look at.
// =====================================================================

export default {
  // Used by the code to find this world. Do not change.
  id: 'fantasy',

  // TODO (Beginner, task 1): Give the inn a name of your own.
  name: 'Värdshuset Halva Draken',

  tagline: 'Varm mat, kalla drycker och en drake som bara är halv. Fråga inte om andra halvan.',

  host: {
    name: 'Mäster Brokk',
    role: 'Värdshusvärd, skald och självutnämnd hjälte.',
  },

  // TODO (Beginner, task 3): Write today's special between the quotes.
  // As long as it is empty, the host will complain about it.
  specialOfTheDay: '',

  // TODO (Beginner, task 2): The opening hours are hidden.
  // Remove the line that says /* and the line that says */ below
  // to make them visible. Then save the file.
  /*
  openingHours: [
    { days: 'Varje dag', time: 'Från tuppens första gal' },
    { days: 'Varje natt', time: 'Till sista visan är sjungen' },
  ],
  */

  // TODO (Intermediate): Add at least two items of your own.
  // Copy one { ... } block, paste it below the last one and change the text.
  menu: [
    {
      name: 'Drakens andedräkt',
      description: 'Stark soppa. Mycket stark. Riddare har gråtit.',
      price: '8 silvermynt',
    },
    {
      name: 'Riddarens tröst',
      description: 'Varm mjölk med honung, för den som förlorat en duell.',
      price: '3 silvermynt',
    },
    {
      name: 'Trollets frukost',
      description: 'Bröd, ost och en sten. Stenen äter du inte.',
      price: '5 silvermynt',
    },
    {
      name: 'Elixir av okänt ursprung',
      description: 'Hittades i källaren. Smakar lila.',
      price: '12 silvermynt',
    },
  ],

  // What the host says. The code picks one depending on what is missing.
  lines: {
    missingHours: 'Ve oss! Ingen vet när portarna öppnas! Resenärerna irrar i mörkret och sjunger sorgsna visor!',
    missingSpecial: 'Grytan står tom, kocken gråter och bardens luta har tystnat. Vad blir dagens special, o främling?',
    allGood: 'Hör, hör! Portarna står öppna, grytan puttrar och allt är som det ska. Detta ska bli en visa!',
  },
};
