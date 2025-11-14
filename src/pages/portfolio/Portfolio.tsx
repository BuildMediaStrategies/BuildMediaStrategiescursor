import React, { useState } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import FilterBar from '../../components/Portfolio/FilterBar';
import ProjectCard from '../../components/Portfolio/ProjectCard';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function Portfolio() {
  const canonical = baseUrl + '/portfolio';
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'E-commerce', 'B2B', 'Local'];

  const projects = [
    {
      id: 1,
      title: 'CureCancer UCL — Donation Platform',
      cat: 'B2B',
      url: 'https://curecancer-ucl.org/',
    },
    {
      id: 2,
      title: 'SOS Electrical — Trades Website',
      cat: 'Local',
      url: 'https://soselectricalltd.co.uk/',
    },
    {
      id: 3,
      title: 'Hamilton Nexus — Surveying & Recruitment',
      cat: 'B2B',
      url: 'https://hamilton-nexus.co.uk/',
    },
  ];

  const items = projects.filter(
    (p) => filter === 'All' || p.cat === filter
  );

  return (
    <SEOWrapper
      title="Portfolio | Build Media Strategies"
      description="Selected projects and results from our Kent web design, full-stack development, and AI operations work."
      canonical={canonical}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>

        <FilterBar filters={filters} value={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard title={p.title} category={p.cat} />
            </a>
          ))}
        </div>
      </section>
    </SEOWrapper>
  );
}
