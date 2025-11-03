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
    `px-3 py-2 rounded-3xl transition-all duration-300 font-bold ${
      isActive
        ? 'text-white bg-white/10 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
        : 'text-white hover:bg-white/5 hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]'
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

      {/* Mobile */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden text-white font-bold rounded-2xl px-3 py-2 border border-white/10 hover:border-white/30 transition-all duration-300"
      >
        Menu
      </button>
      {open && (
        <div className="md:hidden absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur border border-white/10 rounded-3xl p-2 z-50 shadow-2xl shadow-purple-500/10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-2xl transition-all duration-300 font-bold ${
                  isActive ? 'bg-white/10 text-white' : 'text-white hover:bg-white/5'
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

