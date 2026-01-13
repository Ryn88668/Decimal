import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">
              Marketing for CPA & Advisory Firms
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Build a marketing system that runs without you
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Most accounting firms have a reputation problem — not because they lack expertise, but because no one can find them. We build marketing systems that generate qualified leads while you focus on client work.
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
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              Sound familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Referrals are unpredictable",
                desc: "Your best clients came from word-of-mouth, but you can't control when — or if — the next one shows up."
              },
              {
                title: "Your website doesn't convert",
                desc: "You invested in a nice-looking site, but it doesn't generate leads or clearly communicate what makes you different."
              },
              {
                title: "Marketing feels like a time sink",
                desc: "You've tried posting on LinkedIn, sending newsletters, maybe even running ads — but nothing sticks."
              },
              {
                title: "Agencies don't get your business",
                desc: "Generic marketing agencies push tactics that work for e-commerce, not professional services."
              },
              {
                title: "You're too busy for marketing",
                desc: "Between client work, tax season, and running the firm, marketing always falls to the bottom of the list."
              },
              {
                title: "No system, just scattered efforts",
                desc: "You know you should be doing more, but there's no cohesive strategy tying everything together."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">
                The Decimal Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                Marketing that compounds, not campaigns that expire
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't sell tactics or chase trends. We build systems — clear messaging, consistent content, and practical automation — that generate leads month after month.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Everything we create is designed to work quietly in the background, so you can focus on serving clients while your marketing works for you.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors"
              >
                View our services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">What we build for you</h3>
              <div className="space-y-4">
                {[
                  { title: "Clear messaging", desc: "Know exactly what to say and how to say it" },
                  { title: "Website that converts", desc: "Turn visitors into qualified leads" },
                  { title: "Content engine", desc: "Consistent visibility that builds authority" },
                  { title: "Automated follow-up", desc: "Never let a lead slip through the cracks" },
                  { title: "Growth roadmap", desc: "A clear plan for the next 12 months" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-slate-900 font-medium">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-3">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
              Three pillars of predictable growth
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A complete system that covers strategy, execution, and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Messaging & Website",
                desc: "Clarify your positioning and rebuild your site as a conversion engine.",
                items: ["Messaging framework", "Homepage optimization", "Landing pages", "Clear CTAs"]
              },
              {
                num: "02",
                title: "Digital Marketing",
                desc: "Build consistent visibility that attracts the right clients.",
                items: ["SEO foundations", "Content creation", "Email newsletters", "LinkedIn presence"]
              },
              {
                num: "03",
                title: "AI & Automation",
                desc: "Practical automation that saves time and improves follow-up.",
                items: ["Lead follow-up", "Review requests", "Email nurturing", "CRM workflows"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <span className="text-sm font-medium text-slate-500">{service.num}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-slate-300 transition-colors"
            >
              Explore all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 90-Day Foundation Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                The 90-Day Marketing Foundation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In 90 days, we build your complete marketing system — from messaging clarity to content engine to growth roadmap. No fluff, no filler, just focused execution.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { phase: "Days 0–30", title: "Discovery & Foundation", desc: "Messaging, positioning, and quick wins" },
                  { phase: "Days 30–60", title: "Build & Launch", desc: "Website, content, and email setup" },
                  { phase: "Days 60–90", title: "Content & Cadence", desc: "Publishing, automation, and roadmap" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-slate-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{item.phase}</p>
                      <p className="text-slate-900 font-medium">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors"
              >
                See the full process
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 lg:order-1">
              <h3 className="text-lg font-semibold text-white mb-6">What you walk away with</h3>
              <ul className="space-y-4">
                {[
                  "Complete messaging framework",
                  "Optimized website and landing pages",
                  "8+ SEO-optimized articles",
                  "Email newsletter system",
                  "Lead follow-up automation",
                  "12-month marketing roadmap"
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

      {/* Who It's For */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
              Built for firms like yours
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Decimal works best with CPA, tax, advisory, and professional service firms who value credibility and want systems — not just campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Great fit
              </h3>
              <ul className="space-y-3">
                {[
                  "CPA, tax, or advisory firm",
                  "Strong reputation, inconsistent marketing",
                  "Ready to invest in a foundation",
                  "Value quality over volume",
                  "Want systems, not just tactics"
                ].map((item, index) => (
                  <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not a fit
              </h3>
              <ul className="space-y-3">
                {[
                  "Need results in 30 days",
                  "Looking for the cheapest option",
                  "Want aggressive, high-volume tactics",
                  "Not ready to invest in marketing",
                  "Prefer to \"set it and forget it\""
                ].map((item, index) => (
                  <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Ready to build your marketing foundation?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Schedule a 30-minute call to discuss your firm, your goals, and see if there's a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 text-base font-medium rounded-md hover:bg-slate-100 transition-colors"
              >
                Schedule a Strategy Call
              </Link>
              <Link
                href="/about"
                className="bg-transparent text-white px-8 py-4 text-base font-medium rounded-md border border-slate-600 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                Learn About Decimal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
