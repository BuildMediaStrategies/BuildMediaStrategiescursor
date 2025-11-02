import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Loader2, Zap } from 'lucide-react';
import { generateSpeedResults, SpeedResults } from '../../lib/utils/speedSimulator';

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

const pct = (n: number) => `${Math.round(n)}%`;

export default function WebsiteSpeedChecker() {
  const [form, setForm] = useState<FormState>({ url: '' });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SpeedResults | null>(null);

  const fasterPct = useMemo(() => {
    if (!results) return 0;
    const diff = results.userLoadTime - results.ourLoadTime;
    if (diff <= 0) return 0;
    return Math.max(0, Math.round(((results.userLoadTime / results.ourLoadTime) - 1) * 100));
  }, [results]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = form.url.trim();
    if (!isValidUrl(value)) {
      setForm((f) => ({ ...f, error: 'Please enter a valid URL (e.g., example.com or https://example.com)' }));
      return;
    }
    setForm((f) => ({ ...f, error: undefined }));
    setLoading(true);
    setResults(null);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    const r = generateSpeedResults(value);
    setResults(r);
    setLoading(false);
  };

  const barWidth = (time: number) => {
    const max = 7; // reference max seconds
    const pct = Math.min(100, (time / max) * 100);
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
              <h2 className="text-xl font-semibold text-gray-900">Free Website Speed Audit</h2>
              <p className="text-sm text-gray-600">See how your site stacks up against ours (and your competitors)</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 border-b border-gray-100">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">Enter your website URL</label>
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
              {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Checking...</>) : 'Check Speed'}
            </button>
          </div>
          {form.error && <p className="text-sm text-red-600 mt-2">{form.error}</p>}
        </form>

        {/* Results */}
        <div className={`px-6 py-6 transition-all duration-500 ${results ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          {results && (
            <div className="space-y-8">
              {/* A) Speed Comparison Bars */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Speed Comparison</h3>
                <div className="space-y-3">
                  {/* Your Website */}
                  <div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Your Website</span>
                      <span className="text-gray-700 font-medium">{results.userLoadTime.toFixed(2)}s</span>
                    </div>
                    <div className="h-3 bg-red-100 rounded-full overflow-hidden border border-red-200">
                      <div className="h-full bg-red-500" style={{ width: barWidth(results.userLoadTime) }} />
                    </div>
                  </div>

                  {/* Our Sites */}
                  <div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Our Sites</span>
                      <span className="text-gray-700 font-medium">{results.ourLoadTime.toFixed(2)}s</span>
                    </div>
                    <div className="h-3 bg-emerald-100 rounded-full overflow-hidden border border-emerald-200">
                      <div className="h-full bg-emerald-500" style={{ width: barWidth(results.ourLoadTime) }} />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 bg-emerald-100 text-emerald-700 text-sm border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{fasterPct}% faster</span>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">That means more conversions, better SEO, happier visitors.</p>
                </div>
              </div>

              {/* B) Score Comparison */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile Performance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`rounded-xl p-4 border ${scoreColor(results.userMobileScore)}`}>
                    <div className="text-sm font-medium">Your Mobile Score</div>
                    <div className="text-3xl font-bold">{results.userMobileScore}</div>
                  </div>
                  <div className={`rounded-xl p-4 border bg-emerald-100 text-emerald-700 border-emerald-200`}>
                    <div className="text-sm font-medium">Our Mobile Score</div>
                    <div className="text-3xl font-bold">{results.ourMobileScore}</div>
                  </div>
                </div>
              </div>

              {/* C) Why This Matters */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <div className="font-semibold text-red-700 mb-1">Why This Matters:</div>
                    <ul className="list-disc ml-5 text-sm text-red-700 space-y-1">
                      <li>53% of mobile users abandon sites over 3 seconds</li>
                      <li>1 second delay = 7% reduction in conversions</li>
                      <li>Google uses speed as a ranking factor</li>
                      <li>Slow sites cost you thousands in lost revenue</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* D) Final CTA */}
              <div className="rounded-xl p-5 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-gray-900 font-semibold">Ready to Speed Up Your Site?</div>
                    <div className="text-gray-600 text-sm">Get a free consultation on how we can make your site lightning-fast</div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
                  >
                    <Zap className="w-4 h-4 mr-2" /> Get Your Free Speed Optimization Plan
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

