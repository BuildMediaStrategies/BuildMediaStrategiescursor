import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface ResultsMetricsProps {
  loadTimeImprovement: string; // e.g. "75% Faster" or "-75%"
  conversionIncrease: string;  // e.g. "+180%"
  revenueImpact: string;       // e.g. "+£45K/mo"
}

const isPositive = (value: string) => !value.trim().startsWith('-');

export default function ResultsMetrics({ loadTimeImprovement, conversionIncrease, revenueImpact }: ResultsMetricsProps) {
  const items = [
    { value: loadTimeImprovement, label: 'Load Time' },
    { value: conversionIncrease, label: 'Conversions' },
    { value: revenueImpact, label: 'Revenue' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((m) => {
        const positive = isPositive(m.value);
        return (
          <div key={m.label} className="bg-white rounded-xl shadow p-5 border border-gray-100 flex items-center justify-between">
            <div>
              <div className={`text-4xl font-bold ${positive ? 'text-[#10b981]' : 'text-red-600'}`}>{m.value}</div>
              <div className="text-sm text-gray-600">{m.label}</div>
            </div>
            <div className={`ml-3 ${positive ? 'text-[#10b981]' : 'text-red-600'}`} aria-hidden>
              {positive ? <ArrowUpRight className="w-6 h-6" /> : <ArrowDownRight className="w-6 h-6" />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

