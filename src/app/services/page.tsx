import HowItWorks from "@/components/HowItWorks";
import ChecklistPreview from "@/components/ChecklistPreview";
import NotThis from "@/components/NotThis";
import Link from "next/link";

export const metadata = {
  title: "Services — ANSRD Solutions",
  description: "Behaviour-driven implementation engine: human-risk modelling, guided workflows, and governance automation for SMEs.",
};

export default function ServicesPage() {
  return (
    <>
      <HowItWorks />
      <ChecklistPreview />
      <NotThis />

      {/* Pricing / How Engagements Work */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              How Engagements Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Transparent engagement, no hidden costs
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Every organisation is different. Here&apos;s what shapes the scope and investment.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center mb-4">
                <span className="text-green font-bold text-sm">1</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Organisation size</h3>
              <p className="text-sm text-muted leading-relaxed">
                Number of employees, devices, and locations determines the control surface we need to cover.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Target framework</h3>
              <p className="text-sm text-muted leading-relaxed">
                Cyber Essentials is lighter than ISO 27001 or SOC 2. The framework you need dictates the depth of work.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                <span className="text-amber font-bold text-sm">3</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Engagement model</h3>
              <p className="text-sm text-muted leading-relaxed">
                Guided (we advise, you implement) vs. Assisted (we implement together) vs. Managed (we run it for you).
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-8 max-w-2xl mx-auto text-center">
            <h3 className="font-bold text-foreground text-lg mb-3">What to expect</h3>
            <ul className="text-sm text-muted leading-relaxed space-y-2 text-left max-w-md mx-auto mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                <span>Free initial assessment and scoping call</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                <span>Fixed-scope proposals — no surprise bills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                <span>Monthly or project-based billing available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5">✓</span>
                <span>No lock-in — all documentation and evidence is yours</span>
              </li>
            </ul>
            {/* TODO: confirm pricing model — do not invent prices */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
