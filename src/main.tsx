import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { measurePerformance } from './lib/analytics/performance';
import { initGA } from './lib/analytics/googleAnalytics';

// Initialize GA (no-op if no measurement ID configured)
initGA();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Initialize performance monitoring in development
if (import.meta.env.DEV) {
  measurePerformance();
}
