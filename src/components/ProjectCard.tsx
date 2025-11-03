import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  summary: string;
  sector: string;
  stack: string;
  description: string;
  features: string[];
  images: string[];
  imageOnRight?: boolean;
  priorityImage?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  imageSizes?: string;
}

export default function ProjectCard({
  title,
  summary,
  sector,
  stack,
  description,
  features,
  images,
  imageOnRight = false,
  priorityImage = false,
  imageWidth = 1200,
  imageHeight = 800,
  imageSizes = '(max-width: 1024px) 100vw, 50vw',
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([0]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = prev === images.length - 1 ? 0 : prev + 1;
        setVisibleIndices((existing) => (existing.includes(next) ? existing : [...existing, next]));
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const ImageSection = () => (
    <div className="relative bg-black aspect-[4/3] lg:aspect-auto overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((image, index) =>
          visibleIndices.includes(index) ? (
            <img
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              loading={priorityImage && index === 0 ? 'eager' : 'lazy'}
              fetchpriority={priorityImage && index === 0 ? 'high' : undefined}
              decoding="async"
              width={imageWidth}
              height={imageHeight}
              sizes={imageSizes}
              srcSet={`${image.replace(/(\.[^.]+)$/u, '-sm$1')} 600w, ${image} 1200w`}
            />
          ) : null
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, () => setCurrentImageIndex(index))}
              className={`w-2 h-2 transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-600'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const TextSection = () => (
    <div className="flex flex-col justify-center p-8 lg:p-12 bg-black">
      <h2 className="text-3xl lg:text-4xl font-sans font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-lg font-sans font-normal mb-6 leading-relaxed" style={{ color: '#BBBBBB' }}>
        {summary}
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        <span className="px-4 py-1.5 text-sm font-sans font-normal text-white border border-gray-700">
          {sector}
        </span>
        <span className="px-4 py-1.5 text-sm font-sans font-normal border border-gray-700" style={{ color: '#BBBBBB' }}>
          {stack}
        </span>
      </div>
      <button
        onClick={() => setIsFlipped(true)}
        onKeyDown={(e) => handleKeyDown(e, () => setIsFlipped(true))}
        className="inline-block px-8 py-3 bg-white text-black font-sans font-medium hover:bg-gray-200 transition-colors text-left w-fit"
        aria-label={`View details for ${title}`}
      >
        Details
      </button>
    </div>
  );

  return (
    <div className="w-full" style={{ perspective: '2000px' }}>
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="w-full"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-black border-t border-gray-800">
            {imageOnRight ? (
              <>
                <div className="order-2 lg:order-1">
                  <TextSection />
                </div>
                <div className="order-1 lg:order-2">
                  <ImageSection />
                </div>
              </>
            ) : (
              <>
                <div className="order-1">
                  <ImageSection />
                </div>
                <div className="order-2">
                  <TextSection />
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="bg-black border-t border-gray-800 p-8 lg:p-12 min-h-[400px] lg:min-h-[500px] flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl lg:text-4xl font-sans font-bold text-white">
                {title}
              </h2>
              <button
                onClick={() => setIsFlipped(false)}
                onKeyDown={(e) => handleKeyDown(e, () => setIsFlipped(false))}
                className="text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Close details"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-lg font-sans font-normal mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
              {description}
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white mt-3 flex-shrink-0"></div>
                  <p className="text-base font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsFlipped(false)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsFlipped(false))}
              className="inline-block px-8 py-3 border border-white text-white font-sans font-medium hover:bg-white hover:text-black transition-colors w-fit mt-auto"
              aria-label="Close details"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
