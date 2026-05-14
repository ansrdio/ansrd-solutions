"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  color: "primary" | "red" | "green" | "amber";
  started: boolean;
}

function StatCard({ value, suffix, label, sublabel, color, started }: StatCardProps) {
  const count = useCountUp(value, 2000, started);

  const colorMap = {
    primary: "text-primary",
    red: "text-red",
    green: "text-green",
    amber: "text-amber",
  };

  return (
    <div className="text-center p-6 rounded-2xl bg-white shadow-soft border border-border/50 hover:shadow-glow-primary/30 transition-all duration-300">
      <div className={`text-4xl sm:text-5xl font-bold ${colorMap[color]} mb-2`}>
        {count}{suffix}
      </div>
      <div className="text-foreground font-semibold text-sm mb-1">{label}</div>
      <div className="text-muted text-xs">{sublabel}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, isInView } = useInView(0.2);

  const stats = [
    {
      value: 43,
      suffix: "%",
      label: "of cyberattacks target SMBs",
      sublabel: "Verizon DBIR 2024",
      color: "red" as const,
    },
    {
      value: 60,
      suffix: "%",
      label: "of SMBs close within 6 months of a breach",
      sublabel: "National Cyber Security Alliance",
      color: "amber" as const,
    },
    {
      value: 77,
      suffix: "%",
      label: "lack an incident response plan",
      sublabel: "IBM Security Report",
      color: "primary" as const,
    },
    {
      value: 95,
      suffix: "%",
      label: "of breaches caused by human error",
      sublabel: "World Economic Forum",
      color: "green" as const,
    },
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            The numbers don&apos;t lie
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed text-lg">
            Small businesses are the primary target, yet the least prepared.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} started={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
