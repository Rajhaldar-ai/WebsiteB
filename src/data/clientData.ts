export interface CredentialMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface TimelineStage {
  index: string;
  phase: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  detailedDescription: string;
  clientTypes: string[];
  relatedExpertise: string[];
  ctaLabel: string;
  ctaServiceValue: string;
}

export interface ServiceBranch {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  overview: string;
  services: ServiceItem[];
}

export interface AuditFinanceItem {
  number: string;
  name: string;
  description: string;
  clientType: string;
  scopeNote: string;
}

export interface IndustryItem {
  number: string;
  name: string;
  category: string;
  description: string;
  focusAreas: string;
}

export interface ExpertiseDomain {
  code: string;
  category: string;
  headline: string;
  description: string;
  capabilities: string[];
}

export interface CredentialRecord {
  id: string;
  title: string;
  institutionOrScope: string;
  status: "Active Qualification" | "Current Institutional Role" | "Historical / Former Designation" | "Firm Capability";
  category: "Academic & Professional" | "Institutional Leadership" | "Technical Audit";
}

export interface RecognitionRecord {
  id: string;
  title: string;
  issuingBody: string;
  context: string;
  yearNote: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface InsightPlaceholderItem {
  id: string;
  referenceCode: string;
  category: "GST" | "Litigation" | "Compliance" | "Corporate Finance" | "Training";
  titlePlaceholder: string;
  datePlaceholder: string;
  abstract: string;
  readingFormat: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  status: "Verified Official FAQ" | "Suggested FAQ";
  category: string;
}

export const CLIENT_DATABASE = {
  identity: {
    firmName: "Rajinder Arora & Associates",
    descriptor: "Chartered Accountants",
    educationalInitiative: "GST Research Foundation",
    logoPlaceholder: "[LOGO]",
    heroLabel: "CHARTERED ACCOUNTANTS · TAX & ADVISORY",
    heroHeadline: "Structured Tax Litigation, Statutory Assurance & Corporate Advisory.",
    heroParagraph:
      "With over two decades of professional practice in New Delhi, Rajinder Arora & Associates combines Chartered Accountancy and legal qualification (FCA · LLB) to represent enterprises across GST litigation, complex Input Tax Credit reconciliation, statutory and IT auditing, corporate law, and professional GST education.",
  },

  images: {
    heroArchitecture: "/src/assets/images/hero_corporate_architecture_1790870129468.jpg",
    gstFoundationSeminar: "/src/assets/images/gst_foundation_seminar_1790870146833.jpg",
    legalTaxLibrary: "/src/assets/images/legal_tax_library_1790870164343.jpg",
  },

  ctas: {
    primary: "Book a Corporate Consultation",
    exploreServices: "Explore Services",
    submitNotice: "Submit Case Files / Notice for Evaluation",
    exploreTraining: "Explore GST Training",
  },

  contact: {
    primaryOffice: {
      label: "Primary Practice Chambers — Shastri Nagar",
      addressLine1: "Office No. E2/254, 2nd Floor",
      addressLine2: "Shastri Nagar, Delhi - 110052",
      fullAddress: "Office No. E2/254, 2nd Floor, Shastri Nagar, Delhi - 110052",
    },
    secondaryOffice: {
      label: "Secondary Corporate Location — Moti Nagar",
      addressLine1: "4th Floor, DLF Tower",
      addressLine2: "Moti Nagar, Delhi - 110015",
      fullAddress: "4th Floor, DLF Tower, Moti Nagar, Delhi - 110015",
    },
    hours: {
      days: "Monday–Saturday",
      time: "10:00 AM–7:00 PM",
      combined: "Monday–Saturday · 10:00 AM–7:00 PM",
    },
    phonePlaceholder: "[PHONE NUMBER]",
    emailPlaceholder: "[EMAIL ADDRESS]",
    registrationLinkPlaceholder: "[REGISTRATION LINK]",
    courseDatePlaceholder: "[COURSE DATE]",
  },

  credentialsBar: [
    {
      id: "practice-years",
      value: "20+ YEARS",
      label: "Professional Practice",
      sublabel: "Chartered Accountancy, Tax & Legal Advisory",
    },
    {
      id: "dual-qualification",
      value: "FCA + LLB",
      label: "Dual Professional Qualification",
      sublabel: "Fellow Chartered Accountant & Bachelor of Laws",
    },
    {
      id: "contributions",
      value: "59+",
      label: "Professional Contributions",
      sublabel: "Seminars, Faculty Sessions & Tax Discourse",
    },
    {
      id: "locations",
      value: "2",
      label: "Physical Locations",
      sublabel: "Shastri Nagar & DLF Tower Moti Nagar, Delhi",
    },
  ] as CredentialMetric[],

  about: {
    sectionNumber: "01. About the Practice",
    heading: "Two Decades of Disciplined Financial, Statutory & Tax Jurisprudence.",
    leadParagraph:
      "Rajinder Arora & Associates is an established Chartered Accountancy practice headquartered in Delhi, built on over 20 years of continuous engagement across indirect taxation, tax litigation, statutory assurance, and corporate law advisory.",
    secondaryParagraph:
      "Led by CA Rajender Arora (FCA · LLB), the practice bridges the technical rigor of financial accounting with structured legal interpretation. This dual perspective enables comprehensive handling of departmental Show Cause Notices, appellate representation, complex Input Tax Credit (ITC) reconciliations, and multi-entity statutory audits.",
    expandedParagraphs: [
      "Beyond corporate representation and assurance, the practice is closely associated with the GST Research Foundation—an educational initiative dedicated to advancing practical GST literacy, GST Portal proficiency, Tally integration, and Goods and Services Tax Appellate Tribunal (GSTAT) preparedness among accounting and legal professionals.",
      "Every mandate—whether defending transit detention matters, conducting IT / CISA-aligned system audits, or structuring project financing—is executed through a documented four-stage jurisprudential workflow designed for clarity and regulatory compliance.",
    ],
  },

  timeline: [
    {
      index: "01",
      phase: "Practice Foundation",
      title: "Over 20 Years of Professional Practice",
      description:
        "Established Chartered Accountancy practice serving corporate, retail, trading, and institutional clients across Delhi with rigorous accounting and statutory compliance.",
    },
    {
      index: "02",
      phase: "Tax & Legal Expertise",
      title: "Indirect Tax, Corporate Law & Litigation",
      description:
        "Integration of Fellow Chartered Accountancy (FCA) and legal qualification (LLB) to represent enterprises in indirect tax disputes, adjudication, and corporate law governance.",
    },
    {
      index: "03",
      phase: "Professional Development",
      title: "GST-Focused Professional Education",
      description:
        "Over 59+ professional contributions, faculty sessions, and bar association leadership advancing indirect tax interpretation during and after the rollout of GST.",
    },
    {
      index: "04",
      phase: "GST Research Foundation",
      title: "Practical GST Literacy & Training",
      description:
        "Institutionalized practical training covering live GST Portal workflows, Tally integration, real-world case studies, and GSTAT appellate readiness.",
    },
  ] as TimelineStage[],

  serviceBranches: [
    {
      id: "tax-litigation",
      number: "01",
      title: "Tax Consultancy & Litigation",
      shortTitle: "Tax & Litigation",
      overview:
        "End-to-end indirect tax advisory, Show Cause Notice (SCN) defense, complex Input Tax Credit reconciliation, and appellate representation.",
      services: [
        {
          id: "gst-scn-appeals",
          number: "01",
          title: "GST SCN Management & Appeals",
          summary:
            "Structured legal drafting, statutory replies, and appellate representation for GST Show Cause Notices and adjudication orders.",
          detailedDescription:
            "Comprehensive evaluation of departmental notices, demand orders, and jurisdictional challenges. Our practice prepares evidence-backed replies grounded in statutory provisions and judicial precedents, representing clients before adjudicating authorities and appellate forums including GSTAT-related proceedings.",
          clientTypes: ["MNCs", "Mid-sized Corporates", "Trading Enterprises", "E-Commerce Operators"],
          relatedExpertise: ["INDIRECT TAX · GST Litigation", "GSTAT · Tribunal Representation"],
          ctaLabel: "Submit Case Files / Notice for Evaluation",
          ctaServiceValue: "GST SCN Management & Appeals",
        },
        {
          id: "itc-optimization-refunds",
          number: "02",
          title: "ITC Optimization & Refund Filing",
          summary:
            "Multi-ledger Input Tax Credit reconciliation, vendor mismatch resolution, and statutory GST refund processing.",
          detailedDescription:
            "Granular verification of GSTR-2B vs. purchase registers, reversal computation under statutory rules, blocked credit review, and end-to-end documentation for export, inverted duty structure, and excess balance refund claims.",
          clientTypes: ["Exporters & Traders", "Retail Chains", "Logistics Providers", "Manufacturing & Mid-sized Corporates"],
          relatedExpertise: ["ITC · Complex Credit Reconciliation", "COMPLIANCE · Accounting Integration"],
          ctaLabel: "Book a Corporate Consultation",
          ctaServiceValue: "ITC Optimization & Refund Filing",
        },
        {
          id: "search-seizure-detention",
          number: "03",
          title: "Search, Seizure & Transit Detention Defense",
          summary:
            "Procedural legal representation during departmental inspections, summons, seizure actions, and e-Way Bill transit detentions.",
          detailedDescription:
            "Immediate statutory guidance and representation when goods or conveyances are detained in transit or when premises undergo inspection/search proceedings. Focuses on procedural compliance, panchnama review, provisional release documentation, and subsequent adjudication defense.",
          clientTypes: ["Logistics & Fleet Operators", "Trading Houses", "E-Commerce Supply Chains", "Retail Distributors"],
          relatedExpertise: ["INDIRECT TAX · Statutory Defense", "GSTAT · Appellate Readiness"],
          ctaLabel: "Submit Case Files / Notice for Evaluation",
          ctaServiceValue: "Search, Seizure & Transit Detention Defense",
        },
        {
          id: "corporate-tax-advisory",
          number: "04",
          title: "Indirect Tax & Corporate Structuring Advisory",
          summary:
            "Preventive tax architecture, contract tax-clause review, and multi-state supply chain compliance.",
          detailedDescription:
            "Ongoing retainer and transaction-specific opinions addressing place of supply, valuation rules, related-party transactions, and sector-specific exemptions so businesses operate with documented regulatory certainty.",
          clientTypes: ["MNCs", "Financial Services", "Startups", "NGOs / Non-Profits"],
          relatedExpertise: ["INDIRECT TAX · Advisory", "COMPLIANCE · GST Systems"],
          ctaLabel: "Book a Corporate Consultation",
          ctaServiceValue: "Indirect Tax & Corporate Structuring Advisory",
        },
      ],
    },
    {
      id: "auditing-corporate-finance",
      number: "02",
      title: "Auditing & Corporate Finance",
      shortTitle: "Auditing & Finance",
      overview:
        "Statutory assurance, internal risk evaluation, retail and IT/CISA auditing, corporate law governance, and project financing.",
      services: [
        {
          id: "statutory-risk-audits",
          number: "01",
          title: "Statutory Audits & Risk Assurance",
          summary:
            "Independent statutory examination of financial statements and internal operational control frameworks.",
          detailedDescription:
            "Execution of statutory audits under applicable corporate and tax legislation alongside internal risk assurance reviews designed to identify reporting gaps, revenue leakages, and statutory non-compliance.",
          clientTypes: ["Mid-sized Corporates", "MNC Subsidiaries", "Banking & Financial Services", "NGOs / Non-Profits"],
          relatedExpertise: ["COMPLIANCE · Statutory Governance", "ITC · Audit Trail Verification"],
          ctaLabel: "Book a Corporate Consultation",
          ctaServiceValue: "Statutory Audits & Risk Assurance",
        },
        {
          id: "retail-it-cisa-auditing",
          number: "02",
          title: "Retail Audits & IT / CISA Auditing",
          summary:
            "Specialized multi-store retail verification and information systems auditing backed by CISA-related firm capability.",
          detailedDescription:
            "Structured inventory and point-of-sale audits for retail networks combined with Information Systems (IT / CISA-aligned) audits evaluating ERP tax mapping, automated ledger integrity, and cybersecurity control environments.",
          clientTypes: ["Retail Networks", "E-Commerce Platforms", "Banking & Financial Services", "Logistics Enterprises"],
          relatedExpertise: ["COMPLIANCE · ERP & Accounting Integration", "IT / CISA Firm Capability"],
          ctaLabel: "Book a Corporate Consultation",
          ctaServiceValue: "Retail Audits & IT / CISA Auditing",
        },
        {
          id: "corporate-law-project-finance",
          number: "03",
          title: "Corporate Law Advisory & Project Financing",
          summary:
            "Company law compliance, board governance, regulatory filings, and structured project financing documentation.",
          detailedDescription:
            "Advisory on corporate restructuring, statutory filings, entity formation, and preparation of institutional project reports and credit proposals for capital expansion and working capital facilities.",
          clientTypes: ["Mid-sized Corporates", "Startups", "Trading & Industrial Enterprises"],
          relatedExpertise: ["Corporate Law Advisory", "Project Financing Structuring"],
          ctaLabel: "Book a Corporate Consultation",
          ctaServiceValue: "Corporate Law Advisory & Project Financing",
        },
      ],
    },
    {
      id: "gst-education-training",
      number: "03",
      title: "GST Education & Training",
      shortTitle: "GST Education",
      overview:
        "Practical professional training delivered through GST Research Foundation covering GST Portal workflows, Tally, case studies, and GSTAT.",
      services: [
        {
          id: "gst-portal-tally-training",
          number: "01",
          title: "Practical GST Portal & Tally Integration",
          summary:
            "Hands-on training in live GST Portal compliance, return filing architecture, and Tally accounting integration.",
          detailedDescription:
            "Designed for practicing professionals, corporate finance teams, and commerce graduates seeking applied mastery over registration, return reconciliation, ledger setup in Tally, and statutory compliance workflows.",
          clientTypes: ["Tax Professionals", "Corporate Accounting Teams", "CA Aspirants & Practitioners"],
          relatedExpertise: ["TAX EDUCATION · Professional GST Literacy", "COMPLIANCE · Tally & Portal Systems"],
          ctaLabel: "Explore GST Training",
          ctaServiceValue: "GST Research Foundation Training Inquiry",
        },
        {
          id: "case-studies-gstat-learning",
          number: "02",
          title: "GST Case Studies & GSTAT-Related Learning",
          summary:
            "Applied study of departmental notices, assessment orders, judicial rulings, and GSTAT appellate procedures.",
          detailedDescription:
            "Focused modules dissecting real-world GST disputes, drafting replies to Show Cause Notices, understanding burden of proof, and preparing structured documentation for appellate forums and GSTAT.",
          clientTypes: ["Tax Professionals", "Legal Practitioners", "In-House Tax Managers"],
          relatedExpertise: ["GSTAT · Tribunal Representation", "TAX EDUCATION · Case Study Methodology"],
          ctaLabel: "Explore GST Training",
          ctaServiceValue: "GST Case Studies & GSTAT Learning",
        },
      ],
    },
  ] as ServiceBranch[],

  auditingAndFinanceRows: [
    {
      number: "01",
      name: "Statutory Audits",
      description:
        "Independent examination of financial records and statutory statements ensuring compliance with accounting standards and regulatory disclosures.",
      clientType: "MNCs · Mid-sized Corporates · Banking",
      scopeNote: "Annual & Periodic Statutory Mandate",
    },
    {
      number: "02",
      name: "Risk Assurance",
      description:
        "Systematic review of internal controls, operational workflows, and financial reporting risks to strengthen institutional governance.",
      clientType: "Mid-sized Corporates · Financial Services · NGOs",
      scopeNote: "Internal Control & Risk Mapping",
    },
    {
      number: "03",
      name: "Retail Audits",
      description:
        "Store-level inventory reconciliation, point-of-sale verification, and supply chain leakage assessment for physical and omnichannel retail.",
      clientType: "Retail Chains · E-Commerce · Trading",
      scopeNote: "Multi-Location Inventory & POS Audit",
    },
    {
      number: "04",
      name: "IT / CISA Auditing",
      description:
        "Information systems audit and ERP control verification supported by CISA-related firm capability for technology-driven enterprises.",
      clientType: "Banking · Financial Services · E-Commerce · MNCs",
      scopeNote: "Information Systems & ERP Tax Logic",
    },
    {
      number: "05",
      name: "Corporate Law Advisory",
      description:
        "Advisory on company law provisions, corporate governance, regulatory compliance filings, and commercial entity structuring.",
      clientType: "Corporates · Startups · NGOs / Non-Profits",
      scopeNote: "Regulatory & Governance Advisory",
    },
    {
      number: "06",
      name: "Project Financing",
      description:
        "Preparation of detailed project viability reports, financial modeling, and institutional credit documentation for business expansion.",
      clientType: "Mid-sized Corporates · Trading · Logistics",
      scopeNote: "Institutional Credit & Capital Structuring",
    },
  ] as AuditFinanceItem[],

  gstFoundation: {
    name: "GST Research Foundation",
    roleNote: "Associated Educational & Research Initiative · Led by CA Rajender Arora (President)",
    headline: "Practical GST Literacy, Portal Mastery & Jurisprudence Training.",
    description:
      "The GST Research Foundation bridges the gap between statutory theory and ground-level execution. Programs are structured around practical learning across the GST Portal, Tally accounting integration, real-world litigation case studies, and GSTAT-related appellate procedures.",
    curriculumPillars: [
      {
        index: "01",
        title: "GST Portal Operations & Compliance",
        detail: "End-to-end procedural workflows on the official GST Portal including registration, return architecture, and ledger management.",
      },
      {
        index: "02",
        title: "Tally & Accounting Integration",
        detail: "Configuring chart of accounts, automated tax ledgers, GSTR reconciliation, and error-free compliance inside Tally.",
      },
      {
        index: "03",
        title: "Practical Case Studies",
        detail: "Analysis of real-world departmental notices, ITC disputes, transit detentions, and statutory interpretation.",
      },
      {
        index: "04",
        title: "GSTAT-Related Learning",
        detail: "Procedural readiness and appellate drafting standards for Goods and Services Tax Appellate Tribunal representation.",
      },
    ],
    batchSchedule: {
      courseTitle: "Comprehensive Practical GST & Litigation Program",
      duration: "Upcoming schedule to be updated",
      format: "Practical Sessions · Case Studies · Portal & Tally Labs",
      syllabusSummary: "GST Portal · Tally Integration · ITC Reconciliation · Case Studies · GSTAT Readiness",
      upcomingBatchDate: "[COURSE DATE] — Upcoming schedule to be updated",
      feeStatus: "Schedule & fee structure provided upon inquiry",
      registrationPlaceholder: "[REGISTRATION LINK]",
      targetAudience: "Chartered Accountants, Advocates, Tax Practitioners, Corporate Finance Executives & Commerce Graduates",
    },
  },

  industries: [
    {
      number: "01",
      name: "E-Commerce",
      category: "Digital Commerce & Marketplaces",
      description: "TCS compliance, multi-state warehouse registration, marketplace reconciliation, and input credit structuring.",
      focusAreas: "GST Compliance · Retail & IT Audit · ITC Reconciliation",
    },
    {
      number: "02",
      name: "Retail",
      category: "Multi-Store & Distribution",
      description: "Store-level retail audits, inventory verification, POS tax mapping, and supplier credit optimization.",
      focusAreas: "Retail Audits · Statutory Assurance · ITC Optimization",
    },
    {
      number: "03",
      name: "Trading",
      category: "Wholesale & Commodity Distribution",
      description: "Transit detention defense, e-Way Bill compliance, high-volume purchase reconciliation, and SCN representation.",
      focusAreas: "Transit Detention Defense · SCN Litigation · Project Financing",
    },
    {
      number: "04",
      name: "Logistics",
      category: "Supply Chain & Freight",
      description: "Representation in vehicle/goods detention matters, GTA tax structuring, and multi-jurisdictional compliance.",
      focusAreas: "Search & Seizure Defense · Indirect Tax Advisory",
    },
    {
      number: "05",
      name: "Banking",
      category: "Scheduled & Institutional Banking",
      description: "Statutory branch assurance, risk verification, and CISA-aligned information systems auditing.",
      focusAreas: "Statutory Audits · IT / CISA Auditing · Risk Assurance",
    },
    {
      number: "06",
      name: "Financial Services",
      category: "NBFCs & Financial Intermediaries",
      description: "Regulatory compliance review, corporate law advisory, and indirect tax evaluation on financial fee structures.",
      focusAreas: "Risk Assurance · Corporate Law · Indirect Tax",
    },
    {
      number: "07",
      name: "NGOs / Non-Profits",
      category: "Trusts, Societies & Foundations",
      description: "Statutory utilization audits, governance compliance, and tax exemption advisory for non-profit institutions.",
      focusAreas: "Statutory Audits · Governance · Tax Advisory",
    },
    {
      number: "08",
      name: "MNCs",
      category: "Multinational Enterprises",
      description: "Cross-border supply evaluation, domestic subsidiary assurance, litigation defense, and ERP compliance reviews.",
      focusAreas: "Indirect Tax Litigation · IT / CISA Audit · Corporate Law",
    },
    {
      number: "09",
      name: "Mid-sized Corporates",
      category: "Growth & Industrial Enterprises",
      description: "End-to-end tax retainership, statutory auditing, project financing documentation, and appellate defense.",
      focusAreas: "Full-Spectrum Tax, Audit & Corporate Finance",
    },
    {
      number: "10",
      name: "Startups",
      category: "Emerging Ventures",
      description: "Entity incorporation, corporate law structuring, accounting systems setup, and foundational GST compliance.",
      focusAreas: "Corporate Law Advisory · Compliance Architecture",
    },
    {
      number: "11",
      name: "Tax Professionals",
      category: "Practitioners & Finance Teams",
      description: "Peer consultation on complex litigation briefs and specialized training through the GST Research Foundation.",
      focusAreas: "GST Education · GSTAT Readiness · Case Studies",
    },
  ] as IndustryItem[],

  expertiseMatrix: [
    {
      code: "EXP-01",
      category: "INDIRECT TAX",
      headline: "GST Litigation & Advisory",
      description:
        "Comprehensive interpretation of GST statutes, notifications, and circulars paired with departmental adjudication defense and preventive advisory.",
      capabilities: ["Show Cause Notice Replies", "Departmental Audit Defense", "Search & Seizure Representation", "Transaction Structuring"],
    },
    {
      code: "EXP-02",
      category: "GSTAT",
      headline: "Tribunal Representation",
      description:
        "Appellate brief preparation, jurisprudential research, and structured representation for Goods and Services Tax Appellate Tribunal proceedings.",
      capabilities: ["Appellate Pleadings", "Precedent Analysis", "Statutory Appeals", "Cross-Objection Drafting"],
    },
    {
      code: "EXP-03",
      category: "ITC",
      headline: "Complex Credit Reconciliation",
      description:
        "Resolution of multi-period Input Tax Credit mismatches, blocked credit evaluations, rule-based reversals, and statutory refund claims.",
      capabilities: ["GSTR-2B / Ledger Reconciliation", "Refund Claim Architecture", "Vendor Compliance Audits", "Credit Reversal Review"],
    },
    {
      code: "EXP-04",
      category: "COMPLIANCE",
      headline: "GST Systems & Accounting Integration",
      description:
        "Alignment of enterprise accounting platforms, Tally configurations, and ERP tax codes with statutory reporting requirements.",
      capabilities: ["Tally GST Configuration", "ERP Tax Control Review", "IT / CISA System Assurance", "Periodic Return Governance"],
    },
    {
      code: "EXP-05",
      category: "TAX EDUCATION",
      headline: "Professional GST Literacy",
      description:
        "Structured capability building through GST Research Foundation covering portal workflows, case studies, and appellate preparedness.",
      capabilities: ["GST Portal Training", "Practical Tally Workshops", "Litigation Case Studies", "Professional Faculty Sessions"],
    },
  ] as ExpertiseDomain[],

  founder: {
    name: "CA Rajender Arora",
    qualifications: "FCA · LLB",
    role: "Founder & Senior Practice Head",
    foundationRole: "President, GST Research Foundation",
    portraitPlaceholderLabel: "[APPROVED FOUNDER PORTRAIT — CA RAJENDER ARORA, FCA · LLB]",
    biographyParagraphs: [
      "CA Rajender Arora is a Fellow Chartered Accountant (FCA) and law graduate (LLB) with over two decades of active practice in taxation, litigation, statutory auditing, and corporate advisory in New Delhi.",
      "Combining financial precision with legal interpretation, he advises corporate entities, retail networks, trading houses, and institutions on complex GST disputes, Input Tax Credit architecture, statutory assurance, and corporate law governance.",
      "An active contributor to the tax profession with over 59+ professional contributions, he serves as President of the GST Research Foundation and Vice-President of the Sales Tax Bar Association Delhi, and has previously served as Chairman of the NIRC ICAI GST Committee.",
    ],
    // Note: Political affiliations are strictly excluded per governance rule Section 3.
  },

  credentialsWall: [
    {
      id: "cred-fca",
      title: "Fellow Chartered Accountant (FCA)",
      institutionOrScope: "Institute of Chartered Accountants of India (ICAI)",
      status: "Active Qualification",
      category: "Academic & Professional",
    },
    {
      id: "cred-llb",
      title: "Bachelor of Laws (LLB)",
      institutionOrScope: "Legal Qualification · Tax & Corporate Jurisprudence",
      status: "Active Qualification",
      category: "Academic & Professional",
    },
    {
      id: "cred-cisa",
      title: "CISA-Related Firm Capability",
      institutionOrScope: "Information Systems Auditing & ERP Control Assurance",
      status: "Firm Capability",
      category: "Technical Audit",
    },
    {
      id: "cred-gstrf",
      title: "President, GST Research Foundation",
      institutionOrScope: "Professional GST Education & Applied Tax Research",
      status: "Current Institutional Role",
      category: "Institutional Leadership",
    },
    {
      id: "cred-stba",
      title: "Vice-President, Sales Tax Bar Association Delhi",
      institutionOrScope: "Tax Bar Representation & Professional Forum",
      status: "Current Institutional Role",
      category: "Institutional Leadership",
    },
    {
      id: "cred-nirc",
      title: "Former Chairman, NIRC ICAI GST Committee",
      institutionOrScope: "Northern India Regional Council of ICAI (Historical Tenure)",
      status: "Historical / Former Designation",
      category: "Institutional Leadership",
    },
  ] as CredentialRecord[],

  recognitions: [
    {
      id: "rec-tiol",
      title: "TIOL Best Faculty Award",
      issuingBody: "Taxindiaonline (TIOL)",
      context:
        "Awarded in recognition of clarity, practical depth, and instructional excellence as faculty in indirect taxation and GST professional education.",
      yearNote: "Verified Professional Recognition",
    },
    {
      id: "rec-aiftp",
      title: "AIFTP Outstanding Contribution to Tax Profession Award",
      issuingBody: "All India Federation of Tax Practitioners (AIFTP)",
      context:
        "Conferred for sustained contributions to tax jurisprudence, professional seminars, and practical education within the tax practitioner community.",
      yearNote: "Verified Professional Recognition",
    },
  ] as RecognitionRecord[],

  processWorkflow: [
    {
      number: "01",
      title: "Intake & Document Retrieval",
      subtitle: "Case & Record Consolidation",
      description:
        "Structured collection of departmental Show Cause Notices, assessment orders, financial statements, GSTR filings, and transaction ledgers.",
      deliverable: "Complete Indexed Case & Compliance Dossier",
    },
    {
      number: "02",
      title: "Jurisprudential Review",
      subtitle: "Statutory & Precedent Analysis",
      description:
        "Detailed examination of facts against applicable GST enactments, rules, notifications, circulars, and binding judicial/tribunal precedents.",
      deliverable: "Legal & Technical Position Memorandum",
    },
    {
      number: "03",
      title: "Drafting & Strategy",
      subtitle: "Pleadings & Reconciliation Architecture",
      description:
        "Preparation of point-by-point legal submissions, documentary annexures, and verified accounting reconciliations tailored to the forum.",
      deliverable: "Finalized Reply, Appeal Brief or Audit Report",
    },
    {
      number: "04",
      title: "Authority Representation",
      subtitle: "Appearance & Hearing Advocacy",
      description:
        "Personal appearance and structured representation before adjudicating officers, appellate authorities, audit wings, and tribunal benches.",
      deliverable: "Order Review & Post-Hearing Compliance Roadmap",
    },
  ] as ProcessStep[],

  insightsArchive: [
    {
      id: "ins-01",
      referenceCode: "PUB-GST-01",
      category: "GST",
      titlePlaceholder: "[ARTICLE TITLE — INPUT TAX CREDIT RECONCILIATION & STATUTORY COMPLIANCE]",
      datePlaceholder: "[PUBLICATION DATE]",
      abstract:
        "Placeholder for verified firm publication examining multi-ledger Input Tax Credit reconciliation, statutory conditions, and documentation protocols.",
      readingFormat: "Research Brief · Archive Slot",
    },
    {
      id: "ins-02",
      referenceCode: "PUB-LIT-02",
      category: "Litigation",
      titlePlaceholder: "[ARTICLE TITLE — SHOW CAUSE NOTICE DEFENSE & GSTAT APPELLATE PROCEDURE]",
      datePlaceholder: "[PUBLICATION DATE]",
      abstract:
        "Placeholder for verified firm analysis on procedural fairness, jurisdictional objections, and appellate preparation before GSTAT.",
      readingFormat: "Jurisprudential Note · Archive Slot",
    },
    {
      id: "ins-03",
      referenceCode: "PUB-CMP-03",
      category: "Compliance",
      titlePlaceholder: "[ARTICLE TITLE — ERP, TALLY & INFORMATION SYSTEMS AUDIT CONTROLS]",
      datePlaceholder: "[PUBLICATION DATE]",
      abstract:
        "Placeholder for verified technical brief covering GST accounting system integration, retail audit controls, and IT / CISA assurance practices.",
      readingFormat: "Technical Compliance Note · Archive Slot",
    },
    {
      id: "ins-04",
      referenceCode: "PUB-CFN-04",
      category: "Corporate Finance",
      titlePlaceholder: "[ARTICLE TITLE — CORPORATE LAW GOVERNANCE & PROJECT FINANCING DOCUMENTATION]",
      datePlaceholder: "[PUBLICATION DATE]",
      abstract:
        "Placeholder for verified advisory note on statutory corporate compliance and institutional credit documentation for mid-sized enterprises.",
      readingFormat: "Corporate Advisory Brief · Archive Slot",
    },
    {
      id: "ins-05",
      referenceCode: "PUB-TRN-05",
      category: "Training",
      titlePlaceholder: "[ARTICLE TITLE — GST RESEARCH FOUNDATION CURRICULUM & CASE STUDY COMPENDIUM]",
      datePlaceholder: "[PUBLICATION DATE]",
      abstract:
        "Placeholder for verified educational monograph from GST Research Foundation covering live GST Portal workflows and practical case studies.",
      readingFormat: "Foundation Monograph · Archive Slot",
    },
  ] as InsightPlaceholderItem[],

  faqs: [
    {
      id: "faq-verified-1",
      question: "Who can enroll in GST Research Foundation courses?",
      answer:
        "Courses offered by the GST Research Foundation are structured for Chartered Accountants, company secretaries, advocates, tax practitioners, corporate accounting and finance executives, as well as commerce graduates and CA aspirants seeking practical, hands-on proficiency in GST compliance and litigation.",
      status: "Verified Official FAQ",
      category: "GST Research Foundation",
    },
    {
      id: "faq-verified-2",
      question: "What modules are covered in the training programs?",
      answer:
        "The training programs emphasize practical execution and cover live GST Portal operations, Tally accounting integration for GST, Input Tax Credit (ITC) reconciliation workflows, analysis of real-world GST case studies, and Goods and Services Tax Appellate Tribunal (GSTAT)-related procedural learning.",
      status: "Verified Official FAQ",
      category: "GST Research Foundation",
    },
    {
      id: "faq-suggested-1",
      question: "What documentation is required when submitting a GST Show Cause Notice (SCN) for evaluation?",
      answer:
        "Suggested guidance (subject to firm confirmation): Clients typically provide the complete Show Cause Notice along with annexures, relevant GSTR-1 / GSTR-3B / GSTR-2B filings for the disputed tax period, and any prior correspondence or summons issued by the department.",
      status: "Suggested FAQ",
      category: "Tax Litigation",
    },
    {
      id: "faq-suggested-2",
      question: "How can corporate clients schedule an consultation at the Shastri Nagar or Moti Nagar offices?",
      answer:
        "Suggested guidance (subject to firm confirmation): Corporate consultations can be requested through the consultation form on this website by selecting the relevant practice area. Appointments are conducted Monday through Saturday between 10:00 AM and 7:00 PM at either the Shastri Nagar or Moti Nagar (DLF Tower) location.",
      status: "Suggested FAQ",
      category: "Appointments & Locations",
    },
  ] as FAQItem[],
};
