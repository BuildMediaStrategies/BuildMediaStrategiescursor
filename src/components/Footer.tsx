import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-white" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 text-center md:text-left">
          {/* Logo and Branding */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="BuildMediaStrategies home"
            >
              <picture>
                <source srcSet="/assets/bms-logo.avif" type="image/avif" />
                <source srcSet="/assets/bms-logo.webp" type="image/webp" />
                <img
                  src="/assets/bms-logo.png"
                  alt="Build Media Strategies"
                  className="h-[72px] w-auto object-contain"
                  width="800"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </picture>
            </a>
            <p className="text-sm mt-4 text-black">
              Web design and AI operations for businesses across Kent.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base mb-4 text-sky-gradient">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/web-design" className="link-sky text-sm transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="/ai-operations" className="link-sky text-sm transition-colors">
                  AI Operations
                </a>
              </li>
              <li>
                <a href="/portfolio" className="link-sky text-sm transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="link-sky text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Areas We Serve Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base mb-4 text-sky-gradient">Kent Areas</h3>
            <ul className="space-y-3">
              <li>
                <a href="/web-design-dover" className="link-sky text-sm transition-colors">
                  Dover
                </a>
              </li>
              <li>
                <a href="/web-design-deal" className="link-sky text-sm transition-colors">
                  Deal
                </a>
              </li>
              <li>
                <a href="/web-design-canterbury" className="link-sky text-sm transition-colors">
                  Canterbury
                </a>
              </li>
              <li>
                <a href="/web-design-folkestone" className="link-sky text-sm transition-colors">
                  Folkestone
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-base mb-4 text-sky-gradient">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="link-sky text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="link-sky text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/industries" className="link-sky text-sm transition-colors">
                  Industries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-center md:text-left">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-black hover:text-sky-gradient transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-black hover:text-sky-gradient transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-black hover:text-sky-gradient transition-colors"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-black text-center md:text-left">
            <span>© Copyright BuildMediaStrategies 2025</span>
            <span aria-hidden="true"> · </span>
            <a href="/privacy" className="link-sky text-xs transition-colors">
              Privacy
            </a>
            <span aria-hidden="true"> · </span>
            <a href="/terms" className="link-sky text-xs transition-colors">
              Terms
            </a>
            <span aria-hidden="true"> · </span>
            <a href="/cookie-policy" className="link-sky text-xs transition-colors">
              Cookie Policy
            </a>
            <span aria-hidden="true"> · </span>
            <a href="/ai-disclosure" className="link-sky text-xs transition-colors">
              AI Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
