export function Header({ active, effect }) {
  return (
    <header>
      <div className="container">
        <div className="internal-container">
          <div className="header-top">
            <nav>
              <img
                className="logo"
                src="assets/img/Logo.png"
                alt="Logo Pokémon"
              />
              <ul>
                <li>
                  <p className={active + effect}>Projeto Didático</p>
                </li>
                <li>
                  <img
                    className="arrow-right"
                    src="assets/img/Home/Home-header/ico-right-arrow-16.png"
                    alt="Right Arrow"
                  />
                </li>
                <li>
                  <p>
                    Machine <strong>Pokédex</strong>
                  </p>
                </li>
                <li>
                  <img
                    className="ico-hamburguer"
                    src="assets/img/Home/Home-header/icon-menu.png"
                    alt="Icone Hamburguer"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
