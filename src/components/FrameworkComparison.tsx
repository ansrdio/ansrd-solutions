"use client";

import { useState } from "react";

interface Framework {
  id: string;
  name: string;
  fullName: string;
  color: string;
  colorBg: string;
  colorBorder: string;
  controls: number;
  bestFor: string;
  complexity: string;
  timeToImplement: string;
  domains: { name: string; controlCount: number; status: "covered" | "partial" | "gap" }[];
  description: string;
}

const frameworks: Framework[] = [
  {
    id: "ce",
    name: "CE",
    fullName: "Cyber Essentials",
    color: "text-green",
    colorBg: "bg-green/10",
    colorBorder: "border-green/30",
    controls: 5,
    bestFor: "UK-based SMBs, government supply chain",
    complexity: "Low",
    timeToImplement: "2–4 weeks",
    domains: [
      { name: "Firewalls", controlCount: 3, status: "covered" },
      { name: "Secure Configuration", controlCount: 4, status: "covered" },
      { name: "Access Control", controlCount: 5, status: "covered" },
      { name: "Malware Protection", controlCount: 3, status: "covered" },
      { name: "Patch Management", controlCount: 4, status: "covered" },
    ],
    description: "The UK government's baseline scheme. Five technical control themes. Certifiable. A practical starting point for any SMB.",
  },
  {
    id: "iso",
    name: "ISO",
    fullName: "ISO 27001:2022",
    color: "text-accent",
    colorBg: "bg-accent/10",
    colorBorder: "border-accent/30",
    controls: 93,
    bestFor: "Client assurance, international recognition",
    complexity: "High",
    timeToImplement: "6–12 months",
    domains: [
      { name: "Organizational", controlCount: 37, status: "covered" },
      { name: "People", controlCount: 8, status: "covered" },
      { name: "Physical", controlCount: 14, status: "partial" },
      { name: "Technological", controlCount: 34, status: "covered" },
    ],
    description: "The international standard for information security management. Comprehensive but heavy. We break it into executable phases.",
  },
  {
    id: "nist",
    name: "NIST",
    fullName: "NIST CSF 2.0",
    color: "text-amber",
    colorBg: "bg-amber/10",
    colorBorder: "border-amber/30",
    controls: 106,
    bestFor: "US-aligned, risk-based approach",
    complexity: "Medium–High",
    timeToImplement: "3–9 months",
    domains: [
      { name: "Govern", controlCount: 14, status: "partial" },
      { name: "Identify", controlCount: 17, status: "covered" },
      { name: "Protect", controlCount: 27, status: "covered" },
      { name: "Detect", controlCount: 13, status: "covered" },
      { name: "Respond", controlCount: 19, status: "partial" },
      { name: "Recover", controlCount: 16, status: "gap" },
    ],
    description: "NIST's updated Cybersecurity Framework. Function-based, risk-driven. We map your priority controls across all six functions.",
  },
  {
    id: "soc2",
    name: "SOC 2",
    fullName: "SOC 2 Type II",
    color: "text-accent",
    colorBg: "bg-accent/10",
    colorBorder: "border-accent/30",
    controls: 64,
    bestFor: "SaaS companies, US enterprise clients",
    complexity: "High",
    timeToImplement: "4–9 months",
    domains: [
      { name: "Security", controlCount: 22, status: "covered" },
      { name: "Availability", controlCount: 12, status: "covered" },
      { name: "Processing Integrity", controlCount: 10, status: "partial" },
      { name: "Confidentiality", controlCount: 11, status: "covered" },
      { name: "Privacy", controlCount: 9, status: "partial" },
    ],
    description: "The gold standard for SaaS and service organizations. Trust Service Criteria across five categories. We structure the evidence collection that auditors expect.",
  },
  {
    id: "cis",
    name: "CIS",
    fullName: "CIS Controls v8",
    color: "text-green",
    colorBg: "bg-green/10",
    colorBorder: "border-green/30",
    controls: 153,
    bestFor: "Practical technical hardening, any industry",
    complexity: "Medium",
    timeToImplement: "3–6 months",
    domains: [
      { name: "Basic Hygiene (IG1)", controlCount: 56, status: "covered" },
      { name: "Foundational (IG2)", controlCount: 74, status: "covered" },
      { name: "Organizational (IG3)", controlCount: 23, status: "partial" },
    ],
    description: "Community-driven, prioritized security controls. Three implementation groups from basic hygiene to advanced. Perfect for technical teams who want concrete actions.",
  },
  {
    id: "pci",
    name: "PCI",
    fullName: "PCI DSS 4.0",
    color: "text-red",
    colorBg: "bg-red/10",
    colorBorder: "border-red/20",
    controls: 64,
    bestFor: "Businesses handling card payments",
    complexity: "Medium–High",
    timeToImplement: "3–8 months",
    domains: [
      { name: "Network Security", controlCount: 12, status: "covered" },
      { name: "Data Protection", controlCount: 10, status: "covered" },
      { name: "Vulnerability Management", controlCount: 8, status: "covered" },
      { name: "Access Control", controlCount: 14, status: "partial" },
      { name: "Monitoring & Testing", controlCount: 11, status: "partial" },
      { name: "Security Policies", controlCount: 9, status: "gap" },
    ],
    description: "Mandatory for any business processing, storing, or transmitting cardholder data. 12 requirements across 6 goals. We map controls to your specific payment flow.",
  },
  {
    id: "gdpr",
    name: "GDPR",
    fullName: "GDPR / UK GDPR",
    color: "text-amber",
    colorBg: "bg-amber/10",
    colorBorder: "border-amber/30",
    controls: 42,
    bestFor: "EU/UK data handling, privacy compliance",
    complexity: "Medium",
    timeToImplement: "2–6 months",
    domains: [
      { name: "Lawful Basis & Consent", controlCount: 8, status: "covered" },
      { name: "Data Subject Rights", controlCount: 10, status: "covered" },
      { name: "Data Protection by Design", controlCount: 9, status: "partial" },
      { name: "Breach Notification", controlCount: 6, status: "covered" },
      { name: "International Transfers", controlCount: 5, status: "partial" },
      { name: "DPO & Governance", controlCount: 4, status: "gap" },
    ],
    description: "EU and UK data protection regulation. We translate the legal requirements into technical and organizational controls your team can actually implement and evidence.",
  },
];

