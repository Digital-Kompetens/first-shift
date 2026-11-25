// =====================================================================
// Level: Advanced
// The host behind the counter, with a name tag on the chest.
// The picture changes with the host's mood. It is decorative, so screen
// readers skip it; the name tag and the speech bubble are real text.
// =====================================================================

import { art } from '../art/index.js';

export default function HostPicture({ world, mood }) {
  const pictures = art[world.id];

  return (
    <div className="bar-host">
      {pictures && (
        <div
          key={`${world.id}-${mood}`}
          className="host-picture"
          dangerouslySetInnerHTML={{ __html: pictures.host[mood] }}
        />
      )}
      <p className="nametag" title={world.host.role}>
        {world.host.name}
      </p>
    </div>
  );
}
