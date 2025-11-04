import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#0A0A0A' }} role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 text-center md:text-left">
          {/* Logo and Branding */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block hover:opacity-80 transition-opacity" aria-label="BuildMediaStrategies home">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Build Media Strategies"
                  className="h-8 w-auto object-contain"
                  width="200"
                  height="32"
                  loading="lazy"
                />
              </picture>
            </a>
            <p className="text-gray-400 text-sm mt-4">Web design and AI operations for businesses across Kent.</p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/web-design" className="text-gray-400 text-sm hover:text-white transition-colors">Web Design</a></li>
              <li><a href="/ai-operations" className="text-gray-400 text-sm hover:text-white transition-colors">AI Operations</a></li>
              <li><a href="/portfolio" className="text-gray-400 text-sm hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Areas We Serve Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Kent Areas</h3>
            <ul className="space-y-3">
              <li><a href="/web-design-dover" className="text-gray-400 text-sm hover:text-white transition-colors">Dover</a></li>
              <li><a href="/web-design-deal" className="text-gray-400 text-sm hover:text-white transition-colors">Deal</a></li>
              <li><a href="/web-design-canterbury" className="text-gray-400 text-sm hover:text-white transition-colors">Canterbury</a></li>
              <li><a href="/web-design-folkestone" className="text-gray-400 text-sm hover:text-white transition-colors">Folkestone</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="/industries" className="text-gray-400 text-sm hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-center md:text-left">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Instagram">
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Subscribe to our YouTube channel">
              <Youtube className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © Copyright BuildMediaStrategies 2025
          </div>
        </div>
      </div>
    </footer>
  );
}