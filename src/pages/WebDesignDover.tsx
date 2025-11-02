import { Check, ArrowRight } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';

export default function WebDesignDover() {
  const services = [
    {
      title: 'Web Design',
      features: ['Fast, modern websites', 'Mobile-first design', 'Conversion optimization', 'Local SEO included']
    },
    {
      title: 'AI Automation',
      features: ['24/7 customer response', 'Automated scheduling', 'Workflow automation', 'Time & cost savings']
    },
    {
      title: 'E-commerce',
      features: ['Online shop setup', 'Payment integration', 'Inventory management', 'Sales tracking']
    },
    {
      title: 'Maintenance',
      features: ['Regular updates', 'Security monitoring', 'Performance optimization', 'Technical support']
    }
  ];

  const process = [
    { step: '1', title: 'Free Consultation', description: 'Understanding your business and goals' },
    { step: '2', title: 'Strategy & Planning', description: 'Custom plan for your specific needs' },
    { step: '3', title: 'Design & Development', description: 'Modern, fast, conversion-focused build' },
    { step: '4', title: 'Testing & Launch', description: 'Thorough testing, then go live' },
    { step: '5', title: 'Growth & Support', description: 'Ongoing optimization and support' }
  ];

  const faqs = [
    {
      question: 'Do you work with businesses outside Dover?',
      answer: 'Yes! While we specialize in Dover, we serve all of Kent including Deal, Canterbury, and Folkestone.'
    },
    {
      question: 'How long does a website take?',
      answer: 'Most Dover business websites are live in 3-4 weeks.'
    },
    {
      question: 'What makes you different from other Dover web designers?',
      answer: 'We use modern technology (React, not WordPress) for faster, more reliable websites. Plus AI automation that our competitors don\'t offer.'
    }
  ];

  return (
    <>
      <SEOWrapper
        title="Web Design Dover Kent | Fast, Modern Websites"
        description="Professional web design services for Dover businesses. Modern technology, fast load times, real results."
        canonical="https://buildmediastrategies.com/web-design-dover"
        keywords="web design Dover, Dover web designer, websites Dover Kent, Dover business websites"
        schemaType="service"
        ogType="website"
      />

      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        {/* NAVIGATION */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
          </a>
          <a
            href="/kent-services"
            className="px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 text-sm"
          >
            Kent Services
          </a>
        </nav>

        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web Design{' '}
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Dover
              </span>{' '}
              Kent | Fast, Modern Websites
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional web design services for Dover businesses. Modern technology, fast load times, real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
              >
                Get Free Quote
              </a>
              <a
                href="/portfolio"
                className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 border border-gray-600 text-white font-sans font-medium rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* LOCAL CONTEXT SECTION */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#1A1A1A' }}>
              <h2 className="text-3xl font-bold text-white mb-6">
                Web Design for Dover Businesses
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dover's strategic location and thriving port economy create unique opportunities for businesses. Whether you're in logistics, tourism, or retail, your website needs to work as hard as you do. We build fast, mobile-optimized sites that convert Dover's local and international visitors into customers.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES OFFERED */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Services for Dover Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-3">Local Knowledge</h3>
                <p className="text-gray-300">
                  We understand Dover's business landscape and what local customers expect.
                </p>
              </div>
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Modern Technology</h3>
                <p className="text-gray-300">
                  React and modern frameworks. Not slow WordPress sites that frustrate visitors.
                </p>
              </div>
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Real metrics. Real ROI. Real business growth for Dover companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              How We Work With Dover Businesses
            </h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start rounded-2xl p-6"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Also Serving
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/web-design-deal"
                className="rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 group"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <span className="text-white group-hover:text-gray-300">Deal</span>
              </a>
              <a
                href="/web-design-canterbury"
                className="rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 group"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <span className="text-white group-hover:text-gray-300">Canterbury</span>
              </a>
              <a
                href="/web-design-folkestone"
                className="rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 group"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <span className="text-white group-hover:text-gray-300">Folkestone</span>
              </a>
              <a
                href="/kent-services"
                className="rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 group"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <span className="text-white group-hover:text-gray-300">All Kent</span>
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-2xl sm:rounded-3xl py-12 sm:py-16 px-6 sm:px-8 text-center relative overflow-hidden"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                    linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                  `,
                  backgroundSize: '20px 20px'
                }}
                aria-hidden="true"
              />

              {/* Grey fade on bottom right */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at bottom right, rgba(128,128,128,0.3) 0%, transparent 70%)'
                }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">
                  Ready to Grow Your Dover Business?
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-normal mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
                  Free consultation. No pressure. Just honest advice about what will work for your business.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95 mb-4"
                >
                  Get Started Today
                </a>
                <p className="text-sm text-gray-400 mt-4">
                  Serving Dover and all of Kent
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
