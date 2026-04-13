export default function NotThis() {
  const comparisons = [
    {
      not: "Traditional consulting",
      instead: "A structured implementation system with defined outputs",
      notDetail: "Open-ended advisory with no clear deliverables",
      insteadDetail: "Every engagement produces a prioritized checklist with runbooks",
    },
    {
      not: "A complex compliance tool",
      instead: "Clear checklists your team can follow without training",
      notDetail: "Software that requires weeks of onboarding",
      insteadDetail: "Step-by-step actions anyone on your team can execute",
    },
    {
      not: "A dashboard-heavy SaaS platform",
      instead: "Focused on implementation, not monitoring vanity metrics",
      notDetail: "Pretty charts that don't change your security posture",
      insteadDetail: "Real controls in place with real evidence of completion",
    },
    {
      not: "A one-time audit",
      instead: "A continuous improvement path toward automation",
      notDetail: "A report that sits in a drawer gathering dust",
      insteadDetail: "A living system that evolves as your business grows",
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <span className="inline-block text-xs font-mono text-red tracking-wider uppercase mb-3">
            // differentiation.map
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            What this is <span className="text-red">not</span>
          </h2>
          <p className="text-muted leading-relaxed">
            There are plenty of security tools, consultants, and platforms. This is
            fundamentally different in approach and output.
          </p>
        </div>
        <div className="space-y-3 max-w-3xl">
          {comparisons.map((item) => (
            <div
              key={item.not}
              className="grid sm:grid-cols-2 gap-px rounded-lg overflow-hidden border border-border/50"
            >
              {/* NOT side */}
              <div className="bg-red/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-red/10 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-red">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-red/80">Not {item.not.toLowerCase()}</span>
                </div>
                <p className="text-xs text-muted ml-7">{item.notDetail}</p>
              </div>
              {/* INSTEAD side */}
              <div className="bg-green/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-green/10 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-green">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green/80">{item.instead}</span>
                </div>
                <p className="text-xs text-muted ml-7">{item.insteadDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
