import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import InfoSection from "./components/sections/InfoSection";
import ProductsSection from "./components/sections/ProductsSection";
import { ramosXpress, girasoles } from "./data/products";

export default function App() {
  return (
    <div className="paper-texture">
      <Header />
      <Hero />
      <InfoSection />
      <ProductsSection
        id="xpress"
        title="Ramos Xpress"
        subtitle="Entrega rápida, listos el mismo día"
        products={ramosXpress}
      />
      <ProductsSection
        id="girasoles"
        title="Girasoles"
        subtitle="El corazón de nuestra temporada amarilla"
        products={girasoles}
        alt
      />
      <Footer />
    </div>
  );
}
