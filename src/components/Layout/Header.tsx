import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black border-b border-white/5 shadow-[0_4px_20px_rgba(168,85,247,0.3)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center rounded-3xl px-3 py-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img
              src="/logo.png"
              alt="Build Media Strategies"
              className="h-18 w-auto object-contain"
              width="200"
              height="32"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

