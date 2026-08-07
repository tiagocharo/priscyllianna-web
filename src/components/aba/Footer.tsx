import { footer, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-display mb-4 text-2xl tracking-[0.35em] uppercase">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
          </div>

          <nav className="md:col-span-4">
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Menu
            </p>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-muted-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Contato
            </p>
            <p className="text-sm">{siteConfig.email}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.whatsapp}
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
