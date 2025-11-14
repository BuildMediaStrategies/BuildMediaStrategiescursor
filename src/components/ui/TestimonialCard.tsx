import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  location?: string;
  photo?: string;
}

export default function TestimonialCard({ quote, author, company, location, photo }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-1 mb-3" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <div className="text-lg text-black mb-5">“{quote}”</div>
      <div className="flex items-center gap-3">
        {photo ? (
          <img
            src={photo}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width={48}
            height={48}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200" aria-hidden />
        )}
        <div>
          <div className="font-bold text-gray-900">{author}</div>
          <div className="text-sm text-black">{company}{location ? `, ${location}` : ''}</div>
        </div>
      </div>
    </div>
  );
}
