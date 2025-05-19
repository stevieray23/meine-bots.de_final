import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI chatbot has revolutionized our customer service. Response times decreased by 80% and customer satisfaction is at an all-time high.",
    author: "Sarah Weber",
    position: "Head of Customer Service",
    company: "TechRetail GmbH",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The AI Bot from my-bots has revolutionized our dental practice! Patients can now conveniently learn about holistic treatments in advance, which has significantly reduced their anxiety. The implementation was straightforward and the support first-class. The results exceed all our expectations - from optimized processes to delighted patients.",
    author: "Dr. Wolfgang Koch",
    position: "Dentist & Practice Owner",
    company: "www.praxis-dr-koch.de",
    image: "https://www.praxis-dr-koch.de/wp-content/uploads/2022/02/dr_wolfgang_h_koch.png"
  },
  {
    quote: "The AI solutions from my-bots have exceeded my expectations. Demonstrable reduction in phone time as well as quick and uncomplicated implementation. I can warmly recommend the AI to all colleagues!",
    author: "Dr. Johanna Graf",
    position: "Dentist & Practice Owner",
    company: "www.praxis-dr-graf.de",
    image: "https://cdn.chimpify.net/5ed0dc6ca85872e86d8b4578/2020/06/Praxisbild1.jpg"
  },
  {
    quote: "The integration of the AI solutions went smoothly and the results far exceeded our expectations.",
    author: "Thomas Leidl",
    position: "CEO",
    company: "LT Engineering GmbH",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            Learn how our AI solutions help businesses across various industries achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-blue-900/50 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 p-1.5 bg-blue-500 rounded-full">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-blue-500"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-white">{testimonial.author}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-blue-500">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 italic relative">
                <Quote className="absolute -top-2 -left-2 w-4 h-4 text-blue-500/20" />
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;