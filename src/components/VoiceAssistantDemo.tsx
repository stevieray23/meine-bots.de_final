import React from 'react';
import { Mic, Phone, Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const VoiceAssistantDemo = () => {
  return (
    <section id="voice-assistant" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Voice Assistant Interface */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-white font-medium">Active Call</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span>00:42</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Mic className="h-12 w-12 text-blue-500" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Transcript</div>
                  <p className="text-white">
                    "I'd be happy to book an appointment for tomorrow. You'll receive the booking confirmation via email."
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Calendar, label: 'Appointment' },
                    { icon: MessageSquare, label: 'Note' },
                    { icon: Phone, label: 'Transfer' }
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-blue-500" />
                      <span className="text-sm text-gray-300">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium">
                Voice Assistants
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Intelligent Voice Assistants for Professional Communication
            </h2>
            <p className="text-gray-400 text-lg">
              Our AI-powered voice assistants revolutionize your telephony with state-of-the-art Natural Language Processing (NLP) technology. Automate support, appointment scheduling, and marketing actions.
            </p>
            <ul className="space-y-3">
              {[
                'Natural Conversation Flow',
                'Real-time Transcription',
                'Intelligent Appointment Scheduling',
                'Multilingual Support'
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
              Request Voice Assistant Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAssistantDemo;