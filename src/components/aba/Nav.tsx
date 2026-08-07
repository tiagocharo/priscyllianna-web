"use client";

import { navLinks, siteConfig } from "@/lib/content";
import { siteHeaderClass, siteHeaderInnerClass } from "@/lib/site-header";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function NavContent() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={siteHeaderClass(scrolled)}>
        <div className={siteHeaderInnerClass()}>
          <a
            href="#top"
            className="relative z-10 shrink-0 font-display text-base tracking-[0.3em] uppercase md:text-lg"
          >
            {siteConfig.name}
          </a>

          <nav
            aria-label="Principal"
            className="pointer-events-none absolute inset-x-0 top-0 flex h-16 items-center justify-center lg:flex"
          >
            <ul className="pointer-events-auto hidden items-center gap-4 lg:flex xl:gap-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="whitespace-nowrap text-[10px] tracking-[0.18em] uppercase transition-opacity hover:opacity-60 xl:text-[11px] xl:tracking-[0.22em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-3">
            <a
              href="#contato"
              className={`hidden whitespace-nowrap border px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors lg:inline-flex ${
                scrolled
                  ? "border-foreground hover:bg-foreground hover:text-background"
                  : "border-white/80 hover:bg-white/10"
              }`}
            >
              Fale conosco
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-10 flex flex-col gap-1.5 p-2 lg:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-6 bg-background px-6 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl uppercase tracking-[0.12em] text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-foreground px-8 py-3 text-[10px] tracking-[0.25em] uppercase"
          >
            Fale conosco
          </a>
        </div>
      )}
    </>
  );
}

export function Nav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<NavContent />, document.body);
}
