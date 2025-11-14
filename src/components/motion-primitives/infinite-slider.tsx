import React, { ReactNode } from 'react';

interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({ 
  children, 
  speed = 40, 
  speedOnHover = 20, 
  gap = 112,
  className = ""
}: InfiniteSliderProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex will-change-transform"
        style={{
          gap: `${gap}px`,
          animation: `scroll ${speed}s linear infinite`,
          '--hover-duration': `${speedOnHover}s`
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationDuration = `${speedOnHover}s`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationDuration = `${speed}s`;
        }}
      >
        {/* First set of children */}
        {childrenArray.map((child, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {childrenArray.map((child, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}