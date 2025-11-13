import { Zap, Target, Smartphone, Cpu, Shield, TrendingUp } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import { BentoCard, BentoGrid } from '../components/ui/bento-grid';
import { PexelsImage } from '../components/media/PexelsImage';

export default function WebDesignPage() {
  const features = [
    {
      Icon: Target,
      name: "Conversion Focused",
      description: "Every element designed to turn visitors into customers. Strategic placement and intuitive navigation that drives action.",
      href: "/contact",
      cta: "See Conversion Playbook",
      background: (
        <PexelsImage
          id="pexels-326503"
          alt="Website conversion analytics"
          loading="lazy"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Zap,
      name: "Lightning Fast",
      description: "Sub-2-second load times guaranteed. Speed optimization built into every stage of development.",
      href: "/contact",
      cta: "Review Speed Optimisation",
      background: (
        <PexelsImage
          id="pexels-270404"
          alt="Fast website performance metrics"
          loading="lazy"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Smartphone,
      name: "Mobile First",
      description: "Perfect experience on every device. Responsive design that works flawlessly everywhere.",
      href: "/contact",
      cta: "Explore Mobile Experience",
      background: (
        <PexelsImage
          id="pexels-57690"
          alt="Mobile responsive website design"
          loading="lazy"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Cpu,
      name: "AI Integration",
      description: "Smart systems that qualify leads, answer questions, and work 24/7.",
      href: "/contact",
      cta: "Discover AI Integration",
      background: (
        <PexelsImage
          id="pexels-3861969"
          alt="AI chatbot integration on website"
          loading="lazy"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Shield,
      name: "SEO Optimized",
      description: "Built-in best practices. Structured data, meta tags, and technical optimization included.",
      href: "/contact",
      cta: "Check SEO Blueprint",
      background: (
        <PexelsImage
          id="pexels-270637"
          alt="SEO optimization dashboard"
          loading="lazy"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <>
      <SEOWrapper
        title="Modern Web Design Kent | Fast, Conversion-Focused Websites"
        description="Professional web design services across Kent. We build lightning-fast websites that actually convert. Modern React development, not WordPress. Serving Dover, Deal, Canterbury, Folkestone."
        canonical="https://buildmediastrategies.com/web-design"
        keywords="web design Kent, modern websites, fast web design, React websites Dover Deal Canterbury"
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
            "description": "Professional web design and development services in Kent. Creating custom websites for businesses across Dover, Deal, Canterbury, and Folkestone.",
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
          "description": "Custom web design services that convert visitors into customers. High-performance websites optimized for speed, conversions, and growth.",
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
        <section className="pt-32 pb-16 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
              Websites Built To
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Convert Visitors
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-10" style={{ color: '#BBBBBB' }}>
              Fast, mobile-first sites that turn browsers into buyers and drive measurable business growth.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-sans font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Start Your Project
            </a>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                What You Get
              </h2>
              <p className="text-base sm:text-lg font-sans font-normal max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
                Complete web design solutions that deliver results
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11 border-t border-gray-800" aria-labelledby="process-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-12 text-center leading-tight">
              How We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-white mb-2">01</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Discovery & Strategy
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Study your business and audience. Map the customer journey and design a site that guides visitors toward conversion.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-white mb-2">02</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Design & Prototype
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Custom mockups focused on clarity and conversions. You approve designs before we write any code.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-white mb-2">03</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Development & Testing
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Clean, scalable code built with modern frameworks. Rigorous testing across devices and browsers.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <div className="text-3xl font-sans font-bold text-white mb-2">04</div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Launch & Optimize
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Smooth deployment with zero downtime. Continuous optimization based on real user behavior.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Ready To Build A Website
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                That Actually Works?
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
              Let's create a fast, mobile-first site that converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-sans font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="inline-block px-8 py-4 border border-white text-white font-sans font-medium hover:bg-white hover:text-black transition-colors text-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
