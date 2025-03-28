import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatbotDemo from './components/ChatbotDemo';
import VoiceAssistantDemo from './components/VoiceAssistantDemo';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import UeberUnsSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ImpressumPage from './components/ImpressumPage';
import DatenschutzPage from './components/DatenschutzPage';
import ChatbotPrivacyPage from './components/ChatbotPrivacyPage';
import AGBPage from './components/AGBPage';

const HomePage = () => (
  <div className="min-h-screen bg-black text-white">
    <Header />
    <Hero />
    <div className="py-24 bg-gradient-to-b from-black to-gray-900" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Unsere Dienstleistungen
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Entdecken Sie unsere innovativen KI-Lösungen, die Ihr Unternehmen auf das nächste Level bringen
        </p>
      </div>
    </div>
    <ChatbotDemo />
    <VoiceAssistantDemo />
    <ServicesSection />
    <IndustriesSection />
    <TestimonialsSection />
    <UeberUnsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/datenschutzerklarung" element={<ChatbotPrivacyPage />} />
        <Route path="/agb" element={<AGBPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
