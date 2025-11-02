import React, { useState } from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import FilterBar from '../../components/Portfolio/FilterBar';
import ProjectCard from '../../components/Portfolio/ProjectCard';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function Portfolio() {
  const canonical = baseUrl + '/portfolio';
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'E‑commerce', 'B2B', 'Local'];
  const projects = [
    { id: 1, title: 'E‑commerce Boost', cat: 'E‑commerce' },
    { id: 2, title: 'Local Services', cat: 'Local' },
  ];
  const items = projects.filter(p => filter === 'All' || p.cat === filter);

  return (
    <SEOWrapper
      title="Portfolio | Build Media Strategies"
      description="Selected projects and results from our Kent web design and development work."
      canonical={canonical}
    >
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <FilterBar filters={filters} value={filter} onChange={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((p) => (
            <a key={p.id} href={`/portfolio/case-study/${p.id}`}>
              <ProjectCard />
            </a>
          ))}
        </div>
      </section>
    </SEOWrapper>
  );
}

