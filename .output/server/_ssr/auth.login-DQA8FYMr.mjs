import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { ct as Mail, gt as KeyRound, on as Building2 } from "../_libs/lucide-react.mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { p as Route$32 } from "./router-DNK85qwG.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { t as Checkbox } from "./checkbox-Di0_zIdy.mjs";
import { i as loginWithManagerId } from "./manager-session-DG-Fmn51.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.login-DQA8FYMr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
	ref,
	className: cn("mb-1 font-medium leading-none tracking-tight", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm [&_p]:leading-relaxed", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
function LoginPage() {
	const navigate = useNavigate();
	const { mode: initialMode } = Route$32.useSearch();
	const [mode, setMode] = (0, import_react.useState)(initialMode ?? "email");
	const [managerId, setManagerId] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	function handleManagerLogin(event) {
		event.preventDefault();
		setError(null);
		if (!loginWithManagerId(managerId)) {
			setError("Invalid manager key. Check the key provided by your administrator.");
			return;
		}
		navigate({ to: "/manager" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/auth.login.tsx:53:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				"data-tsd-source": "/src/routes/auth.login.tsx:54:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					"data-tsd-source": "/src/routes/auth.login.tsx:55:9",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/auth.login.tsx:56:9",
					children: "Interface only — authentication is handled by the backend later."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 rounded-lg border border-border bg-muted/40 p-1",
				"data-tsd-source": "/src/routes/auth.login.tsx:62:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setMode("email");
						setError(null);
					},
					className: `flex items-center justify-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${mode === "email" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
					"data-tsd-source": "/src/routes/auth.login.tsx:63:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/auth.login.tsx:75:11"
					}), "Email"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setMode("manager");
						setError(null);
					},
					className: `flex items-center justify-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${mode === "manager" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
					"data-tsd-source": "/src/routes/auth.login.tsx:78:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/auth.login.tsx:90:11"
					}), "Manager Key"]
				})]
			}),
			mode === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: (event) => event.preventDefault(),
				"data-tsd-source": "/src/routes/auth.login.tsx:96:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "email",
						label: "Work email",
						required: true,
						"data-tsd-source": "/src/routes/auth.login.tsx:97:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							type: "email",
							autoComplete: "email",
							placeholder: "you@clinic.example",
							"data-tsd-source": "/src/routes/auth.login.tsx:98:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "password",
						label: "Password",
						required: true,
						"data-tsd-source": "/src/routes/auth.login.tsx:100:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: "password",
							autoComplete: "current-password",
							placeholder: "••••••••",
							"data-tsd-source": "/src/routes/auth.login.tsx:101:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						"data-tsd-source": "/src/routes/auth.login.tsx:104:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							"data-tsd-source": "/src/routes/auth.login.tsx:105:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: "remember",
								"data-tsd-source": "/src/routes/auth.login.tsx:106:15"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "remember",
								className: "text-sm font-normal text-muted-foreground",
								"data-tsd-source": "/src/routes/auth.login.tsx:107:15",
								children: "Remember me"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth/forgot-password",
							className: "rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							"data-tsd-source": "/src/routes/auth.login.tsx:111:13",
							children: "Forgot password?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						"data-tsd-source": "/src/routes/auth.login.tsx:119:11",
						children: "Continue"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: handleManagerLogin,
				"data-tsd-source": "/src/routes/auth.login.tsx:124:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "manager-id",
						label: "Manager unique key",
						hint: "Provided by your administrator. Signing in opens your branch workspace.",
						required: true,
						"data-tsd-source": "/src/routes/auth.login.tsx:125:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							"data-tsd-source": "/src/routes/auth.login.tsx:131:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/auth.login.tsx:132:15"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "manager-id",
								value: managerId,
								onChange: (event) => setManagerId(event.target.value),
								placeholder: "e.g. MGR-DHK-001",
								className: "pl-9 font-mono text-[13px] uppercase placeholder:normal-case",
								autoComplete: "off",
								spellCheck: false,
								"data-tsd-source": "/src/routes/auth.login.tsx:136:15"
							})]
						})
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
						variant: "destructive",
						"data-tsd-source": "/src/routes/auth.login.tsx:149:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
							"data-tsd-source": "/src/routes/auth.login.tsx:150:15",
							children: error
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						"data-tsd-source": "/src/routes/auth.login.tsx:154:11",
						children: "Access my branch"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				"data-tsd-source": "/src/routes/auth.login.tsx:160:7",
				children: [
					"Need an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth/register",
						className: "font-medium text-primary hover:underline",
						"data-tsd-source": "/src/routes/auth.login.tsx:162:9",
						children: "Request access"
					})
				]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
