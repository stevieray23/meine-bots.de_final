import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ChatbotPrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000', color: '#ffffff', position: 'relative', zIndex: 1 }}>
      <Header />
      <main className="container mx-auto px-6 py-32" style={{ backgroundColor: '#000000', minHeight: 'calc(100vh - 200px)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzhinweise für die Chatbot-Nutzung</h1>
          <p className="text-gray-400 mb-8">Stand: Oktober 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Verantwortlichkeit und Organisation</h2>
            <div className="space-y-4 text-gray-300">
              <p>Für die Verarbeitung Ihrer Daten sind gemeinsam verantwortlich:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Die jeweilige Zahnarztpraxis, auf deren Website Sie den Chatbot nutzen</li>
                <li>Meine-bots (SteGra LLC) als technischer Dienstleister und Betreiber des Chatbot-Systems</li>
              </ul>
              <p>Die Zuständigkeiten sind wie folgt verteilt:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Die jeweilige Praxis verantwortet die medizinischen Aspekte und den Patientenkontakt</li>
                <li>Meine-bots verantwortet die technische Bereitstellung und Sicherheit des Systems</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Datenverarbeitung</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.1 Erfasste Daten:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inhalt Ihrer Chat-Nachrichten</li>
                <li>Zeitpunkt und Dauer der Nutzung</li>
                <li>Technische Verbindungsdaten</li>
                <li>Interaktionsmuster zur Qualitätssicherung</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">2.2 Wichtiger Hinweis:</h3>
              <p>
                Bitte übermitteln Sie keine sensiblen Gesundheitsdaten oder besonders vertrauliche Informationen über den Chat. 
                Für medizinische Beratung nutzen Sie bitte den direkten Kontakt zur Praxis.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Zugriff und Einsicht</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">3.1 Direkter Zugriff auf Ihre Chatverläufe haben:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ihre Zahnarztpraxis (für Patientenbetreuung)</li>
                <li>Meine-bots (für technische Betreuung und Qualitätssicherung)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">3.2 Technische Dienstleister:</h3>
              <p>
                Folgende Unternehmen verarbeiten Daten in unserem Auftrag unter strengen Sicherheitsauflagen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow (Kanada): Chatbot-Steuerung</li>
                <li>OpenAI und Anthropic (USA): KI-gestützte Textverarbeitung</li>
                <li>VectorShift (USA): Systemoptimierung</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">3.3 Internationale Datenübermittlung:</h3>
              <p>Die Übermittlung von Daten in Drittländer erfolgt auf Basis:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>EU-Standardvertragsklauseln</li>
                <li>Technischer Schutzmaßnahmen</li>
                <li>Regelmäßiger Sicherheitsüberprüfungen</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Zwecke der Verarbeitung</h2>
            <div className="space-y-4 text-gray-300">
              <p>Ihre Daten werden verwendet für:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Beantwortung Ihrer Anfragen</li>
                <li>Qualitätssicherung des Services</li>
                <li>Technische Verbesserung des Systems</li>
                <li>Schulung des KI-Systems (nur in anonymisierter Form)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Speicherdauer</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc pl-6 space-y-2">
                <li>Chatverläufe werden für 12 Monate gespeichert</li>
                <li>Technische Protokolldaten für 90 Tage</li>
                <li>Frühere Löschung auf Anfrage möglich</li>
                <li>Gesetzliche Aufbewahrungspflichten bleiben unberührt</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Ihre Rechte</h2>
            <div className="space-y-4 text-gray-300">
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Widerruf Ihrer Einwilligung</li>
                <li>Auskunft über gespeicherte Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Ausübung Ihrer Rechte</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">7.1 Für Anfragen zu Ihren Chatverläufen:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Primär an Ihre Zahnarztpraxis</li>
                <li>Alternativ an: info@meine-bots.de</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">7.2 Bei technischen Fragen:</h3>
              <div className="pl-4 border-l-4 border-blue-500">
                <p>Meine-bots (SteGra LLC)</p>
                <p>E-Mail: info@meine-bots.de</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Datensicherheit</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">8.1 Technische Maßnahmen:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verschlüsselte Datenübertragung (TLS)</li>
                <li>Zugriffskontrollen und Authentifizierung</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Protokollierung aller Zugriffe</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">8.2 Organisatorische Maßnahmen:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schulung aller Mitarbeiter</li>
                <li>Dokumentierte Prozesse</li>
                <li>Regelmäßige Kontrollen</li>
                <li>Incident-Response-Plan</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Änderungsvorbehalt</h2>
            <div className="space-y-4 text-gray-300">
              <p>Wir behalten uns vor, diese Datenschutzhinweise anzupassen, wenn:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sich rechtliche Anforderungen ändern</li>
                <li>Technische Änderungen erfolgen</li>
                <li>Dies zur Verbesserung des Datenschutzes erforderlich ist</li>
              </ul>
              <p>Die aktuelle Version finden Sie stets im Chatbot-Dialog.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Einwilligung und Widerruf</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Die Nutzung des Chatbots erfordert Ihre Einwilligung in diese Datenverarbeitung. 
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. 
                Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatbotPrivacyPage;