import React, { useEffect, useMemo, useRef, useState } from 'react';

const NAMES = ['Sarah', 'Michael', 'Emma', 'James', 'Laura', 'Tom', 'Hannah', 'George'];
const TOWNS = ['Canterbury', 'Dover', 'Deal', 'Folkestone', 'Ashford', 'Whitstable'];
const ACTIONS = [
  'just booked a strategy call',
  'requested a website audit',
  'signed up for a demo',
  'requested a quote',
  'booked a consultation',
  'started a project brief',
];

function randomOf<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomDelay() { return 8000 + Math.floor(Math.random() * 7000); } // 8–15s

export default function LiveActivity() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const timerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  const nextMessage = useMemo(() => () => {
    const name = randomOf(NAMES);
    const town = randomOf(TOWNS);
    const action = randomOf(ACTIONS);
    return `${name} from ${town} ${action}`;
  }, []);

  useEffect(() => {
    const schedule = () => {
      const delay = randomDelay();
      timerRef.current = window.setTimeout(() => {
        setMessage(nextMessage());
        setVisible(true);
        // Auto-hide after 6s
        hideTimerRef.current = window.setTimeout(() => setVisible(false), 6000);
        schedule();
      }, delay);
    };
    schedule();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [nextMessage]);

  return (
    <div
      aria-live="polite"
      className={`fixed left-4 bottom-4 z-50 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
    >
      <div className="flex items-center gap-3 bg-[#0A0A0A] border border-gray-800 text-white rounded-lg shadow-lg px-4 py-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" aria-hidden>
          <span className="w-2 h-2 bg-green-400 rounded-full block" />
        </div>
        <div>
          <div className="text-sm">{message || ' '} </div>
          <div className="text-xs text-gray-400">Real-time activity</div>
        </div>
      </div>
    </div>
  );
}

