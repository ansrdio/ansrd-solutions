export default function Problem() {
  const problems = [
    "No structured implementation plan",
    "Frameworks with hundreds of controls and no priority",
    "Decisions based on guesswork, not risk data",
    "No evidence trail for auditors",
    "Security treated as a one-off project, not a process",
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-red bg-red/10 px-4 py-1.5 rounded-full mb-6">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              The Real Reason Most SMBs Fail at Security
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Frameworks like Cyber Essentials, ISO 27001, and NIST are valuable — but they
              weren&apos;t designed for a 20-person company with one IT lead. They&apos;re reference
              documents, not implementation guides.
            </p>
          </div>
          <div className="space-y-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-4 p-4 rounded-xl bg-red/5 border border-red/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red/10 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
