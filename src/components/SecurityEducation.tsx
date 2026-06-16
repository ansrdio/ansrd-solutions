"use client";

import { useState } from "react";

interface Pathway {
  id: string;
  title: string;
  role: string;
  riskProfile: string;
  color: string;
  description: string;
  behaviourGoals: string[];
  decisionPoints: string[];
}

const pathways: Pathway[] = [
  {
    id: "frontline",
    title: "Frontline Defence",
    role: "All Staff",
    riskProfile: "High exposure — email, web, social channels",
    color: "text-green",
    description: "Build reflexive security behaviours for the people most likely to encounter threats daily. No jargon, no theory — just decision-making habits.",
    behaviourGoals: [
      "Pause before clicking any unexpected link or attachment",
      "Verify requests for money, credentials, or data through a second channel",
      "Report anything suspicious within 5 minutes of noticing it",
      "Never share passwords or bypass MFA, regardless of who asks",
    ],
    decisionPoints: [
      "Received unexpected email with attachment → Pause, Inspect sender, Report if uncertain",
      "Urgent request from 'CEO' for wire transfer → Verify via phone before acting",
      "Unfamiliar USB drive found → Do not connect, report to IT immediately",
      "Pop-up asking to disable security tool → Refuse, report the event",
    ],
  },
  {
    id: "technical",
    title: "Security Operators",
    role: "IT & Dev Teams",
    riskProfile: "Privileged access — admin panels, infrastructure",
    color: "text-accent",
    description: "Decision frameworks for people with elevated access. One wrong choice at this level cascades across the entire organisation.",
    behaviourGoals: [
      "Apply least-privilege by default — request elevation only when needed",
      "Verify before deploying — no changes without peer review in production",
      "Patch critical vulnerabilities within 48 hours of disclosure",
      "Log everything, investigate anomalies within 1 hour",
    ],
    decisionPoints: [
      "Vendor requests remote access → Verify identity, scope access, set time limit, monitor",
      "Alert fires at 2am → Follow runbook, don't improvise, escalate if unclear",
      "Developer wants to disable firewall rule for testing → Deny in prod, create isolated test",
      "Legacy system can't be patched → Compensating controls, network segmentation, document risk",
    ],
  },
  {
    id: "leadership",
    title: "Risk Decision-Makers",
    role: "Leadership & Board",
    riskProfile: "Strategic risk — budget, vendor, disclosure decisions",
    color: "text-amber",
    description: "Security decisions at leadership level don't involve clicking links — they involve accepting or transferring risk, allocating budget, and setting culture.",
    behaviourGoals: [
      "Include security implications in every vendor and procurement decision",
      "Review behavioural risk scores monthly — not just annual audit results",
      "Allocate incident response budget before an incident occurs",
      "Model the security behaviours you expect from staff",
    ],
    decisionPoints: [
      "New SaaS tool proposed → Ask: what data does it access? Who reviewed the security?",
      "Budget pressure → Don't cut awareness programmes — they're cheaper than breaches",
      "Breach notification required → Disclose within regulatory timeframe, not after PR review",
      "Staff member flagged for repeated risky behaviour → Supportive intervention, not punishment",
    ],
  },
];

export default function SecurityEducation() {
  const [activePath, setActivePath] = useState("frontline");
  const pathway = pathways.find((p) => p.id === activePath)!;

  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-green bg-green/10 px-4 py-1.5 rounded-full mb-6">
            Behavioural Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Role-based decision frameworks, not courses
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Each role faces different security decisions. We build decision-support pathways
            tailored to the actual choices your people face — so when the moment comes,
            the right response is automatic.
          </p>
        </div>

        {/* Pathway selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {pathways.map((p) => (
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

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Pathway overview */}
          <div className="lg:col-span-2 rounded-2xl bg-white shadow-soft border border-border/50 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-mono ${pathway.color} uppercase tracking-widest`}>
                {pathway.role}
              </span>
            </div>
            <h3 className={`text-xl font-bold text-foreground mb-2`}>{pathway.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">{pathway.description}</p>

            <div className="mb-5">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-2">Risk Profile</span>
              <div className="text-sm text-foreground font-medium bg-surface rounded-lg px-3 py-2">
                {pathway.riskProfile}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest block mb-2">Behaviour Goals</span>
              <div className="space-y-2">
                {pathway.behaviourGoals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center mt-0.5 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decision points */}
          <div className="lg:col-span-3 rounded-2xl bg-white shadow-soft border border-border/50 p-6">
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-2">
              Decision Points
            </h4>
            <p className="text-xs text-muted mb-5">
              Real scenarios this role faces. The engine trains the correct response until it becomes automatic.
            </p>
            <div className="space-y-3">
              {pathway.decisionPoints.map((point, i) => {
                const [scenario, response] = point.split(" → ");
                return (
                  <div
                    key={i}
                    className="rounded-xl bg-surface p-4 border border-border/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="text-amber font-bold text-[10px]">?</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">{scenario}</p>
                        {response && (
                          <div className="flex items-start gap-2 mt-2 pl-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green mt-0.5 shrink-0">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                            <p className="text-sm text-green font-medium">{response}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-primary/10 bg-primary/5 p-5 mt-6">
          <p className="text-sm text-muted leading-relaxed">
            <span className="text-primary font-semibold">Not static content:</span> Decision points
            are drawn from your actual threat landscape and updated as new attack patterns emerge.
            The engine tracks which decisions each person gets right, and reinforces only the gaps —
            so nobody wastes time on what they already know.
          </p>
        </div>
      </div>
    </section>
  );
}
