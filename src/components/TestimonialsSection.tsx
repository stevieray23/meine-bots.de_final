import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Der KI-Chatbot hat unseren Kundenservice revolutioniert. Die Reaktionszeiten sanken um 80% und die Kundenzufriedenheit ist auf einem Allzeithoch.",
    author: "Sarah Weber",
    position: "Head of Customer Service",
    company: "TechRetail GmbH",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Der KI Bot von meine-bots hat unsere Zahnarztpraxis revolutioniert! Die Patienten können sich jetzt bequem vorab über ganzheitliche Behandlungen informieren, was ihre Ängste deutlich reduziert hat. Die Implementierung war unkompliziert und der Support erstklassig. Die Ergebnisse übertreffen all unsere Erwartungen - von optimierten Abläufen bis hin zu begeisterten Patienten.",
    author: "Dr. Wolfgang Koch",
    position: "Zahnarzt & Praxisinhaber",
    company: "www.praxis-dr-koch.de",
    image: "https://www.praxis-dr-koch.de/wp-content/uploads/2022/02/dr_wolfgang_h_koch.png"
  },
  {
    quote: "Die KI Lösungen von meine-bots haben meine Erwartungen übertroffen. Nachweisbare Reduzierung von Telefonzeiten sowie zügige und unkomlizierte Umsetzung. Ich kann die KI allen Kolleginnen und Kollegen wärmstens weiter empfehlen!",
    author: "Dr. Johanna Graf",
    position: "Zahnärztin & Praxisinhaberin",
    company: "www.praxis-dr-graf.de",
    image: "https://cdn.chimpify.net/5ed0dc6ca85872e86d8b4578/2020/06/Praxisbild1.jpg"
  },
  {
    quote: "Die Integration der KI-Lösungen verlief reibungslos und die Ergebnisse übertrafen unsere Erwartungen bei weitem.",
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
            Das sagen unsere Kunden
          </h2>
          <p className="text-gray-400 text-lg">
            Erfahren Sie, wie unsere KI-Lösungen Unternehmen verschiedener Branchen dabei helfen, ihre Ziele zu erreichen.
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