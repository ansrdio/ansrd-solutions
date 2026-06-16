import HowItWorks from "@/components/HowItWorks";
import ChecklistPreview from "@/components/ChecklistPreview";
import NotThis from "@/components/NotThis";

export const metadata = {
  title: "Services — ANSRD Solutions",
  description: "Behaviour-driven implementation engine: human-risk modelling, guided workflows, and governance automation for SMEs.",
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
