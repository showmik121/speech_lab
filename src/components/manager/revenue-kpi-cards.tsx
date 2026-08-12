import { ArrowUpRight, Banknote, Building2, CalendarDays, ShoppingBag, Sparkles, TrendingUp, Users } from "lucide-react";
import { formatTaka } from "@/constants/dashboard-data";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type RevenueKpiProps = {
  dailyRevenue: number;
  dailyCount: number;
  monthlyRevenue: number;
  monthlyCount: number;
  entireRevenue: number;
  totalCount: number;
  enrollmentRevenue: number;
  salesRevenue: number;
  sessionRevenue: number;
  branchName: string;
};

export function RevenueKpiCards({
  dailyRevenue,
  dailyCount,
  monthlyRevenue,
  monthlyCount,
  entireRevenue,
  totalCount,
  enrollmentRevenue,
  salesRevenue,
  sessionRevenue,
  branchName,
}: RevenueKpiProps) {
  const monthlyTarget = 250000;
  const targetPercent = Math.min(Math.round((monthlyRevenue / monthlyTarget) * 100), 100);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1. Daily Revenue Card */}
      <Card interactive className="relative overflow-hidden p-5 border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Daily Revenue
            </span>
            <p className="mt-2 text-[12.5px] font-medium text-muted-foreground">Today's Total Collection</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xs">
            <TrendingUp className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(dailyRevenue)}
        </p>
        <div className="mt-3 flex items-center justify-between text-[12.5px]">
          <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight className="h-3.5 w-3.5" /> +14.2% vs yesterday
          </span>
          <span className="font-semibold text-muted-foreground">{dailyCount} txns today</span>
        </div>
      </Card>

      {/* 2. Monthly Revenue Card */}
      <Card interactive className="p-5 border-blue-500/30 bg-gradient-to-br from-card via-card to-blue-500/5 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Monthly Revenue
            </span>
            <p className="mt-2 text-[12.5px] font-medium text-muted-foreground">August 2026 Collection</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs">
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(monthlyRevenue)}
        </p>
        <div className="mt-3 space-y-1.5">
          <div className="flex justify-between text-[12px] font-medium">
            <span className="text-muted-foreground">Monthly Target ({formatTaka(monthlyTarget)})</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">{targetPercent}%</span>
          </div>
          <Progress value={targetPercent} className="h-2 bg-blue-500/20 [&>div]:bg-blue-600 dark:[&>div]:bg-blue-400" />
        </div>
      </Card>

      {/* 3. Branch Entire Revenue Card */}
      <Card interactive className="p-5 border-purple-500/30 bg-gradient-to-br from-card via-card to-purple-500/5 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Branch Entire Revenue
            </span>
            <p className="mt-2 text-[12.5px] font-medium text-muted-foreground truncate max-w-[150px]">{branchName}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {formatTaka(entireRevenue)}
        </p>
        <div className="mt-3 flex items-center justify-between text-[12.5px]">
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {totalCount} Total Receipts
          </span>
          <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
            Active Branch
          </span>
        </div>
      </Card>

      {/* 4. Revenue Streams Breakdown Card */}
      <Card interactive className="p-5 border-amber-500/30 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Revenue Sources
            </span>
            <p className="mt-2 text-[12.5px] font-medium text-muted-foreground">Enrollment vs POS Sales</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-3 space-y-2 text-[12.5px]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-emerald-500" /> Enrollments:
            </span>
            <span className="font-semibold tabular-nums text-foreground">{formatTaka(enrollmentRevenue)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <ShoppingBag className="h-3.5 w-3.5 text-amber-500" /> Material Sales:
            </span>
            <span className="font-semibold tabular-nums text-foreground">{formatTaka(salesRevenue)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Banknote className="h-3.5 w-3.5 text-blue-500" /> Therapy Fees:
            </span>
            <span className="font-semibold tabular-nums text-foreground">{formatTaka(sessionRevenue)}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
