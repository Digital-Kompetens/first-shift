// =====================================================================
// Level: Intermediate
// The menu board on the wall. Shows the menu from the world file.
//
// TODO (Advanced): Split the menu into pages with "Föregående" and
// "Nästa" buttons. Keep track of the current page with useState.
// =====================================================================

export default function Menu({ items }) {
  return (
    <section className="menu-board" aria-labelledby="menu-heading">
      <h2 id="menu-heading">Meny</h2>
      <ul className="menu-list">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <div className="menu-row">
              <h3>{item.name}</h3>
              <span className="menu-price">{item.price}</span>
            </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
