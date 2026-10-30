export const site = {
  name: "ALTRIS",
  legalName: "ALTRIS TRADING FZCO",
  mark: "Trading FZCO · Dubai",
  description:
    "Dubai-based physical trading of gold, silver, and platinum group metals for corporate and professional counterparties.",
  established: "Established in Dubai in May 2026.",
  summary:
    "Institutional physical precious metals trading house incorporated in Dubai, United Arab Emirates. Established May 2026. Primary supply, vault-to-vault settlement, and liquidity for gold, silver, and platinum group metals.",
  address: [
    "Dubai Multi Commodities Centre (DMCC)",
    "Uptown Tower, Level 24",
    "Dubai, United Arab Emirates",
  ],
  emails: {
    desk: "desk@altris-trading.ae",
    settlements: "settlements@altris-trading.ae",
    trading: "trade@altristrading.com",
    compliance: "compliance@altristrading.com",
  },
  phone: "+971 4 429 8800",
  phoneNote: "Direct dealing extensions are activated after onboarding.",
  hours: "Monday – Friday, 09:00 – 18:00 GST",
  hoursNote: "Closed on UAE federal bank holidays.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-metals", label: "Our Metals" },
    { href: "/markets", label: "Markets" },
    { href: "/compliance", label: "Compliance" },
    { href: "/contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About the firm" },
    { href: "/our-metals", label: "Physical metals" },
    { href: "/markets", label: "Markets and settlement" },
    { href: "/compliance", label: "Due diligence and compliance" },
    { href: "/contact", label: "Institutional enquiries" },
  ],
  notice:
    "ALTRIS TRADING FZCO conducts wholesale physical trading of precious metals with qualified institutional counterparties, licensed refiners, and accredited bullion banks. The firm does not service retail clients, offer depository wallets, or provide investment advice. Activity follows UAE anti-money laundering rules and the OECD Due Diligence Guidance for Responsible Supply Chains.",
} as const;

export type NavItem = (typeof site.nav)[number];
