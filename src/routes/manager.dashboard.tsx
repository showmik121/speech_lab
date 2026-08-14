import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Bell,
  Boxes,
  CalendarCheck,
  CalendarPlus,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  PhoneCall,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  UserPlus,
  Wallet,
  Zap,
  ShieldAlert,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/common/page-header";
import { formatTaka } from "@/constants/dashboard-data";
import { getActiveBranch } from "@/lib/manager-session";
import { useRevenueStore } from "@/lib/revenue-store";
import { usePatientStore } from "@/lib/patient-store";
import { useExpenseStore } from "@/lib/expense-store";
import { PATIENTS } from "@/constants/patient-data";
import {
  REVENUE_TREND,
  TODAY_GOALS,
  MONTHLY_TARGET,
  PERFORMANCE_SCORE,
  MANAGER_NOTIFICATIONS,
} from "@/constants/manager-dashboard-data";

const TITLE = "Branch Dashboard — Speech Therapy ERP";
const DESCRIPTION =
  "Daily operations command centre for a single branch: patients, sessions, payments, follow-ups and inventory.";

export const Route = createFileRoute("/manager/dashboard")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManagerDashboard,
});

function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function ManagerDashboard() {
  const branch = getActiveBranch();
  const now = useLiveClock();
  const { dailyRevenue, dailyCount, monthlyRevenue, transactions, enrollmentRevenue, salesRevenue, sessionRevenue } =
    useRevenueStore();
  const {
    activePatients,
    assessmentPending,
    ineligibleCount,
    servicesDoneToday,
    totalServicesDone,
    serviceLogs,
    patients,
  } = usePatientStore();
  const { totalExpenses, dailyExpenses, monthlyExpenses } = useExpenseStore();

  const trendData = REVENUE_TREND["week"];
  const monthlyPercent = Math.min(100, Math.round((monthlyRevenue / 250000) * 100));

  const recentTxns = transactions.slice(0, 5);

  const timeStr = now.toLocaleTimeString("en-BD", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateStr = now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="space-y-6">
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 px-6 py-5 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-500">Live Dashboard</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              {branch?.name ?? "Branch Dashboard"}
            </h1>
            <p className="mt-0.5 text-[13px] text-muted-foreground">
              {dateStr}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-border bg-muted/30 px-4 py-2 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Live Clock</p>
              <p className="mt-0.5 font-mono text-xl font-bold tabular-nums text-foreground">{timeStr}</p>
            </div>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs" asChild>
              <Link to="/manager/revenue">
                <TrendingUp className="h-3.5 w-3.5" />
                Revenue Console
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Real-Time KPI Cards ── */}
      <section aria-label="Key metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Daily Revenue */}
        <Card interactive className="relative overflow-hidden border-emerald-500/25 bg-gradient-to-br from-card to-emerald-500/5 p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Daily Revenue
              </span>
              <p className="mt-1 text-[12px] text-muted-foreground">Today's collection</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Wallet className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground">
            {formatTaka(dailyRevenue || 28500)}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight className="h-3.5 w-3.5" />
            +9% vs yesterday · {dailyCount} transactions
          </div>
        </Card>

        {/* Active Patients */}
        <Card interactive className="relative overflow-hidden border-blue-500/25 bg-gradient-to-br from-card to-blue-500/5 p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Active Patients
              </span>
              <p className="mt-1 text-[12px] text-muted-foreground">Currently in care</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400">
              <Users className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground">{activePatients}</p>
          <div className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-blue-600 dark:text-blue-400">
            <ArrowUpRight className="h-3.5 w-3.5" />
            +6 from yesterday
          </div>
        </Card>

        {/* Today's Sessions */}
        <Card interactive className="relative overflow-hidden border-purple-500/25 bg-gradient-to-br from-card to-purple-500/5 p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Today's Sessions
              </span>
              <p className="mt-1 text-[12px] text-muted-foreground">22 done · 9 upcoming</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
              <Activity className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground">31</p>
          <div className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-purple-600 dark:text-purple-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            71% completion rate today
          </div>
        </Card>

        {/* Pending Due */}
        <Card interactive className="relative overflow-hidden border-amber-500/25 bg-gradient-to-br from-card to-amber-500/5 p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Pending Due
              </span>
              <p className="mt-1 text-[12px] text-muted-foreground">12 unsettled invoices</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <BadgeDollarSign className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground">
            {formatTaka(15200)}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-amber-600 dark:text-amber-400">
            <PhoneCall className="h-3.5 w-3.5" />
            4 overdue follow-ups
          </div>
        </Card>
      </section>

      {/* ── Secondary KPI Row ── */}
      <section aria-label="Secondary metrics" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatMini icon={CalendarPlus} label="Online Bookings" value="11" delta="+2 today" color="text-indigo-500" bg="bg-indigo-500/10" />
        <StatMini icon={ClipboardCheck} label="New Assessments" value="8" delta="3 awaiting report" color="text-sky-500" bg="bg-sky-500/10" />
        <StatMini icon={PhoneCall} label="Pending Follow-ups" value="14" delta="4 overdue" color="text-rose-500" bg="bg-rose-500/10" />
        <StatMini icon={Boxes} label="Low Stock Alerts" value="5" delta="2 items critical" color="text-orange-500" bg="bg-orange-500/10" />
      </section>

      {/* ── Main Grid ── */}
      <div className="grid gap-6 2xl:grid-cols-12">
        {/* LEFT main column */}
        <div className="space-y-6 2xl:col-span-9">

          {/* Revenue Trend Chart */}
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base font-semibold">Real-Time Revenue Trend</CardTitle>
                  <p className="text-[12.5px] text-muted-foreground">This week's collection, expenses and net income (BDT)</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-500"><span className="h-2 w-2 rounded-full bg-emerald-500" />Collection</span>
                  <span className="flex items-center gap-1.5 font-medium text-rose-500"><span className="h-2 w-2 rounded-full bg-rose-500" />Expenses</span>
                  <span className="flex items-center gap-1.5 font-medium text-blue-500"><span className="h-2 w-2 rounded-full bg-blue-500" />Net</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="period" stroke="#888" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `৳${v / 1000}k`} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        return (
                          <div className="rounded-lg border border-border bg-background/95 p-3 text-xs shadow-lg space-y-1.5">
                            <p className="font-bold text-foreground">{label}</p>
                            {payload.map((p, i) => (
                              <p key={i} style={{ color: p.color }} className="font-medium">
                                {p.name}: {formatTaka(Number(p.value || 0))}
                              </p>
                            ))}
                          </div>
                        );
                      }}
                    />
                    <Area type="monotone" dataKey="collection" name="Collection" stroke="#10b981" strokeWidth={2.5} fill="url(#colGrad)" dot={false} />
                    <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#f43f5e" strokeWidth={2} fill="none" dot={false} />
                    <Area type="monotone" dataKey="net" name="Net Income" stroke="#3b82f6" strokeWidth={2} fill="url(#netGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Sources & Monthly Target Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Revenue Stream Breakdown */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Revenue Sources</CardTitle>
                <p className="text-[12.5px] text-muted-foreground">Breakdown by income category (live)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <RevenueBar label="Patient Enrollments" amount={enrollmentRevenue} total={enrollmentRevenue + salesRevenue + sessionRevenue} color="bg-emerald-500" icon={UserPlus} />
                <RevenueBar label="Material POS Sales" amount={salesRevenue} total={enrollmentRevenue + salesRevenue + sessionRevenue} color="bg-amber-500" icon={ShoppingBag} />
                <RevenueBar label="Therapy Session Fees" amount={sessionRevenue} total={enrollmentRevenue + salesRevenue + sessionRevenue} color="bg-blue-500" icon={Activity} />
              </CardContent>
            </Card>

            {/* Monthly Target */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Monthly Target Progress</CardTitle>
                <p className="text-[12.5px] text-muted-foreground">August 2026 · ৳2,50,000 goal</p>
              </CardHeader>
              <CardContent>
                <p className="text-[30px] font-bold leading-none tabular-nums text-foreground">
                  {formatTaka(monthlyRevenue || MONTHLY_TARGET.achieved)}
                </p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  of {formatTaka(250000)} target · {MONTHLY_TARGET.daysLeft} days left
                </p>
                <Progress value={monthlyPercent} className="mt-4 h-3 rounded-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-blue-500" />
                <p className="mt-2 text-[13px] font-bold text-emerald-500">{monthlyPercent}% achieved</p>
                {PERFORMANCE_SCORE.breakdown.map((row) => (
                  <div key={row.id} className="mt-3">
                    <div className="flex justify-between text-[12px] text-muted-foreground mb-1">
                      <span>{row.label}</span>
                      <span className="font-semibold text-foreground">{row.value}%</span>
                    </div>
                    <Progress value={row.value} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Live Transactions */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <CardTitle className="text-base font-semibold">Live Transaction Feed</CardTitle>
                  <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold">LIVE</Badge>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-xs gap-1.5" asChild>
                  <Link to="/manager/revenue">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {recentTxns.length === 0 ? (
                  <p className="px-5 py-6 text-center text-[13px] text-muted-foreground">No live transactions yet.</p>
                ) : (
                  recentTxns.map((tx) => (
                    <div key={tx.id} className={`flex items-center gap-3 px-5 py-3.5 ${tx.isLive ? "bg-emerald-500/5" : ""}`}>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold
                        ${tx.category === "Patient Enrollment" || tx.category === "Package Subscription" ? "bg-emerald-500/15 text-emerald-600" :
                          tx.category === "Material Sale" ? "bg-amber-500/15 text-amber-600" : "bg-blue-500/15 text-blue-600"}`}>
                        {tx.category === "Patient Enrollment" || tx.category === "Package Subscription" ? <UserPlus className="h-4 w-4" /> :
                          tx.category === "Material Sale" ? <ShoppingBag className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold text-foreground truncate">{tx.patientOrCustomerName}</p>
                        <p className="text-[11.5px] text-muted-foreground">{tx.category} · {tx.method}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] font-bold tabular-nums text-foreground">{formatTaka(tx.paidAmount)}</p>
                        {tx.isLive && <span className="text-[10px] font-bold text-emerald-500 uppercase">Just Now</span>}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Patient Details", icon: UserCheck, to: "/manager/patient-details", color: "text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20" },
                  { label: "Register Patient", icon: UserPlus, to: "/manager/patients", color: "text-blue-600 bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20" },
                  { label: "Collect Payment", icon: Wallet, to: "/manager/payments/collect", color: "text-purple-600 bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20" },
                  { label: "New Session", icon: Activity, to: "/manager/therapy/new", color: "text-indigo-600 bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/20" },
                  { label: "New Follow-up", icon: PhoneCall, to: "/manager/follow-up", color: "text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/20" },
                  { label: "New Sale", icon: ShoppingBag, to: "/manager/sales", color: "text-amber-600 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20" },
                  { label: "View Revenue", icon: TrendingUp, to: "/manager/revenue", color: "text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20" },
                  { label: "Expenses", icon: TrendingDown, to: "/manager/expense", color: "text-orange-600 bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20" },
                ].map((action) => (
                  <Link
                    key={action.label}
                    to={action.to}
                    className={`flex flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center transition-all ${action.color}`}
                  >
                    <action.icon className="h-5 w-5" />
                    <span className="text-[12px] font-semibold">{action.label}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT rail */}
        <aside className="space-y-6 2xl:col-span-3">

          {/* Performance Score */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Branch Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                  <span className="text-xl font-bold">{PERFORMANCE_SCORE.score}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Grade {PERFORMANCE_SCORE.grade}</p>
                  <p className="text-[12.5px] text-muted-foreground">{PERFORMANCE_SCORE.label}</p>
                  <p className="text-[11.5px] text-muted-foreground">30-day rolling avg</p>
                </div>
              </div>
              {PERFORMANCE_SCORE.breakdown.map((row) => (
                <div key={row.id} className="mb-3">
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-semibold text-foreground">{row.value}%</span>
                  </div>
                  <Progress value={row.value} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Today's Goals */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 text-blue-500" />
                Today's Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {TODAY_GOALS.map((goal) => {
                const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
                const isMoney = goal.current > 1000;
                return (
                  <div key={goal.id}>
                    <div className="flex items-center justify-between text-[12.5px] mb-1.5">
                      <span className="text-muted-foreground">{goal.label}</span>
                      <span className="font-semibold tabular-nums text-foreground">
                        {isMoney ? formatTaka(goal.current) : goal.current}/{isMoney ? formatTaka(goal.target) : goal.target}
                      </span>
                    </div>
                    <Progress value={percent} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Bell className="h-4 w-4 text-rose-500" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {MANAGER_NOTIFICATIONS.map((item) => {
                const Icon = item.icon;
                const toneColors: Record<string, string> = {
                  success: "bg-emerald-500/15 text-emerald-600",
                  warning: "bg-amber-500/15 text-amber-600",
                  danger: "bg-rose-500/15 text-rose-600",
                  info: "bg-blue-500/15 text-blue-600",
                  neutral: "bg-muted text-muted-foreground",
                };
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs ${toneColors[item.tone] ?? toneColors.neutral}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-medium text-foreground leading-snug">{item.title}</p>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Assessment Pending Alert */}
          {assessmentPending > 0 && (
            <Card className="border-amber-500/30 bg-amber-500/5 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-500/15 text-amber-600">
                    <ClipboardCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">
                      {assessmentPending} Assessments Pending
                    </p>
                    <p className="text-[12px] text-amber-600/80 dark:text-amber-500/80 mt-0.5">
                      Awaiting scheduling & report completion.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-2.5 h-7 text-[11px] border-amber-500/30 text-amber-700 hover:bg-amber-500/10">
                      <Link to="/manager/assessments">View Assessments</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </aside>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function StatMini({ icon: Icon, label, value, delta, color, bg }: {
  icon: any; label: string; value: string; delta: string; color: string; bg: string;
}) {
  return (
    <Card interactive className="p-4 shadow-card">
      <div className="flex items-center gap-3">
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${bg} ${color}`}>
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-medium text-muted-foreground truncate">{label}</p>
          <p className="text-lg font-bold text-foreground tabular-nums">{value}</p>
        </div>
      </div>
      <p className={`mt-2 text-[11.5px] font-medium ${color}`}>{delta}</p>
    </Card>
  );
}

function RevenueBar({ label, amount, total, color, icon: Icon }: {
  label: string; amount: number; total: number; color: string; icon: any;
}) {
  const pct = total > 0 ? Math.round((amount / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
          <Icon className="h-3.5 w-3.5" />
          {label}
        </span>
        <span className="text-[12.5px] font-bold tabular-nums text-foreground">{formatTaka(amount)}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div className={`h-2 rounded-full transition-all duration-700 ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-0.5 text-[11px] text-muted-foreground">{pct}% of total revenue</p>
    </div>
  );
}
