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
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Latest Articles</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            className={`px-3 py-1.5 rounded-full border ${active === 'All' ? 'border-white text-white' : 'border-gray-600 text-gray-300'}`}
            onClick={() => setActive('All')}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`px-3 py-1.5 rounded-full border ${active === c ? 'border-white text-white' : 'border-gray-600 text-gray-300'}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-gray-800 hover:border-gray-600 transition-colors p-5 block bg-black/30">
              <div className="text-xs text-gray-400 mb-2">{p.frontmatter.date || ''}</div>
              <h2 className="text-lg font-semibold text-white mb-2">{p.frontmatter.title || p.slug}</h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">{p.frontmatter.excerpt || ''}</p>
              <div className="flex gap-2 flex-wrap">
                {(p.frontmatter.categories || []).map((c) => (
                  <span key={c} className="text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300">
                    {c}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </SEOWrapper>
  );
}

