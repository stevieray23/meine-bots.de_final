import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Was macht meine-bots einzigartig?",
    answer: "Unsere Einzigartigkeit liegt in der Kombination aus hochmoderner KI-Technologie und individueller Betreuung. Wir entwickeln maßgeschneiderte Lösungen, die perfekt auf Ihre Geschäftsprozesse abgestimmt sind. Unser Team aus erfahrenen Entwicklern und KI-Experten garantiert nicht nur technische Exzellenz, sondern auch eine reibungslose Integration in Ihr Unternehmen."
  },
  {
    question: "Ist mein Unternehmen für KI-Lösungen geeignet?",
    answer: "Grundsätzlich kann jedes Unternehmen von KI-Lösungen profitieren. Wir analysieren gemeinsam Ihre Prozesse und identifizieren die Bereiche, in denen KI den größten Mehrwert schaffen kann. Ob Kundenservice, Prozessautomatisierung oder Datenanalyse - wir finden die passende Lösung für Ihre spezifischen Anforderungen und Unternehmensgröße."
  },
  {
    question: "Wie lange dauert die Entwicklungsphase?",
    answer: "Die Entwicklungsdauer variiert je nach Komplexität und Umfang des Projekts. Typischerweise rechnen wir mit 2-4 Wochen für einfache Chatbots und zwischen 4-8 Wochen für komplexere Automatisierungen."
  },
  {
    question: "Bieten Sie Support nach der Implementierung an?",
    answer: "Ja, wir bieten umfassenden Support auch nach der Implementierung. Unser Supportteam steht Ihnen bei Fragen zur Verfügung, und wir führen regelmäßige Wartungen sowie Updates durch. Zusätzlich bieten wir Schulungen für Ihre Mitarbeiter an und optimieren die Systeme kontinuierlich basierend auf Ihrem Feedback und neuen Anforderungen."
  },
  {
    question: "Sind Ihre KI-Lösungen DSGVO-konform?",
    answer: "Ja, alle unsere KI-Lösungen und Automatisierungen entsprechen vollständig den Anforderungen der Datenschutz-Grundverordnung (DSGVO). Wir legen höchsten Wert auf Datenschutz und Datensicherheit. Wir arbeiten ausschließlich mit Partnern zusammen, die sich dem Datenschutz verschrieben haben und entsprechend zertifiziert sind. So stellen wir sicher, dass alle implementierten Lösungen den strengen deutschen und europäischen Datenschutzstandards entsprechen."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-400 text-lg">
            Finden Sie Antworten auf die wichtigsten Fragen zu unseren KI-Lösungen
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;