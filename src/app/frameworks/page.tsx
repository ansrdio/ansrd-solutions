import FrameworkComparison from "@/components/FrameworkComparison";
import ThreatAssessment from "@/components/ThreatAssessment";

export const metadata = {
  title: "Frameworks — ANSRD Solutions",
  description: "Cyber Essentials, ISO 27001, NIST CSF, SOC 2, CIS Controls, PCI DSS, and GDPR — mapped and made executable.",
};

export default function FrameworksPage() {
  return (
    <>
      <FrameworkComparison />
      <ThreatAssessment />
    </>
  );
}
