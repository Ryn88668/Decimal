'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Marketing & AI Automation for CPA and Advisory Firms Ready to Scale
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              We help accounting and advisory firms turn referrals into predictable growth using clear messaging, modern digital marketing, and practical AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-slate-900 text-white px-8 py-4 text-base font-medium rounded-md hover:bg-slate-800 transition-colors text-center"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-center"
              >
                See the 90-Day Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Sound Familiar?</p>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Great at what you do, less clear on how to grow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: 'Growing primarily through referrals — which works, but is unpredictable'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: 'Website does not convert visitors into qualified leads'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                text: 'Inconsistent content publishing and follow-up'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                text: 'No clear visibility into marketing performance'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                text: 'Unsure how to use AI without disrupting operations'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: 'Too busy serving clients to focus on growth systems'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="text-slate-400 mb-3">{item.icon}</div>
                <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">The System</p>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              A three-part approach to predictable growth
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We build marketing and automation systems that compound over time — not campaigns that expire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Messaging & Positioning',
                description: 'Clarify who you serve, what makes you different, and how to communicate it clearly across your website and marketing.',
                items: ['Homepage clarity', 'Service positioning', 'Client-focused messaging']
              },
              {
                number: '02',
                title: 'Marketing & Content Engine',
                description: 'Build a consistent publishing and outreach system that attracts the right clients and reinforces your expertise.',
                items: ['SEO foundations', 'Email newsletters', 'LinkedIn presence']
              },
              {
                number: '03',
                title: 'AI & Automation Infrastructure',
                description: 'Implement practical automation that saves time, improves follow-up, and keeps your systems running without constant attention.',
                items: ['Lead follow-up', 'Review requests', 'Reporting dashboards']
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-semibold text-slate-100 mb-4">{item.number}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex items-center gap-2 text-sm text-slate-500">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">Who We Work With</p>
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Built specifically for professional service firms
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'CPA Firms', desc: 'Tax, audit, and accounting practices' },
              { title: 'Advisory Firms', desc: 'Business advisory and consulting' },
              { title: 'Fractional CFOs', desc: 'Outsourced finance leadership' },
              { title: 'Tax Specialists', desc: 'Tax planning and preparation' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 mt-10 text-sm">
            Typically $1M–$10M+ in revenue with strong reputations but inconsistent marketing systems.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Why Decimal</p>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Operator-led, outcome-focused
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                This is not a traditional agency. We're operators who build systems for professional service firms — firms that value credibility, clarity, and results over flash and volume.
              </p>

              <div className="space-y-4">
                {[
                  'Built by an operator who has run real businesses',
                  'Focused on clarity and measurable outcomes',
                  'Works with your existing tools and systems',
                  'No long-term contracts — earn the relationship',
                  'Systems designed to compound over time'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">90-Day Foundation</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What you can expect</h3>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Clear messaging', desc: 'Homepage and positioning that resonates' },
                  { label: 'Working funnel', desc: 'Website that converts visitors to leads' },
                  { label: 'Content cadence', desc: 'Consistent publishing system in place' },
                  { label: 'Automation live', desc: 'Follow-up and nurture sequences running' },
                  { label: '12-month roadmap', desc: 'Clear plan for continued growth' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-slate-900 font-medium">{item.label}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Ready to build your marketing foundation?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Schedule a 30-minute call to discuss your firm's goals and see if we're a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-8 py-4 text-base font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Schedule a Strategy Call
            </Link>
            <Link
              href="/engagement"
              className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
