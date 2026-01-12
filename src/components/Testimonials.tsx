import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Supply Chain Manager',
      company: 'ABC Pharmaceuticals',
      content: 'Freight Wing has been instrumental in optimizing our supply chain. Their real-time tracking and proactive communication have significantly reduced our logistics challenges.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      position: 'Import Manager',
      company: 'Global Textiles Ltd.',
      content: 'Outstanding service! Their customs clearance expertise saved us countless hours. The team is professional, responsive, and truly understands our business needs.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      position: 'Operations Director',
      company: 'Tech Electronics India',
      content: 'We\'ve been working with Freight Wing for 5 years now. Their reliability and competitive pricing make them our preferred logistics partner for all international shipments.',
      rating: 5,
    },
    {
      name: 'Sunita Reddy',
      position: 'CEO',
      company: 'Agro Exports Pvt Ltd',
      content: 'Exceptional air freight services! They handled our perishable goods with utmost care and ensured timely delivery across continents. Highly recommended!',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about our services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-accent' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
