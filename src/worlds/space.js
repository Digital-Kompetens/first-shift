// =====================================================================
// SAFE TO EDIT
// World: The bar at the end of the belt (space)
// Level: Beginner and up
//
// Everything the visitor reads in this world lives in this file.
// Text inside quotes ('like this') is shown on the page. Change it freely.
// Keep the quotes, the commas at the end of lines and the brackets.
// If something breaks, the build will tell you which line to look at.
// =====================================================================

export default {
  // Used by the code to find this world. Do not change.
  id: 'space',

  // TODO (Beginner, task 1): Give the bar a name of your own.
  name: 'Baren vid bältets ände',

  tagline: 'Sista stoppet före ingenting. Vi har varmt kaffe och kall syrgas.',

  host: {
    name: 'SERV-7',
    role: 'Servicebot. I tjänst sedan längre än någon minns.',
  },

  // TODO (Beginner, task 3): Write today's special between the quotes.
  // As long as it is empty, the host will complain about it.
  specialOfTheDay: '',

  // TODO (Beginner, task 2): The opening hours are hidden.
  // Remove the line that says /* and the line that says */ below
  // to make them visible. Then save the file.
  /*
  openingHours: [
    { days: 'Måndag–fredag', time: '18.00–03.00 stationstid' },
    { days: 'Lördag–söndag', time: 'Hela skiftet' },
  ],
  */

  // TODO (Intermediate): Add at least two items of your own.
  // Copy one { ... } block, paste it below the last one and change the text.
  menu: [
    {
      name: 'Kometsvans',
      description: 'Gnistrande och iskall. Lämnar en lång eftersmak.',
      price: '42 kredit',
    },
    {
      name: 'Svart hål',
      description: 'Kaffe som aldrig tar slut. Ingen vet varför.',
      price: '30 kredit',
    },
    {
      name: 'Asteroidmacka',
      description: 'Hård på utsidan. Hård på insidan också.',
      price: '55 kredit',
    },
    {
      name: 'Syrgasbubbel',
      description: 'Gratis. Vi rekommenderar det starkt.',
      price: '0 kredit',
    },
  ],

  // What the host says. The code picks one depending on what is missing.
  lines: {
    missingHours: 'Jag har noterat att öppettiderna saknas. Jag är inte arg. Bara besviken.',
    missingSpecial: 'Dagens special: ingenting. Igen. Gästerna stirrar på mig. Jag har inga ögonlock, så jag stirrar tillbaka.',
    allGood: 'Allt är på plats. Det är ovanligt. Jag misstänker ett fel i mina sensorer.',
  },
};
