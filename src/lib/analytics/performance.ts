export function trackPageLoad() {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const perf = (window as any).performance;
      const timing = perf?.timing;
      if (timing && timing.loadEventEnd && timing.navigationStart) {
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
      }
    });
  }
}

