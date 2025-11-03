import React from 'react';
import { InfiniteSlider } from '../motion-primitives/infinite-slider';

const items = [
  '5.0 Rating',
  '25+ Systems Delivered',
  '100% Satisfaction',
  'Performance First',
  'Secure by Design',
  'SEO Friendly',
];

export default function TrustBar() {
  return (
    <section className="px-5 lg:px-11 py-4" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <InfiniteSlider className="py-2" speed={40} speedOnHover={20} gap={28}>
          {items.map((t, i) => (
            <div key={i} className="px-3">
              <span className="text-sm md:text-base text-gray-200 border border-gray-700 px-3 py-1.5 inline-block">
                {t}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

