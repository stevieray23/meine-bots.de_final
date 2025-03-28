import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const AGBPage = () => {
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
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-gray-400 mb-8">Stand: März 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">PRÄAMBEL</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Die Internet-Plattform „meine-bots" wird von der SteGra LLC – 30 North Gould Street – 82801, Sheridan, WY - USA (im Folgenden "meine-bots"), angeboten. Die unter www.meine-bots.de angebotenen Leistungen, Dienste und Inhalte dienen der Verbesserung und Automatisierung von Geschäftsprozessen und Kundeninteraktionen für Unternehmen verschiedener Branchen durch den Einsatz von KI-gestützten Lösungen wie Chatbots, Sprachassistenten und Workflow-Automatisierungen.
              </p>
              <p>
                Zu den unterstützten Branchen zählen insbesondere: E-Commerce & Handel, Finanzwesen, Immobilien, Rechtswesen, Gesundheitswesen (Arztpraxen, Zahnarztpraxen, medizinische Versorgungszentren, Physiotherapiepraxen, Kliniken) sowie Beauty & Kosmetik. Unternehmen dieser oder anderer Branchen werden im Folgenden als "Anbieter" bezeichnet, da sie ihrerseits Dienstleistungen gegenüber ihren eigenen Kunden anbieten.
              </p>
              <p>
                Die Dienste von meine-bots richten sich ausschließlich an gewerbliche Kunden (B2B). Eine direkte Vertragsbeziehung mit Privatpersonen (B2C) wird nicht begründet.
              </p>
              <p>
                Zu den angebotenen Dienstleistungen zählen die Erstellung und Implementierung von KI-Chatbots, Sprachassistenten, Workflow-Automatisierungen, strategische KI-Beratung sowie die Erstellung von Video-Avataren zu Marketing-Zwecken. Meine-bots hat keinen Einfluss auf die Qualität der fachlichen Dienstleistungen seiner Anbieter. Die Richtigkeit und Vollständigkeit der Angaben der Anbieter auf den von meine-bots angebotenen Diensten können von meine-bots nicht überprüft werden und es kann dafür keine Haftung übernommen werden. Die Verwendung der von meine-bots angebotenen Dienste ersetzt in keinem Fall die fachliche Beratung durch den Anbieter oder dessen Mitarbeiter.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 1 Anwendungsbereich der Allgemeinen Geschäftsbedingungen</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                1.1 Diese Allgemeinen Geschäftsbedingungen regeln die Rechtsbeziehungen zwischen meine-bots und den Anbietern sowie die Nutzung durch Endnutzer. Internetnutzer, die auf den Webseiten oder Systemen von Anbietern auf Leistungen von meine-bots zugreifen, werden nachfolgend als „Endnutzer" oder je nach Branche spezifischer als "Patienten", "Mandanten", "Kunden" etc. bezeichnet.
              </p>
              <p>
                1.2 Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Anbieter, die meine-bots' Dienste nutzen, unabhängig davon, über welche Domains sie auf die Dienste von meine-bots zugreifen oder über welche Domains auf ihre Angebote zugegriffen wird. Die AGB gelten auch für Anbieter, die die Webseiten und die Leistungen von meine-bots oder Teile davon über andere Webseiten oder über Drittanbieter-Software, z.B. über ein Plugin, nutzen.
              </p>
              <p>
                1.3 Die Nutzung der KI-Dienste durch Endnutzer erfordert deren ausdrückliche Einwilligung vor der ersten Nutzung. Diese Einwilligung umfasst die Verarbeitung der Konversationen, die anonymisierte Speicherung der Konversationsinhalte sowie die Nutzung der Daten zur Serviceverbesserung. Die erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Ein Widerruf führt zur Beendigung der Nutzungsmöglichkeit des betreffenden Dienstes für den betreffenden Endnutzer.
              </p>
              <p>
                1.4 Für Verträge im Zusammenhang mit den Diensten gelten ausschließlich diese Allgemeinen Geschäftsbedingungen. Entgegenstehende oder von diesen Allgemeinen Geschäftsbedingungen abweichende Bedingungen des Anbieters werden von meine-bots nur anerkannt, wenn meine-bots ihnen ausdrücklich schriftlich zugestimmt hat. Sie entfalten auch keine Wirkung, wenn meine-bots ihnen im Einzelfall nicht widersprochen hat. Die Vertragssprache ist Deutsch.
              </p>
              <p>
                1.5 Diese Allgemeinen Geschäftsbedingungen gelten in der zum Zeitpunkt des Vertragsabschlusses gültigen bzw. jedenfalls in der dem Anbieter zuletzt in Textform mitgeteilten Fassung als Rahmenvereinbarung auch für gleichartige künftige Verträge, ohne dass in jedem Einzelfall wieder auf die Allgemeinen Geschäftsbedingungen hingewiesen werden muss.
              </p>
              <p>
                1.6 Meine-bots behält sich das Recht vor, die vorliegenden Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Der Anbieter wird über diese Änderungen textförmlich per E-Mail informiert. Widerspricht der Anbieter nicht innerhalb von 6 Wochen nach Zugang der Änderungsmitteilung in Textform gegenüber meine-bots, gelten die geänderten Allgemeinen Geschäftsbedingungen als angenommen. Treten nach Vertragsschluss unvorhersehbare und unbeeinflussbare Änderungen ein (z.B. Gesetzesänderungen) oder offenbaren sich Lücken, wodurch das Verhältnis zwischen Leistung und Gegenleistung erheblich gestört wird, hat meine-bots das Recht, die Allgemeinen Geschäftsbedingungen auch ohne Zustimmung des Anbieters anzupassen. Der Anbieter ist auch hierüber textförmlich zu unterrichten.
              </p>
              <p>
                1.7 Ergänzend zu diesen allgemeinen Geschäftsbedingungen gelten branchenspezifische Sonderregelungen, die in separaten Anhängen zu diesen AGB festgelegt sind.
              </p>
              <p>
                1.8 Die Abtretung von Forderungen gegen meine-bots an Dritte ist ausgeschlossen. § 354a HGB bleibt hiervon unberührt.
              </p>
            </div>
          </section>

          {/* Add all remaining sections from the provided text */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 2 Dienste der meine-bots Internetplattform</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.1 KI-Chatbots</h3>
              <p>
                Meine-bots bietet KI-gestützte Chatbots an, welche zu fachlichen und sachlichen Themen rund um das Unternehmen des Anbieters befragt werden können. Die individuelle Konfiguration der Chatbot-Funktionalität sowie die Erstellung der Wissensdatenbank erfolgt auf Anweisung der Anbieter und wird von meine-bots nicht inhaltlich geprüft. Für die Richtigkeit der Chatbot-Antworten kann meine-bots nicht haftbar gemacht werden.
              </p>
              <p>
                Die Chatbot-Konversationen werden in anonymisierter Form gespeichert und sind für den jeweiligen Anbieter zugänglich. Die Speicherung erfolgt zum Zweck der Qualitätssicherung, Serviceoptimierung und Analyse der Endnutzerbedürfnisse. Unsere KI-gestützten Chatbots, auch "Agenten" genannt, nutzen fortschrittliche Sprachmodelle (LLMs) wie OpenAI GPT und Anthropic Claude. Obwohl diese Agenten um höchstmögliche Genauigkeit bemüht sind, sind ihre Antworten nicht rechtsverbindlich, und meine-bots übernimmt keine Haftung für mögliche Ungenauigkeiten oder Unvollständigkeiten.
              </p>
              <p>
                Für den Betrieb der Chatbot-Dienste setzt meine-bots folgende technische Dienstleister ein:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow als primärer Chatbot-Dienst wird von der Voiceflow Inc., 1055 Bay Street Suite 2012, Toronto, ON, Canada, M5S 3A3 bereitgestellt.</li>
                <li>Voiceglow fungiert als Vermittler zwischen Voiceflow und dem Anbieter sowie Endnutzer. Der Serverstandort von Voiceglow befindet sich in Frankfurt, Deutschland.</li>
                <li>VectorShift, mit Sitz in 388 Beale St, San Francisco, California 94105, wird als weiterer Chatbot-Dienst eingesetzt.</li>
              </ul>
              <p>
                Details zu Datenverarbeitungspraktiken und Datenschutzmaßnahmen dieser Dienstleister finden sich in § 7 dieser AGB.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 2 Dienste der meine-bots Internetplattform</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">2.2 Sprachassistenten / Voice-Bots</h3>
              <p>
                Meine-bots bietet als Service die Einrichtung von KI-gestützten Sprachassistenten zur Automatisierung von telefonischer Kommunikation, Terminvereinbarungen und Support-Anfragen an. Die Sprachassistenten können natürliche Gespräche führen, Transkriptionen in Echtzeit erstellen, intelligente Terminplanung durchführen und mehrsprachigen Support bieten.
              </p>
              <p>
                Für die Einrichtung von Voice-Bots nutzt meine-bots Dienste wie Retell AI. Nach der Fertigstellung werden sämtliche Login-Details und Zugangsdaten an den Anbieter übergeben. Ab diesem Zeitpunkt erfolgt die Nutzung und der Betrieb des Voice-Bots ausschließlich durch den Anbieter, ohne dass meine-bots weiterhin Zugriff auf die erstellten Voice-Bots hat. Meine-bots übernimmt kein Hosting für die erstellten Voice-Bots, sondern erbringt lediglich die Dienstleistung der Einrichtung und Konfiguration.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.3 Workflow-Automatisierung</h3>
              <p>
                Meine-bots bietet Lösungen zur intelligenten Prozessoptimierung und Automatisierung von Arbeitsabläufen an, die bestehende Anwendungen und Systeme des Anbieters integrieren können. Diese umfassen App-Integration, Prozessautomatisierung, Fehlerreduktion und Echtzeit-Monitoring geschäftskritischer Abläufe.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.4 KI-Beratung und -Integration</h3>
              <p>
                Meine-bots erbringt Beratungsleistungen zur strategischen KI-Integration und Prozessanalyse für die Optimierung von Unternehmensabläufen. Dies umfasst detaillierte Prozessanalyse, KI-Potenzialermittlung, Implementierungsstrategien und ROI-Berechnung mit nachweisbaren Leistungskennzahlen wie Effizienzsteigerung, Kostenreduktion und Prozessoptimierung.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.5 Videomarketing</h3>
              <p>
                Meine-bots erbringt Services zur Erstellung von Video-Avataren zu Marketing-Zwecken, die auf Videoklonen des Anbieters oder Dritten basieren, welche dazu ihr ausdrückliches Einverständnis gegeben haben. Für diese Dienste nutzt meine-bots die Services von HeyGen, um personalisierte Videos im Auftrag des Anbieters zu erstellen.
              </p>
              <p>
                Nach der Einrichtung und Konfiguration der Video-Avatar-Lösung bei HeyGen werden sämtliche Login-Details und Zugangsdaten an den Anbieter übergeben. Ab diesem Zeitpunkt erfolgt die Nutzung und der Betrieb der Video-Avatar-Lösung ausschließlich durch den Anbieter, ohne dass meine-bots weiterhin Zugriff auf die erstellten Video-Avatare hat. Meine-bots übernimmt kein Hosting für die erstellten Video-Avatare, sondern erbringt lediglich die Dienstleistung der Einrichtung und Konfiguration.
              </p>
              <p>
                Die Rechtsgrundlage für den Einsatz der Videos ist entweder die ausdrückliche Einwilligung des Betroffenen gemäß Art. 6 Abs. 1 lit. a DSGVO oder das berechtigte Interesse an der Kundenkommunikation gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 3 Anbieter-Account & Benutzerkonto</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                3.1 Zur Nutzung der Dienste wird von meine-bots für den Anbieter ein Anbieter-Account sowie gegebenenfalls ein Benutzerkonto auf den relevanten Plattformen angelegt. Für die Anmeldung ist die Eingabe eines Benutzernamens und eines Passworts erforderlich, welches von meine-bots zur Verfügung gestellt wird. Die Nutzung des Accounts ist ausschließlich den Mitarbeitern des jeweiligen Anbieters gestattet, die hierzu vom Anbieter ausdrücklich bevollmächtigt wurden und denen die entsprechenden Login-Daten zur Verfügung gestellt wurden.
              </p>
              <p>
                3.2 Nach der Fertigstellung eines Projekts (Voice-Bot, Video-Avatar, etc.) übergibt meine-bots sämtliche Login-Details und Zugangsdaten an den Anbieter. Ab diesem Zeitpunkt erfolgt die Nutzung und der Betrieb der eingerichteten Dienste ausschließlich durch den Anbieter, ohne dass meine-bots weiterhin Zugriff auf die erstellten Lösungen hat, sofern nicht ausdrücklich anders vereinbart.
              </p>
              <p>
                3.3 Zur Qualitätssicherung und Verbesserung des Dienstes während der Einrichtungsphase kann meine-bots innerhalb des Anbieter-Accounts Daten über die getätigten Interaktionen erheben. Dies umfasst statistische Erhebungen zur Auslastung der KI-Lösungen zu verschiedenen Uhrzeiten sowie zur Qualität und Richtigkeit der gegebenen Antworten. Diese Daten werden dem Anbieter in pseudonymisierter Form zur Verfügung gestellt, um eine nutzerfreundliche Optimierung des Dienstes zu ermöglichen.
              </p>
              <p>
                3.4 Der Anbieter ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln, regelmäßig zu ändern und vor dem Zugriff durch unbefugte Dritte zu schützen. Eine Weitergabe an nicht autorisierte Personen ist untersagt. Bei Verdacht auf Missbrauch ist meine-bots unverzüglich zu informieren. Der Anbieter haftet für sämtliche Aktivitäten, die über seinen Account durchgeführt werden.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 4 Pflichten des Anbieters</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                4.1 Mit der Auftragsbestätigung sichert der Anbieter zu, dass sämtliche meine-bots zur Verfügung gestellten Daten der Wahrheit entsprechen. Dies umfasst insbesondere die Angaben zu Personen, Leistungen, Dokumenten sowie Details zu Adresse und Sprechstunden. Der Anbieter verpflichtet sich, diese Daten über die gesamte Dauer der Mitgliedschaft aktuell zu halten und erforderliche Änderungen unverzüglich vorzunehmen. Jegliche Form falscher Angaben ist untersagt, dies gilt auch gegenüber anderen Anbietern oder Endnutzern.
              </p>
              <p>
                4.2 Der Anbieter trägt die vollständige Verantwortung für sämtliche Inhalte der KI-Lösungen und/oder der Video-Avatare sowie für seine Benutzerkonten, Profile, Geräte, Links und Dokumente. Bei der Erstellung von Inhalten ist der Anbieter verpflichtet, die jeweils anwendbaren Gesetze und diese AGB zu beachten. Jede missbräuchliche Nutzung des Systems und der darin angebotenen Dienste ist zu unterlassen, und der Zugang ist gegen unbefugten Zugriff durch Dritte zu schützen.
              </p>
              <p>
                4.3 Der Anbieter versichert ausdrücklich, dass ihm sämtliche Rechte an den von ihm oder in seinem Auftrag eingestellten Inhalten zustehen. Dies umfasst insbesondere Urheberrechte an Fotos, Bildern und Texten, gewerbliche Schutzrechte sowie Markenrechte. Falls der Anbieter nicht selbst Inhaber dieser Rechte ist, versichert er, zur Verwendung der Inhalte im Rahmen der Dienste von meine-bots berechtigt zu sein.
              </p>
              <p>
                4.4 Die Nutzung sämtlicher Informationen, die meine-bots über seine Dienste veröffentlicht, ist ausschließlich zu den in diesen AGB definierten Zwecken gestattet. Eine kommerzielle Nutzung oder sonstige gewerbliche Verwertung der Informationen, die nicht durch diese AGB abgedeckt sind, ist ausdrücklich untersagt.
              </p>
              <p>
                4.5 Der Anbieter verpflichtet sich darüber hinaus:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bei der Auswahl von Namen oder Bezeichnungen sicherzustellen, dass keine Namen, Bezeichnungen, Marken-, Urheber- oder Persönlichkeitsrechte Anderer verletzt werden.</li>
                <li>Den Zugang und die Nutzung seines Benutzerkontos ausschließlich durch sich selbst oder ausdrücklich autorisierte Mitarbeiter zu gewährleisten.</li>
                <li>Das System sowie sämtliche Leistungen von meine-bots nicht für rechtswidrige Zwecke zu missbrauchen.</li>
                <li>Keine falschen oder rechteverletzenden Informationen in die von meine-bots eingerichteten Systeme einzustellen.</li>
                <li>Besonders wichtig ist die Einhaltung sämtlicher Datenschutzvorschriften gegenüber den Endnutzern. Der Anbieter ist verpflichtet, die erforderlichen datenschutzrechtlichen Einwilligungen von seinen Endnutzern vor der Nutzung der Services einzuholen.</li>
              </ul>
              <p>
                4.6 Der Anbieter ist für die Verwaltung und den datenschutzkonformen Umgang mit den gespeicherten Konversationen verantwortlich. Die Chatbot-Konversationen werden automatisch gespeichert und sind für den jeweiligen Anbieter in seinem Dashboard einsehbar. Der Anbieter verpflichtet sich, regelmäßig zu überprüfen, ob die weitere Speicherung der Konversationsverläufe noch erforderlich ist und nicht mehr benötigte Daten zu entfernen. Löschanfragen von Endnutzern sind unverzüglich nachzukommen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 5 Leistungsentgelte</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                5.1 Das Erstellen, Veröffentlichen und Verwalten des Benutzerkontos, der Anbieterinformationen und sämtlicher weiterer Dienste auf der meine-bots-Internetplattform ist für den Anbieter kostenpflichtig. Die Nutzungskosten setzen sich aus einer monatlichen Gebühr und einer einmaligen Einrichtungsgebühr zusammen, deren Höhe sich nach den aktuellen Tarifen von meine-bots und den individuellen Anforderungen des Anbieters richtet. Die Vergütung ist für den jeweils vereinbarten Bezugszeitraum und die nachfolgenden Verlängerungszeiträume im Voraus zu entrichten.
              </p>
              <p>
                5.2 Sämtliche Preisangaben verstehen sich als Nettobeträge, zu denen die Umsatzsteuer in der jeweils gesetzlichen Höhe hinzukommt. Die Rechnungsstellung erfolgt aus den USA, wobei gemäß § 13b UStG die Steuerschuldnerschaft auf den Leistungsempfänger übergeht (Reverse-Charge-Verfahren). Auf den Rechnungen wird explizit auf die Steuerschuldnerschaft des Leistungsempfängers nach § 13b UStG hingewiesen.
              </p>
              <p>
                5.3 Die Zahlungsabwicklung erfolgt ausschließlich per Überweisung. Bei ausbleibender Zahlung wird der betreffende Account nach vorheriger Ankündigung unverzüglich gelöscht. Meine-bots stellt anfallende Beträge monatlich im Voraus in Rechnung. Die Rechnungen werden dem Anbieter per E-Mail als herunterladbare PDF-Datei zur Verfügung gestellt.
              </p>
              <p>
                5.4 Sollten im Rahmen der Rechnungstellung Fehler auftreten, muss der Anbieter die fehlerhafte Rechnung innerhalb von 8 Wochen beanstanden und den Fehler konkret benennen sowie etwaige Rückforderungsansprüche geltend machen. Meine-bots wird den angegebenen Sachverhalt prüfen und bei entsprechendem Nachweis zu viel abgebuchte Zahlungsbeträge erstatten.
              </p>
              <p>
                5.5 Bei Zahlungsverzug fallen Verzugszinsen in Höhe von 8 Prozentpunkten über dem Basiszinssatz nach § 288 Abs. 2 BGB an.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 6 Haftungsausschluss und -beschränkung</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                6.1 Die von meine-bots bereitgestellten KI-Lösungen dienen ausschließlich der Unterstützung und Automatisierung von Geschäftsprozessen. Meine-bots übernimmt keine Gewähr für die inhaltliche Richtigkeit, Aktualität, Vollständigkeit oder Qualität der durch die KI generierten Inhalte und Antworten.
              </p>
              <p>
                6.2 Unabhängig von der Branche des Anbieters stellen die Antworten und Inhalte der KI-Lösungen keine fachliche Beratung dar und können diese nicht ersetzen. Insbesondere im medizinischen Bereich ersetzen sie keine ärztliche Beratung, im rechtlichen Bereich keine Rechtsberatung, im Finanzwesen keine Finanzberatung und im technischen Bereich keine Ingenieurberatung. Die bereitgestellten Informationen erfolgen ohne Gewähr und begründen kein Beratungsverhältnis zwischen meine-bots und den Endnutzern.
              </p>
              <p>
                6.3 Der Anbieter verpflichtet sich, gegenüber seinen Endnutzern einen entsprechenden Haftungsausschluss deutlich zu kommunizieren und sicherzustellen, dass die KI-Lösungen nicht für kritische Entscheidungen ohne menschliche Überprüfung eingesetzt werden. Je nach Branche des Anbieters gelten zusätzlich die in den jeweiligen Anhängen dieser AGB spezifizierten Verpflichtungen und Haftungsausschlüsse.
              </p>
              <p>
                6.4 Die Nutzung der angebotenen Services erfolgt ausschließlich im Verhältnis zwischen dem Endnutzer und dem Anbieter. Meine-bots haftet nicht dafür, dass die angezeigten Informationen tatsächlich von dem Anbieter so vorgesehen waren oder vom Endnutzer anders wahrgenommen und von dem Anbieter durchgeführt werden.
              </p>
              <p>
                6.5 Nach Abschluss der Einrichtung der KI-Lösungen und Übergabe der Zugangsdaten an den Anbieter übernimmt meine-bots keine Haftung mehr für den laufenden Betrieb der eingerichteten Dienste, da diese dann in der alleinigen Verantwortung des Anbieters liegen. Meine-bots haftet insbesondere nicht für Änderungen, die der Anbieter nach der Übergabe an den eingerichteten Systemen vornimmt.
              </p>
              <p>
                6.6 Meine-bots übernimmt keine Haftung für fehlerhafte Eingaben von Informationen in die Wissensdatenbank des Anbieters, für die fehlerhafte Anzeige von Informationen in dem Chatbot oder Video-Avatars oder für Fehleingaben des Endnutzers und den jeweils daraus resultierenden materiellen und/oder immateriellen Schäden.
              </p>
              <p>
                6.7 Meine-bots haftet nicht für Datenverluste, Zugangsprobleme oder sonstige Schäden, die durch fehlerhafte Benutzung des Systems, Computerviren, durch höhere Gewalt oder Eingriffe von außen auf das System (Systemschäden und -ausfälle durch Hacker- oder Spam-Angriffe oder sonstige Attacken) verursacht werden.
              </p>
              <p>
                6.8 Für Ansprüche aufgrund von Schäden, die durch meine-bots, seine gesetzlichen Vertreter oder Erfüllungsgehilfen verursacht wurden, haftet meine-bots stets unbeschränkt bei Verletzung des Lebens, des Körpers oder der Gesundheit, bei vorsätzlicher oder grob fahrlässiger Pflichtverletzung, bei Garantieversprechen, soweit vereinbart, oder soweit der Anwendungsbereich des Produkthaftungsgesetzes eröffnet ist.
              </p>
              <p>
                6.9 Bei Verletzung wesentlicher Vertragspflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Anbieter regelmäßig vertrauen darf (Kardinalpflichten), durch leichte Fahrlässigkeit von meine-bots, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen ist die Haftung der Höhe nach auf den bei Vertragsschluss vorhersehbaren Schaden begrenzt, mit dessen Entstehung typischerweise gerechnet werden muss.
              </p>
              <p>
                6.10 Im Übrigen ist die Haftung von meine-bots ausgeschlossen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 7 Datenschutz und Datensicherheit</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                7.1 Meine-bots erhebt, verarbeitet und nutzt personenbezogene Daten nur im Rahmen der geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO und des BDSG.
              </p>
              <p>
                7.2 Der Anbieter bleibt "Herr der Daten" und verantwortlich für die Einhaltung der datenschutzrechtlichen Bestimmungen gegenüber seinen Endnutzern. Der Anbieter stellt sicher, dass er über die erforderlichen Rechte und Einwilligungen verfügt, um die Daten im Rahmen der Nutzung der Dienste von meine-bots zu verarbeiten.
              </p>
              <p>
                7.3 Während der Einrichtungsphase agiert meine-bots als Auftragsverarbeiter für den Anbieter. Soweit meine-bots im Auftrag des Anbieters personenbezogene Daten verarbeitet, werden die Parteien einen Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abschließen.
              </p>
              <p>
                7.4 Nach Übergabe der erstellten KI-Lösungen an den Anbieter endet die Auftragsverarbeitung durch meine-bots, da meine-bots dann keinen Zugriff mehr auf die eingerichteten Systeme und die darin verarbeiteten Daten hat, sofern nicht ausdrücklich anders vereinbart.
              </p>
              <p>
                7.5 Für den Betrieb der durch meine-bots eingerichteten Chatbot-Dienste können folgende technische Dienstleister zum Einsatz kommen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voiceflow als primärer Chatbot-Dienst wird von der Voiceflow Inc., 1055 Bay Street Suite 2012, Toronto, ON, Canada, M5S 3A3 bereitgestellt.</li>
                <li>Voiceglow fungiert als Vermittler zwischen Voiceflow und dem Anbieter sowie Endnutzer. Der Serverstandort von Voiceglow befindet sich in Frankfurt, Deutschland.</li>
                <li>VectorShift, mit Sitz in 388 Beale St, San Francisco, California 94105, wird als weiterer Chatbot-Dienst eingesetzt.</li>
                <li>Retell AI kann für die Einrichtung von Voice-Bots zum Einsatz kommen.</li>
                <li>HeyGen Inc., ansässig in 12130 Millennium Drive Suite 300 Los Angeles, CA 94094, USA (EIN: 38-4235881), kann für die Erstellung von Video-Avataren eingesetzt werden.</li>
              </ul>
              <p>
                7.6 Sowohl VectorShift als auch Voiceflow setzen zur Verarbeitung der Daten unter anderem Sprachmodelle wie GPT von OpenAI (3180 18th St, San Francisco, California 94110) und Claude von Anthropic ein. Diese Unternehmen agieren als Auftragsverarbeiter, wobei die Datenverarbeitung auf Basis eines Auftragsverarbeitungsvertrags erfolgt.
              </p>
              <p>
                7.7 Der Anbieter ist für die Verwaltung und den datenschutzkonformen Umgang mit den in seinen Systemen gespeicherten Daten verantwortlich. Der Anbieter verpflichtet sich, regelmäßig zu überprüfen, ob die weitere Speicherung der Daten noch erforderlich ist und nicht mehr benötigte Daten zu entfernen.
              </p>
              <p>
                7.8 Nähere Informationen zur Datenverarbeitung durch meine-bots sind der separaten Datenschutzerklärung von meine-bots zu entnehmen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 8 Datenschutzverletzungen und Incident Response</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                8.1 Eine Datenschutzverletzung liegt vor, wenn die Sicherheit zur Vernichtung, zum Verlust, zur Veränderung oder zur unbefugten Offenlegung von bzw. zum unbefugten Zugang zu personenbezogenen Daten führt. Meine-bots verpflichtet sich, solche Vorfälle unverzüglich und spätestens innerhalb von 72 Stunden nach Bekanntwerden der zuständigen Aufsichtsbehörde zu melden.
              </p>
              <p>
                8.2 Die betroffenen Anbieter werden unverzüglich informiert, wenn die Datenschutzverletzung voraussichtlich ein hohes Risiko für deren Rechte und Freiheiten oder die ihrer Endnutzer darstellt.
              </p>
              <p>
                8.3 Der Anbieter ist seinerseits verpflichtet, vermutete oder festgestellte Datenschutzverletzungen unverzüglich an meine-bots zu melden und bei der Aufklärung und Behebung mitzuwirken.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 9 Sanktionsrechte von meine-bots</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                9.1 Meine-bots ist berechtigt, bei Verstößen gegen diese AGB oder bei sonstiger rechtsverletzender Nutzung des Systems eine oder mehrere der nachfolgend definierten Maßnahmen gegen den Anbieter einzuleiten.
              </p>
              <p>
                9.2 Zu den möglichen Maßnahmen gehört das Recht, Inhalte des Anbieters, die gegen diese AGB verstoßen oder rechtswidrig sind, zu ändern oder aus dem meine-bots System zu löschen.
              </p>
              <p>
                9.3 Bei mehrfachen Verstößen behält sich meine-bots das Recht zur fristlosen Kündigung des Vertrags vor.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">§ 10 Vertragsdauer und Kündigung</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                10.1 Das Vertragsverhältnis wird auf unbestimmte Zeit geschlossen. Der Anbieter kann diesen Vertrag mit einer Frist von einem Monat zum letzten Werktag des jeweiligen Monats kündigen.
              </p>
              <p>
                10.2 Bei Zahlungsverzug des Anbieters ist meine-bots zur fristlosen Kündigung des Vertrages berechtigt.
              </p>
              <p>
                10.3 Die Löschung der Anbieterdaten wird innerhalb von 48 Stunden nach Wirksamkeit der Kündigung vollzogen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Branchenspezifische Anhänge</h2>
            <div className="space-y-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-4">Anhang A: Besondere Bestimmungen für medizinische Einrichtungen</h3>
                <p>Die KI-Lösungen von meine-bots für medizinische Einrichtungen dienen ausschließlich der Verbesserung der Kommunikation zwischen der Einrichtung und ihren Patienten sowie der Optimierung administrativer Prozesse.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Anhang B: Besondere Bestimmungen für Rechtsberatung</h3>
                <p>Die KI-Lösungen von meine-bots für Rechtsanwälte und Rechtsdienstleister dienen ausschließlich der Verbesserung der Kommunikation zwischen dem Dienstleister und seinen Mandanten sowie der Optimierung administrativer Prozesse.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Anhang C: Besondere Bestimmungen für Finanzdienstleistungen</h3>
                <p>Die KI-Lösungen von meine-bots für Finanzdienstleister dienen ausschließlich der Verbesserung der Kommunikation zwischen dem Dienstleister und seinen Kunden sowie der Optimierung administrativer Prozesse.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Anhang D: Besondere Bestimmungen für E-Commerce & Handel</h3>
                <p>Die KI-Lösungen von meine-bots für E-Commerce und Handel dienen der Verbesserung der Kundenkommunikation, der Optimierung von Verkaufsprozessen und der Automatisierung von Support-Anfragen.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Anhang E: Besondere Bestimmungen für Immobilien</h3>
                <p>Die KI-Lösungen von meine-bots für Immobilienunternehmen dienen der Verbesserung der Kundenkommunikation, der Optimierung von Vermittlungsprozessen und der Automatisierung von Support-Anfragen.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-gray-400 mt-16">
            Stand: März 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGBPage