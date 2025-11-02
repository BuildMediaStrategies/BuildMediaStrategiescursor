import React from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import AIDemo from '../../components/Interactive/AIDemo';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function KentAIAutomation() {
  const canonical = baseUrl + '/solutions/kent-ai-automation';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation in Kent',
    areaServed: ['Dover', 'Deal', 'Canterbury', 'Folkestone'],
    provider: { '@type': 'Organization', name: 'Build Media Strategies' },
  };

  return (
    <SEOWrapper
      title="Kent AI Automation | Build Media Strategies"
      description="Automate workflows and boost productivity with AI solutions tailored for Kent businesses."
      canonical={canonical}
      schema={schema}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Kent AI Automation</h1>
        <AIDemo />
      </section>
    </SEOWrapper>
  );
}

