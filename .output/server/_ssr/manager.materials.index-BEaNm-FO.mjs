import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShoppingCart, Ft as Columns3, K as Plus, P as Search, jt as Download, ln as Boxes, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { _ as SALES, a as MATERIAL_BRANCHES, b as STOCK_MOVEMENTS, c as MATERIAL_KPIS, d as MATERIAL_TABS, h as MOVEMENT_TYPES, i as MATERIALS_TODAY_ISO, l as MATERIAL_STATUSES, r as MATERIALS, s as MATERIAL_CATEGORY_NAMES, x as STORAGE_LOCATIONS } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { u as Route$17 } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { a as SalesTable, n as DEFAULT_SALE_COLUMNS, r as MATERIAL_COLUMNS, t as DEFAULT_MATERIAL_COLUMNS } from "./sales-table-D6oaldeK.mjs";
import { n as StockHistoryTable, t as MaterialTable } from "./stock-history-table-BwMCdkxn.mjs";
import { t as NewSaleDialog } from "./new-sale-dialog-CWCa4q_5.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { n as CategoryCards, r as LowStockPanel, t as AddMaterialDialog } from "./add-material-dialog-CmZwftHJ.mjs";
import { n as SalesFilters, t as DEFAULT_SALE_FILTERS } from "./sales-filters-CWOO8hHD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.materials.index-BEaNm-FO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_MATERIAL_FILTERS = {
	search: "",
	category: "all",
	status: "all",
	location: "all",
	branch: "all"
};
function MaterialFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/materials/material-filters.tsx:64:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/materials/material-filters.tsx:65:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[420px]",
				"data-tsd-source": "/src/components/materials/material-filters.tsx:66:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/materials/material-filters.tsx:67:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search material name, code, brand or supplier…",
					"aria-label": "Search materials",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/materials/material-filters.tsx:71:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/materials/material-filters.tsx:81:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/materials/material-filters.tsx:82:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/material-filters.tsx:83:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/materials/material-filters.tsx:89:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/material-filters.tsx:90:13"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/materials/material-filters.tsx:94:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/materials/material-filters.tsx:95:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/materials/material-filters.tsx:96:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/materials/material-filters.tsx:97:19"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							"data-tsd-source": "/src/components/materials/material-filters.tsx:101:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/materials/material-filters.tsx:102:17",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/materials/material-filters.tsx:103:17" }),
								MATERIAL_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/materials/material-filters.tsx:105:19",
									children: column.label
								}, column.key))
							]
						})]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/materials/material-filters.tsx:120:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "category",
					placeholder: "Category",
					width: "w-[190px]",
					value: value.category,
					onChange: (next) => set({ category: next }),
					options: MATERIAL_CATEGORY_NAMES,
					"data-tsd-source": "/src/components/materials/material-filters.tsx:121:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "status",
					placeholder: "Status",
					width: "w-[165px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: MATERIAL_STATUSES,
					"data-tsd-source": "/src/components/materials/material-filters.tsx:129:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "location",
					placeholder: "Location",
					width: "w-[215px]",
					value: value.location,
					onChange: (next) => set({ location: next }),
					options: STORAGE_LOCATIONS,
					"data-tsd-source": "/src/components/materials/material-filters.tsx:137:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[190px]",
					value: value.branch,
					onChange: (next) => set({ branch: next }),
					options: MATERIAL_BRANCHES,
					"data-tsd-source": "/src/components/materials/material-filters.tsx:145:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_MATERIAL_FILTERS),
					"data-tsd-source": "/src/components/materials/material-filters.tsx:154:9",
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
		"data-tsd-source": "/src/components/materials/material-filters.tsx:183:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/materials/material-filters.tsx:184:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/materials/material-filters.tsx:185:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			"data-tsd-source": "/src/components/materials/material-filters.tsx:187:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/materials/material-filters.tsx:188:9",
				children: ["All ", label === "category" ? "categories" : `${label}s`]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/materials/material-filters.tsx:190:11",
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(MATERIALS_TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function MaterialsPage() {
	const { tab } = Route$17.useSearch();
	const navigate = Route$17.useNavigate();
	const activeTab = MATERIAL_TABS.some((item) => item.value === tab) ? tab : "inventory";
	const [materialDialogOpen, setMaterialDialogOpen] = (0, import_react.useState)(false);
	const [saleDialogOpen, setSaleDialogOpen] = (0, import_react.useState)(false);
	const [saleMaterialId, setSaleMaterialId] = (0, import_react.useState)();
	const [materialFilters, setMaterialFilters] = (0, import_react.useState)(DEFAULT_MATERIAL_FILTERS);
	const [materialPage, setMaterialPage] = (0, import_react.useState)(1);
	const [materialRefreshing, setMaterialRefreshing] = (0, import_react.useState)(false);
	const [materialColumns, setMaterialColumns] = (0, import_react.useState)(DEFAULT_MATERIAL_COLUMNS);
	const [saleFilters, setSaleFilters] = (0, import_react.useState)(DEFAULT_SALE_FILTERS);
	const [salePage, setSalePage] = (0, import_react.useState)(1);
	const [saleRefreshing, setSaleRefreshing] = (0, import_react.useState)(false);
	const [saleColumns, setSaleColumns] = (0, import_react.useState)(DEFAULT_SALE_COLUMNS);
	const [movementType, setMovementType] = (0, import_react.useState)("all");
	const filteredMaterials = (0, import_react.useMemo)(() => {
		const query = materialFilters.search.trim().toLowerCase();
		return MATERIALS.filter((material) => {
			return (!query || [
				material.name,
				material.code,
				material.brand,
				material.supplier.name,
				material.category
			].join(" ").toLowerCase().includes(query)) && (materialFilters.category === "all" || material.category === materialFilters.category) && (materialFilters.status === "all" || material.status === materialFilters.status) && (materialFilters.location === "all" || material.location === materialFilters.location) && (materialFilters.branch === "all" || material.branch === materialFilters.branch);
		});
	}, [materialFilters]);
	const filteredSales = (0, import_react.useMemo)(() => {
		const query = saleFilters.search.trim().toLowerCase();
		return SALES.filter((sale) => {
			const material = MATERIALS.find((item) => item.id === sale.materialId);
			return (!query || [
				sale.invoiceNo,
				sale.customerName,
				sale.customerPhone,
				sale.materialName,
				sale.materialCode
			].join(" ").toLowerCase().includes(query)) && (saleFilters.status === "all" || sale.status === saleFilters.status) && (saleFilters.method === "all" || sale.method === saleFilters.method) && (saleFilters.category === "all" || material?.category === saleFilters.category) && withinRange(sale.date, saleFilters.range);
		});
	}, [saleFilters]);
	const movements = (0, import_react.useMemo)(() => [...STOCK_MOVEMENTS].filter((movement) => movementType === "all" || movement.type === movementType).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [movementType]);
	const materialPageCount = Math.max(1, Math.ceil(filteredMaterials.length / PAGE_SIZE));
	const currentMaterialPage = Math.min(materialPage, materialPageCount);
	const materialRows = filteredMaterials.slice((currentMaterialPage - 1) * PAGE_SIZE, currentMaterialPage * PAGE_SIZE);
	const salePageCount = Math.max(1, Math.ceil(filteredSales.length / PAGE_SIZE));
	const currentSalePage = Math.min(salePage, salePageCount);
	const saleRows = filteredSales.slice((currentSalePage - 1) * PAGE_SIZE, currentSalePage * PAGE_SIZE);
	const toggleMaterialColumn = (key) => setMaterialColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const toggleSaleColumn = (key) => setSaleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const openSale = (materialId) => {
		setSaleMaterialId(materialId);
		setSaleDialogOpen(true);
	};
	const addMaterialButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setMaterialDialogOpen(true),
		"data-tsd-source": "/src/routes/manager.materials.index.tsx:184:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/manager.materials.index.tsx:185:7"
		}), "Add Material"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.materials.index.tsx:191:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Materials & Sales",
				description: "Manage therapy materials, inventory and sales.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Materials & Sales" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setMaterialDialogOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Add Material"]
				})] }),
				"data-tsd-source": "/src/routes/manager.materials.index.tsx:192:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Inventory summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				"data-tsd-source": "/src/routes/manager.materials.index.tsx:210:7",
				children: MATERIAL_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.materials.index.tsx:215:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: (next) => navigate({ search: { tab: next } }),
				className: "min-w-0",
				"data-tsd-source": "/src/routes/manager.materials.index.tsx:219:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-1 overflow-x-auto px-1 pb-1",
						"data-tsd-source": "/src/routes/manager.materials.index.tsx:224:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "w-max",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:225:11",
							children: MATERIAL_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: item.value,
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:227:15",
								children: item.label
							}, item.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "inventory",
						className: "mt-6 space-y-6",
						"data-tsd-source": "/src/routes/manager.materials.index.tsx:235:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:236:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:237:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialFilters, {
									value: materialFilters,
									onChange: (next) => {
										setMaterialFilters(next);
										setMaterialPage(1);
									},
									onRefresh: () => {
										setMaterialRefreshing(true);
										setTimeout(() => setMaterialRefreshing(false), 700);
									},
									isRefreshing: materialRefreshing,
									visibleColumns: materialColumns,
									onToggleColumn: toggleMaterialColumn,
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:238:15"
								}), materialRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
									icon: Boxes,
									title: "No Materials Added",
									description: "Start by adding your first therapy material.",
									action: addMaterialButton,
									secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										onClick: () => setMaterialFilters(DEFAULT_MATERIAL_FILTERS),
										children: "Reset filters"
									}),
									className: "rounded-none border-0 shadow-none",
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:254:17"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialTable, {
									rows: materialRows,
									visibleColumns: materialColumns,
									onStockIn: (item) => setSaleMaterialId(item.id),
									onStockOut: (item) => openSale(item.id),
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:271:19"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border px-4 py-3.5 sm:px-5",
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:277:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
										page: currentMaterialPage,
										pageSize: PAGE_SIZE,
										total: filteredMaterials.length,
										onPageChange: setMaterialPage,
										"data-tsd-source": "/src/routes/manager.materials.index.tsx:278:21"
									})
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LowStockPanel, { "data-tsd-source": "/src/routes/manager.materials.index.tsx:289:13" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "sales",
						className: "mt-6 space-y-4",
						"data-tsd-source": "/src/routes/manager.materials.index.tsx:294:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:295:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:296:13",
								children: "Every material sale recorded at this branch, newest first."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:299:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/sales",
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:300:15",
									children: "Open sales console"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:303:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesFilters, {
								value: saleFilters,
								onChange: (next) => {
									setSaleFilters(next);
									setSalePage(1);
								},
								onRefresh: () => {
									setSaleRefreshing(true);
									setTimeout(() => setSaleRefreshing(false), 700);
								},
								isRefreshing: saleRefreshing,
								visibleColumns: saleColumns,
								onToggleColumn: toggleSaleColumn,
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:304:13"
							}), saleRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: ShoppingCart,
								title: "No Sales Recorded",
								description: "Record your first material sale to see it here.",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => openSale(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "New Sale"]
								}),
								secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setSaleFilters(DEFAULT_SALE_FILTERS),
									children: "Reset filters"
								}),
								className: "rounded-none border-0 shadow-none",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:320:15"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
								rows: saleRows,
								visibleColumns: saleColumns,
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:339:17"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border px-4 py-3.5 sm:px-5",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:340:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
									page: currentSalePage,
									pageSize: PAGE_SIZE,
									total: filteredSales.length,
									onPageChange: setSalePage,
									"data-tsd-source": "/src/routes/manager.materials.index.tsx:341:19"
								})
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "categories",
						className: "mt-6 space-y-4",
						"data-tsd-source": "/src/routes/manager.materials.index.tsx:354:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:355:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:356:13",
								children: "Material categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:359:13",
								children: "Educational toys, cards, books and therapy equipment."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCards, { "data-tsd-source": "/src/routes/manager.materials.index.tsx:363:11" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "history",
						className: "mt-6 space-y-4",
						"data-tsd-source": "/src/routes/manager.materials.index.tsx:367:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:368:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: movementType === "all" ? "default" : "outline",
								size: "sm",
								onClick: () => setMovementType("all"),
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:369:13",
								children: "All movements"
							}), MOVEMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: movementType === type ? "default" : "outline",
								size: "sm",
								onClick: () => setMovementType(type),
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:377:15",
								children: type
							}, type))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							"data-tsd-source": "/src/routes/manager.materials.index.tsx:387:11",
							children: movements.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Boxes,
								title: "No Stock Movements",
								description: "Stock in, stock out, adjustments and damages will appear here.",
								className: "rounded-none border-0 shadow-none",
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:389:15"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockHistoryTable, {
								rows: movements,
								"data-tsd-source": "/src/routes/manager.materials.index.tsx:396:15"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddMaterialDialog, {
				open: materialDialogOpen,
				onOpenChange: setMaterialDialogOpen,
				"data-tsd-source": "/src/routes/manager.materials.index.tsx:402:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleDialogOpen,
				onOpenChange: setSaleDialogOpen,
				presetMaterialId: saleMaterialId,
				"data-tsd-source": "/src/routes/manager.materials.index.tsx:403:7"
			})
		]
	});
}
//#endregion
export { MaterialsPage as component };
