import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';

export default function WebDesignCanterbury() {
  return (
    <>
      <SEOWrapper
        title="Canterbury Web Design"
        description="Expert web design services in Canterbury, Kent. Custom React websites that help businesses stand out in this historic city."
        canonical="https://buildmediastrategies.com/web-design-canterbury"
        schemaType="location"
        keywords="web design Canterbury, website design Canterbury Kent, web developer Canterbury, React websites Canterbury, Canterbury web design services"
        ogType="website"
      />

      <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
          </a>
          <a
            href="/"
            className="px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 text-sm"
          >
            Back to Home
          </a>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Web Design in Canterbury, Kent
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              BuildMediaStrategies delivers professional web design and development services to businesses throughout Canterbury.
              Websites that blend timeless design principles with modern technology.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#BBBBBB' }}>
              <p>
                Canterbury is a city where history meets innovation, and your business's online presence should reflect that same
                blend of tradition and forward-thinking. As a thriving hub for education, tourism, and business, Canterbury demands
                digital solutions that can compete on both local and national levels. BuildMediaStrategies specializes in creating
                websites that help Canterbury businesses establish a strong online presence and reach their target audiences effectively.
              </p>

              <p>
                In a competitive marketplace, your website needs to do more than simply exist. It needs to engage visitors, communicate
                your value proposition clearly, and guide people toward taking action. Our React-based development approach ensures your
                website delivers a premium user experience that keeps visitors engaged. Fast loading times, smooth animations, and
                intuitive navigation aren't just nice features; they're essential elements that determine whether potential customers
                stay on your site or move on to a competitor.
              </p>

              <p>
                Every business in Canterbury has a unique story to tell and specific goals to achieve. That's why we reject templated
                solutions in favor of custom-built websites tailored to your needs. Through our collaborative design process, we work
                closely with you to understand your brand identity, target audience, and business objectives. Whether you need an
                e-commerce platform to sell products online, a booking system for services, or an informational site to establish
                credibility, we create solutions that align perfectly with your requirements.
              </p>

              <p>
                Visibility in local search results is crucial for Canterbury businesses looking to attract nearby customers. Our websites
                are built with search engine optimization principles embedded from the ground up. From semantic HTML and optimized content
                to fast page speeds and mobile responsiveness, every technical element is crafted to help search engines understand and
                rank your site. This strategic approach to SEO means more people in Canterbury and the surrounding area will discover
                your business when searching for services you provide.
              </p>

              <p>
                Launching your website is just the beginning of your digital journey. Technology evolves, customer expectations change,
                and your business grows. We provide comprehensive maintenance and support services to ensure your website remains secure,
                up-to-date, and effective over time. Whether you need regular content updates, security patches, or new features added,
                we're here to support your success every step of the way. Our goal is to be your trusted partner in building and
                maintaining a digital presence that drives real business results.
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
                Start Your Digital Transformation Today
              </h2>
              <p className="text-lg mb-8" style={{ color: '#BBBBBB' }}>
                Serving businesses across Canterbury and East Kent — book your free consultation today.
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
