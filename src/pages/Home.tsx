import React from 'react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import SocialProof from '../components/Interactive/SocialProof';
import LeadCaptureForm from '../components/Conversion/LeadCaptureForm';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function Home() {
  const canonical = baseUrl + '/';
  return (
    <SEOWrapper
      title="Build Media Strategies | Kent Web Design Agency"
      description="High-performance web design agency in Kent focused on speed, SEO, and conversions."
      canonical={canonical}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Build Media Strategies</h1>
        <SocialProof />
        <LeadCaptureForm />
      </section>
    </SEOWrapper>
  );
}

