import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/web-design', label: 'Web Design' },
    { to: '/ai-operations', label: 'AI Ops' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const itemClass = ({ isActive }: { isActive: boolean }) =>
    `link-sky px-3 py-2 rounded-3xl transition-all duration-300 font-bold ${
      isActive
        ? 'bg-gradient-to-r from-orange-100/30 to-blue-100/30'
        : 'hover:bg-gray-50'
    }`;

  return (
    <nav aria-label="Main navigation" className="relative">
      {/* Desktop */}
      <ul className="hidden md:flex gap-1 text-sm items-center">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={itemClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Burger Button */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
      >
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* FULL-SCREEN MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden flex flex-col">
          {/* Gradient bar at the very top */}
          <div className="flex items-center justify-between px-4 py-3 bg-sky-gradient">
            <img
              src="/assets/bmsnewlogo sky.png"
              alt="Build Media Strategies"
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/40"
            >
              <span className="relative block w-4 h-4">
                <span className="absolute inset-0 bg-white h-[2px] w-full rotate-45 origin-center" />
                <span className="absolute inset-0 bg-white h-[2px] w-full -rotate-45 origin-center" />
              </span>
            </button>
          </div>

          {/* Nav links in the middle, on solid white */}
          <div className="flex-1 px-6 pt-6 space-y-3 overflow-y-auto">
            {links.map((l, index) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block px-5 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] text-sky-gradient ${
                    isActive
                      ? 'bg-sky-50 border-2 border-sky-200'
                      : 'hover:bg-sky-50'
                  }`
                }
                style={{
                  animationDelay: `${index * 40}ms`,
                  animation: 'slideInFromRight 0.25s ease-out forwards',
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Get Started button stuck to the bottom */}
          <div className="px-6 py-8 border-t border-gray-200 bg-white">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
