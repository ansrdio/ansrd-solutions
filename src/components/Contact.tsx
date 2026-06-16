"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactProps {
  defaultFramework?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact({ defaultFramework }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [framework, setFramework] = useState(defaultFramework || "");
  const [message, setMessage] = useState("");

  function validateClient(): string[] {
    const errs: string[] = [];
    if (!name.trim() || name.trim().length < 2) errs.push("Name is required.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("A valid work email is required.");
    if (!companySize) errs.push("Please select a company size.");
    if (!framework) errs.push("Please select a target framework.");
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);

    const clientErrors = validateClient();
    if (clientErrors.length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, companySize, framework, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrors(data.errors || ["Something went wrong. Please try again."]);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrors(["Network error. Please try again or email us directly."]);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 gradient-hero relative">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Get Started
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Get your implementation plan
          </h1>
          <p className="text-muted leading-relaxed text-lg mb-8">
            Tell us about your business. We&apos;ll reply with a short assessment of your
            security posture and a prioritized set of first actions — no sales pitch.
          </p>

          {status !== "success" ? (
            <div className="rounded-2xl bg-white shadow-soft border border-border/50 p-6 sm:p-8 text-left">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company-size" className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      Company Size *
                    </label>
                    <select
                      id="company-size"
                      required
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
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
                      Target Framework *
                    </label>
                    <select
                      id="framework"
                      required
                      value={framework}
                      onChange={(e) => setFramework(e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="cyber-essentials">Cyber Essentials</option>
                      <option value="iso-27001">ISO 27001</option>
                      <option value="nist-csf">NIST CSF</option>
                      <option value="soc2">SOC 2</option>
                      <option value="cis">CIS Controls</option>
                      <option value="pci-dss">PCI DSS</option>
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We use M365, have basic antivirus, but no formal security process..."
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-surface text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                {errors.length > 0 && (
                  <div className="rounded-lg bg-red/5 border border-red/20 p-3">
                    {errors.map((err, i) => (
                      <p key={i} className="text-xs text-red">{err}</p>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full gradient-cta text-white py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-glow-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Get your first steps"
                  )}
                </button>

                <p className="text-[11px] text-muted text-center leading-relaxed">
                  By submitting, you agree to us using your details to respond to your
                  enquiry, as described in our{" "}
                  <Link href="/privacy" className="underline hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
              </form>

              {status === "error" && (
                <p className="text-xs text-muted mt-4 text-center">
                  Or email us directly at{" "}
                  <a href="mailto:hello@ansrdsolutions.com" className="underline text-primary">
                    {/* TODO: [CONTACT EMAIL] */}hello@ansrdsolutions.com
                  </a>
                </p>
              )}
            </div>
          ) : (
            <div className="rounded-2xl bg-white shadow-soft border border-green/30 p-8 text-center">
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
            </div>
          )}

          <p className="text-xs text-muted mt-4">
            No sales pitch. Just your first priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
