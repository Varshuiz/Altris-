"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { site } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Mark />
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  current ? "font-semibold text-primary" : "text-muted hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-primary px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Enquire
          </Link>
          <Link
            href="/contact"
            aria-label="Contact the desk"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-primary text-white sm:inline-flex"
          >
            <PersonIcon />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-ivory px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`block py-3 text-sm uppercase tracking-[0.14em] ${
                      current ? "text-primary" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.2c1.2-2.8 3.5-4.2 6.5-4.2s5.3 1.4 6.5 4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
      )}
    </svg>
  );
}
