"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { story } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section id="historia" className="border-t border-border bg-background px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop"
              alt="Projeto de arquitetura e interiores"
              className="size-full object-cover grayscale-[0.15]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>— Minha história</SectionLabel>
            <SectionTitle className="mb-10">{story.title}</SectionTitle>
          </motion.div>
          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
