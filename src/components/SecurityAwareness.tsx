"use client";

import { useState } from "react";

interface Campaign {
  id: string;
  name: string;
  type: "phishing" | "vishing" | "smishing";
  status: "active" | "completed" | "scheduled";
  sent: number;
  clicked: number;
  reported: number;
}

const campaigns: Campaign[] = [
  { id: "1", name: "Invoice Scam Simulation", type: "phishing", status: "completed", sent: 48, clicked: 11, reported: 29 },
  { id: "2", name: "CEO Impersonation Test", type: "phishing", status: "completed", sent: 48, clicked: 6, reported: 34 },
  { id: "3", name: "Password Reset Lure", type: "phishing", status: "active", sent: 48, clicked: 3, reported: 38 },
  { id: "4", name: "Delivery Notification Bait", type: "smishing", status: "scheduled", sent: 0, clicked: 0, reported: 0 },
];

const modules = [
  {
    title: "Phishing Recognition",
    duration: "15 min",
    difficulty: "Beginner",
    topics: ["Email red flags", "Link inspection", "Attachment safety", "Reporting process"],
    completionRate: 87,
    color: "accent",
  },
  {
    title: "Password Hygiene",
    duration: "10 min",
    difficulty: "Beginner",
    topics: ["Strong passwords", "Password managers", "MFA setup", "Credential sharing risks"],
    completionRate: 92,
    color: "green",
  },
  {
    title: "Social Engineering Defense",
    duration: "20 min",
    difficulty: "Intermediate",
    topics: ["Pretexting", "Tailgating", "Baiting", "Quid pro quo attacks"],
    completionRate: 64,
    color: "amber",
  },
  {
    title: "Data Handling & Classification",
    duration: "12 min",
    difficulty: "Intermediate",
    topics: ["Data categories", "Sharing protocols", "Clean desk policy", "Secure disposal"],
    completionRate: 71,
    color: "accent",
  },
  {
    title: "Incident Reporting",
    duration: "8 min",
    difficulty: "Beginner",
    topics: ["What to report", "How to report", "Escalation paths", "Preservation of evidence"],
    completionRate: 78,
    color: "green",
  },
  {
    title: "Remote Work Security",
    duration: "15 min",
    difficulty: "Intermediate",
    topics: ["VPN usage", "Public Wi-Fi risks", "Device security", "Home network hardening"],
    completionRate: 55,
    color: "amber",
  },
];

const statusStyle = {
  active: { dot: "bg-green", text: "text-green", label: "LIVE" },
  completed: { dot: "bg-accent", text: "text-accent", label: "DONE" },
  scheduled: { dot: "bg-muted", text: "text-muted", label: "QUEUED" },
};

const typeIcon = {
  phishing: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  vishing: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  smishing: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

export default function SecurityAwareness() {
  const [tab, setTab] = useState<"campaigns" | "modules">("modules");

  return (
    <section id="awareness" className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-amber bg-amber/10 px-4 py-1.5 rounded-full mb-6">
            Security Awareness
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Your people are the first line of defense
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            95% of breaches involve human error. We run continuous awareness programs —
            phishing simulations, bite-sized training modules, and measurable behavior change.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("modules")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              tab === "modules"
                ? "bg-primary text-white shadow-glow-primary"
                : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
            }`}
          >
            Training Modules
          </button>
          <button
            onClick={() => setTab("campaigns")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              tab === "campaigns"
                ? "bg-primary text-white shadow-glow-primary"
                : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
            }`}
          >
            Phishing Simulations
          </button>
        </div>

        {tab === "modules" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => {
              const colorMap: Record<string, { bar: string; text: string; bg: string }> = {
                accent: { bar: "bg-accent", text: "text-accent", bg: "bg-accent/10" },
                green: { bar: "bg-green", text: "text-green", bg: "bg-green/10" },
                amber: { bar: "bg-amber", text: "text-amber", bg: "bg-amber/10" },
              };
              const c = colorMap[m.color];
              return (
                <div key={m.title} className="rounded-2xl bg-white shadow-soft border border-border/50 p-5 hover:border-primary/20 hover:shadow-glow-primary/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono ${c.text} ${c.bg} px-2 py-0.5 rounded`}>
                      {m.difficulty.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-muted">{m.duration}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">{m.title}</h4>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.topics.map((t) => (
                      <span key={t} className="text-[10px] font-medium text-muted bg-surface px-1.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-muted">COMPLETION</span>
                      <span className={`text-xs font-mono font-bold ${c.text}`}>{m.completionRate}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${c.bar} transition-all duration-700`}
                        style={{ width: `${m.completionRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "campaigns" && (
          <div className="space-y-2">
            <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2 text-[10px] font-mono text-muted uppercase tracking-widest">
              <div className="col-span-4">Campaign</div>
              <div className="col-span-1">Type</div>
              <div className="col-span-1 text-center">Status</div>
              <div className="col-span-2 text-center">Sent</div>
              <div className="col-span-2 text-center">Clicked</div>
              <div className="col-span-2 text-center">Reported</div>
            </div>
            {campaigns.map((c) => {
              const ss = statusStyle[c.status];
              const clickRate = c.sent > 0 ? Math.round((c.clicked / c.sent) * 100) : 0;
              const reportRate = c.sent > 0 ? Math.round((c.reported / c.sent) * 100) : 0;
              return (
                <div
                  key={c.id}
                  className="grid grid-cols-12 gap-3 items-center rounded-xl bg-white shadow-soft border border-border/50 px-4 py-3"
                >
                  <div className="col-span-12 sm:col-span-4">
                    <span className="text-sm font-medium text-foreground">{c.name}</span>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <span className="text-muted">{typeIcon[c.type]}</span>
                  </div>
                  <div className="col-span-3 sm:col-span-1 flex justify-center">
                    <span className={`flex items-center gap-1.5 text-[10px] font-mono ${ss.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${ss.dot} ${c.status === "active" ? "animate-pulse" : ""}`} />
                      {ss.label}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center">
                    <span className="text-sm font-mono text-foreground">{c.sent || "—"}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center">
                    {c.sent > 0 ? (
                      <span className={`text-sm font-mono ${clickRate > 15 ? "text-red" : clickRate > 5 ? "text-amber" : "text-green"}`}>
                        {c.clicked} <span className="text-[10px] text-muted">({clickRate}%)</span>
                      </span>
                    ) : (
                      <span className="text-sm font-mono text-muted">—</span>
                    )}
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-center">
                    {c.sent > 0 ? (
                      <span className={`text-sm font-mono ${reportRate > 60 ? "text-green" : reportRate > 30 ? "text-amber" : "text-red"}`}>
                        {c.reported} <span className="text-[10px] text-muted">({reportRate}%)</span>
                      </span>
                    ) : (
                      <span className="text-sm font-mono text-muted">—</span>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-4 mt-3">
              <p className="text-xs text-muted leading-relaxed">
                <span className="text-primary font-semibold">NOTE:</span> This is sample campaign data.
                Your simulations are tailored to your industry, tech stack, and common threat patterns.
                Campaigns run continuously with escalating difficulty to build real resilience.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
