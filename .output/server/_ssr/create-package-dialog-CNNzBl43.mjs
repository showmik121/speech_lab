import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { At as Ellipsis, Pt as Copy, S as Sun, W as Power, X as PencilLine, Xt as Check, dt as LoaderCircle, en as CalendarRange, gn as BadgePercent, ht as Layers, s as Users, wt as Globe } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as PACKAGE_STATUSES, c as PACKAGE_TYPE_TONE, o as PACKAGE_STATUS_TONE, s as PACKAGE_TYPES } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-package-dialog-CNNzBl43.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPE_ICON = {
	Daily: Sun,
	"Session Wise": Layers,
	Monthly: CalendarRange,
	"Online Booking": Globe
};
function PackageCard({ item, onEdit, onDiscount, onCollect }) {
	const Icon = TYPE_ICON[item.type];
	const netPrice = Math.round(item.price * (1 - item.discount / 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex h-full flex-col p-5",
		"data-tsd-source": "/src/components/payments/package-card.tsx:55:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/payments/package-card.tsx:56:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					"data-tsd-source": "/src/components/payments/package-card.tsx:57:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						"data-tsd-source": "/src/components/payments/package-card.tsx:58:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/package-card.tsx:59:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/payments/package-card.tsx:61:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/components/payments/package-card.tsx:62:13",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/payments/package-card.tsx:65:13",
							children: item.code
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageActions, {
					item,
					onEdit,
					onDiscount,
					"data-tsd-source": "/src/components/payments/package-card.tsx:68:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				"data-tsd-source": "/src/components/payments/package-card.tsx:71:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: PACKAGE_TYPE_TONE[item.type],
					label: item.type,
					dot: false,
					"data-tsd-source": "/src/components/payments/package-card.tsx:72:9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: PACKAGE_STATUS_TONE[item.status],
					label: item.status,
					"data-tsd-source": "/src/components/payments/package-card.tsx:73:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground",
				"data-tsd-source": "/src/components/payments/package-card.tsx:76:7",
				children: item.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-end gap-2 border-t border-border pt-4",
				"data-tsd-source": "/src/components/payments/package-card.tsx:80:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
					"data-tsd-source": "/src/components/payments/package-card.tsx:81:9",
					children: formatTaka(netPrice)
				}), item.discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] text-muted-foreground line-through tabular-nums",
					"data-tsd-source": "/src/components/payments/package-card.tsx:85:11",
					children: formatTaka(item.price)
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[12.5px]",
				"data-tsd-source": "/src/components/payments/package-card.tsx:91:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Duration",
						value: item.durationLabel,
						"data-tsd-source": "/src/components/payments/package-card.tsx:92:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Sessions",
						value: item.sessions === 1 ? "1 session" : `${item.sessions} sessions`,
						"data-tsd-source": "/src/components/payments/package-card.tsx:93:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Registration fee",
						value: formatTaka(item.registrationFee),
						"data-tsd-source": "/src/components/payments/package-card.tsx:94:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Expiry",
						value: item.expiry,
						"data-tsd-source": "/src/components/payments/package-card.tsx:95:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between gap-3 border-t border-border pt-4",
				"data-tsd-source": "/src/components/payments/package-card.tsx:98:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/payments/package-card.tsx:99:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/package-card.tsx:100:11"
						}),
						item.enrolledPatients,
						" enrolled"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => onEdit?.(item),
					"data-tsd-source": "/src/components/payments/package-card.tsx:103:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/package-card.tsx:104:11"
					}), "Edit"]
				})]
			})
		]
	});
}
function Meta({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/payments/package-card.tsx:114:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/payments/package-card.tsx:115:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate font-medium text-foreground",
			"data-tsd-source": "/src/components/payments/package-card.tsx:116:7",
			children: value
		})]
	});
}
function PackageActions({ item, onEdit, onDiscount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/payments/package-card.tsx:131:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/payments/package-card.tsx:132:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "shrink-0 text-muted-foreground",
				"aria-label": `Actions for ${item.name}`,
				"data-tsd-source": "/src/components/payments/package-card.tsx:133:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/payments/package-card.tsx:139:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/payments/package-card.tsx:142:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onEdit?.(item),
					"data-tsd-source": "/src/components/payments/package-card.tsx:143:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/package-card.tsx:144:11"
					}), "Edit package"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/payments/package-card.tsx:147:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/package-card.tsx:148:11"
					}), "Duplicate"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onDiscount?.(item),
					"data-tsd-source": "/src/components/payments/package-card.tsx:151:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePercent, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/package-card.tsx:152:11"
					}), "Create discount"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/payments/package-card.tsx:155:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: cn(item.status === "Active" && "text-danger"),
					"data-tsd-source": "/src/components/payments/package-card.tsx:156:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/payments/package-card.tsx:157:11"
					}), item.status === "Active" ? "Deactivate" : "Activate"]
				})
			]
		})]
	});
}
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
		className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"),
		"data-tsd-source": "/src/components/ui/switch.tsx:18:5"
	})
}));
Switch.displayName = Switch$1.displayName;
var STEPS = [
	{
		id: 1,
		title: "Basic Information",
		description: "Name, type and availability"
	},
	{
		id: 2,
		title: "Pricing",
		description: "Price, fees, discount and tax"
	},
	{
		id: 3,
		title: "Rules",
		description: "Duration, sessions and expiry"
	}
];
/**
* UI-only multi-step package builder.
* Nothing is persisted — the Django REST API will own this later.
*/
function CreatePackageDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const current = STEPS[step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:61:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:68:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:69:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:70:11",
						children: "Create package"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:71:11",
						children: "Define a billing package for daily, session-wise, monthly or online booking care."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:76:9",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:80:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:81:17",
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3.5 w-3.5",
										"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:90:39"
									}) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 sm:block",
									"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:92:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:93:19",
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:103:19"
								}) : null
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:hidden",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:110:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:111:11",
						children: [
							"Step ",
							step,
							" of ",
							STEPS.length,
							" — ",
							current.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:114:11",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBasic, { "data-tsd-source": "/src/components/payments/create-package-dialog.tsx:117:23" }) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPricing, { "data-tsd-source": "/src/components/payments/create-package-dialog.tsx:117:52" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepRules, { "data-tsd-source": "/src/components/payments/create-package-dialog.tsx:117:70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:119:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:120:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:123:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:125:15",
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:130:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:132:15",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:134:19"
							}) : null, "Create package"]
						})]
					})]
				})
			]
		})
	});
}
function StepBasic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:148:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-name",
				label: "Package name",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:149:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-name",
					placeholder: "e.g. 10 Session Package",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:150:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-type",
				label: "Package type",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:152:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:153:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "package-type",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:154:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select type",
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:155:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:157:11",
						children: PACKAGE_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: type,
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:159:15",
							children: type
						}, type))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-description",
				label: "Description",
				hint: "Shown to guardians on the invoice",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:166:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "package-description",
					rows: 3,
					placeholder: "What is included in this package…",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:172:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-status",
				label: "Status",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:178:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "Active",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:179:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "package-status",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:180:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select status",
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:181:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:183:11",
						children: PACKAGE_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: status,
							"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:185:15",
							children: status
						}, status))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-featured",
				label: "Highlight on booking page",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:192:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-9 items-center gap-3",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:193:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: "package-featured",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:194:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:195:11",
						children: "Feature this package"
					})]
				})
			})
		]
	});
}
function StepPricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:204:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-price",
				label: "Price (৳)",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:205:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-price",
					type: "number",
					min: 0,
					placeholder: "10500",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:206:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-registration",
				label: "Registration fee (৳)",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:208:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-registration",
					type: "number",
					min: 0,
					placeholder: "500",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:209:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-discount",
				label: "Discount (%)",
				hint: "Applied on the package price",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:211:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-discount",
					type: "number",
					min: 0,
					max: 100,
					placeholder: "8",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:212:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-tax",
				label: "Tax / VAT (%)",
				hint: "Placeholder — tax rules configured later",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:214:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-tax",
					placeholder: "0.00",
					disabled: true,
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:219:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-price-note",
				label: "Pricing note",
				className: "sm:col-span-2",
				hint: "Internal note for the accounts team",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:221:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "package-price-note",
					rows: 2,
					placeholder: "Optional note…",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:227:9"
				})
			})
		]
	});
}
function StepRules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:235:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-duration",
				label: "Package duration",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:236:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-duration",
					placeholder: "e.g. 2 months",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:237:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-sessions",
				label: "Number of sessions",
				required: true,
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:239:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-sessions",
					type: "number",
					min: 1,
					placeholder: "10",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:240:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-expiry",
				label: "Expiry",
				hint: "When unused sessions lapse",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:242:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-expiry",
					placeholder: "60 days from purchase",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:243:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-grace",
				label: "Grace period (days)",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:245:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "package-grace",
					type: "number",
					min: 0,
					placeholder: "7",
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:246:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-refund",
				label: "Refund policy",
				className: "sm:col-span-2",
				hint: "Placeholder — final policy text will come from the API",
				"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:248:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "package-refund",
					rows: 3,
					placeholder: "Unused sessions refundable within 30 days…",
					disabled: true,
					"data-tsd-source": "/src/components/payments/create-package-dialog.tsx:254:9"
				})
			})
		]
	});
}
//#endregion
export { PackageCard as n, CreatePackageDialog as t };
