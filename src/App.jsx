// =====================================================================
// Level: Advanced
// The whole page, built like a bar: a sign with the name, the opening
// hours on the wall, the host behind the counter with a speech bubble,
// the menu board and today's special standing on the counter.
// All text comes from the world files in src/worlds/.
//
// TODO (Advanced): Remember the chosen world when the page is reloaded,
// for example with localStorage.
// =====================================================================

import { useState } from 'react';
import { worlds } from './worlds/index.js';
import { art } from './art/index.js';
import WorldSwitcher from './components/WorldSwitcher.jsx';
import SpeechBubble, { chooseMood } from './components/SpeechBubble.jsx';
import HostPicture from './components/HostPicture.jsx';
import SpecialOfTheDay from './components/SpecialOfTheDay.jsx';
import OpeningHours from './components/OpeningHours.jsx';
import Menu from './components/Menu.jsx';

export default function App() {
  const [worldId, setWorldId] = useState(worlds[0].id);
  const [motion, setMotion] = useState(true);
  const world = worlds.find((w) => w.id === worldId) ?? worlds[0];
  const mood = chooseMood(world);
  const pictures = art[world.id];

  return (
    <div className={`app world-${world.id}${motion ? '' : ' motion-off'}`}>
      <div className="bar">
        {pictures && <div className="bar-scene" dangerouslySetInnerHTML={{ __html: pictures.scene }} />}

        <div className="topbar">
          <WorldSwitcher worlds={worlds} currentId={world.id} onChange={setWorldId} />
          <button
            type="button"
            className="motion-toggle"
            aria-pressed={!motion}
            onClick={() => setMotion(!motion)}
          >
            Stoppa rörelse
          </button>
        </div>

        <header className="sign name-sign">
          <h1>{world.name}</h1>
          <p className="tagline">{world.tagline}</p>
        </header>

        <main className="bar-main">
          <div className="bar-left">
            <OpeningHours hours={world.openingHours} />
            <SpeechBubble world={world} mood={mood} />
          </div>
          <HostPicture world={world} mood={mood} />
          <div className="bar-right">
            <Menu items={world.menu} />
            <SpecialOfTheDay text={world.specialOfTheDay} />
          </div>
        </main>

        <div className="bar-counter" aria-hidden="true">
          <span className="footrail" />
        </div>
      </div>
    </div>
  );
}
