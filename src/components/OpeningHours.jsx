// =====================================================================
// Level: Intermediate
// The opening hours, shown as a small sign on the wall.
// The hours themselves are written in the world files.
// =====================================================================

export default function OpeningHours({ hours }) {
  const hasHours = Array.isArray(hours) && hours.length > 0;

  return (
    <section className="sign sign-small hours" aria-labelledby="hours-heading">
      <h2 id="hours-heading">Öppettider</h2>
      {hasHours ? (
        <dl className="hours-list">
          {hours.map((row) => (
            <div key={row.days}>
              <dt>{row.days}</dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="sign-note">Inte bestämda än.</p>
      )}
    </section>
  );
}
