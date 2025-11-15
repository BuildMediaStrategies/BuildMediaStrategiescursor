import React, { useMemo, useState } from 'react';
import SEOWrapper from '../components/SEO/SEOWrapper';
import { loadAllPosts } from '../lib/blog/content';

export default function BlogIndexPage() {
  const posts = useMemo(() => loadAllPosts(), []);
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => (p.frontmatter.categories || []).forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [posts]);
  const [active, setActive] = useState<string>('All');
  const filtered = useMemo(
    () => (active === 'All' ? posts : posts.filter((p) => (p.frontmatter.categories || []).includes(active))),
    [active, posts]
  );

  return (
    <SEOWrapper
      title="Blog | BuildMediaStrategies"
      description="Straightforward articles on faster sites, AI ops, and digital growth for local businesses."
      canonical="https://buildmediastrategies.com/blog"
    >
      <div className="bg-white min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900">Latest </span>
            <span className="text-sky-gradient">Articles</span>
          </h1>
          <p className="text-black text-lg mb-12">Short reads on faster builds, smarter automations, and practical marketing moves for local businesses.</p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                active === 'All'
                  ? 'border-sky-gradient text-sky-gradient font-semibold'
                  : 'border-gray-300 text-black hover:border-gray-400'
              }`}
              onClick={() => setActive('All')}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                  active === c
                    ? 'border-sky-gradient text-sky-gradient font-semibold'
                    : 'border-gray-300 text-black hover:border-gray-400'
                }`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border-2 border-gray-200 hover:border-sky-gradient hover:shadow-lg transition-all duration-300 p-6 block bg-white"
              >
                <div className="text-xs text-black mb-3">{p.frontmatter.date || ''}</div>
                <h2 className="text-xl font-bold text-sky-gradient mb-3 group-hover:text-sky-gradient transition-colors leading-tight">
                  {p.frontmatter.title || p.slug}
                </h2>
                <p className="text-sm text-black mb-4 line-clamp-3 leading-relaxed">
                  {p.frontmatter.excerpt || ''}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {(p.frontmatter.categories || []).map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300 text-black"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
