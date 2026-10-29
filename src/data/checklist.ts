export interface ChecklistItem {
  id: number;
  stepNumber: string;
  stageId: string;
  stageName: string;
  title: string;
  description: string;
  fullText: string;
  tag: string;
  importance: "essential" | "critical" | "standard";
}

export interface ChecklistStage {
  id: string;
  stageNumber: string;
  eyebrow: string;
  title: string;
  lead: string;
  isDark?: boolean;
  items: ChecklistItem[];
}

export const CHECKLIST_STAGES: ChecklistStage[] = [
  {
    id: "before-anything-goes-wrong",
    stageNumber: "01",
    eyebrow: "STAGE 01 • PREPARATION",
    title: "BEFORE ANYTHING GOES WRONG",
    lead: "Set up your documentation on the day of purchase. When a warranty dispute arises, your strongest asset is having original records created before any problem existed.",
    items: [
      {
        id: 1,
        stepNumber: "01",
        stageId: "before-anything-goes-wrong",
        stageName: "Before Anything Goes Wrong",
        title: "Keep the invoice.",
        description:
          "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
        fullText:
          "1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
        tag: "INVOICE & BILL",
        importance: "critical",
      },
      {
        id: 2,
        stepNumber: "02",
        stageId: "before-anything-goes-wrong",
        stageName: "Before Anything Goes Wrong",
        title: "Register the product.",
        description:
          "Many brands ask you to register on their website or app; some add extra warranty when you do.",
        fullText:
          "2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.",
        tag: "BRAND PORTAL",
        importance: "essential",
      },
      {
        id: 3,
        stepNumber: "03",
        stageId: "before-anything-goes-wrong",
        stageName: "Before Anything Goes Wrong",
        title: "Read the warranty card once.",
        description:
          "Note how long it lasts, what it covers, and what it excludes.",
        fullText:
          "3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.",
        tag: "TERMS & COVERAGE",
        importance: "standard",
      },
      {
        id: 4,
        stepNumber: "04",
        stageId: "before-anything-goes-wrong",
        stageName: "Before Anything Goes Wrong",
        title: "Record the condition.",
        description:
          "Take a few dated photos of the product once it is installed or unboxed.",
        fullText:
          "4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.",
        tag: "DATED PHOTOS",
        importance: "critical",
      },
    ],
  },
  {
    id: "when-the-fault-appears",
    stageNumber: "02",
    eyebrow: "STAGE 02 • INCIDENT",
    title: "WHEN THE FAULT APPEARS",
    lead: "The minute hardware acts up, start establishing a verifiable digital trail. Never rely solely on an unrecorded telephone conversation.",
    items: [
      {
        id: 5,
        stepNumber: "05",
        stageId: "when-the-fault-appears",
        stageName: "When The Fault Appears",
        title: "Record the fault.",
        description:
          "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
        fullText:
          "5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
        tag: "VIDEO / PHOTO EVIDENCE",
        importance: "critical",
      },
      {
        id: 6,
        stepNumber: "06",
        stageId: "when-the-fault-appears",
        stageName: "When The Fault Appears",
        title: "Raise the complaint in writing.",
        description:
          "Use email, the brand's website or its app, not only a phone call, so there is a record.",
        fullText:
          "6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.",
        tag: "WRITTEN COMPLAINT",
        importance: "critical",
      },
      {
        id: 7,
        stepNumber: "07",
        stageId: "when-the-fault-appears",
        stageName: "When The Fault Appears",
        title: "Note every reference number.",
        description:
          "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
        fullText:
          "7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.",
        tag: "TICKET & LOG",
        importance: "essential",
      },
    ],
  },
  {
    id: "when-a-technician-visits",
    stageNumber: "03",
    eyebrow: "STAGE 03 • ONSITE INSPECTION",
    title: "WHEN A TECHNICIAN VISITS",
    lead: "The in-person diagnostic is often where claims are won or lost. Do not let verbal conclusions pass without written documentation and photographic backup.",
    items: [
      {
        id: 8,
        stepNumber: "08",
        stageId: "when-a-technician-visits",
        stageName: "When A Technician Visits",
        title: "Ask for the job sheet.",
        description:
          "Ask the technician for a copy of the visit report or job sheet before they leave.",
        fullText:
          "8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.",
        tag: "JOB SHEET COPY",
        importance: "critical",
      },
      {
        id: 9,
        stepNumber: "09",
        stageId: "when-a-technician-visits",
        stageName: "When A Technician Visits",
        title: "Ask what was tested.",
        description:
          "Ask which test or instrument was used to reach the diagnosis.",
        fullText:
          "9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.",
        tag: "TEST METHOD",
        importance: "essential",
      },
      {
        id: 10,
        stepNumber: "10",
        stageId: "when-a-technician-visits",
        stageName: "When A Technician Visits",
        title: "Take your own photos.",
        description:
          "Photograph the product and anything the technician points to, during the visit.",
        fullText:
          "10. Take your own photos. Photograph the product and anything the technician points to, during the visit.",
        tag: "VISIT PHOTOS",
        importance: "essential",
      },
    ],
  },
  {
    id: "if-the-claim-is-refused",
    stageNumber: "04",
    eyebrow: "STAGE 04 • DISPUTE RESOLUTION",
    title: "IF THE CLAIM IS REFUSED",
    lead: "A refusal is not the final word. Brands frequently reverse arbitrary rejections when asked for verifiable evidence in writing and confronted with objective documentation.",
    isDark: true,
    items: [
      {
        id: 11,
        stepNumber: "11",
        stageId: "if-the-claim-is-refused",
        stageName: "If The Claim Is Refused",
        title: "Ask for the reason in writing.",
        description:
          "Request a written explanation that names the exact cause and the evidence for it.",
        fullText:
          "11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.",
        tag: "WRITTEN REASON",
        importance: "critical",
      },
      {
        id: 12,
        stepNumber: "12",
        stageId: "if-the-claim-is-refused",
        stageName: "If The Claim Is Refused",
        title: "Ask for the technical report.",
        description:
          "If the refusal rests on an inspection, ask for that inspection report.",
        fullText:
          "12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.",
        tag: "INSPECTION REPORT",
        importance: "critical",
      },
      {
        id: 13,
        stepNumber: "13",
        stageId: "if-the-claim-is-refused",
        stageName: "If The Claim Is Refused",
        title: "Escalate inside the company.",
        description:
          "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
        fullText:
          "13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
        tag: "GRIEVANCE ESCALATION",
        importance: "essential",
      },
      {
        id: 14,
        stepNumber: "14",
        stageId: "if-the-claim-is-refused",
        stageName: "If The Claim Is Refused",
        title: "Keep it factual.",
        description:
          "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
        fullText:
          "14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
        tag: "FACTUAL RECORDS",
        importance: "critical",
      },
      {
        id: 15,
        stepNumber: "15",
        stageId: "if-the-claim-is-refused",
        stageName: "If The Claim Is Refused",
        title: "Know your consumer helpline.",
        description:
          "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
        fullText:
          "15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
        tag: "CONSUMER HELPLINE",
        importance: "essential",
      },
    ],
  },
];

export const KEY_NUMBERS = [
  {
    number: "15",
    caption: "steps in the checklist.",
    hot: false,
    subtitle: "Complete protocol from purchase to resolution",
  },
  {
    number: "4",
    caption: "records to keep before anything goes wrong.",
    hot: false,
    subtitle: "Invoice, registration, card, condition photos",
  },
  {
    number: "1",
    caption: "rule: if it is not in writing, it did not happen.",
    hot: true,
    subtitle: "The golden principle of warranty claims",
  },
];
