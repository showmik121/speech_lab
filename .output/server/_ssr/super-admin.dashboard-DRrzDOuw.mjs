import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $t as ChartColumn, K as Plus, M as ServerCog, Zt as ChartPie, an as Building, jt as Download, on as Building2, qt as ChevronRight, s as Users, t as Zap, v as TrendingUp, xt as History } from "../_libs/lucide-react.mjs";
import { a as PAYMENT_DISTRIBUTION, c as RECENT_BRANCHES, d as SYSTEM_OVERVIEW, f as THERAPY_STATS, i as PATIENT_GROWTH, l as REVENUE_RANGES, n as BRANCH_RANGES, o as QUICK_ACTIONS, p as formatTaka, r as KPIS, s as RECENT_ACTIVITIES, t as BRANCH_PERFORMANCE_SERIES, u as REVENUE_SERIES } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { n as KpiGrid } from "./kpi-card-CrvhNLUY.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, n as PieChart, o as XAxis, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-CqJPT5Iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.dashboard-DRrzDOuw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var config$3 = {
	revenue: {
		label: "Monthly Revenue",
		color: "var(--chart-1)"
	},
	collection: {
		label: "Collection",
		color: "var(--chart-2)"
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-3)"
	}
};
function RevenueOverview() {
	const [range, setRange] = (0, import_react.useState)("6m");
	const data = REVENUE_SERIES[range];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Revenue Overview",
		description: "Revenue, collection and expenses across all branches",
		icon: TrendingUp,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: range,
			onValueChange: (value) => setRange(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-9 w-[152px]",
				"aria-label": "Select revenue period",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				align: "end",
				children: REVENUE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option.key,
					"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:48:15",
					children: option.label
				}, option.key))
			})]
		}),
		contentClassName: "flex flex-col",
		"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:37:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap items-center gap-x-6 gap-y-2",
			"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:57:7",
			children: Object.entries(config$3).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:59:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full",
					style: { backgroundColor: item.color },
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:60:13"
				}), item.label]
			}, key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: config$3,
			className: "aspect-auto h-full min-h-[300px] w-full flex-1",
			"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:69:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					left: 4,
					right: 8,
					top: 4,
					bottom: 0
				},
				"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:70:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						strokeDasharray: "4 4",
						className: "stroke-border",
						"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:71:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "period",
						tickLine: false,
						axisLine: false,
						tickMargin: 10,
						fontSize: 12,
						"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:72:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						width: 52,
						fontSize: 12,
						tickFormatter: (value) => `${Math.round(value / 1e3)}k`,
						"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:79:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
							formatter: (value) => formatTaka(Number(value)),
							indicator: "dot"
						}),
						"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:86:11"
					}),
					Object.entries(config$3).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: key,
						stroke: item.color,
						strokeWidth: 2,
						dot: false,
						activeDot: { r: 4 },
						"data-tsd-source": "/src/components/dashboard/revenue-overview.tsx:95:13"
					}, key))
				]
			})
		})]
	});
}
function BranchPerformance() {
	const [range, setRange] = (0, import_react.useState)("30d");
	const branches = BRANCH_PERFORMANCE_SERIES[range];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Branch Performance",
		description: "Top 5 branches by revenue",
		icon: Building2,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: range,
			onValueChange: (value) => setRange(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-9 w-[152px]",
				"aria-label": "Select branch performance period",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				align: "end",
				children: BRANCH_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option.key,
					"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:36:15",
					children: option.label
				}, option.key))
			})]
		}),
		contentClassName: "pb-2",
		"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:25:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "-mx-2 divide-y divide-border",
			"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:45:7",
			children: branches.map((branch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg px-2 py-4 transition-enterprise hover:bg-surface-hover",
				"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:47:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
						"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:51:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:52:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:53:17",
								children: branch.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:54:17",
								children: [
									branch.manager,
									" · ",
									branch.city
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: branch.status.tone,
							label: branch.status.label,
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:58:15"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between gap-3 text-[12.5px]",
						"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:60:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-foreground",
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:61:15",
							children: formatTaka(branch.revenue)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted-foreground",
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:64:15",
							children: [branch.patients, " patients"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:68:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: branch.target,
							className: "h-1.5 flex-1",
							"aria-label": `${branch.name} target completion`,
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:69:15"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-9 shrink-0 text-right text-[12px] tabular-nums text-muted-foreground",
							"data-tsd-source": "/src/components/dashboard/branch-performance.tsx:74:15",
							children: [branch.target, "%"]
						})]
					})
				]
			}, branch.id))
		})
	});
}
var config$2 = {
	patients: {
		label: "Total patients",
		color: "var(--chart-1)"
	},
	newPatients: {
		label: "New patients",
		color: "var(--chart-2)"
	}
};
function PatientGrowth() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Patient Growth",
		description: "Monthly registered patients",
		icon: Users,
		contentClassName: "flex flex-col",
		"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:14:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: config$2,
			className: "aspect-auto h-full min-h-[240px] w-full flex-1",
			"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:20:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: PATIENT_GROWTH,
				margin: {
					left: 0,
					right: 8,
					top: 4,
					bottom: 0
				},
				"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:21:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:22:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "patientGrowthFill",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:23:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--chart-1)",
								stopOpacity: .28,
								"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:24:15"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--chart-1)",
								stopOpacity: .02,
								"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:25:15"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						strokeDasharray: "4 4",
						className: "stroke-border",
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:28:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "month",
						tickLine: false,
						axisLine: false,
						tickMargin: 10,
						fontSize: 12,
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:29:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						width: 40,
						fontSize: 12,
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:30:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" }),
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:31:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "patients",
						stroke: "var(--chart-1)",
						strokeWidth: 2,
						fill: "url(#patientGrowthFill)",
						"data-tsd-source": "/src/components/dashboard/patient-growth.tsx:32:11"
					})
				]
			})
		})
	});
}
var config$1 = Object.fromEntries(PAYMENT_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
function PaymentDistribution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Payment Distribution",
		description: "Share of collections by payment type",
		icon: ChartPie,
		"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:13:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:18:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config: config$1,
				className: "aspect-auto h-[200px] w-full",
				"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:19:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
					"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:20:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
							formatter: (value) => `${value}%`,
							hideIndicator: true
						}),
						"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:21:13"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: PAYMENT_DISTRIBUTION,
						dataKey: "value",
						nameKey: "name",
						innerRadius: 58,
						outerRadius: 88,
						paddingAngle: 2,
						strokeWidth: 0,
						"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:24:13",
						children: PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
							fill: slice.token,
							"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:34:17"
						}, slice.name))
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:39:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold tabular-nums text-foreground",
					"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:40:11",
					children: "100%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:41:11",
					children: "Collections"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-2.5",
			"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:44:7",
			children: PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5 text-[13px]",
				"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:46:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 shrink-0 rounded-full",
						style: { backgroundColor: slice.token },
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:47:13"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-muted-foreground",
						"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:52:13",
						children: slice.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						"data-tsd-source": "/src/components/dashboard/payment-distribution.tsx:53:13",
						children: [slice.value, "%"]
					})
				]
			}, slice.name))
		})]
	});
}
var config = { sessions: {
	label: "Sessions",
	color: "var(--chart-1)"
} };
function TherapyStatistics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Therapy Statistics",
		description: "Sessions delivered this month by type",
		icon: ChartColumn,
		contentClassName: "flex flex-col",
		"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:13:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config,
			className: "aspect-auto h-full min-h-[240px] w-full flex-1",
			"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:19:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: THERAPY_STATS,
				layout: "vertical",
				margin: {
					left: 0,
					right: 16,
					top: 4,
					bottom: 0
				},
				"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:20:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						horizontal: false,
						strokeDasharray: "4 4",
						className: "stroke-border",
						"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:25:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						tickLine: false,
						axisLine: false,
						fontSize: 12,
						"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:26:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						tickLine: false,
						axisLine: false,
						width: 120,
						fontSize: 12,
						"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:27:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						cursor: false,
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" }),
						"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:35:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "sessions",
						fill: "var(--chart-1)",
						radius: [
							0,
							6,
							6,
							0
						],
						barSize: 18,
						"data-tsd-source": "/src/components/dashboard/therapy-statistics.tsx:36:11"
					})
				]
			})
		})
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
function TableSkeleton({ rows = 5, columns = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
		"data-tsd-source": "/src/components/common/loading-skeletons.tsx:6:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-6 border-b border-border bg-muted/40 px-5 py-3.5",
			"data-tsd-source": "/src/components/common/loading-skeletons.tsx:7:7",
			children: Array.from({ length: columns }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				className: "h-3.5 flex-1",
				"data-tsd-source": "/src/components/common/loading-skeletons.tsx:9:11"
			}, index))
		}), Array.from({ length: rows }).map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-6 border-b border-border px-5 py-4 last:border-0",
			"data-tsd-source": "/src/components/common/loading-skeletons.tsx:13:9",
			children: Array.from({ length: columns }).map((_, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				className: "h-4 flex-1",
				"data-tsd-source": "/src/components/common/loading-skeletons.tsx:15:13"
			}, colIndex))
		}, rowIndex))]
	});
}
function DataTable({ columns, rows, getRowId, isLoading = false, emptyTitle = "Nothing to show", emptyDescription, emptyAction, caption, toolbar, footer, stickyHeader = true, maxBodyHeight, className }) {
	const alignClass = (align) => align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
	const body = isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4 sm:p-5",
		"data-tsd-source": "/src/components/tables/data-table.tsx:106:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, {
			columns: columns.length,
			"data-tsd-source": "/src/components/tables/data-table.tsx:107:7"
		})
	}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: emptyTitle,
		description: emptyDescription,
		action: emptyAction,
		className: "rounded-none border-0 shadow-none",
		"data-tsd-source": "/src/components/tables/data-table.tsx:110:5"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-auto",
		style: maxBodyHeight ? { maxHeight: maxBodyHeight } : void 0,
		"data-tsd-source": "/src/components/tables/data-table.tsx:117:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/tables/data-table.tsx:121:7",
			children: [
				caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/tables/data-table.tsx:122:20",
					children: caption
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/tables/data-table.tsx:123:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/tables/data-table.tsx:124:11",
						children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("h-11 bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", stickyHeader && "sticky top-0 z-10", alignClass(column.align), column.className),
							"data-tsd-source": "/src/components/tables/data-table.tsx:126:15",
							children: column.header
						}, column.key))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/tables/data-table.tsx:141:9",
					children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/tables/data-table.tsx:143:13",
						children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm text-foreground", alignClass(column.align), column.className),
							"data-tsd-source": "/src/components/tables/data-table.tsx:148:17",
							children: column.cell(row)
						}, column.key))
					}, getRowId(row, index)))
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card shadow-card", className),
		"data-tsd-source": "/src/components/tables/data-table.tsx:167:5",
		children: [
			toolbar,
			body,
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-4 py-3.5 sm:px-5",
				"data-tsd-source": "/src/components/tables/data-table.tsx:176:9",
				children: footer
			}) : null
		]
	});
}
var columns = [
	{
		key: "branch",
		header: "Branch",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:13:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-medium",
				"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:14:9",
				children: row.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:15:9",
				children: row.city
			})]
		})
	},
	{
		key: "manager",
		header: "Manager",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:23:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate",
				"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:24:9",
				children: row.manager
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:25:9",
				children: row.managerRole
			})]
		})
	},
	{
		key: "patients",
		header: "Patients",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:33:20",
			children: row.patients
		})
	},
	{
		key: "revenue",
		header: "Revenue",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium tabular-nums",
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:39:20",
			children: formatTaka(row.revenue)
		})
	},
	{
		key: "status",
		header: "Status",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: row.status.tone,
			label: row.status.label,
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:44:20"
		})
	},
	{
		key: "action",
		header: "Action",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "sm",
			"aria-label": `View ${row.name}`,
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:51:7",
			children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "h-4 w-4",
				"aria-hidden": "true",
				"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:53:9"
			})]
		})
	}
];
function RecentBranches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Branches",
		description: "Latest locations added to the organisation",
		icon: Building,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			children: "View all"
		}),
		contentClassName: "px-0 pb-0 sm:px-0 sm:pb-0",
		"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:61:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			rows: RECENT_BRANCHES,
			getRowId: (row) => row.id,
			caption: "Recently created branches",
			className: "rounded-none border-0 shadow-none",
			"data-tsd-source": "/src/components/dashboard/recent-branches.tsx:72:7"
		})
	});
}
var toneClass$1 = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function RecentActivities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Activities",
		description: "Latest events across the organisation",
		icon: History,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			children: "View log"
		}),
		"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:18:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative space-y-6",
			"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:28:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-[15px] top-2 bottom-2 w-px bg-border",
				"aria-hidden": "true",
				"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:29:9"
			}), RECENT_ACTIVITIES.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex gap-3.5",
					"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:36:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-4 ring-card", toneClass$1[item.tone]),
						"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:37:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:43:17"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 pt-0.5",
						"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:45:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:46:17",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[13px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:47:17",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12px] text-muted-foreground/80",
								"data-tsd-source": "/src/components/dashboard/recent-activities.tsx:50:17",
								children: item.time
							})
						]
					})]
				}, item.id);
			})]
		})
	});
}
function QuickActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Quick Actions",
		description: "Frequently used head-office shortcuts",
		icon: Zap,
		showMenu: false,
		"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:7:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
			"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:13:7",
			children: QUICK_ACTIONS.map((action) => {
				const Icon = action.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "group flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:17:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-enterprise group-hover:bg-primary group-hover:text-primary-foreground",
						"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:22:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:23:17"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:25:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:26:17",
							children: action.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/dashboard/quick-actions.tsx:29:17",
							children: action.description
						})]
					})]
				}, action.id);
			})
		})
	});
}
var toneClass = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function SystemOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "System Overview",
		description: "Platform health at a glance",
		icon: ServerCog,
		showMenu: false,
		"data-tsd-source": "/src/components/dashboard/system-overview.tsx:18:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			"data-tsd-source": "/src/components/dashboard/system-overview.tsx:24:7",
			children: SYSTEM_OVERVIEW.map((stat) => {
				const Icon = stat.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-background p-4 transition-enterprise hover:border-border-strong hover:bg-surface-hover",
					"data-tsd-source": "/src/components/dashboard/system-overview.tsx:28:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						"data-tsd-source": "/src/components/dashboard/system-overview.tsx:32:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", toneClass[stat.tone]),
							"data-tsd-source": "/src/components/dashboard/system-overview.tsx:33:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/dashboard/system-overview.tsx:39:19"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: stat.tone,
							label: stat.value,
							"data-tsd-source": "/src/components/dashboard/system-overview.tsx:41:17"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 truncate text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/dashboard/system-overview.tsx:43:15",
						children: stat.label
					})]
				}, stat.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-[12px] leading-relaxed text-muted-foreground",
			"data-tsd-source": "/src/components/dashboard/system-overview.tsx:48:7",
			children: "Demo telemetry only. Live metrics arrive once the backend service is connected."
		})]
	});
}
function SuperAdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:37:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Super Admin Dashboard",
				description: "Welcome back! Here's what's happening across all branches today.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export Report"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Create Branch"] })] }),
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:38:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Key performance indicators",
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:55:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiGrid, {
					items: KPIS,
					"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:56:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:59:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:60:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueOverview, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:61:11" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchPerformance, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:63:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:66:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientGrowth, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:67:9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentDistribution, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:68:9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2 xl:col-span-1",
						"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:69:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyStatistics, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:70:11" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:74:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:75:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentBranches, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:76:11" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentActivities, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:78:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:81:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					"data-tsd-source": "/src/routes/super-admin.dashboard.tsx:82:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActions, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:83:11" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemOverview, { "data-tsd-source": "/src/routes/super-admin.dashboard.tsx:85:9" })]
			})
		]
	});
}
//#endregion
export { SuperAdminDashboard as component };
