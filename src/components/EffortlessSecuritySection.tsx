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
          <p className="text-lg font-sans font-normal text-black">
            Mobile-first design ensures your customers enjoy a flawless experience wherever they are
          </p>
        </div>

        {/* Central Graphic */}
        <div className="flex items-center justify-center min-h-[500px] relative">
          <video
            src="/built-for-screens.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            loading="lazy"
            width={800}
            height={600}
            className="w-full max-w-2xl h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}