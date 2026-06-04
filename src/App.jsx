import "./styles/variables.css";
import "./styles/global.css";

import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { Pillars } from "./components/Pillars/Pillars";
import { CafeSection } from "./components/CafeSection/CafeSection";
import { Programs } from "./components/Programs/Programs";
import { Impact } from "./components/Impact/Impact";
import { Partners } from "./components/Partners/Partners";
import { DigitalContent } from "./components/DigitalContent/DigitalContent";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <Hero />
        <Pillars />
        <CafeSection />
        <Programs />
        <Impact />

        <section className="bottom-grid">
          <Partners />
          <DigitalContent />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
