// =====================================================================
// Level: Intermediate
// Shows the menu from the world file.
//
// TODO (Advanced): Split the menu into pages with "Föregående" and
// "Nästa" buttons. Keep track of the current page with useState.
// =====================================================================

export default function Menu({ items }) {
  return (
    <section className="card" aria-labelledby="menu-heading">
      <h2 id="menu-heading">Meny</h2>
      <ul className="menu-list">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <span className="menu-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
