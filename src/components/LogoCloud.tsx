import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';

export default function LogoCloud() {
  return (
    <section className="bg-black overflow-hidden py-16">
      {/* Force-white filter for black PNGs (GitHub only) */}
      <style>{`
        .as-white { filter: brightness(0) invert(1) contrast(140%); }
      `}</style>

      {/* (Optional) you can remove this since we’re not preloading CureCancer now */}
      {/* <link rel="preload" as="image" href="/assets/curecancer-white.png" /> */}

      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-white">Trusted by businesses that scale</p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
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

              {/* CureCancer slot -> use existing UCL icon until CureCancer asset is added */}
              <div className="flex">
                <img
                  className="mx-10 h-16 md:h-[4.8rem] w-auto object-contain opacity-95 contrast-125"
                  src="/assets/ucl icon only.png"
                  alt="CureCancer UCL Logo"
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
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
