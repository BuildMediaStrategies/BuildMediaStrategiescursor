import { ArrowRight, Check } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';

export default function KentServicesPage() {
  const locations = [
    {
      name: 'Dover',
      description: 'Professional web design and AI automation for Dover\'s thriving business community.',
      link: '/web-design-dover'
    },
    {
      name: 'Deal',
      description: 'Modern websites and intelligent systems for Deal\'s local businesses.',
      link: '/web-design-deal'
    },
    {
      name: 'Canterbury',
      description: 'Web design and AI solutions for Canterbury\'s diverse business landscape.',
      link: '/web-design-canterbury'
    },
    {
      name: 'Folkestone',
      description: 'Fast websites and smart automation for Folkestone businesses.',
      link: '/web-design-folkestone'
    }
  ];

  const kentTestimonials = [
    {
      quote: "BuildMediaStrategies transformed our Dover business online",
      body: "Their modern approach to web design gave us a lightning-fast site that actually converts visitors into customers. Our online bookings increased 200% in the first three months.",
      name: "David Harrison",
      title: "Owner, Harrison & Co, Dover"
    },
    {
      quote: "Finally, a web partner who understands Kent businesses",
      body: "Working with BuildMediaStrategies was refreshing. They understand the local market and delivered a website that speaks directly to our Canterbury customers.",
      name: "Lisa Matthews",
      title: "Director, Matthews Property Services, Canterbury"
    },
    {
      quote: "AI automation changed how we operate in Folkestone",
      body: "The AI systems they built handle our customer inquiries 24/7 and automated our booking process. We're serving more customers with the same team size.",
      name: "James Porter",
      title: "Managing Director, Porter Marine Services, Folkestone"
    }
  ];

  return (
    <>
      <SEOWrapper
        title="Web Design & AI Automation Services Across Kent"
        description="Professional web design and AI automation for businesses in Dover, Deal, Canterbury, Folkestone, and across Kent. Modern technology, local service, proven results."
        canonical="https://buildmediastrategies.com/kent-services"
        schemaType="service"
        keywords="web design Kent, AI automation Kent, Dover Deal Canterbury Folkestone"
        ogType="website"
      />

      {/* HERO SECTION */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web Design & AI Automation
            <br />
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Across Kent
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Modern websites and intelligent automation for businesses in Dover, Deal, Canterbury, Folkestone, and throughout Kent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
            >
              Get Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 border border-gray-600 text-white font-sans font-medium rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION CARDS SECTION */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Serving Businesses Across Kent
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <a
                key={location.name}
                href={location.link}
                className="block rounded-2xl p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300 group"
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

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{location.name}</h3>
                  <p className="text-gray-300 mb-4">{location.description}</p>
                  <span className="text-white hover:text-gray-300 inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Web Design Column */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#1A1A1A' }}>
              <div className="text-4xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-white mb-6">Modern Web Design</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Lightning-fast load times</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Mobile-optimized design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Conversion-focused layouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Modern technology (React, not WordPress)</span>
                </li>
              </ul>

              <a
                href="/web-design"
                className="inline-block px-6 py-3 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Explore Web Design
              </a>
            </div>

            {/* AI Automation Column */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#1A1A1A' }}>
              <div className="text-4xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-6">AI Business Automation</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">24/7 customer response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Automated workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Time and cost savings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Real ROI tracking</span>
                </li>
              </ul>

              <a
                href="/ai-operations"
                className="inline-block px-6 py-3 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Explore AI Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Kent Businesses Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Local Knowledge, Global Technology
              </h3>
              <p className="text-gray-300">
                We understand Kent's business landscape and use world-class technology
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fast, Modern, Effective
              </h3>
              <p className="text-gray-300">
                No slow WordPress sites. Just fast, conversion-focused websites
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Real Results, Real ROI
              </h3>
              <p className="text-gray-300">
                Track everything. See real returns. Grow your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Kent Businesses Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {kentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <blockquote className="text-white text-lg font-bold mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {testimonial.body}
                </p>

                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto">
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
                Ready to Grow Your Kent Business?
              </h2>

              <p className="text-base sm:text-lg md:text-xl font-normal mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
                Get a free consultation. No pressure, just honest advice.
              </p>

              <a
                href="/contact"
                className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 border border-gray-600 text-white font-sans font-medium rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
