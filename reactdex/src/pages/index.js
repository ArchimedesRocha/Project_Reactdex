import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Shero } from "../components/s-hero";
import { Sfilter } from "../components/s-filter";
import { Ssearch } from "../components/s-search";

export default function Home() {
  return (
    <>
      <Header active="menu-ativo" effect="effect" />
      <Shero />
      <Ssearch />
      <Sfilter />
      <Footer />
    </>
  );
}
