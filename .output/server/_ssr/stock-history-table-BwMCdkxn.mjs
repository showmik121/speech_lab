import { At as Ellipsis, Cn as ArrowDownToLine, D as ShoppingCart, E as SlidersHorizontal, X as PencilLine, _ as TriangleAlert, b as Trash2, bn as ArrowUpFromLine, kt as Eye } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { m as MOVEMENT_TONE, p as MOVEMENT_ICON, u as MATERIAL_STATUS_TONE } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-C8HG_YN1.mjs";
import { r as MATERIAL_COLUMNS } from "./sales-table-D6oaldeK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-history-table-BwMCdkxn.js
var import_jsx_runtime = require_jsx_runtime();
function MaterialRowActions({ item, onEdit, onStockIn, onStockOut, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/materials/material-table.tsx:50:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/materials/material-table.tsx:51:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": `Actions for ${item.code}`,
				"data-tsd-source": "/src/components/materials/material-table.tsx:52:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/materials/material-table.tsx:58:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-48",
			"data-tsd-source": "/src/components/materials/material-table.tsx:61:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/materials/material-table.tsx:62:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials/$materialId",
						params: { materialId: item.id },
						"data-tsd-source": "/src/components/materials/material-table.tsx:63:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/material-table.tsx:64:13"
						}), "View"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onEdit?.(item),
					"data-tsd-source": "/src/components/materials/material-table.tsx:68:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/material-table.tsx:69:11"
					}), "Edit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/materials/material-table.tsx:72:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onStockIn?.(item),
					"data-tsd-source": "/src/components/materials/material-table.tsx:73:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/material-table.tsx:74:11"
					}), "Stock In"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onStockOut?.(item),
					"data-tsd-source": "/src/components/materials/material-table.tsx:77:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpFromLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/material-table.tsx:78:11"
					}), "Stock Out"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/materials/material-table.tsx:81:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onDelete?.(item),
					className: "text-danger focus:text-danger",
					"data-tsd-source": "/src/components/materials/material-table.tsx:82:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/material-table.tsx:86:11"
					}), "Delete"]
				})
			]
		})]
	});
}
function MaterialTable({ rows, visibleColumns, onEdit, onStockIn, onStockOut, onDelete }) {
	const columns = MATERIAL_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	const actions = {
		onEdit,
		onStockIn,
		onStockOut,
		onDelete
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/materials/material-table.tsx:115:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/materials/material-table.tsx:116:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/materials/material-table.tsx:117:11",
					children: "Therapy materials inventory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/materials/material-table.tsx:118:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/materials/material-table.tsx:119:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/materials/material-table.tsx:121:17",
							children: column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/materials/material-table.tsx:132:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/materials/material-table.tsx:137:11",
					children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/materials/material-table.tsx:139:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/materials/material-table.tsx:144:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialCell, {
								column: column.key,
								item,
								"data-tsd-source": "/src/components/materials/material-table.tsx:151:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/materials/material-table.tsx:154:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialRowActions, {
								item,
								...actions,
								"data-tsd-source": "/src/components/materials/material-table.tsx:155:19"
							})
						})]
					}, item.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/materials/material-table.tsx:164:7",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/materials/material-table.tsx:166:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/materials/material-table.tsx:167:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
					category: item.category,
					"data-tsd-source": "/src/components/materials/material-table.tsx:168:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/materials/material-table.tsx:169:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/materials/material-table.tsx:170:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/materials/material-table.tsx:171:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/materials/$materialId",
									params: { materialId: item.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/materials/material-table.tsx:172:21",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/materials/material-table.tsx:179:21",
									children: [
										item.code,
										" · ",
										item.brand
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialRowActions, {
								item,
								...actions,
								"data-tsd-source": "/src/components/materials/material-table.tsx:183:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/materials/material-table.tsx:186:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: MATERIAL_STATUS_TONE[item.status],
								label: item.status,
								"data-tsd-source": "/src/components/materials/material-table.tsx:187:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "neutral",
								label: item.category,
								dot: false,
								"data-tsd-source": "/src/components/materials/material-table.tsx:188:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/materials/material-table.tsx:191:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Unit price",
									value: formatTaka(item.sellingPrice),
									"data-tsd-source": "/src/components/materials/material-table.tsx:192:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Available",
									value: `${item.quantity} ${item.unit}`,
									"data-tsd-source": "/src/components/materials/material-table.tsx:193:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Min stock",
									value: `${item.minStock} ${item.unit}`,
									"data-tsd-source": "/src/components/materials/material-table.tsx:194:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Location",
									value: item.location,
									"data-tsd-source": "/src/components/materials/material-table.tsx:195:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Supplier",
									value: item.supplier.name,
									"data-tsd-source": "/src/components/materials/material-table.tsx:196:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Branch",
									value: item.branch,
									"data-tsd-source": "/src/components/materials/material-table.tsx:197:19"
								})
							]
						})
					]
				})]
			})
		}, item.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/materials/material-table.tsx:210:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/materials/material-table.tsx:211:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/materials/material-table.tsx:212:7",
			children: value
		})]
	});
}
function StockLevel({ item }) {
	const critical = item.quantity === 0;
	const low = !critical && item.quantity <= item.minStock;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center justify-end gap-1.5 font-medium tabular-nums", critical && "text-danger", low && "text-warning", !critical && !low && "text-foreground"),
		"data-tsd-source": "/src/components/materials/material-table.tsx:221:5",
		children: [item.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[12px] font-normal text-muted-foreground",
			"data-tsd-source": "/src/components/materials/material-table.tsx:230:7",
			children: item.unit
		})]
	});
}
function MaterialCell({ column, item }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/materials/$materialId",
			params: { materialId: item.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			"data-tsd-source": "/src/components/materials/material-table.tsx:239:9",
			children: item.code
		});
		case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
			category: item.category,
			"data-tsd-source": "/src/components/materials/material-table.tsx:248:14"
		});
		case "name": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[260px]",
			"data-tsd-source": "/src/components/materials/material-table.tsx:251:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/materials/$materialId",
				params: { materialId: item.id },
				className: "block truncate font-medium text-foreground hover:underline",
				"data-tsd-source": "/src/components/materials/material-table.tsx:252:11",
				children: item.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:259:11",
				children: item.brand
			})]
		});
		case "category": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/materials/material-table.tsx:263:14",
			children: item.category
		});
		case "unitPrice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			"data-tsd-source": "/src/components/materials/material-table.tsx:266:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium tabular-nums text-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:267:11",
				children: formatTaka(item.sellingPrice)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:270:11",
				children: ["cost ", formatTaka(item.purchasePrice)]
			})]
		});
		case "quantity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockLevel, {
			item,
			"data-tsd-source": "/src/components/materials/material-table.tsx:276:14"
		});
		case "minStock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			"data-tsd-source": "/src/components/materials/material-table.tsx:279:9",
			children: item.minStock
		});
		case "location": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[190px]",
			"data-tsd-source": "/src/components/materials/material-table.tsx:285:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:286:11",
				children: item.location
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:287:11",
				children: item.branch
			})]
		});
		case "supplier": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[210px]",
			"data-tsd-source": "/src/components/materials/material-table.tsx:292:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:293:11",
				children: item.supplier.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/materials/material-table.tsx:294:11",
				children: item.supplier.phone
			})]
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: MATERIAL_STATUS_TONE[item.status],
			label: item.status,
			"data-tsd-source": "/src/components/materials/material-table.tsx:300:14"
		});
		default: return null;
	}
}
/** Serializable icon keys mapped to components in the view layer. */
var ICONS = {
	in: ArrowDownToLine,
	out: ArrowUpFromLine,
	adjust: SlidersHorizontal,
	sale: ShoppingCart,
	damaged: TriangleAlert
};
var ICON_TONE = {
	"Stock In": "border-success/40 bg-success/12 text-success",
	"Stock Out": "border-warning/40 bg-warning/15 text-warning",
	Adjustment: "border-primary/40 bg-primary/10 text-primary",
	Sale: "border-primary/40 bg-primary/10 text-primary",
	Damaged: "border-danger/40 bg-danger/12 text-danger"
};
function MovementIcon({ type }) {
	const Icon = ICONS[MOVEMENT_ICON[type]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg border", ICON_TONE[type]),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/materials/stock-history-table.tsx:48:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "h-4 w-4",
			"data-tsd-source": "/src/components/materials/stock-history-table.tsx:55:7"
		})
	});
}
function QuantityDelta({ quantity }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("whitespace-nowrap font-semibold tabular-nums", quantity > 0 ? "text-success" : "text-danger"),
		"data-tsd-source": "/src/components/materials/stock-history-table.tsx:62:5",
		children: quantity > 0 ? `+${quantity}` : quantity
	});
}
/** Timeline-style stock history table. */
function StockHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/materials/stock-history-table.tsx:77:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/materials/stock-history-table.tsx:78:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/materials/stock-history-table.tsx:79:11",
					children: "Stock movement history"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/materials/stock-history-table.tsx:80:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:81:13",
						children: [
							"Movement",
							"Material",
							"Quantity",
							"Balance",
							"Reference",
							"Handled By",
							"Date"
						].map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", (index === 2 || index === 3) && "text-right"),
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:84:19",
							children: label
						}, label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/materials/stock-history-table.tsx:98:11",
					children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:100:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:104:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:105:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovementIcon, {
										type: item.type,
										"data-tsd-source": "/src/components/materials/stock-history-table.tsx:106:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: MOVEMENT_TONE[item.type],
										label: item.type,
										"data-tsd-source": "/src/components/materials/stock-history-table.tsx:107:21"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:110:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 max-w-[260px]",
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:111:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/manager/materials/$materialId",
										params: { materialId: item.materialId },
										className: "block truncate font-medium text-foreground hover:underline",
										"data-tsd-source": "/src/components/materials/stock-history-table.tsx:112:21",
										children: item.materialName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-mono text-[12px] text-muted-foreground",
										"data-tsd-source": "/src/components/materials/stock-history-table.tsx:119:21",
										children: item.materialCode
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-right text-sm",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:124:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, {
									quantity: item.quantity,
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:125:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-right text-sm tabular-nums text-muted-foreground",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:127:17",
								children: item.balance
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:130:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-nowrap font-mono text-[12.5px] text-foreground",
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:131:19",
									children: item.reference
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[280px] truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:134:19",
									children: item.note
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:138:17",
								children: item.by
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/materials/stock-history-table.tsx:141:17",
								children: formatDate(item.date)
							})
						]
					}, item.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/materials/stock-history-table.tsx:151:7",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-start gap-3 px-4 py-4",
			"data-tsd-source": "/src/components/materials/stock-history-table.tsx:153:11",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovementIcon, {
				type: item.type,
				"data-tsd-source": "/src/components/materials/stock-history-table.tsx:154:13"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				"data-tsd-source": "/src/components/materials/stock-history-table.tsx:155:13",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:156:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:157:17",
							children: item.materialName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, {
							quantity: item.quantity,
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:158:17"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-center gap-2",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:160:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: MOVEMENT_TONE[item.type],
							label: item.type,
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:161:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:162:17",
							children: item.reference
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[12.5px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:166:15",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:169:15",
						children: [
							item.by,
							" · ",
							formatDate(item.date),
							" · balance ",
							item.balance
						]
					})
				]
			})]
		}, item.id))
	})] });
}
/** Vertical movement timeline used on the material details page. */
function StockMovementTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		"data-tsd-source": "/src/components/materials/stock-history-table.tsx:183:5",
		children: items.map((item) => {
			const Icon = ICONS[MOVEMENT_ICON[item.type]];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				"data-tsd-source": "/src/components/materials/stock-history-table.tsx:187:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border", ICON_TONE[item.type]),
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:188:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:195:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:197:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:198:15",
							children: [
								item.type,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, {
									quantity: item.quantity,
									"data-tsd-source": "/src/components/materials/stock-history-table.tsx:199:31"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/materials/stock-history-table.tsx:201:15",
							children: formatDate(item.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:203:13",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						"data-tsd-source": "/src/components/materials/stock-history-table.tsx:204:13",
						children: [
							item.reference,
							" · by ",
							item.by,
							" · balance ",
							item.balance
						]
					})
				]
			}, item.id);
		})
	});
}
//#endregion
export { StockMovementTimeline as i, StockHistoryTable as n, StockLevel as r, MaterialTable as t };
