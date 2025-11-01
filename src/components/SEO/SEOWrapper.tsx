import MetaTags from './MetaTags';
import SchemaOrg from './SchemaOrg';

interface SEOWrapperProps {
  title: string;
  description: string;
  canonical: string;
  schemaType: 'homepage' | 'service' | 'portfolio' | 'location';
  customSchema?: Record<string, any>;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  ogType?: string;
}

export default function SEOWrapper({
  title,
  description,
  canonical,
  schemaType,
  customSchema = {},
  ogImage,
  noindex = false,
  keywords = '',
  ogType = 'website'
}: SEOWrapperProps) {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        noindex={noindex}
        keywords={keywords}
        ogType={ogType}
      />
      <SchemaOrg type={schemaType} customData={customSchema} />
    </>
  );
}
