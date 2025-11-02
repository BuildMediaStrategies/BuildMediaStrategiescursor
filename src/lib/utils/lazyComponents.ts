import { lazy } from 'react';

/**
 * Lazy load non-critical components for better initial page load performance
 * These components are below the fold and can be loaded on demand
 */

// Below-the-fold sections
export const LazyTestimonialsSection = lazy(() => import('../../components/TestimonialsSection'));
export const LazyFAQSection = lazy(() => import('../../components/FAQSection'));
export const LazyGoogleReviews = lazy(() => import('../../components/GoogleReviews'));
export const LazyCTABanner = lazy(() => import('../../components/CTABanner'));
export const LazyEffortlessSecuritySection = lazy(() => import('../../components/EffortlessSecuritySection'));
