import { At as Ellipsis, H as Receipt, N as Send, U as Printer, a as Wallet, hn as BanknoteArrowUp, kt as Eye } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { h as PAYMENT_STATUS_TONE } from "./payment-data-BZ055nra.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-summary-card-j0rMUhW-.js
var import_jsx_runtime = require_jsx_runtime();
var PAYMENT_COLUMNS = [
	{
		key: "receiptNo",
		label: "Receipt No",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "packageName",
		label: "Package",
		hideable: true
	},
	{
		key: "amount",
		label: "Amount",
		hideable: true,
		align: "right"
	},
	{
		key: "discount",
		label: "Discount",
		hideable: true,
		align: "right"
	},
	{
		key: "paid",
		label: "Paid",
		hideable: true,
		align: "right"
	},
	{
		key: "due",
		label: "Due",
		hideable: true,
		align: "right"
	},
	{
		key: "method",
		label: "Payment Method",
		hideable: true
	},
	{
		key: "paymentDate",
		label: "Payment Date",
		hideable: true
	},
	{
		key: "collectedBy",
		label: "Collected By",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_PAYMENT_COLUMNS = PAYMENT_COLUMNS.map((column) => column.key);
var HISTORY_COLUMNS = [
	{
		key: "receiptNo",
		label: "Receipt"
	},
	{
		key: "patient",
		label: "Patient"
	},
	{
		key: "packageName",
		label: "Package"
	},
	{
		key: "packageType",
		label: "Payment Type"
	},
	{
		key: "amount",
		label: "Amount",
		align: "right"
	},
	{
		key: "method",
		label: "Method"
	},
	{
		key: "collectedBy",
		label: "Collected By"
	},
	{
		key: "paymentDate",
		label: "Date"
	},
	{
		key: "status",
		label: "Status"
	}
];
function PaymentAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/payments/payment-table.tsx:38:5",
		children: initialsOf(name)
	});
}
function PaymentTable({ rows, visibleColumns, onCollect }) {
	const columns = PAYMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/payments/payment-table.tsx:64:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/payments/payment-table.tsx:65:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/payments/payment-table.tsx:66:11",
					children: "Payment collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/payments/payment-table.tsx:67:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:68:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/payments/payment-table.tsx:70:17",
							children: column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:81:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/payments/payment-table.tsx:86:11",
					children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:88:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/payments/payment-table.tsx:93:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentCell, {
								column: column.key,
								record,
								"data-tsd-source": "/src/components/payments/payment-table.tsx:100:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:103:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentRowActions, {
								record,
								onCollect,
								"data-tsd-source": "/src/components/payments/payment-table.tsx:104:19"
							})
						})]
					}, record.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/payments/payment-table.tsx:113:7",
		children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:115:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:116:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
					name: record.patientName,
					"data-tsd-source": "/src/components/payments/payment-table.tsx:117:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/payments/payment-table.tsx:118:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:119:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/payments/payment-table.tsx:120:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/payments/$paymentId",
									params: { paymentId: record.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/payments/payment-table.tsx:121:21",
									children: record.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/payments/payment-table.tsx:128:21",
									children: [
										record.receiptNo,
										" · ",
										record.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentRowActions, {
								record,
								onCollect,
								"data-tsd-source": "/src/components/payments/payment-table.tsx:132:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:135:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[record.status],
								label: record.status,
								"data-tsd-source": "/src/components/payments/payment-table.tsx:136:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: record.packageType,
								dot: false,
								"data-tsd-source": "/src/components/payments/payment-table.tsx:140:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:143:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Package",
									value: record.packageName,
									"data-tsd-source": "/src/components/payments/payment-table.tsx:144:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Amount",
									value: formatTaka(record.amount),
									"data-tsd-source": "/src/components/payments/payment-table.tsx:145:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Paid",
									value: formatTaka(record.paid),
									"data-tsd-source": "/src/components/payments/payment-table.tsx:146:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Due",
									value: formatTaka(record.due),
									"data-tsd-source": "/src/components/payments/payment-table.tsx:147:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Method",
									value: record.method,
									"data-tsd-source": "/src/components/payments/payment-table.tsx:148:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Date",
									value: formatDate(record.paymentDate),
									"data-tsd-source": "/src/components/payments/payment-table.tsx:149:19"
								})
							]
						})
					]
				})]
			})
		}, record.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/payments/payment-table.tsx:162:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:163:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:164:7",
			children: value
		})]
	});
}
function PaymentCell({ column, record }) {
	switch (column) {
		case "receiptNo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/payments/$paymentId",
			params: { paymentId: record.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:179:9",
			children: record.receiptNo
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:189:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
				name: record.patientName,
				"data-tsd-source": "/src/components/payments/payment-table.tsx:190:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:191:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: record.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					"data-tsd-source": "/src/components/payments/payment-table.tsx:192:13",
					children: record.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/payments/payment-table.tsx:199:13",
					children: [
						record.patientCode,
						" · ",
						record.patientPhone
					]
				})]
			})]
		});
		case "packageName": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:207:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:208:11",
				children: record.packageName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:209:11",
				children: record.packageType
			})]
		});
		case "amount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:214:9",
			children: formatTaka(record.amount)
		});
		case "discount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:220:9",
			children: record.discount > 0 ? `− ${formatTaka(record.discount)}` : "—"
		});
		case "paid": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium tabular-nums text-success",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:226:9",
			children: formatTaka(record.paid)
		});
		case "due": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("whitespace-nowrap font-medium tabular-nums", record.due > 0 ? "text-danger" : "text-muted-foreground"),
			"data-tsd-source": "/src/components/payments/payment-table.tsx:232:9",
			children: record.due > 0 ? formatTaka(record.due) : "—"
		});
		case "method": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:243:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-nowrap text-foreground",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:244:11",
				children: record.method
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[11.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/payments/payment-table.tsx:245:11",
				children: record.reference
			})]
		});
		case "paymentDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:252:9",
			children: formatDate(record.paymentDate)
		});
		case "collectedBy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:258:9",
			children: record.collectedBy
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PAYMENT_STATUS_TONE[record.status],
			label: record.status,
			"data-tsd-source": "/src/components/payments/payment-table.tsx:261:14"
		});
		default: return null;
	}
}
function PaymentRowActions({ record, onCollect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/payments/payment-table.tsx:275:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/payments/payment-table.tsx:276:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "text-muted-foreground",
				"aria-label": `Actions for receipt ${record.receiptNo}`,
				"data-tsd-source": "/src/components/payments/payment-table.tsx:277:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/payments/payment-table.tsx:283:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-56",
			"data-tsd-source": "/src/components/payments/payment-table.tsx:286:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/payments/payment-table.tsx:287:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/payments/$paymentId",
						params: { paymentId: record.id },
						"data-tsd-source": "/src/components/payments/payment-table.tsx:288:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/payment-table.tsx:289:13"
						}), "View payment profile"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: record.due === 0,
					onSelect: () => onCollect?.(record),
					"data-tsd-source": "/src/components/payments/payment-table.tsx:293:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BanknoteArrowUp, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:294:11"
					}), "Collect due"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/payments/payment-table.tsx:297:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/payments/payment-table.tsx:298:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:299:11"
					}), "View invoice"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/payments/payment-table.tsx:302:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:303:11"
					}), "Print receipt"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: record.due === 0,
					"data-tsd-source": "/src/components/payments/payment-table.tsx:306:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-table.tsx:307:11"
					}), "Send reminder"]
				})
			]
		})]
	});
}
/** Compact billing summary used in the collect modal and the payment profile. */
function PaymentSummaryCard({ packagePrice, discount = 0, paid, due, totalSessions, remainingSessions, className }) {
	const payable = Math.max(packagePrice - discount, 0);
	const percent = payable === 0 ? 0 : Math.min(100, Math.round(paid / payable * 100));
	const usedSessions = Math.max(totalSessions - remainingSessions, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl border border-border bg-card p-5 shadow-card", className),
		"aria-label": "Payment summary",
		"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:29:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:36:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
					"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:37:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:38:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:40:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:41:11",
						children: "Payment Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:42:11",
						children: "Live preview"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:46:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Package price",
						value: formatTaka(packagePrice),
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:47:9"
					}),
					discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Discount",
						value: `− ${formatTaka(discount)}`,
						tone: "muted",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:49:11"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Paid",
						value: formatTaka(paid),
						tone: "success",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:51:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Due",
						value: formatTaka(due),
						tone: due > 0 ? "danger" : "muted",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:52:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Total sessions",
						value: String(totalSessions),
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:53:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Remaining sessions",
						value: String(remainingSessions),
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:54:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border-t border-border pt-4",
				"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:57:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:58:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:59:11",
							children: "Collected"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-foreground",
							"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:60:11",
							children: [percent, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: percent,
						className: "mt-1.5",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:62:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:63:9",
						children: [
							usedSessions,
							" of ",
							totalSessions || 0,
							" sessions consumed"
						]
					})
				]
			})
		]
	});
}
function Row({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:81:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:82:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("font-medium tabular-nums", tone === "default" && "text-foreground", tone === "muted" && "text-muted-foreground", tone === "success" && "text-success", tone === "danger" && "text-danger"),
			"data-tsd-source": "/src/components/payments/payment-summary-card.tsx:83:7",
			children: value
		})]
	});
}
//#endregion
export { PaymentSummaryCard as a, PaymentAvatar as i, HISTORY_COLUMNS as n, PaymentTable as o, PAYMENT_COLUMNS as r, DEFAULT_PAYMENT_COLUMNS as t };
