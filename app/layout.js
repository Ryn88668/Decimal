'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Engagement Models', href: '/engagement' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Libre Franklin', 'Source Sans Pro', system-ui, -apple-system, sans-serif" }}>
          {/* Navigation */}
          <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">D.</span>
                  </div>
                  <span className="text-slate-900 font-semibold tracking-tight">Decimal</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2 text-sm rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-slate-900 bg-slate-50 font-medium'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                  <Link
                    href="/contact"
                    className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
                  >
                    Schedule a Call
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 text-slate-600"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 text-sm rounded-md ${
                          isActive(item.href)
                            ? 'text-slate-900 bg-slate-50 font-medium'
                            : 'text-slate-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-4 bg-slate-900 text-white px-4 py-3 text-sm font-medium rounded-md text-center"
                    >
                      Schedule a Call
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="bg-slate-50 border-t border-slate-100 mt-24">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">D.</span>
                    </div>
                    <span className="text-slate-900 font-semibold tracking-tight">Decimal</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    Marketing and AI automation for CPA and advisory firms ready to build predictable growth systems.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-slate-900 font-medium text-sm mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {navigation.slice(1, 4).map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-slate-900 font-medium text-sm mb-4">Get Started</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact" className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
                        Schedule a Call
                      </Link>
                    </li>
                    <li>
                      <Link href="/engagement" className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
                        See Engagement Models
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                  © {new Date().getFullYear()} Decimal. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="#" className="text-slate-500 text-sm hover:text-slate-700">Privacy</Link>
                  <Link href="#" className="text-slate-500 text-sm hover:text-slate-700">Terms</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
