// Components
import { Header } from "../components/header";
import { Slide } from "../components/s-hero";
import { Search } from "../components/search";

export default function Home() {
  return (
    <>
      <Header active="menu-ativo" effect=" effect" />
      <Slide />
      <Search />
    </>
  );
}
