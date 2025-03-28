import React, { useState } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const formatConversationHistory = (messages: Message[]): string => {
  return messages
    .map(msg => `${msg.isBot ? 'Bot' : 'Nutzer'}: "${msg.text}"`)
    .join(';');
};

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo! Ich bin RiO, Ihr KI-Assistent. Wie kann ich Ihnen helfen?",
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToWebhook = async (message: string, history: Message[]) => {
    try {
      const response = await fetch('https://hook.eu2.make.com/fv3zcspxagh8on5zya7mkk4pvm2380y9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: message,
          history: formatConversationHistory(history),
          timestamp: new Date().toISOString(),
          source: 'website-chat'
        })
      });

      if (!response.ok) {
        throw new Error(`Network error: ${response.status} ${response.statusText}`);
      }

      // Always expect plain text response
      return await response.text();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await sendMessageToWebhook(input, [...messages, userMessage]);
      const botResponse = {
        id: messages.length + 2,
        text: response,
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="chatbot" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chat Interface */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <div className="p-4 border-b border-gray-800 flex items-center gap-2">
              <Bot className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-medium text-white">KI-Chatbot</h3>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Sparkles className="h-3 w-3 text-green-500" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Schreiben Sie eine Nachricht..."
                  className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
                  disabled={isLoading}
                >
                  <Send className={`h-5 w-5 ${isLoading ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </form>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium">
                KI-Chatbots
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Revolutionieren Sie Ihren Kundenservice mit KI-gestützten Chatbots
            </h2>
            <p className="text-gray-400 text-lg">
              Unsere KI-Chatbots lernen kontinuierlich aus Interaktionen, verstehen Kontext und liefern präzise Antworten in Echtzeit. Sie reduzieren Wartezeiten, steigern die Kundenzufriedenheit und entlasten Ihr Team.
            </p>
            <ul className="space-y-3">
              {[
                '24/7 Verfügbarkeit',
                'Mehrsprachiger Support',
                'Nahtlose Integration',
                'Personalisierte Antworten'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/meine-bots/gratisberatung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
            >
              Chatbot-Beratung anfragen
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemo;