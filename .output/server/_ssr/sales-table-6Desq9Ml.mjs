import { At as Eye, H as Printer, I as RotateCcw, jt as Ellipsis } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { y as SALE_STATUS_TONE } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { n as formatDate } from "./breadcrumbs-D7Wm6Jnk.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as StatusBadge } from "./status-badge-Dga_qCN3.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sales-table-6Desq9Ml.js
var import_jsx_runtime = require_jsx_runtime();
var MATERIAL_COLUMNS = [
	{
		key: "code",
		label: "Material ID",
		hideable: false
	},
	{
		key: "image",
		label: "Image",
		hideable: true
	},
	{
		key: "name",
		label: "Material Name",
		hideable: false
	},
	{
		key: "category",
		label: "Category",
		hideable: true
	},
	{
		key: "unitPrice",
		label: "Unit Price",
		hideable: true,
		align: "right"
	},
	{
		key: "quantity",
		label: "Available Qty",
		hideable: true,
		align: "right"
	},
	{
		key: "minStock",
		label: "Minimum Stock",
		hideable: true,
		align: "right"
	},
	{
		key: "location",
		label: "Location",
		hideable: true
	},
	{
		key: "supplier",
		label: "Supplier",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_MATERIAL_COLUMNS = MATERIAL_COLUMNS.map((column) => column.key);
var SALE_COLUMNS = [
	{
		key: "invoice",
		label: "Invoice",
		hideable: false
	},
	{
		key: "customer",
		label: "Customer",
		hideable: false
	},
	{
		key: "material",
		label: "Material",
		hideable: true
	},
	{
		key: "quantity",
		label: "Qty",
		hideable: true,
		align: "right"
	},
	{
		key: "unitPrice",
		label: "Unit Price",
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
		key: "total",
		label: "Total",
		hideable: false,
		align: "right"
	},
	{
		key: "status",
		label: "Payment Status",
		hideable: false
	},
	{
		key: "date",
		label: "Date",
		hideable: true
	}
];
var DEFAULT_SALE_COLUMNS = SALE_COLUMNS.map((column) => column.key);
function SaleRowActions({ item, onPrint, onRefund }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 text-muted-foreground",
			"aria-label": `Actions for ${item.invoiceNo}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/materials/$materialId",
					params: { materialId: item.materialId },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View material"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onPrint?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Print invoice"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onRefund?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Record refund"]
			})
		]
	})] });
}
function SalesTable({ rows, visibleColumns, onPrint, onRefund }) {
	const columns = SALE_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Material sales"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
					children: column.label
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
					children: "Actions"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleCell, {
						column: column.key,
						item
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
						item,
						onPrint,
						onRefund
					})
				})]
			}, item.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "px-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-mono text-[12.5px] font-medium text-primary",
								children: item.invoiceNo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: item.customerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[12px] text-muted-foreground",
								children: item.customerPhone
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
						item,
						onPrint,
						onRefund
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: SALE_STATUS_TONE[item.status],
						label: item.status
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "neutral",
						label: item.method,
						dot: false
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Material",
							value: item.materialName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Quantity",
							value: String(item.quantity)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Unit price",
							value: formatTaka(item.unitPrice)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Discount",
							value: formatTaka(item.discount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Total",
							value: formatTaka(item.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Date",
							value: formatDate(item.date)
						})
					]
				})
			]
		}, item.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			children: value
		})]
	});
}
function SaleCell({ column, item }) {
	switch (column) {
		case "invoice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[12.5px] font-medium text-primary",
				children: item.invoiceNo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				children: item.method
			})]
		});
		case "customer": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[220px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-medium text-foreground",
				children: item.customerName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				children: item.customerPhone
			})]
		});
		case "material": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[240px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/materials/$materialId",
				params: { materialId: item.materialId },
				className: "block truncate text-foreground hover:underline",
				children: item.materialName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				children: item.materialCode
			})]
		});
		case "quantity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-foreground",
			children: item.quantity
		});
		case "unitPrice": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: formatTaka(item.unitPrice)
		});
		case "discount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("whitespace-nowrap tabular-nums", item.discount > 0 ? "text-warning" : "text-muted-foreground"),
			children: item.discount > 0 ? `− ${formatTaka(item.discount)}` : "—"
		});
		case "total": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-semibold tabular-nums text-foreground",
			children: formatTaka(item.total)
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: SALE_STATUS_TONE[item.status],
			label: item.status
		});
		case "date": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground",
				children: formatDate(item.date)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.soldBy
			})]
		});
		default: return null;
	}
}
//#endregion
export { SalesTable as a, SALE_COLUMNS as i, DEFAULT_SALE_COLUMNS as n, MATERIAL_COLUMNS as r, DEFAULT_MATERIAL_COLUMNS as t };
