import { useState, useEffect, FormEvent } from 'react';
import { trackFormSubmission } from '../lib/analytics/conversions';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    gdprConsent: false,
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formLoadTime] = useState(Date.now());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.honeypot) {
      setError('Invalid submission detected.');
      return;
    }

    const timeElapsed = Date.now() - formLoadTime;
    if (timeElapsed < 2000) {
      setError('Please take your time filling out the form.');
      return;
    }

    if (!formData.gdprConsent) {
      setError('Please accept the privacy policy to continue.');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      try {
        trackFormSubmission('contact', { page: window.location.pathname });
      } catch {}
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <SEO
          title="Contact Us | Free Consultation | Build Media Strategies Kent"
          description="Get a free consultation for your web design or AI automation project. Serving businesses across Dover, Deal, Canterbury, and Folkestone."
          canonical="https://buildmediastrategies.com/contact"
          keywords="contact web designer Kent, free consultation, web design quote Dover"
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <main id="main-content" className="bg-white min-h-screen pt-24" >
          <div className="max-w-2xl mx-auto px-5 py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-gradient rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4">
                Message Received
              </h1>
              <p className="text-lg font-sans font-normal mb-8 leading-relaxed text-gray-700">
                Thanks for reaching out. We will get back to you within one business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="btn-gradient px-8 py-3 text-white font-sans font-medium rounded-full text-center"
                >
                  Back to Home
                </a>
                <a
                  href="/portfolio"
                  className="btn-gradient px-8 py-3 text-white font-sans font-medium rounded-full text-center"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact Us | Free Consultation | Build Media Strategies Kent"
        description="Get a free consultation for your web design or AI automation project. Serving businesses across Dover, Deal, Canterbury, and Folkestone."
        canonical="https://buildmediastrategies.com/contact"
        keywords="contact web designer Kent, free consultation, web design quote Dover"
      />
      <main className="bg-white min-h-screen pt-24" >
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900">Let's Build Something</span>
              <span className="block text-sky-gradient">Exceptional Together</span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-2xl mx-auto text-gray-700">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

              <div className="group">
                <label htmlFor="name" className="block text-gray-900 font-sans font-medium mb-3 text-sm tracking-wide uppercase">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-transparent text-gray-900 border-b-2 border-gray-300 focus:border-sky-gradient focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-gray-900 font-sans font-medium mb-3 text-sm tracking-wide uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-transparent text-gray-900 border-b-2 border-gray-300 focus:border-sky-gradient focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="group">
                  <label htmlFor="phone" className="block text-gray-900 font-sans font-medium mb-3 text-sm tracking-wide uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-transparent text-gray-900 border-b-2 border-gray-300 focus:border-sky-gradient focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div className="group">
                  <label htmlFor="company" className="block text-gray-900 font-sans font-medium mb-3 text-sm tracking-wide uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 bg-transparent text-gray-900 border-b-2 border-gray-300 focus:border-sky-gradient focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-gray-900 font-sans font-medium mb-3 text-sm tracking-wide uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-transparent text-gray-900 border-b-2 border-gray-300 focus:border-sky-gradient focus:outline-none transition-all duration-300 text-lg resize-none placeholder-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex items-start gap-4 pt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  checked={formData.gdprConsent}
                  onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                  className="mt-1.5 w-5 h-5 bg-transparent border-2 border-gray-400 rounded focus:ring-2 focus:ring-sky-gradient focus:border-sky-gradient accent-sky-gradient cursor-pointer flex-shrink-0"
                />
                <label htmlFor="gdpr" className="text-sm sm:text-base font-sans font-normal leading-relaxed cursor-pointer text-gray-700">
                  I consent to BuildMediaStrategies collecting and storing my personal information for the purpose of responding to my inquiry. By submitting this form, you agree to our <a href="#" className="text-sky-gradient underline hover:opacity-80 focus:outline focus:outline-2 focus:outline-sky-gradient">Privacy Policy</a>. *
                </label>
              </div>

              {error && (
                <div className="p-4 border border-red-500 bg-red-50 rounded-lg">
                  <p className="text-sm font-sans font-normal text-red-700">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient w-full px-10 py-5 text-white font-sans font-bold text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-3 sm:mb-4">
                Find Us
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal text-gray-700">
                Serving businesses across Kent and beyond
              </p>
            </div>
            <div className="relative w-full h-96 sm:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-gray-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-sky-gradient flex items-center justify-center border-2 border-white shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-xl sm:text-2xl font-sans font-bold text-gray-900 mb-2">Kent, United Kingdom</p>
                  <p className="text-sm sm:text-base font-sans font-normal text-gray-700">Dover • Deal • Canterbury • Folkestone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
