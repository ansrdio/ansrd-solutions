export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Human-Risk Modelling",
      description:
        "We map behavioural risk patterns across your organisation — identifying where human error creates the most exposure and prioritising accordingly.",
      output: "Behavioural risk profile",
    },
    {
      number: "02",
      title: "Behaviour-Guided Pathways",
      description:
        "Risk-prioritised implementation pathways that reduce decision fatigue. Each step is designed for non-technical teams to execute without guesswork.",
      output: "Implementation intelligence",
    },
    {
      number: "03",
      title: "Workflow Orchestration",
      description:
        "Behaviour-guided workflows that reduce human error during operations. Clear actions, evidence capture, and governance checkpoints built in.",
      output: "Verified controls + evidence",
    },
    {
      number: "04",
      title: "Governance Automation",
      description:
        "Behavioural telemetry, adaptive reinforcement, and automated compliance checks make your security posture self-sustaining and audit-ready.",
      output: "Continuous governance",
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
            The Behaviour-Driven Implementation Engine
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Our engine operationalises compliance through behavioural workflows —
            each phase reduces human-risk and builds sustainable security culture.
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
