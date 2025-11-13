import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: '/web-design', label: 'Web Design' },
    { to: '/ai-operations', label: 'AI Ops' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  // Prevent scroll when menu is open
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
            <NavLink to={l.to} className={itemClass} onClick={() => setOpen(false)}>
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
        className="md:hidden relative z-[10000] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
      >
        <span
          className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
            open ? 'rotate-45 translate-y-2 bg-white' : 'bg-sky-gradient'
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full bg-sky-gradient transition-all duration-300 ease-out ${
            open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
            open ? '-rotate-45 -translate-y-2 bg-white' : 'bg-sky-gradient'
          }`}
        />
      </button>

      {/* Mobile Fullscreen Menu - Rendered via Portal to escape parent z-index */}
      {open && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999] bg-white" aria-hidden={false}>
          {/* Gradient Header */}
          <div className="bg-sky-gradient px-6 py-8 flex items-center justify-between">
            <h2 className="text-white font-bold text-2xl">Menu</h2>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items - Centered Vertically */}
          <div className="flex-1 min-h-[calc(100vh-250px)] flex flex-col justify-center px-8 space-y-4">
            {links.map((l, index) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block px-8 py-6 rounded-2xl font-bold text-2xl text-center transition-all duration-300 transform hover:scale-[1.02] text-sky-gradient ${
                    isActive
                      ? 'border-2 border-orange-200 shadow-lg bg-orange-50/30'
                      : 'hover:bg-gray-50/50'
                  }`
                }
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'slideInFromRight 0.4s ease-out forwards',
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-8 pb-10 pt-6 bg-white">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-8 py-5 bg-sky-gradient text-white font-bold text-xl rounded-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>,
        document.body
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
}
