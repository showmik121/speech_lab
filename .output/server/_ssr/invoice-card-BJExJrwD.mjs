import { Dt as FileText, U as Printer, jt as Download, kt as Eye } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { r as INVOICE_STATUS_TONE } from "./payment-data-BZ055nra.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invoice-card-BJExJrwD.js
var import_jsx_runtime = require_jsx_runtime();
/** Printable invoice summary card used in the Invoices tab. */
function InvoiceCard({ record }) {
	const payable = record.amount - record.discount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex h-full flex-col p-5",
		"data-tsd-source": "/src/components/payments/invoice-card.tsx:15:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/payments/invoice-card.tsx:16:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					"data-tsd-source": "/src/components/payments/invoice-card.tsx:17:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:18:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:19:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:21:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[13px] font-semibold text-foreground",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:22:13",
							children: record.invoiceNo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:25:13",
							children: ["Issued ", formatDate(record.paymentDate)]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: INVOICE_STATUS_TONE[record.invoiceStatus],
					label: record.invoiceStatus,
					"data-tsd-source": "/src/components/payments/invoice-card.tsx:30:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				"data-tsd-source": "/src/components/payments/invoice-card.tsx:36:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Patient",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:37:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manager/patients/$patientId",
							params: { patientId: record.patientId },
							className: "font-medium text-foreground hover:underline",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:38:11",
							children: record.patientName
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Package",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:46:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:47:11",
							children: record.packageName
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Payable",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:49:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:50:11",
							children: formatTaka(payable)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Paid",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:54:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-success",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:55:11",
							children: formatTaka(record.paid)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Due",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:57:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: record.due > 0 ? "tabular-nums font-medium text-danger" : "tabular-nums text-muted-foreground",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:58:11",
							children: record.due > 0 ? formatTaka(record.due) : "—"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4",
				"data-tsd-source": "/src/components/payments/invoice-card.tsx:70:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:71:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:72:11"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						disabled: true,
						title: "PDF export coming soon",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:75:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:76:11"
						}), "Download PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "ml-auto",
						"data-tsd-source": "/src/components/payments/invoice-card.tsx:79:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/payments/$paymentId",
							params: { paymentId: record.id },
							"data-tsd-source": "/src/components/payments/invoice-card.tsx:80:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/payments/invoice-card.tsx:81:13"
							}), "Details"]
						})
					})
				]
			})
		]
	});
}
function Row({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		"data-tsd-source": "/src/components/payments/invoice-card.tsx:92:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			"data-tsd-source": "/src/components/payments/invoice-card.tsx:93:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 truncate text-right",
			"data-tsd-source": "/src/components/payments/invoice-card.tsx:94:7",
			children
		})]
	});
}
//#endregion
export { InvoiceCard as t };
