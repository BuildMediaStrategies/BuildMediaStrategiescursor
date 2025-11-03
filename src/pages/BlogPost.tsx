import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import SEOWrapper from '../components/SEO/SEOWrapper';
import { loadAllPosts, loadPost, renderMarkdown } from '../lib/blog/content';

export default function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = loadPost(slug);
  const rendered = useMemo(() => (post ? renderMarkdown(post.md) : { html: '', toc: [] }), [post]);
  const related = useMemo(() => {
    const all = loadAllPosts().filter((p) => p.slug !== slug);
    if (!post) return all.slice(0, 3);
    const cats = new Set(post.frontmatter.categories || []);
    const rel = all.filter((p) => (p.frontmatter.categories || []).some((c) => cats.has(c)));
    return (rel.length ? rel : all).slice(0, 3);
  }, [slug, post]);

  if (!post) {
    return (
      <SEOWrapper title="Post not found" description="Post not found" canonical={`https://buildmediastrategies.com/blog/${slug}` }>
        <div className="max-w-3xl mx-auto px-6 py-12 text-white">Post not found.</div>
      </SEOWrapper>
    );
  }

  const title = post.frontmatter.title || slug.replace(/-/g, ' ');
  const desc = post.frontmatter.excerpt || 'Article on speed, SEO, and modern web.';
  const date = post.frontmatter.date || '';
  const author = post.frontmatter.author || 'BuildMediaStrategies';

  return (
    <SEOWrapper
      title={`${title} | BuildMediaStrategies`}
      description={desc}
      canonical={`https://buildmediastrategies.com/blog/${slug}`}
      type="article"
    >
      <article className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div>
          <header className="mb-6">
            <div className="text-sm text-gray-400">{date}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">{title}</h1>
          </header>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: rendered.html }} />

          {/* Author bio */}
          <section className="mt-10 p-6 border border-gray-800 rounded-3xl bg-black/30">
            <div className="text-sm text-gray-400">Written by</div>
            <div className="text-white font-semibold">{author}</div>
            <p className="text-gray-400 text-sm mt-1">We build fast, conversion‑focused sites and AI operations for Kent businesses.</p>
          </section>

          {/* CTA */}
          <section className="mt-8 p-8 rounded-3xl border border-gray-700 bg-gradient-to-r from-blue-50/10 to-purple-50/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="text-white font-semibold mb-2">Ready to modernise your website?</div>
            <p className="text-gray-300 text-sm mb-3">Get a free assessment. We’ll identify speed wins and conversion blockers in minutes.</p>
            <a href="/contact" className="inline-block px-5 py-2.5 rounded-full border border-gray-600 text-white hover:border-gray-400 transition-all duration-300 hover:shadow-lg">Book a Free Assessment</a>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 h-fit">
          {/* TOC */}
          {rendered.toc.length > 0 && (
            <div className="mb-6 p-4 border border-gray-800 rounded-2xl bg-black/30">
              <div className="text-sm text-gray-400 mb-2">On this page</div>
              <nav className="space-y-1 text-sm">
                {rendered.toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className={`block hover:underline ${t.level === 2 ? 'pl-0' : 'pl-3'}`}>{t.text}</a>
                ))}
              </nav>
            </div>
          )}

          {/* Related */}
          <div className="p-4 border border-gray-800 rounded-2xl bg-black/30">
            <div className="text-sm text-gray-400 mb-2">Related posts</div>
            <div className="space-y-2">
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="block text-sm text-white hover:underline">
                  {r.frontmatter.title || r.slug}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </article>
    </SEOWrapper>
  );
}
