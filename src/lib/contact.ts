import { siteConfig } from "./content";

export type ContactFormData = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  message: string;
};

export function buildContactWhatsApp(form: ContactFormData): string {
  const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    [
      `Olá! Gostaria de saber mais sobre seus serviços de arquitetura.`,
      ``,
      `Nome: ${form.name}`,
      `Tipo de projeto: ${form.company}`,
      `Cidade: ${form.role}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      ``,
      form.message,
    ].join("\n"),
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildContactMailto(form: ContactFormData): string {
  const subject = encodeURIComponent(
    `[Priscyllianna Gondim] Consultoria — ${form.company || form.name}`,
  );
  const body = encodeURIComponent(
    [
      `Nome: ${form.name}`,
      `Tipo de projeto: ${form.company}`,
      `Cidade: ${form.role}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      "",
      form.message,
    ].join("\n"),
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
