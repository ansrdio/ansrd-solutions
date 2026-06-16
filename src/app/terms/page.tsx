import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ANSRD Solutions",
  description: "Terms governing the use of ANSRD Solutions services and website.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-muted leading-relaxed">
          {/* TODO: Add full terms of service content */}
          Terms of service for ANSRD Solutions Ltd are being finalised. Please contact us
          at {/* TODO: [CONTACT EMAIL] */}[CONTACT EMAIL] for any contractual queries.
        </p>
      </div>
    </section>
  );
}
