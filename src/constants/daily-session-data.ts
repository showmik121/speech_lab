export type DailySessionItem = {
  id: string;
  code: string;
  name: string;
  category: "Outdoor Session" | "Consultation Fee" | string;
  type: "Outdoor Session" | "Consultation Fee" | string;
  description: string;
  price: number;
  durationLabel: string;
  sessions: number;
  status: "Active" | "Inactive";
  hint: string;
  iconName?: string;
};

export const DAILY_SESSIONS: DailySessionItem[] = [
  {
    id: "ds-outdoor",
    code: "DS-OUTDOOR-01",
    name: "Outdoor Session",
    category: "Outdoor Session",
    type: "Outdoor Session",
    description:
      "Home visit or outdoor speech & language therapy session conducted at the patient's residence or designated location.",
    price: 3000,
    durationLabel: "60 mins / visit",
    sessions: 1,
    status: "Active",
    hint: "Includes transport, home environment assessment & one-on-one therapy intervention.",
    iconName: "MapPin",
  },
  {
    id: "ds-consult",
    code: "DS-CONSULT-01",
    name: "Consultation Fee",
    category: "Consultation Fee",
    type: "Consultation Fee",
    description:
      "Initial or follow-up clinical speech-language consultation, assessment review, and personalized therapy plan recommendation.",
    price: 2000,
    durationLabel: "45 mins / consultation",
    sessions: 1,
    status: "Active",
    hint: "Detailed clinical evaluation, diagnostic screening & expert consultation report.",
    iconName: "Stethoscope",
  },
];

export function findDailySession(idOrCode: string): DailySessionItem | undefined {
  return DAILY_SESSIONS.find(
    (item) => item.id === idOrCode || item.code === idOrCode || item.name === idOrCode
  );
}
