"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { about } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative aspect-[4/3] overflow-hidden bg-muted"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
            alt="Interior design moderno"
            className="size-full object-cover grayscale-[0.1]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionLabel>— O escritório</SectionLabel>
          <SectionTitle className="mb-8">{about.title}</SectionTitle>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
