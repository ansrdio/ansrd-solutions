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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-red bg-red/10 px-4 py-1.5 rounded-full mb-6">
            Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            What this is <span className="text-red">not</span>
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            There are plenty of security tools, consultants, and platforms. This is
            fundamentally different in approach and output.
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {comparisons.map((item) => (
            <div
              key={item.not}
              className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border/50 shadow-soft"
            >
              <div className="bg-red/5 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-red">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-red">Not {item.not.toLowerCase()}</span>
                </div>
                <p className="text-xs text-muted ml-8">{item.notDetail}</p>
              </div>
              <div className="bg-green/5 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-green">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-green">{item.instead}</span>
                </div>
                <p className="text-xs text-muted ml-8">{item.insteadDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
