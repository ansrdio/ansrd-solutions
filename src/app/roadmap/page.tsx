import AutomationRoadmap from "@/components/AutomationRoadmap";
import WhoItsFor from "@/components/WhoItsFor";

export const metadata = {
  title: "Engine Roadmap — ANSRD Solutions",
  description: "From guided implementation to autonomous governance automation. See how our behaviour-driven engine evolves.",
};

export default function RoadmapPage() {
  return (
    <>
      <AutomationRoadmap />
      <WhoItsFor />
    </>
  );
}
