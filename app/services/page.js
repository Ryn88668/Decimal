'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Marketing and automation built for how you work
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We focus on outcomes — more qualified leads, better follow-up, and clearer visibility — not just deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Messaging & Website Conversion */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
                <span className="text-sm font-medium text-slate-900">01</span>
                <span className="text-sm text-slate-500">Foundation</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                Messaging & Website Conversion
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Your website should do more than look professional — it should convert visitors into qualified leads. We clarify your messaging and rebuild your site as a working sales funnel.
              </p>
              <p className="text-slate-900 font-medium mb-4">Outcomes:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Clear articulation of who you serve and why you're different",
                  "Homepage that immediately communicates value",
                  "Service pages that answer real client questions",
                  "Calls-to-action that generate qualified inquiries",
                  "Website structure that guides visitors to take action"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">What this looks like</h3>
              <div className="space-y-4">
                {[
                  { title: 'Messaging workshop', desc: 'Define your positioning, ideal client, and core differentiators' },
                  { title: 'Homepage rebuild', desc: 'Clear structure with compelling copy and conversion paths' },
                  { title: 'Landing pages', desc: 'Dedicated pages for key services or campaigns' },
                  { title: 'CTA optimization', desc: 'Strategic calls-to-action throughout your site' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <p className="text-slate-900 font-medium text-sm">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Digital Marketing */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-slate-900">02</span>
                <span className="text-sm text-slate-500">Engine</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                Digital Marketing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Build a consistent presence that attracts the right clients. We create content systems that compound over time — not one-off campaigns that expire.
              </p>
              <p className="text-slate-900 font-medium mb-4">Outcomes:</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Search visibility for terms your ideal clients use',
                  'Consistent content that demonstrates expertise',
                  'Email newsletter that nurtures relationships',
                  'LinkedIn presence that positions you as a thought leader',
                  'Optional paid media to accelerate specific goals'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 lg:order-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">What this looks like</h3>
              <div className="space-y-4">
                {[
                  { title: 'SEO foundations', desc: 'Technical setup, keyword strategy, and content roadmap' },
                  { title: 'Content creation', desc: 'Articles, guides, and case studies that build authority' },
                  { title: 'Email newsletters', desc: 'Regular updates that keep you top-of-mind with prospects' },
                  { title: 'LinkedIn refresh', desc: 'Profile optimization and content strategy for visibility' },
                  { title: 'Paid media pilots', desc: 'Targeted campaigns when appropriate for your goals' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-slate-300 pl-4">
                    <p className="text-slate-900 font-medium text-sm">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: AI & Automation */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700 mb-6">
                <span className="text-sm font-medium text-white">03</span>
                <span className="text-sm text-slate-400">Infrastructure</span>
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
                AI & Automation
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Practical automation that saves time and improves follow-up — without requiring you to learn new tools or disrupt your operations.
              </p>
              <p className="text-white font-medium mb-4">Outcomes:</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Automatic lead follow-up that never gets forgotten',
                  'Review requests sent at the right time',
                  'Email nurturing that runs in the background',
                  'CRM workflows that keep your pipeline organized',
                  'Dashboards that show what\'s working'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-6">What this looks like</h3>
              <div className="space-y-4">
                {[
                  { title: 'Lead follow-up automation', desc: 'Immediate response sequences for new inquiries' },
                  { title: 'Review request automation', desc: 'Timed requests after successful engagements' },
                  { title: 'Email nurturing', desc: 'Drip sequences that keep prospects engaged' },
                  { title: 'CRM workflows', desc: 'Automated pipeline management and task creation' },
                  { title: 'Reporting dashboards', desc: 'Clear visibility into marketing performance' },
                  { title: 'AI summaries and alerts', desc: 'Intelligent notifications on what matters' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-slate-600 pl-4">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
              We focus on outcomes, not tools
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We're not attached to specific platforms or technologies. We use what works for your firm, integrating with your existing tools whenever possible. The goal is a system that runs smoothly and generates results — not a stack of new software to manage.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left mt-12">
              {[
                { title: 'Clarity', desc: 'Clear messaging that resonates with your ideal clients' },
                { title: 'Consistency', desc: 'Systems that run reliably without constant attention' },
                { title: 'Compounding', desc: 'Assets that become more valuable over time' }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">
            Ready to discuss your firm's needs?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Schedule a call to talk through your goals and see how these services might fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-8 py-4 text-base font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

