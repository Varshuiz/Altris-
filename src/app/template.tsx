"use client";

import { PageTransition } from "@/components/motion";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
