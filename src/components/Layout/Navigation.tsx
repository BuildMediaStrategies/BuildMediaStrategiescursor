import React, { useState } from 'react';
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

  const itemClass = ({ isActive }: { isActive: boolean }) =>
    `link-sky px-3 py-2 rounded-3xl transition-all duration-300 font-bold ${
      isActive
        ? 'bg-gradient-to-r from-orange-100/30 to-blue-100/30'
        : 'hover:bg-gray-50'
    }`;

  return (
    <nav aria-label="Main navigation" className="relative flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img
          src="/assets/bmsnewlogo sky.png"
          alt="BuildMediaStrategies logo"
          className="h-8 w-auto object-contain"
          loading="eager"
          fetchPriority="high"
        />
      </a>

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

      {/* Mobile */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden link-sky font-bold rounded-2xl px-3 py-2 border border-gray-200 hover:border-gray-300 transition-all duration-300"
      >
        Menu
      </button>
      {open && (
        <div className="md:hidden absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur border border-gray-200 rounded-3xl p-2 z-50 shadow-xl">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `link-sky block px-4 py-3 rounded-2xl transition-all duration-300 font-bold ${
                  isActive ? 'bg-gradient-to-r from-orange-100/30 to-blue-100/30' : 'hover:bg-gray-50'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
