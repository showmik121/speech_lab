import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatTaka } from "@/constants/dashboard-data";
import { getActiveBranch } from "@/lib/manager-session";

export type RevenueCategory = "Patient Enrollment" | "Material Sale" | "Therapy Session" | "Package Subscription";
export type PaymentMethod = "Cash" | "Card" | "Mobile Banking" | "Bank Transfer";

export type RevenueTransaction = {
  id: string;
  receiptNo: string;
  patientOrCustomerName: string;
  category: RevenueCategory;
  amount: number;
  paidAmount: number;
  dueAmount: number;
  method: PaymentMethod;
  branchId: string;
  branchName: string;
  timestamp: string; // ISO date string
  isLive?: boolean;
  remarks?: string;
};

export type BranchRevenueSummary = {
  branchId: string;
  branchName: string;
  dailyRevenue: number;
  monthlyRevenue: number;
  entireRevenue: number;
  transactionCount: number;
};

const STORAGE_KEY = "speech_lab_revenue_transactions";
const EVENT_NAME = "speech_lab_revenue_updated";

// Seed initial transactions
const INITIAL_TRANSACTIONS: RevenueTransaction[] = [
  {
    id: "tx-101",
    receiptNo: "REC-2026-001",
    patientOrCustomerName: "Ayman Sadiq",
    category: "Patient Enrollment",
    amount: 12500,
    paidAmount: 12500,
    dueAmount: 0,
    method: "Mobile Banking",
    branchId: "dhaka-main",
    branchName: "Dhaka Main Branch",
    timestamp: "2026-08-12T11:45:00Z",
    isLive: false,
    remarks: "Speech Therapy Monthly Package Enrollment",
  },
  {
    id: "tx-102",
    receiptNo: "REC-2026-002",
    patientOrCustomerName: "Kazi Nazrul Islam",
    category: "Material Sale",
    amount: 3200,
    paidAmount: 3200,
    dueAmount: 0,
    method: "Cash",
    branchId: "dhaka-main",
    branchName: "Dhaka Main Branch",
    timestamp: "2026-08-12T10:30:00Z",
    isLive: false,
    remarks: "Bought Articulation Therapy Flashcards & Guidebook",
  },
  {
    id: "tx-103",
    receiptNo: "REC-2026-003",
    patientOrCustomerName: "Tahsina Ahmed",
    category: "Package Subscription",
    amount: 18000,
    paidAmount: 15000,
    dueAmount: 3000,
    method: "Card",
    branchId: "gulshan",
    branchName: "Gulshan Branch",
    timestamp: "2026-08-12T09:15:00Z",
    isLive: false,
    remarks: "Pediatric Autism Communication Package",
  },
  {
    id: "tx-104",
    receiptNo: "REC-2026-004",
    patientOrCustomerName: "Sumi Akter",
    category: "Therapy Session",
    amount: 1500,
    paidAmount: 1500,
    dueAmount: 0,
    method: "Mobile Banking",
    branchId: "dhaka-main",
    branchName: "Dhaka Main Branch",
    timestamp: "2026-08-11T16:20:00Z",
    isLive: false,
    remarks: "Fluency Single Session Assessment",
  },
  {
    id: "tx-105",
    receiptNo: "REC-2026-005",
    patientOrCustomerName: "Rafiqul Islam",
    category: "Material Sale",
    amount: 5400,
    paidAmount: 5400,
    dueAmount: 0,
    method: "Bank Transfer",
    branchId: "uttara",
    branchName: "Uttara Branch",
    timestamp: "2026-08-11T14:10:00Z",
    isLive: false,
    remarks: "Oral Motor Tool Kit Sale",
  },
  {
    id: "tx-106",
    receiptNo: "REC-2026-006",
    patientOrCustomerName: "Mariam Sultana",
    category: "Patient Enrollment",
    amount: 14000,
    paidAmount: 14000,
    dueAmount: 0,
    method: "Mobile Banking",
    branchId: "dhaka-main",
    branchName: "Dhaka Main Branch",
    timestamp: "2026-08-10T12:00:00Z",
    isLive: false,
    remarks: "Full Term Registration + Initial Assessment",
  },
  {
    id: "tx-107",
    receiptNo: "REC-2026-007",
    patientOrCustomerName: "Nusrat Jahan",
    category: "Therapy Session",
    amount: 2000,
    paidAmount: 2000,
    dueAmount: 0,
    method: "Cash",
    branchId: "chittagong",
    branchName: "Chittagong Branch",
    timestamp: "2026-08-09T15:30:00Z",
    isLive: false,
    remarks: "Voice Therapy Session Fee",
  },
];

export function getStoredTransactions(): RevenueTransaction[] {
  if (typeof window === "undefined") return INITIAL_TRANSACTIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
      return INITIAL_TRANSACTIONS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading revenue transactions from localStorage", err);
    return INITIAL_TRANSACTIONS;
  }
}

