import SEOWrapper from '../components/SEO/SEOWrapper';
import { Timeline } from '../components/ui/timeline';
import { PexelsImage } from '../components/media/PexelsImage';

export default function AIOperationsPage() {
  const cardImage = (id: string, alt: string) => (
    <PexelsImage
      id={id}
      alt={alt}
      loading="lazy"
      imgClassName="w-full rounded-lg object-cover h-48 md:h-64 lg:h-80 shadow-lg"
    />
  );

    const aiServicesData = [
    {
      title: "Full-stack Development",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Full-stack Web Applications
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            End-to-end web applications built for speed, security, and scale. From frontend UX to backend infrastructure, we design and ship full-stack systems that plug directly into your existing tools and automation workflows.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Modern tech stack for fast, responsive interfaces</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Robust backend APIs ready for AI and automation</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Secure, scalable architecture built for growth</span>
            </div>
          </div>
          {cardImage('pexels-3184292', 'Full-stack web application dashboard on laptop and monitor')}
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Mobile App Development
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            Custom iOS and Android apps that keep your business in your customer’s pocket. Designed for speed, usability, and tight integration with your CRM, automations, and existing systems.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Native-feeling apps for iOS and Android</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Push notifications, in-app messaging, and secure login</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Direct integration with your AI and backend systems</span>
            </div>
          </div>
          {cardImage('pexels-3183150', 'Mobile app interfaces displayed on multiple devices')}
        </div>
      ),
    },
    {
      title: "Lead Capture Systems",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Lead Capture Systems
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            High-converting forms, landing pages, and chat experiences that capture and qualify leads automatically. Every enquiry is tracked, tagged, and routed into the right pipeline without manual data entry.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Optimised lead forms and landing pages</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Chatbots and widgets that qualify leads 24/7</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Instant sync to your CRM and email marketing tools</span>
            </div>
          </div>
          {cardImage('pexels-3184465', 'Lead capture dashboard showing incoming enquiries')}
        </div>
      ),
    },
    {
      title: "LinkedIn Lead Generation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            LinkedIn Lead Generation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            LinkedIn systems that research, warm up, and engage your ideal buyers. We combine data enrichment and AI-assisted messaging so you can open more conversations with the right people, not just send more connection requests.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Prospect lists built around your ideal client profile</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">AI-assisted outreach that still feels human</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Pipeline tracking from first touch to booked call</span>
            </div>
          </div>
          {cardImage('pexels-3183197', 'LinkedIn style interface with lead generation analytics')}
        </div>
      ),
    },
    {
      title: "Customer Support Automation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Customer Support Automation
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            AI-powered support that handles common questions, triages tickets, and routes complex issues to your team. Reduce response times, keep customers informed, and free your staff from repetitive replies.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">24/7 instant responses across chat, email, and web</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Smart FAQs, ticket tagging, and suggested replies</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Seamless escalation into your live support tools</span>
            </div>
          </div>
          {cardImage('pexels-3183150', 'Customer support automation dashboard across multiple devices')}
        </div>
      ),
    },
    {
      title: "Call Automation",
      content: (
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-sky-gradient mb-4">
            Call Automation & Voice Agents
          </h3>
          <p className="text-base sm:text-lg font-sans font-normal leading-relaxed mb-6 text-black">
            AI phone systems that answer, qualify, and route calls automatically. From missed call follow-ups to outbound campaigns, your voice agents work 24/7 without burning out your team.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Inbound call routing and intelligent IVR menus</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base mb-2">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Missed call capture, callbacks, and voicemail-to-text</span>
            </div>
            <div className="flex gap-2 items-start text-sm sm:text-base">
              <span className="text-sky-gradient">•</span>
              <span className="text-black">Integration with CRMs and booking calendars</span>
            </div>
          </div>
          {cardImage('pexels-3184296', 'Call automation and voice analytics dashboard')}
        </div>
      ),
    },
  ];
