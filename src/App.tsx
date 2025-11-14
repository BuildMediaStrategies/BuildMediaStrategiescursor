import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import CookieConsentBanner, { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_STORAGE_KEY } from './components/CookieConsentBanner';
import { initGA, trackPageView } from './lib/analytics/googleAnalytics';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
const ExitIntentPopup = lazy(() => import('./components/Conversion/ExitIntentPopup'));
const WebDesignPage = lazy(() => import('./pages/WebDesignPage'));
const AIOperationsPage = lazy(() => import('./pages/AIOperationsPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const KentServicesPage = lazy(() => import('./pages/KentServicesPage'));
const WebDesignDover = lazy(() => import('./pages/WebDesignDover'));
const WebDesignDeal = lazy(() => import('./pages/WebDesignDeal'));
const WebDesignCanterbury = lazy(() => import('./pages/WebDesignCanterbury'));
const WebDesignFolkestone = lazy(() => import('./pages/WebDesignFolkestone'));
const ROICalculatorPage = lazy(() => import('./pages/tools/ROICalculator'));
const SpeedCheckerPage = lazy(() => import('./pages/tools/SpeedChecker'));
const BlogIndexPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));
const AboutPage = lazy(() => import('./pages/About'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const AIDisclosurePage = lazy(() => import('./pages/AIDisclosurePage'));

function App() {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);
  const gaInitializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (stored === 'accepted') {
        setHasAnalyticsConsent(true);
      }
    } catch {
      // Ignore storage errors and assume no consent.
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleChange = (event: Event) => {
      const detail = (event as CustomEvent<'accepted' | 'declined'>).detail;
      if (detail === 'accepted') {
        setHasAnalyticsConsent(true);
      } else if (detail === 'declined') {
        setHasAnalyticsConsent(false);
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== COOKIE_CONSENT_STORAGE_KEY) return;
      if (event.newValue === 'accepted') {
        setHasAnalyticsConsent(true);
      } else if (event.newValue === 'declined') {
        setHasAnalyticsConsent(false);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (hasAnalyticsConsent && !gaInitializedRef.current) {
      initGA();
      gaInitializedRef.current = true;
    }
  }, [hasAnalyticsConsent]);

  return (
    <Router>
      <RouteChangeTracker hasAnalyticsConsent={hasAnalyticsConsent} />

      <Header />
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/ai-operations" element={<AIOperationsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/kent-services" element={<KentServicesPage />} />
          <Route path="/web-design-dover" element={<WebDesignDover />} />
          <Route path="/web-design-deal" element={<WebDesignDeal />} />
          <Route path="/web-design-canterbury" element={<WebDesignCanterbury />} />
          <Route path="/web-design-folkestone" element={<WebDesignFolkestone />} />
          <Route path="/tools/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/tools/speed-checker" element={<SpeedCheckerPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/ai-disclosure" element={<AIDisclosurePage />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieConsentBanner />
    </Router>
  );
}

function RouteChangeTracker({ hasAnalyticsConsent }: { hasAnalyticsConsent: boolean }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (hasAnalyticsConsent) {
      trackPageView(location.pathname);
    }
  }, [location.pathname, hasAnalyticsConsent]);
  return null;
}

export default App;
