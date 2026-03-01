import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Faculty } from './components/Faculty';
import { Brochure } from './components/Brochure';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Faculty />
        <Brochure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
