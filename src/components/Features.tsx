import { MapPin, Warehouse, Globe, Headphones, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time location tracking for all shipments',
    },
    {
      icon: Shield,
      title: 'Real-time Monitoring',
      description: 'Live updates on shipment status and ETAs',
    },
    {
      icon: Warehouse,
      title: 'Secure Warehousing',
      description: 'Climate-controlled storage facilities',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partners in 50+ countries worldwide',
    },
    {
      icon: Headphones,
      title: 'Fast Support',
      description: '24/7 dedicated customer service team',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Technology-Driven Logistics
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technology to provide you with complete visibility and control over your shipments.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-card rounded-full pl-2 pr-8 py-2 shadow-md hover:shadow-lg border border-border transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
