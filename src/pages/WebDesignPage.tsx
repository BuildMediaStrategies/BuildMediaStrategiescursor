import SEOWrapper from '../components/SEO/SEOWrapper';
import { Timeline } from '../components/ui/timeline';

export default function WebDesignPage() {
  const webDesignServices = [
    {
      title: 'Full-stack Web Development',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Custom builds that connect marketing sites to CRMs, automations, and analytics without duct tape.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">React, Vite, and Supabase stacks tuned for your workflow.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Speed + accessibility checks baked into every deploy.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Conversion Optimised UI',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Layouts scripted to put proof, offer clarity, and CTAs exactly where visitors make decisions.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Hero copy frameworks that explain your offer in one scroll.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Micro-interactions that move visitors toward calls or demos.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Mobile-First Responsive Design',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Every screen is tested on phones, tablets, and desktops with the same polish as the desktop hero.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Touch-friendly spacing and inputs across the site.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Type scales that stay readable without blowing up layouts.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Raw Code / Not Template-Based',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Zero theme bloat, just clean code that is easy to extend and doesn’t carry unused scripts.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Components built from scratch for your funnels.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">No template overrides or mystery CSS slowing you down.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'SEO & Lighthouse 100/100 Builds',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Technical SEO, schema, and caching live inside the sprint so you don’t need a separate retainer.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Structured data + metadata wired up before handoff.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Performance budgets enforced to protect Lighthouse scores.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Rapid Deployment (2–3 Days)',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Tight scopes and live collaboration get your build live without dragging over multiple weeks.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Sprints mapped to launch milestones from day one.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Content and assets slotted in as we ship each section.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Enterprise-Grade DX & UX',
      content: (
        <div>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Developer experience and user experience stay aligned so anyone can extend the project later.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Design system tokens synced with code for easy scaling.</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Accessibility and QA runs baked into every iteration.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEOWrapper
        title="Web Design Dover | Fast Websites That Convert | BuildMediaStrategies"
        description="Web design in Dover for businesses across Kent, with fast, conversion-focused websites that turn visitors into customers."
        canonical="https://buildmediastrategies.com/web-design"
        keywords="web design Dover, web design in Dover, Dover web design agency, Kent web design"
      />
      {/* Schema structured data - keeping for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Design Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "BuildMediaStrategies",
            "image": "https://buildmediastrategies.com/assets/bmsnewlogo%20sky.png",
            "description": "Web design in Dover delivered for Kent businesses that need fast, conversion-focused websites.",
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
            "url": "https://buildmediastrategies.com/web-design",
            "telephone": "+447915738448",
            "priceRange": "££",
            "areaServed": [
              { "@type": "City", "name": "Dover" },
              { "@type": "City", "name": "Deal" },
              { "@type": "City", "name": "Canterbury" },
              { "@type": "City", "name": "Folkestone" }
            ]
          },
          "description": "Web design in Dover for businesses across Kent, delivering fast builds that convert visitors into customers.",
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
        <section className="pt-32 pb-16 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center rounded-full px-4 py-1 bg-sky-gradient text-xs sm:text-sm font-medium text-white shadow-md shadow-[rgba(0,0,0,0.1)] mb-3">
              Free first-year hosting included
            </div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-sky-gradient">Web Design Dover That Turns Clicks Into Clients</span>
            </h1>
            <p className="text-base sm:text-lg font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-black">
              We design fast, conversion-focused websites for Dover businesses and teams across Kent, pairing crisp storytelling with mobile-first builds so every visit loads quickly, ranks well, and turns into an enquiry.
            </p>
            <a
              href="/contact"
              className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
            >
              Start Your Project
            </a>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11 border-t border-gray-200" aria-labelledby="web-design-services-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="web-design-services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-sky-gradient mb-6 leading-tight">
                Dover Web Design Sprints In Motion
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal max-w-2xl mx-auto text-black">
                Scroll through every layer we run for modern builds. It is the exact same animation from AI Ops, now focused on web services.
              </p>
            </div>
            <Timeline data={webDesignServices} />
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11 border-t border-gray-200" aria-labelledby="process-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-sky-gradient mb-12 text-center leading-tight">
              How We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-sky-gradient pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-sky-gradient mb-2">01</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-sky-gradient mb-4">
                  Discovery & Strategy
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed text-black">
                  We clarify your offer, audience, and goals through a fast discovery call so every screen speaks directly to the right buyer.
                </p>
              </div>

              <div className="border-l-2 border-sky-gradient pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-sky-gradient mb-2">02</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-sky-gradient mb-4">
                  Design & Prototype
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed text-black">
                  We translate strategy into clean layouts, persuasive copy, and interaction notes. Nothing moves forward until you're confident.
                </p>
              </div>

              <div className="border-l-2 border-sky-gradient pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-sky-gradient mb-2">03</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-sky-gradient mb-4">
                  Development & Testing
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed text-black">
                  We code the approved designs, wire up forms and automations, and stress test speed on every device.
                </p>
              </div>

              <div className="border-l-2 border-sky-gradient pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-sky-gradient mb-2">04</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-sky-gradient mb-4">
                  Launch & Optimize
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed text-black">
                  Launch day includes CMS training, analytics checks, and a punch list for future optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Ready To Build A Website</span>
              <span className="block text-sky-gradient">
                That Actually Works?
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto text-black">
              Ready for a site that loads in a blink and sells your offer clearly? We’ll handle the heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
              >
                Plan Your Build
              </a>
              <a
                href="/portfolio"
                className="btn-gradient inline-block px-8 py-4 text-white font-sans font-medium rounded-full text-center"
              >
                View Recent Sites
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
