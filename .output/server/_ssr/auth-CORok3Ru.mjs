import { n as APP_TAGLINE, t as APP_NAME } from "./app-C79kJ1VZ.mjs";
import { En as Activity } from "../_libs/lucide-react.mjs";
import { m as Outlet, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as ThemeToggle } from "./theme-toggle-CpYLW-3Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CORok3Ru.js
var import_jsx_runtime = require_jsx_runtime();
function AuthLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		"data-tsd-source": "/src/components/layouts/auth-layout.tsx:9:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative hidden flex-col justify-between bg-sidebar p-10 text-sidebar-foreground lg:flex",
			"data-tsd-source": "/src/components/layouts/auth-layout.tsx:10:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"data-tsd-source": "/src/components/layouts/auth-layout.tsx:11:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
						"data-tsd-source": "/src/components/layouts/auth-layout.tsx:12:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/layouts/auth-layout.tsx:13:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-sidebar-accent-foreground",
						"data-tsd-source": "/src/components/layouts/auth-layout.tsx:15:11",
						children: APP_NAME
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md space-y-4",
					"data-tsd-source": "/src/components/layouts/auth-layout.tsx:17:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold text-sidebar-accent-foreground",
						"data-tsd-source": "/src/components/layouts/auth-layout.tsx:18:11",
						children: "One platform for every clinic branch."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-sidebar-foreground/70",
						"data-tsd-source": "/src/components/layouts/auth-layout.tsx:21:11",
						children: APP_TAGLINE
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-sidebar-foreground/50",
					"data-tsd-source": "/src/components/layouts/auth-layout.tsx:23:9",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						APP_NAME
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex flex-col",
			"data-tsd-source": "/src/components/layouts/auth-layout.tsx:28:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end p-4",
				"data-tsd-source": "/src/components/layouts/auth-layout.tsx:29:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { "data-tsd-source": "/src/components/layouts/auth-layout.tsx:30:11" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center px-4 pb-16",
				"data-tsd-source": "/src/components/layouts/auth-layout.tsx:32:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-sm",
					"data-tsd-source": "/src/components/layouts/auth-layout.tsx:33:11",
					children
				})
			})]
		})]
	});
}
function AuthGroupLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		"data-tsd-source": "/src/routes/auth.tsx:10:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/auth.tsx:11:7" })
	});
}
//#endregion
export { AuthGroupLayout as component };
