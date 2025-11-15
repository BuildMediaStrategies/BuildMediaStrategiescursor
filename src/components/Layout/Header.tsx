import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center rounded-3xl px-3 py-1 hover:opacity-80 transition-all duration-300 -ml-8 sm:-ml-12"
        >
          <img
            src="/assets/logo.png"
            alt="Build Media Strategies"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain scale-[3.25] sm:scale-[3.75] origin-left translate-y-[12px]"
            width="320"
            height="88"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </Link>
        <Navigation />
      </div>
      {/* gradient divider below nav */}
      <div className="w-full h-px bg-sky-gradient" />
    </header>
  );
}
