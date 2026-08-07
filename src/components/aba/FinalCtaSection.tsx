"use client";

import { RevealWords } from "@/components/ui/motion-primitives";
import { finalCta } from "@/lib/content";
import { EASE } from "@/lib/utils";
import { motion } from "framer-motion";

export function FinalCtaSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
        alt=""
        className="absolute inset-0 size-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center md:px-10">
        <h2 className="overflow-hidden font-display text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
          <RevealWords text={finalCta.headline} delay={0.2} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          {finalCta.text}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          href={finalCta.cta.href}
          className="mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 text-[10px] font-medium tracking-[0.25em] uppercase text-foreground transition-opacity hover:opacity-90"
        >
          {finalCta.cta.label}
          <span aria-hidden>→</span>
        </motion.a>
      </div>
    </section>
  );
}
