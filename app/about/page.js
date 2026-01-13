'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Built by an operator, for operators
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Decimal exists because professional service firms deserve marketing that reflects their standards — clear, credible, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">
                The origin
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  After years of working with professional service firms — watching them struggle with agencies that didn't understand their world, or trying to piece together marketing systems on their own — I built Decimal to fill a gap.
                </p>
                <p>
                  Most agencies sell tactics. They push the latest platform, the newest trend. But CPA and advisory firms don't need more noise. They need systems that work quietly in the background, generating leads and building relationships while they focus on client work.
                </p>
                <p>
                  This is operator-led marketing. No hype. No black boxes. Just clear systems that compound over time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">What I believe</h3>
              <div className="space-y-6">
                {[
                  { title: 'Marketing should create clarity, not noise', desc: 'Your marketing should make it easier for the right clients to find and choose you — not add complexity to your operations.' },
                  { title: 'Systems beat campaigns', desc: 'One-off campaigns have their place, but sustainable growth comes from systems that run consistently and improve over time.' },
                  { title: 'Credibility is the foundation', desc: 'For professional service firms, trust is everything. Marketing should reinforce your credibility, not undermine it.' },
                  { title: 'AI is a tool, not a replacement', desc: 'Practical automation can save significant time — but it should enhance your work, not replace the human judgment your clients value.' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <p className="text-slate-900 font-medium">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              How I work
            </h2>
            <p className="text-slate-600 leading-relaxed">
              I'm not trying to be everything to everyone. Decimal is intentionally focused — on professional service firms, on practical systems, on measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direct partnership',
                desc: 'You work directly with me, not an account manager who hands things off to junior staff. I understand your business and stay involved throughout.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: 'Transparency',
                desc: "No black boxes. You'll understand what we're doing, why we're doing it, and what the results mean. Everything is documented and transferable.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: 'Long-term thinking',
                desc: 'I build systems designed to last. No shortcuts that create technical debt. No tactics that burn out. Just steady progress that compounds.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="text-slate-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Don't Do Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
              What I don't do
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Being clear about limitations is as important as being clear about capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Chase trends or push platforms you don\'t need',
              'Promise overnight results or guaranteed rankings',
              'Use aggressive or "growth hacker" tactics',
              'Create content that doesn\'t reflect your firm\'s voice',
              'Build dependency on tools you can\'t manage',
              'Lock you into long-term contracts'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Fit Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                We're a good fit if...
              </h2>
              <div className="space-y-4">
                {[
                  'You run a CPA, tax, advisory, or professional service firm',
                  'You have a strong reputation but inconsistent marketing',
                  'You value credibility and quality over volume',
                  'You want systems, not just campaigns',
                  'You\'re ready to invest in building a foundation',
                  'You prefer working with operators, not salespeople'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">We're not a fit if...</h3>
              <div className="space-y-4">
                {[
                  'You need results in 30 days or less',
                  'You want someone to "just handle it" without involvement',
                  'You\'re looking for the cheapest option',
                  'You want aggressive, high-volume tactics',
                  'Your firm isn\'t ready to invest in marketing'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">
            Think we might be a fit?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            I'd be happy to discuss your firm's situation and see if there's a good match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-8 py-4 text-base font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/services"
              className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

