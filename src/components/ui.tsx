import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo } from "@/content/media";

export function Section({
  children,
  tone = "ivory",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "ivory" | "surface" | "stone";
  className?: string;
  id?: string;
}) {
  const background = {
    ivory: "bg-ivory",
    surface: "bg-surface",
    stone: "bg-stone",
  }[tone];

  return (
    <section id={id} className={`${background} py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </p>
  );
}

const buttonClass = {
  primary:
    "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "border border-charcoal/15 bg-transparent text-charcoal hover:border-primary hover:text-primary",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonClass;
}) {
  const className = `inline-flex items-center justify-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${buttonClass[variant]}`;

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PhotoFrame({
  photo,
  priority = false,
  className = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  caption,
}: {
  photo: Photo;
  priority?: boolean;
  className?: string;
  sizes?: string;
  caption?: { label: string; title: string };
}) {
  return (
    <figure className="overflow-hidden border border-border bg-surface">
      <div className={`relative ${className}`}>
        <Image
          src={photo.image}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
        {caption ? (
          <figcaption className="absolute inset-x-4 bottom-4 bg-surface/95 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              {caption.label}
            </p>
            <p className="mt-1 font-display text-lg text-charcoal">{caption.title}</p>
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}

export function FactGrid({
  items,
}: {
  items: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-6 text-charcoal">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
