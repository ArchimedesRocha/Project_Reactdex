//Bibliotecas
import { useState } from "react";

//components
import { SelectFilter } from "./areas-filter/select-filter-left";
import { ResultFilter } from "./areas-filter/result-filter-right";

export function Sfilter() {
  const [clickWater, setClickWater] = useState(true);

  return (
    <section class="s-filter">
      <div class="container">
        <div class="internal-container">
          <SelectFilter water={clickWater} />
          <ResultFilter />
        </div>
      </div>
    </section>
  );
}
