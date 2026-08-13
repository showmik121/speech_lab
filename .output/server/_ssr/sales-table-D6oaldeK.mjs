import { At as Ellipsis, L as RotateCcw, U as Printer, kt as Eye } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { y as SALE_STATUS_TONE } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sales-table-D6oaldeK.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/materials/sales-table.tsx:36:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/materials/sales-table.tsx:37:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": `Actions for ${item.invoiceNo}`,
				"data-tsd-source": "/src/components/materials/sales-table.tsx:38:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/materials/sales-table.tsx:44:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:47:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/materials/sales-table.tsx:48:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials/$materialId",
						params: { materialId: item.materialId },
						"data-tsd-source": "/src/components/materials/sales-table.tsx:49:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/sales-table.tsx:50:13"
						}), "View material"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onPrint?.(item),
					"data-tsd-source": "/src/components/materials/sales-table.tsx:54:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/sales-table.tsx:55:11"
					}), "Print invoice"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/materials/sales-table.tsx:58:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onRefund?.(item),
					"data-tsd-source": "/src/components/materials/sales-table.tsx:59:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/sales-table.tsx:60:11"
					}), "Record refund"]
				})
			]
		})]
	});
}
function SalesTable({ rows, visibleColumns, onPrint, onRefund }) {
	const columns = SALE_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/materials/sales-table.tsx:83:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/materials/sales-table.tsx:84:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/materials/sales-table.tsx:85:11",
					children: "Material sales"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/materials/sales-table.tsx:86:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/materials/sales-table.tsx:87:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:89:17",
							children: column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/materials/sales-table.tsx:100:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/materials/sales-table.tsx:105:11",
					children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/materials/sales-table.tsx:107:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:112:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleCell, {
								column: column.key,
								item,
								"data-tsd-source": "/src/components/materials/sales-table.tsx:119:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/materials/sales-table.tsx:122:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
								item,
								onPrint,
								onRefund,
								"data-tsd-source": "/src/components/materials/sales-table.tsx:123:19"
							})
						})]
					}, item.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/materials/sales-table.tsx:132:7",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:134:11",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					"data-tsd-source": "/src/components/materials/sales-table.tsx:135:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/materials/sales-table.tsx:136:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-mono text-[12.5px] font-medium text-primary",
								"data-tsd-source": "/src/components/materials/sales-table.tsx:137:17",
								children: item.invoiceNo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								"data-tsd-source": "/src/components/materials/sales-table.tsx:140:17",
								children: item.customerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[12px] text-muted-foreground",
								"data-tsd-source": "/src/components/materials/sales-table.tsx:141:17",
								children: item.customerPhone
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
						item,
						onPrint,
						onRefund,
						"data-tsd-source": "/src/components/materials/sales-table.tsx:143:15"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 flex flex-wrap items-center gap-2",
					"data-tsd-source": "/src/components/materials/sales-table.tsx:146:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: SALE_STATUS_TONE[item.status],
						label: item.status,
						"data-tsd-source": "/src/components/materials/sales-table.tsx:147:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "neutral",
						label: item.method,
						dot: false,
						"data-tsd-source": "/src/components/materials/sales-table.tsx:148:15"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
					"data-tsd-source": "/src/components/materials/sales-table.tsx:151:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Material",
							value: item.materialName,
							"data-tsd-source": "/src/components/materials/sales-table.tsx:152:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Quantity",
							value: String(item.quantity),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:153:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Unit price",
							value: formatTaka(item.unitPrice),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:154:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Discount",
							value: formatTaka(item.discount),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:155:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Total",
							value: formatTaka(item.total),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:156:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Date",
							value: formatDate(item.date),
							"data-tsd-source": "/src/components/materials/sales-table.tsx:157:15"
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
		"data-tsd-source": "/src/components/materials/sales-table.tsx:168:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:169:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:170:7",
			children: value
		})]
	});
}
function SaleCell({ column, item }) {
	switch (column) {
		case "invoice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:179:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[12.5px] font-medium text-primary",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:180:11",
				children: item.invoiceNo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:181:11",
				children: item.method
			})]
		});
		case "customer": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[220px]",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:186:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-medium text-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:187:11",
				children: item.customerName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:188:11",
				children: item.customerPhone
			})]
		});
		case "material": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[240px]",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:195:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/materials/$materialId",
				params: { materialId: item.materialId },
				className: "block truncate text-foreground hover:underline",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:196:11",
				children: item.materialName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:203:11",
				children: item.materialCode
			})]
		});
		case "quantity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-foreground",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:209:14",
			children: item.quantity
		});
		case "unitPrice": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:212:9",
			children: formatTaka(item.unitPrice)
		});
		case "discount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("whitespace-nowrap tabular-nums", item.discount > 0 ? "text-warning" : "text-muted-foreground"),
			"data-tsd-source": "/src/components/materials/sales-table.tsx:218:9",
			children: item.discount > 0 ? `− ${formatTaka(item.discount)}` : "—"
		});
		case "total": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-semibold tabular-nums text-foreground",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:229:9",
			children: formatTaka(item.total)
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: SALE_STATUS_TONE[item.status],
			label: item.status,
			"data-tsd-source": "/src/components/materials/sales-table.tsx:234:14"
		});
		case "date": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			"data-tsd-source": "/src/components/materials/sales-table.tsx:237:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:238:11",
				children: formatDate(item.date)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/sales-table.tsx:239:11",
				children: item.soldBy
			})]
		});
		default: return null;
	}
}
//#endregion
export { SalesTable as a, SALE_COLUMNS as i, DEFAULT_SALE_COLUMNS as n, MATERIAL_COLUMNS as r, DEFAULT_MATERIAL_COLUMNS as t };
