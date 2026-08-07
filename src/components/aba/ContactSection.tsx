"use client";

import {
  SectionLabel,
  SectionTitle,
} from "@/components/ui/motion-primitives";
import { contact } from "@/lib/content";
import { buildContactMailto } from "@/lib/contact";
import { fadeUp, viewportOnce } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  message: "",
};

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full border-hairline bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = buildContactMailto(form);
    setForm(emptyForm);
  }

  return (
    <section id="contato" className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <SectionLabel>— Contato</SectionLabel>
          <SectionTitle className="mb-6">{contact.title}</SectionTitle>
          <p className="mb-12 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {contact.subtitle}
          </p>

          <div className="space-y-8">
            {Object.entries(contact.sidebar).map(([key, item]) => (
              <div key={key}>
                <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm md:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={onSubmit}
          className="space-y-6 border-hairline p-8 md:p-12 lg:col-span-7"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label={contact.fields.name}
              id="name"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              required
            />
            <Field
              label={contact.fields.company}
              id="company"
              value={form.company}
              onChange={(v) => setForm((f) => ({ ...f, company: v }))}
            />
            <Field
              label={contact.fields.role}
              id="role"
              value={form.role}
              onChange={(v) => setForm((f) => ({ ...f, role: v }))}
            />
            <Field
              label={contact.fields.email}
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              required
            />
          </div>
          <Field
            label={contact.fields.phone}
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
          />
          <div>
            <label
              htmlFor="message"
              className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              {contact.fields.message}
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={5}
              required
              className="w-full resize-none border-hairline bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[10px] font-medium tracking-[0.25em] uppercase text-background transition-opacity hover:opacity-90"
          >
            Enviar mensagem
            <span aria-hidden>→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
