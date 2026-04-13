import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Link from "next/link";

const pages = [
  {
    href: "/services",
    title: "Implementation System",
    description: "From framework to done in four phases. Prioritized checklists, step-by-step runbooks, and verified evidence.",
    tag: "SERVICES",
    color: "accent",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    href: "/training",
    title: "Security Training",
    description: "Phishing simulations, awareness modules, and role-based education paths. Build real security culture.",
    tag: "TRAINING",
    color: "amber",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    href: "/frameworks",
    title: "Frameworks & Assessment",
    description: "CE, ISO 27001, NIST, SOC 2, CIS, PCI DSS, GDPR — mapped into actionable controls. Take the threat assessment.",
    tag: "FRAMEWORKS",
    color: "green",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    href: "/roadmap",
    title: "Product Roadmap",
    description: "From manual implementation to full automation. See where we're headed and who we build for.",
    tag: "ROADMAP",
    color: "accent",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
  green: { bg: "bg-green/10", text: "text-green", border: "border-green/20" },
  amber: { bg: "bg-amber/10", text: "text-amber", border: "border-amber/20" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />

      {/* Page navigation cards */}
      <section className="py-12 sm:py-16 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-8">
            <span className="inline-block text-xs font-mono text-accent tracking-wider uppercase mb-3">
              // explore.ansrd
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
              Explore what we offer
            </h2>
            <p className="text-muted leading-relaxed">
              Each area of ANSRD is built to stand on its own. Dive into what matters most to you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {pages.map((p) => {
              const c = colorMap[p.color];
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`group rounded-lg border border-border/50 bg-surface-2 p-5 hover:${c.border} transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center ${c.text}`}>
                      {p.icon}
                    </div>
                    <span className={`text-[10px] font-mono ${c.text} opacity-50`}>{p.tag}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">{p.description}</p>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-mono ${c.text}`}>
                    Explore
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
