import React from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import LeadCaptureForm from '../../components/Conversion/LeadCaptureForm';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function KentWebDesign() {
  const canonical = baseUrl + '/solutions/kent-web-design';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kent Web Design',
    areaServed: ['Dover', 'Deal', 'Canterbury', 'Folkestone'],
    provider: { '@type': 'Organization', name: 'Build Media Strategies' },
  };

  return (
    <SEOWrapper
      title="Kent Web Design | Build Media Strategies"
      description="High-performance web design in Kent focused on speed, SEO, and conversions."
      canonical={canonical}
      schema={schema}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Kent Web Design</h1>
        <p className="text-gray-300">We build fast, accessible, and conversion-focused websites for Kent businesses.</p>
        <LeadCaptureForm />
      </section>
    </SEOWrapper>
  );
}

