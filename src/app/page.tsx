import type { Metadata } from "next";
import { FadeIn, HoverLift } from "@/components/motion";
import { ButtonLink, Eyebrow, PhotoFrame, Section } from "@/components/ui";
import { home } from "@/content/home";
import { photos } from "@/content/media";

export const metadata: Metadata = {
  title: { absolute: "ALTRIS TRADING FZCO" },
  description: home.lede,
};

export default function HomePage() {
  return (
    <>
      <Section className="pb-10 pt-14 sm:pt-20 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>{home.eyebrow}</Eyebrow>
            <h1 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {home.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">{home.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/about">Our business</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-col gap-2 text-sm text-charcoal sm:flex-row sm:flex-wrap sm:gap-x-6">
              {home.assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PhotoFrame
            photo={photos.goldBars}
            priority
            className="aspect-[5/4]"
            caption={{ label: home.heroCaption.label, title: home.heroCaption.title }}
          />
        </div>
      </Section>

      <div className="border-y border-border bg-stone">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {home.flow.label}
          </p>
          <ol className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-2xl text-charcoal">
            {home.flow.hubs.map((hub, index) => (
              <li key={hub} className="flex items-center gap-4">
                {index > 0 ? <span className="text-primary" aria-hidden>—</span> : null}
                {hub}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Eyebrow>{home.about.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              {home.about.title}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base">
              {home.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {home.about.points.map((point) => (
                <div key={point.title} className="border-t border-border pt-4">
                  <h3 className="font-display text-xl text-charcoal">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{point.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <PhotoFrame
              photo={photos.dubaiSkyline}
              className="aspect-[16/11]"
              caption={{ label: home.about.place.label, title: home.about.place.title }}
            />
            <p className="mt-4 text-sm leading-6 text-muted">{home.about.place.detail}</p>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <Eyebrow>{home.portfolio.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{home.portfolio.title}</h2>
            <p className="max-w-md text-sm leading-6 text-muted">{home.portfolio.lede}</p>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {home.portfolio.metals.map((metal, index) => (
            <FadeIn key={metal.title} delay={index * 0.06}>
              <HoverLift className="h-full">
                <article className="flex h-full flex-col border border-border bg-surface p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {metal.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-charcoal">{metal.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted">{metal.body}</p>
                  <p className="mt-6 text-sm text-charcoal">{metal.form}</p>
                  <div className="mt-6">
                    <ButtonLink href={metal.href} variant="secondary">
                      View metal
                    </ButtonLink>
                  </div>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <Eyebrow>{home.heritage.eyebrow}</Eyebrow>
            <p className="font-display text-7xl leading-none text-primary sm:text-8xl">
              {home.heritage.figure}
            </p>
            <p className="mt-4 max-w-xs font-display text-2xl leading-snug text-charcoal">
              {home.heritage.figureLabel}
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.08}>
            <p className="text-base leading-7 text-muted">{home.heritage.body}</p>
            <ul className="mt-8 space-y-5">
              {home.heritage.points.map((point) => (
                <li key={point.title} className="border-t border-border pt-5">
                  <h3 className="font-display text-xl text-charcoal">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn className="max-w-2xl">
          <Eyebrow>{home.method.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-charcoal sm:text-4xl">{home.method.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{home.method.lede}</p>
        </FadeIn>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {home.method.steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <HoverLift className="h-full">
                <li className="h-full border border-border bg-surface p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl text-charcoal">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              </HoverLift>
            </FadeIn>
          ))}
        </ol>
      </Section>

      <Section tone="stone" className="py-14 lg:py-16">
        <FadeIn className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-3xl text-charcoal">{home.compliance.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
              {home.compliance.body}
            </p>
          </div>
          <ButtonLink href="/compliance" variant="secondary">
            Read the framework
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section tone="surface">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Eyebrow>{home.close.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">{home.close.title}</h2>
          <p className="mt-5 text-base leading-7 text-muted">{home.close.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Initiate onboarding</ButtonLink>
            <ButtonLink href="mailto:desk@altris-trading.ae" variant="secondary">
              Desk enquiries
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted">{home.close.note}</p>
        </FadeIn>
      </Section>
    </>
  );
}
