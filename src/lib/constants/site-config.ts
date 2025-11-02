export type ServiceArea = 'Dover' | 'Deal' | 'Canterbury' | 'Folkestone';

export const siteConfig = {
  company: 'Build Media Strategies',
  tagline: 'AI-Powered Web Design & Apps',
  description:
    'Transform your business with AI automation, custom web applications, and modern website design. We build future‑proof digital solutions using cutting‑edge technology.',
  siteUrl: 'https://buildmediastrategies.co.uk',
  contact: {
    phone: '+44 0000 000000',
    email: 'hello@buildmediastrategies.co.uk',
    address: {
      streetAddress: '',
      addressLocality: 'Deal',
      addressRegion: 'Kent',
      postalCode: '',
      addressCountry: 'GB',
    },
    serviceAreas: ['Dover', 'Deal', 'Canterbury', 'Folkestone'] as ServiceArea[],
  },
  social: {
    facebook: 'https://facebook.com/buildmediastrategies',
    instagram: 'https://instagram.com/buildmediastrategies',
    x: 'https://x.com/buildmediastrat',
    youtube: 'https://youtube.com/@buildmediastrategies',
    linkedin: 'https://linkedin.com/company/buildmediastrategies',
  },
  brand: {
    colors: {
      primary: '#000000',
      secondary: '#FFFFFF',
      accent: '#6B5BFF',
    },
    ogImage: '/hero-image.png',
  },
} as const;

export type SiteConfig = typeof siteConfig;

