"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const styles = {
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
  variant?: keyof typeof styles;
}) {
  const className = `inline-flex items-center justify-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${styles[variant]}`;

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="inline-flex">
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
