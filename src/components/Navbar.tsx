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
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
  <a href="#home" className="flex items-center flex-none">
          {/* Container crops top & bottom via overflow-hidden; image uses object-cover */}
          <div
            className="flex items-center justify-center overflow-hidden
                       w-48 h-16
                       sm:w-64 sm:h-25
                       md:w-80 md:h-28
                       lg:w-85 lg:h-42"
          >
            <img
              src="/freight wing logo.png"
              alt="Freight Wing logo"
              className="object-contain w-full h-full scale-[2.2]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/logo.svg';
              }}
            />
          </div>
          {/* Wordmark removed — logo-only header */}
        </a>

  {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-accent text-primary`}
            >
              {link.name}
            </a>
          ))}
        </nav>

  {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4 flex-none">
          <a
            href="tel:+919619639221"
            className="flex items-center gap-2 font-medium transition-colors duration-300 text-primary"
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
          className="lg:hidden p-2 text-primary"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl animate-fade-in border-t">
          <nav className="w-full px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary font-medium text-lg py-3 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2">
              <Button variant="accent" className="w-full" asChild>
                <a href="#callback">Request Call Back</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;