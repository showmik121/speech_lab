import {
  Activity,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { PATIENTS } from "@/constants/patient-data";

export function PatientKpiCards() {
  const totalPatients = PATIENTS.length;
  const activePatients = PATIENTS.filter((p) =>
    ["Active", "Therapy Running", "Follow-up Required"].includes(p.status),
  ).length;
  const newThisMonth = PATIENTS.filter((p) => p.registeredAt >= "2026-07-01").length;
  const assessmentPending = PATIENTS.filter((p) => p.status === "Assessment Pending").length;
  const therapyOngoing = PATIENTS.filter((p) => p.status === "Therapy Running").length;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/* 1. Total Patients */}
      <Card interactive className="relative overflow-hidden p-5 border-purple-500/25 bg-gradient-to-br from-card via-card to-purple-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Total Patients
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Across all branches</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {totalPatients}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-purple-600 dark:text-purple-400">
          <ArrowUpRight className="h-3.5 w-3.5" /> +12% growth rate
        </div>
      </Card>

      {/* 2. Active Patients */}
      <Card interactive className="relative overflow-hidden p-5 border-emerald-500/25 bg-gradient-to-br from-card via-card to-emerald-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Active Care
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Currently in treatment</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xs">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {activePatients}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" /> +4 added this week
        </div>
      </Card>

      {/* 3. New This Month */}
      <Card interactive className="relative overflow-hidden p-5 border-blue-500/25 bg-gradient-to-br from-card via-card to-blue-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              New Patients
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Registered this month</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs">
            <UserPlus className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {newThisMonth}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-blue-600 dark:text-blue-400">
          <Sparkles className="h-3.5 w-3.5" /> +2 vs previous month
        </div>
      </Card>

      {/* 4. Assessment Pending */}
      <Card interactive className="relative overflow-hidden p-5 border-amber-500/25 bg-gradient-to-br from-card via-card to-amber-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Pending Assessment
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Awaiting evaluation</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {assessmentPending}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-amber-600 dark:text-amber-400">
          <Clock className="h-3.5 w-3.5" /> Schedule required
        </div>
      </Card>

      {/* 5. Therapy Ongoing */}
      <Card interactive className="relative overflow-hidden p-5 border-indigo-500/25 bg-gradient-to-br from-card via-card to-indigo-500/10 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Therapy Running
            </span>
            <p className="mt-2 text-[12px] font-medium text-muted-foreground">Active programmes</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-xs">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground">
          {therapyOngoing}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-indigo-600 dark:text-indigo-400">
          <ArrowUpRight className="h-3.5 w-3.5" /> +1 active this week
        </div>
      </Card>
    </div>
  );
}
