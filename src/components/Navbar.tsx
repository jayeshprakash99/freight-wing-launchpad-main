import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          {/* site logo image - primary: /freight wing logo.png (please place this PNG in public/)
              fallback to /logo.svg if the PNG is missing */}
          <div
            className="bg-white rounded-md flex items-center justify-center shadow-md overflow-hidden"
            style={{ width: '12rem', height: '5.25rem', padding: '0.5rem' }}
          >
            <img
              src="/freight wing logo.png"
              alt="Freight Wing logo"
              className="object-contain"
              style={{ width: '10rem', height: '4.25rem', transform: 'scale(2)', transformOrigin: 'center' }}
              onError={(e) => {
                // fallback to the SVG logo if the PNG isn't present
                (e.currentTarget as HTMLImageElement).src = '/logo.svg';
              }}
            />
          </div>
          {/* Wordmark removed — logo-only header */}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-accent ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919619639221"
            className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 9619639221
          </a>
          <Button variant="accent" size="lg" asChild>
            <a href="#callback">Request Call Back</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary font-medium py-2 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="accent" className="mt-4" asChild>
              <a href="#callback">Request Call Back</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
