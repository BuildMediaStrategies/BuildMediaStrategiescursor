import { useState } from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { trackToolUsage, trackCTAClick } from '../../lib/analytics/conversions';

export default function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [showResults, setShowResults] = useState(false);

  // Calculations (75% time saved with AI automation)
  const weeklySavings = hours * hourlyRate * 0.75;
  const yearlySavings = weeklySavings * 52;
  const fiveYearSavings = yearlySavings * 5;

  const handleCalculate = () => {
    setShowResults(true);
    try {
      trackToolUsage('roi_calculator', {
        hours,
        hourly_rate: hourlyRate,
        weekly_savings: Math.round(weeklySavings),
        yearly_savings: Math.round(yearlySavings),
      });
    } catch {}
  };

  return (
    <div
      className="rounded-2xl sm:rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-white border border-gray-200"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          <span className="text-sky-gradient">Calculate Your AI Automation Savings</span>
        </h2>
        <p className="text-lg text-black mb-8">
          See how much time and money AI could save your business
        </p>

        {/* Sliders */}
        <div className="space-y-8 mb-8">
          {/* Hours Slider */}
          <div>
            <label className="block text-sm text-black mb-2">
              Hours per week spent on repetitive tasks
            </label>
            <div className="mb-4">
              <input
                type="range"
                min="1"
                max="40"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-200 slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${(hours / 40) * 100}%, #4b5563 ${(hours / 40) * 100}%, #4b5563 100%)`
                }}
              />
            </div>
            <div className="text-3xl font-bold text-black">
              {hours} hours per week
            </div>
          </div>

          {/* Hourly Rate Slider */}
          <div>
            <label className="block text-sm text-black mb-2">
              Average hourly cost (£)
            </label>
            <div className="mb-4">
              <input
                type="range"
                min="10"
                max="100"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-200 slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${((hourlyRate - 10) / 90) * 100}%, #4b5563 ${((hourlyRate - 10) / 90) * 100}%, #4b5563 100%)`
                }}
              />
            </div>
            <div className="text-3xl font-bold text-black">
              £{hourlyRate}/hour
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full px-7 py-3.5 btn-gradient text-white font-sans font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 mb-8"
        >
          Calculate My Savings
        </button>

        {/* Results Section */}
        {showResults && (
          <div className="mt-8 space-y-6 animate-fadeInUp">
            {/* Main Result Card */}
            <div
              className="rounded-xl p-6 border-2"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                borderColor: 'rgba(34, 197, 94, 0.2)'
              }}
            >
              <div className="text-sm text-black mb-2">Potential Yearly Savings</div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#22c55e' }}>
                £{Math.round(yearlySavings).toLocaleString()}
              </div>
              <div className="text-sm text-black">
                That's £{Math.round(weeklySavings)} per week
              </div>
            </div>

            {/* Two smaller metrics */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Weekly Savings */}
              <div
                className="rounded-lg p-4 border"
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderColor: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <div className="text-sm text-black">Weekly Savings</div>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  £{Math.round(weeklySavings)}
                </div>
              </div>

              {/* 5-Year Projection */}
              <div
                className="rounded-lg p-4 border"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderColor: 'rgba(139, 92, 246, 0.2)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <div className="text-sm text-black">5 Year Projection</div>
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  £{Math.round(fiveYearSavings).toLocaleString()}
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-sky-gradient mb-4">
                What This Means For Your Business
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-black">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Free up {Math.round(hours * 0.75)} hours per week for strategic work</span>
                </li>
                <li className="flex items-start gap-3 text-black">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Reduce operational costs by 75%</span>
                </li>
                <li className="flex items-start gap-3 text-black">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>24/7 automated customer service</span>
                </li>
                <li className="flex items-start gap-3 text-black">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ROI typically achieved in 3-6 months</span>
                </li>
              </ul>
            </div>

            {/* Final CTA Card */}
            <div
              className="rounded-xl p-8 text-center border"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
                borderColor: 'rgba(139, 92, 246, 0.3)'
              }}
            >
              <h3 className="text-2xl font-bold text-sky-gradient mb-3">
                Ready to unlock these savings?
              </h3>
              <p className="text-black mb-6">
                Book a free consultation to see exactly how we can automate your business
              </p>
              <a
                href="/contact"
                onClick={() => {
                  try { trackCTAClick('roi_calculator_contact', { page: window.location.pathname }); } catch {}
                }}
                className="inline-block px-7 py-3.5 border border-gray-600 text-white font-sans font-medium rounded-full hover:border-gray-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>

      {/* CSS for slider and animations */}
      <style>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 500ms ease-out;
        }
      `}</style>
    </div>
  );
}
