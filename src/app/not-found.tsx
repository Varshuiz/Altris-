import { ButtonLink, Eyebrow, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="py-28">
      <Eyebrow>ALTRIS TRADING FZCO</Eyebrow>
      <h1 className="font-display text-4xl text-charcoal sm:text-5xl">This page is not on the desk.</h1>
      <p className="mt-4 max-w-lg text-base leading-7 text-muted">
        The address does not match a page on this site. Return home or write to the trading desk.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Section>
  );
}
