import React from 'react';

export default function SocialProof() {
  const logos = ['Kent Council', 'Local SMEs', 'E-commerce Stores', 'Tech Startups'];
  return (
    <div className="flex flex-wrap gap-3 text-xs text-gray-400">
      {logos.map((l) => (
        <span key={l} className="px-3 py-1 border rounded">{l}</span>
      ))}
    </div>
  );
}

