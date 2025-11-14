import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'bms_cookie_consent';

export type CookieConsentStatus = 'accepted' | 'declined' | null;

export function useCookieConsent() {
  const [status, setStatus] = useState<CookieConsentStatus>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'declined') {
        setStatus(stored);
      }
    } catch {
      // Ignore storage access issues (e.g., disabled cookies)
    } finally {
      setInitialized(true);
    }
  }, []);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // Best effort storage
    }
    setStatus('accepted');
  }, []);

  const decline = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {
      // Best effort storage
    }
    setStatus('declined');
  }, []);

  return {
    status,
    initialized,
    accept,
    decline,
  };
}

export default useCookieConsent;
