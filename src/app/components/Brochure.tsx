import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function Brochure() {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert('Brochure download started! In a production environment, this would download a PDF file.');
  };

  const brochureContents = [
    'Complete program catalog',
    'Tuition and financial aid information',
    'Faculty profiles and credentials',
    'Campus facilities overview',
    'Student testimonials',
    'Application process guide'
  ];

  return (
    <section id="brochure" className="py-20 bg-[#202020] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#B19A71] text-black px-4 py-2 rounded mb-6">
                <FileText size={20} />
                <span>2025-2026 Academic Year</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Download Our <span className="text-[#B19A71]">Brochure</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get comprehensive information about our programs, facilities, and admission 
                requirements. Everything you need to start your musical journey.
              </p>
              <div className="space-y-3 mb-8">
                {brochureContents.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#B19A71] flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleDownload}
                className="bg-[#B19A71] text-black hover:bg-[#9d8560] px-8 py-6 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download Brochure (PDF)
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="aspect-[8.5/11] bg-gradient-to-br from-[#B19A71] to-[#9d8560] rounded flex items-center justify-center">
                  <div className="text-center text-white">
                    <FileText size={80} className="mx-auto mb-4" />
                    <h3 className="text-2xl mb-2">Academic Brochure</h3>
                    <p>2025-2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
