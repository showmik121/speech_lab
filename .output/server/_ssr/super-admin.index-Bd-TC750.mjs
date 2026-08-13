import { mt as LayoutGrid } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.index-Bd-TC750.js
var import_jsx_runtime = require_jsx_runtime();
function SuperAdminHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/super-admin.index.tsx:21:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Super Admin workspace",
			description: "Placeholder route group. Organisation-wide modules will mount here.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Placeholder action"
			}),
			"data-tsd-source": "/src/routes/super-admin.index.tsx:22:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: LayoutGrid,
			title: "No modules mounted yet",
			description: "The application shell, design tokens and reusable components are ready. Business modules will be added in later iterations.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Primary action" }),
			secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				children: "Learn more"
			}),
			"data-tsd-source": "/src/routes/super-admin.index.tsx:27:7"
		})]
	});
}
//#endregion
export { SuperAdminHome as component };
