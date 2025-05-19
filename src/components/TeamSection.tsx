import React from 'react';
import AnimatedRobot from './AnimatedRobot';

const AboutUsSection = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-gray-400 text-lg">
            Experts in AI development, implementation, and customer support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CEO Section */}
          <div className="text-center">
            <div className="relative mb-6 mx-auto w-64 h-64">
              <img
                src="https://i.postimg.cc/3JbM39HQ/IMG-9019-Copy-removebg-preview.png"
                alt="Stephan Graf"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Stephan Graf</h3>
            <p className="text-blue-500 text-lg mb-4">Founder My-Bots</p>
          </div>

          {/* AI Agent Section */}
          <div className="text-center">
            <div className="relative mb-6 mx-auto w-64 h-64">
              <AnimatedRobot />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">RiO AI Assistant</h3>
            <p className="text-blue-500 text-lg mb-4">Your AI Assistant</p>
            <div className="max-w-sm mx-auto">
              <p className="text-gray-400"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;