export type ExpenseColumnKey =
  | "voucherNo"
  | "category"
  | "description"
  | "amount"
  | "method"
  | "paidTo"
  | "date"
  | "recordedBy"
  | "status";

export const EXPENSE_COLUMNS: {
  key: ExpenseColumnKey;
  label: string;
  hideable: boolean;
  align?: "right";
}[] = [
  { key: "voucherNo", label: "Voucher No", hideable: false },
  { key: "category", label: "Category", hideable: false },
  { key: "description", label: "Description", hideable: true },
  { key: "amount", label: "Amount", hideable: true, align: "right" },
  { key: "method", label: "Payment Method", hideable: true },
  { key: "paidTo", label: "Paid To", hideable: true },
  { key: "date", label: "Date", hideable: true },
  { key: "recordedBy", label: "Recorded By", hideable: true },
  { key: "status", label: "Status", hideable: false },
];

export const DEFAULT_EXPENSE_COLUMNS: ExpenseColumnKey[] = EXPENSE_COLUMNS.map(
  (column) => column.key,
);