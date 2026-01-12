import { Award, Clock, Users, MapPin, Wrench, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expertise & Industry Experience',
      description: '15+ years of proven excellence in freight forwarding and logistics management.',
    },
    {
      icon: Clock,
      title: 'Reliability & Efficiency',
      description: 'On-time delivery with optimized routes and streamlined processes.',
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'Dedicated account managers and personalized service for every client.',
    },
    {
      icon: MapPin,
      title: 'GPRS Tracking',
      description: 'Real-time tracking for every vehicle ensuring complete visibility.',
    },
    {
      icon: Wrench,
      title: 'Customized Solutions',
      description: 'Tailored logistics solutions designed for your unique business needs.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your queries instantly.',
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Freight Wing Advantage
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We combine expertise, technology, and dedication to deliver exceptional logistics services that drive your business forward.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              
              <p className="text-white/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
