import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';
import React from 'react';

type Logo = {
  src: string;
  alt: string;
  className: string;
};

const logos: Logo[] = [
  // UCL (icon-only, matches SOS size)
  { src: '/ucl-icon.png', alt: 'UCL Icon Logo', className: 'mx-10 h-14 md:h-[4.2rem] w-auto object-contain' },

  // Hamilton Nexus
  { src: '/hamilton-nexus-icon.png', alt: 'Hamilton Nexus Logo', className: 'mx-10 h-12 md:h-14 w-auto object-contain' },

  // GitHub (force white via CSS filter)
  { src: '/github-logo.png', alt: 'GitHub Logo', className: 'mx-10 h-12 md:h-14 w-auto object-contain as-white' },

  // Cursor (icon only)
  { src: '/cursor-icon.png', alt: 'Cursor AI Logo', className: 'mx-10 h-14 md:h-16 w-auto object-contain' },

  // SOS Electrical (slightly larger)
  { src: '/sos-icon.png', alt: 'SOS Electrical Logo', className: 'mx-10 h-14 md:h-[4.2rem] w-auto object-contain' },

  // CureCancer (use the available UCL icon until CureCancer asset is added)
  { src: '/ucl-icon.png', alt: 'CureCancer UCL Logo', className: 'mx-10 h-16 md:h-[4.8rem] w-auto object-contain opacity-95 contrast-125' },

  // Repeat Hamilton Nexus (kept from your sequence)
  { src: '/hamilton-nexus-icon.png', alt: 'Hamilton Nexus Logo', className: 'mx-10 h-12 md:h-14 w-auto object-contain' },

  // Repeat GitHub (forced white)
  { src: '/github-logo.png', alt: 'GitHub Logo', className: 'mx-10 h-12 md:h-14 w-auto object-contain as-white' },
];

export default function LogoCloud() {
  return (
    <section className="bg-white overflow-hidden py-16 border-y border-gray-200">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:border-gray-200 md:pr-6">
            <p className="text-end text-sm text-sky-gradient font-medium">Trusted by businesses that scale</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            {/* Duplicate the sequence to make the loop seamless */}
            <InfiniteSlider speed={20} speedOnHover={15} gap={120}>
              {/* pass 1 */}
              {logos.map((logo, i) => (
                <img
                  key={`logo-1-${i}`}
                  className={logo.className}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
              {/* pass 2 (hidden from a11y, identical visuals) */}
              {logos.map((logo, i) => (
                <img
                  key={`logo-2-${i}`}
                  className={logo.className}
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              ))}
            </InfiniteSlider>

            {/* edge fades */}
            <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-20" />
            <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-20" />
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
