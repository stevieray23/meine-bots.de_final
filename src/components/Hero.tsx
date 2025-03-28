import React from 'react';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-blob top-1/4 -left-48" />
          <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-1/4 -right-48" />
          <div className="absolute w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-3xl animate-blob animation-delay-4000 top-3/4 left-1/4" />
        </div>
      </div>
      
      <div className="relative container mx-auto pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center text-container">
          <div className="mb-8">
            <h2 className="font-bold">
              <RotatingText />
            </h2>
          </div>
          <h1 className="font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Wir steigern Ihren <span className="whitespace-nowrap">Unternehmenserfolg</span> mit <span className="text-blue-500">Künstlicher Intelligenz</span>
          </h1>
          <p className="text-gray-300 mb-8 sm:mb-12 px-4">
            Wir entwickeln und implementieren hochwertige KI-Lösungen, um Unternehmensprozesse zu optimieren.
          </p>
          <a
            href="https://calendly.com/meine-bots/gratisberatung"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors group"
          >
            KI-Beratung buchen
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;