"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { DesignTestimonial } from "@/components/ui/design-testimonial";
import { partners } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Residencial",
    items: [
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop", label: "Sala de Estar" },
      { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop", label: "Quarto Master" },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", label: "Cozinha Gourmet" },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop", label: "Banheiro Spa" },
    ],
  },
  {
    title: "Comercial",
    items: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", label: "Escritório Moderno" },
      { src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&h=400&fit=crop", label: "Recepção" },
      { src: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=600&h=400&fit=crop", label: "Restaurante" },
      { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop", label: "Coworking" },
    ],
  },
];

export function PartnersSection() {
  return (
    <section
      id="clientes"
      className="overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto mb-16 max-w-7xl px-6 md:px-10 lg:px-16">
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

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 space-y-16">
        {projects.map((category) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium"
            >
              {category.title}
            </motion.p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {category.items.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="group relative aspect-[3/2] overflow-hidden rounded-sm bg-muted"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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
