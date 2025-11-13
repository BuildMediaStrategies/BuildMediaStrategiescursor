export default function CTABanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center bg-white" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto">
        {/* Banner Container */}
        <div
          className="rounded-2xl sm:rounded-3xl py-12 sm:py-16 px-6 sm:px-8 text-center relative overflow-hidden bg-sky-gradient glow-gradient-hover"
        >
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
              `,
              backgroundSize: '20px 20px'
            }}
            aria-hidden="true"
          ></div>

          {/* Grey fade on bottom right */}
          <div
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(128,128,128,0.3) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          ></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Main Title */}
            <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white mb-5 sm:mb-6 leading-tight px-4 sm:px-0">
              Let's Build Something<br/>
              <span className="text-white drop-shadow-lg">
                That Performs
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-sans font-normal mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0 text-white/90">
              Get a website that converts visitors into revenue and AI systems that scale your team's output
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white font-sans font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-sky-gradient text-lg shadow-xl hover:shadow-2xl"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}