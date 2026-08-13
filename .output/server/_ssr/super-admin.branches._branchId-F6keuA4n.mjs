import { Sn as ArrowLeft } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.branches._branchId-F6keuA4n.js
var import_jsx_runtime = require_jsx_runtime();
function BranchNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:73:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Branch not found",
			description: "This branch no longer exists.",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:74:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:75:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/super-admin/branches",
				"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:76:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/routes/super-admin.branches.$branchId.tsx:77:11"
				}), "Back to branches"]
			})
		})]
	});
}
//#endregion
export { BranchNotFound as notFoundComponent };
