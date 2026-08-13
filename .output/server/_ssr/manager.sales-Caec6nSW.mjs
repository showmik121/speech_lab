import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShoppingCart, ln as Boxes } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { _ as SALES, c as MATERIAL_KPIS, r as MATERIALS } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { a as SalesTable, n as DEFAULT_SALE_COLUMNS } from "./sales-table-D6oaldeK.mjs";
import { t as NewSaleDialog } from "./new-sale-dialog-CWCa4q_5.mjs";
import { n as SalesFilters, t as DEFAULT_SALE_FILTERS } from "./sales-filters-CWOO8hHD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.sales-Caec6nSW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 10;
function SalesPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_SALE_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [columns, setColumns] = (0, import_react.useState)(DEFAULT_SALE_COLUMNS);
	const [saleOpen, setSaleOpen] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return SALES.filter((sale) => {
			const material = MATERIALS.find((item) => item.id === sale.materialId);
			return (!query || [
				sale.invoiceNo,
				sale.customerName,
				sale.customerPhone,
				sale.materialName
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || sale.status === filters.status) && (filters.method === "all" || sale.method === filters.method) && (filters.category === "all" || material?.category === filters.category);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const collected = rows.filter((sale) => sale.status === "Paid").reduce((sum, sale) => sum + sale.total, 0);
	const due = rows.filter((sale) => sale.status === "Due" || sale.status === "Partial").reduce((sum, sale) => sum + sale.total, 0);
	const toggleColumn = (key) => setColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.sales.tsx:85:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Material Sales",
				description: `${rows.length} sales · ${formatTaka(collected)} collected · ${formatTaka(due)} due`,
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Sales" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Inventory"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setSaleOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "New Sale"]
				})] }),
				"data-tsd-source": "/src/routes/manager.sales.tsx:86:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Sales summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				"data-tsd-source": "/src/routes/manager.sales.tsx:109:7",
				children: MATERIAL_KPIS.slice(0, 4).map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.sales.tsx:114:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				"data-tsd-source": "/src/routes/manager.sales.tsx:118:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: () => {
						setRefreshing(true);
						setTimeout(() => setRefreshing(false), 700);
					},
					isRefreshing: refreshing,
					visibleColumns: columns,
					onToggleColumn: toggleColumn,
					"data-tsd-source": "/src/routes/manager.sales.tsx:119:9"
				}), pageRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: ShoppingCart,
					title: "No Sales Found",
					description: "Adjust your filters or record a new material sale.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSaleOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "New Sale"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_SALE_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none",
					"data-tsd-source": "/src/routes/manager.sales.tsx:134:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
					rows: pageRows,
					visibleColumns: columns,
					"data-tsd-source": "/src/routes/manager.sales.tsx:153:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					"data-tsd-source": "/src/routes/manager.sales.tsx:154:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: rows.length,
						onPageChange: setPage,
						"data-tsd-source": "/src/routes/manager.sales.tsx:155:15"
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleOpen,
				onOpenChange: setSaleOpen,
				"data-tsd-source": "/src/routes/manager.sales.tsx:166:7"
			})
		]
	});
}
//#endregion
export { SalesPage as component };
