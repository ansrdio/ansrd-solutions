import SecurityAwareness from "@/components/SecurityAwareness";
import SecurityEducation from "@/components/SecurityEducation";

export const metadata = {
  title: "Behavioural Training — ANSRD Solutions",
  description: "Adaptive awareness pathways, behavioural reinforcement modules, and micro-learning designed to change long-term security habits.",
};

export default function TrainingPage() {
  return (
    <>
      <SecurityAwareness />
      <SecurityEducation />
    </>
  );
}
