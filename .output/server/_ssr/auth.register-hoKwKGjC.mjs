import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.register-hoKwKGjC.js
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/auth.register.tsx:27:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				"data-tsd-source": "/src/routes/auth.register.tsx:28:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					"data-tsd-source": "/src/routes/auth.register.tsx:29:9",
					children: "Request access"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/auth.register.tsx:30:9",
					children: "Placeholder form — no data is submitted anywhere yet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: (event) => event.preventDefault(),
				"data-tsd-source": "/src/routes/auth.register.tsx:35:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "full-name",
						label: "Full name",
						required: true,
						"data-tsd-source": "/src/routes/auth.register.tsx:36:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "full-name",
							autoComplete: "name",
							placeholder: "Jordan Rivera",
							"data-tsd-source": "/src/routes/auth.register.tsx:37:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "register-email",
						label: "Work email",
						required: true,
						"data-tsd-source": "/src/routes/auth.register.tsx:39:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "register-email",
							type: "email",
							autoComplete: "email",
							placeholder: "you@clinic.example",
							"data-tsd-source": "/src/routes/auth.register.tsx:40:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "role",
						label: "Requested role",
						hint: "Determines which workspace you land in.",
						"data-tsd-source": "/src/routes/auth.register.tsx:42:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-tsd-source": "/src/routes/auth.register.tsx:43:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "role",
								"data-tsd-source": "/src/routes/auth.register.tsx:44:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Select a role",
									"data-tsd-source": "/src/routes/auth.register.tsx:45:15"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								"data-tsd-source": "/src/routes/auth.register.tsx:47:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "super-admin",
										"data-tsd-source": "/src/routes/auth.register.tsx:48:15",
										children: "Super administrator"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "manager",
										"data-tsd-source": "/src/routes/auth.register.tsx:49:15",
										children: "Branch manager"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "clinician",
										"data-tsd-source": "/src/routes/auth.register.tsx:50:15",
										children: "Clinician"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "register-password",
						label: "Password",
						required: true,
						"data-tsd-source": "/src/routes/auth.register.tsx:54:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "register-password",
							type: "password",
							autoComplete: "new-password",
							placeholder: "••••••••",
							"data-tsd-source": "/src/routes/auth.register.tsx:55:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						"data-tsd-source": "/src/routes/auth.register.tsx:58:9",
						children: "Submit request"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/auth.register.tsx:63:7",
				children: [
					"Already have access?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth/login",
						className: "font-medium text-primary hover:underline",
						"data-tsd-source": "/src/routes/auth.register.tsx:65:9",
						children: "Sign in"
					})
				]
			})
		]
	});
}
//#endregion
export { RegisterPage as component };
