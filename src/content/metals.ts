export const metals = {
  eyebrow: "Our metals",
  title: "Physical Bullion & Industrial Precious Metals",
  lede: "Institutional delivery, refinery provenance, and vault-to-vault settlement. ALTRIS arranges physical fulfilment across Dubai (DMCC), Hong Kong, and international clearing corridors for treasuries, commercial manufacturers, and accredited wholesale counterparties.",
  facts: [
    {
      label: "Primary corridors",
      value: "Dubai, Hong Kong, and Zurich",
    },
    {
      label: "Settlement",
      value: "Bilateral vault-to-vault clearing",
    },
  ],
  items: [
    {
      id: "gold",
      eyebrow: "Primary liquidity",
      title: "Gold",
      paragraphs: [
        "Institutional allocations of investment-grade physical gold in kilobars and large Good Delivery bars. Sourced through international refineries, bullion banking channels, and primary supply routes.",
        "Allocations are intended for treasury reserves, commercial conduits, and fine jewellery manufacturers that require a documented chain of custody.",
      ],
      details: [
        { label: "Form", value: "Kilobars and large bars" },
        { label: "Use", value: "Treasury and manufacture" },
      ],
      image: "goldVault" as const,
    },
    {
      id: "silver",
      eyebrow: "Industrial and treasury",
      title: "Silver",
      paragraphs: [
        "Wholesale physical silver for institutional holdings and industrial processing, including investment bars and chemical granulate suited to production.",
        "Supplied to manufacturers in photovoltaic, electronics, and chemical applications, and to vault holdings.",
      ],
      details: [
        { label: "Form", value: "Bars and granulate" },
        { label: "Use", value: "Industry and vault holdings" },
      ],
      image: "silverBars" as const,
    },
    {
      id: "pgms",
      eyebrow: "Specialist supply",
      title: "Platinum group metals",
      paragraphs: [
        "Primary supply of platinum and palladium, delivered as market ingots, plates, or industrial sponge.",
        "Intended for automotive emissions catalysts, petrochemical and pharmaceutical synthesis, and European watchmaking houses.",
      ],
      details: [
        { label: "Metals", value: "Platinum and palladium" },
        { label: "Form", value: "Ingots, plates, and sponge" },
      ],
      image: "pgm" as const,
    },
  ],
  framework: {
    eyebrow: "Institutional supply",
    title: "Sourcing and supply framework",
    lede: "A counterparty structure meant to keep settlement clear, trace metal, and hold it in recognised custody.",
    columns: [
      {
        title: "Accredited sourcing",
        body: "Each parcel is supported by refinery provenance, bullion-banking liquidity, and chain-of-custody documents. Procurement is bilateral and follows conflict-free sourcing expectations.",
      },
      {
        title: "Logistics and delivery",
        body: "Clearing is by direct vault transfer or insured logistics in Dubai (DMCC), Hong Kong, and Zurich. Handover is documented, including through bonded carriers where the corridor requires it.",
      },
    ],
  },
  close: {
    title: "Require a specific allocation or trade parameter?",
    body: "Speak with the Dubai Multi Commodities Centre dealing desk about contract terms.",
  },
} as const;
