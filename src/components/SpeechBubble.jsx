// =====================================================================
// Level: Intermediate (reading) / Advanced (changing the logic)
// The host comments on what is missing in the world.
//
// TODO (Advanced): Make the host react to more things, for example
// when the menu has fewer than three items, or when a visitor clicks
// a menu item. Add new lines to the world files and choose them here.
// =====================================================================

function chooseLine(world) {
  const hasHours = Array.isArray(world.openingHours) && world.openingHours.length > 0;
  const hasSpecial = typeof world.specialOfTheDay === 'string' && world.specialOfTheDay.trim() !== '';

  if (!hasHours) return world.lines.missingHours;
  if (!hasSpecial) return world.lines.missingSpecial;
  return world.lines.allGood;
}

export default function SpeechBubble({ world }) {
  return (
    <section className="bubble" aria-label={`${world.host.name} säger`}>
      <div className="bubble-host">
        <p className="bubble-host-name">{world.host.name}</p>
        <p className="bubble-host-role">{world.host.role}</p>
      </div>
      <p className="bubble-text" aria-live="polite">
        {chooseLine(world)}
      </p>
    </section>
  );
}
