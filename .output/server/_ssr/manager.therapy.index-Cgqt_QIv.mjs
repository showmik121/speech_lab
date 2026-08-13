import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { At as Ellipsis, Ct as Hand, En as Activity, K as Plus, T as Sparkles, W as Power, X as PencilLine, cn as Brain, dt as LoaderCircle, ht as Layers, l as User, rt as Minus, s as Users, t as Zap } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { a as THERAPY_TYPES, i as THERAPY_STATUS_TONE, n as THERAPY_CATEGORY_TONE, r as THERAPY_STATUSES, t as THERAPY_CATEGORIES } from "./therapy-types-CcVTVE9G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy.index-Cgqt_QIv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORY_ICON = {
	"Speech & Language": Activity,
	Behavioural: Brain,
	Occupational: Hand,
	Sensory: Zap,
	Individual: User,
	Group: Users,
	Other: Sparkles
};
function TherapyCard({ item, onEdit }) {
	const Icon = CATEGORY_ICON[item.category];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex h-full flex-col p-5",
		"data-tsd-source": "/src/components/therapy/therapy-card.tsx:54:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:55:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:56:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:57:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:58:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:60:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:61:13",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:64:13",
							children: [
								item.shortName,
								" · ",
								item.code
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyActions, {
					item,
					onEdit,
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:69:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:72:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: THERAPY_CATEGORY_TONE[item.category],
					label: item.category,
					dot: false,
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:73:9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: THERAPY_STATUS_TONE[item.status],
					label: item.status,
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:74:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:77:7",
				children: item.description
			}),
			item.goals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:83:9",
				children: item.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-[11.5px] font-medium text-muted-foreground",
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:85:13",
					children: goal
				}, goal))
			}),
			item.fees.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2 border-t border-border pt-4",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:97:9",
				children: item.fees.map((fee) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:99:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:100:15",
						children: fee.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:101:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[15px] font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:102:17",
							children: formatTaka(fee.price)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-muted/60 px-1.5 py-0.5 text-[11px] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:105:17",
							children: fee.duration
						})]
					})]
				}, fee.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between gap-3 border-t border-border pt-4",
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:115:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:116:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/therapy/therapy-card.tsx:117:11"
						}),
						item.fees.length,
						" fee tier",
						item.fees.length !== 1 ? "s" : ""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => onEdit?.(item),
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:120:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:121:11"
					}), "Edit"]
				})]
			})
		]
	});
}
function TherapyActions({ item, onEdit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/therapy/therapy-card.tsx:137:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/therapy/therapy-card.tsx:138:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "shrink-0 text-muted-foreground",
				"aria-label": `Actions for ${item.name}`,
				"data-tsd-source": "/src/components/therapy/therapy-card.tsx:139:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:145:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-48",
			"data-tsd-source": "/src/components/therapy/therapy-card.tsx:148:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onEdit?.(item),
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:149:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:150:11"
					}), "Edit therapy"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/therapy/therapy-card.tsx:153:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: cn(item.status === "Active" && "text-danger"),
					"data-tsd-source": "/src/components/therapy/therapy-card.tsx:154:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/therapy/therapy-card.tsx:155:11"
					}), item.status === "Active" ? "Deactivate" : "Activate"]
				})
			]
		})]
	});
}
function CreateTherapyDialog({ open, onOpenChange }) {
	const [name, setName] = (0, import_react.useState)("");
	const [shortName, setShortName] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Active");
	const [description, setDescription] = (0, import_react.useState)("");
	const [goals, setGoals] = (0, import_react.useState)("");
	const [fees, setFees] = (0, import_react.useState)([]);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const close = () => {
		onOpenChange(false);
		setName("");
		setShortName("");
		setCategory("");
		setStatus("Active");
		setDescription("");
		setGoals("");
		setFees([]);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const updateFee = (index, field, value) => {
		setFees((prev) => prev.map((fee, i) => i === index ? {
			...fee,
			[field]: field === "price" ? Number(value) : value
		} : fee));
	};
	const addFee = () => setFees((prev) => [...prev, {
		label: "",
		price: 0,
		duration: ""
	}]);
	const removeFee = (index) => setFees((prev) => prev.filter((_, i) => i !== index));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:75:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:76:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:77:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:78:11",
						children: "Add Therapy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:79:11",
						children: "Define a new therapy type, its focus areas, and pricing."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:84:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-name",
							label: "Therapy name",
							required: true,
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:85:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "create-therapy-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "e.g. Speech & Language Therapy",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:86:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-short",
							label: "Short name / abbreviation",
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:94:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "create-therapy-short",
								value: shortName,
								onChange: (e) => setShortName(e.target.value),
								placeholder: "e.g. SLT",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:95:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-category",
							label: "Category",
							required: true,
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:103:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: category,
								onValueChange: setCategory,
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:104:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "create-therapy-category",
									"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:105:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select category",
										"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:106:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:108:15",
									children: THERAPY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c,
										"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:110:19",
										children: c
									}, c))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-status",
							label: "Status",
							required: true,
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:116:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: setStatus,
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:117:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "create-therapy-status",
									"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:118:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select status",
										"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:119:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:121:15",
									children: THERAPY_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: s,
										"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:123:19",
										children: s
									}, s))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-description",
							label: "Description",
							className: "sm:col-span-2",
							hint: "Shown to guardians and on invoices",
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:129:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "create-therapy-description",
								rows: 2,
								value: description,
								onChange: (e) => setDescription(e.target.value),
								placeholder: "Brief description of this therapy…",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:135:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "create-therapy-goals",
							label: "Goals / focus areas",
							className: "sm:col-span-2",
							hint: "One per line",
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:144:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "create-therapy-goals",
								rows: 3,
								value: goals,
								onChange: (e) => setGoals(e.target.value),
								placeholder: "Speech Delay\nLanguage Delay\nCommunication সমস্যা",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:150:13"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-border pt-4",
					"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:161:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:162:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-foreground",
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:163:13",
							children: "Fee tiers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: addFee,
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:164:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-3.5 w-3.5",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:165:15"
							}), "Add fee"]
						})]
					}), fees.map((fee, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_auto_auto_auto] items-center gap-2",
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:170:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fee.label,
								onChange: (e) => updateFee(index, "label", e.target.value),
								placeholder: "Label (e.g. Standard session)",
								className: "text-[13px]",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:171:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								value: fee.price,
								onChange: (e) => updateFee(index, "price", e.target.value),
								placeholder: "৳",
								className: "w-24 text-[13px]",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:177:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fee.duration,
								onChange: (e) => updateFee(index, "duration", e.target.value),
								placeholder: "Duration",
								className: "w-28 text-[13px]",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:185:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								className: "text-muted-foreground hover:text-danger",
								onClick: () => removeFee(index),
								"aria-label": "Remove fee tier",
								"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:191:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:198:17"
								})
							})
						]
					}, index))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:204:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:205:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting,
						"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:208:11",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/therapy/create-therapy-dialog.tsx:209:27"
						}) : null, "Create therapy"]
					})]
				})
			]
		})
	});
}
function EditTherapyDialog({ open, onOpenChange, item }) {
	const [name, setName] = (0, import_react.useState)("");
	const [shortName, setShortName] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [goals, setGoals] = (0, import_react.useState)("");
	const [fees, setFees] = (0, import_react.useState)([]);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (item) {
			setName(item.name);
			setShortName(item.shortName);
			setCategory(item.category);
			setStatus(item.status);
			setDescription(item.description);
			setGoals(item.goals.join("\n"));
			setFees(item.fees.map((f) => ({ ...f })));
		}
	}, [item]);
	const close = () => onOpenChange(false);
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const updateFee = (index, field, value) => {
		setFees((prev) => prev.map((fee, i) => i === index ? {
			...fee,
			[field]: field === "price" ? Number(value) : value
		} : fee));
	};
	const addFee = () => setFees((prev) => [...prev, {
		label: "",
		price: 0,
		duration: ""
	}]);
	const removeFee = (index) => setFees((prev) => prev.filter((_, i) => i !== index));
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:82:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:83:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:84:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:85:11",
						children: "Edit Therapy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:86:11",
						children: [
							"Update details for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:88:13",
								children: item.name
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:92:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-name",
							label: "Therapy name",
							required: true,
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:93:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-therapy-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "e.g. Speech & Language Therapy",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:94:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-short",
							label: "Short name / abbreviation",
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:102:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-therapy-short",
								value: shortName,
								onChange: (e) => setShortName(e.target.value),
								placeholder: "e.g. SLT",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:103:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-category",
							label: "Category",
							required: true,
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:111:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: category,
								onValueChange: setCategory,
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:112:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "edit-therapy-category",
									"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:113:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select category",
										"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:114:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:116:15",
									children: THERAPY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c,
										"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:118:19",
										children: c
									}, c))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-status",
							label: "Status",
							required: true,
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:124:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: setStatus,
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:125:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "edit-therapy-status",
									"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:126:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select status",
										"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:127:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:129:15",
									children: THERAPY_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: s,
										"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:131:19",
										children: s
									}, s))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-description",
							label: "Description",
							className: "sm:col-span-2",
							hint: "Shown to guardians and on invoices",
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:137:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "edit-therapy-description",
								rows: 2,
								value: description,
								onChange: (e) => setDescription(e.target.value),
								placeholder: "Brief description of this therapy…",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:143:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-therapy-goals",
							label: "Goals / focus areas",
							className: "sm:col-span-2",
							hint: "One per line",
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:152:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "edit-therapy-goals",
								rows: 3,
								value: goals,
								onChange: (e) => setGoals(e.target.value),
								placeholder: "Speech Delay\nLanguage Delay\nCommunication সমস্যা",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:158:13"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-border pt-4",
					"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:169:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:170:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-foreground",
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:171:13",
							children: "Fee tiers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: addFee,
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:172:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-3.5 w-3.5",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:173:15"
							}), "Add fee"]
						})]
					}), fees.map((fee, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_auto_auto_auto] items-center gap-2",
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:178:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fee.label,
								onChange: (e) => updateFee(index, "label", e.target.value),
								placeholder: "Label (e.g. Standard session)",
								className: "text-[13px]",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:179:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								value: fee.price,
								onChange: (e) => updateFee(index, "price", e.target.value),
								placeholder: "৳",
								className: "w-24 text-[13px]",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:185:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fee.duration,
								onChange: (e) => updateFee(index, "duration", e.target.value),
								placeholder: "Duration",
								className: "w-28 text-[13px]",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:193:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								className: "text-muted-foreground hover:text-danger",
								onClick: () => removeFee(index),
								"aria-label": "Remove fee tier",
								"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:199:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "h-4 w-4",
									"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:206:17"
								})
							})
						]
					}, index))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:212:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:213:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting,
						"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:216:11",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/therapy/edit-therapy-dialog.tsx:217:27"
						}) : null, "Save changes"]
					})]
				})
			]
		})
	});
}
function TherapyPage() {
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [editItem, setEditItem] = (0, import_react.useState)(null);
	const openEdit = (item) => {
		setEditItem(item);
		setEditOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.therapy.index.tsx:40:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Therapy",
				description: "Manage therapy types, session fees and availability.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Therapy" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Add Therapy"]
				}),
				"data-tsd-source": "/src/routes/manager.therapy.index.tsx:41:7"
			}),
			THERAPY_TYPES.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Activity,
				title: "No Therapy Types",
				description: "Add your first therapy type to get started.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Add Therapy"]
				}),
				"data-tsd-source": "/src/routes/manager.therapy.index.tsx:57:9"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
				"data-tsd-source": "/src/routes/manager.therapy.index.tsx:69:9",
				children: THERAPY_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyCard, {
					item,
					onEdit: openEdit,
					"data-tsd-source": "/src/routes/manager.therapy.index.tsx:71:13"
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateTherapyDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen,
				"data-tsd-source": "/src/routes/manager.therapy.index.tsx:76:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditTherapyDialog, {
				open: editOpen,
				onOpenChange: setEditOpen,
				item: editItem,
				"data-tsd-source": "/src/routes/manager.therapy.index.tsx:77:7"
			})
		]
	});
}
//#endregion
export { TherapyPage as component };
