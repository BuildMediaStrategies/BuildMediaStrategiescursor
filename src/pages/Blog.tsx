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
      description="Insights on performance, speed, SEO and modern web for Kent businesses."
      canonical="https://buildmediastrategies.com/blog"
    >
      <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Latest Articles</h1>
          <p className="text-gray-400 text-lg mb-12">Web design insights, AI automation tips, and digital strategy for Kent businesses.</p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                active === 'All'
                  ? 'border-purple-500 text-white bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
              }`}
              onClick={() => setActive('All')}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  active === c
                    ? 'border-purple-500 text-white bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
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
                className="group rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 p-6 block bg-black/50 hover:bg-black/70"
              >
                <div className="text-xs text-gray-500 mb-3">{p.frontmatter.date || ''}</div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                  {p.frontmatter.title || p.slug}
                </h2>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {p.frontmatter.excerpt || ''}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {(p.frontmatter.categories || []).map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300"
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
