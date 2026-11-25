// =====================================================================
// Level: Intermediate
//
// The list of worlds shown in the world switcher, in this order.
// TODO (Intermediate, own world): To add a world of your own:
//   1. Copy one of the world files, for example space.js, to a new file.
//   2. Give it a new id, for example 'underwater'.
//   3. Import it below and add it to the list.
//   4. Add a theme for it in src/themes/ (see src/themes/index.css).
// =====================================================================

import space from './space.js';
import fantasy from './fantasy.js';
import paradox from './paradox.js';

export const worlds = [space, fantasy, paradox];
