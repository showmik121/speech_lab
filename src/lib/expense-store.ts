import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatTaka } from "@/constants/dashboard-data";
import type { ExpenseRecord } from "@/constants/expense-data";

const STORAGE_KEY = "speech_lab_expenses_v2";
const EVENT_NAME = "speech_lab_expenses_updated";

// Empty initial expenses — real expenses are added by the user
const INITIAL_EXPENSES: ExpenseRecord[] = [];

export function getStoredExpenses(): ExpenseRecord[] {
  if (typeof window === "undefined") return INITIAL_EXPENSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EXPENSES));
      return INITIAL_EXPENSES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_EXPENSES;
  }
}

export function saveExpenses(records: ExpenseRecord[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (err) {
    console.error("Error saving expenses to localStorage", err);
  }
}

export function addExpenseRecord(
  data: Omit<ExpenseRecord, "id" | "voucherNo"> & { id?: string; voucherNo?: string; timestamp?: string }
): ExpenseRecord {
  const existing = getStoredExpenses();
  const count = existing.length + 1;
  const voucherNo = data.voucherNo || `EXP-2026-${String(count).padStart(4, "0")}`;

  const now = new Date();
  const realDate = now.toISOString().slice(0, 10);
  const realTimestamp = now.toISOString();

  const newRecord: ExpenseRecord = {
    ...data,
    id: data.id || `exp-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    voucherNo,
    date: data.date || realDate,
    timestamp: data.timestamp || realTimestamp,
  };

  const updated = [newRecord, ...existing];
  saveExpenses(updated);

  toast.success(`Expense Recorded: ${formatTaka(newRecord.amount)}`, {
    description: `${newRecord.category} · Paid to ${newRecord.paidTo || "Vendor"}`,
  });

  return newRecord;
}

export function deleteExpenseRecord(id: string) {
  const existing = getStoredExpenses();
  const updated = existing.filter((item) => item.id !== id);
  saveExpenses(updated);
  toast.info("Expense Deleted");
}

export function updateExpenseRecord(record: ExpenseRecord) {
  const existing = getStoredExpenses();
  const updated = existing.map((item) => (item.id === record.id ? record : item));
  saveExpenses(updated);
  toast.success("Expense Updated");
}

export function resetExpenses() {
  saveExpenses(INITIAL_EXPENSES);
}

export function useExpenseStore() {
  const [expenses, setExpenses] = useState<ExpenseRecord[]>([]);

  useEffect(() => {
    setExpenses(getStoredExpenses());

    const handleUpdate = () => {
      setExpenses(getStoredExpenses());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const todayStr = new Date().toISOString().slice(0, 10);
  const currentMonthStr = new Date().toISOString().slice(0, 7);

  let totalExpenses = 0;
  let dailyExpenses = 0;
  let monthlyExpenses = 0;
  let pendingCount = 0;

  expenses.forEach((item) => {
    totalExpenses += item.amount;
    if (item.date === todayStr) {
      dailyExpenses += item.amount;
    }
    if (item.date.startsWith(currentMonthStr)) {
      monthlyExpenses += item.amount;
    }
    if (item.status === "Pending") {
      pendingCount += 1;
    }
  });

  return {
    expenses,
    totalExpenses,
    dailyExpenses,
    monthlyExpenses,
    pendingCount,
    addExpense: addExpenseRecord,
    deleteExpense: deleteExpenseRecord,
    updateExpense: updateExpenseRecord,
    resetExpenses,
  };
}
