import type { Metadata } from "next";
import { FadeIn, HoverLift } from "@/components/motion";
import { ButtonLink, Eyebrow, PhotoFrame, Section } from "@/components/ui";
import { photos } from "@/content/media";
import { metals } from "@/content/metals";

export const metadata: Metadata = {
  title: "Our Metals",
  description: metals.lede,
};

export default function MetalsPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <Eyebrow>{metals.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {metals.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{metals.lede}</p>
        </div>
        <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
          {metals.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm text-charcoal">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {metals.items.map((item, index) => (
        <Section id={item.id} key={item.id} tone={index % 2 === 0 ? "surface" : "ivory"} className="scroll-mt-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className={index % 2 === 1 ? "lg:order-2" : ""}>
              <PhotoFrame photo={photos[item.image]} className="aspect-[4/3]" />
            </FadeIn>
            <FadeIn delay={0.08} className={index % 2 === 1 ? "lg:order-1" : ""}>
              <Eyebrow>{item.eyebrow}</Eyebrow>
              <h2 className="font-display text-4xl text-charcoal">{item.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                {item.details.map((detail) => (
                  <div key={detail.label} className="border-t border-border pt-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm text-charcoal">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </Section>
      ))}

      <Section tone="surface">
        <FadeIn className="max-w-2xl">
          <Eyebrow>{metals.framework.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{metals.framework.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{metals.framework.lede}</p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {metals.framework.columns.map((column, index) => (
            <FadeIn key={column.title} delay={index * 0.06}>
              <HoverLift className="h-full">
                <article className="h-full border border-border bg-ivory p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-charcoal">{column.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{column.body}</p>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <FadeIn className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-charcoal">{metals.close.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{metals.close.body}</p>
          </div>
          <ButtonLink href="/contact">Contact the desk</ButtonLink>
        </FadeIn>
      </Section>
    </>
  );
}
