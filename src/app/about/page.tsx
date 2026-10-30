import type { Metadata } from "next";
import { FadeIn, HoverLift } from "@/components/motion";
import { ButtonLink, Eyebrow, FactGrid, PhotoFrame, Section } from "@/components/ui";
import { about } from "@/content/about";
import { photos } from "@/content/media";

export const metadata: Metadata = {
  title: "About",
  description: about.lede,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {about.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{about.lede}</p>
          <ul className="mt-8 flex flex-col gap-2 text-sm text-charcoal sm:flex-row sm:flex-wrap sm:gap-x-6">
            {about.assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <FadeIn className="max-w-3xl">
          <Eyebrow>{about.geography.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            {about.geography.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">{about.geography.lede}</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
            {about.geography.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
        <FactGrid items={about.facts} />
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <PhotoFrame
              photo={photos.office}
              className="aspect-[4/5]"
              caption={{ label: "Principal office", title: "Physical desk" }}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Eyebrow>{about.founder.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              {about.founder.title}
            </h2>
            <p className="mt-6 font-display text-6xl leading-none text-primary">{about.founder.figure}</p>
            <p className="mt-3 font-display text-xl text-charcoal">{about.founder.figureLabel}</p>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{about.founder.body}</p>
            <ul className="mt-8 space-y-5">
              {about.founder.points.map((point) => (
                <li key={point.title}>
                  <h3 className="font-display text-xl text-charcoal">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section tone="surface">
        <FadeIn className="max-w-2xl">
          <Eyebrow>{about.model.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{about.model.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{about.model.lede}</p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {about.model.pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.06}>
              <HoverLift className="h-full">
                <article className="h-full border border-border bg-ivory p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-charcoal">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{pillar.body}</p>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Eyebrow>{about.commitment.eyebrow}</Eyebrow>
          <blockquote className="font-display text-3xl leading-snug text-charcoal sm:text-4xl">
            “{about.commitment.quote}”
          </blockquote>
          <p className="mt-6 text-sm leading-7 text-muted sm:text-base">{about.commitment.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Initiate counterparty inquiry</ButtonLink>
            <ButtonLink href="/compliance" variant="secondary">
              Review the compliance framework
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
