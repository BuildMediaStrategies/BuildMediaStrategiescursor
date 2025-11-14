import React from 'react';
import { ArrowRight } from 'lucide-react';

export type PortfolioCardProps = {
  image?: string;
  title: string;
  client?: string;
  category?: string;
  href: string;
  isCenter?: boolean;
  results?: { load: string; conv: string; revenue: string };
};

export default function PortfolioCard({
  image,
  title,
  client,
  category,
  href,
  isCenter = false,
  results,
}: PortfolioCardProps) {
  
  // --- Hard-map real URLs based on title ---
  const directLink =
    title.toLowerCase().includes("cure") ? "https://curecancer-ucl.org/" :
    title.toLowerCase().includes("sos") ? "https://soselectricalltd.co.uk/" :
    title.toLowerCase().includes("hamilton") ? "https://hamilton-nexus.co.uk/" :
    href; // fallback to default

  return (
    <div className={`relative border border-gray-800 ${isCenter ? 'bg-black' : 'bg-[#0A0A0A]'} text-white overflow-hidden`}>
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width="800"
          height="224"
        />
      ) : (
        <div className="w-full h-56 bg-gradient-to-br from-gray-900 to-black" aria-hidden />
      )}

      <div className="p-5">
        {category && <div className="text-xs text-gray-400 mb-1">{category}</div>}
        <h3 className="text-xl font-semibold">{title}</h3>
        {client && <p className="text-sm text-gray-400">{client}</p>}

        {isCenter && results && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            <Metric label="Load" value={results.load} />
            <Metric label="Convert" value={results.conv} />
            <Metric label="Revenue" value={results.revenue} />
          </div>
        )}

        <a
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 mt-4 text-white underline hover:opacity-80"
        >
          View live site
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center border border-gray-800 p-3">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
