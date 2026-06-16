"use client";

import { useState } from "react";

const behaviourSignals = [
  {
    label: "Phishing Resilience",
    score: 78,
    trend: "up",
    detail: "3 simulations passed this month",
    color: "green",
  },
  {
    label: "Password Behaviour",
    score: 64,
    trend: "up",
    detail: "MFA adoption increased 12%",
    color: "accent",
  },
  {
    label: "Reporting Speed",
    score: 82,
    trend: "up",
    detail: "Avg. 4 min to flag suspicious emails",
    color: "green",
  },
  {
    label: "Data Handling",
    score: 51,
    trend: "down",
    detail: "2 sensitive file share violations",
    color: "amber",
  },
];

const adaptiveRecommendations = [
  {
    trigger: "3 staff clicked link in CEO impersonation sim",
    action: "Authority-bias micro-module queued for Finance team",
    urgency: "high",
  },
  {
    trigger: "MFA adoption below 80% threshold",
    action: "Setup-walk-through nudge sent to 12 holdouts",
    urgency: "medium",
  },
  {
    trigger: "Reporting rate above 70% for 4 consecutive weeks",
    action: "Increase simulation difficulty → Level 3 pretexting",
    urgency: "low",
  },
  {
    trigger: "New starter onboarded (3 this week)",
    action: "Baseline behaviour assessment triggered automatically",
    urgency: "medium",
  },
];

const habitStreaks = [
  { name: "Zero-click streak", value: "18 days", status: "active" },
  { name: "100% report rate", value: "9 days", status: "active" },
  { name: "MFA enrollment", value: "92%", status: "threshold" },
  { name: "Clean desk audit", value: "Last: 3 days ago", status: "active" },
];

export default function SecurityAwareness() {
  const [view, setView] = useState<"dashboard" | "adaptive">("dashboard");

  return (
    <section id="awareness" className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-amber bg-amber/10 px-4 py-1.5 rounded-full mb-6">
            Behavioural Intelligence
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Behavioural security training
          </h1>
          <p className="text-muted leading-relaxed text-lg">
            Not a course catalogue — a live behavioural feedback system. We measure how your
            people actually respond to threats, then adapt interventions in real time to reinforce
            the right habits.
          </p>
        </div>

        {/* View switcher */}
        <div className="flex gap-2 mb-8" role="tablist" aria-label="Training view">
          <button
            role="tab"
            aria-selected={view === "dashboard"}
            onClick={() => setView("dashboard")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              view === "dashboard"
                ? "bg-primary text-white shadow-glow-primary"
                : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
            }`}
          >
            Behaviour Signals
          </button>
          <button
            role="tab"
            aria-selected={view === "adaptive"}
            onClick={() => setView("adaptive")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              view === "adaptive"
                ? "bg-primary text-white shadow-glow-primary"
                : "bg-white border border-border text-muted hover:text-foreground shadow-soft"
            }`}
          >
            Adaptive Response
          </button>
        </div>

        {view === "dashboard" && (
          <div className="space-y-8">
            {/* Behaviour score cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {behaviourSignals.map((signal) => {
                const colorMap: Record<string, { bar: string; text: string; bg: string }> = {
                  green: { bar: "bg-green", text: "text-green", bg: "bg-green/10" },
                  accent: { bar: "bg-accent", text: "text-accent", bg: "bg-accent/10" },
                  amber: { bar: "bg-amber", text: "text-amber", bg: "bg-amber/10" },
                };
                const c = colorMap[signal.color];
                return (
                  <div key={signal.label} className="rounded-2xl bg-white shadow-soft border border-border/50 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-muted">{signal.label}</span>
                      <span className={`flex items-center gap-1 text-xs font-semibold ${c.text}`}>
                        {signal.trend === "up" ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-bold text-foreground">{signal.score}</span>
                      <span className="text-sm text-muted mb-1">/100</span>
                    </div>
                    <div className="w-full h-2 bg-surface-3 rounded-full overflow-hidden mb-3">
                      <div
                        className={`h-full rounded-full ${c.bar} transition-all duration-700`}
                        style={{ width: `${signal.score}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-muted leading-relaxed">{signal.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Habit streaks */}
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
              <h3 className="font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Active Habit Streaks
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {habitStreaks.map((streak) => (
                  <div key={streak.name} className="flex items-center gap-3 p-3 rounded-xl bg-surface">
                    <div className={`w-2 h-2 rounded-full ${streak.status === "active" ? "bg-green animate-pulse" : "bg-amber"}`} />
                    <div>
                      <span className="text-xs font-medium text-foreground block">{streak.name}</span>
                      <span className="text-[11px] text-muted">{streak.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-primary font-semibold">How it works:</span> Behaviour signals are
                derived from real interactions — phishing simulation responses, MFA adoption rates,
                reporting speed, and data handling patterns. Scores update continuously, not quarterly.
                When a score drops, the engine automatically queues a targeted micro-intervention.
              </p>
            </div>
          </div>
        )}

        {view === "adaptive" && (
          <div className="space-y-8">
            {/* Adaptive recommendations */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground mb-1">Engine Recommendations</h3>
              <p className="text-xs text-muted mb-4">
                Based on live behavioural data, the engine generates targeted interventions — no manual scheduling required.
              </p>
              {adaptiveRecommendations.map((rec, i) => {
                const urgencyStyle: Record<string, { dot: string; bg: string }> = {
                  high: { dot: "bg-red", bg: "border-l-red" },
                  medium: { dot: "bg-amber", bg: "border-l-amber" },
                  low: { dot: "bg-green", bg: "border-l-green" },
                };
                const u = urgencyStyle[rec.urgency];
                return (
                  <div
                    key={i}
                    className={`rounded-xl bg-white shadow-soft border border-border/50 border-l-4 ${u.bg} p-5`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${u.dot} mt-1.5 shrink-0`} />
                      <div>
                        <p className="text-xs text-muted mb-1">
                          <span className="font-medium text-foreground">Trigger:</span> {rec.trigger}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {rec.action}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* How adaptive works */}
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6">
              <h3 className="font-semibold text-foreground text-sm mb-4">The Adaptive Loop</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { step: "1", label: "Observe", desc: "Monitor real behaviour signals" },
                  { step: "2", label: "Assess", desc: "Score against risk thresholds" },
                  { step: "3", label: "Intervene", desc: "Queue targeted micro-modules" },
                  { step: "4", label: "Measure", desc: "Track behaviour change over time" },
                ].map((s) => (
                  <div key={s.step} className="text-center p-4 rounded-xl bg-surface">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-xs">{s.step}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground block mb-1">{s.label}</span>
                    <span className="text-[11px] text-muted">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-primary font-semibold">Key difference:</span> Traditional training
                assigns the same content to everyone on a fixed schedule. Our engine observes each
                person&apos;s actual behaviour, identifies gaps, and delivers precisely the right
                intervention at the right moment — then measures whether the behaviour actually changed.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
