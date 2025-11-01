import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  ogType?: string;
}

export default function MetaTags({
  title,
  description,
  canonical,
  ogImage = 'https://buildmediastrategies.com/hero-image.png',
  noindex = false,
  keywords = '',
  ogType = 'website'
}: MetaTagsProps) {
  const fullTitle = title.includes('BuildMediaStrategies')
    ? title
    : `${title} | BuildMediaStrategies`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BuildMediaStrategies" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@buildmediastrategies" />
      <meta name="twitter:creator" content="@buildmediastrategies" />

      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="geo.region" content="GB-KEN" />
      <meta name="geo.placename" content="Deal, Kent" />
      <meta name="geo.position" content="51.2225;1.4024" />
      <meta name="ICBM" content="51.2225, 1.4024" />
    </Helmet>
  );
}
