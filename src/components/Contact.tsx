"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-border/50 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block text-xs font-mono text-accent tracking-wider uppercase mb-3">
            // init_engagement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            Get your implementation plan
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Tell us about your business. We&apos;ll reply with a short assessment of your
            security posture and a prioritized set of first actions — no sales pitch.
          </p>

          {!submitted ? (
            <div className="glow-border rounded-lg bg-surface-2 p-6 sm:p-8 text-left">
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Jane Smith"
                      className="w-full border border-border/50 rounded-md px-3 py-2.5 text-sm bg-surface-3/50 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="jane@company.com"
                      className="w-full border border-border/50 rounded-md px-3 py-2.5 text-sm bg-surface-3/50 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company-size" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Company Size
                    </label>
                    <select
                      id="company-size"
                      className="w-full border border-border/50 rounded-md px-3 py-2.5 text-sm bg-surface-3/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="framework" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Target Framework
                    </label>
                    <select
                      id="framework"
                      className="w-full border border-border/50 rounded-md px-3 py-2.5 text-sm bg-surface-3/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="ce">Cyber Essentials</option>
                      <option value="iso">ISO 27001</option>
                      <option value="nist">NIST CSF</option>
                      <option value="soc2">SOC 2</option>
                      <option value="cis">CIS Controls</option>
                      <option value="pci">PCI DSS</option>
                      <option value="gdpr">GDPR</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                    Current Security Posture
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="We use M365, have basic antivirus, but no formal security process..."
                    className="w-full border border-border/50 rounded-md px-3 py-2.5 text-sm bg-surface-3/50 text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-background py-3 rounded-md font-semibold text-sm hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                >
                  Get your first steps
                </button>
              </form>
            </div>
          ) : (
            <div className="glow-border-green rounded-lg bg-green/5 p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green mb-2">Request received</h3>
              <p className="text-sm text-muted leading-relaxed">
                We&apos;ll review your details and get back to you within 24 hours with an
                initial assessment and your prioritized first actions.
              </p>
              <div className="mt-4 font-mono text-xs text-green/60">
                TICKET_ID: ANSRD-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </div>
            </div>
          )}

          <p className="text-xs text-muted mt-4 font-mono">
            // No sales pitch. Just your first priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
