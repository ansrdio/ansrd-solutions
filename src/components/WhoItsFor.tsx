export default function WhoItsFor() {
  const audiences = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "SMBs (10–200 employees)",
      detail:
        "No dedicated security team. Clients and regulators expect controls. You need a system that doesn't require hiring a CISO.",
      tag: "CORE_AUDIENCE",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "IT managers wearing multiple hats",
      detail:
        "You handle IT, security, and everything else. You need runbooks, not research projects. Clear steps you can execute between tickets.",
      tag: "OPERATOR",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Businesses pursuing certification",
      detail:
        "Working toward Cyber Essentials, ISO 27001, or SOC 2? We give you the implementation path and evidence package the auditor expects.",
      tag: "COMPLIANCE",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "MSPs and security consultants",
      detail:
        "Need a repeatable delivery method for client engagements. White-label the system and scale your security practice.",
      tag: "PARTNER",
    },
  ];

  return (
    <section id="who" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Who It&apos;s For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Built for teams that do the work
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Not for enterprises with 50-person security teams. For the businesses where
            one person is IT, security, and compliance all at once.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white shadow-soft border border-border/50 p-6 hover:border-primary/20 hover:shadow-glow-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
