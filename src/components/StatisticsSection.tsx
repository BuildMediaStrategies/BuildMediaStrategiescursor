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
          {/* Client Satisfaction Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Client Satisfaction
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Partner with confidence.
            </p>
          </div>

          {/* Projects Delivered Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Projects Delivered
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Experience that delivers.
            </p>
          </div>

          {/* Page Load Speed Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Avg Load Speed
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              1.2s
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Speed that converts.
            </p>
          </div>

          {/* ROI Increase Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Avg ROI Increase
            </p>
            <div className="text-5xl sm:text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              3.5x
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