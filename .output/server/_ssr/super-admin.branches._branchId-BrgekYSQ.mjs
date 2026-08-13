import { $t as ChartColumn, Dt as FileText, En as Activity, Lt as Clock, Sn as ArrowLeft, X as PencilLine, ct as Mail, gt as KeyRound, in as CalendarCheck, j as Settings2, m as UserCog, mn as Banknote, on as Building2, q as Phone, s as Users, st as MapPin } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { i as BRANCH_REVENUE_TREND, n as BRANCH_ACTIVITIES, o as BRANCH_STATUS_TONE } from "./branch-data-DT5AkdAt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as Route } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as initialsOf, i as formatNumber, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as YAxis, l as CartesianGrid, o as XAxis, s as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-CqJPT5Iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.branches._branchId-BrgekYSQ.js
var import_jsx_runtime = require_jsx_runtime();
var revenueConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-1)"
	},
	collection: {
		label: "Collection",
		color: "var(--chart-2)"
	}
};
function BranchDetailPage() {
	const { branch } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:89:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: branch.name,
				description: `${branch.code} · ${branch.city}, ${branch.division} division`,
				breadcrumbs: [
					{
						label: "Super Admin",
						to: "/super-admin"
					},
					{
						label: "Branch Management",
						to: "/super-admin/branches"
					},
					{ label: branch.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/super-admin/branches",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Edit Branch"] })] }),
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:90:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branch statistics",
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:114:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Users,
						label: "Patients",
						value: formatNumber(branch.patients),
						tone: "primary",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:115:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: UserCog,
						label: "Staff members",
						value: String(branch.staff),
						tone: "primary",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:116:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Banknote,
						label: "Monthly revenue",
						value: formatTaka(branch.monthlyRevenue),
						tone: "success",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:117:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: CalendarCheck,
						label: "Sessions today",
						value: String(branch.sessions),
						tone: "warning",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:123:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:131:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Branch information",
					description: "Registered contact and location details",
					icon: Building2,
					className: "xl:col-span-2",
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:132:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-5 sm:grid-cols-2",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:138:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: MapPin,
								label: "Address",
								value: branch.address,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:139:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Phone,
								label: "Phone",
								value: branch.phone,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:140:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Mail,
								label: "Email",
								value: branch.email,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:141:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Clock,
								label: "Working hours",
								value: branch.workingHours,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:142:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: CalendarCheck,
								label: "Created",
								value: formatDate(branch.createdAt),
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:143:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:144:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:145:15",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1.5",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:146:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: BRANCH_STATUS_TONE[branch.status],
										label: branch.status,
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:147:17"
									})
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
					title: "Manager information",
					description: "Primary point of contact",
					icon: UserCog,
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:153:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:158:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary",
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:159:13",
							children: initialsOf(branch.manager.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:162:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:163:15",
								children: branch.manager.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:166:15",
								children: ["Manager since ", formatDate(branch.manager.since)]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-4",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:171:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Phone,
								label: "Phone",
								value: branch.manager.phone,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:172:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Mail,
								label: "Email",
								value: branch.manager.email,
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:173:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:174:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
									className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:175:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:176:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:177:17",
										children: "Manager unique key"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1.5",
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:178:17",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[12px] font-medium text-foreground",
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:179:19",
											children: branch.manager.managerId
										})
									})]
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:189:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Revenue overview",
					description: "Revenue vs. collection, last 6 months",
					icon: ChartColumn,
					className: "xl:col-span-2",
					contentClassName: "flex flex-col",
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:190:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
						config: revenueConfig,
						className: "aspect-auto h-full min-h-[260px] w-full flex-1",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:197:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: BRANCH_REVENUE_TREND,
							margin: {
								top: 8,
								right: 8,
								bottom: 0,
								left: 0
							},
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:198:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", {
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:199:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "branchRevenueFill",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:200:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--chart-1)",
											stopOpacity: .3,
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:201:19"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "var(--chart-1)",
											stopOpacity: .02,
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:202:19"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "branchCollectionFill",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:204:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--chart-2)",
											stopOpacity: .26,
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:205:19"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "var(--chart-2)",
											stopOpacity: .02,
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:206:19"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									vertical: false,
									strokeDasharray: "4 4",
									className: "stroke-border",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:209:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									tickLine: false,
									axisLine: false,
									tickMargin: 10,
									fontSize: 12,
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:210:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tickLine: false,
									axisLine: false,
									width: 48,
									fontSize: 12,
									tickFormatter: (value) => `${Math.round(value / 1e3)}k`,
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:211:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
									content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" }),
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:218:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--chart-1)",
									strokeWidth: 2,
									isAnimationActive: false,
									fill: "url(#branchRevenueFill)",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:219:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "collection",
									stroke: "var(--chart-2)",
									strokeWidth: 2,
									isAnimationActive: false,
									fill: "url(#branchCollectionFill)",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:227:15"
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:239:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
						title: "Patient summary",
						description: "Caseload snapshot",
						icon: Users,
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:240:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, {
							rows: [
								{
									label: "Active patients",
									value: formatNumber(branch.patients)
								},
								{
									label: "New this month",
									value: String(Math.round(branch.patients * .12))
								},
								{
									label: "Sessions today",
									value: String(branch.sessions)
								},
								{
									label: "Today's collection",
									value: formatTaka(branch.todaysCollection)
								}
							],
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:241:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
						title: "Staff summary",
						description: "Team composition",
						icon: UserCog,
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:251:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, {
							rows: [
								{
									label: "Total staff",
									value: String(branch.staff)
								},
								{
									label: "Therapists",
									value: String(branch.therapists)
								},
								{
									label: "Support staff",
									value: String(branch.staff - branch.therapists)
								},
								{
									label: "Patients per therapist",
									value: String(Math.round(branch.patients / branch.therapists))
								}
							],
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:252:13"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:267:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Recent activities",
					description: "Latest events at this branch",
					icon: Activity,
					className: "xl:col-span-2",
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:268:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-5",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:274:11",
						children: BRANCH_ACTIVITIES.map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3.5",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:278:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/40 text-muted-foreground",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:279:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:280:21"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 border-b border-border pb-4 last:border-0 last:pb-0",
									"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:282:19",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:283:21",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-muted-foreground",
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:284:21",
											children: item.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[12px] text-muted-foreground/80",
											"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:285:21",
											children: item.time
										})
									]
								})]
							}, item.id);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Quick actions",
					description: "Common branch operations",
					icon: Settings2,
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:293:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:294:11",
						children: [
							{
								label: "Assign Manager",
								icon: UserCog
							},
							{
								label: "View Reports",
								icon: FileText
							},
							{
								label: "Performance",
								icon: ChartColumn
							},
							{
								label: "Branch Settings",
								icon: Settings2
							}
						].map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-3.5 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:301:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, {
								className: "h-4 w-4 text-primary",
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:306:17"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-medium text-foreground",
								"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:307:17",
								children: action.label
							})]
						}, action.label))
					})
				})]
			})
		]
	});
}
function Stat({ icon: Icon, label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex items-center gap-3.5 p-5",
		"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:335:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg ${tone === "success" ? "bg-success/12 text-success" : tone === "warning" ? "bg-warning/15 text-warning" : "bg-primary/10 text-primary"}`,
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:336:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-[18px] w-[18px]",
				"aria-hidden": "true",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:337:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:339:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:340:9",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-lg font-semibold tabular-nums text-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:341:9",
				children: value
			})]
		})]
	});
}
function Field({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:357:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:358:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:359:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:360:9",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm text-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:361:9",
				children: value
			})]
		})]
	});
}
function SummaryRows({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "space-y-3",
		"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:369:5",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:371:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[13px] text-muted-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:375:11",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm font-medium tabular-nums text-foreground",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:376:11",
				children: row.value
			})]
		}, row.label))
	});
}
//#endregion
export { BranchDetailPage as component };
