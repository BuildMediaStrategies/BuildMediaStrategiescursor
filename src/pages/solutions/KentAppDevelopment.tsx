import React from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function KentAppDevelopment() {
  const canonical = baseUrl + '/solutions/kent-app-development';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'App Development in Kent',
    areaServed: ['Dover', 'Deal', 'Canterbury', 'Folkestone'],
    provider: { '@type': 'Organization', name: 'Build Media Strategies' },
  };

  return (
    <SEOWrapper
      title="Kent App Development | Build Media Strategies"
      description="Robust, scalable web application development for Kent-based companies."
      canonical={canonical}
      schema={schema}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Kent App Development</h1>
        <p className="text-gray-300">From MVPs to enterprise apps, we ship fast and maintainable products.</p>
      </section>
    </SEOWrapper>
  );
}

