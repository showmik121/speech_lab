import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Dt as FileText, Ft as Columns3, H as Receipt, K as Plus, P as Search, Zt as ChartPie, a as Wallet, ht as Layers, jt as Download, v as TrendingUp, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { _ as TODAY_ISO, d as PAYMENT_METHODS, f as PAYMENT_PACKAGES, g as PAYMENT_TABS, h as PAYMENT_STATUS_TONE, i as METHOD_SPLIT, l as PAYMENT_DATE_RANGES, m as PAYMENT_STATUSES, n as COLLECTION_SERIES, p as PAYMENT_RECORDS, s as PACKAGE_TYPES, u as PAYMENT_KPIS } from "./payment-data-BZ055nra.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as Route$8 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, n as PieChart, o as XAxis, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { n as PackageCard, t as CreatePackageDialog } from "./create-package-dialog-CNNzBl43.mjs";
import { i as PaymentAvatar, n as HISTORY_COLUMNS, o as PaymentTable, r as PAYMENT_COLUMNS, t as DEFAULT_PAYMENT_COLUMNS } from "./payment-summary-card-j0rMUhW-.mjs";
import { t as InvoiceCard } from "./invoice-card-BJExJrwD.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-DbWH0prG.mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-CqJPT5Iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments.index-1BTQo_qx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Read-only enterprise ledger of every collected payment. */
function PaymentHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "620px" },
		"data-tsd-source": "/src/components/payments/payment-history-table.tsx:22:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/payments/payment-history-table.tsx:23:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/payments/payment-history-table.tsx:24:11",
					children: "Payment history"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/payments/payment-history-table.tsx:25:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:26:13",
						children: HISTORY_COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/payments/payment-history-table.tsx:28:17",
							children: column.label
						}, column.key))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/payments/payment-history-table.tsx:41:11",
					children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:43:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:47:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/payments/$paymentId",
									params: { paymentId: record.id },
									className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
									"data-tsd-source": "/src/components/payments/payment-history-table.tsx:48:19",
									children: record.receiptNo
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:56:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									"data-tsd-source": "/src/components/payments/payment-history-table.tsx:57:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
										name: record.patientName,
										className: "h-8 w-8",
										"data-tsd-source": "/src/components/payments/payment-history-table.tsx:58:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										"data-tsd-source": "/src/components/payments/payment-history-table.tsx:59:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium text-foreground",
											"data-tsd-source": "/src/components/payments/payment-history-table.tsx:60:23",
											children: record.patientName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-[12px] text-muted-foreground",
											"data-tsd-source": "/src/components/payments/payment-history-table.tsx:63:23",
											children: record.patientCode
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:69:17",
								children: record.packageName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:72:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "info",
									label: record.packageType,
									dot: false,
									"data-tsd-source": "/src/components/payments/payment-history-table.tsx:73:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-right text-sm tabular-nums text-foreground",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:75:17",
								children: formatTaka(record.paid)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:78:17",
								children: record.method
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:81:17",
								children: record.collectedBy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:84:17",
								children: formatDate(record.paymentDate)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/payments/payment-history-table.tsx:87:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: PAYMENT_STATUS_TONE[record.status],
									label: record.status,
									"data-tsd-source": "/src/components/payments/payment-history-table.tsx:88:19"
								})
							})
						]
					}, record.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/payments/payment-history-table.tsx:99:7",
		children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/payments/payment-history-table.tsx:101:11",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/payments/payment-history-table.tsx:102:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/payments/payment-history-table.tsx:103:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/manager/payments/$paymentId",
						params: { paymentId: record.id },
						className: "block truncate text-sm font-medium text-foreground hover:underline",
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:104:17",
						children: record.patientName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-mono text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:111:17",
						children: record.receiptNo
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-sm font-semibold tabular-nums text-foreground",
					"data-tsd-source": "/src/components/payments/payment-history-table.tsx:115:15",
					children: formatTaka(record.paid)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex flex-wrap items-center gap-2",
				"data-tsd-source": "/src/components/payments/payment-history-table.tsx:119:13",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: PAYMENT_STATUS_TONE[record.status],
						label: record.status,
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:120:15"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "info",
						label: record.packageType,
						dot: false,
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:121:15"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-history-table.tsx:122:15",
						children: [
							record.method,
							" · ",
							formatDate(record.paymentDate)
						]
					})
				]
			})]
		}, record.id))
	})] });
}
var collectionConfig = {
	collection: {
		label: "Collection",
		color: "var(--chart-1)"
	},
	due: {
		label: "Outstanding due",
		color: "var(--chart-3)"
	}
};
var methodConfig = {
	amount: { label: "Amount" },
	Cash: {
		label: "Cash",
		color: "var(--chart-1)"
	},
	"Mobile Banking": {
		label: "Mobile Banking",
		color: "var(--chart-2)"
	},
	Card: {
		label: "Card",
		color: "var(--chart-3)"
	},
	"Bank Transfer": {
		label: "Bank Transfer",
		color: "var(--chart-4)"
	}
};
function CollectionTrendChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Collection vs Due",
		description: "Monthly collection and outstanding balance",
		icon: TrendingUp,
		contentClassName: "flex flex-col",
		"data-tsd-source": "/src/components/payments/collection-charts.tsx:32:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap items-center gap-x-6 gap-y-2",
			"data-tsd-source": "/src/components/payments/collection-charts.tsx:38:7",
			children: Object.entries(collectionConfig).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/payments/collection-charts.tsx:40:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full",
					style: { backgroundColor: item.color },
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/payments/collection-charts.tsx:44:13"
				}), item.label]
			}, key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: collectionConfig,
			className: "aspect-auto h-full min-h-[260px] w-full flex-1",
			"data-tsd-source": "/src/components/payments/collection-charts.tsx:53:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: COLLECTION_SERIES,
				margin: {
					left: 4,
					right: 8,
					top: 4,
					bottom: 0
				},
				"data-tsd-source": "/src/components/payments/collection-charts.tsx:57:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						strokeDasharray: "4 4",
						className: "stroke-border",
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:58:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "period",
						tickLine: false,
						axisLine: false,
						tickMargin: 10,
						fontSize: 12,
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:59:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						width: 52,
						fontSize: 12,
						tickFormatter: (value) => `${Math.round(value / 1e3)}k`,
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:60:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
							formatter: (value) => formatTaka(Number(value)),
							indicator: "dot"
						}),
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:67:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "collection",
						fill: "var(--chart-1)",
						radius: [
							4,
							4,
							0,
							0
						],
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:72:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "due",
						fill: "var(--chart-3)",
						radius: [
							4,
							4,
							0,
							0
						],
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:73:11"
					})
				]
			})
		})]
	});
}
function MethodSplitChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Collection by Method",
		description: "Share of collection per payment channel",
		icon: ChartPie,
		contentClassName: "flex flex-col",
		"data-tsd-source": "/src/components/payments/collection-charts.tsx:82:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: methodConfig,
			className: "aspect-auto h-full min-h-[220px] w-full flex-1",
			"data-tsd-source": "/src/components/payments/collection-charts.tsx:88:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
				"data-tsd-source": "/src/components/payments/collection-charts.tsx:92:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { formatter: (value) => formatTaka(Number(value)) }),
					"data-tsd-source": "/src/components/payments/collection-charts.tsx:93:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: METHOD_SPLIT,
					dataKey: "amount",
					nameKey: "method",
					innerRadius: 52,
					outerRadius: 82,
					"data-tsd-source": "/src/components/payments/collection-charts.tsx:96:11",
					children: METHOD_SPLIT.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
						fill: `var(--chart-${index + 1})`,
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:98:15"
					}, entry.method))
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2 border-t border-border pt-4",
			"data-tsd-source": "/src/components/payments/collection-charts.tsx:103:7",
			children: METHOD_SPLIT.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 text-[12.5px]",
				"data-tsd-source": "/src/components/payments/collection-charts.tsx:105:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex min-w-0 items-center gap-2 text-muted-foreground",
					"data-tsd-source": "/src/components/payments/collection-charts.tsx:109:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: `var(--chart-${index + 1})` },
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:110:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						"data-tsd-source": "/src/components/payments/collection-charts.tsx:115:15",
						children: entry.method
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 font-medium tabular-nums text-foreground",
					"data-tsd-source": "/src/components/payments/collection-charts.tsx:117:13",
					children: formatTaka(entry.amount)
				})]
			}, entry.method))
		})]
	});
}
var DEFAULT_PAYMENT_FILTERS = {
	search: "",
	type: "all",
	status: "all",
	method: "all",
	range: "all"
};
function PaymentFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn, searchPlaceholder = "Search patient, receipt, invoice or phone…" }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/payments/payment-filters.tsx:63:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/payments/payment-filters.tsx:64:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[400px]",
				"data-tsd-source": "/src/components/payments/payment-filters.tsx:65:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:66:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: searchPlaceholder,
					"aria-label": "Search payments",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:70:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/payments/payment-filters.tsx:80:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/payments/payment-filters.tsx:81:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:82:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/payments/payment-filters.tsx:88:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:89:13"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/payments/payment-filters.tsx:93:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:94:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/payments/payment-filters.tsx:95:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/payments/payment-filters.tsx:96:19"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:100:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/payments/payment-filters.tsx:101:17",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/payments/payment-filters.tsx:102:17" }),
								PAYMENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/payments/payment-filters.tsx:104:19",
									children: column.label
								}, column.key))
							]
						})]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/payments/payment-filters.tsx:119:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "package type",
					placeholder: "Package type",
					width: "w-[180px]",
					value: value.type,
					onChange: (next) => set({ type: next }),
					options: PACKAGE_TYPES,
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:120:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "payment status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: PAYMENT_STATUSES,
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:128:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "payment method",
					placeholder: "Method",
					width: "w-[180px]",
					value: value.method,
					onChange: (next) => set({ method: next }),
					options: PAYMENT_METHODS,
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:136:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:144:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by date",
						"data-tsd-source": "/src/components/payments/payment-filters.tsx:145:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date",
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:146:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						"data-tsd-source": "/src/components/payments/payment-filters.tsx:148:11",
						children: PAYMENT_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							"data-tsd-source": "/src/components/payments/payment-filters.tsx:150:15",
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_PAYMENT_FILTERS),
					"data-tsd-source": "/src/components/payments/payment-filters.tsx:157:9",
					children: "Clear"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange: onChange,
		"data-tsd-source": "/src/components/payments/payment-filters.tsx:186:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/payments/payment-filters.tsx:187:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/payments/payment-filters.tsx:188:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			"data-tsd-source": "/src/components/payments/payment-filters.tsx:190:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/payments/payment-filters.tsx:191:9",
				children: [
					"All ",
					label,
					"s"
				]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/payments/payment-filters.tsx:193:11",
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function PaymentBillingPage() {
	const { tab } = Route$8.useSearch();
	const navigate = Route$8.useNavigate();
	const activeTab = PAYMENT_TABS.some((item) => item.value === tab) ? tab : "packages";
	const [packageOpen, setPackageOpen] = (0, import_react.useState)(false);
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const [collectPackageId, setCollectPackageId] = (0, import_react.useState)();
	const [collectPatientId, setCollectPatientId] = (0, import_react.useState)();
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_PAYMENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_PAYMENT_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return PAYMENT_RECORDS.filter((record) => {
			return (!query || [
				record.patientName,
				record.patientCode,
				record.receiptNo,
				record.invoiceNo,
				record.patientPhone,
				record.guardianName,
				record.packageName
			].join(" ").toLowerCase().includes(query)) && (filters.type === "all" || record.packageType === filters.type) && (filters.status === "all" || record.status === filters.status) && (filters.method === "all" || record.method === filters.method) && withinRange(record.paymentDate, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	const toggleColumn = (key) => setVisibleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const openCollect = (packageId, patientId) => {
		setCollectPackageId(packageId);
		setCollectPatientId(patientId);
		setCollectOpen(true);
	};
	const resetFiltersButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		onClick: () => setFilters(DEFAULT_PAYMENT_FILTERS),
		"data-tsd-source": "/src/routes/manager.payments.index.tsx:135:5",
		children: "Reset filters"
	});
	const createPackageButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setPackageOpen(true),
		"data-tsd-source": "/src/routes/manager.payments.index.tsx:141:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/manager.payments.index.tsx:142:7"
		}), "Create Package"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.payments.index.tsx:148:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payment & Billing",
				description: "Manage packages, collect payments and monitor dues.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Payment & Billing" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setPackageOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Create Package"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => openCollect(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Payment"]
					})
				] }),
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:149:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Billing summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:174:7",
				children: PAYMENT_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.payments.index.tsx:179:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Collection analytics",
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:183:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionTrendChart, { "data-tsd-source": "/src/routes/manager.payments.index.tsx:184:9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodSplitChart, { "data-tsd-source": "/src/routes/manager.payments.index.tsx:185:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: (next) => navigate({ search: { tab: next } }),
				className: "min-w-0",
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:188:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-1 overflow-x-auto px-1 pb-1",
						"data-tsd-source": "/src/routes/manager.payments.index.tsx:193:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "w-max",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:194:11",
							children: PAYMENT_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: item.value,
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:196:15",
								children: item.label
							}, item.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "packages",
						className: "mt-6 space-y-6",
						"data-tsd-source": "/src/routes/manager.payments.index.tsx:204:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:205:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[13px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:206:13",
								children: [PAYMENT_PACKAGES.length, " packages across daily, session-wise, monthly and online booking models."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:210:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/packages",
									"data-tsd-source": "/src/routes/manager.payments.index.tsx:211:15",
									children: "Open package manager"
								})
							})]
						}), PAYMENT_PACKAGES.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: Layers,
							title: "No Payments Yet",
							description: "Create your first package and collect payment.",
							action: createPackageButton,
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:215:13"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:222:13",
							children: PAYMENT_PACKAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
								item,
								onCollect: (pkg) => openCollect(pkg.id),
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:224:17"
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "collection",
						className: "mt-6",
						"data-tsd-source": "/src/routes/manager.payments.index.tsx:235:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"aria-label": "Payment collection",
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:236:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentFilters, {
								value: filters,
								onChange: (next) => {
									setFilters(next);
									setPage(1);
								},
								onRefresh: refresh,
								isRefreshing: refreshing,
								visibleColumns,
								onToggleColumn: toggleColumn,
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:240:13"
							}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Receipt,
								title: "No Payments Yet",
								description: "Create your first package and collect payment.",
								action: createPackageButton,
								secondaryAction: resetFiltersButton,
								className: "rounded-none border-0 shadow-none",
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:253:15"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentTable, {
								rows,
								visibleColumns,
								onCollect: (record) => openCollect(record.packageId, record.patientId),
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:263:17"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border px-4 py-3.5 sm:px-5",
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:268:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
									page: currentPage,
									pageSize: PAGE_SIZE,
									total: filtered.length,
									onPageChange: setPage,
									"data-tsd-source": "/src/routes/manager.payments.index.tsx:269:19"
								})
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "invoices",
						className: "mt-6 space-y-6",
						"data-tsd-source": "/src/routes/manager.payments.index.tsx:282:9",
						children: PAYMENT_RECORDS.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: FileText,
							title: "No Payments Yet",
							description: "Create your first package and collect payment.",
							action: createPackageButton,
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:284:13"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:291:13",
							children: PAYMENT_RECORDS.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceCard, {
								record,
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:293:17"
							}, record.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "history",
						className: "mt-6",
						"data-tsd-source": "/src/routes/manager.payments.index.tsx:300:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"aria-label": "Payment history",
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							"data-tsd-source": "/src/routes/manager.payments.index.tsx:301:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3.5 sm:px-5",
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:305:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/manager.payments.index.tsx:306:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-sm font-semibold text-foreground",
										"data-tsd-source": "/src/routes/manager.payments.index.tsx:307:17",
										children: "Payment history"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.payments.index.tsx:308:17",
										children: "Complete ledger of every receipt issued by this branch."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									"data-tsd-source": "/src/routes/manager.payments.index.tsx:312:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.payments.index.tsx:313:17"
									}), "Export ledger"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentHistoryTable, {
								rows: PAYMENT_RECORDS,
								"data-tsd-source": "/src/routes/manager.payments.index.tsx:317:13"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePackageDialog, {
				open: packageOpen,
				onOpenChange: setPackageOpen,
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:322:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen,
				defaultPackageId: collectPackageId,
				defaultPatientId: collectPatientId,
				"data-tsd-source": "/src/routes/manager.payments.index.tsx:323:7"
			}, `${collectPackageId ?? "none"}-${collectPatientId ?? "none"}-${String(collectOpen)}`)
		]
	});
}
//#endregion
export { PaymentBillingPage as component };
