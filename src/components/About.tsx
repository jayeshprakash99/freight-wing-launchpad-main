import { Globe, Cpu, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Global Sustainable Transport',
      description: 'Eco-friendly shipping solutions across continents',
    },
    {
      icon: Cpu,
      title: 'Technology-Driven',
      description: 'Advanced tracking and logistics management',
    },
    {
      icon: Shield,
      title: 'Reliable & Scalable',
      description: 'Consistent service that grows with your business',
    },
    {
      icon: TrendingUp,
      title: 'Rapidly Growing',
      description: 'One of India\'s fastest-growing logistics brands',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-gradient">Global Logistics</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Freight Wing Logistic Pvt Ltd is an Indian logistics company providing integrated supply chain and freight solutions. We deliver services with passion and commitment across industries through empowered people, simplified processes, and the latest technology.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We act as a catalyst for our clients' business growth by aligning strategic and operational logistics. Our expertise spans air, sea, and road freight, customs clearance, and warehousing solutions.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-muted rounded-lg px-4 py-2 text-sm font-medium text-primary">
                ISO 9001:2015 Certified
              </div>
              <div className="bg-muted rounded-lg px-4 py-2 text-sm font-medium text-primary">
                IATA Accredited
              </div>
              <div className="bg-muted rounded-lg px-4 py-2 text-sm font-medium text-primary">
                WCA Member
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
