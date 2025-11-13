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
        className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
      >
        <span
          className={`block h-0.5 w-6 bg-sky-gradient transition-all duration-300 ease-out ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-sky-gradient transition-all duration-300 ease-out ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-sky-gradient transition-all duration-300 ease-out ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div
          className="md:hidden fixed inset-x-0 top-0 bottom-0 z-40 bg-white animate-fadeIn flex flex-col"
          aria-hidden={false}
        >
          {/* Spacer so content sits below the sticky gradient header */}
          <div className="h-20" />

          {/* Menu Items */}
          <div className="flex-1 px-6 space-y-2">
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
                  animationDelay: `${index * 50}ms`,
                  animation: 'slideInFromRight 0.3s ease-out forwards',
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Footer CTA pinned to bottom */}
          <div className="px-6 pb-8 pt-4 border-t border-gray-100 bg-white">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-6 py-3 bg-sky-gradient text-white font-bold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
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
