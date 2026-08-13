import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, Plus, Sparkles, RefreshCw, Layers, TrendingUp, TrendingDown, Users, CalendarCheck, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { RevenueOverview } from "@/components/dashboard/revenue-overview";
import { BranchPerformance } from "@/components/dashboard/branch-performance";
import { PatientGrowth } from "@/components/dashboard/patient-growth";
import { PaymentDistribution } from "@/components/dashboard/payment-distribution";
import { TherapyStatistics } from "@/components/dashboard/therapy-statistics";
import { RecentBranches } from "@/components/dashboard/recent-branches";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { SystemOverview } from "@/components/dashboard/system-overview";
import { useRevenueStore } from "@/lib/revenue-store";
import { useExpenseStore } from "@/lib/expense-store";
import { formatTaka } from "@/constants/dashboard-data";
import { BRANCHES } from "@/constants/branch-data";

const title = "Super Admin Dashboard — Speech Therapy ERP";
const description =
  "Head-office command centre with branch performance, revenue, patient growth and system health across every Speech Therapy ERP location.";

export const Route = createFileRoute("/super-admin/dashboard")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuperAdminDashboard,
});

function SuperAdminDashboard() {
  const { allTransactions, entireRevenue: storeRevenue } = useRevenueStore("all");
  const { expenses } = useExpenseStore();
  const [liveMode, setLiveMode] = useState(true);

  // Sync state stats in real-time
  const totalPatientsCount = BRANCHES.reduce((sum, b) => sum + b.patients, 0) + Math.floor(allTransactions.length / 2);
  const totalSessionsCount = 138 + allTransactions.filter(t => t.category === "Therapy Session").length;
  const syncRevenue = 845000 + storeRevenue;
  const syncExpenses = 418000 + expenses.reduce((sum, e) => sum + e.amount, 0);

  // Live KPI mappings
  const dynamicKpis = [
    {
      id: "branches",
      label: "Total Branches",
      value: "15",
      icon: Layers,
      tone: "primary" as const,
      hint: "Across 6 divisions",
      delta: { value: "+2 this month", direction: "up" as const },
    },
    {
      id: "patients",
      label: "Total Patients",
      value: totalPatientsCount.toLocaleString(),
      icon: Users,
      tone: "primary" as const,
      hint: "Registered organisation-wide",
      delta: { value: "+12% growth", direction: "up" as const },
    },
    {
      id: "sessions",
      label: "Today's Sessions",
      value: totalSessionsCount.toString(),
      icon: CalendarCheck,
      tone: "primary" as const,
      hint: "All locations combined",
    },
    {
      id: "revenue",
      label: "Synced Live Revenue",
      value: formatTaka(syncRevenue),
      icon: TrendingUp,
      tone: "success" as const,
      hint: "Real-time updates from manager",
      delta: { value: "Live Synced", direction: "up" as const },
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-900/5 px-6 py-4 rounded-xl border border-slate-100/10">
        <div>
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            Super Admin Console
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Connected
            </span>
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Head-office command centre auto-syncing real-time transactional revenue data.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4 animate-spin text-primary" />
            Live Syncing
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4" />
            Create Branch
          </Button>
        </div>
      </div>

      <section aria-label="Key performance indicators" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dynamicKpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueOverview />
        </div>
        <BranchPerformance />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <PatientGrowth />
        <PaymentDistribution />
        <div className="lg:col-span-2 xl:col-span-1">
          <TherapyStatistics />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentBranches />
        </div>
        <RecentActivities />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <QuickActions />
        </div>
        <SystemOverview />
      </div>
    </div>
  );
}
