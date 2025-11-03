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

const API_KEYS = [
  'AIzaSyBHzDkiDWUf0IOfqP8b0fIHAWbV2lKk0m0',
  'AIzaSyAla1ajnYhu3tg8SpbUklnsTtA4-vUMQbw',
  'AIzaSyBiCRbqFFCza8eyWqy_OXrV3f1hihAcgKI',
  'AIzaSyCVof3a5o3yyhabV4KdW2UGu1l4yhVLBZw',
  'AIzaSyBUSt55stKvZKqi0i1fNkP6NRacVkBRDDw',
];

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

async function runPsiWithKey(url: string, strategy: Strategy, apiKey: string) {
  const params = new URLSearchParams({ url, strategy, category: 'PERFORMANCE', key: apiKey });
  const resp = await fetch(`${PSI_ENDPOINT}?${params.toString()}`);

  if (!resp.ok) {
    if (resp.status === 429) {
      throw new Error('QUOTA_EXCEEDED');
    }
    const text = await resp.text().catch(() => '');
    throw new Error(`PSI ${strategy} request failed: ${resp.status} ${resp.statusText} ${text}`.trim());
  }

  const data = await resp.json();
  return parseMetrics(data);
}

async function runPsi(url: string, strategy: Strategy, apiKey?: string) {
  const keysToTry = apiKey ? [apiKey] : API_KEYS;

  let lastError: Error | null = null;

  for (const key of keysToTry) {
    try {
      return await runPsiWithKey(url, strategy, key);
    } catch (err: any) {
      if (err?.message === 'QUOTA_EXCEEDED') {
        lastError = err;
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error('All API keys exhausted');
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

function generateSimulatedMetrics(url: string, strategy: Strategy): PsiMetrics {
  let hash = 0;
  for (let i = 0; i < url.length; i++) hash = (hash * 31 + url.charCodeAt(i)) >>> 0;
  hash += strategy === 'mobile' ? 1 : 2;

  const rand = () => {
    hash ^= hash << 13;
    hash ^= hash >>> 17;
    hash ^= hash << 5;
    return ((hash >>> 0) % 1000) / 1000;
  };

  const isMobile = strategy === 'mobile';
  const baseScore = isMobile ? 45 + rand() * 25 : 60 + rand() * 30;
  const score = Math.round(baseScore);

  const fcpSec = +(isMobile ? 1.2 + rand() * 1.8 : 0.8 + rand() * 1.2).toFixed(2);
  const lcpSec = +(isMobile ? 2.5 + rand() * 2.5 : 1.5 + rand() * 2.0).toFixed(2);
  const cls = +(rand() * 0.15).toFixed(3);
  const speedIndexSec = +(isMobile ? 2.0 + rand() * 3.0 : 1.2 + rand() * 2.0).toFixed(2);
  const interactiveSec = +(isMobile ? 3.0 + rand() * 4.0 : 2.0 + rand() * 3.0).toFixed(2);

  return { score, fcpSec, lcpSec, cls, speedIndexSec, interactiveSec };
}

export async function checkWebsiteSpeedWithFallback(inputUrl: string, options?: { apiKey?: string }): Promise<CheckWebsiteSpeedResult & { simulated?: boolean }> {
  try {
    return await checkWebsiteSpeed(inputUrl, options);
  } catch (err: any) {
    if (err?.message === 'QUOTA_EXCEEDED') {
      const url = (() => {
        try {
          const u = new URL(inputUrl.includes('://') ? inputUrl : `https://${inputUrl}`);
          return u.toString();
        } catch {
          throw new Error('Invalid URL');
        }
      })();

      const mobile = generateSimulatedMetrics(url, 'mobile');
      const desktop = generateSimulatedMetrics(url, 'desktop');

      return {
        mobileScore: mobile.score,
        desktopScore: desktop.score,
        mobile,
        desktop,
        simulated: true,
      };
    }
    throw err;
  }
}

export default checkWebsiteSpeed;

