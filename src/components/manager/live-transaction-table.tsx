import { useMemo, useState } from "react";
import {
  Banknote,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Filter,
  Receipt,
  Search,
  ShoppingBag,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import type { RevenueCategory, RevenueTransaction } from "@/lib/revenue-store";

type LiveTransactionTableProps = {
  transactions: RevenueTransaction[];
  onSimulate?: () => void;
};

export function LiveTransactionTable({
  transactions,
  onSimulate,
}: LiveTransactionTableProps) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transactions.filter((tx) => {
      const matchesCategory = categoryFilter === "all" || tx.category === categoryFilter;
      const matchesQuery =
        !q ||
        tx.receiptNo.toLowerCase().includes(q) ||
        tx.patientOrCustomerName.toLowerCase().includes(q) ||
        tx.branchName.toLowerCase().includes(q) ||
        (tx.remarks && tx.remarks.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [transactions, query, categoryFilter]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/20 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <h3 className="font-semibold text-foreground text-base">Real-Time Transactions Activity Stream</h3>
          <Badge variant="outline" className="ml-1 border-emerald-500/30 text-emerald-600 bg-emerald-500/10 font-medium">
            Live Stream Active
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {onSimulate ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onSimulate}
              className="h-8 border-primary/30 text-primary hover:bg-primary/10 gap-1.5 text-xs font-semibold"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Simulate Live Event
            </Button>
          ) : null}
        </div>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-border">
        <div className="relative flex-1 min-w-[240px] max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search receipt, patient, branch..."
            className="pl-9 h-9 text-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <FilterTab
            active={categoryFilter === "all"}
            label="All Transactions"
            onClick={() => setCategoryFilter("all")}
          />
          <FilterTab
            active={categoryFilter === "Patient Enrollment"}
            label="Patient Enrollments"
            icon={UserPlus}
            onClick={() => setCategoryFilter("Patient Enrollment")}
          />
          <FilterTab
            active={categoryFilter === "Material Sale"}
            label="Material Sales"
            icon={ShoppingBag}
            onClick={() => setCategoryFilter("Material Sale")}
          />
          <FilterTab
            active={categoryFilter === "Therapy Session"}
            label="Therapy Sessions"
            icon={Banknote}
            onClick={() => setCategoryFilter("Therapy Session")}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-foreground">
          <thead className="bg-muted/40 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
            <tr>
              <th className="py-3 px-4">Receipt #</th>
              <th className="py-3 px-4">Patient / Customer</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Branch</th>
              <th className="py-3 px-4 text-right">Amount (BDT)</th>
              <th className="py-3 px-4">Payment Method</th>
              <th className="py-3 px-4">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-muted-foreground">
                  No transaction records found matching your filters.
                </td>
              </tr>
            ) : (
              filtered.map((tx) => {
                const dateFormatted = new Date(tx.timestamp).toLocaleString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "short",
                });

                return (
                  <tr
                    key={tx.id}
                    className={`transition-colors hover:bg-muted/30 ${
                      tx.isLive ? "bg-emerald-500/5 dark:bg-emerald-500/10" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-medium text-foreground flex items-center gap-2">
                      <Receipt className="h-3.5 w-3.5 text-muted-foreground" />
                      {tx.receiptNo}
                      {tx.isLive ? (
                        <span className="rounded bg-emerald-500 px-1.5 py-0.2 text-[9px] font-bold text-white uppercase tracking-wider animate-pulse">
                          NEW
                        </span>
                      ) : null}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-foreground">
                      {tx.patientOrCustomerName}
                      {tx.remarks ? (
                        <p className="text-[11px] font-normal text-muted-foreground truncate max-w-[200px]">
                          {tx.remarks}
                        </p>
                      ) : null}
                    </td>
                    <td className="py-3.5 px-4">
                      <CategoryBadge category={tx.category} />
                    </td>
                    <td className="py-3.5 px-4 text-muted-foreground font-medium">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {tx.branchName}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold tabular-nums text-foreground">
                      {formatTaka(tx.paidAmount)}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1 text-[11px] font-medium text-foreground">
                        <CreditCard className="h-3 w-3 text-muted-foreground" />
                        {tx.method}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-muted-foreground whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {dateFormatted}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CategoryBadge({ category }: { category: RevenueCategory }) {
  if (category === "Patient Enrollment" || category === "Package Subscription") {
    return <StatusBadge tone="success" label={category} />;
  }
  if (category === "Material Sale") {
    return <StatusBadge tone="warning" label={category} />;
  }
  return <StatusBadge tone="info" label={category} />;
}

function FilterTab({
  active,
  label,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon?: any;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
        active
          ? "bg-primary text-primary-foreground shadow-xs"
          : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {label}
    </button>
  );
}
