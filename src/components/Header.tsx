import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const menuItems = [
  { name: 'Dienstleistungen', href: '#services' },
  { name: 'Branchen', href: '#industries' },
  { name: 'Referenzen', href: '#testimonials' },
  { name: 'Über\xa0uns', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    if (targetSection && location.pathname === '/') {
      const element = document.querySelector(targetSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setTargetSection(null);
        }, 100);
      }
    }
  }, [location.pathname, targetSection]);

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      setTargetSection(href);
      window.location.href = '/' + href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />
            <span className="text-lg sm:text-xl font-bold text-white">meine-bots</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="javascript:void(0)"
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://calendly.com/meine-bots/gratisberatung"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Gratis Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="javascript:void(0)"
                onClick={() => handleNavClick(item.href)}
                className="block py-2.5 px-2 text-gray-300 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://calendly.com/meine-bots/gratisberatung"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 px-2 mt-2 text-blue-500 hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gratis Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;