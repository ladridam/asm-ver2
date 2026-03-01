import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'Our Story', href: '#' },
      { label: 'Faculty', href: '#faculty' },
      { label: 'Facilities', href: '#' },
      { label: 'Accreditation', href: '#' }
    ],
    programs: [
      { label: 'Undergraduate', href: '#' },
      { label: 'Certificate Programs', href: '#' },
      { label: 'Private Lessons', href: '#' },
      { label: 'Youth Programs', href: '#' }
    ],
    resources: [
      { label: 'Student Portal', href: '#' },
      { label: 'Calendar', href: '#' },
      { label: 'News & Events', href: '#' },
      { label: 'Alumni', href: '#' }
    ],
    admissions: [
      { label: 'Apply Now', href: '#contact' },
      { label: 'Tuition & Aid', href: '#' },
      { label: 'Visit Campus', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#B19A71] rounded-full flex items-center justify-center">
                <span className="text-black text-xl">♪</span>
              </div>
              <span className="text-lg">Aadon School of Music</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Inspiring musical excellence since 20__
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-[#202020] hover:bg-[#B19A71] rounded transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#B19A71] mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#B19A71] mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#B19A71] mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#B19A71] mb-4">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aadon School of Music. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
