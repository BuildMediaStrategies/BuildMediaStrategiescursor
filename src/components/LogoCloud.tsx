import { useEffect } from 'react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';

const CURE_SRC = '/assets/curecancer-white.png';

export default function LogoCloud() {
  // Pin CureCancer logo in memory so remounts never miss cache
  useEffect(() => {
    const img = new Image();
    img.decoding = 'sync';
    (img as any).fetchPriority = 'high';
    img.crossOrigin = 'anonymous';
    img.src = `${CURE_SRC}?v=precache1`;
    // keep a ref on window to avoid GC
    (window as any).__cureCancerPreload = img;
  }, []);

  return (
    <section className="bg-black overflow-hidden py-16">
      {/* Force-white filter for black PNGs (GitHub only) */}
      <style>{`
        .as-white { filter: brightness(0) invert(1) contrast(140%); }
      `}</style>

      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-white">Trusted by businesses that scale</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            {/* Invisible preloader (kept minimal; does not affect layout) */}
            <img
              src={`${CURE_SRC}?v=precache2`}
              alt=""
              width={1}
              height={1}
              className="hidden"
              loading="eager"
              decoding="async"
              crossOrigin="anonymous"
            />

            <InfiniteSlider speed={30} speedOnHover={20} gap={120}>
              {/* UCL (icon-only, matches SOS size) */}
              <div className="flex">
                <img
                  className="mx-10 h-14 md:h-[4.2rem] w-auto object-contain"
                  src="/assets/ucl icon only.png"
                  alt="UCL Icon Logo"
                />
              </div>

              {/* Hamilton Nexus */}
              <div className="flex">
                <img
                  className="mx-10 h-12 md:h-14 w-auto object-contain"
                  src="/assets/HAMILTON NEXUS.png"
                  alt="Hamilton Nexus Logo"
                />
              </div>

              {/* GitHub (force white) */}
              <div className="flex">
                <img
                  className="mx-10 h-12 md:h-14 w-auto object-contain as-white"
                  src="/assets/GitHub-logo.png"
                  alt="GitHub Logo"
                />
              </div>

              {/* Cursor (icon only) */}
              <div className="flex">
                <img
                  className="mx-10 h-14 md:h-16 w-auto object-contain"
                  src="/assets/cursor icon only.png"
                  alt="Cursor AI Logo"
                />
              </div>

              {/* SOS Electrical (slightly larger) */}
              <div className="flex">
                <img
                  className="mx-10 h-14 md:h-[4.2rem] w-auto object-contain"
                  src="/assets/sos electrical tp logo icon.png"
                  alt="SOS Electrical Logo"
                />
              </div>

              {/* CureCancer (bigger + high-priority, with retry) */}
              <div className="flex">
                <img
                  className="mx-10 h-16 md:h-[4.8rem] w-auto object-contain opacity-95 contrast-125"
                  src={`${CURE_SRC}?v=live1`}
                  alt="CureCancer UCL Logo"
                  loading="eager"
                  decoding="sync"
                  crossOrigin="anonymous"
                  // simple cache-busting retry if a CDN edge misses
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    const url = new URL(el.src, window.location.href);
                    url.searchParams.set('v', String(Date.now()));
                    el.src = url.toString();
                  }}
                />
              </div>

              {/* Repeat Hamilton Nexus */}
              <div className="flex">
                <img
                  className="mx-10 h-12 md:h-14 w-auto object-contain"
                  src="/assets/HAMILTON NEXUS.png"
                  alt="Hamilton Nexus Logo"
                />
              </div>

              {/* Repeat GitHub (force white) */}
              <div className="flex">
                <img
                  className="mx-10 h-12 md:h-14 w-auto object-contain as-white"
                  src="/assets/GitHub-logo.png"
                  alt="GitHub Logo"
                />
              </div>
            </InfiniteSlider>

            {/* edge fades */}
            <div className="bg-gradient-to-r from-black absolute inset-y-0 left-0 w-20" />
            <div className="bg-gradient-to-l from-black absolute inset-y-0 right-0 w-20" />
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </div>
    </section>
  );
}