import { c as UserRound, dt as KeyRound, lt as LayoutGrid, rn as Building2 } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { n as getActiveBranch, r as getManagerSession } from "./manager-session-DG-Fmn51.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { a as CardTitle, n as CardContent, r as CardDescription, t as Card } from "./card-e-zh1EWu.mjs";
import { t as EmptyState } from "./empty-state-Cu0SfqSK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.index-Cs6goFOi.js
var import_jsx_runtime = require_jsx_runtime();
function ManagerHome() {
	const branch = getActiveBranch();
	const session = getManagerSession();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: branch ? `${branch.name} workspace` : "Branch Manager workspace",
				description: branch ? `Signed in as ${session?.managerName ?? "Branch Manager"} · ${branch.manager.managerId}` : "Placeholder route group. Branch-level modules will mount here.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Placeholder action"
				})
			}),
			branch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branch identity",
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex items-center gap-3 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: branch.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
								className: "mt-0.5 truncate",
								children: [
									branch.city,
									", ",
									branch.division
								]
							})]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex items-center gap-3 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-sm",
								children: branch.manager.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
								className: "mt-0.5 truncate",
								children: ["Branch Manager · since ", branch.manager.since]
							})]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex items-center gap-3 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "font-mono text-sm",
								children: branch.manager.managerId
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								className: "mt-0.5 truncate",
								children: "Your unique manager key"
							})]
						})]
					}) })
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
				})
			})
		]
	});
}
//#endregion
export { ManagerHome as component };
