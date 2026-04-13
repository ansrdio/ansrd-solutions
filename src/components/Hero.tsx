"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { text: "$ ansrd scan --target smb-network", delay: 0 },
  { text: "[*] Scanning compliance posture...", delay: 800 },
  { text: "[*] Framework: Cyber Essentials + NIST CSF", delay: 1400 },
  { text: "[!] 12 critical controls missing", delay: 2200 },
  { text: "[+] Generating prioritized action plan...", delay: 2800 },
  { text: "[+] 5 immediate actions identified", delay: 3400 },
  { text: "[\u2713] Report ready. Starting implementation guide.", delay: 4000 },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-accent tracking-wider uppercase">
                Cybersecurity Implementation System
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Stop planning.
              <br />
              <span className="text-accent text-glow">Start securing.</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              We translate frameworks like Cyber Essentials, ISO 27001, and NIST into
              prioritized, executable actions. Clear steps. Real evidence. Verified completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#preview"
                className="inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                See Live Demo
              </a>
              <a
                href="#assess"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium text-sm hover:border-accent/30 hover:text-accent transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Take Assessment
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="text-green font-mono text-sm font-bold">CE</span>
                <span className="text-xs text-muted">Cyber Essentials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-mono text-sm font-bold">ISO</span>
                <span className="text-xs text-muted">27001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber font-mono text-sm font-bold">NIST</span>
                <span className="text-xs text-muted">CSF</span>
              </div>
            </div>
          </div>

          {/* Terminal animation */}
          <div className="glow-border rounded-lg bg-surface-2 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-surface-3/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red/60" />
                <span className="w-3 h-3 rounded-full bg-amber/60" />
                <span className="w-3 h-3 rounded-full bg-green/60" />
              </div>
              <span className="text-xs font-mono text-muted ml-2">ansrd-cli v2.1.0</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1.5 min-h-[240px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={`animate-fade-in-up ${
                    line.text.includes("[!]")
                      ? "text-red"
                      : line.text.includes("[\u2713]")
                      ? "text-green"
                      : line.text.includes("[+]")
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {line.text}
                </div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
