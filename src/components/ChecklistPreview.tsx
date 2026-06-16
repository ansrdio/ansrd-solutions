"use client";

import { useState } from "react";

interface ChecklistItem {
  id: string;
  priority: number;
  title: string;
  category: string;
  description: string;
  steps: string[];
  evidence: string;
  framework: string;
  risk: "critical" | "high" | "medium";
}

const checklistItems: ChecklistItem[] = [
  {
    id: "mfa",
    priority: 1,
    title: "Enable MFA for email and admin accounts",
    category: "Identity & Access",
    description:
      "Turn on multi-factor authentication for all email accounts and any admin or privileged accounts. Start with Microsoft 365 or Google Workspace admin, then roll out to all users.",
    steps: [
      "Navigate to M365 Admin > Azure AD > Security > MFA",
      "Create a Conditional Access policy requiring MFA for all users",
      "Exclude break-glass emergency account (document separately)",
      "Set 14-day registration window, notify all users",
      "Verify enforcement with test sign-in from new device",
    ],
    evidence: "Screenshot of MFA enforcement policy showing all users covered. Sign-in log showing MFA challenge.",
    framework: "Cyber Essentials / NIST PR.AC-7",
    risk: "critical",
  },
  {
    id: "access-review",
    priority: 2,
    title: "Review and clean up user access",
    category: "Access Control",
    description:
      "Audit all user accounts across your systems. Remove ex-employees, disable unused accounts, and ensure no shared credentials are in use.",
    steps: [
      "Export full user list from M365 / Google Workspace",
      "Cross-reference against current HR employee list",
      "Disable accounts with no sign-in for 90+ days",
      "Remove shared/generic accounts or assign to named owners",
      "Document findings and actions taken",
    ],
    evidence: "Export of active user list with last login dates. Record of removed/disabled accounts.",
    framework: "ISO 27001 A.9.2.5 / NIST PR.AC-1",
    risk: "high",
  },
  {
    id: "auto-updates",
    priority: 3,
    title: "Enable automatic updates on all devices",
    category: "Patch Management",
    description:
      "Configure automatic updates for operating systems, browsers, and business-critical software across all managed devices.",
    steps: [
      "Enable Windows Update for Business or macOS auto-update",
      "Configure browser auto-update policies (Chrome/Edge/Firefox)",
      "Set up Intune/MDM compliance policy for patch status",
      "Run compliance scan and document non-compliant devices",
      "Set remediation timeline for flagged devices (72h max)",
    ],
    evidence: "Screenshot of update policy settings. Device compliance report showing current patch status.",
    framework: "Cyber Essentials / NIST PR.IP-12",
    risk: "high",
  },
  {
    id: "backup",
    priority: 4,
    title: "Verify backup configuration and test restore",
    category: "Data Protection",
    description:
      "Confirm automated backups are running for critical data. Perform a test restore of at least one backup to verify recoverability.",
    steps: [
      "Identify all critical data stores (files, databases, SaaS)",
      "Verify backup schedules and retention policies",
      "Check backup encryption is enabled (at rest + in transit)",
      "Perform test restore of 1+ backup set to isolated environment",
      "Document restore procedure and time-to-recover",
    ],
    evidence: "Backup job logs showing successful runs. Screenshot of completed test restore with timestamp.",
    framework: "ISO 27001 A.12.3 / NIST PR.IP-4",
    risk: "high",
  },
  {
    id: "admin-separation",
    priority: 5,
    title: "Separate admin and day-to-day accounts",
    category: "Privilege Management",
    description:
      "Ensure administrators use separate accounts for admin tasks and daily work. No browsing email or web from privileged accounts.",
    steps: [
      "Identify all users with admin roles across systems",
      "Create dedicated admin accounts (e.g., admin-jsmith@)",
      "Remove admin privileges from standard user accounts",
      "Configure admin accounts with no email/web access",
      "Document admin account inventory with role justification",
    ],
    evidence: "Admin account audit showing separation from standard accounts. Role assignment documentation.",
    framework: "Cyber Essentials / NIST PR.AC-4",
    risk: "medium",
  },
];

