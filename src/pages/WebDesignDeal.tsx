import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';
import Header from '../components/Layout/Header';

export default function WebDesignDeal() {
  return (
    <>
      <SEOWrapper
        title="Web Design Deal Kent | Professional Websites for Deal Businesses"
        description="Web design services in Deal, Kent. We build fast, conversion-focused websites for local businesses. Modern development, proven results."
        canonical="https://buildmediastrategies.com/web-design-deal"
        keywords="web design Deal, Deal web designer, websites Deal Kent, Deal business websites"
      />

      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Web Design in Deal, Kent
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Helping businesses in Deal thrive online with expert web design and development services from BuildMediaStrategies.
              Beautiful, functional websites that convert visitors into customers.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#BBBBBB' }}>
              <p>
                Deal's vibrant business community deserves websites that match the quality and character of the town itself.
                Whether you're running a seafront café, a professional services firm, or a retail business on the High Street,
                your website is a powerful tool for reaching new customers and growing your business. BuildMediaStrategies brings
                professional web design expertise to Deal, creating digital solutions that work as hard as you do.
              </p>

              <p>
                Modern web technology has transformed what's possible online. Using React and cutting-edge development practices,
                we create websites that are faster, more reliable, and easier to use than traditional approaches. Your customers
                expect a smooth, intuitive experience whether they're browsing your services, booking appointments, or making purchases.
                Our responsive designs ensure your site looks perfect and performs brilliantly on every device, from mobile phones
                to large desktop screens.
              </p>

              <p>
                What makes our web design services in Deal different is our commitment to understanding your specific needs.
                We don't believe in cookie-cutter templates or one-size-fits-all solutions. Instead, we take time to learn about
                your business, your customers, and your goals. This thorough discovery process allows us to create websites that
                truly reflect your brand and serve your business objectives. Every design decision is made with purpose, from color
                schemes and typography to navigation structure and content layout.
              </p>

              <p>
                Performance and search engine optimization are built into everything we do. A beautiful website that loads slowly
                or doesn't appear in local search results won't deliver the results you need. That's why we optimize every aspect
                of your site for speed and discoverability. When potential customers in Deal search for businesses like yours,
                you want to be found. Our SEO-friendly approach helps improve your visibility in local search results, bringing
                more qualified traffic to your site.
              </p>

              <p>
                Beyond the initial launch, we're here to support your ongoing success. Websites aren't set-and-forget projects;
                they need regular updates, security patches, and content refreshes to stay relevant and secure. Our maintenance
                packages ensure your website continues to perform optimally while you focus on running your business. We're your
                long-term partner in digital success, always available to help you adapt and grow as your needs evolve.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-3xl py-12 px-8 text-center"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg mb-8" style={{ color: '#BBBBBB' }}>
                Serving businesses across Deal and East Kent — book your free consultation today.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
