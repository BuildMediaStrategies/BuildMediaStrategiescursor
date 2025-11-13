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
        className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
      >
        <span
          className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
            open
              ? 'rotate-45 translate-y-2 bg-white'
              : 'bg-gradient-to-r from-sky-400 to-blue-600'
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out ${
            open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
            open
              ? '-rotate-45 -translate-y-2 bg-white'
              : 'bg-gradient-to-r from-sky-400 to-blue-600'
          }`}
        />
      </button>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <>
          {/* Full white background overlay that covers EVERYTHING */}
          <div className="md:hidden fixed inset-0 z-[100] bg-white" aria-hidden={false}>
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-8 flex items-center justify-between">
              <h2 className="text-white font-bold text-2xl">Menu</h2>
            </div>

            {/* Menu Items - Centered Vertically */}
            <div className="flex-1 h-[calc(100vh-180px)] flex flex-col justify-center px-8 space-y-4">
              {links.map((l, index) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-8 py-6 rounded-2xl font-bold text-2xl text-center transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text ${
                      isActive
                        ? 'text-transparent border-2 border-sky-200 shadow-lg bg-sky-50/50'
                        : 'text-transparent hover:opacity-80'
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
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 bg-white">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center px-8 py-5 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </>
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
