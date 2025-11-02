import React from 'react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import LeadCaptureForm from '../components/Conversion/LeadCaptureForm';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function Contact() {
  const canonical = baseUrl + '/contact';
  return (
    <SEOWrapper
      title="Contact | Build Media Strategies"
      description="Request a proposal or book a call with our Kent team."
      canonical={canonical}
    >
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        <h1 className="text-3xl font-bold">Contact</h1>
        <LeadCaptureForm />
      </section>
    </SEOWrapper>
  );
}

