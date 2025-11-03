export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  hero: {
    subtitle?: string;
    image?: string;
    metrics: {
      loadTimeImprovement: string;
      conversionIncrease: string;
      revenueImpact: string;
    };
  };
  overview: {
    problem: string;
    goals: string[];
    context?: string;
  };
  solution: {
    summary: string;
    highlights: string[];
  };
  technologies: string[];
  results: {
    before: string[];
    after: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    location?: string;
  };
  timeline: { title: string; content: string }[];
  relatedSlugs: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'curecancer-ucl',
    title: 'CureCancer @ UCL',
    client: 'CureCancer @ University College London',
    sector: 'Charity / Research',
    hero: {
      subtitle: 'Website rebuild and marketing management for research fundraising',
      metrics: {
        loadTimeImprovement: '-72% load time',
        conversionIncrease: '+165% conversions',
        revenueImpact: '+£28K/qtr',
      },
    },
    overview: {
      problem:
        'Legacy WordPress site with fragmented donation flows and slow performance reduced donor trust and completion rates.',
      goals: [
        'Unify donation flow and reduce friction',
        'Improve site performance and reliability',
        'Establish clear campaign landing pages',
        'Set up analytics to track donor journeys',
      ],
      context:
        'Stakeholders required CMS simplicity for staff and clear paths for donors across multiple campaigns.',
    },
    solution: {
      summary:
        'We rebuilt the site with a modern stack, consolidated donation journeys, and implemented event tracking to guide optimisation.',
      highlights: [
        'Modular page components for rapid landing page creation',
        'Optimised media delivery (AVIF/WebP + responsive sizes)',
        'GA4 event tracking for funnel insights',
        'SEO structure improvements for campaigns',
      ],
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'GA4', 'Supabase'],
    results: {
      before: [
        '6.2s Largest Contentful Paint',
        'Multiple donation links across pages',
        'No reliable conversion tracking',
      ],
      after: [
        '1.7s Largest Contentful Paint',
        'Single optimised donation flow',
        'Full funnel analytics with GA4',
      ],
    },
    testimonial: {
      quote:
        'The rebuild transformed how donors engage with our work. We finally have visibility on what drives donations and can react quickly.',
      author: 'Programme Coordinator',
      company: 'CureCancer @ UCL',
      location: 'London, UK',
    },
    timeline: [
      { title: 'Discovery', content: 'Stakeholder workshops, analytics baseline, IA audit.' },
      { title: 'Design', content: 'Component library, campaign templates, content strategy.' },
      { title: 'Build', content: 'React + Tailwind, image pipeline, GA4 events.' },
      { title: 'Launch', content: 'DNS cutover, monitoring, donor journey testing.' },
      { title: 'Iterate', content: 'A/B tests on campaigns, content updates, SEO tuning.' },
    ],
    relatedSlugs: ['sos-electrical-ltd', 'hamilton-nexus'],
  },
  {
    slug: 'sos-electrical-ltd',
    title: 'SOS Electrical LTD',
    client: 'SOS Electrical LTD',
    sector: 'Trades',
    hero: {
      subtitle: 'Website and lead generation automation',
      metrics: {
        loadTimeImprovement: '-68% load time',
        conversionIncrease: '+142% enquiries',
        revenueImpact: '+£12K/mo',
      },
    },
    overview: {
      problem:
        'Leads were inconsistent and response time was slow due to manual triage and scheduling.',
      goals: [
        'Qualify leads automatically 24/7',
        'Reduce time to first response',
        'Surface high-intent jobs to the top',
        'Improve mobile UX for on-the-go clients',
      ],
    },
    solution: {
      summary:
        'We implemented an AI-assisted intake with calendar integration and a fast, conversion-focused website.',
      highlights: [
        'AI chatbot for initial qualification and FAQs',
        'Automated calendar scheduling and reminders',
        'Service-area aware quoting prompts',
        'Performance-first mobile experience',
      ],
    },
    technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'AI Assist'],
    results: {
      before: ['Manual lead triage', 'Slow response (hours)', 'No source attribution'],
      after: ['Automated intake', 'Instant confirmation', 'UTM + call tracking'],
    },
    testimonial: {
      quote:
        'Leads are not only up, they are better qualified. The diary stays full without us constantly chasing.',
      author: 'Director',
      company: 'SOS Electrical LTD',
      location: 'Kent, UK',
    },
    timeline: [
      { title: 'Research', content: 'Call logs review, enquiry mapping, service priority.' },
      { title: 'Prototype', content: 'Lead flow and chatbot scripts.' },
      { title: 'Implement', content: 'Site build, AI intake, scheduling.' },
      { title: 'Measure', content: 'Tracking, reporting, refinement.' },
    ],
    relatedSlugs: ['curecancer-ucl', 'hamilton-nexus'],
  },
  {
    slug: 'hamilton-nexus',
    title: 'Hamilton-Nexus',
    client: 'Hamilton-Nexus',
    sector: 'Consulting / Operations',
    hero: {
      subtitle: 'Website and project management dashboard',
      metrics: {
        loadTimeImprovement: '-54% load time',
        conversionIncrease: '+96% demo bookings',
        revenueImpact: '+£17K/qtr',
      },
    },
    overview: {
      problem:
        'Fragmented tools and spreadsheets made project tracking and client reporting difficult.',
      goals: [
        'Create a central project dashboard',
        'Automate status reporting',
        'Improve client visibility and satisfaction',
        'Reduce admin time per project',
      ],
      context: 'Required SSO and role-based access for internal/external users.',
    },
    solution: {
      summary:
        'We built a web portal with real-time status, client views, and automated reporting.',
      highlights: [
        'Unified dashboard with project milestones and risks',
        'Client portal with scoped access',
        'Automated weekly status digests',
        'Exportable reports for leadership',
      ],
    },
    technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Auth'],
    results: {
      before: ['Multiple spreadsheets', 'Manual status emails', 'Inconsistent reporting'],
      after: ['Single dashboard', 'Automated digests', 'Standardised reporting'],
    },
    testimonial: {
      quote:
        'The dashboard removed the guesswork. Clients feel in control and our team saves hours every week.',
      author: 'Engagement Lead',
      company: 'Hamilton-Nexus',
    },
    timeline: [
      { title: 'Assess', content: 'Tooling audit, access model, KPI definition.' },
      { title: 'Design', content: 'Information architecture, dashboard layouts.' },
      { title: 'Build', content: 'Portal, auth, reporting pipelines.' },
      { title: 'Adopt', content: 'Rollout, training, iteration.' },
    ],
    relatedSlugs: ['curecancer-ucl', 'sos-electrical-ltd'],
  },
];

export const getCaseStudyBySlug = (slug?: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getRelatedCaseStudies = (slug: string) => {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [] as CaseStudy[];
  return current.relatedSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter(Boolean) as CaseStudy[];
};

