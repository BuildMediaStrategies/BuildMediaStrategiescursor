import SEOWrapper from '../components/SEO/SEOWrapper';
import { Timeline } from '../components/ui/timeline';
import { PexelsImage } from '../components/media/PexelsImage';

export default function AIOperationsPage() {
  const cardImage = (id: string, alt: string) => (
    <PexelsImage
      id={id}
      alt={alt}
      loading="lazy"
      imgClassName="w-full rounded-lg object-cover h-48 md:h-64 lg:h-80 shadow-lg"
    />
  );

  const aiServicesData = [
    {
      title: "Full-stack Development",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Full-stack Development
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            AI that captures inquiries, qualifies leads based on your criteria, and routes high-value prospects to your sales team. Respond instantly to every inquiry, filter out time-wasters, and focus only on opportunities worth pursuing.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Instant response to all inquiries 24/7</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Automatic lead scoring and qualification</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Smart routing to the right team member</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-web-image.avif" type="image/avif" />
            <source srcSet="/assets/bms-web-image.webp" type="image/webp" />
            <img src="/assets/bms-web-image.png" alt="Full-stack development interface" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Mobile App Development
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Automate employee onboarding, time tracking, leave requests, and performance reviews. AI handles the paperwork and scheduling while HR focuses on strategic initiatives and employee development.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Automated onboarding workflows</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Smart time tracking and leave management</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Digital performance review systems</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-mobile-img.avif" type="image/avif" />
            <source srcSet="/assets/bms-mobile-img.webp" type="image/webp" />
            <img src="/assets/bms-mobile-img.png" alt="Mobile app development interface" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
    {
      title: "Lead Capture Systems",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Lead Capture Systems
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Intelligent systems that generate invoices, track payments, send reminders, and reconcile accounts automatically. Get paid faster while eliminating hours of manual bookkeeping every week.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Automated invoice generation and delivery</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Smart payment tracking and reminders</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Bank reconciliation and reporting</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-lead-img.avif" type="image/avif" />
            <source srcSet="/assets/bms-lead-img.webp" type="image/webp" />
            <img src="/assets/bms-lead-img.png" alt="Lead capture system dashboard" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
    {
      title: "LinkedIn Lead Generation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            LinkedIn Lead Generation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            AI-powered support that answers common questions, resolves issues, and escalates complex cases to your team. Provide instant help around the clock without hiring more staff.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">24/7 instant responses to customer queries</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Intelligent issue resolution and troubleshooting</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Smart escalation to human agents when needed</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-linkedin-img.avif" type="image/avif" />
            <source srcSet="/assets/bms-linkedin-img.webp" type="image/webp" />
            <img src="/assets/bms-linkedin-img.png" alt="LinkedIn lead generation interface" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
    {
      title: "Customer Support Automation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Customer Support Automation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Smart systems that monitor stock levels, predict demand, automate reordering, and optimize inventory across multiple locations. Never run out of hot-selling items or waste money on excess stock.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Real-time stock level monitoring</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">AI-powered demand forecasting</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Automatic reordering and supplier management</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-chatbot-img.avif" type="image/avif" />
            <source srcSet="/assets/bms-chatbot-img.webp" type="image/webp" />
            <img src="/assets/bms-chatbot-img.png" alt="Customer support automation chatbot" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
    {
      title: "Call Automation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Call Automation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            AI systems that track projects, assign tasks, monitor deadlines, and flag risks before they become problems. Keep projects on time and under budget without constant manual oversight.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Intelligent task assignment and prioritization</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Automated deadline tracking and alerts</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Real-time progress reporting</span>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/bms-call-img.avif" type="image/avif" />
            <source srcSet="/assets/bms-call-img.webp" type="image/webp" />
            <img src="/assets/bms-call-img.png" alt="Call automation system interface" className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg" loading="lazy" decoding="async" fetchpriority="low" width="800" height="600" />
          </picture>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEOWrapper
        title="AI Automation Kent | AI Systems Dover Deal Canterbury"
        description="AI Automation Kent for Dover, Deal, Canterbury & Folkestone businesses. AI systems that cut costs and scale operations 24/7. Automate tasks, not people. Get started today."
        canonical="https://buildmediastrategies.com/ai-operations"
        keywords="AI automation Kent, AI automation Dover, AI operations Kent, AI systems Kent, AI automation agency Kent, business automation Dover Deal Canterbury"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Operations and Automation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BuildMediaStrategies",
              "image": "https://buildmediastrategies.com/assets/bmsnewlogo%20sky.png",
              "description":
                "AI operations and automation services in Kent. Helping businesses across Dover, Deal, Canterbury, and Folkestone scale with intelligent systems.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dover",
                "addressRegion": "Kent",
                "addressCountry": "GB",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.1279",
                "longitude": "1.3134",
              },
              "url": "https://buildmediastrategies.com/ai-operations",
              "telephone": "+447915738448",
              "priceRange": "££",
              "areaServed": [
                { "@type": "City", "name": "Dover" },
                { "@type": "City", "name": "Deal" },
                { "@type": "City", "name": "Canterbury" },
                { "@type": "City", "name": "Folkestone" },
              ],
            },
            "description":
              "AI automation systems that handle customer service, invoicing, scheduling, and repetitive tasks 24/7. Built for Kent businesses ready to scale.",
            "areaServed": [
              { "@type": "City", "name": "Dover" },
              { "@type": "City", "name": "Deal" },
              { "@type": "City", "name": "Canterbury" },
              { "@type": "City", "name": "Folkestone" },
            ],
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
            },
          }),
        }}
      />

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main id="main-content" className="bg-white min-h-screen">
        <section className="pt-32 pb-12 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight"
            >
              <span className="block text-sky-gradient">AI Automation Kent</span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-4 text-black">
              AI automation services for businesses across Dover, Deal, Canterbury, and Folkestone. We build intelligent AI systems that automate repetitive tasks, cut operational costs, and scale your business operations 24/7. Our Kent-based team specializes in AI automation for customer service, scheduling, lead qualification, and workflow optimization. Transform your business with AI systems that deliver measurable results.
            </p>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-black">
              Automate customer service, lead qualification, invoicing, and scheduling. Built for Kent businesses ready to scale without hiring more staff.
            </p>
            <a
              href="/contact"
              className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
            >
              Book a Consultation
            </a>
          </div>
        </section>

        <section className="py-16 px-5 lg:px-11">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-sky-gradient mb-6 leading-tight">
                AI Systems for Dover, Deal, Canterbury & Folkestone
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal max-w-2xl mx-auto text-black">
                Real AI systems solving real business problems
              </p>
            </div>
            <Timeline data={aiServicesData} />
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Ready To Automate</span>
              <span className="block text-sky-gradient">Your Business Operations?</span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto text-black">
              Start with one workflow. Scale from there. See ROI in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
              >
                Book a Consultation
              </a>
              <a
                href="/portfolio"
                className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
