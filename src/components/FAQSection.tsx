import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does BuildMediaStrategies offer?",
    answer: "We specialize in two core services: Web Design (custom websites, e-commerce, and conversion optimization) and AI Operations (workflow automation, intelligent systems, and operational efficiency). Both deliver measurable business results."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are fully designed, built, and launched within 2–3 days. For urgent projects, we offer a same-day turnaround (1-day rush) where your website can go live within 24 hours."
  },
  {
    question: "Who do you work with?",
    answer: "We partner with businesses ready to scale. Whether you need a high-converting website or AI systems to streamline operations, we build solutions that grow with your business and deliver measurable ROI."
  },
  {
    question: "How do you measure success?",
    answer: "For web design, we track conversions, engagement, and revenue impact. For AI operations, we measure time saved, cost reduction, and efficiency gains. You get clear metrics that prove ROI from the start."
  },
  {
    question: "What happens after launch?",
    answer: "We provide ongoing optimization, monitoring, and support. Your website and AI systems are continuously refined based on performance data to keep delivering results as your business grows."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 text-center bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-5xl font-sans font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked<br/>
            <span className="text-sky-gradient">
              Questions
            </span>
          </h2>
          <p className="text-lg font-sans font-normal text-black">
            Ready to discuss your project? Let's talk.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 hover:border-gray-300 card-gradient-border rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-center hover:bg-opacity-80 transition-all duration-300 rounded-2xl"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-sans font-bold text-sky-gradient pr-4 flex-1 text-center">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0" aria-hidden="true">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-900" />
                  )}
                </div>
              </button>
              
              {expandedIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300 text-center"
                  role="region"
                >
                  <p className="text-base font-sans font-normal leading-relaxed text-black">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}