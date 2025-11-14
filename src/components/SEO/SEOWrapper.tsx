import React, { PropsWithChildren } from 'react';
import MetaTags, { MetaTagsProps } from './MetaTags';
import SchemaOrg, { SchemaOrgProps } from './SchemaOrg';

type SchemaType = NonNullable<SchemaOrgProps['schemaType']>;

type SEOWrapperProps = PropsWithChildren<
  Omit<MetaTagsProps, 'type'> & {
    schemaType?: SchemaType;
    schemaOverrides?: SchemaOrgProps['overrides'];
    type?: MetaTagsProps['type'];
    ogType?: MetaTagsProps['type'];
    schema?: SchemaOrgProps['overrides'];
  }
>;

export function SEOWrapper({
  children,
  schemaType = 'homepage',
  schemaOverrides,
  schema,
  ogType,
  type,
  ...meta
}: SEOWrapperProps) {
  const resolvedSchema = schema ?? schemaOverrides;
  const resolvedType = ogType ?? type;

  return (
    <>
      <MetaTags {...meta} type={resolvedType} />
      <SchemaOrg schemaType={schemaType} overrides={resolvedSchema} />
      {children}
    </>
  );
}

export default SEOWrapper;
