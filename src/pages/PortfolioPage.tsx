import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import { caseStudies } from '../data/caseStudies';

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: 'CureCancer UCL',
      description: 'Charity website and AI operations for admin workflows',
      sector: 'Charity',
      logo: '/ucl-icon.png',
      slug: 'curecancer-ucl',
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
      slug: 'sos-electrical-ltd',
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
      slug: 'hamilton-nexus',
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

      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10" />
        <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Selected Work
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              Real projects for real businesses, built to solve specific problems and drive measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="text-gray-500">View related services:</span>
              <a
                href="/web-design"
                className="text-orange-400 hover:text-orange-300 transition-colors underline"
              >
                Web Design
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="/ai-operations"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                AI Operations
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <a
                  key={index}
                  href={`/case-studies/${project.slug}`}
                  className="group relative bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition-all duration-300"
                >
                  {/* Logo */}
                  <div className="mb-8 h-16 flex items-center">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">{project.sector}</div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-t border-gray-800">
                      <span className="text-sm text-gray-500">Load Time</span>
                      <span className="text-sm font-semibold text-white">{project.metrics.loadTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-gray-800">
                      <span className="text-sm text-gray-500">Conversions</span>
                      <span className="text-sm font-semibold text-white">{project.metrics.conversions}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-b border-gray-800">
                      <span className="text-sm text-gray-500">Revenue Impact</span>
                      <span className="text-sm font-semibold text-white">{project.metrics.revenue}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm font-medium">Read case study</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                <div className="text-sm text-gray-500 mb-3">Branding</div>
                <h3 className="text-xl font-bold text-white mb-3">Little & Co</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Complete brand identity and web build for a premium consumer brand. From logo design to e-commerce platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    TypeScript
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    E-commerce
                  </span>
                </div>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
                <div className="text-sm text-gray-500 mb-3">Interior Design</div>
                <h3 className="text-xl font-bold text-white mb-3">JCAS P&D + Interior Design</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Website plus AI operations for automated quoting and invoicing. Saving 15+ hours per week on admin.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    Supabase
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    AI Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-500/5 to-blue-500/5 border border-orange-500/30 rounded-2xl p-12 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to see results like these?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss your project and how we can help drive measurable growth for your business.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
