export default function EffortlessSecuritySection() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
            Built to Perform<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              On Every Device
            </span>
          </h2>
          <p className="text-lg font-sans font-normal" style={{ color: '#BBBBBB' }}>
            Mobile-first design ensures your customers enjoy a flawless experience wherever they are
          </p>
        </div>

        {/* Central Graphic */}
        <div className="flex items-center justify-center min-h-[500px] relative">
          <video 
            src="https://res.cloudinary.com/doevp9obh/video/upload/v1759017760/Image_Animation_and_Video_Generation_d3z80b.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}