import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsPage = () => {
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
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-gray-400 mb-8">Last updated: March 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">PREAMBLE</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The internet platform "my-bots" is offered by SteGra LLC – 30 North Gould Street – 82801, Sheridan, WY - USA (hereinafter "my-bots"). The services, offerings, and content provided at www.meine-bots.de serve to improve and automate business processes and customer interactions for companies across various industries through the use of AI-powered solutions such as chatbots, voice assistants, and workflow automations.
              </p>
              <p>
                Supported industries include but are not limited to: E-Commerce & Retail, Finance, Real Estate, Legal, Healthcare (medical practices, dental practices, medical care centers, physiotherapy practices, clinics) as well as Beauty & Cosmetics. Companies in these or other industries are hereinafter referred to as "providers" as they in turn offer services to their own customers.
              </p>
              <p>
                My-bots' services are exclusively directed at business customers (B2B). A direct contractual relationship with private individuals (B2C) is not established.
              </p>
              <p>
                The offered services include the creation and implementation of AI chatbots, voice assistants, workflow automations, strategic AI consulting, as well as the creation of video avatars for marketing purposes. My-bots has no influence on the quality of the professional services of its providers. The accuracy and completeness of the information provided by the providers on the services offered by my-bots cannot be verified by my-bots and no liability can be assumed for this. The use of the services offered by my-bots does not in any case replace professional consultation by the provider or its employees.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 1 Scope of the Terms and Conditions</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                1.1 These Terms and Conditions govern the legal relationships between my-bots and the providers as well as the use by end users. Internet users who access my-bots services on the websites or systems of providers are hereinafter referred to as "end users" or, depending on the industry, more specifically as "patients", "clients", "customers", etc.
              </p>
              <p>
                1.2 These Terms and Conditions apply to all providers who use my-bots' services, regardless of which domains they access my-bots' services through or which domains their offerings are accessed through. The Terms and Conditions also apply to providers who use the websites and services of my-bots or parts thereof via other websites or via third-party software, e.g., via a plugin.
              </p>
              <p>
                1.3 The use of AI services by end users requires their express consent before first use. This consent includes the processing of conversations, the anonymized storage of conversation content, and the use of the data for service improvement. The given consent can be withdrawn at any time with effect for the future. A withdrawal leads to the termination of the possibility to use the respective service for the respective end user.
              </p>
              <p>
                1.4 For contracts in connection with the services, these Terms and Conditions apply exclusively. Conflicting or deviating conditions of the provider will only be recognized by my-bots if my-bots has expressly agreed to them in writing. They also have no effect if my-bots has not objected to them in individual cases. The contract language is German.
              </p>
              <p>
                1.5 These Terms and Conditions apply in the version valid at the time of the conclusion of the contract or at least in the version last communicated to the provider in text form as a framework agreement also for similar future contracts, without the need to refer to the Terms and Conditions again in each individual case.
              </p>
              <p>
                1.6 My-bots reserves the right to change these Terms and Conditions at any time. The provider will be informed of these changes in text form via email. If the provider does not object to the change notification in text form to my-bots within 6 weeks after receipt, the changed Terms and Conditions are deemed accepted. If unforeseeable and uncontrollable changes occur after the conclusion of the contract (e.g., changes in the law) or gaps become apparent, whereby the relationship between service and consideration is significantly disturbed, my-bots has the right to adjust the Terms and Conditions even without the consent of the provider. The provider must also be informed of this in text form.
              </p>
              <p>
                1.7 In addition to these general terms and conditions, industry-specific special regulations apply, which are set out in separate appendices to these Terms and Conditions.
              </p>
              <p>
                1.8 The assignment of claims against my-bots to third parties is excluded. § 354a HGB remains unaffected by this.
              </p>
            </div>
          </section>

          {/* Add all remaining sections from the provided text */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 2 Services of the my-bots Internet Platform</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.1 AI Chatbots</h3>
              <p>
                My-bots offers AI-powered chatbots that can be queried on professional and factual topics related to the provider's company. The individual configuration of the chatbot functionality as well as the creation of the knowledge database is done on the instruction of the providers and is not checked for content by my-bots. My-bots cannot be held liable for the accuracy of the chatbot responses.
              </p>
              <p>
                The chatbot conversations are stored in anonymized form and are accessible to the respective provider. The storage is for the purpose of quality assurance, service optimization, and analysis of end user needs. Our AI-powered chatbots, also called "agents," use advanced language models (LLMs) such as OpenAI GPT and Anthropic Claude. Although these agents strive for the highest possible accuracy, their answers are not legally binding, and my-bots assumes no liability for possible inaccuracies or incompleteness.
              </p>
              <p>
                For the operation of the chatbot services, my-bots uses the following technical service providers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow as the primary chatbot service is provided by Voiceflow Inc., 1055 Bay Street Suite 2012, Toronto, ON, Canada, M5S 3A3.</li>
                <li>Voiceglow acts as an intermediary between Voiceflow and the provider as well as end user. Voiceglow's server location is in Frankfurt, Germany.</li>
                <li>VectorShift, based in 388 Beale St, San Francisco, California 94105, is used as another chatbot service.</li>
              </ul>
              <p>
                Details on data processing practices and data protection measures of these service providers can be found in § 7 of these Terms and Conditions.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 2 Services of the my-bots Internet Platform</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.2 Voice Assistants / Voice-Bots</h3>
              <p>
                My-bots offers as a service the setup of AI-powered voice assistants for the automation of telephone communication, appointment scheduling, and support inquiries. The voice assistants can conduct natural conversations, create transcriptions in real-time, perform intelligent appointment scheduling, and provide multilingual support.
              </p>
              <p>
                For the setup of voice bots, my-bots uses services such as Retell AI. After completion, all login details and access data are handed over to the provider. From this point on, the use and operation of the voice bot is exclusively by the provider, without my-bots having further access to the created voice bots. My-bots does not provide hosting for the created voice bots, but only provides the service of setup and configuration.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.3 Workflow Automation</h3>
              <p>
                My-bots offers solutions for intelligent process optimization and automation of workflows that can integrate existing applications and systems of the provider. These include app integration, process automation, error reduction, and real-time monitoring of business-critical processes.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.4 AI Consulting and Integration</h3>
              <p>
                My-bots provides consulting services for strategic AI integration and process analysis for the optimization of business processes. This includes detailed process analysis, AI potential assessment, implementation strategies, and ROI calculation with demonstrable performance indicators such as efficiency increase, cost reduction, and process optimization.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.5 Video Marketing</h3>
              <p>
                My-bots provides services for the creation of video avatars for marketing purposes, which are based on video clones of the provider or third parties who have given their express consent for this. For these services, my-bots uses the services of HeyGen to create personalized videos on behalf of the provider.
              </p>
              <p>
                After the setup and configuration of the video avatar solution at HeyGen, all login details and access data are handed over to the provider. From this point on, the use and operation of the video avatar solution is exclusively by the provider, without my-bots having further access to the created video avatars. My-bots does not provide hosting for the created video avatars, but only provides the service of setup and configuration.
              </p>
              <p>
                The legal basis for the use of the videos is either the express consent of the data subject pursuant to Art. 6(1)(a) GDPR or the legitimate interest in customer communication pursuant to Art. 6(1)(f) GDPR.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 3 Provider Account & User Account</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                3.1 To use the services, my-bots creates a provider account and, if necessary, a user account on the relevant platforms for the provider. For login, a username and password provided by my-bots are required. The use of the account is exclusively permitted to employees of the respective provider who have been expressly authorized by the provider and who have been provided with the corresponding login data.
              </p>
              <p>
                3.2 After the completion of a project (voice bot, video avatar, etc.), my-bots hands over all login details and access data to the provider. From this point on, the use and operation of the established services is exclusively by the provider, without my-bots having further access to the created solutions, unless expressly agreed otherwise.
              </p>
              <p>
                3.3 For quality assurance and improvement of the service during the setup phase, my-bots may collect data about the interactions made within the provider account. This includes statistical surveys on the utilization of the AI solutions at different times of day as well as on the quality and accuracy of the answers given. This data is made available to the provider in pseudonymized form to enable user-friendly optimization of the service.
              </p>
              <p>
                3.4 The provider is obligated to treat their access data confidentially, change it regularly, and protect it from access by unauthorized third parties. Disclosure to unauthorized persons is prohibited. In case of suspected misuse, my-bots must be informed immediately. The provider is liable for all activities carried out via their account.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 4 Provider Obligations</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                4.1 With the order confirmation, the provider assures that all data provided to my-bots correspond to the truth. This includes in particular information on persons, services, documents as well as details on address and office hours. The provider undertakes to keep this data up-to-date throughout the duration of the membership and to make necessary changes without delay. Any form of false information is prohibited, this also applies towards other providers or end users.
              </p>
              <p>
                4.2 The provider bears full responsibility for all content of the AI solutions and/or the video avatars as well as for their user accounts, profiles, devices, links, and documents. When creating content, the provider is obligated to observe the applicable laws and these Terms and Conditions. Any misuse of the system and the services offered therein is to be refrained from, and access is to be protected against unauthorized access by third parties.
              </p>
              <p>
                4.3 The provider expressly assures that they hold all rights to the content uploaded by them or on their behalf. This includes in particular copyrights to photos, images, and texts, industrial property rights, and trademark rights. If the provider is not the owner of these rights, they assure that they are authorized to use the content within the framework of my-bots' services.
              </p>
              <p>
                4.4 The use of all information that my-bots publishes via its services is only permitted for the purposes defined in these Terms and Conditions. Commercial use or other commercial exploitation of the information not covered by these Terms and Conditions is expressly prohibited.
              </p>
              <p>
                4.5 The provider further undertakes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When selecting names or designations, to ensure that no names, designations, trademark, copyright, or personality rights of others are violated.</li>
                <li>To ensure that access to and use of their user account is exclusively by themselves or expressly authorized employees.</li>
                <li>Not to misuse the system or any services of my-bots for unlawful purposes.</li>
                <li>Not to enter false or rights-infringing information into the systems set up by my-bots.</li>
                <li>Particularly important is the compliance with all data protection regulations towards the end users. The provider is obligated to obtain the necessary data protection consents from their end users before using the services.</li>
              </ul>
              <p>
                4.6 The provider is responsible for the management and data protection-compliant handling of the stored conversations. The chatbot conversations are automatically stored and can be viewed by the respective provider in their dashboard. The provider undertakes to regularly check whether the further storage of the conversation histories is still necessary and to remove data that is no longer needed. Deletion requests from end users must be complied with immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 5 Service Fees</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                5.1 The creation, publication, and management of the user account, the provider information, and all other services on the my-bots internet platform is subject to a fee for the provider. The usage costs consist of a monthly fee and a one-time setup fee, the amount of which depends on the current rates of my-bots and the individual requirements of the provider. The remuneration is to be paid in advance for the agreed reference period and the subsequent extension periods.
              </p>
              <p>
                5.2 All prices are net amounts, to which value-added tax at the respective statutory rate is added. Invoicing is done from the USA, whereby according to § 13b UStG, the tax liability is transferred to the service recipient (reverse charge procedure). The invoices explicitly refer to the tax liability of the service recipient according to § 13b UStG.
              </p>
              <p>
                5.3 Payment processing is exclusively by bank transfer. In case of non-payment, the account in question will be deleted immediately after prior notification. My-bots invoices amounts due monthly in advance. The invoices are made available to the provider by email as a downloadable PDF file.
              </p>
              <p>
                5.4 Should errors occur in the course of invoicing, the provider must object to the incorrect invoice within 8 weeks, specify the error concretely, and assert any refund claims. My-bots will examine the stated facts and, upon appropriate proof, refund any overpaid amounts.
              </p>
              <p>
                5.5 In case of payment default, default interest of 8 percentage points above the base interest rate according to § 288 para. 2 BGB will be charged.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 6 Disclaimer and Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                6.1 The AI solutions provided by my-bots serve exclusively to support and automate business processes. My-bots assumes no guarantee for the content accuracy, timeliness, completeness, or quality of the content and answers generated by the AI.
              </p>
              <p>
                6.2 Regardless of the provider's industry, the answers and content of the AI solutions do not constitute professional advice and cannot replace it. Particularly in the medical field, they do not replace medical advice, in the legal field, they do not replace legal advice, in the financial sector, they do not replace financial advice, and in the technical field, they do not replace engineering advice. The information provided is without guarantee and does not establish an advisory relationship between my-bots and the end users.
              </p>
              <p>
                6.3 The provider undertakes to clearly communicate a corresponding disclaimer to their end users and to ensure that the AI solutions are not used for critical decisions without human verification. Depending on the provider's industry, the obligations and disclaimers specified in the respective appendices to these Terms and Conditions additionally apply.
              </p>
              <p>
                6.4 The use of the offered services takes place exclusively in the relationship between the end user and the provider. My-bots is not liable for the fact that the displayed information was actually intended by the provider or is perceived differently by the end user and carried out by the provider.
              </p>
              <p>
                6.5 After completion of the setup of the AI solutions and handover of the access data to the provider, my-bots no longer assumes any liability for the ongoing operation of the established services, as these are then the sole responsibility of the provider. My-bots is particularly not liable for changes that the provider makes to the established systems after the handover.
              </p>
              <p>
                6.6 My-bots assumes no liability for incorrect entries of information in the provider's knowledge database, for the incorrect display of information in the chatbot or video avatars, or for incorrect entries by the end user and the resulting material and/or immaterial damages.
              </p>
              <p>
                6.7 My-bots is not liable for data losses, access problems, or other damages caused by faulty use of the system, computer viruses, by force majeure, or external interventions on the system (system damages and failures due to hacker or spam attacks or other attacks).
              </p>
              <p>
                6.8 For claims based on damages caused by my-bots, its legal representatives, or agents, my-bots is always unlimitedly liable in case of injury to life, body, or health, in case of intentional or grossly negligent breach of duty, in case of guarantee promises, if agreed, or insofar as the scope of application of the Product Liability Act is opened.
              </p>
              <p>
                6.9 In case of breach of essential contractual obligations, the fulfillment of which enables the proper execution of the contract in the first place and on the compliance with which the provider may regularly rely (cardinal obligations), through slight negligence of my-bots, its legal representatives, or agents, the liability is limited in amount to the damage foreseeable at the time of the conclusion of the contract, the occurrence of which must typically be expected.
              </p>
              <p>
                6.10 Otherwise, the liability of my-bots is excluded.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 7 Data Protection and Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                7.1 My-bots collects, processes, and uses personal data only within the framework of the applicable data protection regulations, in particular the GDPR and the BDSG.
              </p>
              <p>
                7.2 The provider remains the "controller of the data" and responsible for compliance with data protection regulations towards their end users. The provider ensures that they have the necessary rights and consents to process the data within the framework of the use of my-bots' services.
              </p>
              <p>
                7.3 During the setup phase, my-bots acts as a processor for the provider. Insofar as my-bots processes personal data on behalf of the provider, the parties will conclude a data processing agreement in accordance with Art. 28 GDPR.
              </p>
              <p>
                7.4 After handover of the created AI solutions to the provider, the data processing by my-bots ends, as my-bots then no longer has access to the established systems and the data processed therein, unless expressly agreed otherwise.
              </p>
              <p>
                7.5 For the operation of the chatbot services set up by my-bots, the following technical service providers may be used:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow as the primary chatbot service is provided by Voiceflow Inc., 1055 Bay Street Suite 2012, Toronto, ON, Canada, M5S 3A3.</li>
                <li>Voiceglow acts as an intermediary between Voiceflow and the provider as well as end user. Voiceglow's server location is in Frankfurt, Germany.</li>
                <li>VectorShift, based in 388 Beale St, San Francisco, California 94105, is used as another chatbot service.</li>
                <li>Retell AI may be used for the setup of voice bots.</li>
                <li>HeyGen Inc., based in 12130 Millennium Drive Suite 300 Los Angeles, CA 94094, USA (EIN: 38-4235881), may be used for the creation of video avatars.</li>
              </ul>
              <p>
                7.6 Both VectorShift and Voiceflow use language models such as GPT from OpenAI (3180 18th St, San Francisco, California 94110) and Claude from Anthropic, among others, to process the data. These companies act as processors, with data processing taking place on the basis of a data processing agreement.
              </p>
              <p>
                7.7 The provider is responsible for the management and data protection-compliant handling of the data stored in their systems. The provider undertakes to regularly check whether the further storage of the data is still necessary and to remove data that is no longer needed.
              </p>
              <p>
                7.8 Further information on data processing by my-bots can be found in my-bots' separate privacy policy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 8 Data Protection Violations and Incident Response</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                8.1 A data protection violation exists if the security leads to the destruction, loss, alteration, or unauthorized disclosure of or unauthorized access to personal data. My-bots undertakes to report such incidents to the competent supervisory authority without delay and at the latest within 72 hours after becoming aware of them.
              </p>
              <p>
                8.2 The affected providers will be informed immediately if the data protection violation is likely to pose a high risk to their rights and freedoms or those of their end users.
              </p>
              <p>
                8.3 The provider is in turn obligated to report suspected or established data protection violations to my-bots without delay and to cooperate in the investigation and remediation.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 9 Sanction Rights of my-bots</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                9.1 My-bots is entitled, in case of violations of these Terms and Conditions or other unlawful use of the system, to initiate one or more of the measures defined below against the provider.
              </p>
              <p>
                9.2 The possible measures include the right to change or delete content of the provider that violates these Terms and Conditions or is unlawful from the my-bots system.
              </p>
              <p>
                9.3 In case of repeated violations, my-bots reserves the right to terminate the contract without notice.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 10 Contract Duration and Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                10.1 The contractual relationship is concluded for an indefinite period. The provider can terminate this contract with a notice period of one month to the last working day of the respective month.
              </p>
              <p>
                10.2 In case of payment default by the provider, my-bots is entitled to terminate the contract without notice.
              </p>
              <p>
                10.3 The deletion of the provider data will be carried out within 48 hours after the termination becomes effective.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Industry-Specific Appendices</h2>
            <div className="space-y-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-4">Appendix A: Special Provisions for Medical Facilities</h3>
                <p>The AI solutions from my-bots for medical facilities serve exclusively to improve communication between the facility and its patients as well as to optimize administrative processes.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Appendix B: Special Provisions for Legal Advice</h3>
                <p>The AI solutions from my-bots for lawyers and legal service providers serve exclusively to improve communication between the service provider and its clients as well as to optimize administrative processes.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Appendix C: Special Provisions for Financial Services</h3>
                <p>The AI solutions from my-bots for financial service providers serve exclusively to improve communication between the service provider and its customers as well as to optimize administrative processes.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Appendix D: Special Provisions for E-Commerce & Retail</h3>
                <p>The AI solutions from my-bots for e-commerce and retail serve to improve customer communication, optimize sales processes, and automate support inquiries.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Appendix E: Special Provisions for Real Estate</h3>
                <p>The AI solutions from my-bots for real estate companies serve to improve customer communication, optimize brokerage processes, and automate support inquiries.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-gray-400 mt-16">
            Last updated: March 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;