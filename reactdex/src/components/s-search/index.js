export function Ssearch() {
  return (
    <section className="s-search">
      <div className="container">
        <div className="internal-container">
          <div className="text">
            <h2>Escolha o seu Pokémon</h2>
          </div>
          <div className="search">
            <img
              src="./assets/img/Home/Home-s-pesquisa/icon-search.png"
              alt="Lupa"
            />
            <input
              type="search"
              id="site-search"
              className="input-search"
              placeholder="Nome ou código"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
