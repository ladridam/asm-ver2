import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#000000] text-white sticky top-0 z-50 border-b border-[#B19A71]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#B19A71] rounded-full flex items-center justify-center">
              <span className="text-black text-xl">♪</span>
            </div>
            <span className="text-xl">Harmony Music Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#B19A71] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="hover:text-[#B19A71] transition-colors"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="hover:text-[#B19A71] transition-colors"
            >
              Faculty
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#B19A71] transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('brochure')}
              className="bg-[#B19A71] text-black hover:bg-[#9d8560]"
            >
              Download Brochure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left hover:text-[#B19A71] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-left hover:text-[#B19A71] transition-colors"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="text-left hover:text-[#B19A71] transition-colors"
            >
              Faculty
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left hover:text-[#B19A71] transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('brochure')}
              className="bg-[#B19A71] text-black hover:bg-[#9d8560]"
            >
              Download Brochure
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
