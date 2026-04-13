export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded glow-border bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold text-xs font-mono">A</span>
              </div>
              <span className="font-semibold text-foreground tracking-tight">
                ANSRD<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs leading-relaxed mb-4">
              Structured cybersecurity implementation for small and medium businesses.
              From framework to done.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-xs font-mono text-green">Systems operational</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#stats" className="text-muted hover:text-accent transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#preview" className="text-muted hover:text-accent transition-colors">
                  Live Demo
                </a>
              </li>
              <li>
                <a href="#assess" className="text-muted hover:text-accent transition-colors">
                  Assessment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Frameworks</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green font-mono text-xs font-bold">CE</span>
                <span className="text-muted">Cyber Essentials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-mono text-xs font-bold">ISO</span>
                <span className="text-muted">27001:2022</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber font-mono text-xs font-bold">NIST</span>
                <span className="text-muted">CSF 2.0</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-mono text-xs font-bold">SOC</span>
                <span className="text-muted">SOC 2 Type II</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green font-mono text-xs font-bold">CIS</span>
                <span className="text-muted">Controls v8</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red font-mono text-xs font-bold">PCI</span>
                <span className="text-muted">DSS 4.0</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber font-mono text-xs font-bold">GDPR</span>
                <span className="text-muted">UK GDPR</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green" />
                <span className="text-muted">Guided Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted">Assisted Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted" />
                <span className="text-muted">Full Automation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-muted font-mono">
            &copy; {new Date().getFullYear()} ANSRD Solutions Ltd. All rights reserved.
          </div>
          <div className="text-xs text-muted/50 font-mono">
            v2.1.0 // built for operators
          </div>
        </div>
      </div>
    </footer>
  );
}
