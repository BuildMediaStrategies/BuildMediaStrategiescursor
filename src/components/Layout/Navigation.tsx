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
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="md:hidden fixed inset-y-0 right-0 w-[280px] bg-white z-50 shadow-2xl animate-slideInRight">
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-sky-400 to-blue-600 p-6">
              <h2 className="text-white font-bold text-xl">Menu</h2>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              {links.map((l, index) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-5 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-50 to-blue-50 text-sky-gradient border-2 border-sky-200'
                        : 'text-black hover:bg-gray-50'
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

            {/* Footer CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
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