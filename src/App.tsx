import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebDesignPage from './pages/WebDesignPage';
import AIOperationsPage from './pages/AIOperationsPage';
import IndustriesPage from './pages/IndustriesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import WebDesignDover from './pages/WebDesignDover';
import WebDesignDeal from './pages/WebDesignDeal';
import WebDesignCanterbury from './pages/WebDesignCanterbury';
import WebDesignFolkestone from './pages/WebDesignFolkestone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/ai-operations" element={<AIOperationsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/web-design-dover" element={<WebDesignDover />} />
        <Route path="/web-design-deal" element={<WebDesignDeal />} />
        <Route path="/web-design-canterbury" element={<WebDesignCanterbury />} />
        <Route path="/web-design-folkestone" element={<WebDesignFolkestone />} />
      </Routes>
    </Router>
  );
}

export default App;
