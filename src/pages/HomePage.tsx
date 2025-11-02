import { useState, Suspense } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import LogoCloud from '../components/LogoCloud';
import StatisticsSection from '../components/StatisticsSection';
import DashboardSection from '../components/DashboardSection';
import SecuritySection from '../components/SecuritySection';
import InterviewBookingSection from '../components/InterviewBookingSection';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';
import {
  LazyTestimonialsSection,
  LazyFAQSection,
  LazyGoogleReviews,
  LazyCTABanner,
  LazyEffortlessSecuritySection,
} from '../lib/utils/lazyComponents';

export default function HomePage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black" />

        {/* HERO IMAGE */}
        <img
          id="hero-img"
          src="/hero-image.png"
          alt=""
          aria-hidden="true"
          loading="eager"
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
            /* lighten the readability veil on mobile */
            #hero-veil{ background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.25) 100%) !important; }
          }
        `}</style>

        {/* Top cover kills any seam under nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black via-black to-transparent h-32 md:h-[20vh]" />

        {/* Readability veil */}
        <div id="hero-veil" className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/20 to-black/40" />

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm animate-fadeIn" role="navigation" aria-label="Main navigation">
          <a href="/" className="flex items-center space-x-2" aria-label="BuildMediaStrategies home">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center" aria-hidden="true">
              <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
          </a>

          <div className="hidden md:flex items-center space-x-7">
            <a href="/web-design" className="text-white hover:text-gray-300 transition-colors">Web Design</a>
            <a href="/ai-operations" className="text-white hover:text-gray-300 transition-colors">AI Operations</a>
            <a href="/industries" className="text-white hover:text-gray-300 transition-colors">Industries</a>
            <a href="/portfolio" className="text-white hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-3.5">
            <button onClick={() => setIsRegistrationModalOpen(true)} className="hidden md:block px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
              Register Now
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white" aria-label="Open mobile menu" aria-expanded={isMobileMenuOpen}>
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />
            <nav className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black bg-opacity-95 backdrop-blur-md" role="navigation" aria-label="Mobile navigation">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center"><div className="w-3.5 h-3.5 bg-black rounded-full" /></div>
                  <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors" aria-label="Close mobile menu">
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <a href="/web-design" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>Web Design</a>
                <a href="/ai-operations" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>AI Operations</a>
                <a href="/industries" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>Industries</a>
                <a href="/portfolio" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
                <a href="#testimonials" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                <a href="/contact" className="block text-white text-lg hover:text-gray-300 transition-colors py-3 active:bg-white/10 rounded-lg px-3 -mx-3" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                <button onClick={() => { setIsMobileMenuOpen(false); setIsRegistrationModalOpen(true); }} className="w-full mt-6 px-5 py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 active:bg-white/10 transition-all duration-300 hover:shadow-lg">
                  Register Now
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* HERO CONTENT */}
        <header className="relative z-40 flex flex-col items-center justify-center px-5 sm:px-6 pt-24 sm:pt-20 pb-16 sm:pb-20 min-h-[80vh]">
          <h1 className="text-center mb-5 sm:mb-6 opacity-0 animate-fadeInUpDelay">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-white leading-tight drop-shadow-2xl mb-1">
              Websites That Convert.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
              AI That Accelerates.
            </span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base max-w-lg mb-6 sm:mb-8 leading-relaxed font-normal opacity-0 animate-fadeInDelay px-4 sm:px-0">
            High-performance <a href="/web-design" className="text-white hover:underline">websites</a> that drive sales.<br /> <a href="/ai-operations" className="text-white hover:underline">AI systems</a> that multiply your team's output.
          </p>

          <a
            href="/contact"
            className="inline-block px-7 sm:px-6 py-3.5 sm:py-3 bg-black text-white font-normal rounded-full border border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 opacity-0 animate-fadeInDelay"
          >
            Get Started Today
          </a>
        </header>

        {/* Hide the bottom fade on mobile to avoid dimming the browsers */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-30 hidden sm:block" aria-hidden="true" />
      </div>

      {/* REST OF PAGE */}
      <main id="main-content">
        <div id="partners"><LogoCloud /></div>
        <div id="features"><StatisticsSection /></div>
        <DashboardSection />
        <div id="security"><SecuritySection /></div>
        <InterviewBookingSection />

        {/* Lazy-loaded sections below the fold */}
        <Suspense fallback={<div className="py-20" style={{ backgroundColor: '#0A0A0A' }} />}>
          <LazyEffortlessSecuritySection />
        </Suspense>

        <Suspense fallback={<div className="py-20" style={{ backgroundColor: '#0A0A0A' }} />}>
          <div id="testimonials"><LazyTestimonialsSection /></div>
        </Suspense>

        <Suspense fallback={<div className="py-20" style={{ backgroundColor: '#0A0A0A' }} />}>
          <div id="faq"><LazyFAQSection /></div>
        </Suspense>

        <Suspense fallback={<div className="py-20" style={{ backgroundColor: '#0A0A0A' }} />}>
          <LazyCTABanner />
        </Suspense>

        <Suspense fallback={<div className="py-20" style={{ backgroundColor: '#0A0A0A' }} />}>
          <LazyGoogleReviews />
        </Suspense>
      </main>

      <Footer />
      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={() => setIsRegistrationModalOpen(false)} />
    </>
  );
}
