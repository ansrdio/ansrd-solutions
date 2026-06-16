import type { Metadata } from "next";
import Awareness from "@/components/Awareness";

export const metadata: Metadata = {
  title: "Behavioural Awareness | ANSRD Solutions",
  description:
    "Hands-on behavioural awareness campaigns that change security habits — not just knowledge. Reaching schools and communities across Nigeria with the Pause, Inspect, Proceed framework.",
};

export default function AwarenessPage() {
  return <Awareness />;
}
