import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { En as Activity, J as PhoneCall, O as ShoppingBag, T as Sparkles, Ut as CircleCheck, Z as Package, _n as BadgeDollarSign, a as Wallet, d as UserPlus, fn as Bell, in as CalendarCheck, ln as Boxes, s as Users, sn as BriefcaseMedical, t as Zap, tn as CalendarPlus, v as TrendingUp, xn as ArrowRight, y as TrendingDown, yn as ArrowUpRight, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as getActiveBranch } from "./manager-session-DG-Fmn51.mjs";
import { t as Badge } from "./badge-C3xjBsL2.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-e-zh1EWu.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { n as useRevenueStore } from "./revenue-store-CKx32fwL.mjs";
import { a as YAxis, m as Tooltip, o as XAxis, p as ResponsiveContainer, s as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.dashboard-BwHzJOYH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REVENUE_TREND = {
	today: [
		{
			period: "9 AM",
			collection: 3200,
			expenses: 1400,
			net: 1800
		},
		{
			period: "11 AM",
			collection: 6800,
			expenses: 2600,
			net: 4200
		},
		{
			period: "1 PM",
			collection: 11400,
			expenses: 4100,
			net: 7300
		},
		{
			period: "3 PM",
			collection: 17900,
			expenses: 5600,
			net: 12300
		},
		{
			period: "5 PM",
			collection: 23600,
			expenses: 7200,
			net: 16400
		},
		{
			period: "7 PM",
			collection: 28500,
			expenses: 8400,
			net: 20100
		}
	],
	week: [
		{
			period: "Sat",
			collection: 24100,
			expenses: 8900,
			net: 15200
		},
		{
			period: "Sun",
			collection: 26800,
			expenses: 9300,
			net: 17500
		},
		{
			period: "Mon",
			collection: 31200,
			expenses: 10100,
			net: 21100
		},
		{
			period: "Tue",
			collection: 28700,
			expenses: 9600,
			net: 19100
		},
		{
			period: "Wed",
			collection: 33400,
			expenses: 11200,
			net: 22200
		},
		{
			period: "Thu",
			collection: 29900,
			expenses: 10400,
			net: 19500
		},
		{
			period: "Fri",
			collection: 28500,
			expenses: 8400,
			net: 20100
		}
	],
	month: [
		{
			period: "Week 1",
			collection: 168e3,
			expenses: 61e3,
			net: 107e3
		},
		{
			period: "Week 2",
			collection: 182500,
			expenses: 66500,
			net: 116e3
		},
		{
			period: "Week 3",
			collection: 174800,
			expenses: 63200,
			net: 111600
		},
		{
			period: "Week 4",
			collection: 196400,
			expenses: 71800,
			net: 124600
		}
	]
};
var TODAY_GOALS = [
	{
		id: "g1",
		label: "Sessions completed",
		current: 31,
		target: 40
	},
	{
		id: "g2",
		label: "Collection target",
		current: 28500,
		target: 35e3
	},
	{
		id: "g3",
		label: "Follow-up calls",
		current: 9,
		target: 23
	}
];
var MANAGER_NOTIFICATIONS = [
	{
		id: "n1",
		title: "2 inventory items hit critical stock",
		time: "10 min ago",
		tone: "danger",
		icon: Package
	},
	{
		id: "n2",
		title: "Online booking received for 4:30 PM",
		time: "35 min ago",
		tone: "info",
		icon: CalendarPlus
	},
	{
		id: "n3",
		title: "Therapist Rezwan Kabir marked leave for Friday",
		time: "2 hours ago",
		tone: "warning",
		icon: BriefcaseMedical
	},
	{
		id: "n4",
		title: "Weekly report is ready to review",
		time: "Yesterday",
		tone: "neutral",
		icon: Bell
	}
];
var PERFORMANCE_SCORE = {
	score: 87,
	grade: "A",
	label: "Excellent",
	breakdown: [
		{
			id: "attendance",
			label: "Attendance",
			value: 92
		},
		{
			id: "collection",
			label: "Collection rate",
			value: 88
		},
		{
			id: "satisfaction",
			label: "Patient satisfaction",
			value: 84
		},
		{
			id: "followup",
			label: "Follow-up closure",
			value: 78
		}
	]
};
var MONTHLY_TARGET = {
	achieved: 721700,
	target: 9e5,
	daysLeft: 5
};
function useLiveClock() {
	const [now, setNow] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	return now;
}
function ManagerDashboard() {
	const branch = getActiveBranch();
	const now = useLiveClock();
	const { dailyRevenue, dailyCount, monthlyRevenue, transactions, enrollmentRevenue, salesRevenue, sessionRevenue } = useRevenueStore();
	const activePatients = PATIENTS.filter((p) => [
		"Active",
		"Therapy Running",
		"Follow-up Required"
	].includes(p.status)).length;
	const assessmentPending = PATIENTS.filter((p) => p.status === "Assessment Pending").length;
	const trendData = REVENUE_TREND["week"];
	const monthlyPercent = Math.min(100, Math.round(monthlyRevenue / 25e4 * 100));
	const recentTxns = transactions.slice(0, 5);
	const timeStr = now.toLocaleTimeString("en-BD", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
	const dateStr = now.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/manager.dashboard.tsx:101:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 px-6 py-5 shadow-card",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:103:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:104:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:105:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-1",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:106:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2.5 w-2.5",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:107:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:108:17"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:109:17"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold uppercase tracking-widest text-emerald-500",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:111:15",
									children: "Live Dashboard"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-bold text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:113:13",
								children: branch?.name ?? "Branch Dashboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[13px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:116:13",
								children: dateStr
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:120:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-muted/30 px-4 py-2 text-center",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:121:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:122:15",
								children: "Live Clock"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 font-mono text-xl font-bold tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:123:15",
								children: timeStr
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "h-9 gap-1.5 text-xs",
							asChild: true,
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:125:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/manager/revenue",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:126:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
									className: "h-3.5 w-3.5",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:127:17"
								}), "Revenue Console"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Key metrics",
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:136:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						className: "relative overflow-hidden border-emerald-500/25 bg-gradient-to-br from-card to-emerald-500/5 p-5 shadow-card",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:138:9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:139:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:140:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:141:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-1.5 w-1.5",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:142:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:143:19"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:144:19"
											})]
										}), "Daily Revenue"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:148:15",
										children: "Today's collection"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:150:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
										className: "h-5 w-5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:151:15"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:154:11",
								children: formatTaka(dailyRevenue || 28500)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:157:11",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "h-3.5 w-3.5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:158:13"
									}),
									"+9% vs yesterday · ",
									dailyCount,
									" transactions"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						className: "relative overflow-hidden border-blue-500/25 bg-gradient-to-br from-card to-blue-500/5 p-5 shadow-card",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:164:9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:165:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:166:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:167:15",
										children: "Active Patients"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:170:15",
										children: "Currently in care"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:172:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										className: "h-5 w-5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:173:15"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:176:11",
								children: activePatients
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-blue-600 dark:text-blue-400",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:177:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-3.5 w-3.5",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:178:13"
								}), "+6 from yesterday"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						className: "relative overflow-hidden border-purple-500/25 bg-gradient-to-br from-card to-purple-500/5 p-5 shadow-card",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:184:9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:185:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:186:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:187:15",
										children: "Today's Sessions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:190:15",
										children: "22 done · 9 upcoming"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:192:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
										className: "h-5 w-5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:193:15"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:196:11",
								children: "31"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-purple-600 dark:text-purple-400",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:197:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-3.5 w-3.5",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:198:13"
								}), "71% completion rate today"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						className: "relative overflow-hidden border-amber-500/25 bg-gradient-to-br from-card to-amber-500/5 p-5 shadow-card",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:204:9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:205:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:206:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:207:15",
										children: "Pending Due"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:210:15",
										children: "12 unsettled invoices"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:212:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeDollarSign, {
										className: "h-5 w-5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:213:15"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[28px] font-bold leading-none tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:216:11",
								children: formatTaka(15200)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-amber-600 dark:text-amber-400",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:219:11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
									className: "h-3.5 w-3.5",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:220:13"
								}), "4 overdue follow-ups"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Secondary metrics",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:227:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatMini, {
						icon: CalendarPlus,
						label: "Online Bookings",
						value: "11",
						delta: "+2 today",
						color: "text-indigo-500",
						bg: "bg-indigo-500/10",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:228:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatMini, {
						icon: ClipboardCheck,
						label: "New Assessments",
						value: "8",
						delta: "3 awaiting report",
						color: "text-sky-500",
						bg: "bg-sky-500/10",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:229:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatMini, {
						icon: PhoneCall,
						label: "Pending Follow-ups",
						value: "14",
						delta: "4 overdue",
						color: "text-rose-500",
						bg: "bg-rose-500/10",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:230:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatMini, {
						icon: Boxes,
						label: "Low Stock Alerts",
						value: "5",
						delta: "2 items critical",
						color: "text-orange-500",
						bg: "bg-orange-500/10",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:231:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 2xl:grid-cols-12",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:235:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 2xl:col-span-9",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:237:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:240:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-2",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:241:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:242:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:243:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											className: "text-base font-semibold",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:244:19",
											children: "Real-Time Revenue Trend"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12.5px] text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:245:19",
											children: "This week's collection, expenses and net income (BDT)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 text-xs",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:247:17",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-medium text-emerald-500",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:248:19",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 rounded-full bg-emerald-500",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:248:92"
												}), "Collection"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-medium text-rose-500",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:249:19",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 rounded-full bg-rose-500",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:249:89"
												}), "Expenses"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-medium text-blue-500",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:250:19",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 rounded-full bg-blue-500",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:250:89"
												}), "Net"]
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "pt-2",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:254:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-[260px]",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:255:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:256:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
											data: trendData,
											margin: {
												top: 10,
												right: 10,
												left: -20,
												bottom: 0
											},
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:257:19",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", {
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:258:21",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
														id: "colGrad",
														x1: "0",
														y1: "0",
														x2: "0",
														y2: "1",
														"data-tsd-source": "/src/routes/manager.dashboard.tsx:259:23",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "5%",
															stopColor: "#10b981",
															stopOpacity: .3,
															"data-tsd-source": "/src/routes/manager.dashboard.tsx:260:25"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "95%",
															stopColor: "#10b981",
															stopOpacity: 0,
															"data-tsd-source": "/src/routes/manager.dashboard.tsx:261:25"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
														id: "netGrad",
														x1: "0",
														y1: "0",
														x2: "0",
														y2: "1",
														"data-tsd-source": "/src/routes/manager.dashboard.tsx:263:23",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "5%",
															stopColor: "#3b82f6",
															stopOpacity: .3,
															"data-tsd-source": "/src/routes/manager.dashboard.tsx:264:25"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "95%",
															stopColor: "#3b82f6",
															stopOpacity: 0,
															"data-tsd-source": "/src/routes/manager.dashboard.tsx:265:25"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "period",
													stroke: "#888",
													fontSize: 11,
													tickLine: false,
													axisLine: false,
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:268:21"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													stroke: "#888",
													fontSize: 11,
													tickLine: false,
													axisLine: false,
													tickFormatter: (v) => `৳${v / 1e3}k`,
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:269:21"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													content: ({ active, payload, label }) => {
														if (!active || !payload?.length) return null;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-lg border border-border bg-background/95 p-3 text-xs shadow-lg space-y-1.5",
															"data-tsd-source": "/src/routes/manager.dashboard.tsx:274:27",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-bold text-foreground",
																"data-tsd-source": "/src/routes/manager.dashboard.tsx:275:29",
																children: label
															}), payload.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																style: { color: p.color },
																className: "font-medium",
																"data-tsd-source": "/src/routes/manager.dashboard.tsx:277:31",
																children: [
																	p.name,
																	": ",
																	formatTaka(Number(p.value || 0))
																]
															}, i))]
														});
													},
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:270:21"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													type: "monotone",
													dataKey: "collection",
													name: "Collection",
													stroke: "#10b981",
													strokeWidth: 2.5,
													fill: "url(#colGrad)",
													dot: false,
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:285:21"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													type: "monotone",
													dataKey: "expenses",
													name: "Expenses",
													stroke: "#f43f5e",
													strokeWidth: 2,
													fill: "none",
													dot: false,
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:286:21"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													type: "monotone",
													dataKey: "net",
													name: "Net Income",
													stroke: "#3b82f6",
													strokeWidth: 2,
													fill: "url(#netGrad)",
													dot: false,
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:287:21"
												})
											]
										})
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:295:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "shadow-card",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:297:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "pb-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:298:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base font-semibold",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:299:17",
										children: "Revenue Sources"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:300:17",
										children: "Breakdown by income category (live)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "space-y-4",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:302:15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueBar, {
											label: "Patient Enrollments",
											amount: enrollmentRevenue,
											total: enrollmentRevenue + salesRevenue + sessionRevenue,
											color: "bg-emerald-500",
											icon: UserPlus,
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:303:17"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueBar, {
											label: "Material POS Sales",
											amount: salesRevenue,
											total: enrollmentRevenue + salesRevenue + sessionRevenue,
											color: "bg-amber-500",
											icon: ShoppingBag,
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:304:17"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueBar, {
											label: "Therapy Session Fees",
											amount: sessionRevenue,
											total: enrollmentRevenue + salesRevenue + sessionRevenue,
											color: "bg-blue-500",
											icon: Activity,
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:305:17"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "shadow-card",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:310:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "pb-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:311:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base font-semibold",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:312:17",
										children: "Monthly Target Progress"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:313:17",
										children: "August 2026 · ৳2,50,000 goal"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:315:15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[30px] font-bold leading-none tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:316:17",
											children: formatTaka(monthlyRevenue || MONTHLY_TARGET.achieved)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[12.5px] text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:319:17",
											children: [
												"of ",
												formatTaka(25e4),
												" target · ",
												MONTHLY_TARGET.daysLeft,
												" days left"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: monthlyPercent,
											className: "mt-4 h-3 rounded-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-blue-500",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:322:17"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[13px] font-bold text-emerald-500",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:323:17",
											children: [monthlyPercent, "% achieved"]
										}),
										PERFORMANCE_SCORE.breakdown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:325:19",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-[12px] text-muted-foreground mb-1",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:326:21",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:327:23",
													children: row.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-foreground",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:328:23",
													children: [row.value, "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
												value: row.value,
												className: "h-1.5",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:330:21"
											})]
										}, row.id))
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:338:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:339:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:340:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:341:17",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative flex h-2.5 w-2.5",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:342:19",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:343:21"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:344:21"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
												className: "text-base font-semibold",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:346:19",
												children: "Live Transaction Feed"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:347:19",
												children: "LIVE"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-8 text-xs gap-1.5",
										asChild: true,
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:349:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/manager/revenue",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:350:19",
											children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "h-3.5 w-3.5",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:350:56"
											})]
										})
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "p-0",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:354:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-border",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:355:15",
									children: recentTxns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-5 py-6 text-center text-[13px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:357:19",
										children: "No live transactions yet."
									}) : recentTxns.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex items-center gap-3 px-5 py-3.5 ${tx.isLive ? "bg-emerald-500/5" : ""}`,
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:360:21",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold
                        ${tx.category === "Patient Enrollment" || tx.category === "Package Subscription" ? "bg-emerald-500/15 text-emerald-600" : tx.category === "Material Sale" ? "bg-amber-500/15 text-amber-600" : "bg-blue-500/15 text-blue-600"}`,
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:361:23",
												children: tx.category === "Patient Enrollment" || tx.category === "Package Subscription" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
													className: "h-4 w-4",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:364:107"
												}) : tx.category === "Material Sale" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
													className: "h-4 w-4",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:365:61"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
													className: "h-4 w-4",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:365:99"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:367:23",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[13px] font-semibold text-foreground truncate",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:368:25",
													children: tx.patientOrCustomerName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11.5px] text-muted-foreground",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:369:25",
													children: [
														tx.category,
														" · ",
														tx.method
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:371:23",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[13px] font-bold tabular-nums text-foreground",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:372:25",
													children: formatTaka(tx.paidAmount)
												}), tx.isLive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold text-emerald-500 uppercase",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:373:39",
													children: "Just Now"
												})]
											})
										]
									}, tx.id))
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:383:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:384:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
									className: "text-base font-semibold flex items-center gap-2",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:385:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
										className: "h-4 w-4 text-amber-500",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:386:17"
									}), "Quick Actions"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:390:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:391:15",
									children: [
										{
											label: "Register Patient",
											icon: UserPlus,
											to: "/manager/patients",
											color: "text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20"
										},
										{
											label: "Collect Payment",
											icon: Wallet,
											to: "/manager/payments/collect",
											color: "text-blue-600 bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20"
										},
										{
											label: "New Session",
											icon: Activity,
											to: "/manager/therapy/new",
											color: "text-purple-600 bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20"
										},
										{
											label: "New Follow-up",
											icon: PhoneCall,
											to: "/manager/follow-up",
											color: "text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/20"
										},
										{
											label: "New Sale",
											icon: ShoppingBag,
											to: "/manager/sales",
											color: "text-amber-600 bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20"
										},
										{
											label: "View Revenue",
											icon: TrendingUp,
											to: "/manager/revenue",
											color: "text-indigo-600 bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/20"
										},
										{
											label: "Expenses",
											icon: TrendingDown,
											to: "/manager/expense",
											color: "text-orange-600 bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20"
										},
										{
											label: "Inventory",
											icon: Boxes,
											to: "/manager/materials",
											color: "text-sky-600 bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20"
										}
									].map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: action.to,
										className: `flex flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center transition-all ${action.color}`,
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:402:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, {
											className: "h-5 w-5",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:407:21"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[12px] font-semibold",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:408:21",
											children: action.label
										})]
									}, action.label))
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6 2xl:col-span-3",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:417:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:420:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:421:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
									className: "text-base font-semibold flex items-center gap-2",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:422:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										className: "h-4 w-4 text-amber-500",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:423:17"
									}), "Branch Performance"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:427:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 mb-4",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:428:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:429:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl font-bold",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:430:19",
											children: PERFORMANCE_SCORE.score
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:432:17",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-bold text-foreground",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:433:19",
												children: ["Grade ", PERFORMANCE_SCORE.grade]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12.5px] text-muted-foreground",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:434:19",
												children: PERFORMANCE_SCORE.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11.5px] text-muted-foreground",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:435:19",
												children: "30-day rolling avg"
											})
										]
									})]
								}), PERFORMANCE_SCORE.breakdown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:439:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[12px] mb-1",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:440:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:441:21",
											children: row.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-foreground",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:442:21",
											children: [row.value, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: row.value,
										className: "h-1.5",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:444:19"
									})]
								}, row.id))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:451:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:452:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
									className: "text-base font-semibold flex items-center gap-2",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:453:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
										className: "h-4 w-4 text-blue-500",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:454:17"
									}), "Today's Goals"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "space-y-4",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:458:13",
								children: TODAY_GOALS.map((goal) => {
									const percent = Math.min(100, Math.round(goal.current / goal.target * 100));
									const isMoney = goal.current > 1e3;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:463:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-[12.5px] mb-1.5",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:464:21",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:465:23",
												children: goal.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold tabular-nums text-foreground",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:466:23",
												children: [
													isMoney ? formatTaka(goal.current) : goal.current,
													"/",
													isMoney ? formatTaka(goal.target) : goal.target
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: percent,
											className: "h-2",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:470:21"
										})]
									}, goal.id);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:478:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								className: "pb-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:479:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
									className: "text-base font-semibold flex items-center gap-2",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:480:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
										className: "h-4 w-4 text-rose-500",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:481:17"
									}), "Recent Notifications"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "space-y-3",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:485:13",
								children: MANAGER_NOTIFICATIONS.map((item) => {
									const Icon = item.icon;
									const toneColors = {
										success: "bg-emerald-500/15 text-emerald-600",
										warning: "bg-amber-500/15 text-amber-600",
										danger: "bg-rose-500/15 text-rose-600",
										info: "bg-blue-500/15 text-blue-600",
										neutral: "bg-muted text-muted-foreground"
									};
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:496:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs ${toneColors[item.tone] ?? toneColors.neutral}`,
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:497:21",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-4 w-4",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:498:23"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:500:21",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12.5px] font-medium text-foreground leading-snug",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:501:23",
												children: item.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11.5px] text-muted-foreground mt-0.5",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:502:23",
												children: item.time
											})]
										})]
									}, item.id);
								})
							})]
						}),
						assessmentPending > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "border-amber-500/30 bg-amber-500/5 shadow-card",
							"data-tsd-source": "/src/routes/manager.dashboard.tsx:512:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								className: "p-4",
								"data-tsd-source": "/src/routes/manager.dashboard.tsx:513:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									"data-tsd-source": "/src/routes/manager.dashboard.tsx:514:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-500/15 text-amber-600",
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:515:19",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
											className: "h-5 w-5",
											"data-tsd-source": "/src/routes/manager.dashboard.tsx:516:21"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-tsd-source": "/src/routes/manager.dashboard.tsx:518:19",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-semibold text-amber-700 dark:text-amber-400 text-sm",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:519:21",
												children: [assessmentPending, " Assessments Pending"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-amber-600/80 dark:text-amber-500/80 mt-0.5",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:522:21",
												children: "Awaiting scheduling & report completion."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												asChild: true,
												className: "mt-2.5 h-7 text-[11px] border-amber-500/30 text-amber-700 hover:bg-amber-500/10",
												"data-tsd-source": "/src/routes/manager.dashboard.tsx:525:21",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/manager/assessments",
													"data-tsd-source": "/src/routes/manager.dashboard.tsx:526:23",
													children: "View Assessments"
												})
											})
										]
									})]
								})
							})
						})
					]
				})]
			})
		]
	});
}
function StatMini({ icon: Icon, label, value, delta, color, bg }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "p-4 shadow-card",
		"data-tsd-source": "/src/routes/manager.dashboard.tsx:545:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			"data-tsd-source": "/src/routes/manager.dashboard.tsx:546:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `grid h-9 w-9 shrink-0 place-items-center rounded-lg ${bg} ${color}`,
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:547:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-4.5 w-4.5",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:548:11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:550:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-medium text-muted-foreground truncate",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:551:11",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-bold text-foreground tabular-nums",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:552:11",
					children: value
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-2 text-[11.5px] font-medium ${color}`,
			"data-tsd-source": "/src/routes/manager.dashboard.tsx:555:7",
			children: delta
		})]
	});
}
function RevenueBar({ label, amount, total, color, icon: Icon }) {
	const pct = total > 0 ? Math.round(amount / total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-tsd-source": "/src/routes/manager.dashboard.tsx:565:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-1.5",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:566:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:567:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-3.5 w-3.5",
						"data-tsd-source": "/src/routes/manager.dashboard.tsx:568:11"
					}), label]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12.5px] font-bold tabular-nums text-foreground",
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:571:9",
					children: formatTaka(amount)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 w-full rounded-full bg-muted overflow-hidden",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:573:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-2 rounded-full transition-all duration-700 ${color}`,
					style: { width: `${pct}%` },
					"data-tsd-source": "/src/routes/manager.dashboard.tsx:574:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 text-[11px] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.dashboard.tsx:576:7",
				children: [pct, "% of total revenue"]
			})
		]
	});
}
//#endregion
export { ManagerDashboard as component };
