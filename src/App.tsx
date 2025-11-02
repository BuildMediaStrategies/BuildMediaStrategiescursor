import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebDesignPage from './pages/WebDesignPage';
import AIOperationsPage from './pages/AIOperationsPage';
import IndustriesPage from './pages/IndustriesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import KentServicesPage from './pages/KentServicesPage';
import WebDesignDover from './pages/WebDesignDover';
import WebDesignDeal from './pages/WebDesignDeal';
import WebDesignCanterbury from './pages/WebDesignCanterbury';
import WebDesignFolkestone from './pages/WebDesignFolkestone';
import ExitIntentPopup from './components/Conversion/ExitIntentPopup';
import ROICalculatorPage from './pages/tools/ROICalculator';
import SpeedCheckerPage from './pages/tools/SpeedChecker';

function App() {
  return (
    <Router>
      <ExitIntentPopup />
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
      </Routes>
    </Router>
  );
}

export default App;
