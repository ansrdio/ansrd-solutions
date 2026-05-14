import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white tracking-tight text-xl">
                ANSRD
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Structured cybersecurity implementation for small and medium businesses.
              From framework to done.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-white/70 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  Frameworks
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-white/70 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Frameworks</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">Cyber Essentials</li>
              <li className="text-white/70">ISO 27001:2022</li>
              <li className="text-white/70">NIST CSF 2.0</li>
              <li className="text-white/70">SOC 2 Type II</li>
              <li className="text-white/70">CIS Controls v8</li>
              <li className="text-white/70">PCI DSS 4.0</li>
              <li className="text-white/70">UK GDPR</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green" />
                <span className="text-white/70">Guided Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-light" />
                <span className="text-white/70">Assisted Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="text-white/70">Full Automation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} ANSRD Solutions Ltd. All rights reserved.
          </div>
          <div className="text-sm text-white/30">
            Structured Security for Growing Businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
