// =====================================================================
// Level: Intermediate
// Shows today's special from the world file.
// =====================================================================

export default function SpecialOfTheDay({ text }) {
  const hasText = typeof text === 'string' && text.trim() !== '';

  return (
    <section className="card" aria-labelledby="special-heading">
      <h2 id="special-heading">Dagens special</h2>
      {hasText ? (
        <p className="special-text">{text}</p>
      ) : (
        <p className="tagline">Ingen special än.</p>
      )}
    </section>
  );
}
