import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes my-bots unique?",
    answer: "Our uniqueness lies in the combination of cutting-edge AI technology and personalized support. We develop customized solutions perfectly tailored to your business processes. Our team of experienced developers and AI experts guarantees not only technical excellence but also seamless integration into your company."
  },
  {
    question: "Is my company suitable for AI solutions?",
    answer: "Basically, any company can benefit from AI solutions. Together, we analyze your processes and identify the areas where AI can create the greatest added value. Whether customer service, process automation, or data analysis - we find the right solution for your specific requirements and company size."
  },
  {
    question: "How long does the development phase take?",
    answer: "The development duration varies depending on the complexity and scope of the project. Typically, we expect 2-4 weeks for simple chatbots and between 4-8 weeks for more complex automations."
  },
  {
    question: "Do you offer support after implementation?",
    answer: "Yes, we offer comprehensive support even after implementation. Our support team is available to answer your questions, and we perform regular maintenance and updates. Additionally, we offer training for your employees and continuously optimize the systems based on your feedback and new requirements."
  },
  {
    question: "Are your AI solutions GDPR compliant?",
    answer: "Yes, all our AI solutions and automations fully comply with the requirements of the General Data Protection Regulation (GDPR). We place the highest value on data protection and data security. We work exclusively with partners who are committed to data protection and are appropriately certified. This ensures that all implemented solutions meet the strict German and European data protection standards."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to the most important questions about our AI solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;