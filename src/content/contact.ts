import { site } from "@/content/site";

export const contact = {
  eyebrow: "Institutional relations",
  title: "Direct Counterparty Engagement",
  lede: "Engage the trading and onboarding desk in Dubai. The firm structures institutional transactions, physical allocation, and vault-to-vault lines with qualified market participants.",
  facts: [
    { label: "Jurisdiction", value: "DMCC · Dubai, UAE" },
    { label: "Operating schedule", value: "Monday – Friday, GST" },
    { label: "Counterparty scope", value: "Wholesale institutional" },
    { label: "Settlement", value: "Vault-to-vault" },
  ],
  dialogue: {
    eyebrow: "Direct line",
    title: "Begin a conversation",
    paragraphs: [
      "ALTRIS TRADING FZCO works with sovereign mints, primary bullion refiners, commercial treasury desks, and logistics custodians.",
      "The desk welcomes discussion of dore intake, allocated physical exchange, and supply mandates across gold, silver, and platinum group metals.",
    ],
  },
  notice:
    "Commercial dealings require counterparty vetting first. Before metal moves or funds are sent, a counterparty provides corporate registry filings, beneficial-ownership disclosure, and sanctions screening records under UAE anti-money laundering rules.",
  form: {
    code: "Desk enquiry",
    title: "Institutional counterparty enquiry",
    lede: "Complete the fields below to open a conversation with the managing partners.",
    confidentiality:
      "Information sent through this form is treated as confidential and reviewed by the Dubai desk, in line with UAE financial-intelligence reporting practice and OECD responsible-sourcing guidance.",
    successTitle: "Enquiry received",
    successBody:
      "The Dubai desk has your institutional enquiry. A member of the trading team will reply by email.",
  },
  steps: [
    {
      title: "Initial review",
      body: "The desk principal in Uptown Tower reviews jurisdiction, source-of-funds rationale, and the metal parameters.",
    },
    {
      title: "AML and KYC pack",
      body: "Institutional onboarding documents, beneficial-ownership records, and DMCC compliance covenants are exchanged.",
    },
    {
      title: "Physical trading line",
      body: "A master bullion agreement is signed and a direct dealing line can be opened for Dubai and Swiss vault accounts.",
    },
  ],
  channels: {
    address: site.address,
    trading: site.emails.trading,
    compliance: site.emails.compliance,
    phone: site.phone,
    phoneNote: site.phoneNote,
    hours: site.hours,
    hoursNote: site.hoursNote,
  },
} as const;
