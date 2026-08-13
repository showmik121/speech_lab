import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-CKUKb44m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-FOgtVZ1Y.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, description, actions, breadcrumbs, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("space-y-5 border-b border-border pb-7", className),
		"data-tsd-source": "/src/components/common/page-header.tsx:19:5",
		children: [breadcrumbs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
			items: breadcrumbs,
			"data-tsd-source": "/src/components/common/page-header.tsx:20:22"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6",
			"data-tsd-source": "/src/components/common/page-header.tsx:21:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1.5",
				"data-tsd-source": "/src/components/common/page-header.tsx:22:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-[26px] font-semibold leading-tight tracking-tight text-foreground",
					"data-tsd-source": "/src/components/common/page-header.tsx:23:11",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
					"data-tsd-source": "/src/components/common/page-header.tsx:27:13",
					children: description
				}) : null]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/common/page-header.tsx:31:11",
				children: actions
			}) : null]
		})]
	});
}
//#endregion
export { PageHeader as t };
