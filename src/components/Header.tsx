"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow-primary">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-foreground tracking-tight text-xl">
            ANSRD
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="text-muted hover:text-primary font-medium transition-colors">
            Services
          </Link>
          <Link href="/training" className="text-muted hover:text-primary font-medium transition-colors">
            Training
          </Link>
          <Link href="/frameworks" className="text-muted hover:text-primary font-medium transition-colors">
            Frameworks
          </Link>
          <Link href="/roadmap" className="text-muted hover:text-primary font-medium transition-colors">
            Roadmap
          </Link>
          <Link href="/nigeria-training" className="text-muted hover:text-primary font-medium transition-colors">
            Nigeria Training
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="gradient-cta text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-glow-primary"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-white px-6 py-4 space-y-3">
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-primary font-medium py-2 transition-colors">
            Services
          </Link>
          <Link href="/training" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-primary font-medium py-2 transition-colors">
            Training
          </Link>
          <Link href="/frameworks" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-primary font-medium py-2 transition-colors">
            Frameworks
          </Link>
          <Link href="/roadmap" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-primary font-medium py-2 transition-colors">
            Roadmap
          </Link>
          <Link href="/nigeria-training" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-primary font-medium py-2 transition-colors">
            Nigeria Training
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block gradient-cta text-white text-center px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
