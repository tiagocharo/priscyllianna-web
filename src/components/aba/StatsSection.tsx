"use client";

import { stats } from "@/lib/content";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "@/lib/utils";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOnce);
  const count = useMotionValue(0);

  const numericMatch = value.match(/^(\d+)/);
  const suffix = value.replace(/^\d+/, "");
  const target = numericMatch ? parseInt(numericMatch[1], 10) : null;

  const display = useTransform(count, (v) => {
    if (target === null) return value;
    return `${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(count, target, {
      duration: 1.8,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView, target, count]);

  return (
    <motion.div ref={ref} variants={fadeUp} className="text-center md:text-left">
      {target !== null ? (
        <motion.p className="font-display mb-2 text-4xl text-background md:text-5xl lg:text-6xl">
          {display}
        </motion.p>
      ) : (
        <p className="font-display mb-2 text-4xl text-background md:text-5xl lg:text-6xl">
          {value}
        </p>
      )}
      <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="border-t border-border bg-foreground px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-16 text-center text-[10px] uppercase tracking-[0.4em] text-background/50 md:mb-20"
        >
          — {stats.title}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-8"
        >
          {stats.items.map((item) => (
            <AnimatedStat
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
