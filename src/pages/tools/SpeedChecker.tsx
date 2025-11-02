import React, { Suspense } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import { LazySpeedChecker } from '../../lib/utils/lazyLoad';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function SpeedCheckerPage() {
  const canonical = baseUrl + '/tools/speed-checker';
  return (
    <SEOWrapper
      title="Free Website Speed Checker | Test Your Site Performance"
      description="Free website speed audit tool. Compare your site speed against modern standards and see how much faster we can make it. Instant results."
      canonical={canonical}
    >
      <div className="min-h-[80vh] bg-gradient-to-b from-blue-50 to-purple-50">
        <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Website Speed Checker</h1>
            <p className="text-gray-600 mt-2">Find out if your slow website is costing you customers</p>
          </div>
          <Suspense fallback={<div className="text-center text-gray-600">Loading...</div>}>
            <LazySpeedChecker />
          </Suspense>

          {/* Extra content */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">How We Make Sites Fast</h2>
            <p className="text-gray-600 mb-4">We use modern frameworks, edge caching, optimized media, and performance budgets—backed by strict Core Web Vitals monitoring.</p>
            <a href="/web-design" className="inline-block px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md">Explore Our Web Design Services</a>
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
