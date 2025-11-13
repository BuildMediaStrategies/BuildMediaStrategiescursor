export default function EffortlessSecuritySection() {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold mb-6 leading-tight">
            <span className="text-gray-900">Built to Perform</span><br/>
            <span className="text-sky-gradient">
              On Every Device
            </span>
          </h2>
          <p className="text-lg font-sans font-normal text-gray-700">
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