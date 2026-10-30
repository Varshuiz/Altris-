import Link from "next/link";
import { Mark } from "@/components/mark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-stone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Mark compact />
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">{site.summary}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              DMCC registered free zone entity · Dubai, UAE
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {site.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Operations and desk
            </p>
            <address className="mt-4 text-sm leading-6 text-muted not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-muted">
              <a className="hover:text-primary" href={`mailto:${site.emails.desk}`}>
                {site.emails.desk}
              </a>
            </p>
            <p className="text-sm text-muted">
              <a className="hover:text-primary" href={`mailto:${site.emails.settlements}`}>
                {site.emails.settlements}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved. Strictly B2B institutional bullion counterparty.</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">
            Responsible sourcing · UAE wholesale bullion
          </p>
        </div>
        <p className="mt-6 text-xs leading-5 text-muted">{site.notice}</p>
      </div>
    </footer>
  );
}
