import { useState, Suspense, lazy } from 'react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import LogoCloud from '../components/LogoCloud';
import StatisticsSection from '../components/StatisticsSection';
import DashboardSection from '../components/DashboardSection';
import SecuritySection from '../components/SecuritySection';
import InterviewBookingSection from '../components/InterviewBookingSection';
const RegistrationModal = lazy(() => import('../components/RegistrationModal'));
import {
  LazyFAQSection,
  LazyCTABanner,
  LazyEffortlessSecuritySection,
} from '../lib/utils/lazyComponents';
import { trackCTAClick } from '../lib/analytics/conversions';

export default function HomePage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <>
      <SEOWrapper
        title="Web Design & AI Automation in Kent | BuildMediaStrategies"
        description="Launch fast, conversion-ready sites with AI systems that cut manual work for local teams. Book a build or automation sprint today."
        canonical="https://buildmediastrategies.com/"
        schemaType="homepage"
        keywords="web design, AI automation, Kent agency"
        ogType="website"
      />
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh' }} id="home">
        {/* Pure white base behind everything */}
        <div className="absolute inset-0 bg-white" />

        {/* HERO IMAGE - Optimized with modern formats */}
        <picture>
          <source
            srcSet="/hero-image-new.avif"
            type="image/avif"
          />
          <source
            srcSet="/hero-image-new.webp"
            type="image/webp"
          />
          <img
            id="hero-img"
            src="/hero-image-new.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            width={1920}
            height={1080}
            className="pointer-events-none select-none absolute inset-0 w-full h-full z-0"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 50%',
              transform: 'translateY(26vh)',
              willChange: 'transform',
            }}
          />
        </picture>

        {/* Mobile offset update ONLY */}
        <style>{`
          #hero-img {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          @media (max-width: 1023px) {
            #hero-img{
              object-fit: contain !important;
              object-position: center 72% !important;
              transform: translateY(80px) !important;
            }
          }
        `}</style>

        {/* HERO CONTENT */}
        <header className="relative z-40 flex flex-col items-center justify-start px-5 sm:px-6 pt-10 sm:pt-12 pb-16 sm:pb-20 min-h-[70vh]">
          <div className="inline-flex items-center justify-center rounded-full px-4 py-1 bg-sky-gradient text-xs sm:text-sm font-medium text-white shadow-md shadow-[rgba(0,0,0,0.1)] mb-3">
            Free website &amp; speed audit included
          </div>
          <h1 className="text-center mb-5 sm:mb-6 opacity-0 animate-fadeInUpDelay">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-sky-gradient leading-tight drop-shadow-2xl mb-1">
              Launch Faster.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-sky-gradient leading-tight drop-shadow-2xl">
              Scale with AI.
            </span>
          </h1>

          <p className="text-center text-black text-sm sm:text-base max-w-lg mb-6 sm:mb-8 leading-relaxed font-normal opacity-0 animate-fadeInDelay px-4 sm:px-0">
            We design and ship high-performing <a href="/web-design" className="text-sky-gradient hover:opacity-80 transition-all">web design in Dover</a> in a few days, with <a href="/ai-operations" className="text-sky-gradient hover:opacity-80 transition-all">AI automation in Dover and Kent</a> that chases every lead for you.<br />
            Built in Kent for local teams who want momentum without extra hires.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/contact"
              onClick={() => {
                try {
                  trackCTAClick('home_contact_cta', { page: window.location.pathname });
                } catch {}
              }}
              className="btn-gradient inline-block px-7 sm:px-6 py-3.5 sm:py-3 text-white font-normal rounded-full active:scale-95 opacity-0 animate-fadeInDelay"
            >
              Book a Call
            </a>
            <a
              href="/tools/speed-checker"
              onClick={() => {
                try {
                  trackCTAClick('home_speed_checker_cta', { page: window.location.pathname });
                } catch {}
              }}
              className="btn-gradient inline-block px-7 sm:px-6 py-3.5 sm:py-3 text-white font-normal rounded-full active:scale-95 opacity-0 animate-fadeInDelay"
            >
              Check Your Site Speed
            </a>
          </div>
        </header>
      </div>

      {/* REST OF PAGE */}
      <main id="main-content">
        <div id="partners">
          <LogoCloud />
        </div>

        <div id="features">
          <StatisticsSection />
        </div>

        <DashboardSection />

        <div id="security">
          <SecuritySection />
        </div>

        <InterviewBookingSection />

        {/* Lazy-loaded sections below the fold */}
        <Suspense fallback={<div className="py-20 bg-white" />}>
          <LazyEffortlessSecuritySection />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-white" />}>
          <div id="faq">
            <LazyFAQSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-white" />}>
          <LazyCTABanner />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={() => setIsRegistrationModalOpen(false)}
        />
      </Suspense>
    </>
  );
}
