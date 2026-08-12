// Therapy types offered by the branch.
// Nothing is persisted — the Django REST API will own this later.

export type TherapyCategory =
  | "Speech & Language"
  | "Behavioural"
  | "Occupational"
  | "Sensory"
  | "Individual"
  | "Group"
  | "Other";

export type TherapyStatus = "Active" | "Inactive" | "Draft";

export type TherapyFeeEntry = {
  label: string;
  price: number;
  duration: string;
};

export type TherapyType = {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: TherapyCategory;
  description: string;
  goals: string[];
  fees: TherapyFeeEntry[];
  status: TherapyStatus;
};

export const THERAPY_CATEGORY_TONE: Record<TherapyCategory, "info" | "success" | "warning" | "danger" | "neutral"> = {
  "Speech & Language": "info",
  Behavioural: "warning",
  Occupational: "success",
  Sensory: "warning",
  Individual: "info",
  Group: "success",
  Other: "neutral",
};

export const THERAPY_STATUS_TONE: Record<TherapyStatus, "success" | "neutral" | "warning"> = {
  Active: "success",
  Inactive: "neutral",
  Draft: "warning",
};

export const THERAPY_CATEGORIES: TherapyCategory[] = [
  "Speech & Language",
  "Behavioural",
  "Occupational",
  "Sensory",
  "Individual",
  "Group",
  "Other",
];

export const THERAPY_STATUSES: TherapyStatus[] = ["Active", "Inactive", "Draft"];

export const THERAPY_TYPES: TherapyType[] = [
  {
    id: "slt",
    code: "THR-SLT-01",
    name: "Speech & Language Therapy",
    shortName: "SLT",
    category: "Speech & Language",
    description:
      "Addresses speech delay, language delay, communication difficulties, and stuttering/তোতলামি.",
    goals: ["Speech Delay", "Language Delay", "Communication সমস্যা", "Stuttering / তোতলামি"],
    fees: [
      { label: "Standard session", price: 600, duration: "70 min" },
      { label: "Stuttering session", price: 1000, duration: "40–70 min" },
    ],
    status: "Active",
  },
  {
    id: "aba",
    code: "THR-ABA-01",
    name: "ABA Therapy",
    shortName: "ABA",
    category: "Behavioural",
    description:
      "Applied Behaviour Analysis for behavioural and developmental support.",
    goals: ["Behavioural support", "Developmental milestones"],
    fees: [
      { label: "Standard session", price: 600, duration: "60 min" },
    ],
    status: "Active",
  },
  {
    id: "ot",
    code: "THR-OT-01",
    name: "Occupational Therapy",
    shortName: "OT",
    category: "Occupational",
    description:
      "Builds functional and developmental skills through purposeful activity and play.",
    goals: ["Functional skills", "Developmental skills"],
    fees: [
      { label: "Standard session", price: 600, duration: "60 min" },
    ],
    status: "Active",
  },
  {
    id: "sit",
    code: "THR-SIT-01",
    name: "Sensory Integration Therapy",
    shortName: "SIT",
    category: "Sensory",
    description:
      "Helps children with sensory-related difficulties process and respond to sensory information.",
    goals: ["Sensory processing", "Sensory modulation"],
    fees: [
      { label: "Standard session", price: 600, duration: "60 min" },
    ],
    status: "Active",
  },
  {
    id: "kit",
    code: "THR-KIT-01",
    name: "KIT Therapy",
    shortName: "KIT",
    category: "Other",
    description:
      "KIT — a specialised therapy programme available at the branch.",
    goals: ["Specialised intervention"],
    fees: [
      { label: "Standard session", price: 600, duration: "60 min" },
    ],
    status: "Active",
  },
  {
    id: "individual",
    code: "THR-IND-01",
    name: "Individual Therapy",
    shortName: "1:1",
    category: "Individual",
    description:
      "One-to-one therapy tailored to the child's individual needs and goals.",
    goals: ["Child-specific goals", "Personalised programme"],
    fees: [
      { label: "Per session", price: 600, duration: "70 min" },
    ],
    status: "Active",
  },
  {
    id: "group",
    code: "THR-GRP-01",
    name: "Group Therapy",
    shortName: "Group",
    category: "Group",
    description:
      "Small group sessions focusing on communication, social interaction, group behaviour and participation.",
    goals: ["Communication", "Social interaction", "Group behaviour", "Group participation"],
    fees: [
      { label: "Per session", price: 800, duration: "90 min" },
    ],
    status: "Active",
  },
];
