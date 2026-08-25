import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandStatement, { Strip } from './components/BrandStatement';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Experience from './components/Experience';
import MarketingToolkit from './components/MarketingToolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to content
      </a>

      <Navigation />
      <Cursor />

      <main>
        <Hero />
        <Strip />
        <SelectedWork />
        <About />
        <BrandStatement />
        <Experience />
        <MarketingToolkit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
