"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.div>
  );
}
