import { useState, useEffect, useCallback, FormEvent } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'exitIntentShown';
const COOLDOWN_DAYS = 7;
const ACTIVATION_DELAY_MS = 3000;
const MIN_DESKTOP_WIDTH = 768;

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

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
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

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
        className="relative w-full max-w-lg mx-4 rounded-2xl shadow-2xl transform scale-95 animate-scaleIn"
        style={{ backgroundColor: '#1A1A1A', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5 rounded-2xl pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
            `,
            backgroundSize: '20px 20px'
          }}
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <h2 id="exit-popup-title" className="text-3xl font-bold text-white mb-3">
            Before You{' '}
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Go...
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            See how much you could save with AI automation
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 rounded-xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">75%</div>
              <div className="text-sm text-gray-400 mt-1">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10x</div>
              <div className="text-sm text-gray-400 mt-1">ROI Average</div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-6">
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
              className="w-full px-4 py-3 rounded-lg mb-4 bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full px-7 py-3.5 border border-gray-600 text-white font-sans font-medium rounded-full hover:border-gray-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Your Free AI Assessment
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-3">
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
