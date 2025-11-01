import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';

export default function WebDesignDover() {
  return (
    <>
      <SEOWrapper
        title="Dover Web Design"
        description="Professional web design services in Dover, Kent. Custom React websites that help local businesses grow online."
        canonical="https://buildmediastrategies.com/web-design-dover"
        schemaType="location"
        keywords="web design Dover, website design Dover Kent, web developer Dover, React websites Dover, Dover web design services"
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
              Web Design in Dover, Kent
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              BuildMediaStrategies creates modern, responsive websites for businesses across Dover and East Kent.
              Transform your online presence with professional web design that delivers results.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#BBBBBB' }}>
              <p>
                In today's digital landscape, your website is often the first impression potential customers have of your business.
                For companies in Dover, having a professional online presence isn't just an advantage, it's essential.
                BuildMediaStrategies specializes in creating custom web solutions that help local businesses stand out in a competitive market.
              </p>

              <p>
                Our approach combines modern technology with strategic design thinking. We build every website using React,
                a powerful framework that ensures your site loads quickly, performs smoothly, and provides an exceptional user experience
                across all devices. Whether your customers are browsing on a smartphone during their lunch break or researching services
                on a desktop at home, your website will look stunning and function flawlessly.
              </p>

              <p>
                What sets our Dover web design services apart is our focus on real business outcomes. We don't just create beautiful websites;
                we build digital tools that help you achieve your goals. From increasing online enquiries to streamlining customer bookings,
                every element is designed with purpose. Our responsive designs ensure that visitors from Dover and surrounding areas can easily
                navigate your site, find the information they need, and take action.
              </p>

              <p>
                We understand that every business has unique needs and challenges. That's why we take time to understand your industry,
                your customers, and your objectives before we start designing. Our collaborative process means you're involved at every stage,
                from initial concepts to final launch. We also provide ongoing support and maintenance, ensuring your website continues to
                perform optimally as your business grows.
              </p>

              <p>
                Working with local businesses throughout Kent, we've helped companies transform their digital presence and achieve measurable
                results. Our websites are built with search engine optimization in mind, helping you attract more local customers searching
                for services in the Dover area. Fast loading times, mobile optimization, and clean code aren't just technical details;
                they're essential factors that determine whether visitors stay on your site or click away to a competitor.
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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg mb-8" style={{ color: '#BBBBBB' }}>
                Serving businesses across Dover and East Kent — book your free consultation today.
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
