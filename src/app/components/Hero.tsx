import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#202020] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1761173084851-1e5302e931fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwZXJmb3JtYW5jZSUyMGhhbGx8ZW58MXx8fHwxNzcxOTIxMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Orchestra Hall"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-32 md:py-48">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-[#B19A71] text-black mb-6 rounded">
            Est. 20__
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            Where Music
            <br />
            <span className="text-[#B19A71]">Comes Alive</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Discover your musical potential at Harmony Music Academy. 
            Professional instruction in classical and contemporary music for all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#B19A71] text-black hover:bg-[#9d8560] px-8 py-6 text-lg"
            >
              Apply Now
            </Button>
            <Button
              onClick={() => scrollToSection('curriculum')}
              variant="outline"
              className="bg-[#B19A71] text-white hover:bg-[#B19A71] hover:text-black px-8 py-6 text-lg"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
