import React from 'react';

type Props = { className?: string; children: React.ReactNode };

export default function Card({ className = '', children }: Props) {
  return (
    <div className={`rounded-lg border border-white/10 bg-white/5 p-4 ${className}`}>{children}</div>
  );
}

