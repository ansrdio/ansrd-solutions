import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ChecklistPreview from "@/components/ChecklistPreview";
import SecurityAwareness from "@/components/SecurityAwareness";
import SecurityEducation from "@/components/SecurityEducation";
import ThreatAssessment from "@/components/ThreatAssessment";
import FrameworkComparison from "@/components/FrameworkComparison";
import NotThis from "@/components/NotThis";
import WhoItsFor from "@/components/WhoItsFor";
import AutomationRoadmap from "@/components/AutomationRoadmap";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <ChecklistPreview />
      <SecurityAwareness />
      <SecurityEducation />
      <ThreatAssessment />
      <FrameworkComparison />
      <NotThis />
      <WhoItsFor />
      <AutomationRoadmap />
      <Contact />
    </>
  );
}
