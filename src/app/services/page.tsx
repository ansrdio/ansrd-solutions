import HowItWorks from "@/components/HowItWorks";
import ChecklistPreview from "@/components/ChecklistPreview";
import NotThis from "@/components/NotThis";

export const metadata = {
  title: "Services — ANSRD Solutions",
  description: "Structured cybersecurity implementation: from framework to done in four phases.",
};

export default function ServicesPage() {
  return (
    <>
      <HowItWorks />
      <ChecklistPreview />
      <NotThis />
    </>
  );
}
