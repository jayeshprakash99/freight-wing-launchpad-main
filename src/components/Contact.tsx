import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
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
      </div>
    </section>
  );
};

export default Contact;
