import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.JPG"
                alt="ANSRD Solutions"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-bold text-white tracking-tight text-xl">
                ANSRD
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed mb-4">
              Behaviour-driven cybersecurity governance — simplifying security
              for underserved organisations through human-risk reduction and guided implementation.
            </p>
            <div className="space-y-1 text-sm">
              <a
                href="mailto:hello@ansrdsolutions.com"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {/* TODO: [CONTACT EMAIL] */}hello@ansrdsolutions.com
              </a>
              <a
                href="https://linkedin.com/company/ansrd"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {/* TODO: [LINKEDIN URL] */}LinkedIn
              </a>
            </div>
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
                <Link href="/awareness" className="text-white/70 hover:text-white transition-colors">
                  Awareness
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
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  Cyber Essentials
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  ISO 27001:2022
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  NIST CSF 2.0
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  SOC 2 Type II
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  CIS Controls v8
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="text-white/70 hover:text-white transition-colors">
                  UK GDPR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Engagement</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green" />
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Guided Implementation
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-light" />
                <Link href="/roadmap" className="text-white/70 hover:text-white transition-colors">
                  Assisted Automation
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <Link href="/roadmap" className="text-white/70 hover:text-white transition-colors">
                  Full Automation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-xs text-white/40 leading-relaxed">
            &copy; {new Date().getFullYear()} ANSRD Solutions Ltd. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            {/* TODO: [COMPANY NUMBER] and [REGISTERED ADDRESS] */}
            Company No. [COMPANY NUMBER] · Registered office: [REGISTERED ADDRESS]
          </div>
          <div className="text-xs text-white/30">
            Structured Security for Growing Businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
