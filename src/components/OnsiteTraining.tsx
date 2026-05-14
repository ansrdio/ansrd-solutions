import Image from "next/image";

const trainingEvents = [
  {
    title: "Cybersecurity Fundamentals Workshop",
    location: "Lagos, Nigeria",
    date: "2024",
    description:
      "Intensive hands-on workshop covering foundational cybersecurity practices, threat identification, and incident response for Nigerian businesses.",
    images: [
      "/nigeria-training/lagos-workshop-1.jpg",
      "/nigeria-training/lagos-workshop-2.jpg",
      "/nigeria-training/lagos-workshop-3.jpg",
    ],
  },
  {
    title: "Security Awareness Training for SMEs",
    location: "Abuja, Nigeria",
    date: "2024",
    description:
      "Tailored security awareness sessions for small and medium enterprises, focusing on phishing prevention, password hygiene, and data protection.",
    images: [
      "/nigeria-training/abuja-sme-1.jpg",
      "/nigeria-training/abuja-sme-2.jpg",
      "/nigeria-training/abuja-sme-3.jpg",
    ],
  },
  {
    title: "Executive Cybersecurity Briefing",
    location: "Lagos, Nigeria",
    date: "2024",
    description:
      "Strategic briefing for business leaders on cyber risk management, compliance frameworks, and building a security-first culture within their organizations.",
    images: [
      "/nigeria-training/lagos-exec-1.jpg",
      "/nigeria-training/lagos-exec-2.jpg",
      "/nigeria-training/lagos-exec-3.jpg",
    ],
  },
  {
    title: "Compliance & Framework Implementation",
    location: "Port Harcourt, Nigeria",
    date: "2024",
    description:
      "Practical training on implementing ISO 27001 and NIST CSF frameworks, with real-world case studies and hands-on exercises tailored to the Nigerian business environment.",
    images: [
      "/nigeria-training/ph-compliance-1.jpg",
      "/nigeria-training/ph-compliance-2.jpg",
      "/nigeria-training/ph-compliance-3.jpg",
    ],
  },
];

export default function OnsiteTraining() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            On-the-Ground Training
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Cybersecurity Training in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Nigeria
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            We deliver hands-on cybersecurity training sessions across Nigeria — building
            security awareness, compliance capability, and real skills for African businesses.
          </p>
        </div>
      </section>

      {/* Training Events */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-20">
            {trainingEvents.map((event, eventIndex) => (
              <div key={event.title} className={`grid lg:grid-cols-2 gap-10 items-center ${eventIndex % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Text side */}
                <div className={eventIndex % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                    <span className="text-sm text-muted flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
                    {event.title}
                  </h2>
                  <p className="text-muted leading-relaxed text-lg">
                    {event.description}
                  </p>
                </div>

                {/* Images grid */}
                <div className={`grid grid-cols-2 gap-3 ${eventIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-surface-2 border border-border/50 shadow-soft">
                    <Image
                      src={event.images[0]}
                      alt={`${event.title} - Photo 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Placeholder overlay — remove once real images are added */}
                    <div className="absolute inset-0 bg-surface-2 flex items-center justify-center">
                      <div className="text-center">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted/30 mx-auto mb-2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-xs text-muted/40 font-medium">Photo coming soon</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border/50 shadow-soft">
                    <Image
                      src={event.images[1]}
                      alt={`${event.title} - Photo 2`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-surface-2 flex items-center justify-center">
                      <div className="text-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted/30 mx-auto mb-1">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-[10px] text-muted/40 font-medium">Photo coming soon</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border/50 shadow-soft">
                    <Image
                      src={event.images[2]}
                      alt={`${event.title} - Photo 3`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-surface-2 flex items-center justify-center">
                      <div className="text-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted/30 mx-auto mb-1">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-[10px] text-muted/40 font-medium">Photo coming soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
            Interested in training for your team?
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            We deliver customized cybersecurity training sessions across Nigeria and beyond.
            Get in touch to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-block gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
