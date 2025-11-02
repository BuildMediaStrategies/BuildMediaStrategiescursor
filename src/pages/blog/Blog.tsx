import React from 'react';
import SEOWrapper from '../../components/SEO/SEOWrapper';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function Blog() {
  const canonical = baseUrl + '/blog';
  const posts = [
    { slug: 'launch-checklist', title: 'Website Launch Checklist' },
    { slug: 'speed-seo', title: 'Speed as an SEO Lever' },
  ];
  return (
    <SEOWrapper
      title="Blog | Build Media Strategies"
      description="Insights on performance, SEO, and conversion-focused web design."
      canonical={canonical}
    >
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <ul className="list-disc pl-5">
          {posts.map((p) => (
            <li key={p.slug}><a className="underline" href={`/blog/${p.slug}`}>{p.title}</a></li>
          ))}
        </ul>
      </section>
    </SEOWrapper>
  );
}

