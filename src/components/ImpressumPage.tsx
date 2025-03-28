import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ImpressumPage = () => {
  console.log('Rendering ImpressumPage');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('ImpressumPage mounted');
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
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>Impressum</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kontaktadresse</h2>
            <div className="space-y-4 text-gray-300">
              <div className="pl-4 border-l-4 border-blue-500">
                <p>Stegra LLC.</p>
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p>USA</p>
                <p>EIN: 30-1365609</p>
                <p>E-Mail: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
                <p>Telefon: <a href="tel:+491752773365" className="text-blue-500 hover:underline">+49 1752773365</a></p>
                <p>Vertretungsberechtigter Gesellschafter: Stephan Graf</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
              <p>
                Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
            <p className="text-gray-300">
              Verweise und Links auf Webseiten Dritter liegen außerhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Urheberrechte</h2>
            <p className="text-gray-300">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschließlich der Firma oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="text-gray-300">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:
              </p>
              <div className="pl-4 border-l-4 border-blue-500">
                <p>E-Mail: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
                <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpressumPage;