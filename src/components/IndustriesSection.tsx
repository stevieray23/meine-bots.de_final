import React from 'react';
import { 
  ShoppingBag, 
  Building2, 
  Scale, 
  Heart, 
  Sparkles,
  BadgeDollarSign,
  Home
} from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    name: 'E-Commerce & Handel',
    style: 'from-purple-500/20 to-blue-500/20 border-purple-900/30',
    description: 'KI-gestützte Verkaufsoptimierung'
  },
  {
    icon: BadgeDollarSign,
    name: 'Finanzwesen',
    style: 'from-emerald-500/20 to-blue-500/20 border-emerald-900/30',
    description: 'Automatisierte Finanzprozesse'
  },
  {
    icon: Home,
    name: 'Immobilien',
    style: 'from-amber-500/20 to-red-500/20 border-amber-900/30',
    description: 'Intelligente Immobilienverwaltung'
  },
  {
    icon: Scale,
    name: 'Rechtswesen',
    style: 'from-gray-500/20 to-slate-500/20 border-gray-800',
    description: 'Rechtsdokumentenanalyse'
  },
  {
    icon: Heart,
    name: 'Gesundheitswesen',
    style: 'from-sky-500/20 to-indigo-500/20 border-sky-900/30',
    description: 'Patientenbetreuung & Verwaltung'
  },
  {
    icon: Building2,
    name: 'Beauty & Kosmetik',
    style: 'from-pink-500/20 to-purple-500/20 border-pink-900/30',
    description: 'Terminplanung & Kundenservice'
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Branchen, die wir transformieren
          </h2>
          <p className="text-gray-400 text-lg">
            Wir unterstützen Unternehmen verschiedener Branchen dabei, durch KI-gestützte Automatisierungslösungen zu wachsen und sich weiterzuentwickeln.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                key={industry.name}
                className={`w-full max-w-[150px] sm:max-w-full bg-gradient-to-br ${industry.style} 
                  backdrop-blur-sm border rounded-xl p-4 hover:bg-opacity-90 
                  transition-all duration-300 group flex flex-col items-center gap-3
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                  focus:ring-offset-black mx-auto md:mx-0`}
                onClick={() => window.location.href = '#contact'}
              >
                <div className="p-3 bg-black/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors text-center">
                  {industry.name}
                </h3>
                <p className="text-xs text-gray-400 text-center hidden sm:block">
                  {industry.description}
                </p>
              </button>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 
              rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Branchenlösung anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;