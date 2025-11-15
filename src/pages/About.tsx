import React from 'react';
import { Star } from 'lucide-react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import StatsCounter from '../components/SocialProof/StatsCounter';
import { Timeline } from '../components/ui/timeline';
import { testimonials } from '../data/testimonials';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function About() {
  const canonical = baseUrl + '/about';

  const values = [
    {
      title: 'Honesty, Always',
      body: "Clear timelines, realistic outcomes, no fluff. If something isn't right for you, we say so.",
    },
    {
      title: 'Craft Over Hype',
      body: 'Fast, accessible, well‑built software beats trend‑chasing. We care about the details users feel.',
    },
    {
      title: 'Long‑Term Thinking',
      body: 'We build systems you can live with - easy to edit, easy to extend, and easy to trust.',
    },
  ];

  const process = [
    { title: 'Listen', content: 'We start with the real constraints: team, budget, timelines, and desired outcomes.' },
    { title: 'Diagnose', content: "We map what's working and what's not - content, UX, speed, tracking, and ops." },
    { title: 'Design', content: 'We design lightweight, modular systems - no bloat, just what moves the needle.' },
    { title: 'Build', content: "We ship in small, reviewable pieces. You'll see progress weekly, not just at the end." },
    { title: 'Iterate', content: "We measure, learn, and improve. Long after launch, we're still here." },
  ];

  const stack = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'GA4', 'Node', 'Edge/CDN'];

  const stats = [
    { label: 'Avg. Client Rating', value: 5.0, decimals: 1 },
    { label: 'Systems Delivered', value: 25, suffix: '+' },
    { label: 'On‑Time Delivery', value: 100, suffix: '%' },
    { label: 'Avg. Conversion Lift', value: 160, suffix: '%' },
  ];

  const localAreas = ['Dover', 'Deal', 'Canterbury', 'Folkestone', 'Ashford', 'Whitstable'];

  const selectedTestimonials = testimonials.slice(0, 3);

  return (
    <SEOWrapper
      title="About | Web Design & AI Automation Agency Kent Dover"
      description="Founded by Joshua Johnson, Build Media Strategies delivers web design and AI automation for Kent businesses. 5+ years experience serving Dover, Deal, Canterbury & Folkestone."
      canonical={canonical}
    >
      <div className="bg-black text-white">
        {/* Hero */}
        <section className="px-5 lg:px-11 pt-28 pb-16 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Building things that genuinely help people</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              We design and build lean, reliable websites and systems. We talk like humans, set clear expectations, and do what we say we'll do.
            </p>
          </div>
        </section>

        {/* Our story */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">Founded in Kent</h2>
              <p className="text-gray-300">
                Founded by Joshua Johnson and based in Dover, Kent, Build Media Strategies started by helping local businesses fix slow websites and improve their online presence. With over 5 years of experience in web design and AI automation, we've grown through word-of-mouth and real results. Today, we serve businesses across Dover, Deal, Canterbury, and Folkestone with the same principle: deliver measurable results through expert web design and intelligent automation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">What we do differently</h2>
              <p className="text-gray-300">
                No jargon, no hidden extras, and no brittle hand‑offs. We design systems your team can actually use - fast, accessible, and
                measurable. We'll show you the trade‑offs and help you choose what's right for your context.
              </p>
            </div>
          </div>
        </section>

        {/* Our values */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="border border-gray-800 bg-black p-6">
                  <div className="text-xl font-semibold mb-2">{v.title}</div>
                  <p className="text-gray-300">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The numbers */}
        <StatsCounter stats={stats} />

        {/* Process */}
        <section className="px-0 py-14 border-t border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-11">
            <h2 className="text-2xl font-bold mb-8">How we work</h2>
          </div>
          <Timeline
            data={process.map((p) => ({
              title: p.title,
              content: <p className="text-gray-300">{p.content}</p>,
            }))}
          />
        </section>

        {/* Technology stack */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Technology we trust</h2>
            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <span key={t} className="px-4 py-1.5 text-sm border border-gray-700 text-gray-200">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Location info for Kent */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">Based in Kent</h2>
              <p className="text-gray-300">
                We're local. Most projects start with a chat over coffee in Dover or Canterbury. We're happy to travel and equally comfortable
                working fully remote when that's faster.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Areas we serve</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((a) => (
                  <span key={a} className="px-3 py-1.5 text-sm border border-gray-700 text-gray-200">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why businesses choose us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Straight talk, no jargon',
                'Performance first, design with purpose',
                'Measure what matters (not vanity metrics)',
                'Design systems your team can own',
                'Accessible and mobile‑fast by default',
                'We stick around after launch',
              ].map((d) => (
                <div key={d} className="border border-gray-800 bg-black p-6">
                  <div className="text-white font-medium">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (relationship‑focused) */}
        <section className="px-5 lg:px-11 py-14 border-b border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What our clients say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedTestimonials.map((t, i) => (
                <article key={i} className="border border-gray-800 bg-black p-6 flex flex-col">
                  <div className="flex items-center gap-1 mb-3" aria-label={`${t.rating} star rating`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`w-4 h-4 ${s < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-black'}`} />
                    ))}
                  </div>
                  <blockquote className="text-gray-200 leading-relaxed mb-4">“{t.quote}”</blockquote>
                <div className="text-sm text-gray-400 mt-auto">{t.author} - {t.title}, {t.company}{t.location ? `, ${t.location}` : ''}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 lg:px-11 py-16" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-800 bg-black p-6">
            <div>
              <h2 className="text-2xl font-bold">Ready to start?</h2>
              <p className="text-gray-300 mt-1">Tell us what's not working and we'll share a simple plan.</p>
            </div>
            <a href="/contact" className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition">Book a conversation</a>
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
