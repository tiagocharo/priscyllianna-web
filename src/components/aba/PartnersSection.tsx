"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { ElasticGallery } from "@/components/ui/elastic-gallery";
import { DesignTestimonial } from "@/components/ui/design-testimonial";
import { partners } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";

export function PartnersSection() {
  return (
    <section
      id="projetos"
      className="overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto mb-8 max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <SectionLabel>— Projetos</SectionLabel>
          <SectionTitle>{partners.title}</SectionTitle>
        </motion.div>
      </div>

      <ElasticGallery />

      <div className="mx-auto mt-20 max-w-7xl px-6 md:px-10 lg:px-16">
        <DesignTestimonial
          className="min-h-[520px] py-8"
          label="Depoimentos"
          testimonials={partners.testimonials.map((item) => ({
            quote: item.quote,
            author: item.name,
            role: item.designation,
            company: item.designation,
          }))}
        />
      </div>
    </section>
  );
}
