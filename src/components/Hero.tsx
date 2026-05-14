import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-36">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 shadow-soft mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Cybersecurity Implementation System
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Secure Your Business With{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Structured Implementation
            </span>
            {" "}&mdash; No Guesswork.
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            We translate frameworks like Cyber Essentials, ISO 27001, and NIST into
            prioritized, executable actions — giving you the clarity to actually get security done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-full font-semibold text-base border border-border hover:border-primary/30 hover:text-primary transition-all shadow-soft"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center">
                <span className="text-green font-bold text-xs">CE</span>
              </div>
              <span className="text-sm text-muted font-medium">Cyber Essentials</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">ISO</span>
              </div>
              <span className="text-sm text-muted font-medium">27001:2022</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center">
                <span className="text-amber font-bold text-xs">NIST</span>
              </div>
              <span className="text-sm text-muted font-medium">CSF 2.0</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-soft">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">SOC</span>
              </div>
              <span className="text-sm text-muted font-medium">SOC 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
