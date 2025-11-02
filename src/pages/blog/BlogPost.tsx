import React from 'react';
import { useParams } from 'react-router-dom';
import SEOWrapper from '../../components/SEO/SEOWrapper';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function BlogPost() {
  const { slug } = useParams();
  const title = (slug || 'Post').replace(/-/g, ' ');
  const canonical = baseUrl + `/blog/${slug ?? ''}`;
  return (
    <SEOWrapper
      title={`${title} | Build Media Strategies`}
      description="Article on performance, SEO, and conversion."
      canonical={canonical}
      type="article"
    >
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
        <p className="text-gray-300">Content coming soon.</p>
      </article>
    </SEOWrapper>
  );
}

