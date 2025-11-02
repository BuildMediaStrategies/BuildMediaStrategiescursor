import React from 'react';

export default function Navigation() {
  const links = [
    { href: '/web-design', label: 'Web Design' },
    { href: '/ai-operations', label: 'AI Ops' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav aria-label="Main navigation">
      <ul className="flex gap-4 text-sm text-gray-300">
        {links.map((l) => (
          <li key={l.href}><a className="hover:text-white" href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

