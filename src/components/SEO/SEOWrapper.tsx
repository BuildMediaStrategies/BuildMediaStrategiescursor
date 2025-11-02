import React, { PropsWithChildren } from 'react';
import MetaTags, { MetaTagsProps } from './MetaTags';
import SchemaOrg, { SchemaOrgProps } from './SchemaOrg';

type SchemaType = NonNullable<SchemaOrgProps['schemaType']>;

type SEOWrapperProps = PropsWithChildren<
  Omit<MetaTagsProps, 'type'> & {
    schemaType?: SchemaType;
    schemaOverrides?: SchemaOrgProps['overrides'];
    type?: MetaTagsProps['type'];
  }
>;

export function SEOWrapper({ children, schemaType = 'homepage', schemaOverrides, ...meta }: SEOWrapperProps) {
  return (
    <>
      <MetaTags {...meta} />
      <SchemaOrg schemaType={schemaType} overrides={schemaOverrides} />
      {children}
    </>
  );
}

export default SEOWrapper;
