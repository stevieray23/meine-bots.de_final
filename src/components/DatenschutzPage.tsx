import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  console.log('Rendering PrivacyPolicyPage');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('PrivacyPolicyPage mounted');
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
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>Privacy Policy</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Responsible Entity</h2>
            <div className="pl-4 border-l-4 border-blue-500 text-gray-300">
              <p>Stegra LLC</p>
              <p>30 N Gould St Ste N</p>
              <p>Sheridan, WY 82801 USA</p>
              <p>EIN: 30-1365609</p>
              <p>Email: <a href="mailto:info@meine-bots.de" className="text-blue-500 hover:underline">info@meine-bots.de</a></p>
              <p>Phone: <a href="tel:+491752773365" className="text-blue-500 hover:underline">+49 1752773365</a></p>
              <p>Authorized Representative: Stephan Graf</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. General Information on Data Protection</h2>
            <p className="text-gray-300">
              The protection of your personal data is important to us. We process your data exclusively in accordance with legal provisions (GDPR, BDSG, and other applicable data protection laws). In this privacy policy, we inform you about the most important aspects of data processing within our website and our AI services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Collection and Processing of Personal Data</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                When using our website, various personal data are collected. Personal data are data that can personally identify you. Depending on the use of our services, the following data may be processed:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Company information (name, industry, position)</li>
                <li>When using our AI solutions: usage data, interaction data with chatbots and voice assistants</li>
                <li>For appointment scheduling: appointment requests and information</li>
                <li>Technical information (IP address, browser type, operating system used, access times)</li>
              </ul>
              <p>The processing of this data is for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and optimize our AI solutions</li>
                <li>To communicate with you (inquiries, consultation, support)</li>
                <li>To improve our services</li>
                <li>To conduct demo appointments and consultation meetings</li>
                <li>To analyze website usage</li>
              </ul>
            </div>
          </section>

          {/* Sections 4-12 */}
          {[
            {
              title: "4. Legal Basis for Processing",
              content: (
                <div className="space-y-4">
                  <p>The processing of your data is based on the following legal grounds:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your consent (Art. 6(1)(a) GDPR)</li>
                    <li>For the performance of a contract or pre-contractual measures (Art. 6(1)(b) GDPR)</li>
                    <li>For the purposes of our legitimate interests (Art. 6(1)(f) GDPR), unless your interests or fundamental rights override these</li>
                  </ul>
                </div>
              )
            },
            {
              title: "5. Data Transfer",
              content: (
                <div className="space-y-4">
                  <p>Your personal data will only be transferred to third parties if:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have given your express consent</li>
                    <li>It is necessary for the provision of our services (e.g., Calendly for appointment scheduling, Google Meet for online meetings)</li>
                    <li>There is a legal obligation to transfer the data</li>
                  </ul>
                </div>
              )
            },
            {
              title: "6. Appointment Booking and Online Meetings",
              content: (
                <div className="space-y-4">
                  <p>
                    We use Calendly for booking demonstration appointments and consultation meetings. When booking an appointment, the information you provide is transmitted to Calendly. After successful booking, you will receive an invitation link to a Google Meet meeting.
                  </p>
                  <p>
                    When using Calendly and Google Meet, the respective privacy policies of these services apply. We recommend familiarizing yourself with them:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://calendly.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Calendly</a></li>
                    <li><a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Meet</a></li>
                  </ul>
                </div>
              )
            },
            {
              title: "7. Use of AI Technologies",
              content: (
                <div className="space-y-4">
                  <p>
                    As a provider of AI solutions, we use cutting-edge technologies to deliver our services. The following data is processed:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For AI chatbots: conversation content, user inputs, interaction data</li>
                    <li>For voice assistants: voice recordings, transcriptions, conversation content</li>
                    <li>For workflow automation: process data, input data, output data</li>
                  </ul>
                  <p>
                    This data is processed to provide you with customized AI solutions and to continuously improve them. We ensure that all data protection requirements are considered in the development and implementation of our AI systems.
                  </p>
                </div>
              )
            },
            {
              title: "8. Cookies and Web Analysis",
              content: (
                <div className="space-y-4">
                  <p>
                    Our website uses cookies to improve user-friendliness. Cookies are small text files that are stored on your device.
                  </p>
                  <p>
                    We use Google Analytics to analyze the use of our website. Google Analytics uses cookies that enable an analysis of your use of the website. The information generated by the cookie is usually transferred to a Google server in the USA and stored there. We have taken measures to ensure data protection-compliant use:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP anonymization</li>
                    <li>Conclusion of a data processing agreement with Google</li>
                    <li>Use of standard contractual clauses for data transfers to the USA</li>
                  </ul>
                  <p>
                    You can prevent the storage of cookies by adjusting your browser software accordingly.
                  </p>
                </div>
              )
            },
            {
              title: "9. Your Rights",
              content: (
                <div className="space-y-4">
                  <p>You have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to information (Art. 15 GDPR)</li>
                    <li>Right to rectification (Art. 16 GDPR)</li>
                    <li>Right to erasure (Art. 17 GDPR)</li>
                    <li>Right to restriction of processing (Art. 18 GDPR)</li>
                    <li>Right to data portability (Art. 20 GDPR)</li>
                    <li>Right to object (Art. 21 GDPR)</li>
                    <li>Right to lodge a complaint with a supervisory authority</li>
                  </ul>
                  <p>
                    To exercise your rights, please contact us using the contact details provided.
                  </p>
                </div>
              )
            },
            {
              title: "10. Data Security",
              content: (
                <p>
                  We take appropriate technical and organizational measures to protect your personal data against accidental or intentional manipulation, loss, destruction, or unauthorized access. Our security measures are continuously improved in line with technological developments.
                </p>
              )
            },
            {
              title: "11. Retention Period",
              content: (
                <p>
                  We store your personal data only for as long as necessary for the purposes for which they were collected or as long as statutory retention periods exist.
                </p>
              )
            },
            {
              title: "12. Changes to the Privacy Policy",
              content: (
                <p>
                  We reserve the right to adapt this privacy policy as needed to ensure it always complies with current legal requirements or to reflect changes to our services in the privacy policy.
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
            Last updated: March 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;