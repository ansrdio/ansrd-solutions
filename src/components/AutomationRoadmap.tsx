"use client";

import { useState } from "react";

interface Phase {
  id: string;
  phase: string;
  title: string;
  timeline: string;
  status: "available" | "coming" | "future";
  features: { name: string; available: boolean }[];
  description: string;
}

const phases: Phase[] = [
  {
    id: "manual",
    phase: "Phase 1",
    title: "Guided Implementation",
    timeline: "Available now",
    status: "available",
    features: [
      { name: "Prioritized control checklists", available: true },
      { name: "Step-by-step runbooks", available: true },
      { name: "Evidence collection templates", available: true },
      { name: "Framework mapping (CE, ISO, NIST)", available: true },
      { name: "Progress tracking dashboard", available: true },
    ],
    description: "Structured, manual implementation with clear guidance. Your team follows the runbooks, captures evidence, and tracks progress through the checklist system.",
  },
  {
    id: "assisted",
    phase: "Phase 2",
    title: "Assisted Automation",
    timeline: "Q3 2026",
    status: "coming",
    features: [
      { name: "Automated compliance scanning", available: true },
      { name: "Configuration drift detection", available: true },
      { name: "Evidence auto-capture", available: false },
      { name: "Slack/Teams alert integration", available: true },
      { name: "Client portal with real-time status", available: true },
    ],
    description: "Automated scanning detects gaps and configuration drift. Evidence is partially auto-captured. Alerts notify your team when controls fall out of compliance.",
  },
  {
    id: "auto",
    phase: "Phase 3",
    title: "Full Automation",
    timeline: "2027",
    status: "future",
    features: [
      { name: "Auto-remediation of common misconfigs", available: false },
      { name: "Continuous compliance monitoring", available: false },
      { name: "Audit-ready evidence packages", available: false },
      { name: "API-driven control verification", available: false },
      { name: "Multi-framework simultaneous mapping", available: false },
    ],
    description: "Fully automated compliance loop. Systems self-monitor, auto-remediate common issues, and generate audit-ready evidence packages on demand.",
  },
];

const statusStyles = {
  available: { dot: "bg-green animate-pulse", text: "text-green", label: "LIVE", border: "border-green/30", bg: "bg-green/5" },
  coming: { dot: "bg-accent", text: "text-accent", label: "BUILDING", border: "border-accent/30", bg: "bg-accent/5" },
  future: { dot: "bg-muted", text: "text-muted", label: "PLANNED", border: "border-border/50", bg: "bg-surface-2" },
};

export default function AutomationRoadmap() {
  const [activePhase, setActivePhase] = useState("manual");
  const phase = phases.find((p) => p.id === activePhase)!;
  const ss = statusStyles[phase.status];

  return (
    <section id="automation" className="py-12 sm:py-16 bg-surface border-y border-border/50 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-6">
          <span className="inline-block text-xs font-mono text-green tracking-wider uppercase mb-3">
            // product_roadmap.v2
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            From manual to automated
          </h2>
          <p className="text-muted leading-relaxed">
            We&apos;re building toward full automation. Today you get structured implementation.
            Tomorrow, your compliance runs itself. Here&apos;s the roadmap.
          </p>
        </div>

        {/* Phase selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {phases.map((p) => {
            const s = statusStyles[p.status];
            const isActive = activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(p.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? `${s.bg} ${s.text} border ${s.border}`
                    : "border border-border/50 text-muted hover:text-foreground hover:border-border"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                {p.phase}
              </button>
            );
          })}
        </div>

        {/* Phase detail */}
        <div className={`rounded-lg border ${ss.border} ${ss.bg} p-6 sm:p-8`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-mono font-bold ${ss.text} ${ss.bg} border ${ss.border} px-2 py-0.5 rounded`}>
                {ss.label}
              </span>
              <h3 className={`text-xl font-bold ${ss.text}`}>{phase.title}</h3>
            </div>
            <span className="text-xs font-mono text-muted">{phase.timeline}</span>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            {phase.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {phase.features.map((f) => (
              <div
                key={f.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-2/50 border border-border/30"
              >
                {f.available ? (
                  <div className="w-5 h-5 rounded bg-green/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-green">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded bg-surface-3 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-muted">
                      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                )}
                <span className={`text-sm ${f.available ? "text-foreground" : "text-muted"}`}>
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline connector */}
        <div className="flex items-center justify-between mt-8 px-4">
          {phases.map((p, i) => {
            const s = statusStyles[p.status];
            return (
              <div key={p.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${s.dot} border-2 border-background`} />
                  <span className={`text-[10px] font-mono mt-2 ${s.text}`}>{p.timeline}</span>
                </div>
                {i < phases.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-border/30 mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
