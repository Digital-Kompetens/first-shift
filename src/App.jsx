// =====================================================================
// Level: Advanced
// The whole page. Keeps track of which world is shown and passes the
// world's content down to the components.
//
// TODO (Advanced): Remember the chosen world when the page is reloaded,
// for example with localStorage.
// =====================================================================

import { useState } from 'react';
import { worlds } from './worlds/index.js';
import WorldSwitcher from './components/WorldSwitcher.jsx';
import SpeechBubble from './components/SpeechBubble.jsx';
import SpecialOfTheDay from './components/SpecialOfTheDay.jsx';
import OpeningHours from './components/OpeningHours.jsx';
import Menu from './components/Menu.jsx';

export default function App() {
  const [worldId, setWorldId] = useState(worlds[0].id);
  const world = worlds.find((w) => w.id === worldId) ?? worlds[0];

  return (
    <div className={`app world-${world.id}`}>
      <div className="container">
        <WorldSwitcher worlds={worlds} currentId={world.id} onChange={setWorldId} />

        <header>
          <h1>{world.name}</h1>
          <p className="tagline">{world.tagline}</p>
        </header>

        <main>
          <SpeechBubble world={world} />
          <div className="two-columns">
            <SpecialOfTheDay text={world.specialOfTheDay} />
            <OpeningHours hours={world.openingHours} />
          </div>
          <Menu items={world.menu} />
        </main>
      </div>
    </div>
  );
}
