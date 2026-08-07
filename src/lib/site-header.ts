import { cn } from "@/lib/utils";

export function siteHeaderClass(scrolled: boolean) {
  return cn(
    "pointer-events-auto fixed inset-x-0 top-0 z-[9999] w-full transition-all duration-300",
    scrolled
      ? "border-b border-border bg-background text-foreground shadow-sm"
      : "border-b border-white/10 bg-neutral-950/75 text-white backdrop-blur-md",
  );
}

export function siteHeaderInnerClass() {
  return "relative mx-auto flex h-16 w-full max-w-7xl items-center px-6 md:px-10 lg:px-16";
}
