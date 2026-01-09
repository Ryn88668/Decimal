'use client';

import Link from 'next/link';

export default function EngagementPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Engagement Models</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Two ways to work together
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you need a complete foundation built or ongoing support to scale, there's an engagement model that fits your firm's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Option 1: 90-Day Foundation */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full mb-4">
                  <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Most Popular</span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">90-Day Foundation</h2>
                <p className="text-slate-600">
                  A complete marketing system built from scratch in 90 days.
                </p>
              </div>

              <div className="p-8">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">What's included</p>
                <ul className="space-y-4 mb-8">
                  {[
                    { title: 'Messaging & positioning', desc: 'Complete messaging framework and brand voice' },
                    { title: 'Website funnel', desc: 'Homepage and landing pages that convert' },
                    { title: 'Content engine', desc: 'SEO foundation, initial content, newsletter setup' },
                    { title: 'Automation setup', desc: 'Lead follow-up, review requests, nurture sequences' },
                    { title: '12-month roadmap', desc: 'Clear plan for continued growth after handoff' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-slate-900 font-medium">{item.title}</p>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-900">Best for:</span> Firms ready to invest in building a complete marketing foundation that they can build on for years.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-slate-900 text-white px-6 py-3 text-center font-medium rounded-md hover:bg-slate-800 transition-colors"
                >
                  Discuss the 90-Day Foundation
                </Link>
              </div>
            </div>

            {/* Option 2: Ongoing Growth Support */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full mb-4">
                  <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">After Foundation</span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">Ongoing Growth Support</h2>
                <p className="text-slate-600">
                  Monthly partnership to continue building on your foundation.
                </p>
              </div>

              <div className="p-8">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">What's included</p>
                <ul className="space-y-4 mb-8">
                  {[
                    { title: 'Monthly content', desc: 'Consistent publishing to build authority' },
                    { title: 'SEO expansion', desc: 'New pages, optimization, link building' },
                    { title: 'Automation optimization', desc: 'Refine sequences based on performance' },
                    { title: 'Reporting & insights', desc: 'Monthly reviews with actionable recommendations' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-slate-900 font-medium">{item.title}</p>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-900">Best for:</span> Firms who've completed the foundation and want continued partnership for growth.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-white text-slate-900 px-6 py-3 text-center font-medium rounded-md border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Discuss Ongoing Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              What to expect when working together
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Clear communication and structured process — no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Weekly updates',
                desc: 'Regular progress reports so you always know where things stand.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Direct access',
                desc: 'Work directly with me — not handed off to junior team members.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                title: 'Full documentation',
                desc: 'Everything we build is documented and transferable.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: 'No lock-in',
                desc: 'Month-to-month after foundation. Earn the relationship, not enforce it.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="text-slate-400 mb-4">{item.icon}</div>
                <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8 text-center">
              Common questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Do I need the 90-Day Foundation before ongoing support?',
                  a: 'Generally, yes. The foundation creates the systems that ongoing support builds upon. However, if you already have solid messaging and a working website, we can discuss starting with ongoing support directly.'
                },
                {
                  q: 'How much involvement is required from my side?',
                  a: 'During the foundation phase, plan for 2-3 hours per week for feedback and collaboration. We handle the heavy lifting, but your input is essential for authentic messaging and positioning.'
                },
                {
                  q: 'What tools do you use?',
                  a: 'We work with your existing tools when possible. Common platforms include WordPress, Webflow, HubSpot, Mailchimp, ActiveCampaign, Calendly, and various CRMs. We recommend tools based on your needs, not vendor relationships.'
                },
                {
                  q: 'Can you work with my existing website?',
                  a: 'Yes. We can optimize and expand existing sites or build new. The approach depends on your current platform and what makes sense for your goals.'
                },
                {
                  q: 'What about contracts?',
                  a: 'The 90-Day Foundation is a fixed engagement. After that, ongoing support is month-to-month with 30 days notice to pause or end. We earn the relationship through results.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                  <h3 className="text-slate-900 font-medium mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Ready to discuss which model fits?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Schedule a call to talk through your firm's situation and goals. We'll figure out together if there's a fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-slate-900 text-white px-8 py-4 text-base font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}

