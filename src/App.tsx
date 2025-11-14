import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import CookieConsentBanner from './components/CookieConsentBanner';
import { initGA, trackPageView } from './lib/analytics/googleAnalytics';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import { useCookieConsent } from './hooks/useCookieConsent';
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
  const { status, initialized, accept, decline } = useCookieConsent();
  const hasAnalyticsConsent = status === 'accepted';
  const showCookieBanner = initialized && status === null;

  useEffect(() => {
    if (hasAnalyticsConsent) {
      initGA();
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
      <CookieConsentBanner visible={showCookieBanner} onAccept={accept} onDecline={decline} />
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
