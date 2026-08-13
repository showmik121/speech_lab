import {
  ArrowDownRight,
  Clock,
  CreditCard,
  Plus,
  ReceiptText,
  TrendingDown,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatTaka } from "@/constants/dashboard-data";
import { useExpenseStore } from "@/lib/expense-store";
import {
  ExpenseFormDialog,
  type ExpenseFormValues,
} from "@/components/expenses/expense-form-dialog";

export function ExpenseTypeCards({
  onAdd,
}: {
  onAdd: (values: ExpenseFormValues) => void;
}) {
  const { totalExpenses, dailyExpenses, monthlyExpenses, pendingCount, expenses } =
    useExpenseStore();

  return (
    <section aria-label="Expense summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* 1. Total Expenses */}
      <Card interactive className="relative overflow-hidden p-5 border-rose-500/25 bg-gradient-to-br from-card via-card to-rose-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Total Expenses
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">All recorded branch spending</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 shadow-xs">
            <TrendingDown className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(totalExpenses)}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[12px] font-medium text-rose-600 dark:text-rose-400 flex items-center gap-1">
            <ArrowDownRight className="h-3.5 w-3.5" /> {expenses.length} vouchers recorded
          </span>
          <ExpenseFormDialog
            mode="create"
            onSubmit={onAdd}
            trigger={
              <Button size="sm" variant="outline" className="h-7 text-[11.5px] gap-1 border-rose-500/30 text-rose-600 hover:bg-rose-500/10">
                <Plus className="h-3 w-3" /> Quick Add
              </Button>
            }
          />
        </div>
      </Card>

      {/* 2. Today's Expenses */}
      <Card interactive className="relative overflow-hidden p-5 border-amber-500/25 bg-gradient-to-br from-card via-card to-amber-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Today's Expenses
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Daily branch operational cost</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs">
            <ReceiptText className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(dailyExpenses)}
        </p>
        <p className="mt-3 text-[12px] text-muted-foreground">Live daily total</p>
      </Card>

      {/* 3. Monthly Expenses */}
      <Card interactive className="relative overflow-hidden p-5 border-blue-500/25 bg-gradient-to-br from-card via-card to-blue-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Monthly Expenses
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Current month total</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs">
            <Wallet className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(monthlyExpenses)}
        </p>
        <p className="mt-3 text-[12px] text-muted-foreground">Running month aggregate</p>
      </Card>

      {/* 4. Pending Approvals */}
      <Card interactive className="relative overflow-hidden p-5 border-purple-500/25 bg-gradient-to-br from-card via-card to-purple-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Pending Approvals
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Awaiting manager review</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs">
            <Clock className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {pendingCount}
        </p>
        <p className="mt-3 text-[12px] text-muted-foreground">Unapproved vouchers</p>
      </Card>
    </section>
  );
}