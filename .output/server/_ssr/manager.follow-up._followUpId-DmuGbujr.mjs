import { Sn as ArrowLeft } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up._followUpId-DmuGbujr.js
var import_jsx_runtime = require_jsx_runtime();
function FollowUpNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:68:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Follow-up not found",
			description: "This follow-up record does not exist or has been removed.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Follow-up Management",
					to: "/manager/follow-up"
				},
				{ label: "Not found" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/follow-up",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Back to follow-ups"]
				})
			}),
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:69:7"
		})
	});
}
//#endregion
export { FollowUpNotFound as notFoundComponent };
