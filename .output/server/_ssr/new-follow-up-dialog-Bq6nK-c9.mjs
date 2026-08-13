import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, Xt as Check, dt as LoaderCircle, q as Phone, u as UserRound } from "../_libs/lucide-react.mjs";
import { c as FOLLOW_UP_REASONS, d as FOLLOW_UP_TODAY_ISO, o as FOLLOW_UP_PRIORITIES, t as CONTACT_TIME_SLOTS } from "./follow-up-data-ocWJfEAb.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as initialsOf } from "./breadcrumbs-CKUKb44m.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-follow-up-dialog-Bq6nK-c9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		title: "Select Patient",
		description: "Find the patient to follow up"
	},
	{
		id: 2,
		title: "Follow-up Details",
		description: "Reason, priority and schedule"
	},
	{
		id: 3,
		title: "Communication Notes",
		description: "Discussion and next action"
	},
	{
		id: 4,
		title: "Review",
		description: "Confirm before scheduling"
	}
];
/**
* UI-only 4-step follow-up scheduler.
* Nothing is persisted — the Django REST API will own this later.
*/
function NewFollowUpDialog({ open, onOpenChange, presetPatientId }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [patientId, setPatientId] = (0, import_react.useState)(presetPatientId);
	const [reason, setReason] = (0, import_react.useState)("Therapy Progress");
	const [priority, setPriority] = (0, import_react.useState)("Medium");
	const [date, setDate] = (0, import_react.useState)(FOLLOW_UP_TODAY_ISO);
	const [time, setTime] = (0, import_react.useState)(CONTACT_TIME_SLOTS[0]);
	const patient = (0, import_react.useMemo)(() => PATIENTS.find((item) => item.id === patientId), [patientId]);
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return (q ? PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name,
			item.guardian.phone
		].join(" ").toLowerCase().includes(q)) : PATIENTS).slice(0, 6);
	}, [query]);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setStep(1);
			setQuery("");
			setPatientId(presetPatientId);
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
	const canContinue = step !== 1 || Boolean(patient);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:102:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:109:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:110:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:111:11",
						children: "New follow-up"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:112:11",
						children: "Schedule a retention follow-up for a patient after assessment, therapy or package completion."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:118:9",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:122:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:123:17",
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3.5 w-3.5",
										"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:132:39"
									}) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 sm:block",
									"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:134:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:135:19",
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:145:19"
								}) : null
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:hidden",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:152:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:153:11",
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
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:156:11",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatient, {
					query,
					onQuery: setQuery,
					results,
					selected: patient,
					onSelect: setPatientId,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:160:11"
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDetails, {
					reason,
					onReason: setReason,
					priority,
					onPriority: setPriority,
					date,
					onDate: setDate,
					time,
					onTime: setTime,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:168:11"
				}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNotes, { "data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:179:11" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
					patient,
					reason,
					priority,
					date,
					time,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:181:11"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:190:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:191:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:194:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:196:15",
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:201:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: close,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:206:17",
							children: "Save Draft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:209:17",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:211:21"
							}) : null, "Schedule Follow-up"]
						})] })]
					})]
				})
			]
		})
	});
}
function StepPatient({ query, onQuery, results, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:238:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-patient-search",
				label: "Search existing patient",
				required: true,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:239:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:240:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:241:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "follow-up-patient-search",
						value: query,
						onChange: (event) => onQuery(event.target.value),
						placeholder: "Name, patient ID or guardian phone…",
						className: "pl-9",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:245:11"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "max-h-56 space-y-1.5 overflow-y-auto pr-1",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:255:7",
				children: [results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:257:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(item.id),
						"aria-pressed": selected?.id === item.id,
						className: cn("flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-enterprise", selected?.id === item.id ? "border-primary bg-primary/5" : "border-border hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:258:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:269:15",
								children: initialsOf(item.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:272:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium text-foreground",
									"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:273:17",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:276:17",
									children: [
										item.code,
										" · ",
										item.guardian.phone
									]
								})]
							}),
							selected?.id === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-4 w-4 shrink-0 text-primary",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:281:17"
							}) : null
						]
					})
				}, item.id)), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-dashed border-border px-3 py-6 text-center text-[13px] text-muted-foreground",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:287:11",
					children: "No patient matched this search."
				}) : null]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientSummaryCard, {
				patient: selected,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:293:19"
			}) : null
		]
	});
}
function PatientSummaryCard({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Patient summary",
		className: "rounded-xl border border-border bg-muted/30 p-4 shadow-card",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:300:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:304:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-sm font-semibold text-muted-foreground",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:305:9",
				children: initialsOf(patient.name)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:308:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:309:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold text-foreground",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:310:13",
							children: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "info",
							label: `${patient.age} yrs`,
							dot: false,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:311:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "neutral",
							label: patient.code,
							dot: false,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:312:13"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:314:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-3.5 w-3.5" }),
							label: "Guardian",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:315:13",
							children: [
								patient.guardian.name,
								" · ",
								patient.guardian.relation
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }),
							label: "Phone",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:318:13",
							children: patient.guardian.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 sm:col-span-2",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:321:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:322:15",
								children: "Current package"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "truncate text-foreground",
								"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:325:15",
								children: [
									patient.billing.packageName,
									" · ",
									patient.billing.paymentType
								]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Field({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:346:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: "flex items-center gap-1.5 text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:347:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:348:9",
				children: icon
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:351:7",
			children
		})]
	});
}
function StepDetails({ reason, onReason, priority, onPriority, date, onDate, time, onTime }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:376:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-reason",
				label: "Reason",
				required: true,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:377:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: reason,
					onValueChange: (next) => onReason(next),
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:378:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-reason",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:379:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select reason",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:380:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:382:11",
						children: FOLLOW_UP_REASONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:384:15",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-priority",
				label: "Priority",
				required: true,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:391:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: priority,
					onValueChange: (next) => onPriority(next),
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:392:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-priority",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:393:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select priority",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:394:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:396:11",
						children: FOLLOW_UP_PRIORITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:398:15",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-date",
				label: "Follow-up date",
				required: true,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:405:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "follow-up-date",
					type: "date",
					value: date,
					onChange: (event) => onDate(event.target.value),
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:406:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-time",
				label: "Preferred contact time",
				hint: "When the guardian prefers to be contacted",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:413:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: time,
					onValueChange: onTime,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:418:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-time",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:419:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select time slot",
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:420:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:422:11",
						children: CONTACT_TIME_SLOTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item,
							"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:424:15",
							children: item
						}, item))
					})]
				})
			})
		]
	});
}
function StepNotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:437:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-summary",
				label: "Discussion summary",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:438:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "follow-up-summary",
					rows: 3,
					placeholder: "What will be discussed with the guardian…",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:439:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:445:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "follow-up-response",
					label: "Patient response",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:446:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "follow-up-response",
						rows: 3,
						placeholder: "Patient's engagement…",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:447:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "follow-up-feedback",
					label: "Guardian feedback",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:449:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "follow-up-feedback",
						rows: 3,
						placeholder: "Guardian's observations…",
						"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:450:11"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-recommendations",
				label: "Recommendations",
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:453:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "follow-up-recommendations",
					rows: 3,
					placeholder: "Clinical or scheduling recommendations…",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:454:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-next-action",
				label: "Next action",
				required: true,
				"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:460:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "follow-up-next-action",
					placeholder: "e.g. Confirm attendance for next 4 sessions",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:461:9"
				})
			})
		]
	});
}
function StepReview({ patient, reason, priority, date, time }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:481:5",
		children: [patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientSummaryCard, {
			patient,
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:482:18"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid gap-4 rounded-xl border border-border p-4 text-[13px] sm:grid-cols-2",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:483:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Patient",
					value: patient ? `${patient.name} · ${patient.code}` : "—",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:484:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Reason",
					value: reason,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:485:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Priority",
					value: priority,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:486:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Follow-up date",
					value: date,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:487:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Preferred contact time",
					value: time,
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:488:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Assigned to",
					value: "Tanjila Rahman (CRM)",
					"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:489:9"
				})
			]
		})]
	});
}
function ReviewRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:497:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:498:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 truncate font-medium text-foreground",
			"data-tsd-source": "/src/components/follow-up/new-follow-up-dialog.tsx:499:7",
			children: value
		})]
	});
}
//#endregion
export { NewFollowUpDialog as t };
