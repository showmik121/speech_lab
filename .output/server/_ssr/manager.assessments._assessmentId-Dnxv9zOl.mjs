import { Sn as ArrowLeft } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments._assessmentId-Dnxv9zOl.js
var import_jsx_runtime = require_jsx_runtime();
function AssessmentNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:72:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Assessment not found",
			description: "This assessment record no longer exists or has been archived.",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:73:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:77:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/manager/assessments",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:78:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:79:11"
				}), "Back to assessments"]
			})
		})]
	});
}
//#endregion
export { AssessmentNotFound as notFoundComponent };
