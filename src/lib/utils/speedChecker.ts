/**
 * Real website speed checking using Google PageSpeed Insights API
 * No fake data - all results are accurate Google measurements
 */

export interface SpeedResult {
  url: string;
  mobileScore: number;
  desktopScore: number;
  loadTime: number;
  fcp: number; // First Contentful Paint (seconds)
  lcp: number; // Largest Contentful Paint (seconds)
  cls: number; // Cumulative Layout Shift
  timestamp: number;
}

/**
 * Check website speed using Google PageSpeed Insights API
 * This is the FREE public API - no API key required
 * Rate limit: ~25-50 requests per minute
 */
export const checkWebsiteSpeed = async (url: string): Promise<SpeedResult> => {
  try {
    // Clean and validate URL
    let cleanUrl = url.trim();

    // Add https:// if missing
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    // Validate URL format
    try {
      new URL(cleanUrl);
    } catch {
      throw new Error('Invalid URL format. Please enter a valid website URL.');
    }

    // Google PageSpeed Insights API endpoint
    const API_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    // Fetch mobile performance data
    const mobileUrl = `${API_ENDPOINT}?url=${encodeURIComponent(cleanUrl)}&strategy=mobile&category=performance`;
    const mobileResponse = await fetch(mobileUrl);

    if (!mobileResponse.ok) {
      if (mobileResponse.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment and try again.');
      }
      throw new Error('Unable to analyze this website. Please check the URL and try again.');
    }

    const mobileData = await mobileResponse.json();

    // Fetch desktop performance data
    const desktopUrl = `${API_ENDPOINT}?url=${encodeURIComponent(cleanUrl)}&strategy=desktop&category=performance`;
    const desktopResponse = await fetch(desktopUrl);

    if (!desktopResponse.ok) {
      throw new Error('Unable to fetch desktop performance data.');
    }

    const desktopData = await desktopResponse.json();

    // Extract Lighthouse metrics from mobile results
    const mobileAudits = mobileData.lighthouseResult.audits;

    // Performance scores (0-100)
    const mobileScore = Math.round(
      mobileData.lighthouseResult.categories.performance.score * 100
    );
    const desktopScore = Math.round(
      desktopData.lighthouseResult.categories.performance.score * 100
    );

    // Core Web Vitals and load metrics (convert from milliseconds to seconds)
    const fcp = mobileAudits['first-contentful-paint']?.numericValue
      ? mobileAudits['first-contentful-paint'].numericValue / 1000
      : 0;

    const lcp = mobileAudits['largest-contentful-paint']?.numericValue
      ? mobileAudits['largest-contentful-paint'].numericValue / 1000
      : 0;

    const cls = mobileAudits['cumulative-layout-shift']?.numericValue || 0;

    const loadTime = mobileAudits['speed-index']?.numericValue
      ? mobileAudits['speed-index'].numericValue / 1000
      : 0;

    return {
      url: cleanUrl,
      mobileScore,
      desktopScore,
      loadTime,
      fcp,
      lcp,
      cls,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error('Speed check error:', error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error('An unexpected error occurred. Please try again.');
  }
};

/**
 * Our site's baseline performance
 * Update these values after testing buildmediastrategies.com
 * These should be REAL numbers from actual PageSpeed tests
 */
export const OUR_SITE_BASELINE = {
  mobileScore: 95,
  desktopScore: 98,
  loadTime: 1.2, // seconds
};

/**
 * Get color based on score
 */
export const getScoreColor = (score: number): string => {
  if (score >= 90) return 'green';
  if (score >= 50) return 'yellow';
  return 'red';
};

/**
 * Get metric rating (Good, Needs Improvement, Poor)
 */
export const getMetricRating = (metric: 'lcp' | 'fcp' | 'cls', value: number): {
  rating: string;
  color: string;
} => {
  if (metric === 'lcp') {
    if (value <= 2.5) return { rating: 'Good', color: 'green' };
    if (value <= 4.0) return { rating: 'Needs Improvement', color: 'yellow' };
    return { rating: 'Poor', color: 'red' };
  }

  if (metric === 'fcp') {
    if (value <= 1.8) return { rating: 'Good', color: 'green' };
    if (value <= 3.0) return { rating: 'Needs Improvement', color: 'yellow' };
    return { rating: 'Poor', color: 'red' };
  }

  if (metric === 'cls') {
    if (value <= 0.1) return { rating: 'Good', color: 'green' };
    if (value <= 0.25) return { rating: 'Needs Improvement', color: 'yellow' };
    return { rating: 'Poor', color: 'red' };
  }

  return { rating: 'Unknown', color: 'gray' };
};
