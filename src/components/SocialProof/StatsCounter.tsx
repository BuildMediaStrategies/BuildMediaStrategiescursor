import React, { useEffect, useMemo, useRef, useState } from 'react';

type Stat = { label: string; value: number; suffix?: string; decimals?: number };

const DEFAULT_STATS: Stat[] = [
  { label: 'Avg. Rating', value: 5.0, decimals: 1 },
  { label: 'Systems Delivered', value: 25, suffix: '+' },
  { label: 'Satisfaction', value: 100, suffix: '%' },
  { label: 'Avg. Conversion Lift', value: 160, suffix: '%' },
];

export default function StatsCounter({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-5 lg:px-11 py-14 border-t border-gray-800" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <CounterCard key={s.label} stat={s} start={hasStarted} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({ stat, start }: { stat: Stat; start: boolean }) {
  const [n, setN] = useState(0);
  const duration = 1400; // ms
  const decimals = stat.decimals ?? 0;
  const target = stat.value;

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  const display = useMemo(() => {
    const base = n.toFixed(decimals);
    return `${base}${stat.suffix ?? ''}`;
  }, [n, decimals, stat.suffix]);

  return (
    <div className="border border-gray-800 bg-black p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-white">{display}</div>
      <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
    </div>
  );
}

