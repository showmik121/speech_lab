import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Cn as ArrowDownToLine, Xt as Check, _ as TriangleAlert, dt as LoaderCircle, ln as Boxes, vt as ImagePlus, xn as ArrowRight } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { f as MATERIAL_UNITS, n as LOW_STOCK_PRIORITY_TONE, o as MATERIAL_CATEGORIES, s as MATERIAL_CATEGORY_NAMES, t as LOW_STOCK_ALERTS, x as STORAGE_LOCATIONS } from "./material-data-BTa-_ze7.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as MaterialThumbnail, t as CATEGORY_ICONS } from "./material-thumbnail-C8HG_YN1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/add-material-dialog-CmZwftHJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function CategoryCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		"data-tsd-source": "/src/components/materials/category-cards.tsx:20:5",
		children: MATERIAL_CATEGORIES.map((category) => {
			const Icon = CATEGORY_ICONS[category.icon] ?? Boxes;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "group p-5",
				"data-tsd-source": "/src/components/materials/category-cards.tsx:24:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/materials/category-cards.tsx:25:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", TONE[category.tone]),
							"data-tsd-source": "/src/components/materials/category-cards.tsx:26:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/materials/category-cards.tsx:32:17"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "neutral",
							label: `${category.itemCount} items`,
							dot: false,
							"data-tsd-source": "/src/components/materials/category-cards.tsx:34:15"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 truncate text-[15px] font-semibold tracking-tight text-foreground",
						"data-tsd-source": "/src/components/materials/category-cards.tsx:41:13",
						children: category.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/materials/category-cards.tsx:44:13",
						children: category.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[12.5px]",
						"data-tsd-source": "/src/components/materials/category-cards.tsx:48:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/components/materials/category-cards.tsx:49:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
								"data-tsd-source": "/src/components/materials/category-cards.tsx:50:17",
								children: "Stock units"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-semibold tabular-nums text-foreground",
								"data-tsd-source": "/src/components/materials/category-cards.tsx:53:17",
								children: category.stockUnits
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/components/materials/category-cards.tsx:57:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
								"data-tsd-source": "/src/components/materials/category-cards.tsx:58:17",
								children: "Stock value"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 truncate font-semibold tabular-nums text-foreground",
								"data-tsd-source": "/src/components/materials/category-cards.tsx:61:17",
								children: formatTaka(category.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials",
						search: { tab: "inventory" },
						className: "mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-primary transition-enterprise hover:gap-2.5",
						"data-tsd-source": "/src/components/materials/category-cards.tsx:67:13",
						children: ["View materials", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/category-cards.tsx:73:15"
						})]
					})
				]
			}, category.id);
		})
	});
}
/**
* Alert panel for materials at or below their minimum stock level.
* Reorder quantity is derived in the data layer (UI only, no persistence).
*/
function LowStockPanel({ alerts = LOW_STOCK_ALERTS, onStockIn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Low stock alerts",
		description: `${alerts.length} materials need restocking`,
		icon: TriangleAlert,
		menuItems: [
			"Raise purchase order",
			"Export reorder list",
			"Notify supplier"
		],
		contentClassName: "space-y-3",
		"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:25:5",
		children: alerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-lg border border-dashed border-border px-4 py-8 text-center text-[13px] text-muted-foreground",
			"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:33:9",
			children: "Every material is above its minimum stock level."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:37:9",
			children: alerts.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("rounded-xl border p-4 transition-enterprise hover:bg-surface-hover", alert.priority === "Critical" ? "border-danger/35 bg-danger/[0.04]" : alert.priority === "High" ? "border-warning/35 bg-warning/[0.05]" : "border-border bg-muted/25"),
				"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:39:13",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:50:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:51:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/manager/materials/$materialId",
								params: { materialId: alert.materialId },
								className: "block truncate text-sm font-medium text-foreground hover:underline",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:52:19",
								children: alert.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate font-mono text-[12px] text-muted-foreground",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:59:19",
								children: [
									alert.code,
									" · ",
									alert.category
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: LOW_STOCK_PRIORITY_TONE[alert.priority],
							label: alert.priority,
							"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:63:17"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 grid grid-cols-3 gap-2 text-[12.5px]",
						"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:69:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:70:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:71:19",
									children: "Current"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: cn("mt-0.5 font-semibold tabular-nums", alert.currentStock === 0 ? "text-danger" : "text-warning"),
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:74:19",
									children: alert.currentStock
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:83:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:84:19",
									children: "Minimum"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5 font-semibold tabular-nums text-foreground",
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:87:19",
									children: alert.minStock
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:91:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:92:19",
									children: "Required"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5 font-semibold tabular-nums text-primary",
									"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:95:19",
									children: alert.required
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center justify-between gap-2",
						"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:101:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 truncate text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:102:17",
							children: alert.supplier
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => onStockIn?.(alert),
							"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:105:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/materials/low-stock-panel.tsx:106:19"
							}), "Stock In"]
						})]
					})
				]
			}, alert.id))
		})
	});
}
var STEPS = [
	{
		id: 1,
		title: "Basic Information",
		description: "Name, category and image"
	},
	{
		id: 2,
		title: "Inventory",
		description: "Pricing, stock and location"
	},
	{
		id: 3,
		title: "Supplier",
		description: "Vendor contact details"
	},
	{
		id: 4,
		title: "Review",
		description: "Confirm before saving"
	}
];
var EMPTY = {
	name: "",
	code: "",
	category: "Speech Cards",
	brand: "",
	description: "",
	unit: "Piece",
	purchasePrice: "",
	sellingPrice: "",
	openingStock: "",
	minStock: "",
	location: STORAGE_LOCATIONS[0],
	supplierName: "",
	supplierPhone: "",
	supplierEmail: "",
	supplierAddress: ""
};
/**
* UI-only 4-step material creation wizard.
* Nothing is persisted — the Django REST API will own this later.
*/
function AddMaterialDialog({ open, onOpenChange, presetCategory }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)({
		...EMPTY,
		category: presetCategory ?? EMPTY.category
	});
	const set = (patch) => setDraft((current) => ({
		...current,
		...patch
	}));
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setStep(1);
			setDraft({
				...EMPTY,
				category: presetCategory ?? EMPTY.category
			});
		}, 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const current = STEPS[step - 1];
	const canContinue = step !== 1 || draft.name.trim().length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:117:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:124:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:125:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:126:11",
						children: "Add material"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:127:11",
						children: "Register a therapy material, educational toy or equipment item into branch inventory."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:132:9",
					children: STEPS.map((item) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:136:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
								"aria-current": state === "current" ? "step" : void 0,
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:137:17",
								children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-3.5 w-3.5",
									"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:146:39"
								}) : item.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden min-w-0 sm:block",
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:148:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-[12.5px] font-medium text-foreground",
									"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:149:19",
									children: item.title
								})
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:158:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:159:11",
						children: current.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:160:11",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBasic, {
					draft,
					set,
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:164:11"
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepInventory, {
					draft,
					set,
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:166:11"
				}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSupplier, {
					draft,
					set,
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:168:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
					draft,
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:170:11"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:173:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:174:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:177:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:179:15",
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:184:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:188:15",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:190:19"
							}) : null, "Save"]
						})]
					})]
				})
			]
		})
	});
}
function StepBasic({ draft, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:204:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-name",
				label: "Material name",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:205:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-name",
					value: draft.name,
					onChange: (event) => set({ name: event.target.value }),
					placeholder: "e.g. Articulation Card Deck (Bangla)",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:206:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-code",
				label: "Material code",
				hint: "Leave blank to auto-generate",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:213:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-code",
					value: draft.code,
					onChange: (event) => set({ code: event.target.value }),
					placeholder: "MAT-DHK-1016",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:214:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-category",
				label: "Category",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:221:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: draft.category,
					onValueChange: (next) => set({ category: next }),
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:222:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "material-category",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:226:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select category",
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:227:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:229:11",
						children: MATERIAL_CATEGORY_NAMES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:231:15",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-brand",
				label: "Brand",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:238:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-brand",
					value: draft.brand,
					onChange: (event) => set({ brand: event.target.value }),
					placeholder: "e.g. Shikkha Tools",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:239:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-description",
				label: "Description",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:246:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "material-description",
					rows: 3,
					value: draft.description,
					onChange: (event) => set({ description: event.target.value }),
					placeholder: "What the material is used for in therapy…",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:247:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:256:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-medium text-foreground",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:257:9",
					children: "Material image"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-xl border border-dashed border-border bg-muted/25 p-4",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:258:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
						category: draft.category,
						size: "lg",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:259:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:260:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-medium text-foreground",
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:261:13",
								children: "Image upload placeholder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:262:13",
								children: "PNG or JPG up to 2 MB. Uploads are wired up with the API later."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "mt-3",
								type: "button",
								"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:265:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:266:15"
								}), "Choose image"]
							})
						]
					})]
				})]
			})
		]
	});
}
function StepInventory({ draft, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:278:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-unit",
				label: "Unit",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:279:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: draft.unit,
					onValueChange: (next) => set({ unit: next }),
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:280:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "material-unit",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:281:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select unit",
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:282:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:284:11",
						children: MATERIAL_UNITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:286:15",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-location",
				label: "Storage location",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:293:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: draft.location,
					onValueChange: (next) => set({ location: next }),
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:294:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "material-location",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:295:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select location",
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:296:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:298:11",
						children: STORAGE_LOCATIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:300:15",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-purchase",
				label: "Purchase price (৳)",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:307:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-purchase",
					type: "number",
					min: 0,
					value: draft.purchasePrice,
					onChange: (event) => set({ purchasePrice: event.target.value }),
					placeholder: "620",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:308:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-selling",
				label: "Selling price (৳)",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:317:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-selling",
					type: "number",
					min: 0,
					value: draft.sellingPrice,
					onChange: (event) => set({ sellingPrice: event.target.value }),
					placeholder: "950",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:318:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-opening",
				label: "Opening stock",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:327:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-opening",
					type: "number",
					min: 0,
					value: draft.openingStock,
					onChange: (event) => set({ openingStock: event.target.value }),
					placeholder: "40",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:328:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "material-min",
				label: "Minimum stock",
				hint: "Low stock alerts trigger at this level",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:337:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "material-min",
					type: "number",
					min: 0,
					value: draft.minStock,
					onChange: (event) => set({ minStock: event.target.value }),
					placeholder: "15",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:342:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-muted/30 p-4 sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:352:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:353:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:354:11",
						children: "Estimated margin per unit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tabular-nums text-foreground",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:355:11",
						children: formatTaka(Math.max(Number(draft.sellingPrice || 0) - Number(draft.purchasePrice || 0), 0))
					})]
				})
			})
		]
	});
}
function StepSupplier({ draft, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:368:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "supplier-name",
				label: "Supplier name",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:369:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "supplier-name",
					value: draft.supplierName,
					onChange: (event) => set({ supplierName: event.target.value }),
					placeholder: "e.g. Shikkha Learning Supplies",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:370:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "supplier-phone",
				label: "Phone",
				required: true,
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:377:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "supplier-phone",
					value: draft.supplierPhone,
					onChange: (event) => set({ supplierPhone: event.target.value }),
					placeholder: "+880 1711-458920",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:378:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "supplier-email",
				label: "Email",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:385:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "supplier-email",
					type: "email",
					value: draft.supplierEmail,
					onChange: (event) => set({ supplierEmail: event.target.value }),
					placeholder: "sales@supplier.com.bd",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:386:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "supplier-address",
				label: "Address",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:394:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "supplier-address",
					rows: 3,
					value: draft.supplierAddress,
					onChange: (event) => set({ supplierAddress: event.target.value }),
					placeholder: "House 41, Road 7, Dhanmondi, Dhaka 1205",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:395:9"
				})
			})
		]
	});
}
function StepReview({ draft }) {
	const rows = [
		{
			label: "Material name",
			value: draft.name || "—"
		},
		{
			label: "Material code",
			value: draft.code || "Auto-generated"
		},
		{
			label: "Category",
			value: draft.category
		},
		{
			label: "Brand",
			value: draft.brand || "—"
		},
		{
			label: "Unit",
			value: draft.unit
		},
		{
			label: "Storage location",
			value: draft.location
		},
		{
			label: "Purchase price",
			value: draft.purchasePrice ? formatTaka(Number(draft.purchasePrice)) : "—"
		},
		{
			label: "Selling price",
			value: draft.sellingPrice ? formatTaka(Number(draft.sellingPrice)) : "—"
		},
		{
			label: "Opening stock",
			value: draft.openingStock || "—"
		},
		{
			label: "Minimum stock",
			value: draft.minStock || "—"
		},
		{
			label: "Supplier",
			value: draft.supplierName || "—"
		},
		{
			label: "Supplier phone",
			value: draft.supplierPhone || "—"
		},
		{
			label: "Supplier email",
			value: draft.supplierEmail || "—"
		},
		{
			label: "Supplier address",
			value: draft.supplierAddress || "—"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:432:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-4 shadow-card",
			"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:433:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
				category: draft.category,
				size: "lg",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:434:9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:435:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:436:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold text-foreground",
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:437:13",
						children: draft.name || "Untitled material"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "info",
						label: draft.category,
						dot: false,
						"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:440:13"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12.5px] leading-relaxed text-muted-foreground",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:442:11",
					children: draft.description || "No description added."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid gap-4 rounded-xl border border-border p-4 sm:grid-cols-2",
			"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:448:7",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:450:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:451:13",
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-0.5 truncate text-[13px] text-foreground",
					"data-tsd-source": "/src/components/materials/add-material-dialog.tsx:454:13",
					children: row.value
				})]
			}, row.label))
		})]
	});
}
//#endregion
export { CategoryCards as n, LowStockPanel as r, AddMaterialDialog as t };
