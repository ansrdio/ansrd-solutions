import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Link from "next/link";

const features = [
  {
    title: "Behavioural Risk Scoring",
    description: "We assess your human-risk patterns, map behavioural gaps, and baseline organisational security maturity against target frameworks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Risk-Prioritised Implementation Pathways",
    description: "Not a 200-page report. Behaviour-guided pathways that sequence high-impact controls for non-technical teams.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h10M4 18h6" />
      </svg>
    ),
  },
  {
    title: "Behaviour-Guided Workflows",
    description: "Implementation workflows designed to reduce human error during cybersecurity operations — clear, guided, and evidence-ready.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Compliance Workflow Orchestration",
    description: "Automated evidence collection, governance actions, and audit-ready documentation — orchestrated through behavioural workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Adaptive Awareness Pathways",
    description: "Micro-learning and behavioural reinforcement modules designed to improve long-term security habits and reduce human-risk.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Continuous Governance",
    description: "Ongoing checks and evidence collection ensure controls stay embedded in your organisation\'s daily operations — automation on the roadmap.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

// TODO: reinstate testimonials when real, attributable quotes (full name, company,
// optional logo/LinkedIn) are available
// type Testimonial = {
//   quote: string;
//   name: string;        // full name
//   role: string;
//   company: string;     // real company name
//   logoUrl?: string;
//   linkUrl?: string;    // LinkedIn or company site
// };

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />

      {/* Solution / How it works */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              From risk assessment to certification — guided every step
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              A structured implementation system that maps your human-risk patterns, prioritises what matters, and walks your team through each control — with evidence templates your auditor will accept.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Risk Assessment", desc: "We map your current posture, identify human-risk patterns, and baseline your organisation against target frameworks." },
              { num: "2", title: "Prioritised Roadmap", desc: "A sequenced implementation plan that tackles highest-impact controls first — designed for non-technical teams." },
              { num: "3", title: "Guided Implementation", desc: "Step-by-step runbooks and workflows reduce decision fatigue so your team can execute without guesswork." },
              { num: "4", title: "Awareness & Habits", desc: "Targeted training that builds lasting security behaviours through micro-learning and phishing simulations." },
              { num: "5", title: "Evidence & Audit-Readiness", desc: "Continuous evidence collection mapped to framework requirements — always audit-ready, not last-minute scrambles." },
              { num: "6", title: "Scale & Certify", desc: "Once certified, expand to additional frameworks as your organisation grows. All documentation transfers." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Everything an SME needs to get — and stay — secure
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-glow-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Trust Bar */}
      <section className="py-12 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              Framework-Aligned Behavioural Governance
            </h2>
            <p className="text-muted">Operationalising compliance through behaviour-driven workflows.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "CE Certified Approach", badge: "CE" },
              { label: "ISO 27001 Mapped", badge: "ISO" },
              { label: "NIST CSF Aligned", badge: "NIST" },
              { label: "Evidence-First", badge: "SOC" },
            ].map((item) => (
              <div key={item.badge} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-soft border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">{item.badge}</span>
                </div>
                <span className="text-xs text-muted font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Credibility — Framework Alignment */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Aligned to the frameworks that matter
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Every implementation we deliver maps directly to recognised security frameworks
              — so your investment produces audit-ready evidence, not just a report.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { abbr: "CE", name: "Cyber Essentials" },
              { abbr: "ISO", name: "ISO 27001:2022" },
              { abbr: "NIST", name: "NIST CSF 2.0" },
              { abbr: "SOC", name: "SOC 2 Type II" },
              { abbr: "CIS", name: "CIS Controls v8" },
              { abbr: "GDPR", name: "UK GDPR" },
            ].map((fw) => (
              <div key={fw.abbr} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-white shadow-soft border border-border/50">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">{fw.abbr}</span>
                </div>
                <span className="text-xs text-muted font-medium text-center">{fw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 gradient-hero">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
            Ready to operationalise your security?
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Get a behaviour-driven implementation plan tailored to your organisation. No sales pitch — just your risk-prioritised first steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-foreground px-8 py-3.5 rounded-full font-semibold text-base border border-border hover:border-primary/30 hover:text-primary transition-all shadow-soft"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
