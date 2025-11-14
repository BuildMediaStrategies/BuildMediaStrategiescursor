import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: 'CureCancer UCL',
      description: 'Charity website and AI operations for admin workflows',
      sector: 'Charity',
      logo: '/ucl-icon.png',
      url: 'https://curecancer-ucl.org/',
      metrics: {
        loadTime: '-72%',
        conversions: '+165%',
        revenue: '+£28K/qtr',
      },
    },
    {
      title: 'SOS Electrical',
      description: 'Trades website and AI lead capture automation',
      sector: 'Trades',
      logo: '/sos-icon.png',
      url: 'https://soselectricalltd.co.uk/',
      metrics: {
        loadTime: '-68%',
        conversions: '+142%',
        revenue: '+£12K/mo',
      },
    },
    {
      title: 'Hamilton-Nexus',
      description: 'Website and project management dashboard for consulting operations',
      sector: 'Consulting',
      logo: '/hamilton-nexus-icon.png',
      url: 'https://hamilton-nexus.co.uk/',
      metrics: {
        loadTime: '-54%',
        conversions: '+96%',
        revenue: '+£17K/qtr',
      },
    },
  ];

  return (
    <>
      <SEOWrapper
        title="Our Work | Client Results & Case Studies | Kent Web Design"
        description="See how we've helped Kent businesses increase conversions by 180%, cut load times by 75%, and grow revenue. Real results, real clients."
        canonical="https://buildmediastrategies.com/portfolio"
        keywords="web design portfolio Kent, case studies, client results Dover Deal"
      />

      <div className="bg-white min-h-screen">
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Selected </span>
              <span className="text-sky-gradient">Work</span>
            </h1>
            <p className="text-xl sm:text-2xl text-black max-w-3xl leading-relaxed">
              Real projects for real businesses, built to solve specific problems and drive measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="text-black">View related services:</span>
              <a
                href="/web-design"
                className="text-sky-gradient hover:opacity-80 transition-opacity underline"
              >
                Web Design
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="/ai-operations"
                className="text-sky-gradient hover:opacity-80 transition-opacity underline"
              >
                AI Operations
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-gradient hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="pt-20"></div>

                  <div className="mb-6">
                    <div className="text-sm text-black mb-2">{project.sector}</div>
                    <h2 className="text-2xl font-bold text-sky-gradient mb-3 group-hover:text-sky-gradient transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-black leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-t border-gray-200">
                      <span className="text-sm text-black">Load Time</span>
                      <span className="text-sm font-semibold text-gray-900">{project.metrics.loadTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-gray-200">
                      <span className="text-sm text-black">Conversions</span>
                      <span className="text-sm font-semibold text-gray-900">{project.metrics.conversions}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-b border-gray-200">
                      <span className="text-sm text-black">Revenue Impact</span>
                      <span className="text-sm font-semibold text-gray-900">{project.metrics.revenue}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sky-gradient group-hover:opacity-80 transition-opacity">
                    <span className="text-sm font-medium">View live site</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-gradient mb-12">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
                <div className="text-sm text-black mb-3">Branding</div>
                <h3 className="text-xl font-bold text-sky-gradient mb-3">Little & Co</h3>
                <p className="text-black mb-4 leading-relaxed">
                  Complete brand identity and web build for a premium consumer brand. From logo design to e-commerce platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    TypeScript
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    E-commerce
                  </span>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
                <div className="text-sm text-black mb-3">Interior Design</div>
                <h3 className="text-xl font-bold text-sky-gradient mb-3">JCAS P&D + Interior Design</h3>
                <p className="text-black mb-4 leading-relaxed">
                  Website plus AI operations for automated quoting and invoicing. Saving 15+ hours per week on admin.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    Supabase
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-black">
                    AI Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gray-900">Ready to see </span>
                <span className="text-sky-gradient">results like these?</span>
              </h2>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Let's discuss your project and how we can help drive measurable growth for your business.
              </p>
              <a
                href="/contact"
                className="btn-gradient inline-block px-8 py-4 text-white font-semibold rounded-full"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
