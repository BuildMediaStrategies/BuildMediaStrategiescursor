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
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Lead Generation & Qualification
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            AI that captures inquiries, qualifies leads based on your criteria, and routes high-value prospects to your sales team. Respond instantly to every inquiry, filter out time-wasters, and focus only on opportunities worth pursuing.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Instant response to all inquiries 24/7</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automatic lead scoring and qualification</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Smart routing to the right team member</span>
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
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            HR Operations & Onboarding
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            Automate employee onboarding, time tracking, leave requests, and performance reviews. AI handles the paperwork and scheduling while HR focuses on strategic initiatives and employee development.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated onboarding workflows</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Smart time tracking and leave management</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Digital performance review systems</span>
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
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Finance & Invoicing
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            Intelligent systems that generate invoices, track payments, send reminders, and reconcile accounts automatically. Get paid faster while eliminating hours of manual bookkeeping every week.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automatic invoice generation and delivery</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Payment tracking and reminders</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated account reconciliation</span>
            </div>
          </div>
          {cardImage('pexels-6863332', 'Automated finance dashboard showing invoices and payment tracking')}
        </div>
      ),
    },
    {
      title: "Social Media",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Social Media Management
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            AI-powered content creation, scheduling, and engagement monitoring. Maintain consistent social presence without dedicating staff hours to posting and responding to comments.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>AI content generation and scheduling</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated engagement monitoring</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Smart response suggestions</span>
            </div>
          </div>
          {cardImage('pexels-267350', 'Social media management dashboard showing scheduled posts and analytics')}
        </div>
      ),
    },
    {
      title: "Call Handling",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Call Handling & Scheduling
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            AI phone systems that answer calls, qualify inquiries, book appointments, and handle routine questions. Never miss a lead because someone called after hours or during busy periods.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>24/7 call answering and routing</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automatic appointment scheduling</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Intelligent call qualification</span>
            </div>
          </div>
          {cardImage('pexels-7688336', 'Professional on phone call with AI assistance system')}
        </div>
      ),
    },
    {
      title: "Customer Support",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Customer Support
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            Smart chatbots and email automation that resolve common issues instantly. Route complex problems to human staff while handling routine inquiries automatically. Faster resolution, happier customers.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Instant resolution of common issues</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Smart ticket routing and prioritization</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated email responses</span>
            </div>
          </div>
          {cardImage('pexels-5698853', 'Customer support agent using AI-powered helpdesk system')}
        </div>
      ),
    },
    {
      title: "Recruitment",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Recruitment Automation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            AI that screens resumes, schedules interviews, and manages candidate communication. Identify top talent faster while dramatically reducing time spent on manual candidate evaluation.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated resume screening and ranking</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Smart interview scheduling</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Candidate communication automation</span>
            </div>
          </div>
          {cardImage('pexels-5668473', 'HR manager reviewing AI-filtered candidate profiles on screen')}
        </div>
      ),
    },
    {
      title: "Project Management",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-4">
            Project Management
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6" style={{ color: '#BBBBBB' }}>
            Automated task assignment, progress tracking, deadline reminders, and status reporting. AI keeps projects moving forward by handling coordination work that usually requires constant manual oversight.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Intelligent task assignment and tracking</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base mb-2">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Automated deadline reminders</span>
            </div>
            <div className="flex gap-2 items-start text-white text-sm sm:text-base">
              <span className="text-white">•</span>
              <span style={{ color: '#BBBBBB' }}>Real-time progress reporting</span>
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
      {/* Schema structured data - keeping for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Operations and Automation Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "image": "https://buildmediastrategies.com/logo.png",
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
          "description": "Intelligent AI systems that automate workflows, eliminate bottlenecks, and scale operations. Custom automation solutions that multiply team output without adding headcount.",
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

      <main id="main-content" className="bg-black min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <section className="pt-32 pb-12 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
              AI Systems That
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Multiply Output
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-10" style={{ color: '#BBBBBB' }}>
              Stop spending hours on repetitive tasks. Intelligent automation that handles the work your team hates, so they can focus on what actually drives revenue.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-sans font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Explore AI Solutions
            </a>
          </div>
        </section>

        <section className="py-8 lg:py-12 px-5 lg:px-11 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white mb-6 leading-tight">
              The Problem
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-8" style={{ color: '#BBBBBB' }}>
              Your team is drowning in administrative work. Hours lost to data entry, lead qualification, scheduling, and repetitive communication. Meanwhile, the work that actually grows your business gets pushed aside.
            </p>
            <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
              Hiring more people costs money and creates management overhead. AI automation multiplies your existing team's output without the expense or complexity of growing headcount.
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12 px-5 lg:px-11 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              What We Automate
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal" style={{ color: '#BBBBBB' }}>
              Custom AI systems built for your specific workflows
            </p>
          </div>
        </section>

        <Timeline data={aiServicesData} />

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Ready To Scale
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Without Hiring?
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
              Let's build AI systems that multiply your team's output and free them to focus on high-value work that actually grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-sans font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Book a Consultation
              </a>
              <a
                href="/portfolio"
                className="inline-block px-8 py-4 border border-white text-white font-sans font-medium hover:bg-white hover:text-black transition-colors text-center"
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
