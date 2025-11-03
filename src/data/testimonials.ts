export type Testimonial = {
  author: string;
  title: string;
  company: string;
  location?: string;
  quote: string;
  rating: number; // 1-5
  projectType: string;
  avatarUrl?: string;
  videoUrl?: string; // optional video testimonial
};

export const testimonials: Testimonial[] = [
  {
    author: 'Sarah Julian',
    title: 'CEO',
    company: 'TechStart Inc',
    location: 'London, UK',
    quote:
      'BuildMediaStrategies transformed our online presence completely. Conversions up 150% and the site is lightning fast.',
    rating: 5,
    projectType: 'Website Redesign',
    // avatarUrl: '/avatars/sarah.jpg',
  },
  {
    author: 'Michael Chen',
    title: 'Founder',
    company: 'GrowthLab',
    location: 'Manchester, UK',
    quote:
      'Development quality and communication were exceptional. Delivered a custom solution that exceeded expectations.',
    rating: 5,
    projectType: 'Web App Development',
    // avatarUrl: '/avatars/michael.jpg',
  },
  {
    author: 'Emma Rodriguez',
    title: 'Marketing Director',
    company: 'BrightCo',
    quote:
      'Strategic, fast, and reliable. Our campaigns now have the performance foundation they needed.',
    rating: 5,
    projectType: 'Performance Optimisation',
    // avatarUrl: '/avatars/emma.jpg',
    videoUrl: 'https://example.com/videos/brightco-testimonial.mp4',
  },
  {
    author: 'James Hamilton',
    title: 'Engagement Lead',
    company: 'Hamilton-Nexus',
    quote:
      'The dashboard removed guesswork. Clients feel in control and our team saves hours every week.',
    rating: 5,
    projectType: 'Portal & Dashboard',
    // avatarUrl: '/avatars/james.jpg',
  },
  {
    author: 'Laura Bennett',
    title: 'Director',
    company: 'SOS Electrical LTD',
    location: 'Kent, UK',
    quote:
      'Leads are up and better qualified. Scheduling is automatic and our response time is instant.',
    rating: 5,
    projectType: 'Website & Lead Automation',
    // avatarUrl: '/avatars/laura.jpg',
  },
];
