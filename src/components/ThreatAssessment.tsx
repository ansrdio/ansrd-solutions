"use client";

import { useState } from "react";

interface Question {
  id: string;
  text: string;
  options: { label: string; score: number; detail: string }[];
}

const questions: Question[] = [
  {
    id: "mfa",
    text: "Is multi-factor authentication enabled on all email and admin accounts?",
    options: [
      { label: "Yes, enforced for all users", score: 3, detail: "Strong — this blocks 99.9% of credential attacks." },
      { label: "Partially — some accounts", score: 1, detail: "Gaps in MFA coverage leave admin accounts exposed." },
      { label: "No / Not sure", score: 0, detail: "Critical gap — #1 attack vector for SMBs." },
    ],
  },
  {
    id: "updates",
    text: "Are automatic updates enabled on all company devices?",
    options: [
      { label: "Yes, centrally managed", score: 3, detail: "Excellent — patching closes known exploit paths." },
      { label: "Users handle their own updates", score: 1, detail: "Inconsistent — some devices will fall months behind." },
      { label: "No policy in place", score: 0, detail: "High risk — unpatched systems are the easiest entry point." },
    ],
  },
  {
    id: "access",
    text: "When was your last user access review?",
    options: [
      { label: "Within the last 90 days", score: 3, detail: "Good cadence — keeps stale accounts from accumulating." },
      { label: "Within the last year", score: 1, detail: "Acceptable, but ex-employee accounts may be active." },
      { label: "Never / Don't know", score: 0, detail: "Orphaned accounts are a common breach vector." },
    ],
  },
  {
    id: "backup",
    text: "Have you tested restoring from backup in the last 6 months?",
    options: [
      { label: "Yes, with documented results", score: 3, detail: "Best practice — you know recovery actually works." },
      { label: "Backups run, but untested", score: 1, detail: "Dangerous assumption — 30% of restores fail when untested." },
      { label: "No backup process", score: 0, detail: "Critical — ransomware would be devastating." },
    ],
  },
  {
    id: "incident",
    text: "Do you have a documented incident response plan?",
    options: [
      { label: "Yes, tested within 12 months", score: 3, detail: "Strong — your team knows what to do under pressure." },
      { label: "Exists but never tested", score: 1, detail: "A plan that hasn't been tested is a guess." },
      { label: "No plan exists", score: 0, detail: "Without a plan, a breach becomes chaos." },
    ],
  },
];

function getGrade(score: number, max: number) {
  const pct = (score / max) * 100;
  if (pct >= 80) return { grade: "A", color: "text-green", bg: "bg-green/10", border: "border-green/30", label: "Strong posture", desc: "You have solid fundamentals in place. Let's harden the edges and set up continuous monitoring." };
  if (pct >= 60) return { grade: "B", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30", label: "Good foundation", desc: "Core controls exist but gaps remain. A prioritized plan would close them fast." };
  if (pct >= 40) return { grade: "C", color: "text-amber", bg: "bg-amber/10", border: "border-amber/30", label: "Needs work", desc: "Several critical areas are unaddressed. You need a structured implementation path." };
  return { grade: "D", color: "text-red", bg: "bg-red/10", border: "border-red/30", label: "High risk", desc: "Significant exposure across multiple areas. Immediate action required on fundamentals." };
}

export default function ThreatAssessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, score: number, detail: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setSelectedDetail(detail);

    setTimeout(() => {
      setSelectedDetail(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const grade = getGrade(totalScore, maxScore);
  const progress = ((currentQ + (showResults ? 1 : 0)) / questions.length) * 100;

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setSelectedDetail(null);
    setShowResults(false);
  };

  return (
    <section id="assess" className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-amber bg-amber/10 px-4 py-1.5 rounded-full mb-6">
            Quick Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            How secure is your business right now?
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Answer 5 quick questions. Get an instant security grade and see where your gaps are.
            Takes less than 60 seconds.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-surface-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-muted">
              {showResults ? questions.length : currentQ + 1}/{questions.length}
            </span>
          </div>

          {!showResults ? (
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  Q{currentQ + 1}
                </span>
                <span className="text-xs font-mono text-muted">{questions[currentQ].id.toUpperCase()}_CHECK</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-6">
                {questions[currentQ].text}
              </h3>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, i) => {
                  const isSelected = answers[questions[currentQ].id] === opt.score && selectedDetail === opt.detail;
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(questions[currentQ].id, opt.score, opt.detail)}
                      disabled={selectedDetail !== null}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                        isSelected
                          ? opt.score >= 3
                            ? "border-green/50 bg-green/10"
                            : opt.score >= 1
                            ? "border-amber/50 bg-amber/10"
                            : "border-red/50 bg-red/10"
                          : "border-border/50 bg-surface hover:border-primary/30 hover:bg-surface-2"
                      } disabled:cursor-default`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? opt.score >= 3 ? "border-green bg-green" : opt.score >= 1 ? "border-amber bg-amber" : "border-red bg-red"
                            : "border-border"
                        }`}>
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-background" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${isSelected ? "text-foreground font-medium" : "text-foreground/80"}`}>
                          {opt.label}
                        </span>
                      </div>
                      {isSelected && (
                        <p className={`text-xs mt-2 ml-9 font-mono ${
                          opt.score >= 3 ? "text-green" : opt.score >= 1 ? "text-amber" : "text-red"
                        }`}>
                          {opt.detail}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-muted">ASSESSMENT_COMPLETE</span>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className={`text-7xl font-bold font-mono ${grade.color}`}>
                  {grade.grade}
                </div>
                <div>
                  <div className={`text-lg font-semibold ${grade.color}`}>{grade.label}</div>
                  <div className="text-sm text-muted">Score: {totalScore}/{maxScore} points</div>
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                {grade.desc}
              </p>

              {/* Per-question breakdown */}
              <div className="space-y-2 mb-6">
                {questions.map((q) => {
                  const s = answers[q.id] ?? 0;
                  return (
                    <div key={q.id} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full ${s >= 3 ? "bg-green" : s >= 1 ? "bg-amber" : "bg-red"}`} />
                      <span className="text-xs font-mono text-muted w-20 flex-shrink-0">{q.id.toUpperCase()}</span>
                      <div className="flex-1 h-1.5 bg-surface-3 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${s >= 3 ? "bg-green" : s >= 1 ? "bg-amber" : "bg-red"}`}
                          style={{ width: `${(s / 3) * 100}%` }}
                        />
                      </div>
                      <span className={`text-xs font-mono ${s >= 3 ? "text-green" : s >= 1 ? "text-amber" : "text-red"}`}>
                        {s}/3
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 gradient-cta text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-glow-primary"
                >
                  Get your action plan
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-border text-muted px-5 py-2.5 rounded-full text-sm hover:text-foreground hover:border-primary/30 transition-all shadow-soft"
                >
                  Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
