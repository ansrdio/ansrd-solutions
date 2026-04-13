export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan & Assess",
      description:
        "A focused review of your current security posture. We map your systems, identify gaps, and baseline your maturity against target frameworks.",
      output: "Gap analysis report",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Prioritize & Plan",
      description:
        "We generate a prioritized checklist — not a 200-page report. A small set of high-impact controls in the right order, mapped to your chosen framework.",
      output: "Prioritized action plan",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Implement & Evidence",
      description:
        "Each control has a step-by-step runbook: what to configure, which settings to change, and exactly what evidence to capture (screenshots, logs, exports).",
      output: "Verified controls + evidence",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Verify & Automate",
      description:
        "Once controls are in place, we help you set up continuous monitoring and automated checks. Your security posture becomes self-sustaining, not a one-off project.",
      output: "Automated compliance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-surface border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <span className="inline-block text-xs font-mono text-accent tracking-wider uppercase mb-3">
            // execution_pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            From framework to done — in four phases
          </h2>
          <p className="text-muted leading-relaxed">
            We take recognized security frameworks and compile them into a structured
            implementation pipeline. Each phase builds on the last.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 group">
                {/* Node */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-surface-3 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent/10 group-hover:border-accent/50 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-lg border border-border/50 bg-surface-2 p-5 group-hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-accent/60 bg-accent/5 px-2 py-0.5 rounded">
                      PHASE {step.number}
                    </span>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{step.description}</p>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-green">
                      <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-mono text-green">{step.output}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="sm:hidden mt-4 flex justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent/40">
                        <path d="M8 4v8M5 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
