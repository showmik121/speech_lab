import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-field-v40W9a5m.js
var import_jsx_runtime = require_jsx_runtime();
function FormSection({ title, description, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("grid gap-6 py-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]", className),
		"data-tsd-source": "/src/components/forms/form-field.tsx:17:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/forms/form-field.tsx:18:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-foreground",
				"data-tsd-source": "/src/components/forms/form-field.tsx:19:9",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				"data-tsd-source": "/src/components/forms/form-field.tsx:21:11",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0 space-y-5",
			"data-tsd-source": "/src/components/forms/form-field.tsx:24:7",
			children
		})]
	});
}
function FormField({ id, label, hint, error, required, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-2", className),
		"data-tsd-source": "/src/components/forms/form-field.tsx:47:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: id,
				className: "text-sm font-medium",
				"data-tsd-source": "/src/components/forms/form-field.tsx:48:7",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-0.5 text-danger",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/forms/form-field.tsx:51:11",
					children: "*"
				}) : null]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-error`,
				role: "alert",
				className: "text-xs text-danger",
				"data-tsd-source": "/src/components/forms/form-field.tsx:58:9",
				children: error
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-hint`,
				className: "text-xs text-muted-foreground",
				"data-tsd-source": "/src/components/forms/form-field.tsx:62:9",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { FormSection as n, FormField as t };
