import React, { Suspense } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import { LazyAIDemo } from '../../lib/utils/lazyLoad';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function AIDemoPage() {
  const canonical = baseUrl + '/tools/ai-demo';
  return (
    <SEOWrapper
      title="AI Chatbot Demo | See AI Automation in Action"
      description="Try our interactive AI assistant demo. See how AI can handle customer queries, book appointments, and provide 24/7 support for your business."
      canonical={canonical}
    >
      <div className="min-h-[80vh] bg-white">
        <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sky-gradient">AI Assistant Demo</h1>
            <p className="text-black mt-2">Experience how AI can transform your customer interactions</p>
          </div>
          <Suspense fallback={<div className="text-center text-black">Loading...</div>}>
            <LazyAIDemo />
          </Suspense>

          {/* Extra content */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-sky-gradient mb-2">How This Works For Your Business</h2>
            <p className="text-black mb-4">We connect your assistant to your knowledge base, FAQs, CRM, and scheduling tools so it can answer questions, qualify leads, and book appointments 24/7.</p>
            <a href="/contact" className="inline-block px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md">Get Your Own AI Assistant</a>
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
