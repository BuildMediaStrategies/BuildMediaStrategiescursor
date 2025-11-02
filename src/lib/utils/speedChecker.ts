// Real Google PageSpeed Insights (v5) fetcher
// Returns honest, unmodified metrics for both mobile and desktop

export interface PsiMetrics {
  score: number; // 0-100
  fcpSec: number; // First Contentful Paint (s)
  lcpSec: number; // Largest Contentful Paint (s)
  cls: number; // Cumulative Layout Shift
  speedIndexSec: number; // Speed Index (s)
  interactiveSec: number; // Time to Interactive (s)
}

export interface CheckWebsiteSpeedResult {
  mobileScore: number;
  desktopScore: number;
  mobile: PsiMetrics;
  desktop: PsiMetrics;
}

type Strategy = 'mobile' | 'desktop';

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

function parseMetrics(lhr: any): PsiMetrics {
  const audits = lhr?.lighthouseResult?.audits ?? {};
  const categoryScore = lhr?.lighthouseResult?.categories?.performance?.score ?? 0;

  const ms = (v: unknown): number => (typeof v === 'number' && isFinite(v) ? v : 0);

  const fcpMs = ms(audits['first-contentful-paint']?.numericValue);
  const lcpMs = ms(audits['largest-contentful-paint']?.numericValue);
  const clsVal = typeof audits['cumulative-layout-shift']?.numericValue === 'number'
    ? audits['cumulative-layout-shift'].numericValue
    : 0;
  const speedIndexMs = ms(audits['speed-index']?.numericValue);
  const interactiveMs = ms(audits['interactive']?.numericValue);

  return {
    score: Math.round((typeof categoryScore === 'number' ? categoryScore : 0) * 100),
    fcpSec: +(fcpMs / 1000).toFixed(2),
    lcpSec: +(lcpMs / 1000).toFixed(2),
    cls: +clsVal.toFixed(3),
    speedIndexSec: +(speedIndexMs / 1000).toFixed(2),
    interactiveSec: +(interactiveMs / 1000).toFixed(2),
  };
}

async function runPsi(url: string, strategy: Strategy, apiKey?: string) {
  const params = new URLSearchParams({ url, strategy, category: 'PERFORMANCE' });
  const key = apiKey || (typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_GOOGLE_PSI_API_KEY : undefined);
  if (key) params.set('key', key);

  const resp = await fetch(`${PSI_ENDPOINT}?${params.toString()}`);
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`PSI ${strategy} request failed: ${resp.status} ${resp.statusText} ${text}`.trim());
  }
  const data = await resp.json();
  return parseMetrics(data);
}

export async function checkWebsiteSpeed(inputUrl: string, options?: { apiKey?: string }): Promise<CheckWebsiteSpeedResult> {
  const url = (() => {
    try {
      // Ensure protocol to avoid PSI rejecting bare hostnames
      const u = new URL(inputUrl.includes('://') ? inputUrl : `https://${inputUrl}`);
      return u.toString();
    } catch (e) {
      throw new Error('Invalid URL. Include a valid domain like example.com or https://example.com');
    }
  })();

  const apiKey = options?.apiKey;
  const [mobile, desktop] = await Promise.all([
    runPsi(url, 'mobile', apiKey),
    runPsi(url, 'desktop', apiKey),
  ]);

  return {
    mobileScore: mobile.score,
    desktopScore: desktop.score,
    mobile,
    desktop,
  };
}

export default checkWebsiteSpeed;

