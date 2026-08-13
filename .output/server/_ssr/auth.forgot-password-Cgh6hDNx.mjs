import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.forgot-password-Cgh6hDNx.js
var import_jsx_runtime = require_jsx_runtime();
function ForgotPasswordPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/auth.forgot-password.tsx:20:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				"data-tsd-source": "/src/routes/auth.forgot-password.tsx:21:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					"data-tsd-source": "/src/routes/auth.forgot-password.tsx:22:9",
					children: "Reset password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/auth.forgot-password.tsx:23:9",
					children: "We'll send a reset link once the backend is connected."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: (event) => event.preventDefault(),
				"data-tsd-source": "/src/routes/auth.forgot-password.tsx:28:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "reset-email",
					label: "Work email",
					required: true,
					"data-tsd-source": "/src/routes/auth.forgot-password.tsx:29:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "reset-email",
						type: "email",
						autoComplete: "email",
						placeholder: "you@clinic.example",
						"data-tsd-source": "/src/routes/auth.forgot-password.tsx:30:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					"data-tsd-source": "/src/routes/auth.forgot-password.tsx:32:9",
					children: "Send reset link"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth/login",
				className: "text-sm font-medium text-primary hover:underline",
				"data-tsd-source": "/src/routes/auth.forgot-password.tsx:37:7",
				children: "Back to sign in"
			})
		]
	});
}
//#endregion
export { ForgotPasswordPage as component };
