export function SlideHeroOne() {
  return (
    <section className="s-slider-1">
      <div className="container">
        <div className="bg-1">
          <img
            className="bg-icons"
            src="/assets/img/Home/Home-header/bg-red-icon.png"
            alt="Pokébola"
          />
          <div className="internal-container">
            <div className="header-middle">
              <div className="icon">
                <img
                  src="/assets/img/Home/Home-header/icon-bag.png"
                  alt=" Icone Mochila"
                />
                <p>Machine Pokédex</p>
              </div>
              <div className="texto">
                <p>A pokédex ideal para todo o caçador pokémon</p>
                <h1>Pikachu eu escolho você!</h1>
              </div>
            </div>
            <div className="header-bottom">
              <div className="call-to-action">
                <a href="">
                  <p>Explorar</p>
                  <img
                    src="/assets/img/Home/Home-header/ico-arrow-down-16.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="header-pulse">
                <img
                  className="load-one"
                  src="/assets/img/Home/Home-header/bg-red-ellipse-3.png"
                  alt="Pokébola"
                />
                <img
                  className="load-one"
                  src="/assets/img/Home/Home-header/bg-red-ellipse-2.png"
                  alt="Pokébola"
                />
                <img
                  className="load-one"
                  src="/assets/img/Home/Home-header/bg-red-ellipse-1.png"
                  alt="Pokébola"
                />
                <img
                  className="load-two"
                  src="/assets/img/Home/Home-header/bg-star.png"
                  alt="Pokébola"
                />
                <img
                  src="/assets/img/Home/Home-header/img-pokeball-red.png"
                  alt="Pokébola"
                />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
