import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contact Us!
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            We would love to discuss how we can integrate AI into your business. 
            Leave us a message, and we'll get back to you within 24 hours 
            to arrange an AI consultation!
          </p>
          
          <a
            href="https://calendly.com/meine-bots/gratisberatung"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Free AI Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;