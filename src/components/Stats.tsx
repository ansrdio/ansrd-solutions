"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  color: "accent" | "red" | "green" | "amber";
  started: boolean;
}

function StatCard({ value, suffix, prefix, label, sublabel, color, started }: StatCardProps) {
  const count = useCountUp(value, 2000, started);

  const colorMap = {
    accent: "text-accent",
    red: "text-red",
    green: "text-green",
    amber: "text-amber",
  };

  const glowMap = {
    accent: "text-glow",
    red: "",
    green: "text-glow-green",
    amber: "",
  };

  const borderMap = {
    accent: "border-accent/20 hover:border-accent/40",
    red: "border-red/20 hover:border-red/40",
    green: "border-green/20 hover:border-green/40",
    amber: "border-amber/20 hover:border-amber/40",
  };

  return (
    <div className={`relative rounded-lg border ${borderMap[color]} bg-surface-2 p-6 transition-all duration-300 group`}>
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-b from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative">
        <div className={`text-4xl sm:text-5xl font-bold font-mono ${colorMap[color]} ${glowMap[color]} mb-2`}>
          {prefix}{count}{suffix}
        </div>
        <div className="text-foreground font-medium text-sm mb-1">{label}</div>
        <div className="text-muted text-xs">{sublabel}</div>
      </div>
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
      color: "accent" as const,
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
    <section id="stats" className="py-12 sm:py-16 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-mono text-accent tracking-wider uppercase mb-3">
            // threat_landscape.data
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            The numbers don&apos;t lie
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Small businesses are the primary target, yet the least prepared.
            The gap between awareness and action is where attacks succeed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} started={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
