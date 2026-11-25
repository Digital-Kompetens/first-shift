// =====================================================================
// Level: Advanced
// Pictures for each world: one scene (the room behind the counter) and
// one picture of the host per mood. The pictures are SVG files in this
// folder. "?raw" makes Vite load each file as text, so the SVG can be
// placed directly in the page and animated with CSS.
//
// A world without an entry here still works: it just shows no pictures.
// TODO (Advanced, own world): Draw your own SVG files and add them here.
// =====================================================================

import spaceScene from './space-scene.svg?raw';
import spaceHours from './space-host-missing-hours.svg?raw';
import spaceSpecial from './space-host-missing-special.svg?raw';
import spaceGood from './space-host-all-good.svg?raw';

import fantasyScene from './fantasy-scene.svg?raw';
import fantasyHours from './fantasy-host-missing-hours.svg?raw';
import fantasySpecial from './fantasy-host-missing-special.svg?raw';
import fantasyGood from './fantasy-host-all-good.svg?raw';

import paradoxScene from './paradox-scene.svg?raw';
import paradoxHours from './paradox-host-missing-hours.svg?raw';
import paradoxSpecial from './paradox-host-missing-special.svg?raw';
import paradoxGood from './paradox-host-all-good.svg?raw';

export const art = {
  space: {
    scene: spaceScene,
    host: { missingHours: spaceHours, missingSpecial: spaceSpecial, allGood: spaceGood },
  },
  fantasy: {
    scene: fantasyScene,
    host: { missingHours: fantasyHours, missingSpecial: fantasySpecial, allGood: fantasyGood },
  },
  paradox: {
    scene: paradoxScene,
    host: { missingHours: paradoxHours, missingSpecial: paradoxSpecial, allGood: paradoxGood },
  },
};
