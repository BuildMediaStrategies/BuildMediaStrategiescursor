interface SchemaOrgProps {
  type: 'homepage' | 'service' | 'portfolio' | 'location';
  customData?: Record<string, any>;
}

export default function SchemaOrg({ type, customData = {} }: SchemaOrgProps) {
  const baseLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://buildmediastrategies.com/#organization",
    "name": "Build Media Strategies",
    "alternateName": "BuildMediaStrategies",
    "description": "Professional web design, AI automation, and app development services in Kent. Specializing in high-performance websites that drive business growth.",
    "url": "https://buildmediastrategies.com",
    "logo": "https://buildmediastrategies.com/logo.png",
    "image": "https://buildmediastrategies.com/hero-image.png",
    "telephone": "+447915738448",
    "email": "contact@buildmediastrategies.com",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Deal",
      "addressRegion": "Kent",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.2225",
      "longitude": "1.4024"
    },
    "areaServed": [
      {
        "@type": "City",
        "@id": "https://buildmediastrategies.com/#dover",
        "name": "Dover",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dover",
          "addressRegion": "Kent",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "City",
        "@id": "https://buildmediastrategies.com/#deal",
        "name": "Deal",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Deal",
          "addressRegion": "Kent",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "City",
        "@id": "https://buildmediastrategies.com/#canterbury",
        "name": "Canterbury",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Canterbury",
          "addressRegion": "Kent",
          "addressCountry": "GB"
        }
      },
      {
        "@type": "City",
        "@id": "https://buildmediastrategies.com/#folkestone",
        "name": "Folkestone",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Folkestone",
          "addressRegion": "Kent",
          "addressCountry": "GB"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Custom website design and development with focus on conversion optimization and performance",
            "areaServed": [
              { "@id": "https://buildmediastrategies.com/#dover" },
              { "@id": "https://buildmediastrategies.com/#deal" },
              { "@id": "https://buildmediastrategies.com/#canterbury" },
              { "@id": "https://buildmediastrategies.com/#folkestone" }
            ]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "description": "AI-powered business automation and intelligent systems integration",
            "areaServed": [
              { "@id": "https://buildmediastrategies.com/#dover" },
              { "@id": "https://buildmediastrategies.com/#deal" },
              { "@id": "https://buildmediastrategies.com/#canterbury" },
              { "@id": "https://buildmediastrategies.com/#folkestone" }
            ]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Custom web and mobile application development",
            "areaServed": [
              { "@id": "https://buildmediastrategies.com/#dover" },
              { "@id": "https://buildmediastrategies.com/#deal" },
              { "@id": "https://buildmediastrategies.com/#canterbury" },
              { "@id": "https://buildmediastrategies.com/#folkestone" }
            ]
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/buildmediastrategies",
      "https://twitter.com/buildmediastrategies"
    ]
  };

  let schema = { ...baseLocalBusiness, ...customData };

  if (type === 'service') {
    schema = {
      ...schema,
      "@type": ["LocalBusiness", "ProfessionalService"]
    };
  }

  if (type === 'portfolio') {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio - Build Media Strategies",
      "description": "Showcase of web design, AI automation, and app development projects",
      "url": "https://buildmediastrategies.com/portfolio",
      "mainEntity": schema
    };
    schema = portfolioSchema;
  }

  if (type === 'location') {
    schema = {
      ...schema,
      "@type": ["LocalBusiness", "Organization"]
    };
  }

  const schemaString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaString }}
    />
  );
}
