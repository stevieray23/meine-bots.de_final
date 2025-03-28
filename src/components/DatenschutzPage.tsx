import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const DatenschutzPage = () => {
  console.log('Rendering DatenschutzPage');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('DatenschutzPage mounted');
    // Force body styles
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    
    return () => {
      // Cleanup
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000', color: '#ffffff', position: 'relative', zIndex: 1 }}>
      <Header />
      <main className="container mx-auto px-6 py-32" style={{ backgroundColor: '#000000', minHeight: 'calc(100vh - 200px)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>Datenschutzerklärung</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Verantwortliche Stelle</h2>
            <div className="pl-4 border-l-4 border-blue-500 text-gray-300">
              <p>Stegra LLC</p>
              <p>30 N Gould St Ste N</p>
              <p>Sheridan, WY 82801 USA</p>
              <p>EIN: 30-1365609</p>
              <p>E-Mail: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
              <p>Telefon: <a href="tel:+491752773365" className="text-blue-500 hover:underline">+49 1752773365</a></p>
              <p>Vertretungsberechtigter Gesellschafter: Stephan Graf</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise zum Datenschutz</h2>
            <p className="text-gray-300">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich im Einklang mit den gesetzlichen Bestimmungen (DSGVO, BDSG und andere anwendbare Datenschutzgesetze). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website und unserer KI-Dienstleistungen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Bei der Nutzung unserer Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Je nach Nutzung unserer Dienste können folgende Daten verarbeitet werden:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, E-Mail-Adresse, Telefonnummer</li>
                <li>Unternehmensinformationen (Name, Branche, Position)</li>
                <li>Bei Nutzung unserer KI-Lösungen: Nutzungsdaten, Interaktionsdaten mit Chatbots und Sprachassistenten</li>
                <li>Bei Terminvereinbarungen: Terminwünsche und -informationen</li>
                <li>Technische Informationen (IP-Adresse, Browser-Typ, verwendetes Betriebssystem, Zugriffszeiten)</li>
              </ul>
              <p>Die Verarbeitung dieser Daten erfolgt zu folgenden Zwecken:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zur Bereitstellung und Optimierung unserer KI-Lösungen</li>
                <li>Zur Kommunikation mit Ihnen (Anfragen, Beratung, Support)</li>
                <li>Zur Verbesserung unserer Dienstleistungen</li>
                <li>Zur Durchführung von Demo-Terminen und Beratungsgesprächen</li>
                <li>Zur Analyse der Websitenutzung</li>
              </ul>
            </div>
          </section>

          {/* Sections 4-12 */}
          {[
            {
              title: "4. Rechtsgrundlagen der Verarbeitung",
              content: (
                <div className="space-y-4">
                  <p>Die Verarbeitung Ihrer Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
                    <li>Zur Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)</li>
                    <li>Zur Wahrung unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), sofern Ihre Interessen oder Grundrechte nicht überwiegen</li>
                  </ul>
                </div>
              )
            },
            {
              title: "5. Weitergabe von Daten",
              content: (
                <div className="space-y-4">
                  <p>Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sie hierzu Ihre ausdrückliche Einwilligung erteilt haben</li>
                    <li>Dies zur Durchführung unserer Dienstleistungen erforderlich ist (z.B. Calendly für Terminvereinbarungen, Google Meet für Online-Meetings)</li>
                    <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht</li>
                  </ul>
                </div>
              )
            },
            {
              title: "6. Terminbuchung und Online-Meetings",
              content: (
                <div className="space-y-4">
                  <p>
                    Für die Buchung von Demonstrationsterminen und Beratungsgesprächen nutzen wir Calendly. Bei einer Terminbuchung werden die von Ihnen angegebenen Daten an Calendly übermittelt. Nach erfolgreicher Buchung erhalten Sie einen Einladungslink zu einem Google Meet-Meeting.
                  </p>
                  <p>
                    Bei der Nutzung von Calendly und Google Meet gelten die jeweiligen Datenschutzbestimmungen dieser Dienste. Wir empfehlen, sich mit diesen vertraut zu machen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://calendly.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Calendly</a></li>
                    <li><a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Meet</a></li>
                  </ul>
                </div>
              )
            },
            {
              title: "7. Einsatz von KI-Technologien",
              content: (
                <div className="space-y-4">
                  <p>
                    Als Anbieter von KI-Lösungen setzen wir modernste Technologien ein, um unsere Dienste zu erbringen. Dabei werden Daten wie folgende verarbeitet:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bei KI-Chatbots: Konversationsinhalte, Nutzereingaben, Interaktionsdaten</li>
                    <li>Bei Sprachassistenten: Sprachaufnahmen, Transkriptionen, Konversationsinhalte</li>
                    <li>Bei Workflow-Automatisierung: Prozessdaten, Eingabedaten, Ausgabedaten</li>
                  </ul>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt, um Ihnen maßgeschneiderte KI-Lösungen anzubieten und diese kontinuierlich zu verbessern. Wir stellen sicher, dass alle datenschutzrechtlichen Anforderungen bei der Entwicklung und Implementierung unserer KI-Systeme berücksichtigt werden.
                  </p>
                </div>
              )
            },
            {
              title: "8. Cookies und Webanalyse",
              content: (
                <div className="space-y-4">
                  <p>
                    Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                  </p>
                  <p>
                    Wir nutzen Google Analytics, um die Nutzung unserer Website zu analysieren. Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch den Cookie erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben Maßnahmen getroffen, um einen datenschutzkonformen Einsatz sicherzustellen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP-Anonymisierung</li>
                    <li>Abschluss eines Auftragsverarbeitungsvertrags mit Google</li>
                    <li>Verwendung von Standard-Vertragsklauseln für Datentransfers in die USA</li>
                  </ul>
                  <p>
                    Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.
                  </p>
                </div>
              )
            },
            {
              title: "9. Ihre Rechte",
              content: (
                <div className="space-y-4">
                  <p>Sie haben folgende Rechte:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                    <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
                  </ul>
                  <p>
                    Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter den angegebenen Kontaktdaten.
                  </p>
                </div>
              )
            },
            {
              title: "10. Datensicherheit",
              content: (
                <p>
                  Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
              )
            },
            {
              title: "11. Aufbewahrungsdauer",
              content: (
                <p>
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist oder solange gesetzliche Aufbewahrungsfristen bestehen.
                </p>
              )
            },
            {
              title: "12. Änderungen der Datenschutzerklärung",
              content: (
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung zu berücksichtigen.
                </p>
              )
            }
          ].map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div className="text-gray-300">
                {section.content}
              </div>
            </section>
          ))}

          <p className="text-sm text-gray-400 mt-16">
            Stand: März 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatenschutzPage;