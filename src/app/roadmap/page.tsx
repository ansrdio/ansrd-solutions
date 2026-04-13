import AutomationRoadmap from "@/components/AutomationRoadmap";
import WhoItsFor from "@/components/WhoItsFor";

export const metadata = {
  title: "Roadmap — ANSRD Solutions",
  description: "From manual implementation to full automation. See our product roadmap and who we build for.",
};

export default function RoadmapPage() {
  return (
    <>
      <AutomationRoadmap />
      <WhoItsFor />
    </>
  );
}
