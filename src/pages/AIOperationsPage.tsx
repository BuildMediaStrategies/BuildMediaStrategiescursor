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
      title: "Lead Generation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            Lead Generation & Qualification
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            AI that captures inquiries, qualifies leads based on your criteria, and routes high-value prospects to your sales team. Respond instantly to every inquiry, filter out time-wasters, and focus only on opportunities worth pursuing.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Instant response to all inquiries 24/7</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Automatic lead scoring and qualification</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Smart routing to the right team member</span>
            </div>
          </div>
          {cardImage('pexels-3184465', 'AI chatbot interface qualifying leads on laptop screen')}
        </div>
      ),
    },
    {
      title: "HR Operations",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            HR Operations & Onboarding
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            Automate employee onboarding, time tracking, leave requests, and performance reviews. AI handles the paperwork and scheduling while HR focuses on strategic initiatives and employee development.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Automated onboarding workflows</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Smart time tracking and leave management</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Digital performance review systems</span>
            </div>
          </div>
          {cardImage('pexels-3183197', 'HR professional reviewing automated employee onboarding dashboard')}
        </div>
      ),
    },
    {
      title: "Finance & Invoicing",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            Finance & Invoicing
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            Intelligent systems that generate invoices, track payments, send reminders, and reconcile accounts automatically. Get paid faster while eliminating hours of manual bookkeeping every week.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Automated invoice generation and delivery</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Smart payment tracking and reminders</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Bank reconciliation and reporting</span>
            </div>
          </div>
          {cardImage('pexels-3184292', 'Financial dashboard showing automated invoicing and payment tracking')}
        </div>
      ),
    },
    {
      title: "Customer Support",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            Customer Support & Service
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            AI-powered support that answers common questions, resolves issues, and escalates complex cases to your team. Provide instant help around the clock without hiring more staff.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">24/7 instant responses to customer queries</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Intelligent issue resolution and troubleshooting</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Smart escalation to human agents when needed</span>
            </div>
          </div>
          {cardImage('pexels-3183150', 'Customer support AI chatbot interface on multiple devices')}
        </div>
      ),
    },
    {
      title: "Inventory & Stock",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            Inventory & Stock Management
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            Smart systems that monitor stock levels, predict demand, automate reordering, and optimize inventory across multiple locations. Never run out of hot-selling items or waste money on excess stock.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Real-time stock level monitoring</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">AI-powered demand forecasting</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Automatic reordering and supplier management</span>
            </div>
          </div>
          {cardImage('pexels-3184296', 'Inventory management dashboard showing automated stock tracking')}
        </div>
      ),
    },
    {
      title: "Project Management",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 mb-4">
            Project Management & Task Automation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-gray-700">
            AI systems that track projects, assign tasks, monitor deadlines, and flag risks before they become problems. Keep projects on time and under budget without constant manual oversight.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Intelligent task assignment and prioritization</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Automated deadline tracking and alerts</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-gray-700">Real-time progress reporting</span>
            </div>
          </div>
          {cardImage('pexels-3183150', 'Project management dashboard with automated task tracking and timelines')}
        </div>
      ),
    },
  ];

  return (
    <>
      <SEOWrapper
        title="AI Business Automation Kent | Cut Costs, Save Time"
        description="AI automation for Kent businesses. Automate customer service, scheduling, and repetitive tasks. See ROI in weeks, not months. Real automation that works 24/7."
        canonical="https://buildmediastrategies.com/ai-operations"
        keywords="AI automation Kent, business automation, AI operations Dover, workflow automation"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Operations and Automation Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "image": "https://buildmediastrategies.com/assets/bmsnewlogo%20sky.png",
            "description": "AI operations and automation services in Kent. Helping businesses across Dover, Deal, Canterbury, and Folkestone scale with intelligent systems.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dover",
              "addressRegion": "Kent",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1279",
              "longitude": "1.3134"
            },
            "url": "https://buildmediastrategies.com/ai-operations",
            "telephone": "+447915738448",
            "priceRange": "££",
            "areaServed": [
              { "@type": "City", "name": "Dover" },
              { "@type": "City", "name": "Deal" },
              { "@type": "City", "name": "Canterbury" },
              { "@type": "City", "name": "Folkestone" }
            ]
          },
          "description": "AI automation systems that handle customer service, invoicing, scheduling, and repetitive tasks 24/7. Built for Kent businesses ready to scale.",
          "areaServed": [
            { "@type": "City", "name": "Dover" },
            { "@type": "City", "name": "Deal" },
            { "@type": "City", "name": "Canterbury" },
            { "@type": "City", "name": "Folkestone" }
          ],
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        })}} />

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main id="main-content" className="bg-white min-h-screen">
        <section className="pt-32 pb-12 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-gray-900">AI Systems That</span>
              <span className="block text-sky-gradient">Work While You Sleep</span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-gray-700">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-6 leading-tight">
                What We Automate
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal max-w-2xl mx-auto text-gray-700">
                Real AI systems solving real business problems
              </p>
            </div>
            <Timeline data={aiServicesData} />
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Ready To Automate</span>
              <span className="block text-sky-gradient">Your Business Operations?</span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto text-gray-700">
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
                className="btn-gradient-outline inline-block px-8 py-4 text-sky-gradient font-sans font-medium rounded-full text-center"
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
