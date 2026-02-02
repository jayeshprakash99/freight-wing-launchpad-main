import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace endpoint with your real API route if needed
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      toast({ title: 'Message sent', description: 'We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 22-68464030', '+91 9619639221'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Info@freightwinglogistic.com'],
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'Corporate Annexe, 10th Floor',
        'Unit No-1012, Sonawala Road',
        'Goregaon (E), Mumbai – 400063',
      ],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Reach out to us and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+919619639221" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={`https://wa.me/919619639221?text=${encodeURIComponent('Hello, I would like to inquire about your logistics services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:Info@freightwinglogistic.com" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div id="callback" className="bg-card rounded-2xl p-8 shadow-xl border border-border animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-6">Request a Call Back</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about your logistics needs..."
                />
              </div>
              <Button type="submit" variant="accent" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold">Branch Office - Pune</h3>
            <p className="text-sm text-gray-700">
              Purna Nagar Road, Office No-07, Osia Arcade opp Tata Motors, Chinchwad, Maharashtra 411019, IN
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Branch Office - Bhiwandi</h3>
            <p className="text-sm text-gray-700">
              Bhiwandi Kalher Road, Ofc No-B40, Paresh Complex Kalher, Bhiwandi, Maharashtra 421302, IN
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Branch Office - Ahmedabad</h3>
            <p className="text-sm text-gray-700">
              Office No. 302, 02 Number Office, Aniket Building, Near Girish Coldrink Cross Road, CG Road Ahmedabad,
              Gujarat 380006, IN
            </p>
          </div>
        </div>

        {/* Floating LinkedIn button */}
        <a
          href="https://www.linkedin.com/company/freight-wing-logistic-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Freight Wing on LinkedIn"
          className="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: '#24354C' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5Z" fill="#F1B65D"/>
            <path d="M.5 8.5H4.5V23.5H.5z" fill="#F1B65D"/>
            <path d="M8.5 8.5H12.2V10.54H12.26C12.98 9.44 14.6 8.28 16.98 8.28C21.24 8.28 22 10.86 22 15.06V23.5H18V15.98C18 13.94 17.86 11.44 14.98 11.44C12.08 11.44 11.6 13.64 11.6 15.72V23.5H8.5z" fill="#F1B65D"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
