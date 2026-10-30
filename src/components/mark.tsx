import Link from "next/link";
import { site } from "@/content/site";

export function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={site.legalName}>
      <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden>
        <rect width="32" height="32" rx="2" fill="#9A7B4F" />
        <text
          x="16"
          y="22.5"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="18"
          fontFamily="Georgia, Times New Roman, serif"
        >
          A
        </text>
      </svg>
      <span className="flex flex-col">
        <span className="font-display text-[1.35rem] leading-none tracking-tight text-charcoal">
          {site.name}
        </span>
        {compact ? null : (
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {site.mark}
          </span>
        )}
      </span>
    </Link>
  );
}
