// =====================================================================
// SAFE TO EDIT
// World: Café Paradox (time and gravity are optional)
// Level: Beginner and up
//
// Everything the visitor reads in this world lives in this file.
// Text inside quotes ('like this') is shown on the page. Change it freely.
// Keep the quotes, the commas at the end of lines and the brackets.
// If something breaks, the build will tell you which line to look at.
// =====================================================================

export default {
  // Used by the code to find this world. Do not change.
  id: 'paradox',

  // TODO (Beginner, task 1): Give the café a name of your own.
  name: 'Kafé Paradox',

  tagline: 'Kaffet är klart innan du beställer. Tyngdkraften är frivillig.',

  host: {
    name: 'Baristan',
    role: 'Har inte träffat dig än, men minns dig mycket väl.',
  },

  // TODO (Beginner, task 3): Write today's special between the quotes.
  // As long as it is empty, the host will complain about it.
  specialOfTheDay: '',

  // TODO (Beginner, task 2): The opening hours are hidden.
  // Remove the line that says /* and the line that says */ below
  // to make them visible. Then save the file.
  /*
  openingHours: [
    { days: 'Måndag', time: '25.00–07.00' },
    { days: 'I går', time: 'Hela dagen' },
    { days: 'Söndag', time: 'I morgon' },
  ],
  */

  // TODO (Intermediate): Add at least two items of your own.
  // Copy one { ... } block, paste it below the last one and change the text.
  menu: [
    {
      name: 'Gårdagens morgonkaffe',
      description: 'Bryggt i morgon, serverat i går. Lagom varmt.',
      price: '4 minuter',
    },
    {
      name: 'Kakan som åt sig själv',
      description: 'Beställ snabbt.',
      price: '7 minuter',
    },
    {
      name: 'Svävande scones',
      description: 'Fånga dem om du kan. Smöret svävar för sig.',
      price: '9 minuter',
    },
    {
      name: 'Te i fel ordning',
      description: 'Först smaken, sedan vattnet, sist koppen.',
      price: '3 minuter',
    },
  ],

  // What the host says. The code picks one depending on what is missing.
  lines: {
    missingHours: 'Vi har öppet i går. Och kanske i morgon. Skriv in en tid, vilken som helst, så bläddrar jag fram till den.',
    missingSpecial: 'Dagens special serverades för tre dagar sedan. Eller om tre dagar. Kan du bestämma vilken?',
    allGood: 'Allt är perfekt! Det har det alltid varit. Det kommer det att ha varit.',
  },
};
