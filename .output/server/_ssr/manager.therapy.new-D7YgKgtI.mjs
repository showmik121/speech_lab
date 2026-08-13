import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, Sn as ArrowLeft, Xt as Check, dt as LoaderCircle, tn as CalendarPlus, u as UserRound } from "../_libs/lucide-react.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
import { a as THERAPY_MODES, f as formatTimeRange, i as THERAPY_EQUIPMENT, l as TODAY_ISO, n as SESSION_GOAL_SKILLS, o as THERAPY_PROGRAMS, r as THERAPISTS, s as THERAPY_ROOMS } from "./therapy-data--L5tymgW.mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as TherapyAvatar } from "./therapy-table-CNwJOOwy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy.new-D7YgKgtI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THERAPY_WIZARD_STEPS = [
	{
		id: 1,
		title: "Patient",
		description: "Select the patient record"
	},
	{
		id: 2,
		title: "Therapy",
		description: "Type, program and schedule"
	},
	{
		id: 3,
		title: "Therapist",
		description: "Assign therapist and room"
	},
	{
		id: 4,
		title: "Goals",
		description: "Session goals and activities"
	},
	{
		id: 5,
		title: "Review",
		description: "Confirm and schedule"
	}
];
var INITIAL_STATE = {
	patientId: null,
	mode: "Individual Therapy",
	program: "Speech Therapy",
	sessionNumber: "1",
	sessionDate: TODAY_ISO,
	startTime: "10:00",
	endTime: "10:45",
	room: "",
	therapist: "",
	equipment: [],
	assignmentNotes: "",
	groupName: "",
	sessionTopic: "",
	totalChildren: "6",
	sessionGoal: "",
	targetSkills: [],
	activities: "",
	materials: "",
	expectedOutcome: ""
};
/**
* UI-only 5-step therapy scheduling wizard.
* Nothing is persisted — submission is simulated until the API is connected.
*/
function TherapyWizard() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [state, setState] = (0, import_react.useState)(INITIAL_STATE);
	const [submitting, setSubmitting] = (0, import_react.useState)(null);
	const set = (key, value) => setState((current) => ({
		...current,
		[key]: value
	}));
	const patient = (0, import_react.useMemo)(() => PATIENTS.find((item) => item.id === state.patientId) ?? null, [state.patientId]);
	const submit = (mode) => {
		setSubmitting(mode);
		setTimeout(() => {
			setSubmitting(null);
			navigate({ to: "/manager/therapy" });
		}, 900);
	};
	const current = THERAPY_WIZARD_STEPS[step - 1];
	const canContinue = step !== 1 || Boolean(patient);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:115:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
			step,
			onSelect: setStep,
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:116:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 sm:p-6",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:118:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border pb-4",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:119:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:120:11",
							children: [
								"Step ",
								step,
								" of ",
								THERAPY_WIZARD_STEPS.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-[17px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:123:11",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:126:11",
							children: current.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-5",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:129:9",
					children: step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatient, {
						selectedId: state.patientId,
						onSelect: (id) => set("patientId", id),
						patient,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:131:13"
					}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTherapy, {
						state,
						set,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:137:13"
					}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTherapist, {
						state,
						set,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:139:13"
					}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGoals, {
						state,
						set,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:141:13"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
						state,
						patient,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:143:13"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:147:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => navigate({ to: "/manager/therapy" }),
						className: "sm:order-first",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:148:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:156:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:158:15",
							children: "Back"
						}) : null, step < THERAPY_WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:163:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => submit("draft"),
							disabled: submitting !== null,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:168:17",
							children: [submitting === "draft" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:174:21"
							}) : null, "Save Draft"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => submit("schedule"),
							disabled: submitting !== null,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:178:17",
							children: [submitting === "schedule" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:180:21"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:182:21"
							}), "Schedule Session"]
						})] })]
					})]
				}),
				step === 1 && !patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:192:11",
					children: "Select a patient to continue to the therapy details."
				}) : null
			]
		})]
	});
}
function StepIndicator({ step, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "hidden items-center gap-2 lg:flex",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:205:7",
		children: THERAPY_WIZARD_STEPS.map((item) => {
			const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 flex-1 items-center gap-2.5",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:209:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					className: "flex min-w-0 items-center gap-2.5 text-left",
					"aria-current": state === "current" ? "step" : void 0,
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:210:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:216:17",
						children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:224:39"
						}) : item.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:226:17",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:227:19",
							children: item.title
						})
					})]
				}), item.id < THERAPY_WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-px flex-1 bg-border",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:238:17"
				}) : null]
			}, item.id);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:246:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:247:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[13px] font-medium text-foreground",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:248:11",
				children: [
					"Step ",
					step,
					" of ",
					THERAPY_WIZARD_STEPS.length,
					" · ",
					THERAPY_WIZARD_STEPS[step - 1].title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:251:11",
				children: [Math.round(step / THERAPY_WIZARD_STEPS.length * 100), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-1.5",
			"aria-hidden": "true",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:255:9",
			children: THERAPY_WIZARD_STEPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("h-1.5 flex-1 rounded-full", item.id <= step ? "bg-primary" : "bg-muted"),
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:257:13"
			}, item.id))
		})]
	})] });
}
function StepPatient({ selectedId, onSelect, patient }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return (term ? PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name,
			item.guardian.phone
		].join(" ").toLowerCase().includes(term)) : PATIENTS).slice(0, 6);
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:296:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 space-y-4",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:297:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-patient-search",
				label: "Search existing patient",
				hint: "Search by name, patient ID, phone or guardian",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:298:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:303:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:304:13"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "therapy-patient-search",
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "e.g. Rahim Ahmed or PT-DHK-1001",
						className: "pl-9",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:308:13"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border overflow-hidden rounded-lg border border-border",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:319:9",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-4 py-6 text-center text-[13px] text-muted-foreground",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:321:13",
					children: "No patients match this search."
				}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:326:15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(item.id),
						"aria-pressed": selectedId === item.id,
						className: cn("flex w-full items-center gap-3 px-4 py-3 text-left transition-enterprise", selectedId === item.id ? "bg-primary/8" : "hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:327:17",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
								name: item.name,
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:336:19"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:337:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium text-foreground",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:338:21",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:341:21",
									children: [
										item.code,
										" · ",
										item.age,
										" yrs · ",
										item.gender,
										" · ",
										item.branch
									]
								})]
							}),
							selectedId === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-4 w-4 shrink-0 text-primary",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:346:21"
							}) : null
						]
					})
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:355:7",
			children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:357:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:358:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
						name: patient.name,
						className: "h-12 w-12 text-sm",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:359:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:360:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[15px] font-semibold text-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:361:17",
							children: patient.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:362:17",
							children: patient.code
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 border-t border-border pt-4 text-[13px]",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:367:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Age",
							value: `${patient.age} years`,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:368:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Guardian",
							value: `${patient.guardian.name} (${patient.guardian.relation})`,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:369:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Phone",
							value: patient.guardian.phone,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:373:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Diagnosis",
							value: patient.medical.diagnosis,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:374:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Current package",
							value: patient.billing.packageName,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:375:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Sessions",
							value: `${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed`,
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:376:15"
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex h-full flex-col items-center justify-center gap-3 border-dashed p-6 text-center",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:383:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:384:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							className: "h-5 w-5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:385:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:387:13",
						children: "No patient selected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:388:13",
						children: "Pick a patient from the list to load their therapy information card."
					})
				]
			})
		})]
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:400:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:401:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 break-words text-[13px] text-foreground",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:402:7",
			children: value
		})]
	});
}
function StepTherapy({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:411:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:412:7",
				children: THERAPY_MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => set("mode", mode),
					"aria-pressed": state.mode === mode,
					className: cn("rounded-lg border p-4 text-left transition-enterprise", state.mode === mode ? "border-primary bg-primary/8" : "border-border hover:bg-surface-hover"),
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:414:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:426:13",
						children: mode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:427:13",
						children: mode === "Individual Therapy" ? "One-to-one session with a single patient." : "Small group batch with shared goals and activities."
					})]
				}, mode))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:436:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-program",
						label: "Program",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:437:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: state.program,
							onValueChange: (value) => set("program", value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:438:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "therapy-program",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:439:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Select program",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:440:15"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:442:13",
								children: THERAPY_PROGRAMS.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: program,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:444:17",
									children: program
								}, program))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-session-number",
						label: "Session number",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:451:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-session-number",
							type: "number",
							min: 1,
							value: state.sessionNumber,
							onChange: (event) => set("sessionNumber", event.target.value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:452:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-date",
						label: "Session date",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:460:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-date",
							type: "date",
							value: state.sessionDate,
							onChange: (event) => set("sessionDate", event.target.value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:461:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-room",
						label: "Room",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:468:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: state.room,
							onValueChange: (value) => set("room", value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:469:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "therapy-room",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:470:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Select room",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:471:15"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:473:13",
								children: THERAPY_ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: room,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:475:17",
									children: room
								}, room))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-start",
						label: "Start time",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:482:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-start",
							type: "time",
							value: state.startTime,
							onChange: (event) => set("startTime", event.target.value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:483:11"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-end",
						label: "End time",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:490:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-end",
							type: "time",
							value: state.endTime,
							onChange: (event) => set("endTime", event.target.value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:491:11"
						})
					})
				]
			}),
			state.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 rounded-lg border border-border bg-muted/25 p-4 sm:grid-cols-2 sm:p-5",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:501:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-name",
						label: "Group name",
						required: true,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:502:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-name",
							value: state.groupName,
							onChange: (event) => set("groupName", event.target.value),
							placeholder: "e.g. Little Talkers — Group B",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:503:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-children",
						label: "Total children",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:510:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-children",
							type: "number",
							min: 2,
							value: state.totalChildren,
							onChange: (event) => set("totalChildren", event.target.value),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:511:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-topic",
						label: "Session topic",
						className: "sm:col-span-2",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:519:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-topic",
							value: state.sessionTopic,
							onChange: (event) => set("sessionTopic", event.target.value),
							placeholder: "e.g. Turn taking and greeting peers",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:520:13"
						})
					})
				]
			}) : null
		]
	});
}
function StepTherapist({ state, set }) {
	const toggleEquipment = (item) => set("equipment", state.equipment.includes(item) ? state.equipment.filter((value) => value !== item) : [...state.equipment, item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:543:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:544:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "therapy-therapist",
					label: "Therapist",
					hint: "Staff module connects later",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:545:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: state.therapist,
						onValueChange: (value) => set("therapist", value),
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:546:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "therapy-therapist",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:547:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								placeholder: "Select therapist",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:548:15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:550:13",
							children: THERAPISTS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: name,
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:552:17",
								children: name
							}, name))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "therapy-room-assign",
					label: "Room",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:559:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: state.room,
						onValueChange: (value) => set("room", value),
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:560:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "therapy-room-assign",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:561:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								placeholder: "Select room",
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:562:15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:564:13",
							children: THERAPY_ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: room,
								"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:566:17",
								children: room
							}, room))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:575:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:576:9",
						children: "Equipment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:577:9",
						children: "Inventory module connects later — pick from the standard therapy kit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:580:9",
						children: THERAPY_EQUIPMENT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleEquipment(item),
							"aria-pressed": state.equipment.includes(item),
							className: cn("rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise", state.equipment.includes(item) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-surface-hover"),
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:582:13",
							children: item
						}, item))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-notes",
				label: "Notes",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:600:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "therapy-notes",
					rows: 3,
					value: state.assignmentNotes,
					onChange: (event) => set("assignmentNotes", event.target.value),
					placeholder: "Any preparation notes for the therapist or front desk",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:601:9"
				})
			})
		]
	});
}
function StepGoals({ state, set }) {
	const toggleSkill = (skill) => set("targetSkills", state.targetSkills.includes(skill) ? state.targetSkills.filter((value) => value !== skill) : [...state.targetSkills, skill]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:623:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "session-goal",
				label: "Session goal",
				required: true,
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:624:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "session-goal",
					rows: 2,
					value: state.sessionGoal,
					onChange: (event) => set("sessionGoal", event.target.value),
					placeholder: "e.g. Produce /r/ in initial word position with 80% accuracy",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:625:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:634:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] font-medium text-foreground",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:635:9",
					children: "Target skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:636:9",
					children: SESSION_GOAL_SKILLS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggleSkill(skill),
						"aria-pressed": state.targetSkills.includes(skill),
						className: cn("rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise", state.targetSkills.includes(skill) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:638:13",
						children: skill
					}, skill))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:656:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "session-activities",
					label: "Activities",
					hint: "One per line",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:657:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "session-activities",
						rows: 4,
						value: state.activities,
						onChange: (event) => set("activities", event.target.value),
						placeholder: "Mirror drills\nPicture naming\nSentence repetition",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:658:11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "session-materials",
					label: "Materials required",
					hint: "One per line",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:666:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "session-materials",
						rows: 4,
						value: state.materials,
						onChange: (event) => set("materials", event.target.value),
						placeholder: "Articulation card set\nMirror station",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:667:11"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "session-outcome",
				label: "Expected outcome",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:677:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "session-outcome",
					rows: 2,
					value: state.expectedOutcome,
					onChange: (event) => set("expectedOutcome", event.target.value),
					placeholder: "e.g. Independent target sound production in 8 of 10 words",
					"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:678:9"
				})
			})
		]
	});
}
function StepReview({ state, patient }) {
	const lines = (value) => value.split("\n").map((item) => item.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:698:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:699:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "info",
						label: state.mode,
						dot: false,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:700:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "neutral",
						label: state.program,
						dot: false,
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:701:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "warning",
						label: "Not scheduled yet",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:702:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:705:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Patient",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:706:9",
						children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:708:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Name",
									value: patient.name,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:709:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Patient ID",
									value: patient.code,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:710:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Age",
									value: `${patient.age} years`,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:711:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Guardian",
									value: patient.guardian.name,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:712:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Phone",
									value: patient.guardian.phone,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:713:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Package",
									value: patient.billing.packageName,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:714:15"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:717:13",
							children: "No patient selected."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Therapy",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:721:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:722:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Therapy type",
									value: state.mode,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:723:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Program",
									value: state.program,
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:724:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Session no.",
									value: state.sessionNumber || "—",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:725:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Therapist",
									value: state.therapist || "Not assigned",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:726:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Room",
									value: state.room || "Not assigned",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:727:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Equipment",
									value: state.equipment.length > 0 ? state.equipment.join(", ") : "None selected",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:728:13"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Schedule",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:735:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:736:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Date",
									value: state.sessionDate ? formatDate(state.sessionDate) : "—",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:737:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Time",
									value: formatTimeRange(state.startTime, state.endTime),
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:741:13"
								}),
								state.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Group",
										value: state.groupName || "Not named",
										"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:744:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Topic",
										value: state.sessionTopic || "Not set",
										"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:745:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Children",
										value: state.totalChildren || "—",
										"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:746:17"
									})
								] }) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Goals",
						"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:752:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:753:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Session goal",
									value: state.sessionGoal || "Not set",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:754:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Target skills",
									value: state.targetSkills.length > 0 ? state.targetSkills.join(", ") : "None selected",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:755:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Activities",
									value: lines(state.activities).join(", ") || "Not set",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:761:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Materials",
									value: lines(state.materials).join(", ") || "Not set",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:765:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Expected outcome",
									value: state.expectedOutcome || "Not set",
									"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:766:13"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:771:7",
				children: "Nothing is saved yet — this wizard is UI only until the therapy API is connected."
			})
		]
	});
}
function ReviewCard({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:780:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-border pb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:781:7",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-4",
			"data-tsd-source": "/src/components/therapy/therapy-wizard.tsx:784:7",
			children
		})]
	});
}
function NewTherapySessionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.therapy.new.tsx:31:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Schedule Therapy",
			description: "Complete five guided steps to schedule a therapy session.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Therapy Management",
					to: "/manager/therapy"
				},
				{ label: "Schedule Therapy" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/therapy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Back"]
				})
			}),
			"data-tsd-source": "/src/routes/manager.therapy.new.tsx:32:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyWizard, { "data-tsd-source": "/src/routes/manager.therapy.new.tsx:50:7" })]
	});
}
//#endregion
export { NewTherapySessionPage as component };
