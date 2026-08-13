import { At as Ellipsis } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { i as DropdownMenuItem, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { i as CardHeader, n as CardContent, t as Card } from "./card-e-zh1EWu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/widget-card-CD1uGIBd.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Shared shell for every dashboard widget: icon + title + optional
* description, an optional action slot and a consistent "more" menu.
*/
function WidgetCard({ title, description, icon: Icon, action, menuItems = [
	"Refresh data",
	"Export as CSV",
	"View details"
], showMenu = true, children, contentClassName, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("flex h-full flex-col", className),
		"data-tsd-source": "/src/components/dashboard/widget-card.tsx:40:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-4",
			"data-tsd-source": "/src/components/dashboard/widget-card.tsx:41:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-start gap-3",
				"data-tsd-source": "/src/components/dashboard/widget-card.tsx:42:9",
				children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
					"data-tsd-source": "/src/components/dashboard/widget-card.tsx:44:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/dashboard/widget-card.tsx:45:15"
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1",
					"data-tsd-source": "/src/components/dashboard/widget-card.tsx:48:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "truncate text-[15px] font-semibold leading-tight tracking-tight text-foreground",
						"data-tsd-source": "/src/components/dashboard/widget-card.tsx:49:13",
						children: title
					}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/dashboard/widget-card.tsx:53:15",
						children: description
					}) : null]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				"data-tsd-source": "/src/components/dashboard/widget-card.tsx:59:9",
				children: [action, showMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
					"data-tsd-source": "/src/components/dashboard/widget-card.tsx:62:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						"data-tsd-source": "/src/components/dashboard/widget-card.tsx:63:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "h-8 w-8 text-muted-foreground",
							"aria-label": `More options for ${title}`,
							"data-tsd-source": "/src/components/dashboard/widget-card.tsx:64:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
								className: "h-4 w-4",
								"data-tsd-source": "/src/components/dashboard/widget-card.tsx:70:19"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
						align: "end",
						className: "w-48",
						"data-tsd-source": "/src/components/dashboard/widget-card.tsx:73:15",
						children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							"data-tsd-source": "/src/components/dashboard/widget-card.tsx:75:19",
							children: item
						}, item))
					})]
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: cn("flex-1 pt-0", contentClassName),
			"data-tsd-source": "/src/components/dashboard/widget-card.tsx:82:7",
			children
		})]
	});
}
//#endregion
export { WidgetCard as t };
