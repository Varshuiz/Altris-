import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, HoverLift } from "@/components/motion";
import { Eyebrow, Section } from "@/components/ui";
import { compliance } from "@/content/compliance";

export const metadata: Metadata = {
  title: "Compliance",
  description: compliance.lede,
};

export default function CompliancePage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
          <div>
            <Eyebrow>{compliance.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {compliance.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">{compliance.lede}</p>
          </div>
          <aside className="border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-display text-2xl text-charcoal">{compliance.aside.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{compliance.aside.body}</p>
            <dl className="mt-6 space-y-4">
              {compliance.aside.points.map((point) => (
                <div key={point.label} className="border-t border-border pt-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {point.label}
                  </dt>
                  <dd className="mt-1 text-sm text-charcoal">{point.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="surface" className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Compliance sections">
            <ol className="flex gap-4 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
              {compliance.sections.map((section, index) => (
                <li key={section.id} className="shrink-0">
                  <Link
                    href={`#${section.id}`}
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
                  >
                    <span className="mr-2 text-primary">{String(index + 1).padStart(2, "0")}</span>
                    {section.nav}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="space-y-16">
            {compliance.sections.map((section) => (
              <FadeIn key={section.id}>
                <article id={section.id} className="scroll-mt-28">
                  <Eyebrow>{section.eyebrow}</Eyebrow>
                  <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {section.cards.map((card) => (
                      <HoverLift key={card.title} className="h-full">
                        <div className="h-full border border-border bg-ivory p-6">
                          <h3 className="font-display text-xl text-charcoal">{card.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-muted">{card.body}</p>
                        </div>
                      </HoverLift>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{compliance.close.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{compliance.close.body}</p>
        </FadeIn>
      </Section>
    </>
  );
}
