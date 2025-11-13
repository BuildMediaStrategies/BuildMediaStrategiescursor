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
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
            <a href="/blog" className="text-orange-400 hover:text-orange-300 transition-colors">← Back to blog</a>
          </div>
        </div>
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
      <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <article className="max-w-6xl mx-auto px-6 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <a href="/blog" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8 text-sm">
              ← Back to blog
            </a>

            <header className="mb-10">
              <div className="text-sm text-gray-500 mb-3">{date}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
              <div className="mt-6 flex items-center gap-3">
                <div className="text-gray-400 text-sm">
                  By <span className="text-white font-medium">{author}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-orange-400 prose-a:no-underline hover:prose-a:text-orange-300 prose-strong:text-white prose-code:text-orange-300 prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800" dangerouslySetInnerHTML={{ __html: rendered.html }} />

            {/* Author bio */}
            <section className="mt-12 p-8 border border-gray-800 rounded-2xl bg-black/50">
              <div className="text-sm text-gray-500 mb-2">Written by</div>
              <div className="text-white font-bold text-lg mb-2">{author}</div>
              <p className="text-gray-400 leading-relaxed">We build fast, conversion-focused websites and AI operations for Kent businesses. Helping companies modernize their digital presence and automate workflows.</p>
            </section>

            {/* CTA */}
            <section className="mt-8 p-8 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-blue-500/5 shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] transition-all duration-300">
              <div className="text-white font-bold text-xl mb-3">Ready to modernise your website?</div>
              <p className="text-gray-300 mb-6 leading-relaxed">Get a free assessment. We'll identify speed wins and conversion blockers in minutes.</p>
              <a href="/contact" className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium">
                Book a Free Assessment
              </a>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            {/* TOC */}
            {rendered.toc.length > 0 && (
              <div className="p-5 border border-gray-800 rounded-2xl bg-black/50">
                <div className="text-sm font-semibold text-white mb-3">On this page</div>
                <nav className="space-y-2 text-sm">
                  {rendered.toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block text-gray-400 hover:text-orange-400 transition-colors ${t.level === 2 ? 'pl-0' : 'pl-4'}`}
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Related */}
            <div className="p-5 border border-gray-800 rounded-2xl bg-black/50">
              <div className="text-sm font-semibold text-white mb-3">Related posts</div>
              <div className="space-y-3">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block text-sm text-gray-400 hover:text-orange-400 transition-colors leading-snug"
                  >
                    {r.frontmatter.title || r.slug}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </article>
      </div>
    </SEOWrapper>
  );
}
