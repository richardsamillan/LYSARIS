import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import InfoSection from './components/InfoSection.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import Footer from './components/Footer.jsx'

// 👉 Reemplaza cada "image" por la ruta a tu foto real dentro de /public/images
const ramosXpress = [
  {
    image: '/images/ramos3.png',
    name: 'Sunny Love',
    price: 'S/26.00',
    description: 'Ramo de girasol, statis y gypsophilia.',
    features: ['Girasol', 'Statis', 'Gypsophilia'],
  },
  {
    image: '/images/ramos2.png',
    name: 'Rayito de Amor',
    price: 'S/30.00',
    description: 'combinación de colores lo convierten en el detalle perfecto para expresar amor, admiración y cariño en cualquier ocasión.',
    features: ['🌹 Rosas rojas', '🤍 Flores blancas pequeñas', '🌿eucalipto'],
  },
  {
    image: '/images/ramos3.png',
    name: 'Dulce Primavera',
    price: 'S/35.00',
    description: 'Astromelias amarillas y claveles blancos.',
    features: ['Astromelias amarillas', 'Claveles blancos'],
  },
  {
    image: '/images/rosa1.png',
    name: 'Yellow Muse',
    price: 'S/40.00',
    description: 'Lirio, astromelias blancas y gypsophilia.',
    features: ['Lirio', 'Astromelias blancas', 'Gypsophilia'],
  },
  {
    image: '/images/rosa1.png',
    name: 'Yellow Muse 2',
    price: 'S/40.00',
    description: 'Lirio, astromelias blancas y gypsophilia.',
    features: ['Lirio', 'Astromelias blancas', 'Gypsophilia'],
  },
]

const girasoles = [
  {
    image: '/images/rosa1.png',
    name: 'Luz de Mi Vida',
    price: 'S/65.00',
    description: 'Ramo fresco y alegre que evoca la luz de un día de primavera.',
    features: ['Girasoles frescos', 'Follaje verde', 'Envoltura elegante'],
  },
  {
    image: '/images/rosa1.png',
    name: 'Sol Naciente',
    price: 'S/55.00',
    description: 'Sencillo, elegante y lleno de significado.',
    features: ['Girasoles', 'Diseño sencillo', 'Dedicatoria incluida'],
  },
]

export default function App() {
  return (
    <div className="paper-texture">
      <Navbar />
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
  )
}