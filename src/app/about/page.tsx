import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — ANSRD Solutions",
  description: "Who we are, why we exist, and how we help SMEs get certified and stay secure.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            About ANSRD
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Security shouldn&apos;t be{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              out of reach
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            ANSRD Solutions exists because most SMEs know they need better security —
            but the consulting industry makes it expensive, opaque, and hard to act on.
            We fix that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What we believe</h2>
              <ul className="space-y-4 text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Security is a <strong className="text-foreground">behaviour problem</strong>, not just a technology problem.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Frameworks are only useful if your team can <strong className="text-foreground">actually implement them</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>Every organisation deserves <strong className="text-foreground">audit-ready governance</strong> — not just enterprises with six-figure budgets.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What we do</h2>
              <p className="text-muted leading-relaxed mb-4">
                We turn recognised frameworks (Cyber Essentials, ISO 27001, NIST CSF, SOC 2)
                into structured implementation plans that non-technical teams can follow.
              </p>
              <p className="text-muted leading-relaxed">
                Runbooks, evidence templates, behavioural training, and ongoing support —
                everything you need to get certified and stay certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">The team</h2>
          <p className="text-muted leading-relaxed max-w-xl mx-auto mb-10">
            {/* TODO: real team bios and headshots */}
            ANSRD Solutions is led by cybersecurity practitioners with hands-on
            experience across SME governance, framework implementation, and behavioural
            awareness training.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* TODO: replace with real team members */}
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">
                  {/* TODO: headshot */}A
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-1">
                {/* TODO: [FULL NAME] */}[Founder Name]
              </h3>
              <p className="text-sm text-muted">Founder &amp; Lead Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-6">
            Ready to work together?
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Tell us about your organisation and we&apos;ll reply with a short assessment
            and your prioritized first actions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
