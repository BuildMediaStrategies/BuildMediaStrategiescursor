import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { trackPageView } from './lib/analytics/googleAnalytics';
const ExitIntentPopup = lazy(() => import('./components/Conversion/ExitIntentPopup'));
const HomePage = lazy(() => import('./pages/HomePage'));
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

function App() {
  return (
    <Router>
      <RouteChangeTracker />
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
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
        </Routes>
      </Suspense>
    </Router>
  );
}

function RouteChangeTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
  return null;
}

export default App;
