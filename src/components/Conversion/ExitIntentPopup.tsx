import { useCallback, useEffect, useMemo, useState } from 'react';

type ExitIntentPopupProps = {
  cooldownDays?: number;
  activationDelayMs?: number;
  mobileDelayMs?: number;
};

const STORAGE_KEY = 'exitIntentShownAt';

export default function ExitIntentPopup({
  cooldownDays = 7,
  activationDelayMs = 3000,
  mobileDelayMs = 6000,
}: ExitIntentPopupProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [mobileNudge, setMobileNudge] = useState(false);

  const cooldownMs = useMemo(() => cooldownDays * 24 * 60 * 60 * 1000, [cooldownDays]);

  const isDesktop = useMemo(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true), []);

  const eligibleToShow = useCallback(() => {
    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (!last) return true;
      const ts = Number(last);
      if (Number.isNaN(ts)) return true;
      return Date.now() - ts > cooldownMs;
    } catch {
      return true;
    }
  }, [cooldownMs]);

  const markShown = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    let removeListener: (() => void) | null = null;
    const timer = window.setTimeout(() => {
      if (!eligibleToShow()) return;
      if (isDesktop) {
        const onMouseLeave = (e: MouseEvent) => {
          if (e.clientY <= 0) {
            setOpen(true);
            markShown();
            if (removeListener) removeListener();
          }
        };
        window.addEventListener('mouseleave', onMouseLeave);
        removeListener = () => window.removeEventListener('mouseleave', onMouseLeave);
      } else {
        // Mobile: show a simplified nudge after a delay, without exit trigger
        const mobileTimer = window.setTimeout(() => {
          if (eligibleToShow()) {
            setMobileNudge(true);
            markShown();
          }
        }, mobileDelayMs);
        removeListener = () => window.clearTimeout(mobileTimer);
      }
    }, activationDelayMs);

    return () => {
      window.clearTimeout(timer);
      if (removeListener) removeListener();
    };
  }, [eligibleToShow, isDesktop, markShown, activationDelayMs, mobileDelayMs]);

  const close = useCallback(() => {
    setOpen(false);
    setMobileNudge(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  const validEmail = useMemo(() => /^(?:[a-zA-Z0-9_'^&\/+\-])+(?:\.(?:[a-zA-Z0-9_'^&\/+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i.test(email), [email]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail) {
      setError('Please enter a valid email address');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      console.log('Exit-intent lead:', { email, source: window.location.pathname, at: new Date().toISOString() });
      close();
    } finally {
      setSubmitting(false);
    }
  };

  // Simplified mobile version (small bottom card)
  if (mobileNudge && !open) {
    return (
      <div className="fixed inset-x-0 bottom-4 z-40 px-4">
        <div className="mx-auto max-w-xl rounded-2xl bg-white text-black shadow-2xl border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Before you go</div>
              <div className="text-xs text-gray-600">Get a free AI automation assessment</div>
              <form className="mt-2 flex gap-2" onSubmit={onSubmit} aria-label="Mobile lead capture">
                <input
                  type="email"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Email address"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button disabled={submitting} className="rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-3 py-2 text-white text-sm disabled:opacity-60" type="submit">
                  {submitting ? 'Sending...' : 'Get'}
                </button>
              </form>
              {error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
            </div>
            <button className="text-gray-500 hover:text-gray-700" aria-label="Close" onClick={close}>×</button>
          </div>
        </div>
      </div>
    );
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        className="relative w-full max-w-2xl mx-4 rounded-2xl bg-white text-black shadow-2xl transform transition-all animate-[fadeIn_200ms_ease-out]"
      >
        <div className="absolute right-3 top-3">
          <button aria-label="Close" onClick={close} className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100 text-gray-600">×</button>
        </div>
        <div className="h-2 rounded-t-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
        <div className="p-6 sm:p-8">
          <h3 id="exit-intent-title" className="text-2xl font-bold mb-1">Wait! Before You Go...</h3>
          <p className="text-gray-600 mb-6">See how much AI automation could save your business</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-bold">75% Time Saved</div>
              <div className="text-xs text-gray-500">Average workflow reduction</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-lg font-bold">24/7 Availability</div>
              <div className="text-xs text-gray-500">Always-on automations</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 text-lg font-bold">10x ROI Average</div>
              <div className="text-xs text-gray-500">Typical client outcomes</div>
            </div>
          </div>

          <form onSubmit={onSubmit} aria-label="Exit intent lead capture" className="flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="exit-email">Email address</label>
            <input
              id="exit-email"
              type="email"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Email address"
              aria-invalid={!!error}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-95 disabled:opacity-60"
            >
              {submitting ? 'Sending...' : 'Get Your Free AI Automation Assessment'}
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>}
          <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
