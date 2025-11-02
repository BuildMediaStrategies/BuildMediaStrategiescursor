import React, { useMemo, useState } from 'react';

interface CalculatorState {
  hoursPerWeek: number;
  hourlyRate: number;
}

const formatGBP = (amount: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(Math.round(amount));

export default function ROICalculator() {
  const [state, setState] = useState<CalculatorState>({ hoursPerWeek: 10, hourlyRate: 25 });
  const [showResults, setShowResults] = useState(false);

  const weeklySavings = useMemo(() => state.hoursPerWeek * state.hourlyRate * 0.75, [state]);
  const yearlySavings = useMemo(() => weeklySavings * 52, [weeklySavings]);
  const fiveYearSavings = useMemo(() => yearlySavings * 5, [yearlySavings]);

  const percent = (value: number, min: number, max: number) => ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Accent header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-5">
          <h3 className="text-xl font-semibold text-gray-900">AI Automation ROI Calculator</h3>
          <p className="text-sm text-gray-600 mt-1">Estimate how much time and money you can save by automating repetitive work.</p>
        </div>

        {/* Controls */}
        <div className="p-6 space-y-8">
          {/* Hours per week */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Hours per week on repetitive tasks</label>
              <span className="text-sm text-gray-500">{state.hoursPerWeek} hrs</span>
            </div>
            <div className="relative pt-6">
              <div
                className="absolute -top-1 left-0 translate-x-[-50%] text-xs text-gray-700 bg-white border border-gray-200 rounded px-2 py-0.5 shadow-sm"
                style={{ left: `${percent(state.hoursPerWeek, 1, 40)}%` }}
              >
                {state.hoursPerWeek} hrs
              </div>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={state.hoursPerWeek}
                onChange={(e) => setState((s) => ({ ...s, hoursPerWeek: Number(e.target.value) }))}
                className="w-full appearance-none h-2 rounded-full bg-gray-200 focus:outline-none focus:ring-0"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>40</span>
              </div>
            </div>
          </div>

          {/* Hourly rate */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Average hourly cost (£)</label>
              <span className="text-sm text-gray-500">£{state.hourlyRate}</span>
            </div>
            <div className="relative pt-6">
              <div
                className="absolute -top-1 left-0 translate-x-[-50%] text-xs text-gray-700 bg-white border border-gray-200 rounded px-2 py-0.5 shadow-sm"
                style={{ left: `${percent(state.hourlyRate, 10, 100)}%` }}
              >
                £{state.hourlyRate}
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={state.hourlyRate}
                onChange={(e) => setState((s) => ({ ...s, hourlyRate: Number(e.target.value) }))}
                className="w-full appearance-none h-2 rounded-full bg-gray-200 focus:outline-none focus:ring-0"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>£10</span>
                <span>£100</span>
              </div>
            </div>
          </div>

          {/* Preview + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
            <div className="text-sm text-gray-600">
              Estimated yearly savings: <span className="font-semibold text-[#10b981]">{formatGBP(yearlySavings)}</span>
            </div>
            <button
              onClick={() => setShowResults(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
            >
              Calculate My Savings
            </button>
          </div>
        </div>

        {/* Results */}
        <div className={`px-6 pb-6 transition-all duration-500 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="space-y-4">
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
              <div className="text-emerald-700 text-sm">Your projected yearly savings</div>
              <div className="text-3xl sm:text-4xl font-bold text-[#10b981]">{formatGBP(yearlySavings)}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-100 p-5 bg-white">
                <div className="text-gray-500 text-sm">Weekly savings</div>
                <div className="text-2xl font-semibold text-[#10b981]">{formatGBP(weeklySavings)}</div>
              </div>
              <div className="rounded-xl border border-gray-100 p-5 bg-white">
                <div className="text-gray-500 text-sm">5-year projection</div>
                <div className="text-2xl font-semibold text-[#10b981]">{formatGBP(fiveYearSavings)}</div>
              </div>
            </div>

            {/* CTA gradient box */}
            <div className="rounded-xl p-5 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="text-gray-900 font-semibold">Ready to unlock these savings?</div>
                  <div className="text-gray-600 text-sm">Book a free 30-minute consultation</div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
