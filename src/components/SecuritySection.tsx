import { Lock, Hexagon } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center lg:text-left bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Section: Text Content */}
          <div className="lg:col-span-3 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-sky-gradient mb-5 sm:mb-6 leading-tight">
              AI Operations<br/>
              <span className="text-sky-gradient">Built for Scale</span>
            </h2>

            <p className="text-base sm:text-lg font-sans font-normal mb-6 sm:mb-8 leading-relaxed text-black">
              Automate repetitive work, eliminate bottlenecks, and scale operations
              without scaling headcount. AI that delivers immediate productivity gains.
            </p>

            <a
              href="/ai-operations"
              className="btn-gradient inline-block px-6 py-3 rounded-lg font-sans font-normal text-white active:scale-95"
            >
              Explore AI Solutions
            </a>
          </div>

          {/* Right Section: Security Visuals */}
          <div className="lg:col-span-2 relative">
            <video
              src="/ai-ops-clip.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}