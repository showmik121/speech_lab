import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShoppingCart, Sn as ArrowLeft, Y as Pencil } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { u as MATERIAL_STATUS_TONE } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { l as Route$16 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-C8HG_YN1.mjs";
import { a as SalesTable, n as DEFAULT_SALE_COLUMNS } from "./sales-table-D6oaldeK.mjs";
import { i as StockMovementTimeline, r as StockLevel } from "./stock-history-table-BwMCdkxn.mjs";
import { t as NewSaleDialog } from "./new-sale-dialog-CWCa4q_5.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.materials._materialId-Ci5eqkHj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root.displayName;
function MaterialDetailPage() {
	const { material, sales, movements, purchases } = Route$16.useLoaderData();
	const [saleOpen, setSaleOpen] = (0, import_react.useState)(false);
	const soldUnits = sales.reduce((sum, sale) => sum + sale.quantity, 0);
	const revenue = sales.reduce((sum, sale) => sum + sale.total, 0);
	const stockValue = material.quantity * material.purchasePrice;
	const margin = material.sellingPrice - material.purchasePrice;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:74:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: material.name,
				description: `${material.code} · ${material.category} · ${material.brand}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Materials & Sales",
						to: "/manager/materials"
					},
					{ label: material.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/materials",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSaleOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Sell"]
					})
				] }),
				"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:75:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:103:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:104:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:105:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 sm:flex-row sm:items-start",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:106:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
									category: material.category,
									size: "lg",
									className: "h-24 w-24 shrink-0",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:107:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 space-y-3",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:108:15",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:109:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
												label: material.status,
												tone: MATERIAL_STATUS_TONE[material.status],
												"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:110:19"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[12.5px] text-muted-foreground",
												"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:114:19",
												children: [
													material.location,
													" · ",
													material.branch
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] leading-relaxed text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:118:17",
											children: material.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockLevel, {
											item: material,
											"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:121:17"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
								className: "my-6",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:125:13"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:127:13",
								children: [
									{
										label: "Purchase price",
										value: formatTaka(material.purchasePrice)
									},
									{
										label: "Selling price",
										value: formatTaka(material.sellingPrice)
									},
									{
										label: "Margin / unit",
										value: formatTaka(margin)
									},
									{
										label: "Stock value",
										value: formatTaka(stockValue)
									},
									{
										label: "Current stock",
										value: `${material.quantity} ${material.unit}`
									},
									{
										label: "Minimum stock",
										value: `${material.minStock} ${material.unit}`
									},
									{
										label: "Units sold",
										value: String(soldUnits)
									},
									{
										label: "Revenue",
										value: formatTaka(revenue)
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-muted/25 p-4",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:138:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:139:19",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-[15px] font-semibold tabular-nums text-foreground",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:142:19",
										children: item.value
									})]
								}, item.label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-hidden p-0",
						"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:150:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border px-5 py-4",
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:151:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:152:15",
								children: "Sales history"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:155:15",
								children: [
									sales.length,
									" sale",
									sales.length === 1 ? "" : "s",
									" recorded for this material."
								]
							})]
						}), sales.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-5 py-8 text-center text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:160:15",
							children: "No sales recorded yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
							rows: sales,
							visibleColumns: DEFAULT_SALE_COLUMNS,
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:164:15"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:169:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:170:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:171:13",
								children: "Supplier"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-4 space-y-3 text-[13px]",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:172:13",
								children: [
									{
										label: "Name",
										value: material.supplier.name
									},
									{
										label: "Phone",
										value: material.supplier.phone
									},
									{
										label: "Email",
										value: material.supplier.email
									},
									{
										label: "Address",
										value: material.supplier.address
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:179:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:180:19",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right font-medium text-foreground",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:181:19",
										children: item.value
									})]
								}, item.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:187:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:188:13",
								children: "Purchase history"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:191:13",
								children: purchases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-[13px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:193:17",
									children: "No purchases recorded."
								}) : purchases.map((purchase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-border bg-muted/25 p-3.5 text-[13px]",
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:196:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:200:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:201:23",
											children: purchase.date
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:202:23",
											children: formatTaka(purchase.total)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:206:21",
										children: [
											purchase.quantity,
											" × ",
											formatTaka(purchase.unitCost),
											" · ",
											purchase.supplier
										]
									})]
								}, purchase.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:215:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:216:13",
								children: "Stock movements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:219:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockMovementTimeline, {
									items: movements,
									"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:220:15"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleOpen,
				onOpenChange: setSaleOpen,
				presetMaterialId: material.id,
				"data-tsd-source": "/src/routes/manager.materials.$materialId.tsx:226:7"
			})
		]
	});
}
//#endregion
export { MaterialDetailPage as component };