export function saveTransactions(transactions: RevenueTransaction[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (err) {
    console.error("Error saving revenue transactions to localStorage", err);
  }
}

export function addRevenueTransaction(tx: Omit<RevenueTransaction, "id" | "timestamp" | "receiptNo" | "branchId" | "branchName"> & { branchId?: string; branchName?: string }) {
  const currentBranch = getActiveBranch();
  const branchId = tx.branchId || currentBranch?.id || "dhaka-main";
  const branchName = tx.branchName || currentBranch?.name || "Dhaka Main Branch";

  const count = getStoredTransactions().length + 1;
  const receiptNo = `REC-2026-${String(count).padStart(3, "0")}`;

  const newTx: RevenueTransaction = {
    ...tx,
    id: `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    receiptNo,
    branchId,
    branchName,
    timestamp: new Date().toISOString(),
    isLive: true,
  };

  const existing = getStoredTransactions();
  const updated = [newTx, ...existing];
  saveTransactions(updated);

  toast.success(`Revenue Updated: +${formatTaka(newTx.paidAmount)}`, {
    description: `New ${newTx.category} recorded for ${newTx.patientOrCustomerName} (${newTx.branchName}).`,
  });

  return newTx;
}

export function resetRevenueTransactions() {
  saveTransactions(INITIAL_TRANSACTIONS);
}

/**
 * Custom React Hook to observe revenue state in real-time
 */
export function useRevenueStore(selectedBranchId?: string) {
  const [transactions, setTransactions] = useState<RevenueTransaction[]>([]);

  useEffect(() => {
    setTransactions(getStoredTransactions());

    const handleUpdate = () => {
      setTransactions(getStoredTransactions());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Filter by branch if selected (or show all if 'all')
  const filtered = selectedBranchId && selectedBranchId !== "all"
    ? transactions.filter((tx) => tx.branchId === selectedBranchId)
    : transactions;

  // Calculate Daily, Monthly, Entire Revenue
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const currentMonthStr = now.toISOString().slice(0, 7);

  let dailyRevenue = 0;
  let dailyCount = 0;
  let monthlyRevenue = 0;
  let monthlyCount = 0;
  let entireRevenue = 0;
  let totalCount = filtered.length;

  let enrollmentRevenue = 0;
  let salesRevenue = 0;
  let sessionRevenue = 0;

  filtered.forEach((tx) => {
    const txDate = tx.timestamp.slice(0, 10);
    const txMonth = tx.timestamp.slice(0, 7);

    entireRevenue += tx.paidAmount;

    if (txDate === todayStr || txDate === "2026-08-12") {
      dailyRevenue += tx.paidAmount;
      dailyCount += 1;
    }

    if (txMonth === currentMonthStr || txMonth === "2026-08") {
      monthlyRevenue += tx.paidAmount;
      monthlyCount += 1;
    }

    if (tx.category === "Patient Enrollment" || tx.category === "Package Subscription") {
      enrollmentRevenue += tx.paidAmount;
    } else if (tx.category === "Material Sale") {
      salesRevenue += tx.paidAmount;
    } else {
      sessionRevenue += tx.paidAmount;
    }
  });

  // Calculate Branch-wise revenue breakdown
  const branchMap: Record<string, BranchRevenueSummary> = {
    "dhaka-main": { branchId: "dhaka-main", branchName: "Dhaka Main Branch", dailyRevenue: 0, monthlyRevenue: 0, entireRevenue: 184000, transactionCount: 0 },
    "gulshan": { branchId: "gulshan", branchName: "Gulshan Branch", dailyRevenue: 0, monthlyRevenue: 0, entireRevenue: 162500, transactionCount: 0 },
    "uttara": { branchId: "uttara", branchName: "Uttara Branch", dailyRevenue: 0, monthlyRevenue: 0, entireRevenue: 135000, transactionCount: 0 },
    "chittagong": { branchId: "chittagong", branchName: "Chittagong Branch", dailyRevenue: 0, monthlyRevenue: 0, entireRevenue: 98000, transactionCount: 0 },
    "sylhet": { branchId: "sylhet", branchName: "Sylhet Branch", dailyRevenue: 0, monthlyRevenue: 0, entireRevenue: 76000, transactionCount: 0 },
  };

  transactions.forEach((tx) => {
    const bId = tx.branchId || "dhaka-main";
    if (!branchMap[bId]) {
      branchMap[bId] = {
        branchId: bId,
        branchName: tx.branchName || bId,
        dailyRevenue: 0,
        monthlyRevenue: 0,
        entireRevenue: 0,
        transactionCount: 0,
      };
    }
    const b = branchMap[bId];
    b.entireRevenue += tx.paidAmount;
    b.transactionCount += 1;
    const txDate = tx.timestamp.slice(0, 10);
    const txMonth = tx.timestamp.slice(0, 7);
    if (txDate === todayStr || txDate === "2026-08-12") {
      b.dailyRevenue += tx.paidAmount;
    }
    if (txMonth === currentMonthStr || txMonth === "2026-08") {
      b.monthlyRevenue += tx.paidAmount;
    }
  });

  return {
    transactions: filtered,
    allTransactions: transactions,
    dailyRevenue,
    dailyCount,
    monthlyRevenue,
    monthlyCount,
    entireRevenue,
    totalCount,
    enrollmentRevenue,
    salesRevenue,
    sessionRevenue,
    branchSummaries: Object.values(branchMap),
    addTransaction: addRevenueTransaction,
    resetTransactions: resetRevenueTransactions,
  };
}
