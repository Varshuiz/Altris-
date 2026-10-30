import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn, HoverLift } from "@/components/motion";
import { Eyebrow, FactGrid, Section } from "@/components/ui";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.lede,
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {contact.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{contact.lede}</p>
        </div>
        <FactGrid items={contact.facts} />
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-5">
            <Eyebrow>{contact.dialogue.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{contact.dialogue.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
              {contact.dialogue.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 space-y-6 border border-border bg-ivory p-6">
              <Channel label="Physical operations">
                {contact.channels.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-2 block text-muted">DMCC free zone company</span>
              </Channel>
              <Channel label="Direct desks">
                <a className="block hover:text-primary" href={`mailto:${contact.channels.trading}`}>
                  Trading desk: {contact.channels.trading}
                </a>
                <a className="block hover:text-primary" href={`mailto:${contact.channels.compliance}`}>
                  KYC and compliance: {contact.channels.compliance}
                </a>
              </Channel>
              <Channel label="Telephone">
                <a className="hover:text-primary" href={`tel:${contact.channels.phone.replace(/\s/g, "")}`}>
                  {contact.channels.phone}
                </a>
                <span className="mt-1 block text-sm text-muted">{contact.channels.phoneNote}</span>
              </Channel>
              <Channel label="Market session">
                {contact.channels.hours}
                <span className="mt-1 block text-sm text-muted">{contact.channels.hoursNote}</span>
              </Channel>
            </div>
            <p className="mt-6 text-sm leading-6 text-muted">{contact.notice}</p>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.08}>
            <div className="border border-border bg-surface p-5 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <ol className="grid gap-5 md:grid-cols-3">
          {contact.steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.06}>
              <HoverLift className="h-full">
                <li className="h-full border border-border bg-surface p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-4 font-display text-2xl text-charcoal">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              </HoverLift>
            </FadeIn>
          ))}
        </ol>
      </Section>
    </>
  );
}

function Channel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{label}</p>
      <div className="mt-2 text-sm leading-6 text-charcoal">{children}</div>
    </div>
  );
}
