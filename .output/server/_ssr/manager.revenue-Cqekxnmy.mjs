import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { B as Receipt, C as Sparkles, E as ShoppingBag, It as Clock, M as Search, Mt as CreditCard, an as Building2, g as TrendingUp, o as Users, pn as Banknote, tn as CalendarDays, u as UserPlus, vn as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { n as getActiveBranch } from "./manager-session-DG-Fmn51.mjs";
import { t as Badge } from "./badge-BCiUAxIx.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-e-zh1EWu.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-Dga_qCN3.mjs";
import { n as useRevenueStore, t as addRevenueTransaction } from "./revenue-store-CXR3DbCY.mjs";
import { a as YAxis, d as Pie, f as Cell, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { t as NewSaleDialog } from "./new-sale-dialog-D2VgbKU4.mjs";
import { t as RegisterPatientDialog } from "./register-patient-dialog-DRFoTH5r.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-BdM-Eibu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.revenue-Cqekxnmy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RevenueKpiCards({ dailyRevenue, dailyCount, monthlyRevenue, monthlyCount, entireRevenue, totalCount, enrollmentRevenue, salesRevenue, sessionRevenue, branchName }) {
	const monthlyTarget = 25e4;
	const targetPercent = Math.min(Math.round(monthlyRevenue / monthlyTarget * 100), 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
							}), "Daily Revenue"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12.5px] font-medium text-muted-foreground",
							children: "Today's Total Collection"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: formatTaka(dailyRevenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" }), " +14.2% vs yesterday"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-muted-foreground",
							children: [dailyCount, " txns today"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "p-5 border-blue-500/30 bg-gradient-to-br from-card via-card to-blue-500/5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400",
							children: "Monthly Revenue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12.5px] font-medium text-muted-foreground",
							children: "August 2026 Collection"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: formatTaka(monthlyRevenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[12px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									"Monthly Target (",
									formatTaka(monthlyTarget),
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-blue-600 dark:text-blue-400",
								children: [targetPercent, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: targetPercent,
							className: "h-2 bg-blue-500/20 [&>div]:bg-blue-600 dark:[&>div]:bg-blue-400"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "p-5 border-purple-500/30 bg-gradient-to-br from-card via-card to-purple-500/5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400",
							children: "Branch Entire Revenue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12.5px] font-medium text-muted-foreground truncate max-w-[150px]",
							children: branchName
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[28px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: formatTaka(entireRevenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-purple-600 dark:text-purple-400",
							children: [totalCount, " Total Receipts"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-purple-500/10 px-2 py-0.5 text-[11px] font-semibold text-purple-600 dark:text-purple-400",
							children: "Active Branch"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "p-5 border-amber-500/30 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400",
						children: "Revenue Sources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[12.5px] font-medium text-muted-foreground",
						children: "Enrollment vs POS Sales"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5 text-emerald-500" }), " Enrollments:"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums text-foreground",
								children: formatTaka(enrollmentRevenue)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5 text-amber-500" }), " Material Sales:"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums text-foreground",
								children: formatTaka(salesRevenue)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, { className: "h-3.5 w-3.5 text-blue-500" }), " Therapy Fees:"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums text-foreground",
								children: formatTaka(sessionRevenue)
							})]
						})
					]
				})]
			})
		]
	});
}
function RevenueAnalyticsCharts({ transactions, branchSummaries }) {
	const trendData = (0, import_react.useMemo)(() => {
		const days = {
			"Aug 07": {
				date: "Aug 07",
				enrollments: 8500,
				sales: 2100,
				total: 10600
			},
			"Aug 08": {
				date: "Aug 08",
				enrollments: 12e3,
				sales: 3400,
				total: 15400
			},
			"Aug 09": {
				date: "Aug 09",
				enrollments: 15e3,
				sales: 1800,
				total: 16800
			},
			"Aug 10": {
				date: "Aug 10",
				enrollments: 14e3,
				sales: 4200,
				total: 18200
			},
			"Aug 11": {
				date: "Aug 11",
				enrollments: 16500,
				sales: 5400,
				total: 21900
			},
			"Aug 12": {
				date: "Aug 12",
				enrollments: 0,
				sales: 0,
				total: 0
			}
		};
		transactions.forEach((tx) => {
			const dateKey = "Aug 12";
			if (tx.category === "Patient Enrollment" || tx.category === "Package Subscription") days[dateKey].enrollments += tx.paidAmount;
			else days[dateKey].sales += tx.paidAmount;
			days[dateKey].total += tx.paidAmount;
		});
		return Object.values(days);
	}, [transactions]);
	const monthlyData = (0, import_react.useMemo)(() => {
		const augLiveCollection = transactions.reduce((sum, tx) => sum + tx.paidAmount, 0);
		return [
			{
				month: "Jan",
				revenue: 125e3
			},
			{
				month: "Feb",
				revenue: 14e4
			},
			{
				month: "Mar",
				revenue: 132e3
			},
			{
				month: "Apr",
				revenue: 155e3
			},
			{
				month: "May",
				revenue: 168e3
			},
			{
				month: "Jun",
				revenue: 174e3
			},
			{
				month: "Jul",
				revenue: 182e3
			},
			{
				month: "Aug",
				revenue: Math.max(augLiveCollection, 184e3)
			},
			{
				month: "Sep (Proj)",
				revenue: 195e3
			},
			{
				month: "Oct (Proj)",
				revenue: 21e4
			},
			{
				month: "Nov (Proj)",
				revenue: 22e4
			},
			{
				month: "Dec (Proj)",
				revenue: 24e4
			}
		];
	}, [transactions]);
	const methodSplit = (0, import_react.useMemo)(() => {
		const counts = {
			"Mobile Banking": 0,
			Cash: 0,
			Card: 0,
			"Bank Transfer": 0
		};
		transactions.forEach((tx) => {
			counts[tx.method] = (counts[tx.method] || 0) + tx.paidAmount;
		});
		const colors = {
			"Mobile Banking": "#ec4899",
			Cash: "#10b981",
			Card: "#3b82f6",
			"Bank Transfer": "#8b5cf6"
		};
		return Object.keys(counts).map((key) => ({
			name: key,
			value: counts[key] || 1e3,
			color: colors[key] || "#6b7280"
		}));
	}, [transactions]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-8 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					className: "pb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-base font-semibold",
							children: "Real-Time Revenue Collection Trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: "Daily breakdown of patient enrollments vs therapy material sales (BDT)"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 font-medium text-emerald-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" }), " Enrollments"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 font-medium text-amber-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }), " Sales & Fees"]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[280px] w-full pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: trendData,
							margin: {
								top: 10,
								right: 10,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "enrollmentGrad",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "5%",
										stopColor: "#10b981",
										stopOpacity: .4
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "95%",
										stopColor: "#10b981",
										stopOpacity: 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "salesGrad",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "5%",
										stopColor: "#f59e0b",
										stopOpacity: .4
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "95%",
										stopColor: "#f59e0b",
										stopOpacity: 0
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "date",
									stroke: "#888888",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#888888",
									fontSize: 11,
									tickLine: false,
									axisLine: false,
									tickFormatter: (val) => `৳${val / 1e3}k`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ({ active, payload, label }) => {
									if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-border bg-background/95 p-2.5 shadow-md backdrop-blur-xs text-xs space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-foreground",
												children: label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-emerald-600 font-medium",
												children: ["Enrollments: ", formatTaka(Number(payload[0]?.value || 0))]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-amber-500 font-medium",
												children: ["Sales & Fees: ", formatTaka(Number(payload[1]?.value || 0))]
											})
										]
									});
									return null;
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "enrollments",
									stroke: "#10b981",
									strokeWidth: 2.5,
									fillOpacity: 1,
									fill: "url(#enrollmentGrad)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "sales",
									stroke: "#f59e0b",
									strokeWidth: 2,
									fillOpacity: 1,
									fill: "url(#salesGrad)"
								})
							]
						})
					})
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-4 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base font-semibold",
						children: "Payment Methods Split"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: "Distribution across mobile banking & cash"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[200px] w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: methodSplit,
								innerRadius: 55,
								outerRadius: 80,
								paddingAngle: 5,
								dataKey: "value",
								children: methodSplit.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (value) => [formatTaka(Number(value || 0)), "Collected"] })] })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2 w-full text-xs",
						children: methodSplit.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2.5 w-2.5 rounded-full",
								style: { backgroundColor: m.color }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-muted-foreground",
								children: m.name
							})]
						}, m.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-12 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					className: "pb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-base font-semibold",
							children: "Monthly Revenue Performance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: "Month-by-month revenue collection overview for this branch (BDT)"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary",
							children: "2026 Monthly Overview"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[250px] w-full pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: monthlyData,
							margin: {
								top: 10,
								right: 10,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									stroke: "#888888",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#888888",
									fontSize: 11,
									tickLine: false,
									axisLine: false,
									tickFormatter: (val) => `৳${val / 1e3}k`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (val) => [formatTaka(Number(val || 0)), "Monthly Revenue"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "revenue",
									fill: "#3b82f6",
									radius: [
										6,
										6,
										0,
										0
									],
									children: monthlyData.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.month.startsWith("Aug") ? "#10b981" : "#3b82f6" }, `month-cell-${index}`))
								})
							]
						})
					})
				}) })]
			})
		]
	});
}
function LiveTransactionTable({ transactions, onSimulate }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return transactions.filter((tx) => {
			const matchesCategory = categoryFilter === "all" || tx.category === categoryFilter;
			const matchesQuery = !q || tx.receiptNo.toLowerCase().includes(q) || tx.patientOrCustomerName.toLowerCase().includes(q) || tx.branchName.toLowerCase().includes(q) || tx.remarks && tx.remarks.toLowerCase().includes(q);
			return matchesCategory && matchesQuery;
		});
	}, [
		transactions,
		query,
		categoryFilter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/20 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-3 w-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-foreground text-base",
							children: "Real-Time Transactions Activity Stream"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "ml-1 border-emerald-500/30 text-emerald-600 bg-emerald-500/10 font-medium",
							children: "Live Stream Active"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: onSimulate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onSimulate,
						className: "h-8 border-primary/30 text-primary hover:bg-primary/10 gap-1.5 text-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Simulate Live Event"]
					}) : null
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 p-4 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[240px] max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search receipt, patient, branch...",
						className: "pl-9 h-9 text-xs"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTab, {
							active: categoryFilter === "all",
							label: "All Transactions",
							onClick: () => setCategoryFilter("all")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTab, {
							active: categoryFilter === "Patient Enrollment",
							label: "Patient Enrollments",
							icon: UserPlus,
							onClick: () => setCategoryFilter("Patient Enrollment")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTab, {
							active: categoryFilter === "Material Sale",
							label: "Material Sales",
							icon: ShoppingBag,
							onClick: () => setCategoryFilter("Material Sale")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterTab, {
							active: categoryFilter === "Therapy Session",
							label: "Therapy Sessions",
							icon: Banknote,
							onClick: () => setCategoryFilter("Therapy Session")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-xs text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/40 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Receipt #"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Patient / Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Branch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4 text-right",
								children: "Amount (BDT)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Payment Method"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 px-4",
								children: "Timestamp"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border",
						children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 7,
							className: "py-8 text-center text-muted-foreground",
							children: "No transaction records found matching your filters."
						}) }) : filtered.map((tx) => {
							const dateFormatted = new Date(tx.timestamp).toLocaleString("en-GB", {
								hour: "2-digit",
								minute: "2-digit",
								day: "2-digit",
								month: "short"
							});
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `transition-colors hover:bg-muted/30 ${tx.isLive ? "bg-emerald-500/5 dark:bg-emerald-500/10" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3.5 px-4 font-mono font-medium text-foreground flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "h-3.5 w-3.5 text-muted-foreground" }),
											tx.receiptNo,
											tx.isLive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded bg-emerald-500 px-1.5 py-0.2 text-[9px] font-bold text-white uppercase tracking-wider animate-pulse",
												children: "NEW"
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3.5 px-4 font-semibold text-foreground",
										children: [tx.patientOrCustomerName, tx.remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-normal text-muted-foreground truncate max-w-[200px]",
											children: tx.remarks
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { category: tx.category })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 text-muted-foreground font-medium",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-3 w-3" }), tx.branchName]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 text-right font-bold tabular-nums text-foreground",
										children: formatTaka(tx.paidAmount)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2 py-1 text-[11px] font-medium text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3 w-3 text-muted-foreground" }), tx.method]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 text-muted-foreground whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-muted-foreground" }), dateFormatted]
										})
									})
								]
							}, tx.id);
						})
					})]
				})
			})
		]
	});
}
function CategoryBadge({ category }) {
	if (category === "Patient Enrollment" || category === "Package Subscription") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
		tone: "success",
		label: category,
		icon: UserPlus
	});
	if (category === "Material Sale") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
		tone: "warning",
		label: category,
		icon: ShoppingBag
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
		tone: "info",
		label: category,
		icon: Banknote
	});
}
function FilterTab({ active, label, icon: Icon, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${active ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"}`,
		children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }) : null, label]
	});
}
function ManagerRevenuePage() {
	const currentBranch = getActiveBranch();
	const activeBranchId = currentBranch?.id || "dhaka-main";
	const activeBranchName = currentBranch?.name || "Dhaka Main Branch";
	const { transactions, dailyRevenue, dailyCount, monthlyRevenue, monthlyCount, entireRevenue, totalCount, enrollmentRevenue, salesRevenue, sessionRevenue, branchSummaries } = useRevenueStore(activeBranchId);
	const [registerOpen, setRegisterOpen] = (0, import_react.useState)(false);
	const [saleOpen, setSaleOpen] = (0, import_react.useState)(false);
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const handleSimulateLive = () => {
		const mockNames = [
			"Zayan Chowdhury",
			"Anika Rahman",
			"Tanvir Hossain",
			"Mehedi Hasan",
			"Sabrina Yasmin",
			"Rafi Ahmed"
		];
		const mockCategories = [
			"Patient Enrollment",
			"Material Sale",
			"Therapy Session"
		];
		const mockMethods = [
			"Mobile Banking",
			"Cash",
			"Card"
		];
		const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
		const randomCat = mockCategories[Math.floor(Math.random() * mockCategories.length)];
		const randomMethod = mockMethods[Math.floor(Math.random() * mockMethods.length)];
		let amount = 1500;
		let remarks = "Single Assessment Session";
		if (randomCat === "Patient Enrollment") {
			amount = 12e3 + Math.floor(Math.random() * 6e3);
			remarks = "New Speech Package Enrollment";
		} else if (randomCat === "Material Sale") {
			amount = 2500 + Math.floor(Math.random() * 3e3);
			remarks = "Therapy Kit & Material POS Purchase";
		}
		addRevenueTransaction({
			patientOrCustomerName: randomName,
			category: randomCat,
			amount,
			paidAmount: amount,
			dueAmount: 0,
			method: randomMethod,
			remarks
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Revenue Command Console",
				description: "Real-time live monitoring of daily, monthly, and branch entire revenue.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Revenue" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Revenue KPI overview",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueKpiCards, {
					dailyRevenue,
					dailyCount,
					monthlyRevenue,
					monthlyCount,
					entireRevenue,
					totalCount,
					enrollmentRevenue,
					salesRevenue,
					sessionRevenue,
					branchName: activeBranchName
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Revenue analytics charts",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueAnalyticsCharts, {
					transactions,
					branchSummaries
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Real-time activity table",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTransactionTable, {
					transactions,
					onSimulate: handleSimulateLive
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterPatientDialog, {
				open: registerOpen,
				onOpenChange: setRegisterOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleOpen,
				onOpenChange: setSaleOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen
			})
		]
	});
}
//#endregion
export { ManagerRevenuePage as component };
