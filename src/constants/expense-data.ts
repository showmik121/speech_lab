import {
  Banknote,
  Building2,
  CalendarClock,
  CalendarDays,
  CircleDollarSign,
  ClipboardCheck,
  FileWarning,
  HandCoins,
  Lightbulb,
  PackageOpen,
  PackagePlus,
  ReceiptText,
  Repeat,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import type { Kpi } from "@/constants/dashboard-data";
import { formatTaka } from "@/constants/dashboard-data";
import type { StatusTone } from "@/components/common/status-badge";

/**
 * Static demo data for the Expense module.
 * Frontend only — the Django REST API will own these payloads later.
 * All money values are Bangladeshi Taka (BDT).
 */

export const EXPENSES_TODAY_ISO = "2026-07-31";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type ExpenseCategory =
  | "Daily Expense"
  | "Monthly Expense"
  | "Maintenance"
  | "Equipment"
  | "Rent"
  | "Utilities"
  | "Salaries & Wages"
  | "Equipment & Maintenance"
  | "Therapy Supplies"
  | "Marketing & Advertising"
  | "Transport & Fuel"
  | "Office Supplies"
  | "Training & Development"
  | "Other";

export type ExpenseType = "Daily Expense" | "Monthly Expense" | "Maintenance" | "Equipment";

export type ExpenseStatus = "Paid" | "Pending" | "Approved" | "Rejected";

export type ExpenseMethod = "Cash" | "Card" | "Mobile Banking" | "Bank Transfer";

export type ExpenseRecord = {
  id: string;
  voucherNo: string;
  category: ExpenseCategory;
  description: string;
  amount: number;
  method: ExpenseMethod;
  paidTo: string;
  date: string;
  timestamp?: string;
  recordedBy: string;
  status: ExpenseStatus;
  remarks: string;
  recurring: boolean;
};

/* ------------------------------------------------------------------ */
/* Tone maps + option lists                                           */
/* ------------------------------------------------------------------ */

export const EXPENSE_STATUS_TONE: Record<ExpenseStatus, StatusTone> = {
  Paid: "success",
  Pending: "warning",
  Approved: "info",
  Rejected: "danger",
};

export const EXPENSE_CATEGORY_TONE: Record<ExpenseCategory, StatusTone> = {
  "Daily Expense": "warning",
  "Monthly Expense": "danger",
  Maintenance: "info",
  Equipment: "primary" as StatusTone,
  Rent: "info",
  Utilities: "warning",
  "Salaries & Wages": "success",
  "Equipment & Maintenance": "info",
  "Therapy Supplies": "primary" as StatusTone,
  "Marketing & Advertising": "warning",
  "Transport & Fuel": "neutral",
  "Office Supplies": "neutral",
  "Training & Development": "info",
  Other: "neutral",
};

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  "Daily Expense",
  "Monthly Expense",
  "Maintenance",
  "Equipment",
  "Rent",
  "Utilities",
  "Salaries & Wages",
  "Equipment & Maintenance",
  "Therapy Supplies",
  "Marketing & Advertising",
  "Transport & Fuel",
  "Office Supplies",
  "Training & Development",
  "Other",
];

export const EXPENSE_STATUSES: ExpenseStatus[] = ["Paid", "Pending", "Approved", "Rejected"];

export const EXPENSE_METHODS: ExpenseMethod[] = [
  "Cash",
  "Card",
  "Mobile Banking",
  "Bank Transfer",
];

export const EXPENSE_DATE_RANGES = [
  { key: "all", label: "All dates" },
  { key: "today", label: "Today" },
  { key: "7d", label: "Last 7 days" },
  { key: "30d", label: "Last 30 days" },
] as const;

export const RECORDED_BY = [
  "Nusrat Jahan (Manager)",
  "Tanvir Hasan (Manager)",
  "Sadia Afrin (Front Desk)",
];

/* ------------------------------------------------------------------ */
/* Demo records                                                       */
/* ------------------------------------------------------------------ */

export const EXPENSE_RECORDS: ExpenseRecord[] = [];

/* ------------------------------------------------------------------ */
/* Derived helpers                                                    */
/* ------------------------------------------------------------------ */

const TODAY = new Date(EXPENSES_TODAY_ISO);

export function isExpenseToday(date: string) {
  return new Date(date).toDateString() === TODAY.toDateString();
}

export function isExpenseThisMonth(date: string) {
  const value = new Date(date);
  return (
    value.getMonth() === TODAY.getMonth() && value.getFullYear() === TODAY.getFullYear()
  );
}

const sumBy = (
  predicate: (record: ExpenseRecord) => boolean,
  pick: (record: ExpenseRecord) => number,
) => EXPENSE_RECORDS.filter(predicate).reduce((total, record) => total + pick(record), 0);

const countBy = (predicate: (record: ExpenseRecord) => boolean) =>
  EXPENSE_RECORDS.filter(predicate).length;

export const TODAYS_EXPENSE = sumBy(
  (record) => isExpenseToday(record.date) && record.status !== "Rejected",
  (record) => record.amount,
);

