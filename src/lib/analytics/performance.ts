/**
 * Performance monitoring utilities for Core Web Vitals
 * Tracks key metrics: LCP, FID, CLS, FCP, TTFB
 */

/**
 * Track Core Web Vitals and page load performance
 */
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Track page load time
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      if (navigationEntry) {
        const pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
        const domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
        const timeToInteractive = navigationEntry.domInteractive - navigationEntry.fetchStart;

        console.log('Performance Metrics:');
        console.log('Page Load Time:', Math.round(pageLoadTime), 'ms', pageLoadTime < 2000 ? 'GOOD' : 'NEEDS IMPROVEMENT');
        console.log('DOM Content Loaded:', Math.round(domContentLoaded), 'ms');
        console.log('Time to Interactive:', Math.round(timeToInteractive), 'ms');

        if (pageLoadTime > 2000) {
          console.warn('Warning: Page load time exceeds 2s target');
        }
      }
    }, 0);
  });

  // Track Web Vitals using PerformanceObserver
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        const lcp = lastEntry.renderTime || lastEntry.loadTime;
        const rating = lcp < 2500 ? 'GOOD' : lcp < 4000 ? 'NEEDS IMPROVEMENT' : 'POOR';
        console.log('LCP (Largest Contentful Paint):', Math.round(lcp), 'ms -', rating);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          const rating = fid < 100 ? 'GOOD' : fid < 300 ? 'NEEDS IMPROVEMENT' : 'POOR';
          console.log('FID (First Input Delay):', Math.round(fid), 'ms -', rating);
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        const rating = clsValue < 0.1 ? 'GOOD' : clsValue < 0.25 ? 'NEEDS IMPROVEMENT' : 'POOR';
        console.log('CLS (Cumulative Layout Shift):', clsValue.toFixed(3), '-', rating);
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // CLS not supported
    }

    // First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fcp = entry.startTime;
          const rating = fcp < 1800 ? 'GOOD' : fcp < 3000 ? 'NEEDS IMPROVEMENT' : 'POOR';
          console.log('FCP (First Contentful Paint):', Math.round(fcp), 'ms -', rating);
        });
      });
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
      // FCP not supported
    }
  }

  // Log resource timing for large assets
  if (performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const largeResources = resources
      .filter(r => r.transferSize > 100000)
      .sort((a, b) => b.transferSize - a.transferSize)
      .slice(0, 5);

    if (largeResources.length > 0) {
      console.log('Largest Resources:');
      largeResources.forEach(r => {
        const filename = r.name.split('/').pop() || r.name;
        console.log(' ', filename, ':', Math.round(r.transferSize / 1024), 'KB');
      });
    }
  }
};
