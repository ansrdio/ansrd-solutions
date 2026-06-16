import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/awareness-campaign/IMG_1760.jpg",
    alt: "Presenting cybersecurity awareness — Why This Matters — to students in Lagos",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/awareness-campaign/IMG_1829.jpg",
    alt: "Students proudly holding their ANSRD Solutions cybersecurity workbooks",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1796.jpg",
    alt: "Teaching Multi-Factor Authentication to secondary school students",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1857.jpg",
    alt: "Interactive whiteboard session on phishing and password security",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1954.jpg",
    alt: "Student participating in whiteboard exercise on password creation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1802.jpg",
    alt: "Full classroom of students engaged in cybersecurity awareness training",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1960.jpg",
    alt: "Group photo with students after cybersecurity awareness session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/20251115_113404.jpg",
    alt: "Keynote presentation at Rotary Club cybersecurity awareness event",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/awareness-campaign/IMG_1836.jpg",
    alt: "ANSRD team with school principal and staff at Lagos Senior High School",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_2039.jpg",
    alt: "Community awareness event — Stay Safe Online campaign with ANSRD Solutions banner",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1876.jpg",
    alt: "Students attentively learning about online safety at another school visit",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/20251115_132755.jpg",
    alt: "Panel at Cybersecurity Awareness Introduction to AI conference",
    span: "col-span-2 row-span-1",
  },
];

export default function Awareness() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            Community Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Cybersecurity{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Awareness Campaign
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto">
            We believe security starts with people. Through our on-the-ground awareness campaigns
            in Nigeria, we&apos;ve reached hundreds of students and community members — teaching
            practical skills like recognising phishing, creating strong passwords, and understanding
            multi-factor authentication.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Students Reached" },
              { value: "6", label: "Schools Visited" },
              { value: "3", label: "Community Events" },
              { value: "2024", label: "Campaign Year" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white shadow-soft border border-border/50">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Moments from our campaign
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              From classroom sessions on phishing and passwords to community-wide &ldquo;Stay Safe Online&rdquo;
              events — building security behaviour from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium leading-snug">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Taught */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              Topics Covered
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Building security behaviours early
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Phishing Recognition",
                description: "Teaching students to identify fraudulent emails, messages, and social engineering tactics before they click.",
              },
              {
                title: "Password Security",
                description: "The 3 Golden Habits — Pause, Inspect, Proceed — and creating strong, unique passwords for every account.",
              },
              {
                title: "Multi-Factor Authentication",
                description: "Why MFA matters and how to set it up on personal devices and school accounts for added protection.",
              },
              {
                title: "Online Safety & Privacy",
                description: "Protecting personal information, understanding digital footprints, and staying safe on social media.",
              },
              {
                title: "Cybersecurity as a Career",
                description: "Inspiring the next generation by showing real pathways into cybersecurity careers.",
              },
              {
                title: "Community Awareness",
                description: "Extending beyond schools to reach local communities through public events and partnerships.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-glow-primary/20 transition-all duration-300"
              >
                <h3 className="font-bold text-foreground text-lg mb-2">{topic.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 gradient-hero">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
            Want us to bring awareness training to your community?
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            We partner with schools, community organisations, and businesses to deliver
            cybersecurity awareness sessions. Get in touch to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all shadow-glow-primary"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