export const MONTHLY_EXPENSE = sumBy(
  (record) => isExpenseThisMonth(record.date) && record.status !== "Rejected",
  (record) => record.amount,
);

export const PENDING_APPROVALS = countBy(
  (record) => record.status === "Pending" || record.status === "Approved",
);

export const RECURRING_EXPENSES = countBy((record) => record.recurring);

/* ------------------------------------------------------------------ */
/* KPIs                                                               */
/* ------------------------------------------------------------------ */

export const EXPENSE_KPIS: Kpi[] = [
  {
    id: "today-expense",
    label: "Today's Expenses",
    value: formatTaka(TODAYS_EXPENSE),
    icon: Banknote,
    tone: "warning",
    hint: "Cash, card and mobile banking",
    delta: { value: "+3.2% vs yesterday", direction: "up" },
  },
  {
    id: "monthly-expense",
    label: "Monthly Expenses",
    value: formatTaka(MONTHLY_EXPENSE),
    icon: TrendingDown,
    tone: "danger",
    hint: "July 2026 to date",
    delta: { value: "-2.1% vs June", direction: "down" },
  },
  {
    id: "pending-approvals",
    label: "Pending Approvals",
    value: String(PENDING_APPROVALS),
    icon: ClipboardCheck,
    tone: "warning",
    hint: "Awaiting manager sign-off",
    delta: { value: "2 need review", direction: "flat" },
  },
  {
    id: "recurring-expenses",
    label: "Recurring Expenses",
    value: String(RECURRING_EXPENSES),
    icon: Repeat,
    tone: "primary",
    hint: "Monthly commitments",
    delta: { value: "৳ 1,12,450 / month", direction: "flat" },
  },
];

/* ------------------------------------------------------------------ */
/* Category breakdown                                                 */
/* ------------------------------------------------------------------ */

export const EXPENSE_CATEGORY_BREAKDOWN = EXPENSE_CATEGORIES.map((category) => {
  const total = sumBy(
    (record) => record.category === category && record.status !== "Rejected",
    (record) => record.amount,
  );
  return {
    category,
    total,
    count: countBy((record) => record.category === category),
  };
}).filter((item) => item.count > 0);

export const EXPENSE_METHOD_SPLIT = EXPENSE_METHODS.map((method) => ({
  method,
  amount: sumBy(
    (record) => record.method === method && record.status !== "Rejected",
    (record) => record.amount,
  ),
})).filter((item) => item.amount > 0);

export const EXPENSE_MONTHLY_SERIES = [
  { period: "Feb", expenses: 312000 },
  { period: "Mar", expenses: 328500 },
  { period: "Apr", expenses: 341200 },
  { period: "May", expenses: 356800 },
  { period: "Jun", expenses: 372400 },
  { period: "Jul", expenses: 389600 },
];

export const EXPENSE_CATEGORY_ICONS: Record<ExpenseCategory, typeof Building2> = {
  "Daily Expense": CalendarDays,
  "Monthly Expense": CalendarClock,
  Maintenance: Wrench,
  Equipment: PackagePlus,
  Rent: Building2,
  Utilities: Lightbulb,
  "Salaries & Wages": Users,
  "Equipment & Maintenance": Wrench,
  "Therapy Supplies": PackageOpen,
  "Marketing & Advertising": Sparkles,
  "Transport & Fuel": Truck,
  "Office Supplies": ShoppingBag,
  "Training & Development": HandCoins,
  Other: ReceiptText,
};

export const EXPENSE_STATUS_ICONS: Record<ExpenseStatus, typeof CircleDollarSign> = {
  Paid: CircleDollarSign,
  Pending: CalendarClock,
  Approved: ClipboardCheck,
  Rejected: FileWarning,
};

export const EXPENSE_METHOD_ICONS: Record<ExpenseMethod, typeof Banknote> = {
  Cash: Banknote,
  Card: CircleDollarSign,
  "Mobile Banking": Banknote,
  "Bank Transfer": Banknote,
};

/* ------------------------------------------------------------------ */
/* Expense type cards                                                  */
/* ------------------------------------------------------------------ */

export const EXPENSE_TYPE_ORDER: ExpenseType[] = [
  "Daily Expense",
  "Monthly Expense",
  "Maintenance",
  "Equipment",
];

export type ExpenseTypeCard = {
  type: ExpenseType;
  icon: typeof Building2;
  tone: "warning" | "danger" | "info" | "primary";
  hint: string;
};

export const EXPENSE_TYPE_CARDS: ExpenseTypeCard[] = [
  {
    type: "Daily Expense",
    icon: CalendarDays,
    tone: "warning",
    hint: "Day-to-day routine spending",
  },
  {
    type: "Monthly Expense",
    icon: CalendarClock,
    tone: "danger",
    hint: "Recurring monthly commitments",
  },
  {
    type: "Maintenance",
    icon: Wrench,
    tone: "info",
    hint: "Repairs and branch upkeep",
  },
  {
    type: "Equipment",
    icon: PackagePlus,
    tone: "primary",
    hint: "New equipment and supplies",
  },
];
