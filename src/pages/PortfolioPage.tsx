import { Helmet } from 'react-helmet-async';
import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const pexels = (id: string, format: 'webp' | 'avif' = 'webp') => `/pexels/${id}.${format}`;

export default function PortfolioPage() {
  const projects = [
    {
      title: 'CureCancer UCL',
      summary: 'Charity website and AI operations for admin workflows.',
      sector: 'Charity',
      stack: 'React, TypeScript, AI Automation',
      description: 'Built a comprehensive digital platform for cancer research charity operations. Integrated AI-driven workflow automation to streamline administrative tasks, donation processing, and volunteer coordination. The website serves as both a public-facing platform and an internal operations hub.',
      features: [
        'Custom donation platform with automated receipt generation',
        'AI-powered admin workflow automation reducing manual tasks by 60%',
        'Volunteer management system with automated scheduling',
        'Mobile-optimized fundraising campaign pages',
        'Real-time analytics dashboard for campaign performance',
      ],
      images: [
        pexels('pexels-6647039', 'avif'),
        pexels('pexels-6647112'),
        pexels('pexels-6647028'),
      ],
      priorityImage: true,
      imageWidth: 1200,
      imageHeight: 800,
      imageSizes: '(max-width: 1024px) 100vw, 60vw',
    },
    {
      title: 'SOS Electrical',
      summary: 'Trades website and AI lead capture.',
      sector: 'Trades',
      stack: 'React, Vite, AI Integration',
      description: 'Developed a high-converting website for an electrical services company with intelligent lead capture. AI system qualifies leads, schedules consultations, and manages customer inquiries 24/7. The platform reduced response time from hours to seconds while maintaining personal service quality.',
      features: [
        'AI chatbot handling initial customer inquiries and qualification',
        'Smart scheduling system with automated calendar integration',
        'Service area mapping with automatic quote adjustments',
        'Mobile-first design optimized for on-site access',
        'Lead tracking dashboard with conversion analytics',
      ],
      images: [
        pexels('pexels-257736'),
        pexels('pexels-1249611'),
        pexels('architecture-building-amsterdam-blue-sky-162539'),
      ],
    },
    {
      title: 'Little & Co',
      summary: 'Branding and web build for a consumer brand.',
      sector: 'Branding',
      stack: 'React, TypeScript, Custom Design',
      description: 'Created a complete brand identity and digital presence for a premium consumer brand. From logo design to web development, every touchpoint was crafted to communicate quality and trust. The website serves as a brand showcase and e-commerce platform with seamless user experience.',
      features: [
        'Complete brand identity design including logo and style guide',
        'Custom e-commerce platform with curated product experience',
        'High-quality product photography integration',
        'Streamlined checkout process with 40% conversion improvement',
        'Content management system for easy product updates',
      ],
      images: [
        pexels('pexels-4065876'),
        pexels('pexels-3184292'),
        pexels('pexels-3184296'),
      ],
    },
    {
      title: 'JCAS P&D + Interior Design',
      summary: 'Website plus AI operations for quoting and invoicing.',
      sector: 'Interior Design',
      stack: 'React, Supabase, AI Automation',
      description: 'Designed and built a complete business operations system for an interior design and painting firm. AI handles quote generation, invoice processing, and project tracking. The system transformed their workflow from manual spreadsheets to automated operations, saving 15+ hours per week.',
      features: [
        'AI-powered quoting system with automatic material calculations',
        'Automated invoice generation and client billing',
        'Project management dashboard with timeline tracking',
        'Client portal for real-time project updates and approvals',
        'Document automation for contracts and work orders',
      ],
      images: [
        pexels('pexels-1648776'),
        pexels('pexels-1090638'),
        pexels('pexels-276724'),
      ],
    },
  ];

  return (
    <>
      <SEOWrapper
        title="Our Work | Client Results & Case Studies | Kent Web Design"
        description="See how we've helped Kent businesses increase conversions by 180%, cut load times by 75%, and grow revenue. Real results, real clients."
        canonical="https://buildmediastrategies.com/portfolio"
        keywords="web design portfolio Kent, case studies, client results Dover Deal"
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/pexels/pexels-6647039.avif"
          type="image/avif"
          fetchpriority="high"
        />
      </Helmet>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
        </a>

        <div className="hidden md:flex items-center space-x-7">
          <a href="/web-design" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Web Design</a>
          <a href="/ai-operations" className="text-white cursor-pointer hover:text-gray-300 transition-colors">AI Operations</a>
          <a href="/industries" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Industries</a>
          <a href="/portfolio" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Portfolio</a>
          <a href="/#testimonials" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Testimonials</a>
          <a href="/contact" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>

      <div className="bg-black min-h-screen pt-24">
        <section className="py-16 lg:py-20 px-5 lg:px-11" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-sans font-bold text-white mb-4 leading-tight">
              Selected Work
            </h1>
            <p className="text-lg lg:text-xl font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
              Real projects for real businesses, built to solve specific problems and drive measurable outcomes.
            </p>
            <p className="text-sm font-sans font-normal mt-4" style={{ color: '#888888' }}>
              View related services: <a href="/web-design" className="text-white hover:underline">Web Design</a> • <a href="/ai-operations" className="text-white hover:underline">AI Operations</a>
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#0A0A0A' }}>
          <div className="w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                summary={project.summary}
                sector={project.sector}
                stack={project.stack}
                description={project.description}
                features={project.features}
                images={project.images}
                imageOnRight={index % 2 === 0}
                priorityImage={project.priorityImage}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                imageSizes={project.imageSizes}
              />
            ))}
          </div>
        </section>

        <div className="h-20" style={{ backgroundColor: '#0A0A0A' }}></div>
      </div>

      <Footer />
    </>
  );
}
