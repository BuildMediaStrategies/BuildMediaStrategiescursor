import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../lib/constants/site-config';

export type LocalBusinessSchema = {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  image?: string;
  description?: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  areaServed?: Array<{ '@type': 'City'; name: string }>;
  sameAs?: string[];
  service?: Array<{ '@type': 'Service'; serviceType: string }>;
};

export type SchemaShape = LocalBusinessSchema | Record<string, any> | Array<Record<string, any>>;

export type SchemaOrgProps = {
  schema?: SchemaShape;
  schemaType?: 'homepage' | 'service' | 'portfolio' | 'blog';
  overrides?: Partial<LocalBusinessSchema> | Record<string, any>;
};

export function buildDefaultLocalBusiness(): LocalBusinessSchema {
  const s = siteConfig;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: s.company,
    image: s.brand.ogImage,
    description: s.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: s.contact.address.streetAddress,
      addressLocality: s.contact.address.addressLocality,
      addressRegion: s.contact.address.addressRegion,
      postalCode: s.contact.address.postalCode,
      addressCountry: s.contact.address.addressCountry,
    },
    telephone: s.contact.phone,
    email: s.contact.email,
    url: s.siteUrl,
    areaServed: s.contact.serviceAreas.map((name) => ({ '@type': 'City', name })),
    sameAs: Object.values(s.social),
    service: [
      { '@type': 'Service', serviceType: 'Web Design' },
      { '@type': 'Service', serviceType: 'AI Automation' },
      { '@type': 'Service', serviceType: 'App Development' },
    ],
  };
}

export function SchemaOrg({ schema, schemaType = 'homepage', overrides }: SchemaOrgProps) {
  let finalSchema: SchemaShape;
  if (schema) {
    finalSchema = schema;
  } else {
    switch (schemaType) {
      case 'homepage':
      case 'service':
      case 'portfolio':
      case 'blog':
      default:
        finalSchema = { ...buildDefaultLocalBusiness(), ...(overrides || {}) } as SchemaShape;
        break;
    }
  }

  const json = JSON.stringify(finalSchema);
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}

export default SchemaOrg;
