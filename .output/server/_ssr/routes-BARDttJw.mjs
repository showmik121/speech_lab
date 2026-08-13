import { n as APP_TAGLINE, t as APP_NAME } from "./app-C79kJ1VZ.mjs";
import { En as Activity, k as ShieldCheck, on as Building2, xn as ArrowRight } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as CardTitle, n as CardContent, r as CardDescription, t as Card } from "./card-e-zh1EWu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BARDttJw.js
var import_jsx_runtime = require_jsx_runtime();
var workspaces = [{
	icon: ShieldCheck,
	title: "Super Admin",
	description: "Organisation-wide management",
	to: "/super-admin"
}, {
	icon: Building2,
	title: "Branch Manager",
	description: "Manage branch operations",
	to: "/auth/login",
	search: { mode: "manager" }
}];
function EntryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-16 sm:px-6",
		"data-tsd-source": "/src/routes/index.tsx:47:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl text-center",
			"data-tsd-source": "/src/routes/index.tsx:48:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20",
					"data-tsd-source": "/src/routes/index.tsx:49:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "h-6 w-6",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/index.tsx:50:11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
					"data-tsd-source": "/src/routes/index.tsx:53:9",
					children: APP_NAME
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-muted-foreground sm:text-lg",
					"data-tsd-source": "/src/routes/index.tsx:56:9",
					children: APP_TAGLINE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5",
					"data-tsd-source": "/src/routes/index.tsx:60:9",
					children: workspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						interactive: true,
						className: "group relative text-left",
						"data-tsd-source": "/src/routes/index.tsx:62:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5 sm:p-6",
							"data-tsd-source": "/src/routes/index.tsx:67:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
									"data-tsd-source": "/src/routes/index.tsx:68:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(workspace.icon, {
										className: "h-5 w-5",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/index.tsx:69:19"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/index.tsx:72:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										"data-tsd-source": "/src/routes/index.tsx:73:19",
										children: workspace.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "mt-1",
										"data-tsd-source": "/src/routes/index.tsx:74:19",
										children: workspace.description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary",
									"data-tsd-source": "/src/routes/index.tsx:79:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/index.tsx:80:19"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: workspace.to,
									search: "search" in workspace ? workspace.search : void 0,
									className: "absolute inset-0 z-10 rounded-xl",
									"aria-label": `${workspace.title} — ${workspace.description}`,
									"data-tsd-source": "/src/routes/index.tsx:83:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										"data-tsd-source": "/src/routes/index.tsx:89:19",
										children: ["Open ", workspace.title]
									})
								})
							]
						})
					}, workspace.title))
				})
			]
		})
	});
}
//#endregion
export { EntryPage as component };
