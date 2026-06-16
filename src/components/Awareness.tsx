import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/awareness-campaign/IMG_1760.jpg",
    alt: "Teaching 'Why This Matters' — digital life risks and small threats that spread fast",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/awareness-campaign/IMG_1829.jpg",
    alt: "Students with ANSRD cybersecurity workbooks — reinforcing learned behaviours with take-home materials",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1796.jpg",
    alt: "Hands-on MFA session — building the habit of verifying before trusting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1857.jpg",
    alt: "Interactive whiteboard exercise — students practising the Pause, Inspect, Proceed framework",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1954.jpg",
    alt: "Student at the whiteboard creating strong passwords using behavioural cues",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1802.jpg",
    alt: "Full classroom engaged — behavioural change requires attention, not just information",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1960.jpg",
    alt: "Group photo — young advocates equipped with new security habits",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/20251115_113404.jpg",
    alt: "Keynote at Rotary Club event — scaling behavioural awareness beyond schools",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/awareness-campaign/IMG_1836.jpg",
    alt: "Partnership with school leadership — embedding security habits into institutions",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_2039.jpg",
    alt: "Community 'Stay Safe Online' campaign — reaching people where they are",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/IMG_1876.jpg",
    alt: "Students actively taking notes — converting awareness into personal commitments",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/awareness-campaign/20251115_132755.jpg",
    alt: "Conference panel — Cybersecurity Awareness and Introduction to AI for community leaders",
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
            Behavioural Awareness Outreach
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
            Changing Security{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Behaviours at the Source
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto">
            Most breaches start with a human decision. Our awareness campaigns go beyond slides and 
            lectures — we use hands-on behavioural exercises to build lasting security habits in
            schools and communities across Nigeria. The goal isn&apos;t just knowledge — it&apos;s
            measurable behaviour change.
          </p>
        </div>
      </section>

      {/* Why Behaviour */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Habit Formation</h3>
              <p className="text-muted text-sm leading-relaxed">
                We don&apos;t lecture — we run interactive exercises that create automatic security 
                responses through repetition and reinforcement.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Human-Centred Design</h3>
              <p className="text-muted text-sm leading-relaxed">
                Sessions are designed around how people actually make decisions — not how 
                security professionals wish they would.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Measurable Impact</h3>
              <p className="text-muted text-sm leading-relaxed">
                We track behaviour indicators — not just attendance — to ensure real change 
                persists long after the session ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Behaviours Changed" },
              { value: "6", label: "Schools Reached" },
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
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Behavioural change in action
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Interactive sessions across Lagos schools and community halls — teaching the 
              &ldquo;Pause, Inspect, Proceed&rdquo; framework through hands-on exercises, 
              not passive slides.
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

      {/* Behavioural Framework */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              The 3 Golden Habits framework
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Every session is built around a simple behavioural model that anyone can remember 
              and apply in daily digital life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Pause",
                description: "Before clicking any link, opening any attachment, or sharing any information — stop. The pause breaks the automatic response that attackers exploit.",
                colour: "primary",
              },
              {
                step: "2",
                title: "Inspect",
                description: "Look at the sender, the URL, the request. Does it match what you expect? Are there pressure tactics, urgency cues, or unusual requests?",
                colour: "accent",
              },
              {
                step: "3",
                title: "Proceed",
                description: "Only act when you've verified. If in doubt, confirm through a separate channel. This single habit prevents the majority of social engineering attacks.",
                colour: "green",
              },
            ].map((habit) => (
              <div key={habit.step} className="relative p-8 rounded-2xl bg-white shadow-soft border border-border/50">
                <div className={`absolute -top-4 left-8 w-8 h-8 rounded-full bg-${habit.colour} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{habit.step}</span>
                </div>
                <h3 className="font-bold text-foreground text-xl mt-2 mb-3">{habit.title}</h3>
                <p className="text-muted leading-relaxed">{habit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Phishing Recognition",
                description: "Hands-on exercises where participants identify real vs. fake messages — building pattern recognition through practice, not theory.",
              },
              {
                title: "Password Behaviour",
                description: "Interactive whiteboard sessions where students create and test passwords — learning why 'MyShoe$14' beats 'Password123' through experience.",
              },
              {
                title: "Multi-Factor Authentication",
                description: "Live device setup sessions — because understanding MFA conceptually doesn't change behaviour; setting it up does.",
              },
              {
                title: "Digital Footprint Awareness",
                description: "Exercises that reveal what personal data is already exposed — creating the emotional motivation to change sharing habits.",
              },
              {
                title: "Peer Reinforcement",
                description: "Training student ambassadors who continue reinforcing security behaviours long after our team leaves.",
              },
              {
                title: "Community Scaling",
                description: "Public events and partnerships that extend behavioural change beyond schools into families and local businesses.",
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
            Bring behavioural awareness to your community
          </h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            We partner with schools, community organisations, and businesses to deliver
            hands-on security behaviour sessions. No slides. No checkboxes. Real habit change.
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
