import React, { useEffect, useMemo, useRef, useState } from 'react';

const MESSAGES = [
  'John from Canterbury just requested an AI demo',
  'Sarah from Dover downloaded the speed audit',
  'Mike from Deal booked a consultation',
  'Priya from Folkestone checked ROI savings',
  'Tom from Canterbury asked about custom apps',
  'Jess from Dover tried the chatbot demo',
  'Chris from Deal viewed portfolio case studies',
  'Amelia from Folkestone scheduled a call',
  'Oliver from Canterbury compared site speed',
  'Emily from Dover asked about pricing'
];

export default function LiveStats() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextDelay = useMemo(() => {
    // 8 - 12 seconds
    return 8000 + Math.floor(Math.random() * 4000);
  }, [index]);

  useEffect(() => {
    if (dismissed) return;
    timerRef.current && window.clearTimeout(timerRef.current);

    // show
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
      // hide after 3.5s then advance
      window.setTimeout(() => {
        setOpen(false);
        setIndex((i) => (i + 1) % MESSAGES.length);
      }, 3500);
    }, nextDelay) as unknown as number;

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, nextDelay, dismissed]);

  if (dismissed) return null;

  return (
    <div className={`fixed left-4 bottom-4 z-[60] transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-[320px] max-w-[85vw]">
        <div className="flex items-start gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-200" aria-hidden />
            <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-[#10b981] rounded-full border-2 border-white" aria-hidden />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-800">{MESSAGES[index]}</div>
            <div className="text-xs text-black mt-1">Just now</div>
          </div>
          <button onClick={() => setDismissed(true)} className="text-gray-400 hover:text-black text-sm">✕</button>
        </div>
      </div>
    </div>
  );
}

