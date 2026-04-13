import SecurityAwareness from "@/components/SecurityAwareness";
import SecurityEducation from "@/components/SecurityEducation";

export const metadata = {
  title: "Security Training — ANSRD Solutions",
  description: "Security awareness programs, phishing simulations, and role-based education paths.",
};

export default function TrainingPage() {
  return (
    <>
      <SecurityAwareness />
      <SecurityEducation />
    </>
  );
}
