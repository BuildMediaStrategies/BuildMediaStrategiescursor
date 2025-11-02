import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../lib/constants/site-config';

export type MetaTagsProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
};

export function MetaTags({
  title,
  description,
  canonical,
  ogImage,
  type = 'website',
  noindex = false,
}: MetaTagsProps) {
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const resolvedCanonical = canonical ?? (typeof window !== 'undefined' ? window.location.href : siteConfig.siteUrl);
  const resolvedImage = ogImage ?? siteConfig.brand.ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedCanonical} />
      {resolvedImage ? <meta property="og:image" content={resolvedImage} /> : null}
      <meta property="og:site_name" content={siteConfig.company} />

      <meta name="twitter:card" content={resolvedImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {resolvedImage ? <meta name="twitter:image" content={resolvedImage} /> : null}
    </Helmet>
  );
}

export default MetaTags;
