import type { Metadata } from "next";
import NigeriaTraining from "@/components/NigeriaTraining";

export const metadata: Metadata = {
  title: "Nigeria Training | ANSRD Solutions",
  description: "Cybersecurity training sessions delivered in Nigeria. Building security awareness and compliance capability across African businesses.",
};

export default function NigeriaTrainingPage() {
  return <NigeriaTraining />;
}
