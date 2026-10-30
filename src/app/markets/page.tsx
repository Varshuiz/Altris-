import type { Metadata } from "next";
import { CorridorMap } from "@/components/corridor-map";
import { FadeIn, HoverLift } from "@/components/motion";
import { ButtonLink, Eyebrow, FactGrid, Section } from "@/components/ui";
import { markets } from "@/content/markets";

export const metadata: Metadata = {
  title: "Markets",
  description: markets.lede,
};

export default function MarketsPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <Eyebrow>{markets.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {markets.title}
          </h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{markets.lede}</p>
        </div>
        <FactGrid items={markets.facts} />
      </Section>

      <Section tone="surface">
        <FadeIn>
          <Eyebrow>{markets.map.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{markets.map.title}</h2>
        </FadeIn>
        <FadeIn className="mt-8" delay={0.06}>
          <CorridorMap />
          <p className="mt-4 text-sm text-muted">{markets.map.note}</p>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="max-w-2xl">
          <Eyebrow>{markets.nodes.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{markets.nodes.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{markets.nodes.lede}</p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {markets.nodes.items.map((node, index) => (
            <FadeIn key={node.place} delay={index * 0.06}>
              <HoverLift className="h-full">
                <article className="flex h-full flex-col border border-border bg-surface p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-charcoal">{node.place}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted">{node.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-4 text-sm text-charcoal">
                    {node.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              {markets.expansion.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{markets.expansion.body}</p>
          </FadeIn>
          <div className="grid gap-5">
            {markets.expansion.cards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.06}>
                <HoverLift>
                  <article className="border border-border bg-ivory p-6 sm:p-8">
                    <h3 className="font-display text-2xl text-charcoal">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
                    {index === 1 ? (
                      <div className="mt-6">
                        <ButtonLink href="/contact">Begin an institutional discussion</ButtonLink>
                      </div>
                    ) : null}
                  </article>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
