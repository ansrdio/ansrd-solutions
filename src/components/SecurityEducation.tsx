"use client";

import { useState } from "react";

interface LearningPath {
  id: string;
  title: string;
  audience: string;
  duration: string;
  modules: number;
  color: string;
  colorBg: string;
  colorBorder: string;
  description: string;
  topics: { name: string; type: "video" | "lab" | "quiz" | "reading" }[];
}

const paths: LearningPath[] = [
  {
    id: "foundations",
    title: "Security Foundations",
    audience: "All Staff",
    duration: "4 hours",
    modules: 8,
    color: "text-green",
    colorBg: "bg-green/10",
    colorBorder: "border-green/30",
    description: "Core security concepts every employee needs. From password hygiene to recognizing social engineering — no technical background required.",
    topics: [
      { name: "What is cybersecurity?", type: "video" },
      { name: "Password & authentication", type: "video" },
      { name: "Phishing & social engineering", type: "lab" },
      { name: "Safe browsing & email", type: "video" },
      { name: "Data handling basics", type: "reading" },
      { name: "Physical security", type: "video" },
      { name: "Incident reporting", type: "lab" },
      { name: "Foundations assessment", type: "quiz" },
    ],
  },
  {
    id: "technical",
    title: "Technical Security",
    audience: "IT Teams",
    duration: "12 hours",
    modules: 10,
    color: "text-accent",
    colorBg: "bg-accent/10",
    colorBorder: "border-accent/30",
    description: "Hands-on technical training for IT staff. Network security, endpoint hardening, log analysis, and incident response procedures.",
    topics: [
      { name: "Network architecture & segmentation", type: "video" },
      { name: "Firewall configuration lab", type: "lab" },
      { name: "Endpoint hardening (Windows/macOS)", type: "lab" },
      { name: "Vulnerability scanning & patching", type: "lab" },
      { name: "Log analysis & SIEM basics", type: "lab" },
      { name: "Identity & access management", type: "video" },
      { name: "Cloud security (M365 / Google)", type: "lab" },
      { name: "Backup & disaster recovery", type: "lab" },
      { name: "Incident response playbook", type: "reading" },
      { name: "Technical assessment", type: "quiz" },
    ],
  },
  {
    id: "leadership",
    title: "Security for Leaders",
    audience: "Management",
    duration: "6 hours",
    modules: 7,
    color: "text-amber",
    colorBg: "bg-amber/10",
    colorBorder: "border-amber/30",
    description: "Strategic security knowledge for decision-makers. Risk management, compliance obligations, budget allocation, and board-level reporting.",
    topics: [
      { name: "Cyber risk & business impact", type: "video" },
      { name: "Compliance obligations overview", type: "reading" },
      { name: "Security investment & ROI", type: "video" },
      { name: "Vendor & supply chain risk", type: "video" },
      { name: "Incident management for leaders", type: "lab" },
      { name: "Board reporting & metrics", type: "reading" },
      { name: "Leadership assessment", type: "quiz" },
    ],
  },
  {
    id: "compliance",
    title: "Compliance Deep Dive",
    audience: "Compliance Officers",
    duration: "10 hours",
    modules: 9,
    color: "text-red",
    colorBg: "bg-red/10",
    colorBorder: "border-red/20",
    description: "In-depth compliance training covering framework requirements, audit preparation, evidence collection, and continuous monitoring.",
    topics: [
      { name: "Framework landscape overview", type: "video" },
      { name: "Cyber Essentials walkthrough", type: "lab" },
      { name: "ISO 27001 clause mapping", type: "reading" },
      { name: "NIST CSF implementation", type: "lab" },
      { name: "Evidence collection & management", type: "lab" },
      { name: "Audit preparation", type: "lab" },
      { name: "GDPR & data protection", type: "reading" },
      { name: "Continuous compliance monitoring", type: "video" },
      { name: "Compliance assessment", type: "quiz" },
    ],
  },
];

const typeIcons: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
  video: {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    label: "Video",
    color: "text-accent",
  },
  lab: {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Hands-on",
    color: "text-green",
  },
  quiz: {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    label: "Assessment",
    color: "text-amber",
  },
  reading: {
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    label: "Reading",
    color: "text-muted",
  },
};

export default function SecurityEducation() {
  const [activePath, setActivePath] = useState("foundations");
  const path = paths.find((p) => p.id === activePath)!;

  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-green bg-green/10 px-4 py-1.5 rounded-full mb-6">
            Adaptive Learning Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Decision-support through structured education
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Role-based learning pathways that guide decision-making, reinforce security behaviours,
            and build measurable competence across your organisation.
          </p>
        </div>

        {/* Path selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {paths.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePath(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activePath === p.id
                  ? "bg-primary text-white shadow-glow-primary"
                  : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Path overview card */}
          <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-mono ${path.color} uppercase tracking-widest`}>
                {path.audience}
              </span>
              <span className="text-[10px] font-mono text-muted">{path.modules} modules</span>
            </div>
            <h3 className={`text-lg font-bold ${path.color} mb-2`}>{path.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{path.description}</p>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Duration</span>
                <div className={`text-xl font-bold font-mono ${path.color}`}>{path.duration}</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Format</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {Object.entries(
                    path.topics.reduce((acc, t) => {
                      acc[t.type] = (acc[t.type] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([type, count]) => {
                    const ti = typeIcons[type];
                    return (
                      <span key={type} className="flex items-center gap-1 text-[10px] font-mono text-muted bg-surface px-2 py-0.5 rounded">
                        <span className={ti.color}>{ti.icon}</span>
                        {count} {ti.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Module list */}
          <div className="lg:col-span-2 rounded-2xl bg-white shadow-soft border border-border/50 p-5">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
              Learning Modules
            </h4>
            <div className="space-y-1.5">
              {path.topics.map((topic, i) => {
                const ti = typeIcons[topic.type];
                return (
                  <div
                    key={topic.name}
                    className="flex items-center gap-3 rounded-md bg-surface px-3 py-2.5 hover:bg-surface-2 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-muted w-5 text-right">{String(i + 1).padStart(2, "0")}</span>
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${ti.color}`}>
                      {ti.icon}
                    </div>
                    <span className="text-sm text-foreground flex-1">{topic.name}</span>
                    <span className={`text-[10px] font-mono ${ti.color} bg-surface-2 px-1.5 py-0.5 rounded`}>
                      {ti.label.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {Object.entries(typeIcons).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <span className={val.color}>{val.icon}</span>
                    <span className="text-[10px] text-muted">{val.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-primary/10 bg-primary/5 p-4 mt-4">
          <p className="text-xs text-muted leading-relaxed">
            <span className="text-primary font-semibold">NOTE:</span> All training content is
            customized to your industry, tech stack, and compliance requirements. Completion is
            tracked per user and mapped to your framework evidence requirements — training records
            your auditor will actually accept.
          </p>
        </div>
      </div>
    </section>
  );
}
