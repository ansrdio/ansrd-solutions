export default function Problem() {
  const gaps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
      question: "What do I do first?",
      detail: "Frameworks list hundreds of controls with no priority. You need to know which 5 actions matter most right now — not all 114.",
      tag: "PRIORITY_NULL",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      question: "How do I actually implement it?",
      detail: "Standards describe what should exist. They don't tell your IT person which button to click, which setting to change, or which config to export.",
      tag: "NO_RUNBOOK",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
      question: "How do I prove it's done?",
      detail: "Auditors and clients want evidence. Screenshots, logs, configs. Most teams don't know what counts as proof until the audit fails.",
      tag: "EVIDENCE_MISSING",
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8">
          <span className="inline-block text-xs font-mono text-red tracking-wider uppercase mb-3">
            // gap_analysis.log
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            The problem isn&apos;t awareness. It&apos;s execution.
          </h2>
          <p className="text-muted leading-relaxed">
            Frameworks like Cyber Essentials, ISO 27001, and NIST are valuable — but they
            weren&apos;t designed for a 20-person company with one IT lead. They&apos;re reference
            documents, not implementation guides.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {gaps.map((gap) => (
            <div
              key={gap.question}
              className="group rounded-lg border border-border/50 bg-surface-2 p-6 hover:border-red/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red">
                  {gap.icon}
                </div>
                <span className="text-[10px] font-mono text-red/60 bg-red/5 px-2 py-1 rounded">
                  {gap.tag}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                &ldquo;{gap.question}&rdquo;
              </h3>
              <p className="text-sm text-muted leading-relaxed">{gap.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
