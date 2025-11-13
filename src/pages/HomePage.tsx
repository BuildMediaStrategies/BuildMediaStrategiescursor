import { useState, Suspense, lazy } from 'react';
import SEOWrapper from '../components/SEO/SEOWrapper';
const LogoCloud = lazy(() => import('../components/LogoCloud'));
const StatisticsSection = lazy(() => import('../components/StatisticsSection'));
const DashboardSection = lazy(() => import('../components/DashboardSection'));
const SecuritySection = lazy(() => import('../components/SecuritySection'));
const InterviewBookingSection = lazy(() => import('../components/InterviewBookingSection'));
const RegistrationModal = lazy(() => import('../components/RegistrationModal'));
import {
  LazyTestimonialsSection,
  LazyFAQSection,
  LazyGoogleReviews,
  LazyCTABanner,
  LazyEffortlessSecuritySection,
} from '../lib/utils/lazyComponents';
import { trackCTAClick } from '../lib/analytics/conversions';

export default function HomePage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <>
      <SEOWrapper
        title="Web Design & AI Operations in Kent"
        description="High-performance websites and AI operations for businesses across Dover, Deal, Canterbury, and Folkestone. Drive sales and scale operations with custom web design and intelligent automation."
        canonical="https://buildmediastrategies.com/"
        schemaType="homepage"
        keywords="web design Kent, AI operations, business websites Dover, Canterbury web design, Folkestone web developer, AI automation Kent, web development Deal"
        ogType="website"
      />
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh' }} id="home">
        {/* Pure white base */}
        <div className="absolute inset-0 bg-white" />

        {/* HERO IMAGE */}
        <img
          id="hero-img"
          src="/hero-image-new.png"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width={1920}
          height={1080}
          className="pointer-events-none select-none absolute inset-0 w-full h-full z-0"
          style={{
            // Desktop: fill and lift
            objectFit: 'cover',
            objectPosition: 'center 50%',
            transform: 'translateY(18vh)',
            willChange: 'transform',
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />

        {/* Mobile overrides (show full browsers, remove dim at bottom) */}
        <style>{`
          @media (max-width: 1023px) {
            #hero-img{
              object-fit: contain !important;
              object-position: center 72% !important; /* lowered slightly for perfect alignment */
              transform: none !important;
              filter: brightness(1) contrast(1.05) !important;
            }
          }
        `}</style>

        {/* Top cover kills any seam under nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-white via-white to-transparent h-32 md:h-[20vh]" />

        {/* HERO CONTENT */}
        <header className="relative z-40 flex flex-col items-center justify-center px-5 sm:px-6 pt-24 sm:pt-20 pb-16 sm:pb-20 min-h-[80vh]">
          <h1 className="text-center mb-5 sm:mb-6 opacity-0 animate-fadeInUpDelay">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-white leading-tight drop-shadow-2xl mb-1">
              Websites That Convert.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-sky-gradient leading-tight drop-shadow-2xl">
              AI That Accelerates.
            </span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base max-w-lg mb-6 sm:mb-8 leading-relaxed font-normal opacity-0 animate-fadeInDelay px-4 sm:px-0">
            High-performance <a href="/web-design" className="text-white hover:text-sky-gradient transition-all">websites</a> that drive sales.<br /> <a href="/ai-operations" className="text-white hover:text-sky-gradient transition-all">AI systems</a> that multiply your team's output.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/contact"
              onClick={() => { try { trackCTAClick('home_contact_cta', { page: window.location.pathname }); } catch {} }}
              className="btn-gradient inline-block px-7 sm:px-6 py-3.5 sm:py-3 text-white font-normal rounded-full active:scale-95 opacity-0 animate-fadeInDelay"
            >
              Get Started Today
            </a>
            <a
              href="/tools/speed-checker"
              onClick={() => { try { trackCTAClick('home_speed_checker_cta', { page: window.location.pathname }); } catch {} }}
              className="btn-gradient inline-block px-7 sm:px-6 py-3.5 sm:py-3 text-white font-normal rounded-full active:scale-95 opacity-0 animate-fadeInDelay"
            >
              Check Your Site Speed
            </a>
          </div>
        </header>
      </div>

      {/* REST OF PAGE */}
      <main id="main-content">
        <Suspense fallback={null}>
          <div id="partners"><LogoCloud /></div>
        </Suspense>
        <Suspense fallback={null}>
          <div id="features"><StatisticsSection /></div>
        </Suspense>
        <Suspense fallback={null}>
          <DashboardSection />
        </Suspense>
        <Suspense fallback={null}>
          <div id="security"><SecuritySection /></div>
        </Suspense>
        <Suspense fallback={null}>
          <InterviewBookingSection />
        </Suspense>

        {/* Lazy-loaded sections below the fold */}
        <Suspense fallback={<div className="py-20 bg-white" />}>
          <LazyEffortlessSecuritySection />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-white" />}>
          <div id="faq"><LazyFAQSection /></div>
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-white" />}>
          <LazyCTABanner />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-white" />}>
          <LazyGoogleReviews />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <RegistrationModal isOpen={isRegistrationModalOpen} onClose={() => setIsRegistrationModalOpen(false)} />
      </Suspense>
    </>
  );
}
