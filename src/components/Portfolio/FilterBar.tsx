import React from 'react';

type Props = { filters: string[]; value: string; onChange: (v: string) => void };

export default function FilterBar({ filters, value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded border ${value === f ? 'bg-white text-black' : ''}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

