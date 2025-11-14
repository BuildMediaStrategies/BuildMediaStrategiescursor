import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { testimonials as testimonialsData } from '../../data/testimonials';

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export default function TestimonialShowcase() {
  const [index, setIndex] = useState(0); // left-most card index
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive visible count: 1 on mobile, 3 on md+
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const update = () => setVisible(window.matchMedia('(min-width: 768px)').matches ? 3 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const items = testimonialsData;
  const pageCount = Math.max(1, Math.ceil(items.length / visible));
  const pageIndex = Math.floor(index / visible);

  // Auto-rotate
  useEffect(() => {
    if (isHovering) return;
    const t = setInterval(() => {
      setIndex((prev) => {
        const next = prev + visible;
        return next >= items.length ? 0 : next;
      });
    }, 4500);
    return () => clearInterval(t);
  }, [isHovering, visible, items.length]);

  const avgRating = useMemo(() => {
    if (!items.length) return 0;
    return Math.round((items.reduce((s, t) => s + t.rating, 0) / items.length) * 10) / 10;
  }, [items]);

  // Schema markup for reviews
  const schema = useMemo(() => {
    const reviews = items.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: t.author },
    }));
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Build Media Strategies',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating,
        reviewCount: items.length,
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews,
    } as Record<string, unknown>;
  }, [items, avgRating]);

  const prev = () => setIndex((prev) => (prev - visible < 0 ? Math.max(0, items.length - visible) : prev - visible));
  const next = () => setIndex((prev) => (prev + visible >= items.length ? 0 : prev + visible));
  const goToPage = (p: number) => setIndex(clamp(p, 0, pageCount - 1) * visible);

  return (
    <section className="px-5 lg:px-11 py-20" style={{ backgroundColor: '#000000' }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 leading-tight">
            Trusted by Clients
          </h2>
          <p className="text-gray-400">Average rating {avgRating}/5 from {items.length}+ reviews</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button aria-label="Previous" onClick={prev} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border border-gray-700 text-white hover:border-white transition bg-black/60">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button aria-label="Next" onClick={next} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border border-gray-700 text-white hover:border-white transition bg-black/60">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${(index / items.length) * 100}%)` }}
            >
              {items.map((t, i) => (
                <article key={i} className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3">
                  <div className="h-full border border-gray-800 bg-[#0A0A0A] p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-3" aria-label={`${t.rating} star rating`}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className={`w-4 h-4 ${s < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-black'}`} />
                      ))}
                    </div>
                    <blockquote className="text-white text-lg leading-relaxed mb-5">“{t.quote}”</blockquote>
                    <div className="flex items-center gap-3 mt-auto">
                      {t.avatarUrl ? (
                        <picture>
                          <source srcSet={t.avatarUrl.replace(/\.(png|jpg|jpeg)$/, '.avif')} type="image/avif" />
                          <source srcSet={t.avatarUrl.replace(/\.(png|jpg|jpeg)$/, '.webp')} type="image/webp" />
                          <img src={t.avatarUrl} alt={t.author} className="w-10 h-10 rounded-full object-cover" loading="lazy" decoding="async" fetchpriority="low" width="40" height="40" />
                        </picture>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-700" aria-hidden />
                      )}
                      <div>
                        <div className="text-white font-medium">{t.author}</div>
                        <div className="text-gray-400 text-sm">{t.title}, {t.company}{t.location ? `, ${t.location}` : ''}</div>
                        <div className="text-black text-xs mt-1">{t.projectType}</div>
                      </div>
                      {t.videoUrl && (
                        <a href={t.videoUrl} className="ml-auto inline-flex items-center gap-1 text-sm text-white underline hover:opacity-80">
                          <Play className="w-4 h-4" /> Watch video
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots / Manual nav for mobile */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: pageCount }).map((_, p) => (
              <button
                key={p}
                aria-label={`Go to slide ${p + 1}`}
                onClick={() => goToPage(p)}
                className={`h-2 rounded-full transition-all ${p === pageIndex ? 'bg-white w-8' : 'bg-gray-600 w-3'}`}
              />
            ))}
          </div>
        </div>

        {/* Featured metrics grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: 'Avg. Rating', v: `${avgRating}/5` },
            { k: 'Conversion Lift', v: '+160%' },
            { k: 'Load Time', v: '-70%' },
            { k: 'Projects On-Time', v: '100%' },
          ].map((m) => (
            <div key={m.k} className="border border-gray-800 bg-[#0A0A0A] p-5 text-center">
              <div className="text-2xl font-bold text-white">{m.v}</div>
              <div className="text-gray-400 text-sm">{m.k}</div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {['5-Star Reviews', 'Google Analytics', 'Performance First', 'Secure by Design', 'SEO Friendly'].map((b) => (
            <span key={b} className="px-3 py-1.5 text-sm border border-gray-700 text-gray-200">{b}</span>
          ))}
        </div>

        {/* Schema JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>
  );
}
