import type { StatusTone } from "@/components/common/status-badge";

/* ------------------------------------------------------------------ */
/* Types & Constants for Online Services                              */
/* ------------------------------------------------------------------ */

export type OnlineServiceStatus = "Active" | "Inactive";
export type OnlinePlatform = "Zoom" | "Google Meet" | "Microsoft Teams" | "Other";
export type OnlineDuration =
  | "30 Minutes"
  | "45 Minutes"
  | "60 Minutes"
  | "90 Minutes"
  | "120 Minutes"
  | "Custom";

export interface FixedOnlineService {
  id: string;
  name: string;
  category: string;
  description: string;
  fee: number;
  duration: OnlineDuration | string;
  platform: OnlinePlatform;
  bookingType: "Advance / Booking";
  status: OnlineServiceStatus;
}

export const ONLINE_SERVICE_STATUS_TONE: Record<OnlineServiceStatus, StatusTone> = {
  Active: "success",
  Inactive: "neutral",
};

export const ONLINE_CATEGORY_TONE: Record<string, StatusTone> = {
  "Online Session": "info",
  Screening: "success",
  Assessment: "warning",
  Training: "info",
  Consultation: "success",
  "Senior Consultant Consultation": "success",
  Conference: "neutral",
  Other: "neutral",
};

export const SERVICE_CATEGORIES = [
  "Online Session",
  "Screening",
  "Assessment",
  "Training",
  "Senior Consultant Consultation",
  "Conference",
  "Other",
];

export const AVAILABLE_PLATFORMS: OnlinePlatform[] = [
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
  "Other",
];

export const AVAILABLE_DURATIONS: OnlineDuration[] = [
  "30 Minutes",
  "45 Minutes",
  "60 Minutes",
  "90 Minutes",
  "120 Minutes",
  "Custom",
];

export const AVAILABLE_STATUSES: OnlineServiceStatus[] = ["Active", "Inactive"];

/* ------------------------------------------------------------------ */
/* Fixed Predefined Services (Stable Internal IDs)                    */
/* ------------------------------------------------------------------ */

export const FIXED_ONLINE_SERVICES: FixedOnlineService[] = [
  {
    id: "ONLINE_SESSION",
    name: "Online Session",
    category: "Online Session",
    description:
      "Online speech therapy sessions conducted remotely through an online meeting platform.",
    fee: 1500,
    duration: "60 Minutes",
    platform: "Google Meet",
    bookingType: "Advance / Booking",
    status: "Active",
  },
  {
    id: "ONLINE_SCREENING",
    name: "Online Screening",
    category: "Screening",
    description:
      "Online screening service for initial evaluation and identification of communication/speech-related needs.",
    fee: 1000,
    duration: "30 Minutes",
    platform: "Google Meet",
    bookingType: "Advance / Booking",
    status: "Active",
  },
  {
    id: "ONLINE_ASSESSMENT",
    name: "Online Assessment",
    category: "Assessment",
    description:
      "Professional assessment conducted online to evaluate the patient's communication, speech, language or related needs.",
    fee: 2000,
    duration: "60 Minutes",
    platform: "Google Meet",
    bookingType: "Advance / Booking",
    status: "Active",
  },
  {
    id: "ONLINE_TRAINING",
    name: "Online Training",
    category: "Training",
    description:
      "Online training programs, courses and skill-development sessions conducted through an online platform.",
    fee: 3000,
    duration: "90 Minutes",
    platform: "Zoom",
    bookingType: "Advance / Booking",
    status: "Active",
  },
  {
    id: "SENIOR_CONSULTANT",
    name: "Senior Consultant Consultation",
    category: "Senior Consultant Consultation",
    description:
      "Online consultation with the Senior Consultant for professional advice and guidance.",
    fee: 2500,
    duration: "30 Minutes",
    platform: "Google Meet",
    bookingType: "Advance / Booking",
    status: "Active",
  },
  {
    id: "CONFERENCE",
    name: "Conference",
    category: "Conference",
    description:
      "Online or offline conference registration and participation service.",
    fee: 1000,
    duration: "Custom",
    platform: "Zoom",
    bookingType: "Advance / Booking",
    status: "Active",
  },
];
