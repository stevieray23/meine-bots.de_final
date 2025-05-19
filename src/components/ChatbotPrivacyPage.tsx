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
          <h1 className="text-4xl font-bold mb-8">Privacy Information for Chatbot Usage</h1>
          <p className="text-gray-400 mb-8">Last updated: October 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Responsibility and Organization</h2>
            <div className="space-y-4 text-gray-300">
              <p>The following entities are jointly responsible for processing your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The respective dental practice on whose website you use the chatbot</li>
                <li>My-bots (SteGra LLC) as technical service provider and operator of the chatbot system</li>
              </ul>
              <p>Responsibilities are distributed as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The respective practice is responsible for medical aspects and patient contact</li>
                <li>My-bots is responsible for technical provision and system security</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Data Processing</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.1 Collected Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content of your chat messages</li>
                <li>Time and duration of use</li>
                <li>Technical connection data</li>
                <li>Interaction patterns for quality assurance</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">2.2 Important Note:</h3>
              <p>
                Please do not transmit sensitive health data or particularly confidential information via the chat. 
                For medical advice, please use direct contact with the practice.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Access and Insight</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">3.1 Direct access to your chat history:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your dental practice (for patient care)</li>
                <li>My-bots (for technical support and quality assurance)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">3.2 Technical Service Providers:</h3>
              <p>
                The following companies process data on our behalf under strict security requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow (Canada): Chatbot control</li>
                <li>OpenAI and Anthropic (USA): AI-powered text processing</li>
                <li>VectorShift (USA): System optimization</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">3.3 International Data Transfer:</h3>
              <p>The transfer of data to third countries is based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>EU Standard Contractual Clauses</li>
                <li>Technical protection measures</li>
                <li>Regular security reviews</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Purposes of Processing</h2>
            <div className="space-y-4 text-gray-300">
              <p>Your data is used for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Answering your inquiries</li>
                <li>Quality assurance of the service</li>
                <li>Technical improvement of the system</li>
                <li>Training of the AI system (only in anonymized form)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Storage Duration</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc pl-6 space-y-2">
                <li>Chat histories are stored for 12 months</li>
                <li>Technical log data for 90 days</li>
                <li>Earlier deletion possible upon request</li>
                <li>Legal retention obligations remain unaffected</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Withdraw your consent</li>
                <li>Access information about stored data</li>
                <li>Rectify incorrect data</li>
                <li>Delete your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Exercising Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">7.1 For inquiries about your chat history:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Primarily to your dental practice</li>
                <li>Alternatively to: info@meine-bots.de</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">7.2 For technical questions:</h3>
              <div className="pl-4 border-l-4 border-blue-500">
                <p>My-bots (SteGra LLC)</p>
                <p>Email: info@meine-bots.de</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">8.1 Technical Measures:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission (TLS)</li>
                <li>Access controls and authentication</li>
                <li>Regular security updates</li>
                <li>Logging of all access</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">8.2 Organizational Measures:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Training of all employees</li>
                <li>Documented processes</li>
                <li>Regular controls</li>
                <li>Incident response plan</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Reservation of Changes</h2>
            <div className="space-y-4 text-gray-300">
              <p>We reserve the right to adapt these privacy notices if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legal requirements change</li>
                <li>Technical changes occur</li>
                <li>This is necessary to improve data protection</li>
              </ul>
              <p>The current version can always be found in the chatbot dialog.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Consent and Withdrawal</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The use of the chatbot requires your consent to this data processing. 
                You can withdraw your consent at any time with effect for the future. 
                The withdrawal does not affect the lawfulness of processing based on consent before its withdrawal.
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