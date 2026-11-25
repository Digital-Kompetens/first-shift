// =====================================================================
// Level: Intermediate
// Shows the opening hours, or a short note if they are missing.
// The hours themselves are written in the world files.
// =====================================================================

export default function OpeningHours({ hours }) {
  const hasHours = Array.isArray(hours) && hours.length > 0;

  return (
    <section className="card" aria-labelledby="hours-heading">
      <h2 id="hours-heading">Öppettider</h2>
      {hasHours ? (
        <dl className="hours-list">
          {hours.map((row) => (
            <div key={row.days} style={{ display: 'contents' }}>
              <dt>{row.days}</dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="tagline">Inte bestämda än.</p>
      )}
    </section>
  );
}
