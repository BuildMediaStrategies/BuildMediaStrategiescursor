import { trackEvent, trackConversion } from './googleAnalytics';

export function trackFormSubmission(formId: string, details?: Record<string, any>) {
  trackEvent('form_submit', { form_id: formId, ...details });
  // Mark as conversion in GA UI. Optionally fire a dedicated conversion name:
  trackConversion(`${formId}_submit`, undefined, details);
}

export function trackToolUsage(toolId: string, details?: Record<string, any>) {
  trackEvent('tool_usage', { tool_id: toolId, ...details });
}

export function trackCTAClick(ctaId: string, details?: Record<string, any>) {
  trackEvent('cta_click', { cta_id: ctaId, ...details });
}

export function trackExitIntent(action: 'shown' | 'capture' | 'dismiss', details?: Record<string, any>) {
  trackEvent('exit_intent', { action, ...details });
  if (action === 'capture') {
    trackConversion('exit_intent_capture', undefined, details);
  }
}

export default {
  trackFormSubmission,
  trackToolUsage,
  trackCTAClick,
  trackExitIntent,
};

