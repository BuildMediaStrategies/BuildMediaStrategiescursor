import React, { useMemo, useState } from 'react';
import { AlertTriangle, Loader2, Zap } from 'lucide-react';
import { checkWebsiteSpeedWithFallback, CheckWebsiteSpeedResult } from '../../lib/utils/speedChecker';
import { trackToolUsage } from '../../lib/analytics/conversions';

interface FormState {
  url: string;
  error?: string;
}

const isValidUrl = (value: string) => {
  try {
    const u = new URL(value.includes('://') ? value : `https://${value}`);
    return !!u.hostname;
  } catch {
    return false;
  }
};

export default function WebsiteSpeedChecker() {
  const [form, setForm] = useState<FormState>({ url: '' });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<(CheckWebsiteSpeedResult & { simulated?: boolean }) | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  const mobileVsDesktop = useMemo(() => {
    if (!results) return { faster: 'mobile', diffSec: 0 } as const;
    const a = results.mobile.speedIndexSec;
    const b = results.desktop.speedIndexSec;
    return a <= b ? { faster: 'mobile', diffSec: +(b - a).toFixed(2) } : { faster: 'desktop', diffSec: +(a - b).toFixed(2) };
  }, [results]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = form.url.trim();
    if (!isValidUrl(value)) {
      setForm((f) => ({ ...f, error: 'Please enter a valid URL (e.g., example.com or https://example.com)' }));
      return;
    }
    setForm((f) => ({ ...f, error: undefined }));
    setError(undefined);
    setLoading(true);
    setResults(null);
    try {
      const r = await checkWebsiteSpeedWithFallback(value);
      setResults(r);
      try {
        trackToolUsage('speed_checker', {
          url: value,
          mobile_score: r.mobileScore,
          desktop_score: r.desktopScore,
          mobile_lcp: r.mobile.lcpSec,
          desktop_lcp: r.desktop.lcpSec,
          simulated: r.simulated || false,
        });
      } catch {}
    } catch (err: any) {
      setError(err?.message || 'Failed to fetch PageSpeed Insights. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const barWidth = (time: number) => {
    // Display scale 0..10s
    const max = 10;
    const pct = Math.min(100, Math.max(0, (time / max) * 100));
    return pct + '%';
  };

  const scoreColor = (score: number) => {
    if (score < 50) return 'bg-red-100 text-red-700 border-red-200';
    if (score < 90) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-emerald-100 text-emerald-700 border-emerald-200';
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center border border-gray-100">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-sky-gradient">Free Website Speed Audit</h2>
              <p className="text-sm text-black">See how your site stacks up against ours (and your competitors)</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 border-b border-gray-100">
          <label htmlFor="url" className="block text-sm font-medium text-black mb-2">Enter your website URL</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="url"
              type="text"
              value={form.url}
              onChange={(e) => setForm({ url: e.target.value })}
              placeholder="example.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center whitespace-nowrap px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md disabled:opacity-60"
            >
              {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...</>) : 'Check Speed'}
            </button>
          </div>
          {form.error && <p className="text-sm text-red-600 mt-2">{form.error}</p>}
          {loading && <p className="text-sm text-black mt-2">Analyzing website performance...</p>}
          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        </form>

        {/* Results */}
        <div className={`px-6 py-6 transition-all duration-500 ${results ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          {results && (
            <div className="space-y-8">
              {results.simulated && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5"><AlertTriangle className="w-5 h-5 text-amber-600" /></div>
                    <div>
                      <div className="font-semibold text-amber-700 mb-1">Simulated Results</div>
                      <p className="text-sm text-amber-700">
                        Google PageSpeed API quota exceeded. Showing simulated performance estimates based on typical website patterns. Contact us for a comprehensive real-world audit.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* A) Performance Scores */}
              <div>
                <h3 className="text-lg font-semibold text-sky-gradient mb-3">Performance Scores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`rounded-xl p-4 border ${scoreColor(results.mobileScore)}`}>
                    <div className="text-sm font-medium">Mobile Score</div>
                    <div className="text-3xl font-bold">{results.mobileScore}</div>
                  </div>
                  <div className={`rounded-xl p-4 border ${scoreColor(results.desktopScore)}`}>
                    <div className="text-sm font-medium">Desktop Score</div>
                    <div className="text-3xl font-bold">{results.desktopScore}</div>
                  </div>
                </div>
              </div>

              {/* B) Speed Index Comparison Bars */}
              <div>
                <h3 className="text-lg font-semibold text-sky-gradient mb-3">Speed Index (lower is better)</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm text-black mb-1">
                      <span>Mobile</span>
                      <span className="text-black font-medium">{results.mobile.speedIndexSec.toFixed(2)}s</span>
                    </div>
                    <div className="h-3 bg-blue-100 rounded-full overflow-hidden border border-blue-200">
                      <div className="h-full bg-blue-500" style={{ width: barWidth(results.mobile.speedIndexSec) }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm text-black mb-1">
                      <span>Desktop</span>
                      <span className="text-black font-medium">{results.desktop.speedIndexSec.toFixed(2)}s</span>
                    </div>
                    <div className="h-3 bg-purple-100 rounded-full overflow-hidden border border-purple-200">
                      <div className="h-full bg-purple-500" style={{ width: barWidth(results.desktop.speedIndexSec) }} />
                    </div>
                  </div>
                  {mobileVsDesktop.diffSec > 0 && (
                    <p className="text-sm text-black mt-1">{mobileVsDesktop.faster === 'mobile' ? 'Mobile' : 'Desktop'} appears ~{mobileVsDesktop.diffSec}s faster by Speed Index.</p>
                  )}
                </div>
              </div>

              {/* C) Core Web Vitals */}
              <div>
                <h3 className="text-lg font-semibold text-sky-gradient mb-3">Core Web Vitals</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl p-4 border border-gray-200">
                    <div className="text-sm font-medium text-black mb-2">Mobile</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs text-black">FCP</div>
                        <div className="text-lg font-semibold text-gray-900">{results.mobile.fcpSec}s</div>
                      </div>
                      <div>
                        <div className="text-xs text-black">LCP</div>
                        <div className="text-lg font-semibold text-gray-900">{results.mobile.lcpSec}s</div>
                      </div>
                      <div>
                        <div className="text-xs text-black">CLS</div>
                        <div className="text-lg font-semibold text-gray-900">{results.mobile.cls}</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-4 border border-gray-200">
                    <div className="text-sm font-medium text-black mb-2">Desktop</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs text-black">FCP</div>
                        <div className="text-lg font-semibold text-gray-900">{results.desktop.fcpSec}s</div>
                      </div>
                      <div>
                        <div className="text-xs text-black">LCP</div>
                        <div className="text-lg font-semibold text-gray-900">{results.desktop.lcpSec}s</div>
                      </div>
                      <div>
                        <div className="text-xs text-black">CLS</div>
                        <div className="text-lg font-semibold text-gray-900">{results.desktop.cls}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-black mt-2">
                  {results.simulated
                    ? 'Metrics are simulated estimates. For accurate measurements, contact us for a professional audit.'
                    : 'Metrics are fetched directly from Google PageSpeed Insights for the requested URL.'}
                </p>
              </div>

              {!results.simulated && (
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5"><AlertTriangle className="w-5 h-5 text-blue-600" /></div>
                    <div>
                      <div className="font-semibold text-blue-700 mb-1">About these results</div>
                      <p className="text-sm text-blue-700">Scores and metrics shown are direct from Google PageSpeed Insights with no manipulation. Reruns may vary slightly due to test conditions.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
