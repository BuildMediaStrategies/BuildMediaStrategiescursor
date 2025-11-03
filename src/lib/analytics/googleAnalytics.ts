declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const getMeasurementId = () => (import.meta as any).env?.VITE_GA_MEASUREMENT_ID as string | undefined;

export function initGA(measurementId?: string) {
  const id = measurementId || getMeasurementId();
  if (!id) return; // silently no-op if no ID configured

  if (window.gtag) return; // already initialized

  const load = () => {
    // Inject gtag script defered to idle/load to avoid impacting LCP
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    // Disable automatic page_view so we can control SPA navigation
    window.gtag('config', id, { send_page_view: false });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(load, { timeout: 3000 });
  } else if (document.readyState === 'complete') {
    setTimeout(load, 1500);
  } else {
    window.addEventListener('load', () => setTimeout(load, 500));
  }
}

export function trackPageView(path?: string, title?: string) {
  const id = getMeasurementId();
  if (!window.gtag || !id) return;
  const location = window.location?.href;
  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: location,
    page_path: path || window.location?.pathname,
  });
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  const id = getMeasurementId();
  if (!window.gtag || !id) return;
  window.gtag('event', eventName, params || {});
}

export function trackConversion(eventName: string, value?: number, params?: Record<string, any>) {
  trackEvent(eventName, { value, ...params });
}

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackConversion,
};
