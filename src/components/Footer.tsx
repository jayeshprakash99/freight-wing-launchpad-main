import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Call Back', href: '#callback' },
  ];

  const services = [
    'Road Transport',
    'Air Freight',
    'Sea Freight',
    'Custom Clearance',
    'Warehousing',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-accent">Freight</span> Wing
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner in global logistics and freight forwarding. Delivering excellence across air, sea, and land.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="text-white/70">
                  <p>+91 22-68464030</p>
                  <p>+91 9619639221</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-white/70">Info@freightwinglogistic.com</p>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="text-white/70">
                  <p>Corporate Annexe, 10th Floor</p>
                  <p>Unit No-1012, Sonawala Road</p>
                  <p>Goregaon (E), Mumbai – 400063</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Freight Wing Logistic Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
