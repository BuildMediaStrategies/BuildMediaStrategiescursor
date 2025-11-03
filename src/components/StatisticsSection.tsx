export default function StatisticsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white mb-5 sm:mb-6 tracking-wide">
            Proven Performance<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
          <p className="text-base sm:text-lg font-sans font-light px-4 sm:px-0" style={{ color: '#BBBBBB' }}>
            Real metrics from businesses using our web design and AI solutions
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 place-items-center">
          {/* Average Rating Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Avg Rating
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              5.0
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Partner with confidence.
            </p>
          </div>

          {/* Systems Delivered Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Systems Delivered
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Experience that delivers.
            </p>
          </div>

          {/* Client Satisfaction Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Client Satisfaction
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Trusted by businesses.
            </p>
          </div>

          {/* Conversion Lift Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Avg Conversion Lift
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              160%
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Growth you can measure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}