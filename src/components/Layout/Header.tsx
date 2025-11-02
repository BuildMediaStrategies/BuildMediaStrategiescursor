import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-black/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-white font-bold">Build Media Strategies</a>
        <Navigation />
      </div>
    </header>
  );
}

