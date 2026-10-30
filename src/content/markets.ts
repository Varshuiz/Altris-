export const markets = {
  eyebrow: "Global footprint",
  title: "Key Trading Hubs & Corridors",
  lede: "ALTRIS TRADING FZCO arranges bilateral physical liquidity between consumption centres and clearing points. From Dubai, corridors link the Middle East, East Asia, and South Asia through vault-to-vault settlement.",
  facts: [
    { label: "Home location", value: "Dubai, UAE" },
    { label: "East Asia", value: "Hong Kong" },
    { label: "South Asia", value: "India" },
    { label: "Settlement", value: "Vault-to-vault" },
  ],
  map: {
    eyebrow: "Physical corridors",
    title: "Cross-border bullion flow",
    note: "Movement is arranged with insured carriers and recognised vaults.",
  },
  nodes: {
    eyebrow: "Core strategic presence",
    title: "Institutional nodes",
    lede: "Physical clearing for certified Good Delivery bullion.",
    items: [
      {
        place: "Dubai, United Arab Emirates",
        body: "Established in Dubai in May 2026. The desk uses the emirate's vaulting infrastructure, the DMCC free zone, and a position between eastern demand and western bullion liquidity.",
        points: ["DMCC free zone", "Vault-to-vault clearing", "Home dealing desk"],
      },
      {
        place: "Hong Kong",
        body: "An Asian node for institutional liquidity, physical interchange with Far East markets, and settlement into the region.",
        points: ["Far East interchange", "Institutional liquidity", "Physical settlement"],
      },
      {
        place: "India",
        body: "A major physical consumption market. The founder's 30+ years include commercial relationships with jewellery houses, bullion merchants, and industrial users.",
        points: ["Jewellery and industrial demand", "Founder relationships", "Physical offtake"],
      },
    ],
  },
  expansion: {
    title: "We continue to explore opportunities in additional international markets.",
    body: "ALTRIS is reviewing institutional conversations in Western Europe and Southeast Asia. Nothing is allocated until counterparty due diligence and responsible-sourcing review are complete.",
    cards: [
      {
        title: "Disciplined risk architecture",
        body: "A new corridor needs a known refinery source, segregated allocated custody, and AML review before metal moves.",
      },
      {
        title: "Counterparty criteria",
        body: "The firm deals with commercial refiners, central banks, state mints, and institutional dealers that can document source of funds.",
      },
    ],
  },
} as const;
