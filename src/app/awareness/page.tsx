import type { Metadata } from "next";
import Awareness from "@/components/Awareness";

export const metadata: Metadata = {
  title: "Awareness Campaign | ANSRD Solutions",
  description:
    "Cybersecurity awareness campaigns delivered across Nigeria — reaching schools and communities with practical security education to build lasting behavioural change.",
};

export default function AwarenessPage() {
  return <Awareness />;
}
