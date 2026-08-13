import { Jt as ChevronLeft, qt as ChevronRight } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-pagination-BU-nMXgd.js
var import_jsx_runtime = require_jsx_runtime();
function TablePagination({ page, pageSize, total, onPageChange, className }) {
	const pageCount = Math.max(1, Math.ceil(total / pageSize));
	const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
	const to = Math.min(page * pageSize, total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Pagination",
		className: cn("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between", className),
		"data-tsd-source": "/src/components/tables/table-pagination.tsx:23:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "min-w-0 truncate text-[13px] text-muted-foreground",
			"data-tsd-source": "/src/components/tables/table-pagination.tsx:30:7",
			children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium text-foreground tabular-nums",
					"data-tsd-source": "/src/components/tables/table-pagination.tsx:31:17",
					children: [
						from,
						"–",
						to
					]
				}),
				" of",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground tabular-nums",
					"data-tsd-source": "/src/components/tables/table-pagination.tsx:32:9",
					children: total
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2",
			"data-tsd-source": "/src/components/tables/table-pagination.tsx:34:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					disabled: page <= 1,
					onClick: () => onPageChange(page - 1),
					"data-tsd-source": "/src/components/tables/table-pagination.tsx:35:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/tables/table-pagination.tsx:41:11"
					}), "Previous"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-1.5 text-[13px] tabular-nums text-muted-foreground",
					"data-tsd-source": "/src/components/tables/table-pagination.tsx:44:9",
					children: [
						"Page ",
						page,
						" of ",
						pageCount
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					disabled: page >= pageCount,
					onClick: () => onPageChange(page + 1),
					"data-tsd-source": "/src/components/tables/table-pagination.tsx:47:9",
					children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/tables/table-pagination.tsx:54:11"
					})]
				})
			]
		})]
	});
}
//#endregion
export { TablePagination as t };