const statusIndicator = {
  covered: { label: "Fully mapped", color: "bg-green", textColor: "text-green" },
  partial: { label: "Partially mapped", color: "bg-amber", textColor: "text-amber" },
  gap: { label: "Gap identified", color: "bg-red", textColor: "text-red" },
};

export default function FrameworkComparison() {
  const [active, setActive] = useState("ce");
  const fw = frameworks.find((f) => f.id === active)!;

  return (
    <section id="frameworks" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Frameworks
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Frameworks we make executable
          </h1>
          <p className="text-muted leading-relaxed text-lg">
            Select a framework to see how we map it into actionable controls. Every framework
            gets the same treatment: broken down, prioritized, and made executable.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Framework selector">
          {frameworks.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === f.id
                  ? "bg-primary text-white shadow-glow-primary"
                  : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Framework detail */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Info card */}
          <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
            <h3 className={`text-xl font-bold ${fw.color} mb-1`}>{fw.fullName}</h3>
            <p className="text-sm text-muted mb-6 leading-relaxed">{fw.description}</p>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Total Controls</span>
                <div className={`text-2xl font-bold font-mono ${fw.color}`}>{fw.controls}</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Best For</span>
                <div className="text-sm text-foreground">{fw.bestFor}</div>
              </div>
              <div className="flex gap-8">
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Complexity</span>
                  <div className="text-sm text-foreground">{fw.complexity}</div>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Timeline</span>
                  <div className="text-sm text-foreground">{fw.timeToImplement}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Domain breakdown */}
          <div className="lg:col-span-2 rounded-2xl bg-white shadow-soft border border-border/50 p-6">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
              Control Domain Mapping
            </h4>
            <div className="space-y-3">
              {fw.domains.map((d) => {
                const si = statusIndicator[d.status];
                const maxControls = Math.max(...fw.domains.map((x) => x.controlCount));
                const pct = (d.controlCount / maxControls) * 100;
                return (
                  <div key={d.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${si.color}`} />
                        <span className="text-sm text-foreground">{d.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono ${si.textColor}`}>{si.label}</span>
                        <span className="text-xs font-mono text-muted">{d.controlCount} controls</span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          d.status === "covered" ? "bg-green/60" : d.status === "partial" ? "bg-amber/60" : "bg-red/60"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-6">
              {Object.entries(statusIndicator).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${val.color}`} />
                  <span className="text-xs text-muted">{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
