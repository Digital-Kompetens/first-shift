// =====================================================================
// Level: Intermediate
// Buttons for switching between worlds.
// The current world is marked with aria-pressed, which screen readers
// read out as "pressed", and which the CSS uses for the active style.
// =====================================================================

export default function WorldSwitcher({ worlds, currentId, onChange }) {
  return (
    <nav className="switcher" aria-label="Välj värld">
      <span className="switcher-label">Värld:</span>
      {worlds.map((world) => (
        <button
          key={world.id}
          type="button"
          aria-pressed={world.id === currentId}
          onClick={() => onChange(world.id)}
        >
          {world.name}
        </button>
      ))}
    </nav>
  );
}
