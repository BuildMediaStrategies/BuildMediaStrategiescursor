import React, { Suspense } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import { LazySpeedChecker } from '../../lib/utils/lazyLoad';
import { trackCTAClick } from '../../lib/analytics/conversions';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function SpeedCheckerPage() {
  const canonical = baseUrl + '/tools/speed-checker';
  return (
    <SEOWrapper
      title="Free Website Speed Checker | Test Your Site Performance"
      description="Free website speed audit tool. Compare your site speed against modern standards and see how much faster we can make it. Instant results."
      canonical={canonical}
    >
      <div className="min-h-[80vh] bg-white">
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sky-gradient">Website Speed Checker</h1>
            <p className="text-black mt-2">Find out if your slow website is costing you customers</p>
          </div>
          <Suspense fallback={<div className="text-center text-black">Loading...</div>}>
            <LazySpeedChecker />
          </Suspense>

          {/* Extra content */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-sky-gradient mb-2">How We Make Sites Fast</h2>
            <p className="text-black mb-4">We use modern frameworks, edge caching, optimized media, and performance budgets—backed by strict Core Web Vitals monitoring.</p>
            <a
              href="/web-design"
              onClick={() => { try { trackCTAClick('speed_checker_web_design_cta', { page: window.location.pathname }); } catch {} }}
              className="inline-block px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-purple-500/20"
            >
              Explore Our Web Design Services
            </a>
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
