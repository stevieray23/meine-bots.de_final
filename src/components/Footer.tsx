import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-8 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-16">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <span className="text-lg sm:text-xl font-bold text-white">my-bots</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@meine-bots.de" className="text-white hover:text-blue-500 transition-colors">
                    info@meine-bots.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+491752773659" className="text-white hover:text-blue-500 transition-colors">
                    +49 (0) 175 277 33 65
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-bold mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Industries', href: '#industries' },
                { name: 'About Us', href: '#team' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-bold mb-4 sm:mb-6">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: 'AI Chatbots', selector: '#chatbot' },
                { name: 'Voice Assistants', selector: '#voice-assistant' },
                { name: 'Process Automation', selector: '#services span.bg-blue-500\\/10:nth-of-type(2)' },
                { name: 'Consulting', selector: '#services .bg-blue-500\\/10.text-blue-500' }
              ].map((service) => {
                return (
                  <li key={service.name}>
                    <a
                      href="#services"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        const element = document.querySelector(service.selector);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-bold mb-4 sm:mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: 'Imprint', href: '/impressum' },
                { name: 'Privacy Policy', href: '/datenschutz' },
                { name: 'Terms & Conditions', href: '/agb' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2025 my-bots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;