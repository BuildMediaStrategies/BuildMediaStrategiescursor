import { useEffect, useState } from 'react';

export const COOKIE_CONSENT_STORAGE_KEY = 'cookieConsent';
export const COOKIE_CONSENT_EVENT = 'cookie-consent-change';

const CONSENT_ACCEPTED = 'accepted';
const CONSENT_DECLINED = 'declined';
type ConsentValue = typeof CONSENT_ACCEPTED | typeof CONSENT_DECLINED;

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (stored !== CONSENT_ACCEPTED && stored !== CONSENT_DECLINED) {
        setVisible(true);
      }
    } catch {
      // If storage isn't accessible we still try showing the banner.
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: ConsentValue) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    } catch {
      // Best-effort write only.
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-900 sm:text-base">
            We use cookies to improve your experience and understand how our site is used. Read our{' '}
            <a href="/cookie-policy" className="text-sky-600 underline-offset-4 hover:underline">
              Cookie Policy
            </a>
            .
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => handleChoice(CONSENT_ACCEPTED)}
              className="btn-gradient rounded-full px-5 py-2 text-sm font-semibold text-white"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => handleChoice(CONSENT_DECLINED)}
              className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
            >
              Manage later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
