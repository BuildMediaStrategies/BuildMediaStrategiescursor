import React, { useEffect, useMemo, useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import { caseStudies } from '../../data/caseStudies';

type Slide = {
  slug: string;
  title: string;
  client: string;
  category: string;
  image?: string;
  results: { load: string; conv: string; revenue: string };
};

const imageFor: Record<string, string | undefined> = {
  'curecancer-ucl': '/pexels/pexels-6647039.avif',
  'sos-electrical-ltd': '/pexels/pexels-257736.webp',
  'hamilton-nexus': '/pexels/pexels-3184292.webp',
};

export default function Portfolio3DCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const slides: Slide[] = useMemo(
    () =>
      caseStudies.map((c) => ({
        slug: c.slug,
        title: c.title,
        client: c.client,
        category: c.sector,
        image: imageFor[c.slug],
        results: {
          load: c.hero.metrics.loadTimeImprovement,
          conv: c.hero.metrics.conversionIncrease,
          revenue: c.hero.metrics.revenueImpact,
        },
      })),
    []
  );

  const count = slides.length;
  const clampIndex = (n: number) => (n + count) % count;
  const goPrev = () => setIndex((i) => clampIndex(i - 1));
  const goNext = () => setIndex((i) => clampIndex(i + 1));

  // Mobile: simplify to stacked list
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {slides.map((s) => (
          <PortfolioCard
            key={s.slug}
            image={s.image}
            title={s.title}
            client={s.client}
            category={s.category}
            href={`/case-studies/${s.slug}`}
          />
        ))}
      </div>
    );
  }

  // Desktop 3D carousel
  const [springs, api] = useSprings(count, (i) => springStyles(i, index, count));

  useEffect(() => {
    api.start((i) => springStyles(i, index, count));
  }, [index, count, api]);

  const bind = useDrag(({ active, movement: [mx], velocity: [vx], direction: [dx] }) => {
    if (!active && (Math.abs(mx) > 50 || vx > 0.3)) {
      setIndex((i) => clampIndex(i + (dx > 0 ? -1 : 1)));
    }
  });

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <button aria-label="Previous" onClick={goPrev} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center hidden md:flex border border-gray-700 text-white hover:border-white transition bg-black/60">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button aria-label="Next" onClick={goNext} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center hidden md:flex border border-gray-700 text-white hover:border-white transition bg-black/60">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="h-[420px] md:h-[520px] overflow-visible" {...bind()}>
        <div className="relative w-full h-full">
          {springs.map((style, i) => {
            const s = slides[i];
            const isCenter = i === index;
            return (
              <animated.div
                key={s.slug}
                className="absolute top-0 left-1/2 will-change-transform"
                style={{
                  width: 'min(520px, 70vw)',
                  transform: interpolate([style.x, style.z, style.rot, style.scale], (x, z, rot, sc) => `translateX(calc(-50% + ${x}px)) translateZ(${z}px) rotateY(${rot}deg) scale(${sc})`),
                  zIndex: style.zIndex as unknown as number,
                  opacity: style.opacity,
                }}
              >
                <PortfolioCard
                  image={s.image}
                  title={s.title}
                  client={s.client}
                  category={s.category}
                  href={`/case-studies/${s.slug}`}
                  isCenter={isCenter}
                  results={s.results}
                />
              </animated.div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-gray-600 w-3'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function springStyles(i: number, index: number, count: number) {
  const offset = normalizeIndex(i - index, count);
  const dist = Math.abs(offset);
  const x = offset * 260; // px between cards
  const z = -Math.min(0, dist) * 120; // push back sides
  const rot = offset * -15; // slight Y rotation
  const scale = 1 - Math.min(0.4, dist * 0.1);
  const opacity = Math.max(0.2, 1 - dist * 0.15);
  const zIndex = 100 - dist;
  return {
    x,
    z,
    rot,
    scale,
    opacity,
    zIndex,
    config: { tension: 300, friction: 30 },
  };
}

function normalizeIndex(n: number, count: number) {
  const half = Math.floor(count / 2);
  // Wrap to the shortest signed distance in a circular list
  return ((n + half) % count) - half;
}

