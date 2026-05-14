import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Link from "next/link";

const features = [
  {
    title: "Gap Analysis & Assessment",
    description: "We scan your current security posture, map your systems, identify gaps, and baseline your maturity against target frameworks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Prioritized Action Plans",
    description: "Not a 200-page report. A small set of high-impact controls in the right order, mapped to your chosen framework.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h10M4 18h6" />
      </svg>
    ),
  },
  {
    title: "Step-by-Step Runbooks",
    description: "Each control has a detailed runbook: what to configure, which settings to change, and exactly what evidence to capture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Evidence Collection",
    description: "Screenshots, logs, exports — we tell your team exactly what counts as proof so audits don't fail on evidence gaps.",
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
    title: "Security Awareness Training",
    description: "Phishing simulations, bite-sized modules, and role-based education paths that build real security culture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Continuous Monitoring",
    description: "Once controls are in place, automated checks and drift detection keep your security posture self-sustaining.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "ANSRD gave us a clear, prioritized path to Cyber Essentials certification. No confusion, no wasted time — just the steps we needed.",
    name: "Sarah M.",
    role: "IT Manager, London",
  },
  {
    quote: "We went from zero security posture to ISO 27001-ready in under 6 months. The runbooks made it possible without hiring a CISO.",
    name: "James T.",
    role: "CTO, SaaS Startup",
  },
  {
    quote: "The phishing simulations were eye-opening. Our click rate dropped from 23% to under 4% in three months.",
    name: "Priya K.",
    role: "Operations Director, Manchester",
  },
];

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
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Your Cybersecurity Implementation System — Structured & Clear
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Plain, simple, effective. Here&apos;s how ANSRD works for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Scan & Assess", desc: "We review your current posture and map gaps against your target framework." },
              { num: "2", title: "Prioritize & Plan", desc: "You get a prioritized checklist — high-impact controls in the right order." },
              { num: "3", title: "Implement & Evidence", desc: "Step-by-step runbooks tell your team exactly what to do and what to capture." },
              { num: "4", title: "Train Your Team", desc: "Phishing simulations and awareness modules build lasting security culture." },
              { num: "5", title: "Verify & Monitor", desc: "Automated checks ensure controls stay in place and compliance is maintained." },
              { num: "6", title: "Certify & Scale", desc: "Evidence packages ready for auditors. Scale to additional frameworks as you grow." },
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
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Everything an SMB Needs — Built In.
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
              Your Business Security Is Our Priority
            </h2>
            <p className="text-muted">Enterprise-grade approach. Always.</p>
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

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              What clients are saying
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Trusted by Growing Businesses
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:shadow-glow-primary/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 gradient-hero">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
            Ready to secure your business?
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Get a prioritized implementation plan tailored to your business. No sales pitch. Just your first steps.
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
