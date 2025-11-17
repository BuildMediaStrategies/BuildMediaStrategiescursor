import SEOWrapper from '../components/SEO/SEOWrapper';
import { Timeline } from '../components/ui/timeline';

const AI_SECTION_NOTICE = 'AI systems can generate automated outputs. Review everything before acting on recommendations.';

export default function AIOperationsPage() {

  const aiServicesData = [
    {
      title: "Full-stack Development",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Turn every inbound form, chat, or email into a qualified opportunity. We capture the context, score the lead, and send only high-value prospects to your team with next steps.
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
            <img
              src="/assets/bms-web-image.png"
              alt="Full-stack development interface"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Give new staff a seamless start while admin runs itself. Automations guide onboarding, approvals, and reviews so HR can focus on coaching instead of paperwork.
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
            <img
              src="/assets/bms-mobile-img.png"
              alt="Mobile app development interface"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
    {
      title: "Lead Capture Systems",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Stop chasing invoices or reconciling receipts at night. These workflows raise bills, follow up politely, and sync everything with your accounts package.
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
            <img
              src="/assets/bms-lead-img.png"
              alt="Lead capture system dashboard"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
    {
      title: "LinkedIn Lead Generation",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Keep your pipeline warm on autopilot. AI sequences break the ice, nurture leads, and flag hot prospects for a personal follow-up at the perfect moment.
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
            <img
              src="/assets/bms-linkedin-img.png"
              alt="LinkedIn lead generation interface"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
    {
      title: "Customer Support Automation",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Let support tickets auto-triage before anyone opens the inbox. Answers go out instantly, and nuanced cases arrive with context so your team can jump straight to the solution.
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
            <img
              src="/assets/bms-chatbot-img.png"
              alt="Customer support automation chatbot"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
    {
      title: "Call Automation",
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Keep phones ringing without tying up staff. These bots answer, qualify, and route callers, logging every detail so humans step in only when needed.
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
            <img
              src="/assets/bms-call-img.png"
              alt="Call automation system interface"
              className="w-full rounded-lg object-contain h-48 md:h-64 lg:h-80 shadow-lg"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEOWrapper
        title="AI Automation Dover, Canterbury & Folkestone | BuildMediaStrategies"
        description="AI automation for Dover, Canterbury, Folkestone, and wider Kent so local teams launch intelligent systems that handle leads, admin, and support."
        canonical="https://buildmediastrategies.com/ai-operations"
        keywords="AI automation Dover, AI automation Canterbury, AI automation Folkestone, AI systems Kent"
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
                "AI automation services built in Dover for Kent businesses in Deal, Canterbury, and Folkestone that need done-for-you intelligent systems.",
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
              "AI automation for Kent businesses across Dover, Deal, Canterbury, and Folkestone to handle customer service, finance, and operations 24/7.",
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
        <section
          className="pt-32 pb-12 px-5 lg:px-11"
          aria-labelledby="hero-heading"
          aria-description={AI_SECTION_NOTICE}
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center rounded-full px-4 py-1 bg-sky-gradient text-xs sm:text-sm font-medium text-white shadow-md shadow-[rgba(0,0,0,0.1)] mb-3">
              Done-for-you AI systems, built in weeks
            </div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight"
            >
              <span className="block text-sky-gradient">AI Automation for Dover, Canterbury &amp; Folkestone Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-4 text-black">
              We build AI workflows that reply instantly, score leads, and sync updates for local teams across Dover, Canterbury, Folkestone, and wider Kent so operations, support, and sales keep moving without extra headcount.
            </p>
            <a
              href="/contact"
              className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
            >
              Book a Consultation
            </a>
          </div>
        </section>

        <section className="py-16 px-5 lg:px-11" aria-description={AI_SECTION_NOTICE}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-sky-gradient mb-6 leading-tight">
                AI Systems That Handle the Busywork
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal max-w-2xl mx-auto text-black">
                Scroll through the playbook to see how each layer takes admin off your plate.
              </p>
            </div>
            <Timeline data={aiServicesData} />
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-white" aria-description={AI_SECTION_NOTICE}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Ready To Automate</span>
              <span className="block text-sky-gradient">Your Business Operations?</span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto text-black">
              Start with one workflow, prove the ROI, then automate the rest. We build, monitor, and keep improving every play.
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
