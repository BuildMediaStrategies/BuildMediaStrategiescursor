import SEOWrapper from '../components/SEO/SEOWrapper';
import { PexelsImage } from '../components/media/PexelsImage';

export default function IndustriesPage() {
  return (
    <>
      <SEOWrapper
        title="Industries We Serve | Web Design & AI Across Kent"
        description="Specialized web design and AI automation for retail, professional services, tourism, and hospitality businesses across Kent."
        canonical="https://buildmediastrategies.com/industries"
        keywords="Kent business websites, industry-specific web design, Kent AI solutions"
      />

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <main id="main-content" className="bg-black min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <section className="pt-32 pb-20 px-5 lg:px-11" aria-labelledby="hero-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
              We Build For
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Construction & Trades
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed max-w-3xl mx-auto" style={{ color: '#BBBBBB' }}>
              Your business is built on reputation and results. Your digital presence should be too. We create websites that win contracts and AI systems that free you from admin work.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                  Win More Contracts
                </h2>
                <p className="text-base sm:text-lg font-sans font-normal mb-6 leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Your website is often the first impression potential clients get. A professional, fast-loading site builds trust instantly and positions you as the obvious choice.
                </p>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  We design sites that showcase your work, explain your process clearly, and make it effortless for clients to get in touch. Every element is built to convert visitors into inquiries.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <PexelsImage
                  id="pexels-1216589"
                  alt="Construction workers at building site reviewing project plans"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  width={1400}
                  height={933}
                  imgClassName="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div>
                <PexelsImage
                  id="pexels-257736"
                  alt="Electrician working on electrical panel installation"
                  loading="lazy"
                  imgClassName="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                  Cut Admin Time
                </h2>
                <p className="text-base sm:text-lg font-sans font-normal mb-6 leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Stop spending evenings on quotes, invoices, and follow-ups. Our AI systems handle the repetitive work while you focus on the jobs that actually generate revenue.
                </p>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Automated quote generation, intelligent lead qualification, and streamlined scheduling. Your business runs smoother without requiring you to hire additional staff.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                  Scale Without Hiring
                </h2>
                <p className="text-base sm:text-lg font-sans font-normal mb-6 leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Take on more work without growing your headcount. Smart systems handle increased volume while maintaining the quality and professionalism your clients expect.
                </p>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  From initial inquiry to project completion, automation keeps everything moving efficiently. Your reputation stays strong as you grow.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <PexelsImage
                  id="pexels-585419"
                  alt="Construction team collaborating on large building project"
                  loading="lazy"
                  imgClassName="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11 border-t border-gray-800" aria-labelledby="services-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-12 text-center leading-tight">
              What We Build
            </h2>
            <div className="space-y-12">
              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  High-Converting Websites
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Fast, mobile-optimized sites that showcase your portfolio, explain your services, and make it easy for clients to contact you. Built to rank well in local search and convert visitors into paying customers.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Lead Management Systems
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  AI-powered systems that qualify leads, answer common questions, and schedule consultations automatically. Respond to inquiries instantly, even when you are on site.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Business Automation
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Automated quoting, invoicing, project tracking, and client communication. Systems that handle the administrative work so you can focus on delivering quality projects.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4">
                  Client Portals
                </h3>
                <p className="text-base sm:text-lg font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                  Give your clients real-time project updates, document access, and direct communication channels. Professional transparency that builds trust and reduces back-and-forth calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-5 lg:px-11">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Who We Work With
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-12 leading-relaxed" style={{ color: '#BBBBBB' }}>
              We specialize in construction and trades businesses ready to grow. Whether you are an established contractor or a growing trades company, we build systems that deliver real results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 text-left">
              <div>
                <p className="text-base font-sans font-normal text-white">Electricians</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Plumbers</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Builders</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Contractors</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Decorators</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Roofers</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">Landscapers</p>
              </div>
              <div>
                <p className="text-base font-sans font-normal text-white">HVAC</p>
              </div>
            </div>

            <p className="text-base font-sans font-normal" style={{ color: '#888888' }}>
              Based in Kent, serving construction and trades businesses across Dover, Deal, Canterbury, and Folkestone.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 px-5 lg:px-11 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Ready To Grow Your
              <span className="block bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Construction Business?
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
              Let's discuss how a professional website and smart automation can help you win more contracts and reclaim your time.
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
