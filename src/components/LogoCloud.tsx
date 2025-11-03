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

            <InfiniteSlider speed={30} speedOn