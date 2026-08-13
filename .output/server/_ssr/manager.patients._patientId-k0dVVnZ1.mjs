import { Sn as ArrowLeft } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients._patientId-k0dVVnZ1.js
var import_jsx_runtime = require_jsx_runtime();
function PatientNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:93:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Patient not found",
			description: "This patient record no longer exists or has been archived.",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:94:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:98:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/manager/patients",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:99:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:100:11"
				}), "Back to patients"]
			})
		})]
	});
}
//#endregion
export { PatientNotFound as notFoundComponent };
