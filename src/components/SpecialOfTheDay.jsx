// =====================================================================
// Level: Intermediate
// Today's special, shown as a sign standing on the counter.
// =====================================================================

export default function SpecialOfTheDay({ text }) {
  const hasText = typeof text === 'string' && text.trim() !== '';

  return (
    <section className="special" aria-labelledby="special-heading">
      <h2 id="special-heading">Dagens special</h2>
      <p className={hasText ? 'special-text' : 'special-text special-empty'}>
        {hasText ? text : 'Ingen special än'}
      </p>
    </section>
  );
}
