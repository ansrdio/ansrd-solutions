import type { Metadata } from "next";
import OnsiteTraining from "@/components/OnsiteTraining";

export const metadata: Metadata = {
  title: "On-Site Training | ANSRD Solutions",
  description: "Hands-on cybersecurity training sessions delivered on-site. Building security awareness and compliance capability across African businesses.",
};

export default function OnsiteTrainingPage() {
  return <OnsiteTraining />;
}
