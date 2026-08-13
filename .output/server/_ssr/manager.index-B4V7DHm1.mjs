import { gt as KeyRound, mt as LayoutGrid, on as Building2, u as UserRound } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as getActiveBranch, r as getManagerSession } from "./manager-session-DG-Fmn51.mjs";
import { a as CardTitle, n as CardContent, r as CardDescription, t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.index-B4V7DHm1.js
var import_jsx_runtime = require_jsx_runtime();
function ManagerHome() {
	const branch = getActiveBranch();
	const session = getManagerSession();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.index.tsx:26:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: branch ? `${branch.name} workspace` : "Branch Manager workspace",
				description: branch ? `Signed in as ${session?.managerName ?? "Branch Manager"} · ${branch.manager.managerId}` : "Placeholder route group. Branch-level modules will mount here.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Placeholder action"
				}),
				"data-tsd-source": "/src/routes/manager.index.tsx:27:7"
			}),
			branch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branch identity",
				className: "grid gap-4 sm:grid-cols-3",
				"data-tsd-source": "/src/routes/manager.index.tsx:38:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-tsd-source": "/src/routes/manager.index.tsx:39:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex items-center gap-3 p-5",
							"data-tsd-source": "/src/routes/manager.index.tsx:40:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.index.tsx:41:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.index.tsx:42:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.index.tsx:44:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-sm",
									"data-tsd-source": "/src/routes/manager.index.tsx:45:17",
									children: branch.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
									className: "mt-0.5 truncate",
									"data-tsd-source": "/src/routes/manager.index.tsx:46:17",
									children: [
										branch.city,
										", ",
										branch.division
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-tsd-source": "/src/routes/manager.index.tsx:53:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex items-center gap-3 p-5",
							"data-tsd-source": "/src/routes/manager.index.tsx:54:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.index.tsx:55:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.index.tsx:56:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.index.tsx:58:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-sm",
									"data-tsd-source": "/src/routes/manager.index.tsx:59:17",
									children: branch.manager.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
									className: "mt-0.5 truncate",
									"data-tsd-source": "/src/routes/manager.index.tsx:60:17",
									children: ["Branch Manager · since ", branch.manager.since]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-tsd-source": "/src/routes/manager.index.tsx:67:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "flex items-center gap-3 p-5",
							"data-tsd-source": "/src/routes/manager.index.tsx:68:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.index.tsx:69:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.index.tsx:70:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.index.tsx:72:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "font-mono text-sm",
									"data-tsd-source": "/src/routes/manager.index.tsx:73:17",
									children: branch.manager.managerId
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "mt-0.5 truncate",
									"data-tsd-source": "/src/routes/manager.index.tsx:74:17",
									children: "Your unique manager key"
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: LayoutGrid,
				title: "No modules mounted yet",
				description: "This workspace reuses the same shell, navigation and component library as every other role.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Primary action" }),
				secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					children: "Learn more"
				}),
				"data-tsd-source": "/src/routes/manager.index.tsx:83:7"
			})
		]
	});
}
//#endregion
export { ManagerHome as component };
