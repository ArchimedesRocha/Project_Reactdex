export function SelectFilter({ activeButton, water }) {
  return (
    <div class="select-filter" id="js-select-filter">
      <ul>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-pkb-blue.png"
              alt=""
            />
            <p className={activeButton == "All" ? "selected-text" : ""}>All</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-ghost.png"
              alt=""
            />
            <p className={activeButton == "Ghost" ? "selected-text" : ""}>
              Ghost
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-stone.png"
              alt=""
            />
            <p className={activeButton == "Stone" ? "selected-text" : ""}>
              Stone
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-plants.png"
              alt=""
            />
            <p className={activeButton == "Plants" ? "selected-text" : ""}>
              Plants
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-dragon.png"
              alt=""
            />
            <p className={activeButton == "Dragon" ? "selected-text" : ""}>
              Dragon
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-metal.png"
              alt=""
            />
            <p className={activeButton == "Metal" ? "selected-text" : ""}>
              Metal
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-shock.png"
              alt=""
            />
            <p className={activeButton == "Shock" ? "selected-text" : ""}>
              Shock
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-water.png"
              alt=""
            />
            <p className={water ? "selected-text" : ""}>Water</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-fire.png"
              alt=""
            />
            <p className={activeButton == "Fire" ? "selected-text" : ""}>
              Fire
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-insect.png"
              alt=""
            />
            <p className={activeButton == "Insect" ? "selected-text" : ""}>
              Insect
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="/assets/img/Home/Home-s-filter/icons/icon-flying.png"
              alt=""
            />
            <p className={activeButton == "Flying" ? "selected-text" : ""}>
              Flying
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}
