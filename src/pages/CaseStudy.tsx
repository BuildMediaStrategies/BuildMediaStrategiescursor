import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertCircle, TrendingDown, TrendingUp, Quote } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import { Timeline } from '../components/ui/timeline';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../data/caseStudies';
import { useScrollAnimation } from '../lib/hooks/useScrollAnimation';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    return (
      <SEOWrapper title="Case Study Not Found" description="" canonical={`https://buildmediastrategies.co.uk/case-studies/${slug ?? ''}`}>
        <div className="bg-black min-h-screen text-white flex items-center justify-center p-10">
          <div className="max-w-xl text-center space-y-4">
            <h1 className="text-3xl font-bold">Case study not found</h1>
            <p className="text-gray-400">The case study you’re looking for doesn’t exist.</p>
            <Link className="underline" to="/portfolio">Back to portfolio</Link>
          </div>
        </div>
      </SEOWrapper>
    );
  }

  const canonical = `https://buildmediastrategies.co.uk/case-studies/${cs.slug}`;
  const related = getRelatedCaseStudies(cs.slug);

  const keyMetrics = [
    { label: 'Load Time Improvement', value: cs.hero.metrics.loadTimeImprovement },
    { label: 'Conversion Increase', value: cs.hero.metrics.conversionIncrease },
    { label: 'Revenue Impact', value: cs.hero.metrics.revenueImpact },
  ];

  const heroImage = cs.hero.image || '/pexels/pexels-3184292.webp';

  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation();

  return (
    <SEOWrapper
      title={`${cs.title} | Case Study | Build Media Strategies`}
      description={cs.hero.subtitle ?? `${cs.client} case study`}
      canonical={canonical}
    >
      {/* HERO SECTION */}
      <div className="relative min-h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-32">
          <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6 animate-fadeInUp">
            {cs.sector}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {cs.title}
          </h1>
          {cs.hero.subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {cs.hero.subtitle}
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:scale-105 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <section className="py-16 sm:py-24 bg-black" ref={overviewRef as any}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`${overviewVisible ? 'animate-slideInLeft' : ''} space-y-8`}>
              <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
              {[
                { label: 'Client', value: cs.client },
                { label: 'Industry', value: cs.sector },
                cs.overview.context ? { label: 'Context', value: cs.overview.context } : null,
              ]
                .filter(Boolean)
                .map((detail: any, i: number) => (
                  <div key={i} className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
                    <div className="text-sm text-black mb-2">{detail.label}</div>
                    <div className="text-lg text-white font-medium">{detail.value}</div>
                  </div>
                ))}

              <div className="bg-gradient-to-br from-orange-900/20 to-blue-900/20 border border-orange-500/20 rounded-2xl p-6">
                <div className="text-sm text-orange-300 mb-4">Technologies Used</div>
                <div className="flex flex-wrap gap-2">
                  {cs.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-600/30 border border-orange-500/30 rounded-full text-orange-200 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${overviewVisible ? 'animate-slideInRight' : ''}`}>
              <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-6">The Challenge</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">{cs.overview.problem}</p>
                <div className="space-y-3">
                  {cs.overview.goals.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-gray-400">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-[#0A0A0A]" ref={solutionRef as any}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Solution</h2>
          <div className="space-y-6">
            {[cs.solution.summary, ...cs.solution.highlights].map((content, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group"
                style={{ animation: 'fadeInUp 0.6s ease-out', animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed">{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-green-950/10 to-black">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">The Results</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">Real metrics, real impact, real business growth</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" /> Before
              </h3>
              <div className="space-y-4">
                {cs.results.before.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 break-words">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-950/20 border border-green-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2 relative z-10">
                <TrendingUp className="w-5 h-5" /> After
              </h3>
              <div className="space-y-4 relative z-10">
                {cs.results.after.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 break-words">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyMetrics.map((improvement, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-green-500 mb-2">{improvement.value}</div>
                <div className="text-sm text-gray-400 break-words">{improvement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      {cs.testimonial && (
        <section className="py-16 sm:py-24 bg-black">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <div className="bg-gradient-to-br from-orange-900/20 to-blue-900/20 border border-orange-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-orange-500/20">
                <Quote className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">“{cs.testimonial.quote}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    {cs.testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{cs.testimonial.author}</div>
                    <div className="text-gray-400">{cs.testimonial.company}</div>
                    {cs.testimonial.location && <div className="text-black text-sm">{cs.testimonial.location}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROCESS TIMELINE */}
      <section className="px-0 py-16 sm:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <h2 className="sr-only">Process Timeline</h2>
        <Timeline data={cs.timeline.map((t) => ({ title: t.title, content: <p className="text-gray-300">{t.content}</p> }))} />
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((study, i) => (
              <Link key={i} to={`/case-studies/${study.slug}`} className="group">
                <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500/50 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={study.hero.image || '/pexels/pexels-6647039.avif'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-orange-400 mb-2 block">{study.sector}</span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">{study.hero.subtitle}</p>
                    <div className="text-green-500 font-semibold text-sm">{study.hero.metrics.conversionIncrease}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="bg-gradient-to-br from-orange-600/20 to-blue-600/20 border border-orange-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Results Like These?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how we can transform your business</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1">Start Your Project</Link>
                <Link to="/portfolio" className="px-8 py-4 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg">View More Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SEOWrapper>
  );
}

