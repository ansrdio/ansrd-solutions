export default function Problem() {
  const problems = [
    "Human error causes 95% of breaches — yet most programmes ignore behaviour",
    "Frameworks designed for enterprises, not the teams that actually do the work",
    "Decisions based on guesswork, not human-risk modelling",
    "No behavioural feedback loop — training happens once and is forgotten",
    "Compliance treated as a checkbox, not a sustainable culture shift",
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
              Security Fails When It Ignores Human Behaviour
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Most security programmes focus on technology. But breaches happen because of people
              — the decisions they make, the habits they don&apos;t build, and the processes that
              never become second nature. Without behavioural change, compliance is just paperwork.
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
