import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Dt as FileText, H as Receipt, L as RotateCcw, Sn as ArrowLeft, U as Printer, V as ReceiptText, _ as TriangleAlert, a as Wallet, d as UserPlus, et as PackageCheck, hn as BanknoteArrowUp, ht as Layers, pn as BellRing, q as Phone, rn as CalendarClock, u as UserRound, vn as BadgeCheck, wt as Globe, xt as History } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { h as PAYMENT_STATUS_TONE, r as INVOICE_STATUS_TONE, v as findPackage } from "./payment-data-BZ055nra.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as Route$7 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as PaymentSummaryCard, i as PaymentAvatar } from "./payment-summary-card-j0rMUhW-.mjs";
import { t as InvoiceCard } from "./invoice-card-BJExJrwD.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-DbWH0prG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments._paymentId-Bjfth1jH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Serializable icon keys are mapped to components here, in the view layer. */
var ICONS = {
	registration: UserPlus,
	package: PackageCheck,
	session: ReceiptText,
	reminder: BellRing,
	refund: RotateCcw,
	online: Globe
};
var TONE = {
	success: "border-success/40 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/40 bg-danger/12 text-danger",
	info: "border-primary/40 bg-primary/10 text-primary",
	neutral: "border-border bg-muted text-muted-foreground"
};
function PaymentTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		"data-tsd-source": "/src/components/payments/payment-timeline.tsx:36:5",
		children: items.map((item) => {
			const Icon = ICONS[item.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				"data-tsd-source": "/src/components/payments/payment-timeline.tsx:40:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border", TONE[item.tone]),
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-timeline.tsx:41:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/payments/payment-timeline.tsx:48:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						"data-tsd-source": "/src/components/payments/payment-timeline.tsx:50:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/payments/payment-timeline.tsx:51:15",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/payments/payment-timeline.tsx:52:15",
							children: formatDate(item.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-timeline.tsx:54:13",
						children: item.description
					}),
					typeof item.amount === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-[13px] font-semibold tabular-nums text-foreground",
						"data-tsd-source": "/src/components/payments/payment-timeline.tsx:58:15",
						children: formatTaka(item.amount)
					}) : null
				]
			}, item.id);
		})
	});
}
var REMINDER_TONE = {
	"Not sent": "neutral",
	"Reminder sent": "warning",
	"Reminder due": "info",
	Escalated: "danger"
};
/** Outstanding balance panel with reminder state and quick actions. */
function DueManagementCard({ record, onCollect, className }) {
	const hasDue = record.due > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl border p-5 shadow-card", hasDue ? "border-danger/30 bg-danger/5" : "border-border bg-card", className),
		"aria-label": "Due management",
		"data-tsd-source": "/src/components/payments/due-management-card.tsx:29:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				"data-tsd-source": "/src/components/payments/due-management-card.tsx:37:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", hasDue ? "bg-danger/12 text-danger" : "bg-success/12 text-success"),
					"data-tsd-source": "/src/components/payments/due-management-card.tsx:38:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:44:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/payments/due-management-card.tsx:46:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:47:11",
						children: "Due Management"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:48:11",
						children: hasDue ? "Follow-up required" : "All invoices settled"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-[26px] font-semibold leading-none tracking-tight tabular-nums", hasDue ? "text-danger" : "text-foreground"),
				"data-tsd-source": "/src/components/payments/due-management-card.tsx:54:7",
				children: formatTaka(record.due)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/payments/due-management-card.tsx:62:7",
				children: "Outstanding amount"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				"data-tsd-source": "/src/components/payments/due-management-card.tsx:64:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:65:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:66:11",
							children: "Days overdue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: cn("font-medium tabular-nums", record.daysOverdue > 0 ? "text-danger" : "text-muted-foreground"),
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:67:11",
							children: record.daysOverdue > 0 ? `${record.daysOverdue} days` : "—"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:76:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:77:11",
							children: "Next due date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-foreground",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:78:11",
							children: record.nextDueDate === "—" ? "—" : formatDate(record.nextDueDate)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:82:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:83:11",
							children: "Reminder status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:84:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: REMINDER_TONE[record.reminderStatus],
								label: record.reminderStatus,
								"data-tsd-source": "/src/components/payments/due-management-card.tsx:85:13"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-2.5 border-t border-border pt-4 sm:grid-cols-2",
				"data-tsd-source": "/src/components/payments/due-management-card.tsx:93:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: !hasDue,
						onClick: onCollect,
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:94:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BanknoteArrowUp, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:95:11"
						}), "Collect Due"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:98:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:99:11"
						}), "Print Reminder"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "sm:col-span-2",
						disabled: !hasDue,
						"data-tsd-source": "/src/components/payments/due-management-card.tsx:102:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/due-management-card.tsx:103:11"
						}), "Send SMS reminder"]
					})
				]
			})
		]
	});
}
function PaymentProfilePage() {
	const { profile } = Route$7.useLoaderData();
	const { primary, payments, totalBilled, totalPaid, totalDue, collectionRate } = profile;
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const pkg = findPackage(primary.packageId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:97:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${primary.patientName} — Payment Profile`,
				description: `${primary.receiptNo} · ${primary.packageName} · ${primary.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Payment & Billing",
						to: "/manager/payments"
					},
					{ label: primary.receiptNo }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/payments",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCollectOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Payment"]
					})
				] }),
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:98:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 sm:p-6",
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:127:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",
					"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:128:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-4",
						"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:129:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
							name: primary.patientName,
							className: "h-14 w-14 text-sm",
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:130:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:131:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate text-lg font-semibold tracking-tight text-foreground",
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:132:15",
									children: primary.patientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 truncate text-[13px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:135:15",
									children: [
										primary.patientCode,
										" · ",
										primary.patientAge,
										" yrs · ",
										primary.guardianName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:138:15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: PAYMENT_STATUS_TONE[primary.status],
											label: primary.status,
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:139:17"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: INVOICE_STATUS_TONE[primary.invoiceStatus],
											label: `Invoice ${primary.invoiceStatus}`,
											dot: false,
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:143:17"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: "info",
											label: primary.packageType,
											dot: false,
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:148:17"
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-4 sm:grid-cols-4 lg:shrink-0",
						"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:153:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total billed",
								value: formatTaka(totalBilled),
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:154:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total paid",
								value: formatTaka(totalPaid),
								tone: "success",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:155:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Outstanding",
								value: formatTaka(totalDue),
								tone: totalDue > 0 ? "danger" : "muted",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:156:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Collection rate",
								value: `${collectionRate}%`,
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:161:13"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 border-t border-border pt-4",
					"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:164:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:165:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:166:13",
							children: "Collected against billed amount"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-foreground",
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:167:13",
							children: [collectionRate, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: collectionRate,
						className: "mt-1.5",
						"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:169:11"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:173:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:174:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Patient Information",
							icon: UserRound,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:175:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:176:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient",
										value: primary.patientName,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:177:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: primary.patientCode,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:178:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: primary.guardianName,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:179:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Contact",
										value: primary.patientPhone,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:180:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: primary.branch,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:181:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Collected by",
										value: primary.collectedBy,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:182:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-4",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:184:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									asChild: true,
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:185:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/patients/$patientId",
										params: { patientId: primary.patientId },
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:186:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:187:19"
										}), "Open patient profile"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:191:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:192:17"
									}), "Call guardian"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Package Information",
							icon: Layers,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:198:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:199:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Package",
										value: primary.packageName,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:200:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Payment model",
										value: primary.packageType,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:201:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Package price",
										value: formatTaka(primary.amount),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:202:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Discount",
										value: primary.discount > 0 ? `− ${formatTaka(primary.discount)}` : "—",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:203:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Duration",
										value: pkg?.durationLabel ?? "—",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:207:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expiry",
										value: pkg?.expiry ?? "—",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:208:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sessions",
										value: `${primary.totalSessions - primary.remainingSessions} of ${primary.totalSessions} used`,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:209:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Reference",
										value: primary.reference,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:213:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Payment Timeline",
							icon: History,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:217:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentTimeline, {
								items: primary.timeline,
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:218:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Invoice History",
							icon: FileText,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:221:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:222:13",
								children: payments.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceCard, {
									record,
									"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:224:17"
								}, record.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Payment Statistics",
							icon: BadgeCheck,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:229:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:230:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Receipts issued",
										value: String(payments.length),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:231:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Average payment",
										value: formatTaka(payments.length === 0 ? 0 : Math.round(totalPaid / payments.length)),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:232:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Last payment",
										value: formatDate(primary.paymentDate),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:238:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Preferred method",
										value: primary.method,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:239:15"
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:247:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSummaryCard, {
							packagePrice: primary.amount,
							discount: primary.discount,
							paid: primary.paid,
							due: primary.due,
							totalSessions: primary.totalSessions,
							remainingSessions: primary.remainingSessions,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:248:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DueManagementCard, {
							record: primary,
							onCollect: () => setCollectOpen(true),
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:257:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Next billing",
							description: "Upcoming cycle for this patient",
							icon: CalendarClock,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:259:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "space-y-2.5 text-[13px]",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:265:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:266:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:267:17",
											children: "Next due date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium text-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:268:17",
											children: primary.nextDueDate === "—" ? "—" : formatDate(primary.nextDueDate)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:272:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:273:17",
											children: "Remaining sessions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:274:17",
											children: primary.remainingSessions
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:278:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:279:17",
											children: "Remarks"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "max-w-[60%] text-right text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:280:17",
											children: primary.remarks
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Quick actions",
							description: "Billing shortcuts for this patient",
							icon: Receipt,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:287:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2.5",
								"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:293:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => setCollectOpen(true),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:294:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:295:17"
										}), "Collect payment"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => window.print(),
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:298:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:299:17"
										}), "Print receipt"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										asChild: true,
										"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:302:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/manager/payments",
											search: { tab: "history" },
											"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:303:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
												className: "h-4 w-4",
												"aria-hidden": "true",
												"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:304:19"
											}), "View payment history"]
										})
									})
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen,
				defaultPackageId: primary.packageId,
				defaultPatientId: primary.patientId,
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:313:7"
			}, String(collectOpen))
		]
	});
}
function Section({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border bg-card p-5 shadow-card sm:p-6",
		"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:334:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-2.5",
			"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:335:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:336:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-[18px] w-[18px]",
					"aria-hidden": "true",
					"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:337:11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-foreground",
				"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:339:9",
				children: title
			})]
		}), children]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:348:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:349:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 break-words text-[13.5px] text-foreground",
			"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:350:7",
			children: value
		})]
	});
}
function Stat({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:365:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:366:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: tone === "success" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-success" : tone === "danger" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-danger" : tone === "muted" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-muted-foreground" : "mt-1 truncate text-[15px] font-semibold tabular-nums text-foreground",
			"data-tsd-source": "/src/routes/manager.payments.$paymentId.tsx:367:7",
			children: value
		})]
	});
}
//#endregion
export { PaymentProfilePage as component };
