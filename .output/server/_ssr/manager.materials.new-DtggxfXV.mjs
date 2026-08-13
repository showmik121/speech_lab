import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { K as Plus, Sn as ArrowLeft, ln as Boxes } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { n as CategoryCards, r as LowStockPanel, t as AddMaterialDialog } from "./add-material-dialog-CmZwftHJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.materials.new-DtggxfXV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewMaterialPage() {
	const [open, setOpen] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.materials.new.tsx:33:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Add Material",
				description: "Register a new material into branch inventory in four steps.",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Materials & Sales",
						to: "/manager/materials"
					},
					{ label: "Add Material" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back to inventory"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Open wizard"]
				})] }),
				"data-tsd-source": "/src/routes/manager.materials.new.tsx:34:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]",
				"data-tsd-source": "/src/routes/manager.materials.new.tsx:58:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					"data-tsd-source": "/src/routes/manager.materials.new.tsx:59:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							"data-tsd-source": "/src/routes/manager.materials.new.tsx:60:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.materials.new.tsx:61:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.materials.new.tsx:62:15"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.materials.new.tsx:64:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[15px] font-semibold tracking-tight text-foreground",
									"data-tsd-source": "/src/routes/manager.materials.new.tsx:65:15",
									children: "Four-step registration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.materials.new.tsx:68:15",
									children: "Basic information, inventory and pricing, supplier details, then a final review before saving."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							"data-tsd-source": "/src/routes/manager.materials.new.tsx:75:11",
							children: [
								{
									step: 1,
									title: "Basic Information",
									hint: "Name, code, category, brand, image"
								},
								{
									step: 2,
									title: "Inventory",
									hint: "Unit, prices, opening and minimum stock"
								},
								{
									step: 3,
									title: "Supplier",
									hint: "Vendor name, phone, email, address"
								},
								{
									step: 4,
									title: "Review",
									hint: "Confirm the summary and save"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-xl border border-border bg-muted/25 p-4",
								"data-tsd-source": "/src/routes/manager.materials.new.tsx:82:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[12px] font-semibold text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.materials.new.tsx:86:17",
									children: item.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/manager.materials.new.tsx:89:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium text-foreground",
										"data-tsd-source": "/src/routes/manager.materials.new.tsx:90:19",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.materials.new.tsx:91:19",
										children: item.hint
									})]
								})]
							}, item.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-6",
							onClick: () => setOpen(true),
							"data-tsd-source": "/src/routes/manager.materials.new.tsx:97:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/manager.materials.new.tsx:98:13"
							}), "Add Material"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LowStockPanel, { "data-tsd-source": "/src/routes/manager.materials.new.tsx:103:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Categories",
				className: "space-y-4",
				"data-tsd-source": "/src/routes/manager.materials.new.tsx:106:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[15px] font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/manager.materials.new.tsx:107:9",
					children: "Pick a category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCards, { "data-tsd-source": "/src/routes/manager.materials.new.tsx:110:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddMaterialDialog, {
				open,
				onOpenChange: setOpen,
				"data-tsd-source": "/src/routes/manager.materials.new.tsx:113:7"
			})
		]
	});
}
//#endregion
export { NewMaterialPage as component };
