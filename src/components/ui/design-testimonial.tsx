"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface DesignTestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface DesignTestimonialProps {
  testimonials: DesignTestimonialItem[];
  label?: string;
  autoplayInterval?: number;
  className?: string;
}

export function DesignTestimonial({
  testimonials,
  label = "Depoimentos",
  autoplayInterval = 6000,
  className,
}: DesignTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % testimonials.length),
    [testimonials.length],
  );

  const goPrev = useCallback(
    () =>
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      ),
    [testimonials.length],
  );

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(goNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [goNext, autoplayInterval, testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden bg-background",
        className,
      )}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl px-6 md:px-0"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 select-none text-[28rem] font-bold leading-none tracking-tighter text-foreground/[0.03] md:block"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <div className="relative flex flex-col md:flex-row">
          <div className="mb-8 flex flex-row items-center gap-6 border-border md:mb-0 md:flex-col md:items-center md:justify-center md:border-r md:pr-16">
            <motion.span
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground md:[writing-mode:vertical-rl]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {label}
            </motion.span>

            <div className="relative h-px w-16 bg-border md:mt-8 md:h-32 md:w-px">
              <motion.div
                className="absolute left-0 top-0 h-full origin-left bg-foreground md:hidden"
                animate={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute left-0 top-0 hidden w-full origin-top bg-foreground md:block"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="flex-1 md:pl-16 md:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="relative mb-12 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="font-display text-3xl font-light leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-[0.3em] inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="flex items-end justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="h-px w-8 bg-foreground"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {current.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {current.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex shrink-0 items-center gap-4">
                <motion.button
                  type="button"
                  onClick={goPrev}
                  aria-label="Depoimento anterior"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground transition-colors group-hover:text-foreground/30"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={goNext}
                  aria-label="Próximo depoimento"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground transition-colors group-hover:text-foreground/30"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
