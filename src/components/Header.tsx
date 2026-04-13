import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border/50 bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded glow-border bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <span className="text-accent font-bold text-sm font-mono">A</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight text-lg">
            ANSRD<span className="text-accent">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#stats" className="text-muted hover:text-accent transition-colors">
            The Problem
          </a>
          <a href="#how-it-works" className="text-muted hover:text-accent transition-colors">
            How It Works
          </a>
          <a href="#preview" className="text-muted hover:text-accent transition-colors">
            Live Demo
          </a>
          <a href="#assess" className="text-muted hover:text-accent transition-colors">
            Assessment
          </a>
          <a href="#awareness" className="text-muted hover:text-accent transition-colors">
            Training
          </a>
          <a href="#automation" className="text-muted hover:text-accent transition-colors">
            Roadmap
          </a>
          <a
            href="#contact"
            className="bg-accent/10 text-accent border border-accent/30 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/20 transition-all"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
