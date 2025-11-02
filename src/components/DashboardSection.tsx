export default function DashboardSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 text-center lg:text-left" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Right Section: Text Content */}
          <div className="lg:order-2 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white mb-5 sm:mb-6 leading-tight">
              Web Design That<br/>
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                Drives Revenue
              </span>
            </h2>

            <p className="text-base sm:text-lg font-sans font-normal mb-6 sm:mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
              Every pixel serves a purpose. We build websites designed to convert
              visitors into paying customers and deliver measurable ROI.
            </p>

            <a
              href="/portfolio"
              className="inline-block px-6 py-3 rounded-lg font-sans font-normal text-white border transition-all duration-300 hover:border-gray-400 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: '#1A1A1A',
                borderColor: '#444444'
              }}
            >
              View Our Work
            </a>
          </div>

          {/* Left Section: Dashboard Visualization */}
          <div className="lg:order-1 relative">
            <video
              src="https://res.cloudinary.com/doevp9obh/video/upload/v1759016097/Image_Animation_Video_Ready_hvsl7j.mov"
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
  )
}