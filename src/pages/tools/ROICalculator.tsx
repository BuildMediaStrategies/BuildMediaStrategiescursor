import React, { Suspense } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import { LazyROICalculator } from '../../lib/utils/lazyLoad';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function ROICalculatorPage() {
  const canonical = baseUrl + '/tools/roi-calculator';
  return (
    <SEOWrapper
      title="ROI Calculator | Calculate Your AI Automation Savings"
      description="Free interactive calculator shows how much your business could save with AI automation. See your potential weekly, yearly, and 5-year savings instantly."
      canonical={canonical}
    >
      <div className="min-h-[80vh] bg-white">
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sky-gradient">Calculate Your AI Automation Savings</h1>
            <p className="text-black mt-2">See how much time and money you could save by automating repetitive tasks</p>
          </div>
          <Suspense fallback={<div className="text-center text-black">Loading...</div>}>
            <LazyROICalculator />
          </Suspense>
        </section>
      </div>
    </SEOWrapper>
  );
}
