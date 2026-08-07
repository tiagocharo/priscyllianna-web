"use client";

import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { differentiators } from "@/lib/content";
import { EASE } from "@/lib/utils";
import { motion } from "motion/react";

const cards: TestimonialItem[] = differentiators.items.map((item) => ({
  text: item.description,
  name: item.title,
  role: item.role,
}));

const firstColumn = cards.slice(0, 2);
const secondColumn = cards.slice(2, 4);
const thirdColumn = cards.slice(4, 6);

export function DifferentiatorsSection() {
  return (
    <section
      id="diferenciais"
      className="relative border-t border-border bg-background py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <span className="border-hairline px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Diferenciais
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight tracking-tight md:text-5xl">
            {differentiators.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {differentiators.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:mt-16">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
}
