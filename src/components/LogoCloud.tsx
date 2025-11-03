import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';

type Logo = {
  src: string;
  alt: string;
  // extra classes for per-logo tuning (filters/height tweaks)
  extra?: string;
};

const LOGOS: Logo[] = [
  // Use consistent height; tune visibility with extra classes
  { src: '/assets/ucl-logo@2x.png',           alt: 'UCL',                 extra: 'invert' },
  { src: '/assets/HAMILTON NEXUS.png',        alt: 'Hamilton Nexus',      extra: 'invert' },
  { src: '/assets/github logo.png',           alt: 'GitHub',              extra: 'invert' },
  { src: '/assets/Cursor-Ai-Logo-PNG-SVG-Vector-300x300-1.png', alt: 'Cursor', extra: 'invert md:h-16' }, // slightly taller so it reads
  { src: '/assets/SOS NEW TP LOGO.png',       alt: 'SOS Electrical',      extra: 'invert' },
  { src: '/assets/curecancer-white.png',      alt: 'CureCancer',          extra: 'opacity-90 contrast-125 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]' },
  { src: '/assets/HAMILTON NEXUS.png',        alt: 'Hamilton Nexus',      extra: 'invert' },
  { src: '/assets/github logo.png',           alt: 'GitHub',              extra: 'invert' },
];

export default function LogoCloud() {
  return (
    <section className="bg-black overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-white">Trusted by businesses that scale</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speed={28}           // smoother pace so logos are readable
              speedOnHover={18}
              gap={112}
            >
              {LOGOS.map((logo, i) => (
                <div key={i} className="flex">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    height={56}
                    width={224}
                    className={[
                      // core sizing/behavior (same for all)
                      'mx-14 h-12 md:h-14 w-auto object-contain shrink-0',
                      // visibility polish
                      'transition-transform duration-300 will-change-transform hover:scale-105',
                      // per-logo overrides
                      logo.extra ?? ''
                    ].join(' ')}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* soft edge masks */}
            <div className="pointer-events-none bg-gradient-to-r from-black absolute inset-y-0 left-0 w-20 z-10" />
            <div className="pointer-events-none bg-gradient-to-l from-black absolute inset-y-0 right-0 w-20 z-10" />
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
