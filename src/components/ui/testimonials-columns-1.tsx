"use client";

import React from "react";
import { motion } from "motion/react";

export type TestimonialItem = {
  text: string;
  name: string;
  role: string;
};

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <article
                key={`${index}-${i}`}
                className="w-full max-w-xs rounded-sm border border-border bg-background p-8 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <span className="font-display block text-sm leading-tight tracking-tight">
                    {name}
                  </span>
                  <span className="mt-1 block text-xs leading-tight tracking-tight text-muted-foreground">
                    {role}
                  </span>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
