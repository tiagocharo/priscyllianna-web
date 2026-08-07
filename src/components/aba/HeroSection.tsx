"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { heroProducts } from "@/lib/content";

export function HeroSection() {
  return (
    <div id="top">
      <HeroParallax products={heroProducts} />
    </div>
  );
}
