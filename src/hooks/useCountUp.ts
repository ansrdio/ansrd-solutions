"use client";

import { useEffect, useState, useRef } from "react";

export function useCountUp(end: number, duration: number = 2000, start: boolean = true) {
  // Initialize to final value so SSR never renders 0
  const [count, setCount] = useState(end);
  const hasAnimated = useRef(false);
  const decimals = (end.toString().split(".")[1] || "").length;

  useEffect(() => {
    if (!start || hasAnimated.current) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(end);
      hasAnimated.current = true;
      return;
    }

    // Start animation from 0 → end (only client-side, post-mount)
    hasAnimated.current = true;
    setCount(0);

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, decimals]);

  return count;
}
