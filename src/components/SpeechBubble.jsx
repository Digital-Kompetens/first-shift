// =====================================================================
// Level: Intermediate (reading) / Advanced (changing the logic)
// The host comments on what is missing in the world.
//
// TODO (Advanced): Make the host react to more things, for example
// when the menu has fewer than three items, or when a visitor clicks
// a menu item. Add new lines to the world files and choose them here.
// =====================================================================

// Returns which mood the host is in: 'missingHours', 'missingSpecial' or 'allGood'.
// The same name is used for the host's line and for the host's picture.
export function chooseMood(world) {
  const hasHours = Array.isArray(world.openingHours) && world.openingHours.length > 0;
  const hasSpecial = typeof world.specialOfTheDay === 'string' && world.specialOfTheDay.trim() !== '';

  if (!hasHours) return 'missingHours';
  if (!hasSpecial) return 'missingSpecial';
  return 'allGood';
}

export default function SpeechBubble({ world, mood }) {
  return (
    <p className="bubble" aria-live="polite">
      <span className="sr-only">{world.host.name} säger: </span>
      {world.lines[mood]}
    </p>
  );
}
