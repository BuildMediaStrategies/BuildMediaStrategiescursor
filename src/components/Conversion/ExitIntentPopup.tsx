import { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
import { trackExitIntent } from '../../lib/analytics/conversions';
import { X } from 'lucide-react';
import { useFocusTrap } from '../../hooks/useFocusTrap';

const STORAGE_KEY = 'exitIntentShown';
const COOLDOWN_DAYS = 7;
const ACTIVATION_DELAY_MS = 3000;
const MIN_DESKTOP_WIDTH = 768;

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(isVisible, dialogRef);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    try { trackExitIntent('dismiss', { page: window.location.pathname }); } catch {}
  }, []);

  useEffect(() => {
    // Check localStorage for cooldown
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const sevenDaysAgo = Date.now() - (COOLDOWN_DAYS * 24 * 60 * 60 * 1000);

    if (lastShown && parseInt(lastShown) > sevenDaysAgo) {
      setHasShown(true);
      return;
    }

    // Desktop only (mobile is too intrusive)
    if (window.innerWidth < MIN_DESKTOP_WIDTH) return;

    // Delay activation by 3 seconds
    const activationTimer = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem(STORAGE_KEY, Date.now().toString());
          try { trackExitIntent('shown', { page: window.location.pathname }); } catch {}
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, ACTIVATION_DELAY_MS);

    return () => clearTimeout(activationTimer);
  }, [hasShown]);

  // ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible, handleClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Send to email service/database/CRM
    console.log('Exit intent email captured:', email);
    console.log('Timestamp:', new Date().toISOString());
    console.log('Page:', window.location.pathname);

    // Show success message
    alert('Thank you! We\'ll send you the AI automation guide shortly.');

    try { trackExitIntent('capture', { page: window.location.pathname }); } catch {}

    // Close popup
    setIsVisible(false);
    setEmail('');
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <div
        className="relative w-full max-w-lg mx-4 rounded-2xl shadow-2xl transform scale-95 animate-scaleIn bg-white"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
        tabIndex={-1}
      >
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #FF7A00 0%, #FF2A2A 18%, #FF2EC9 36%, #E11AF5 54%, #9B1FFF 72%, #2E7BFF 100%)',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <h2 id="exit-popup-title" className="text-3xl font-bold mb-3">
            <span className="text-black">Before You </span>
            <span className="text-sky-gradient">Go...</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            See how much you could save with AI automation
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 rounded-xl p-6 bg-gray-50 border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-gradient">75%</div>
              <div className="text-sm text-gray-600 mt-1">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-gradient">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-gradient">10x</div>
              <div className="text-sm text-gray-600 mt-1">ROI Average</div>
            </div>
          </div>

          <p className="text-xs text-gray-600 text-center mb-6">
            Based on our client results across Kent
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg mb-4 bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
              onFocus={(e) => {
                e.target.style.borderImage = 'linear-gradient(90deg, #FF7A00 0%, #FF2A2A 18%, #FF2EC9 36%, #E11AF5 54%, #9B1FFF 72%, #2E7BFF 100%) 1';
                e.target.style.borderImageSlice = '1';
              }}
              onBlur={(e) => {
                e.target.style.borderImage = 'none';
              }}
            />
            <button
              type="submit"
              className="w-full px-7 py-3.5 btn-gradient text-white font-sans font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Your Free AI Assessment
            </button>
          </form>

          <p className="text-xs text-gray-600 text-center mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 300ms ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 300ms ease-out;
        }
      `}</style>
    </div>
  );
}
