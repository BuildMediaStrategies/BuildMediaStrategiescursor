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
      <SEOWrapper title="Post not found" description="Post not found" canonical={`https://buildmediastrategies.com/blog/${slug}`}>
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
            <a href="/blog" className="text-sky-gradient hover:opacity-80 transition-opacity">← Back to blog</a>
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
      <div className="bg-white min-h-screen">
        <article className="max-w-6xl mx-auto px-6 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <a href="/blog" className="inline-flex items-center text-sky-gradient hover:opacity-80 transition-opacity mb-8 text-sm">
              ← Back to blog
            </a>

            <header className="mb-10">
              <div className="text-sm text-gray-600 mb-3">{date}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{title}</h1>
              <div className="mt-6 flex items-center gap-3">
                <div className="text-gray-700 text-sm">
                  By <span className="text-gray-900 font-medium">{author}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-sky-gradient prose-a:no-underline hover:prose-a:opacity-80 prose-strong:text-gray-900 prose-code:text-sky-gradient prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200" dangerouslySetInnerHTML={{ __html: rendered.html }} />

            <section className="mt-12 p-8 border-2 border-gray-200 rounded-2xl bg-gray-50">
              <div className="text-sm text-gray-600 mb-2">Written by</div>
              <div className="text-gray-900 font-bold text-lg mb-2">{author}</div>
              <p className="text-gray-700 leading-relaxed">We build fast, conversion-focused websites and AI operations for Kent businesses. Helping companies modernize their digital presence and automate workflows.</p>
            </section>

            <section className="mt-8 p-8 rounded-2xl border-2 border-gray-200 bg-gray-50 hover:border-sky-gradient transition-all duration-300">
              <div className="text-gray-900 font-bold text-xl mb-3">Ready to modernise your website?</div>
              <p className="text-gray-700 mb-6 leading-relaxed">Get a free assessment. We'll identify speed wins and conversion blockers in minutes.</p>
              <a href="/contact" className="btn-gradient inline-block px-6 py-3 rounded-full text-white font-medium">
                Book a Free Assessment
              </a>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            {rendered.toc.length > 0 && (
              <div className="p-5 border-2 border-gray-200 rounded-2xl bg-white">
                <div className="text-sm font-semibold text-gray-900 mb-3">On this page</div>
                <nav className="space-y-2 text-sm">
                  {rendered.toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block text-gray-700 hover:text-sky-gradient transition-colors ${t.level === 2 ? 'pl-0' : 'pl-4'}`}
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="p-5 border-2 border-gray-200 rounded-2xl bg-white">
              <div className="text-sm font-semibold text-gray-900 mb-3">Related posts</div>
              <div className="space-y-3">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block text-sm text-gray-700 hover:text-sky-gradient transition-colors leading-snug"
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
