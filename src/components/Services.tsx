import { Truck, Plane, Ship, FileCheck, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Road Transport',
      description: 'Integrated road freight solutions across India with GPS tracking and timely delivery.',
      features: ['Full Truck Load (FTL)', 'Part Truck Load (PTL)', 'Express Delivery'],
    },
    {
      icon: Plane,
      title: 'Air Freight Services',
      description: 'Fast & secure global air cargo handling for time-sensitive shipments.',
      features: ['Express Air Cargo', 'Charter Services', 'Airport to Airport'],
    },
    {
      icon: Ship,
      title: 'Sea Freight Services',
      description: 'Reliable international ocean freight solutions for bulk cargo.',
      features: ['FCL & LCL Shipping', 'Break Bulk Cargo', 'NVOCC Services'],
    },
    {
      icon: FileCheck,
      title: 'Custom Clearance',
      description: 'Complete documentation & compliance support for smooth customs.',
      features: ['Import/Export Clearance', 'Documentation', 'Compliance Advisory'],
    },
    {
      icon: Package,
      title: 'Door to Door Delivery',
      description: 'End-to-end logistics from origin to destination with single-point contact.',
      features: ['Pickup & Delivery', 'Tracking Updates', 'Insurance Coverage'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From air and sea freight to road transport and customs clearance, we offer end-to-end logistics services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
