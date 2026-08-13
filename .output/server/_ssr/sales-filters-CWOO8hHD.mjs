import { Ft as Columns3, P as Search, jt as Download, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { g as PAYMENT_METHODS, s as MATERIAL_CATEGORY_NAMES, v as SALE_PAYMENT_STATUSES } from "./material-data-BTa-_ze7.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { i as SALE_COLUMNS } from "./sales-table-D6oaldeK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sales-filters-CWOO8hHD.js
var import_jsx_runtime = require_jsx_runtime();
var SALE_DATE_RANGES = [
	{
		key: "all",
		label: "All dates"
	},
	{
		key: "today",
		label: "Today"
	},
	{
		key: "7d",
		label: "Last 7 days"
	},
	{
		key: "30d",
		label: "Last 30 days"
	}
];
var DEFAULT_SALE_FILTERS = {
	search: "",
	status: "all",
	method: "all",
	category: "all",
	range: "all"
};
function SalesFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/materials/sales-filters.tsx:67:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/materials/sales-filters.tsx:68:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[420px]",
				"data-tsd-source": "/src/components/materials/sales-filters.tsx:69:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:70:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search invoice, customer, phone or material…",
					"aria-label": "Search sales",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:74:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/materials/sales-filters.tsx:84:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/materials/sales-filters.tsx:85:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:86:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/materials/sales-filters.tsx:92:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:93:13"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/materials/sales-filters.tsx:97:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:98:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/materials/sales-filters.tsx:99:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/materials/sales-filters.tsx:100:19"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:104:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/materials/sales-filters.tsx:105:17",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/materials/sales-filters.tsx:106:17" }),
								SALE_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/materials/sales-filters.tsx:108:19",
									children: column.label
								}, column.key))
							]
						})]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/materials/sales-filters.tsx:123:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "statuses",
					placeholder: "Payment status",
					width: "w-[175px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: SALE_PAYMENT_STATUSES,
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:124:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "methods",
					placeholder: "Method",
					width: "w-[175px]",
					value: value.method,
					onChange: (next) => set({ method: next }),
					options: PAYMENT_METHODS,
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:132:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "categories",
					placeholder: "Category",
					width: "w-[190px]",
					value: value.category,
					onChange: (next) => set({ category: next }),
					options: MATERIAL_CATEGORY_NAMES,
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:140:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:148:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by date range",
						"data-tsd-source": "/src/components/materials/sales-filters.tsx:149:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date range",
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:150:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						"data-tsd-source": "/src/components/materials/sales-filters.tsx:152:11",
						children: SALE_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							"data-tsd-source": "/src/components/materials/sales-filters.tsx:154:15",
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_SALE_FILTERS),
					"data-tsd-source": "/src/components/materials/sales-filters.tsx:161:9",
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
		"data-tsd-source": "/src/components/materials/sales-filters.tsx:190:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/materials/sales-filters.tsx:191:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/materials/sales-filters.tsx:192:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			"data-tsd-source": "/src/components/materials/sales-filters.tsx:194:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/materials/sales-filters.tsx:195:9",
				children: ["All ", label]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/materials/sales-filters.tsx:197:11",
				children: option
			}, option))]
		})]
	});
}
//#endregion
export { SalesFilters as n, DEFAULT_SALE_FILTERS as t };
