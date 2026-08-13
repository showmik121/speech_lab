import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  ChevronRight,
  Eye,
  KeyRound,
  Mail,
  MapPin,
  PencilLine,
  Phone,
  PowerOff,
  UserCog,
  Users,
  Wallet
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/status-badge";
import { formatDate, formatNumber } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import { BRANCH_STATUS_TONE, type Branch } from "@/constants/branch-data";

export function BranchTable({
  rows,
}: {
  rows: Branch[];
  expandedId: string | null;
  onToggleExpand: (id: string) => void;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 p-5 bg-slate-50/50 dark:bg-slate-950/20">
      {rows.map((branch) => {
        const statusTone = BRANCH_STATUS_TONE[branch.status];
        return (
          <Card 
            key={branch.id} 
            interactive 
            className="flex flex-col h-full bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
          >
            {/* Card Header & Status Banner */}
            <div className="p-5 flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/20">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                  <Building2 className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 truncate text-[15px]">
                    {branch.name}
                  </h3>
                  <p className="font-mono text-[11px] text-slate-500 tracking-wider mt-0.5">
                    {branch.code}
                  </p>
                </div>
              </div>
              <StatusBadge tone={statusTone} label={branch.status} />
            </div>

            {/* Quick Metrics (Clean dashboard design) */}
            <div className="p-5 grid grid-cols-3 gap-2 text-center bg-slate-50/10 dark:bg-slate-950/10 border-b border-slate-100 dark:border-slate-800/60">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Patients</p>
                <p className="text-base font-bold text-slate-700 dark:text-slate-200 mt-1 tabular-nums">
                  {formatNumber(branch.patients)}
                </p>
              </div>
              <div className="min-w-0 border-x border-slate-100 dark:border-slate-800/60">
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Staff</p>
                <p className="text-base font-bold text-slate-700 dark:text-slate-200 mt-1 tabular-nums">
                  {branch.staff}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Revenue</p>
                <p className="text-base font-bold text-slate-700 dark:text-slate-200 mt-1 tabular-nums truncate">
                  {formatTaka(branch.monthlyRevenue)}
                </p>
              </div>
            </div>

            {/* Contact & Meta info */}
            <div className="p-5 space-y-3.5 flex-1 text-[13px] text-slate-600 dark:text-slate-400">
              {/* Manager */}
              <div className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white uppercase">
                    {branch.manager.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">{branch.manager.name}</p>
                    <p className="text-[11px] text-slate-400">Branch Manager</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 font-mono text-[10.5px]">
                  <KeyRound className="h-3 w-3" />
                  {branch.manager.managerId}
                </span>
              </div>

              {/* Contact Details */}
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="leading-normal truncate-2-lines">{branch.address}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                  <p className="font-mono">{branch.phone}</p>
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="p-5 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/20 dark:bg-slate-900/10 flex items-center justify-between gap-2.5">
              <span className="text-[11.5px] text-slate-400 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Since {formatDate(branch.createdAt)}
              </span>
              <Button size="sm" variant="outline" className="gap-1.5 h-8.5 rounded-lg border-slate-200 hover:bg-slate-50 dark:border-slate-800" asChild>
                <Link to="/super-admin/branches/$branchId" params={{ branchId: branch.id }}>
                  Manage
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
