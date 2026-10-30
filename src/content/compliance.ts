export const compliance = {
  eyebrow: "Governance",
  title: "Institutional Compliance Framework",
  lede: "ALTRIS TRADING FZCO does not accept illicit finance, unverified metal, or undocumented dealing. As a physical bullion counterparty in the Dubai Multi Commodities Centre, the firm applies onboarding, screening, and record-keeping designed to protect the supply line.",
  aside: {
    title: "Office of the MLRO",
    body: "Anti-money laundering officers review prospective onboarding files through the compliance desk.",
    points: [
      { label: "Reporting", value: "UAE Financial Intelligence Unit, goAML" },
      { label: "Scope", value: "Institutional counterparties only" },
      { label: "Settlement", value: "Recognised vaults and bonded logistics" },
    ],
  },
  sections: [
    {
      id: "regulatory",
      nav: "Regulatory commitment",
      eyebrow: "Statutory base",
      title: "Regulatory commitment",
      paragraphs: [
        "The firm follows UAE federal anti-money laundering law, including rules on terrorist financing and proliferation financing. That includes the cabinet decision covering designated non-financial businesses, Ministry of Economy precious metals directives, and the DMCC rules for risk-based due diligence.",
        "Responsible sourcing follows the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
        "Metal is settled in audited free zone vaults or recognised bonded terminals. The firm does not settle in cash or off the books.",
      ],
      cards: [
        {
          title: "UAE cabinet directives",
          body: "Compliance for a designated non-financial business, including registration and reporting through the UAE Financial Intelligence Unit goAML system.",
        },
        {
          title: "DMCC responsible sourcing",
          body: "Operating alignment with the OECD Due Diligence Guidance for minerals from conflict-affected and high-risk areas.",
        },
      ],
    },
    {
      id: "diligence",
      nav: "Counterparty due diligence",
      eyebrow: "Onboarding",
      title: "Counterparty due diligence",
      paragraphs: [
        "KYC and KYB apply to every corporate counterparty. Onboarding is completed before a master physical bullion agreement is signed, and only for established institutional entities, authorised refineries, and licensed trading desks.",
      ],
      cards: [
        {
          title: "Beneficial ownership",
          body: "Disclosure and documentary verification of ultimate beneficial owners, with a certified ownership chart.",
        },
        {
          title: "Sanctions screening",
          body: "Screening against the UN Security Council consolidated list, the UAE local terrorist list, the US OFAC SDN list, EU restrictive-measure lists, and the UK sanctions list.",
        },
        {
          title: "Source of funds",
          body: "Evidence for the origin of settlement funds, including audited accounts, tax filings, and a commercial bank payment line.",
        },
      ],
    },
    {
      id: "records",
      nav: "Record keeping",
      eyebrow: "Audit trail",
      title: "Record keeping",
      paragraphs: [
        "Commercial documents, customs declarations, assay certificates, and due-diligence files are kept for the statutory retention period, measured from the transaction or the end of the relationship.",
      ],
      cards: [
        {
          title: "Custody records",
          body: "Bar records matched to independent assay certificates from UAE Good Delivery or LBMA Good Delivery refiners.",
        },
        {
          title: "Movement documents",
          body: "Vault release warrants, secure-logistics waybills, and customs papers. Carriers used on these lanes include Brink's, Malca-Amit, and Transguard.",
        },
        {
          title: "Payment matching",
          body: "Each metal release is matched to the corresponding bank payment. Third-party payors are not accepted.",
        },
      ],
    },
    {
      id: "transparency",
      nav: "Transparency",
      eyebrow: "Cooperation",
      title: "Transparency and cooperation",
      paragraphs: [
        "The firm keeps channels open with the UAE Ministry of Economy, the Financial Intelligence Unit, DMCC compliance inspection, and relevant authorities. Suspicious transaction and activity reports are filed without tipping off the counterparty.",
      ],
      cards: [
        {
          title: "Suspicious activity",
          body: "Compliance staff escalate unusual trade patterns, inconsistent behaviour, or unexplained third-party routing to the money laundering reporting officer.",
        },
        {
          title: "External review",
          body: "Periodic review by external auditors of adherence to the OECD due diligence framework and DMCC trading rules.",
        },
      ],
    },
  ],
  close: {
    title: "Compliance clearance before trade",
    body: "Transactions are limited to qualified institutional counterparties after documentary onboarding, beneficial-ownership checks, and a signed master agreement. ALTRIS TRADING FZCO does not make retail sales, hold cash deposits, or offer custody to private individuals.",
  },
} as const;
