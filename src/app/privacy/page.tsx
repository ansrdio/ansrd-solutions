import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ANSRD Solutions",
  description: "How ANSRD Solutions collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-10">
          Last updated: {/* TODO: [DATE] */}June 2025
        </p>

        <div className="prose prose-sm max-w-none text-foreground space-y-8">
          <p className="text-muted leading-relaxed">
            ANSRD Solutions Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;),
            company number {/* TODO: [COMPANY NUMBER] */}[COMPANY NUMBER], registered at{" "}
            {/* TODO: [REGISTERED ADDRESS] */}[REGISTERED ADDRESS], is the data controller
            for personal data collected through this website.
          </p>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. What we collect</h2>
            <p className="text-muted leading-relaxed">
              When you submit our contact form we collect the name, work email address,
              company size, target framework, and the security-posture details you choose to
              provide. We also collect standard server logs and, if enabled, analytics data
              (see &ldquo;Cookies&rdquo; below).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">
              2. Why we collect it and our lawful basis
            </h2>
            <p className="text-muted leading-relaxed">
              We use this information to respond to your enquiry and prepare an initial
              assessment of your security posture. Our lawful basis is legitimate interest
              (responding to a request you initiated) and, where applicable, steps taken at
              your request prior to entering a contract. We do not sell your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How long we keep it</h2>
            <p className="text-muted leading-relaxed">
              We retain enquiry data for {/* TODO: [RETENTION PERIOD] */}24 months after our
              last contact, then delete it, unless a longer period is required by law or for
              an ongoing engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Who we share it with</h2>
            <p className="text-muted leading-relaxed">
              We share data only with service providers that help us operate (for example,
              our email and form-processing providers:{" "}
              {/* TODO: [LIST PROVIDERS] */}[LIST PROVIDERS]). These providers process data
              on our instructions under appropriate agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. International transfers</h2>
            <p className="text-muted leading-relaxed">
              Where data is processed outside the UK, we rely on adequacy decisions or
              appropriate safeguards such as the IDTA or Standard Contractual Clauses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Your rights</h2>
            <p className="text-muted leading-relaxed">
              Under UK GDPR you may request access to, correction of, or deletion of your
              data; object to or restrict processing; and request data portability. To
              exercise any right, email{" "}
              {/* TODO: [CONTACT EMAIL] */}[CONTACT EMAIL]. You also have the right to
              complain to the Information Commissioner&apos;s Office (ico.org.uk).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Cookies</h2>
            <p className="text-muted leading-relaxed">
              This site uses only essential cookies required for the website to function.
              We do not use analytics or marketing cookies.
              {/* TODO: update if analytics/marketing cookies are added */}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p className="text-muted leading-relaxed">
              Questions about this policy:{" "}
              {/* TODO: [CONTACT EMAIL] */}[CONTACT EMAIL], ANSRD Solutions Ltd,{" "}
              {/* TODO: [REGISTERED ADDRESS] */}[REGISTERED ADDRESS].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
