import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, Sn as ArrowLeft, Xt as Check, dt as LoaderCircle, u as UserRound, w as Stethoscope, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, d as EVALUATION_SKILLS, f as PACKAGE_SUGGESTIONS, g as SEVERITY_OPTIONS, h as SESSION_FREQUENCIES, l as DIAGNOSIS_OPTIONS, o as ASSESSMENT_TYPES, s as ASSESSORS, u as DURATION_OPTIONS, v as THERAPY_RECOMMENDATIONS } from "./assessment-data-VYEbB3BS.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
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
import { n as ScoreRating } from "./score-rating-CAAjQoIO.mjs";
import { n as AssessmentAvatar } from "./assessment-table-C130uZGc.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments.new-BNS0mk0z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WIZARD_STEPS = [
	{
		id: 1,
		title: "Patient",
		description: "Select the patient record"
	},
	{
		id: 2,
		title: "Assessment",
		description: "Visit details and complaint"
	},
	{
		id: 3,
		title: "Evaluation",
		description: "Clinical skill ratings"
	},
	{
		id: 4,
		title: "Diagnosis",
		description: "Findings and severity"
	},
	{
		id: 5,
		title: "Recommendation",
		description: "Therapy plan and goals"
	},
	{
		id: 6,
		title: "Treatment Plan",
		description: "Package and schedule"
	},
	{
		id: 7,
		title: "Review",
		description: "Confirm and submit"
	}
];
var INITIAL_STATE = {
	patientId: null,
	assessmentDate: "2026-07-31",
	assessmentType: "Initial Assessment",
	assessor: "",
	reasonForVisit: "",
	chiefComplaint: "",
	observationNotes: "",
	scores: Object.fromEntries(EVALUATION_SKILLS.map((skill) => [skill.key, 3])),
	primaryDiagnosis: "",
	secondaryDiagnosis: "",
	severity: "Moderate",
	clinicalSummary: "",
	therapy: "",
	frequency: "Twice a week",
	sessionsPerWeek: "2",
	duration: "3 months",
	goals: "",
	homeInstructions: "",
	packageType: "Session Wise",
	estimatedSessions: "24",
	expectedStart: "",
	expectedReview: ""
};
/**
* UI-only 7-step clinical assessment wizard.
* Nothing is persisted — submission is simulated until the API is connected.
*/
function AssessmentWizard() {
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
			navigate({ to: "/manager/assessments" });
		}, 900);
	};
	const current = WIZARD_STEPS[step - 1];
	const canContinue = step !== 1 || Boolean(patient);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:133:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
			step,
			onSelect: setStep,
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:134:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 sm:p-6",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:136:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border pb-4",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:137:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:138:11",
							children: [
								"Step ",
								step,
								" of ",
								WIZARD_STEPS.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-[17px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:141:11",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:144:11",
							children: current.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-5",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:147:9",
					children: step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatient, {
						selectedId: state.patientId,
						onSelect: (id) => set("patientId", id),
						patient,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:149:13"
					}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepAssessment, {
						state,
						set,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:155:13"
					}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepEvaluation, {
						scores: state.scores,
						onScore: (key, score) => set("scores", {
							...state.scores,
							[key]: score
						}),
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:157:13"
					}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDiagnosis, {
						state,
						set,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:162:13"
					}) : step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepRecommendation, {
						state,
						set,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:164:13"
					}) : step === 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTreatmentPlan, {
						state,
						set,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:166:13"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
						state,
						patient,
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:168:13"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:172:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => navigate({ to: "/manager/assessments" }),
						className: "sm:order-first",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:173:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:181:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:183:15",
							children: "Back"
						}) : null, step < WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:188:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => submit("draft"),
							disabled: submitting !== null,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:193:17",
							children: [submitting === "draft" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:199:21"
							}) : null, "Save Draft"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => submit("complete"),
							disabled: submitting !== null,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:203:17",
							children: [submitting === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:205:21"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:207:21"
							}), "Complete Assessment"]
						})] })]
					})]
				}),
				step === 1 && !patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:217:11",
					children: "Select a patient to continue to the assessment details."
				}) : null
			]
		})]
	});
}
function StepIndicator({ step, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "hidden items-center gap-2 lg:flex",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:230:7",
		children: WIZARD_STEPS.map((item) => {
			const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 flex-1 items-center gap-2.5",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:234:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					className: "flex min-w-0 items-center gap-2.5 text-left",
					"aria-current": state === "current" ? "step" : void 0,
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:235:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:241:17",
						children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:249:39"
						}) : item.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:251:17",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:252:19",
							children: item.title
						})
					})]
				}), item.id < WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-px flex-1 bg-border",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:263:17"
				}) : null]
			}, item.id);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:271:7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:272:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[13px] font-medium text-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:273:11",
				children: [
					"Step ",
					step,
					" of ",
					WIZARD_STEPS.length,
					" · ",
					WIZARD_STEPS[step - 1].title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:276:11",
				children: [Math.round(step / WIZARD_STEPS.length * 100), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-1.5",
			"aria-hidden": "true",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:280:9",
			children: WIZARD_STEPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("h-1.5 flex-1 rounded-full", item.id <= step ? "bg-primary" : "bg-muted"),
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:282:13"
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
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:321:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 space-y-4",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:322:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-search",
				label: "Search existing patient",
				hint: "Search by name, patient ID, phone or guardian",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:323:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:328:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:329:13"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "patient-search",
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "e.g. Rahim Ahmed or PT-1042",
						className: "pl-9",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:333:13"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border overflow-hidden rounded-lg border border-border",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:344:9",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-4 py-6 text-center text-[13px] text-muted-foreground",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:346:13",
					children: "No patients match this search."
				}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:351:15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(item.id),
						"aria-pressed": selectedId === item.id,
						className: cn("flex w-full items-center gap-3 px-4 py-3 text-left transition-enterprise", selectedId === item.id ? "bg-primary/8" : "hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:352:17",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
								name: item.name,
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:361:19"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:362:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium text-foreground",
									"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:363:21",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:366:21",
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
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:371:21"
							}) : null
						]
					})
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:380:7",
			children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:382:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:383:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
						name: patient.name,
						className: "h-12 w-12 text-sm",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:384:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:385:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[15px] font-semibold text-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:386:17",
							children: patient.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:387:17",
							children: patient.code
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 border-t border-border pt-4 text-[13px]",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:392:13",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Age",
							value: `${patient.age} years`,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:393:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Gender",
							value: patient.gender,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:394:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Guardian",
							value: `${patient.guardian.name} (${patient.guardian.relation})`,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:395:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Phone",
							value: patient.guardian.phone,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:399:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Branch",
							value: patient.branch,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:400:15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:401:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[12px] text-muted-foreground",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:402:17",
								children: "Medical summary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-[13px] leading-relaxed break-words text-foreground",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:403:17",
								children: patient.medical.primaryConcern
							})]
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex h-full flex-col items-center justify-center gap-3 border-dashed p-6 text-center",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:410:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:411:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							className: "h-5 w-5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:412:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:414:13",
						children: "No patient selected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:415:13",
						children: "Pick a patient from the list to load their information card."
					})
				]
			})
		})]
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-3",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:427:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:428:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 break-words text-[13px] text-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:429:7",
			children: value
		})]
	});
}
function StepAssessment({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:438:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-date",
				label: "Assessment date",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:439:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "assessment-date",
					type: "date",
					value: state.assessmentDate,
					onChange: (event) => set("assessmentDate", event.target.value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:440:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-type",
				label: "Assessment type",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:447:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.assessmentType,
					onValueChange: (value) => set("assessmentType", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:448:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "assessment-type",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:452:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select assessment type",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:453:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:455:11",
						children: ASSESSMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: type,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:457:15",
							children: type
						}, type))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessor",
				label: "Assessed by",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:464:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.assessor,
					onValueChange: (value) => set("assessor", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:465:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "assessor",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:466:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select clinician",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:467:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:469:11",
						children: ASSESSORS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: name,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:471:15",
							children: name
						}, name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "reason-for-visit",
				label: "Reason for visit",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:478:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "reason-for-visit",
					rows: 2,
					value: state.reasonForVisit,
					onChange: (event) => set("reasonForVisit", event.target.value),
					placeholder: "e.g. Referred by paediatrician for delayed speech development",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:479:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "chief-complaint",
				label: "Chief complaint",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:487:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "chief-complaint",
					rows: 2,
					value: state.chiefComplaint,
					onChange: (event) => set("chiefComplaint", event.target.value),
					placeholder: "Guardian's own words describing the main concern",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:488:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "observation-notes",
				label: "Observation notes",
				hint: "Behaviour during the session, cooperation, response to cues",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:496:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "observation-notes",
					rows: 4,
					value: state.observationNotes,
					onChange: (event) => set("observationNotes", event.target.value),
					placeholder: "Clinical observations recorded during the assessment",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:502:9"
				})
			})
		]
	});
}
function StepEvaluation({ scores, onScore }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:522:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:523:7",
			children: "Rate each domain from 1 (significant concern) to 5 (age appropriate)."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:526:7",
			children: EVALUATION_SKILLS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRating, {
				id: `score-${skill.key}`,
				label: skill.label,
				value: scores[skill.key] ?? 3,
				onChange: (score) => onScore(skill.key, score),
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:528:11"
			}, skill.key))
		})]
	});
}
function StepDiagnosis({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:543:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "primary-diagnosis",
				label: "Primary diagnosis",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:544:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.primaryDiagnosis,
					onValueChange: (value) => set("primaryDiagnosis", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:545:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "primary-diagnosis",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:549:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select primary diagnosis",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:550:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:552:11",
						children: DIAGNOSIS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:554:15",
							children: option
						}, option))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "secondary-diagnosis",
				label: "Secondary diagnosis",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:561:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.secondaryDiagnosis,
					onValueChange: (value) => set("secondaryDiagnosis", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:562:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "secondary-diagnosis",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:566:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select secondary diagnosis",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:567:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:569:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "None",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:570:13",
							children: "None"
						}), DIAGNOSIS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:572:15",
							children: option
						}, option))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "severity",
				label: "Severity",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:580:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "severity",
					className: "grid gap-3 sm:grid-cols-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:581:9",
					children: SEVERITY_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": state.severity === option,
						onClick: () => set("severity", option),
						className: cn("rounded-lg border p-4 text-left transition-enterprise", state.severity === option ? "border-primary bg-primary/8" : "border-border bg-card hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:583:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-2",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:595:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-semibold text-foreground",
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:596:17",
								children: option
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: SEVERITY_TONE[option],
								label: option,
								dot: false,
								"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:597:17"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:599:15",
							children: option === "Mild" ? "Minimal functional impact" : option === "Moderate" ? "Noticeable impact on daily communication" : "Significant impact requiring intensive support"
						})]
					}, option))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "clinical-summary",
				label: "Clinical summary",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:611:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "clinical-summary",
					rows: 4,
					value: state.clinicalSummary,
					onChange: (event) => set("clinicalSummary", event.target.value),
					placeholder: "Summarise findings, developmental gaps and prognosis",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:612:9"
				})
			})
		]
	});
}
function StepRecommendation({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:626:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "recommended-therapy",
				label: "Recommended therapy",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:627:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.therapy,
					onValueChange: (value) => set("therapy", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:628:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "recommended-therapy",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:629:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select therapy",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:630:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:632:11",
						children: THERAPY_RECOMMENDATIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:634:15",
							children: option
						}, option))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "frequency",
				label: "Frequency",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:641:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.frequency,
					onValueChange: (value) => set("frequency", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:642:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "frequency",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:643:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select frequency",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:644:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:646:11",
						children: SESSION_FREQUENCIES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:648:15",
							children: option
						}, option))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "sessions-per-week",
				label: "Sessions per week",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:655:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "sessions-per-week",
					type: "number",
					min: 1,
					max: 7,
					value: state.sessionsPerWeek,
					onChange: (event) => set("sessionsPerWeek", event.target.value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:656:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-duration",
				label: "Expected duration",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:665:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.duration,
					onValueChange: (value) => set("duration", value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:666:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "expected-duration",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:667:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select duration",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:668:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:670:11",
						children: DURATION_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:672:15",
							children: option
						}, option))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "goals",
				label: "Therapy goals",
				hint: "One goal per line",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:679:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "goals",
					rows: 4,
					value: state.goals,
					onChange: (event) => set("goals", event.target.value),
					placeholder: "Expand expressive vocabulary to 250 words\nProduce three-word phrases",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:686:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "home-instructions",
				label: "Home instructions",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:694:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "home-instructions",
					rows: 3,
					value: state.homeInstructions,
					onChange: (event) => set("homeInstructions", event.target.value),
					placeholder: "Daily practice routine and guidance for guardians",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:695:9"
				})
			})
		]
	});
}
function StepTreatmentPlan({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:709:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-type",
				label: "Suggested package",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:710:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "package-type",
					className: "grid gap-3 sm:grid-cols-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:711:9",
					children: PACKAGE_SUGGESTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": state.packageType === option,
						onClick: () => set("packageType", option),
						className: cn("rounded-lg border p-4 text-left transition-enterprise", state.packageType === option ? "border-primary bg-primary/8" : "border-border bg-card hover:bg-surface-hover"),
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:713:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] font-semibold text-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:725:15",
							children: option
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:726:15",
							children: option === "Daily" ? "Billed per attended day" : option === "Session Wise" ? "Billed per completed session" : "Fixed monthly programme fee"
						})]
					}, option))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "estimated-sessions",
				label: "Estimated sessions",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:737:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "estimated-sessions",
					type: "number",
					min: 1,
					value: state.estimatedSessions,
					onChange: (event) => set("estimatedSessions", event.target.value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:738:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-start",
				label: "Expected start date",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:746:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-start",
					type: "date",
					value: state.expectedStart,
					onChange: (event) => set("expectedStart", event.target.value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:747:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-review",
				label: "Expected review date",
				required: true,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:754:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-review",
					type: "date",
					value: state.expectedReview,
					onChange: (event) => set("expectedReview", event.target.value),
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:755:9"
				})
			})
		]
	});
}
function StepReview({ state, patient }) {
	const goals = state.goals.split("\n").map((goal) => goal.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:773:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Patient",
				icon: UserRound,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:774:7",
				children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:776:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Name",
							value: patient.name,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:777:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Patient ID",
							value: patient.code,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:778:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Age / Gender",
							value: `${patient.age} yrs · ${patient.gender}`,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:779:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Guardian",
							value: patient.guardian.name,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:780:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Phone",
							value: patient.guardian.phone,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:781:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Branch",
							value: patient.branch,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:782:13"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:785:11",
					children: "No patient selected."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Assessment & Diagnosis",
				icon: Stethoscope,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:789:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:790:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Date",
							value: state.assessmentDate ? formatDate(state.assessmentDate) : "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:791:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Type",
							value: state.assessmentType,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:795:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Assessed by",
							value: state.assessor || "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:796:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Primary",
							value: state.primaryDiagnosis || "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:797:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Secondary",
							value: state.secondaryDiagnosis || "None",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:798:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Severity",
							value: state.severity,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:799:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Summary",
							value: state.clinicalSummary || "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:800:11"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReviewCard, {
				title: "Recommendation",
				icon: ClipboardCheck,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:804:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:805:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Therapy",
							value: state.therapy || "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:806:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Frequency",
							value: state.frequency,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:807:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Sessions / week",
							value: state.sessionsPerWeek,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:808:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Duration",
							value: state.duration,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:809:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Home plan",
							value: state.homeInstructions || "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:810:11"
						})
					]
				}), goals.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 border-t border-border pt-4",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:813:11",
					children: goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-[13px] text-foreground",
						"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:815:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-success",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:816:17"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 break-words",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:817:17",
							children: goal
						})]
					}, goal))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Treatment Plan",
				icon: ClipboardCheck,
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:824:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:825:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Package",
							value: state.packageType,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:826:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Estimated sessions",
							value: state.estimatedSessions,
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:827:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Expected start",
							value: state.expectedStart ? formatDate(state.expectedStart) : "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:828:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Expected review",
							value: state.expectedReview ? formatDate(state.expectedReview) : "—",
							"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:832:11"
						})
					]
				})
			})
		]
	});
}
function ReviewCard({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:852:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 border-b border-border pb-4",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:853:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:854:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-[18px] w-[18px]",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:855:11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:857:9",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-4",
			"data-tsd-source": "/src/components/assessments/assessment-wizard.tsx:861:7",
			children
		})]
	});
}
function NewAssessmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.assessments.new.tsx:31:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "New Assessment",
			description: "Complete seven guided steps to record a full clinical assessment.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Assessment Management",
					to: "/manager/assessments"
				},
				{ label: "New Assessment" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/assessments",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Back"]
				})
			}),
			"data-tsd-source": "/src/routes/manager.assessments.new.tsx:32:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentWizard, { "data-tsd-source": "/src/routes/manager.assessments.new.tsx:50:7" })]
	});
}
//#endregion
export { NewAssessmentPage as component };
