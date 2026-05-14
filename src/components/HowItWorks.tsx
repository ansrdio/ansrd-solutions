export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan & Assess",
      description:
        "A focused review of your current security posture. We map your systems, identify gaps, and baseline your maturity against target frameworks.",
      output: "Gap analysis report",
    },
    {
      number: "02",
      title: "Prioritize & Plan",
      description:
        "We generate a prioritized checklist — not a 200-page report. A small set of high-impact controls in the right order, mapped to your chosen framework.",
      output: "Prioritized action plan",
    },
    {
      number: "03",
      title: "Implement & Evidence",
      description:
        "Each control has a step-by-step runbook: what to configure, which settings to change, and exactly what evidence to capture (screenshots, logs, exports).",
      output: "Verified controls + evidence",
    },
    {
      number: "04",
      title: "Verify & Automate",
      description:
        "Once controls are in place, we help you set up continuous monitoring and automated checks. Your security posture becomes self-sustaining, not a one-off project.",
      output: "Automated compliance",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            From framework to done — in four phases
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            We take recognized security frameworks and compile them into a structured
            implementation pipeline. Each phase builds on the last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{step.description}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-green">
                  <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold text-green">{step.output}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
