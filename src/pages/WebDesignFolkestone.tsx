import SEOWrapper from '../components/SEO/SEOWrapper';
import Footer from '../components/Footer';
import Header from '../components/Layout/Header';

export default function WebDesignFolkestone() {
  return (
    <>
      <SEOWrapper
        title="Web Design Folkestone Kent | Professional Websites Folkestone"
        description="Web design services in Folkestone, Kent. Modern, fast-loading websites for local businesses. Professional development, local expertise."
        canonical="https://buildmediastrategies.com/web-design-folkestone"
        keywords="web design Folkestone, Folkestone web designer, websites Folkestone Kent"
      />

      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Web Design in Folkestone, Kent
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              BuildMediaStrategies provides expert web design services to businesses in Folkestone and across Kent.
              Professional websites built with purpose, precision, and performance in mind.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#BBBBBB' }}>
              <p>
                Folkestone's business landscape is evolving rapidly, with the Creative Quarter bringing fresh energy and opportunity
                to the town. In this dynamic environment, having a strong digital presence isn't optional; it's fundamental to success.
                BuildMediaStrategies works with businesses throughout Folkestone to create websites that capture attention, communicate
                value, and convert visitors into loyal customers. Whether you're an established company or an emerging startup, we have
                the expertise to bring your vision to life online.
              </p>

              <p>
                Technology moves fast, and your website should keep pace. We build every site using React, a modern JavaScript framework
                that powers some of the world's most popular websites. This approach delivers exceptional performance, smooth interactions,
                and a user experience that feels responsive and intuitive. When customers visit your site, they expect it to work
                flawlessly on their device of choice. Our responsive design methodology ensures your website looks stunning and functions
                perfectly whether accessed from a mobile phone, tablet, or desktop computer.
              </p>

              <p>
                Cookie-cutter templates might seem convenient, but they can't capture what makes your business unique. Our custom web
                design process starts with understanding who you are, what you offer, and who you're trying to reach. We dig deep into
                your business goals and target audience to create a website strategy that aligns with your objectives. From visual design
                and content structure to functionality and user flow, every element is carefully considered and purposefully implemented.
                The result is a website that feels authentically yours and serves your business effectively.
              </p>

              <p>
                Getting found online is essential for attracting new customers in Folkestone and the surrounding areas. Search engine
                optimization isn't an afterthought in our process; it's woven into the fabric of how we build websites. Clean code,
                fast loading speeds, mobile-friendly design, and strategic content placement all contribute to better search rankings.
                When potential customers in Folkestone search for the products or services you offer, a well-optimized website helps
                ensure they find you instead of your competitors. Our SEO-focused approach gives your business the visibility it deserves
                in local search results.
              </p>

              <p>
                Your website needs ongoing care to remain secure, relevant, and effective. Cyber threats evolve, software needs updates,
                and your business content should stay fresh and current. Our maintenance and support services take this burden off your
                shoulders, providing peace of mind that your website is in expert hands. We monitor performance, apply security patches,
                and make updates as needed to keep your site running smoothly. Think of us as your extended digital team, always ready
                to help you adapt and grow as opportunities arise.
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
                Ready to Elevate Your Online Presence?
              </h2>
              <p className="text-lg mb-8" style={{ color: '#BBBBBB' }}>
                Serving businesses across Folkestone and East Kent — book your free consultation today.
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
