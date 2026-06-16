import Contact from "@/components/Contact";

export const metadata = {
  title: "Get Started — ANSRD Solutions",
  description: "Tell us about your business and get a prioritized cybersecurity implementation plan.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ framework?: string }>;
}) {
  const { framework } = await searchParams;
  return <Contact defaultFramework={framework} />;
}
