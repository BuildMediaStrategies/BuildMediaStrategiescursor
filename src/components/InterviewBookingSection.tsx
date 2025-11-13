import { Check } from 'lucide-react';

export default function InterviewBookingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center lg:text-left bg-white" aria-labelledby="growth-partner-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Section: Text Content */}
          <div className="lg:pr-8">
            <h2 id="growth-partner-heading" className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Your Growth Partner<br/>
              <span className="text-sky-gradient">From Strategy to Launch</span>
            </h2>

            <p className="text-base sm:text-lg font-sans font-normal mb-6 sm:mb-8 leading-relaxed text-gray-600">
              From strategy to launch, we build websites and AI systems that deliver
              measurable business results. No fluff, just outcomes you can track.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg font-sans font-normal text-gray-700">Strategic discovery sessions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg font-sans font-normal text-gray-700">Conversion-optimized design</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg font-sans font-normal text-gray-700">Continuous optimization</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="btn-gradient inline-block px-6 py-3 rounded-lg font-sans font-normal text-white active:scale-95"
            >
              Book a Strategy Call
            </a>
          </div>

          {/* Right Section: Dashboard Interface */}
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/ChatGPT Image Oct 12, 2025, 11_58_36 AM.png"
              alt="Modern web dashboard interface showing analytics, metrics, and user engagement data visualization"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}