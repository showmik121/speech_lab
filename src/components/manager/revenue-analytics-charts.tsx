import { useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatTaka } from "@/constants/dashboard-data";
import type { BranchRevenueSummary, RevenueTransaction } from "@/lib/revenue-store";

type RevenueAnalyticsChartsProps = {
  transactions: RevenueTransaction[];
  branchSummaries: BranchRevenueSummary[];
};

export function RevenueAnalyticsCharts({
  transactions,
  branchSummaries,
}: RevenueAnalyticsChartsProps) {

  // 1. Daily trend chart data
  const trendData = useMemo(() => {
    const days: Record<string, { date: string; enrollments: number; sales: number; total: number }> = {
      "Aug 07": { date: "Aug 07", enrollments: 8500, sales: 2100, total: 10600 },
      "Aug 08": { date: "Aug 08", enrollments: 12000, sales: 3400, total: 15400 },
      "Aug 09": { date: "Aug 09", enrollments: 15000, sales: 1800, total: 16800 },
      "Aug 10": { date: "Aug 10", enrollments: 14000, sales: 4200, total: 18200 },
      "Aug 11": { date: "Aug 11", enrollments: 16500, sales: 5400, total: 21900 },
      "Aug 12": { date: "Aug 12", enrollments: 0, sales: 0, total: 0 },
    };

    transactions.forEach((tx) => {
      const dateKey = "Aug 12";
      if (tx.category === "Patient Enrollment" || tx.category === "Package Subscription") {
        days[dateKey].enrollments += tx.paidAmount;
      } else {
        days[dateKey].sales += tx.paidAmount;
      }
      days[dateKey].total += tx.paidAmount;
    });

    return Object.values(days);
  }, [transactions]);

  // 2. Month-wise Revenue breakdown for this Branch (Jan - Dec)
  const monthlyData = useMemo(() => {
    // Current month August collection computed from live transactions
    const augLiveCollection = transactions.reduce((sum, tx) => sum + tx.paidAmount, 0);

    return [
      { month: "Jan", revenue: 125000 },
      { month: "Feb", revenue: 140000 },
      { month: "Mar", revenue: 132000 },
      { month: "Apr", revenue: 155000 },
      { month: "May", revenue: 168000 },
      { month: "Jun", revenue: 174000 },
      { month: "Jul", revenue: 182000 },
      { month: "Aug", revenue: Math.max(augLiveCollection, 184000) },
      { month: "Sep (Proj)", revenue: 195000 },
      { month: "Oct (Proj)", revenue: 210000 },
      { month: "Nov (Proj)", revenue: 220000 },
      { month: "Dec (Proj)", revenue: 240000 },
    ];
  }, [transactions]);

  // 3. Payment Method split
  const methodSplit = useMemo(() => {
    const counts: Record<string, number> = {
      "Mobile Banking": 0,
      Cash: 0,
      Card: 0,
      "Bank Transfer": 0,
    };
    transactions.forEach((tx) => {
      counts[tx.method] = (counts[tx.method] || 0) + tx.paidAmount;
    });

    const colors: Record<string, string> = {
      "Mobile Banking": "#ec4899", // pink
      Cash: "#10b981", // emerald
      Card: "#3b82f6", // blue
      "Bank Transfer": "#8b5cf6", // purple
    };

    return Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key] || 1000,
      color: colors[key] || "#6b7280",
    }));
  }, [transactions]);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* 1. Revenue Growth Trend (8 cols) */}
      <Card className="lg:col-span-8 shadow-card">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base font-semibold">Real-Time Revenue Collection Trend</CardTitle>
              <p className="text-[12.5px] text-muted-foreground">
                Daily breakdown of patient enrollments vs therapy material sales (BDT)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span> Enrollments
              </span>
              <span className="flex items-center gap-1.5 font-medium text-amber-500">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span> Sales & Fees
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="enrollmentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `৳${val / 1000}k`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border border-border bg-background/95 p-2.5 shadow-md backdrop-blur-xs text-xs space-y-1">
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-emerald-600 font-medium">
                            Enrollments: {formatTaka(Number(payload[0]?.value || 0))}
                          </p>
                          <p className="text-amber-500 font-medium">
                            Sales & Fees: {formatTaka(Number(payload[1]?.value || 0))}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="enrollments"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#enrollmentGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#salesGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* 2. Payment Method Split (4 cols) */}
      <Card className="lg:col-span-4 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Payment Methods Split</CardTitle>
          <p className="text-[12.5px] text-muted-foreground">Distribution across mobile banking & cash</p>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={methodSplit}
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {methodSplit.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number | string | Array<number | string> | undefined) => [formatTaka(Number(value || 0)), "Collected"]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 w-full text-xs">
            {methodSplit.map((m) => (
              <div key={m.name} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: m.color }}></span>
                <span className="truncate text-muted-foreground">{m.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 3. Monthly Revenue Performance (Month-Wise Breakdown for this Branch) (12 cols) */}
      <Card className="lg:col-span-12 shadow-card">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base font-semibold">Monthly Revenue Performance</CardTitle>
              <p className="text-[12.5px] text-muted-foreground">
                Month-by-month revenue collection overview for this branch (BDT)
              </p>
            </div>
            <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              2026 Monthly Overview
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `৳${val / 1000}k`}
                />
                <Tooltip
                  formatter={(val: number | string | Array<number | string> | undefined) => [formatTaka(Number(val || 0)), "Monthly Revenue"]}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]}>
                  {monthlyData.map((entry, index) => (
                    <Cell
                      key={`month-cell-${index}`}
                      fill={entry.month.startsWith("Aug") ? "#10b981" : "#3b82f6"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
