import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ImprintPage = () => {
  console.log('Rendering ImprintPage');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('ImprintPage mounted');
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
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>Imprint</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Address</h2>
            <div className="space-y-4 text-gray-300">
              <div className="pl-4 border-l-4 border-blue-500">
                <p>Stegra LLC.</p>
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p>USA</p>
                <p>EIN: 30-1365609</p>
                <p>Email: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
                <p>Phone: <a href="tel:+491752773365" className="text-blue-500 hover:underline">+49 1752773365</a></p>
                <p>Authorized Representative: Stephan Graf</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The author assumes no liability regarding the correctness, accuracy, timeliness, reliability, and completeness of the information.
              </p>
              <p>
                Liability claims against the author for material or immaterial damages resulting from access to or use or non-use of the published information, through misuse of the connection, or due to technical malfunctions are excluded.
              </p>
              <p>
                All offers are non-binding. The author expressly reserves the right to change, supplement, or delete parts of the pages or the entire offer without separate announcement, or to temporarily or permanently cease publication.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Liability for Links</h2>
            <p className="text-gray-300">
              References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is declined. Access to and use of such websites are at the user's own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Copyrights</h2>
            <p className="text-gray-300">
              The copyright and all other rights to content, images, photos, or other files on the website belong exclusively to the company or the specifically named rights holders. Written consent from the copyright holders must be obtained in advance for the reproduction of any elements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Consumer Dispute Resolution/Universal Dispute Resolution Body</h2>
            <p className="text-gray-300">
              We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Central Contact Point according to the Digital Services Act - DSA (Regulation (EU) 2022/265)</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You can reach our central contact point for users and authorities according to Art. 11, 12 DSA as follows:
              </p>
              <div className="pl-4 border-l-4 border-blue-500">
                <p>Email: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
                <p>Languages available for contact: German, English</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImprintPage;