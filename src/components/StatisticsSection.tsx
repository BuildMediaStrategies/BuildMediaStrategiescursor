export default function StatisticsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-gray-900 mb-5 sm:mb-6 tracking-wide">
            Proven Performance<br/>
            <span className="text-sky-gradient">
              Measurable Results
            </span>
          </h2>
          <p className="text-base sm:text-lg font-sans font-light text-gray-600 px-4 sm:px-0">
            Real metrics from businesses using our web design and AI solutions
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 place-items-center">
          {/* Average Rating Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2 text-gray-500">
              Avg Rating
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold text-sky-gradient mb-2">
              5.0
            </div>
            <p className="text-sm font-sans font-light text-gray-600">
              Partner with confidence.
            </p>
          </div>

          {/* Systems Delivered Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2 text-gray-500">
              Systems Delivered
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold text-sky-gradient mb-2">
              25+
            </div>
            <p className="text-sm font-sans font-light text-gray-600">
              Experience that delivers.
            </p>
          </div>

          {/* Client Satisfaction Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2 text-gray-500">
              Client Satisfaction
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold text-sky-gradient mb-2">
              100%
            </div>
            <p className="text-sm font-sans font-light text-gray-600">
              Trusted by businesses.
            </p>
          </div>

          {/* Conversion Lift Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2 text-gray-500">
              Avg Conversion Lift
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold text-sky-gradient mb-2">
              160%
            </div>
            <p className="text-sm font-sans font-light text-gray-600">
              Growth you can measure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}