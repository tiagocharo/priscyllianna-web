import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Nav } from "@/components/aba/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priscylliannagondim.com.br"),
  title: {
    default: "Priscyllianna Gondim — Arquitetura e Interiores",
    template: "%s — Priscyllianna Gondim",
  },
  description:
    "Projetos de arquitetura e interiores com design autoral e funcionalidade. Transformando espaços em experiências únicas em Natal/RN.",
  keywords: [
    "arquitetura",
    "interiores",
    "design de interiores",
    "projeto residencial",
    "projeto comercial",
    "arquiteta Natal",
    "Priscyllianna Gondim",
  ],
  openGraph: {
    title: "Priscyllianna Gondim — Arquitetura e Interiores",
    description:
      "Projetos de arquitetura e interiores com design autoral e funcionalidade.",
    type: "website",
    locale: "pt_BR",
    siteName: "Priscyllianna Gondim",
    images: [{ url: "/hero-architecture.jpg", width: 1200, height: 630, alt: "Priscyllianna Gondim Arquitetura" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
