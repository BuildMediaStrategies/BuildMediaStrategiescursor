import React, { useState } from 'react';

export default function SpeedChecker() {
  const [result, setResult] = useState<string | null>(null);

  const check = async () => {
    const start = performance.now();
    // Simple synthetic check; in real use, call a backend or WebPageTest API.
    await new Promise((r) => setTimeout(r, 300));
    const end = performance.now();
    setResult(`${Math.round(end - start)} ms synthetic latency`);
  };

  return (
    <div className="space-y-2">
      <button className="bg-black text-white rounded px-3 py-2" onClick={check}>Run Speed Check</button>
      {result && <div className="text-sm text-gray-500">Result: {result}</div>}
    </div>
  );
}

