'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              The 90-Day Marketing Foundation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A structured engagement to build your marketing foundation — from messaging clarity to content engine to growth roadmap — in three focused phases.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-50 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: '1', days: '0–30', label: 'Discovery & Foundation' },
                { phase: '2', days: '30–60', label: 'Build & Launch Assets' },
                { phase: '3', days: '60–90', label: 'Content & Cadence' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{item.phase}</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">{item.label}</p>
                    <p className="text-slate-500 text-sm">Days {item.days}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-semibold text-slate-400">01</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Days 0–30</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Discovery & Foundation</h2>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                We start by understanding your firm, your ideal clients, and your current digital presence. This phase establishes the messaging foundation and identifies quick wins.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'StoryBrand messaging guide', desc: 'Clear, client-focused messaging that positions your firm as the guide to their success.' },
                  { title: 'Ideal client profiles', desc: 'Define three ideal client profiles that represent your best opportunities.' },
                  { title: 'Directory audit & optimization', desc: 'Google My Business, Bing, and key directories cleaned up and optimized.' },
                  { title: 'SEO baseline report', desc: 'Current search visibility assessment with first fixes implemented.' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border border-slate-200">
                    <h3 className="text-slate-900 font-medium mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Phase 1 Deliverables</h3>
              <ul className="space-y-4">
                {[
                  'StoryBrand messaging framework',
                  'Three ideal client profiles',
                  'Google My Business optimization',
                  'Directory listings cleanup',
                  'SEO baseline report',
                  'Competitive landscape review'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                  <span className="text-2xl font-semibold text-slate-400">02</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Days 30–60</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Build & Launch Assets</h2>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                With the foundation set, we build and launch the core assets. This is where strategy becomes tangible — pages go live, content gets created, and your email system gets activated.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Landing pages', desc: 'Up to 3 target audience landing pages with clear messaging and calls-to-action.' },
                  { title: 'Blog articles', desc: 'Up to 8 SEO-optimized articles to support a twice-per-week publishing cadence.' },
                  { title: 'Email campaign', desc: 'First newsletter/email campaign drafted and ready in your email platform.' },
                  { title: 'LinkedIn refresh', desc: 'Company page updated with new messaging, visuals, and positioning.' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border border-slate-200">
                    <h3 className="text-slate-900 font-medium mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 lg:order-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Phase 2 Deliverables</h3>
              <ul className="space-y-4">
                {[
                  'Updated homepage copy framework',
                  '3 target audience landing pages',
                  'Up to 8 blog articles',
                  'First email/newsletter campaign',
                  'LinkedIn company page refresh',
                  'Meta descriptions & page titles'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">03</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Days 60–90</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Content & Cadence</h2>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                The final phase focuses on launch and sustainability. We publish your content, establish your social presence, and deliver a complete roadmap for continued growth.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Social media starter kit', desc: '2 weeks of social content created and scheduled to establish consistent presence.' },
                  { title: 'Content publishing', desc: 'Blogs and landing pages published and live on your site.' },
                  { title: '12-month roadmap', desc: 'Complete marketing roadmap with priorities and milestones for the year ahead.' },
                  { title: 'Performance dashboard', desc: 'Baseline metrics established with clear KPIs to track progress.' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg border border-slate-200">
                    <h3 className="text-slate-900 font-medium mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Phase 3 Deliverables</h3>
              <ul className="space-y-4">
                {[
                  '2 weeks of social media content',
                  'All content published live',
                  'Performance dashboard setup',
                  '12-month marketing roadmap',
                  'Handoff documentation',
                  'Ongoing support recommendations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Roadmap Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              The 12-Month Roadmap
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At the end of 90 days, you'll have a clear plan for the year ahead with two distinct phases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full mb-4">
                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Months 1–6</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Build Visibility & Credibility</h3>
              <ul className="space-y-3">
                {[
                  'Consistent blog publishing cadence',
                  'Monthly newsletter campaigns',
                  'SEO expansion and optimization',
                  'Case studies and testimonials',
                  'Social media consistency'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="inline-flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full mb-4">
                <span className="text-xs font-medium text-white uppercase tracking-wide">Months 7–12</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Drive Growth</h3>
              <ul className="space-y-3">
                {[
                  'Paid campaign pilots (Google, Meta, LinkedIn)',
                  'Partner referral program development',
                  'Upsell & cross-sell campaigns',
                  'Video content program launch',
                  'Advanced automation sequences'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After 90 Days */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
              What happens after 90 days?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              At the end of the foundation phase, you'll have a complete marketing system and roadmap. From there, you have options:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-slate-900 font-semibold mb-2">Execute independently</h3>
                <p className="text-slate-600 text-sm">
                  Take the systems, content, and roadmap and run with it using your internal team. We're here if you need support.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-slate-900 font-semibold mb-2">Ongoing partnership</h3>
                <p className="text-slate-600 text-sm">
                  Continue with monthly support for content creation, SEO expansion, campaign management, and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Ready to build your marketing foundation?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Schedule a call to discuss your firm's situation and see if the 90-Day Foundation is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md hover:bg-slate-100 transition-colors"
            >
              Schedule a Strategy Call
            </Link>
            <Link
              href="/engagement"
              className="bg-transparent text-white px-8 py-4 text-base font-medium rounded-md border border-slate-600 hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