const riskColors = {
  critical: { bg: "bg-red/10", text: "text-red", border: "border-red/20" },
  high: { bg: "bg-amber/10", text: "text-amber", border: "border-amber/20" },
  medium: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
};

export default function ChecklistPreview() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>("mfa");

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const completedCount = completed.size;
  const totalCount = checklistItems.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="preview" className="py-16 sm:py-24 relative">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-green bg-green/10 px-4 py-1.5 rounded-full mb-6">
            Interactive Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Try the implementation system
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            This is a working example of how we structure security actions. Click the
            checkboxes, expand items to see runbooks and evidence requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress dashboard */}
          <div className="mb-6 p-5 rounded-2xl bg-white shadow-soft border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${completedCount === totalCount ? "bg-green animate-pulse" : "bg-primary animate-pulse"}`} />
                <span className="text-sm font-medium text-foreground">
                  Implementation Progress
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted font-mono">
                  {completedCount}/{totalCount}
                </span>
                <span className={`text-sm font-mono font-bold ${completedCount === totalCount ? "text-green" : "text-primary"}`}>
                  {progressPercent}%
                </span>
              </div>
            </div>
            <div className="w-full h-2 bg-surface-3 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${completedCount === totalCount ? "bg-green" : "bg-primary"}`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {completedCount === totalCount && (
              <div className="mt-3 flex items-center gap-2 text-green text-sm font-mono">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ALL CONTROLS VERIFIED — COMPLIANCE POSTURE: PASSING
              </div>
            )}
          </div>

          {/* Checklist items */}
          <div className="space-y-2">
            {checklistItems.map((item) => {
              const isCompleted = completed.has(item.id);
              const isExpanded = expandedId === item.id;
              const rc = riskColors[item.risk];

              return (
                <div
                  key={item.id}
                  className={`rounded-lg transition-all duration-300 ${
                    isCompleted
                      ? "border border-green/30 bg-green/5"
                      : "border border-border/50 bg-white shadow-soft hover:border-primary/20"
                  }`}
                >
                  {/* Main row */}
                  <div className="flex items-start gap-3 p-4 cursor-pointer" onClick={() => toggleExpand(item.id)}>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleComplete(item.id); }}
                      className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? "bg-green border-green"
                          : "border-border hover:border-primary"
                      }`}
                      aria-label={`Mark "${item.title}" as ${isCompleted ? "incomplete" : "complete"}`}
                    >
                      {isCompleted && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`inline-flex items-center text-[10px] font-mono font-bold ${rc.text} ${rc.bg} rounded px-1.5 py-0.5 ${rc.border} border`}>
                          P{item.priority}
                        </span>
                        <span className="text-[10px] font-mono text-muted bg-surface-3 rounded px-1.5 py-0.5">
                          {item.category}
                        </span>
                        <span className={`text-[10px] font-mono ${rc.text} uppercase`}>
                          {item.risk}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-medium leading-snug block ${
                          isCompleted ? "line-through text-muted" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`flex-shrink-0 text-muted transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <div className="px-4 pb-5 ml-8 space-y-4 border-t border-border/30 pt-4">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6h10M6 1v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          IMPLEMENTATION RUNBOOK
                        </h4>
                        <p className="text-sm text-muted leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="space-y-1.5">
                          {item.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <span className="flex-shrink-0 w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-[10px] font-mono text-primary mt-0.5">
                                {i + 1}
                              </span>
                              <span className="text-foreground/80">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-green uppercase tracking-widest mb-2 flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          EVIDENCE REQUIRED
                        </h4>
                        <div className="text-sm text-foreground/80 font-mono bg-surface rounded-md px-4 py-3 border border-border/30">
                          <span className="text-green select-none">$ </span>{item.evidence}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Framework:</span>
                        <span className="text-xs font-mono text-primary">{item.framework}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary note */}
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="text-primary font-semibold">NOTE:</span> This is a sample checklist.
              Your actual implementation plan is tailored to your infrastructure, risk profile, and
              target framework. Every control includes vendor-specific runbooks and evidence templates.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="/contact?framework=cyber-essentials"
              className="inline-flex items-center justify-center gap-2 gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
            >
              Get your tailored implementation checklist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
