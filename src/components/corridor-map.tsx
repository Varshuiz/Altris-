export function CorridorMap() {
  return (
    <div className="border border-border bg-surface p-4 sm:p-8">
      <svg
        viewBox="0 0 900 460"
        className="h-auto w-full"
        role="img"
        aria-label="Corridor linking Dubai, India, and Hong Kong"
      >
        <rect width="900" height="460" fill="#ffffff" />
        <ellipse cx="168" cy="292" rx="108" ry="58" fill="#EFEBE4" />
        <ellipse cx="250" cy="250" rx="46" ry="28" fill="#E8E2D8" />
        <ellipse cx="430" cy="236" rx="62" ry="108" fill="#EFEBE4" />
        <ellipse cx="520" cy="188" rx="70" ry="28" fill="#E8E2D8" />
        <ellipse cx="690" cy="176" rx="92" ry="40" fill="#EFEBE4" />
        <ellipse cx="760" cy="230" rx="36" ry="22" fill="#E8E2D8" />
        <path
          d="M190 286 C 280 310, 340 250, 430 248 S 590 150, 690 176"
          fill="none"
          stroke="#9A7B4F"
          strokeWidth="1.6"
          strokeDasharray="5 7"
        />
        <Hub cx={190} cy={286} label="Dubai" />
        <Hub cx={430} cy={248} label="India" />
        <Hub cx={690} cy={176} label="Hong Kong" />
      </svg>
      <div className="mt-4 flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          Active trading hub
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-8 border-t border-dashed border-primary" aria-hidden />
          Vault-to-vault corridor
        </span>
      </div>
    </div>
  );
}

function Hub({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="11" fill="#ffffff" stroke="#9A7B4F" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="4" fill="#9A7B4F" />
      <text
        x={cx}
        y={cy + 32}
        textAnchor="middle"
        fill="#1C1C1C"
        fontSize="14"
        fontFamily="inherit"
      >
        {label}
      </text>
    </g>
  );
}
