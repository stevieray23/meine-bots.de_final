import React from 'react';
import { Settings, Brain, ArrowRight, Sparkles, Workflow, LineChart } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* AI Consulting */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium">
                  AI Consulting
                </span>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Strategic AI Integration
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base break-words">
                    We analyze your business in detail to identify AI-powered automation potential.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <LineChart className="h-5 w-5 text-blue-500" />
                    <h4 className="text-lg font-medium text-white">Performance Metrics</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Efficiency Increase', value: '+45%' },
                      { label: 'Cost Reduction', value: '-30%' },
                      { label: 'Process Optimization', value: '+60%' },
                      { label: 'ROI', value: '3.5x' }
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-xl font-bold text-blue-500">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    'Detailed Process Analysis',
                    'AI Potential Assessment',
                    'Implementation Strategy',
                    'ROI Calculation'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://calendly.com/meine-bots/gratisberatung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Workflow Automation */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium">
                  Workflow Automation
                </span>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Settings className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Intelligent Process Optimization
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base break-words">
                    Optimize your processes through intelligent workflow automations that seamlessly connect your preferred applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="h-5 w-5 text-blue-500" />
                    <h4 className="text-lg font-medium text-white">Automated Workflows</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { step: 'Input', description: 'Data Collection' },
                      { step: 'Process', description: 'AI Analysis' },
                      { step: 'Output', description: 'Automation' }
                    ].map((item, index) => (
                      <div key={item.step} className="text-center p-2 sm:p-3 bg-gray-800/30 rounded-lg">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center">
                          <span className="text-blue-500 font-semibold">{index + 1}</span>
                        </div>
                        <div className="text-sm font-medium text-white mb-1">{item.step}</div>
                        <div className="text-xs text-gray-400 break-words">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    'App Integration',
                    'Process Automation',
                    'Error Reduction',
                    'Real-time Monitoring'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://calendly.com/meine-bots/gratisberatung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Request Automation Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;