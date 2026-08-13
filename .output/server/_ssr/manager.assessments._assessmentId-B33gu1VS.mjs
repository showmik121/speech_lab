import { Dt as FileText, Sn as ArrowLeft, St as HeartPulse, Tt as Gauge, U as Printer, X as PencilLine, i as Waves, on as Building2, q as Phone, rn as CalendarClock, tn as CalendarPlus, u as UserRound, w as Stethoscope, x as Target, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, a as ASSESSMENT_STATUS_TONE, y as averageScore } from "./assessment-data-VYEbB3BS.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { f as Route$22 } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate, r as formatDateTime } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { t as ScoreMeter } from "./score-rating-CAAjQoIO.mjs";
import { n as AssessmentAvatar } from "./assessment-table-C130uZGc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments._assessmentId-B33gu1VS.js
var import_jsx_runtime = require_jsx_runtime();
function AssessmentDetailsPage() {
	const { assessment } = Route$22.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:91:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${assessment.code} — ${assessment.patientName}`,
				description: `${assessment.assessmentType} · ${formatDate(assessment.assessmentDate)} · ${assessment.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Assessment Management",
						to: "/manager/assessments"
					},
					{ label: assessment.code }
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
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:92:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailHeader, {
				assessment,
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:110:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:112:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:113:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Patient Summary",
							icon: UserRound,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:114:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:115:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient",
										value: assessment.patientName,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:116:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: assessment.patientCode,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:117:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Age / Gender",
										value: `${assessment.patientAge} years · ${assessment.patientGender}`,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:118:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: assessment.guardianName,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:122:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian phone",
										value: assessment.guardianPhone,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:123:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: assessment.branch,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:124:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Medical summary",
										value: assessment.medicalSummary,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:125:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 border-t border-border pt-4",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:131:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									asChild: true,
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:132:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/patients/$patientId",
										params: { patientId: assessment.patientId },
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:133:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:134:19"
										}), "Open patient profile"]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Assessment Details",
							icon: ClipboardCheck,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:141:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:142:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment ID",
										value: assessment.code,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:143:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment type",
										value: assessment.assessmentType,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:144:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment date",
										value: formatDate(assessment.assessmentDate),
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:145:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessed by",
										value: assessment.assessor,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:146:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Reason for visit",
										value: assessment.reasonForVisit,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:147:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Chief complaint",
										value: assessment.chiefComplaint,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:152:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Observation notes",
										value: assessment.observationNotes,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:157:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Clinical Evaluation",
							icon: Gauge,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: `Average ${averageScore(assessment.evaluation)}/5`,
								dot: false
							}),
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:165:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:176:13",
								children: assessment.evaluation.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreMeter, {
									label: skill.label,
									score: skill.score,
									note: skill.note,
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:178:17"
								}, skill.key))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Diagnosis",
							icon: Stethoscope,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:188:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:189:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "neutral",
										label: assessment.diagnosis.primary,
										dot: false,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:190:15"
									}),
									assessment.diagnosis.secondary !== "None" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "neutral",
										label: assessment.diagnosis.secondary,
										dot: false,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:192:17"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: SEVERITY_TONE[assessment.diagnosis.severity],
										label: `${assessment.diagnosis.severity} severity`,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:194:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:199:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Primary diagnosis",
										value: assessment.diagnosis.primary,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:200:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Secondary diagnosis",
										value: assessment.diagnosis.secondary,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:201:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Clinical summary",
										value: assessment.diagnosis.summary,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:202:15"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Recommendation",
							icon: Waves,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:210:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:211:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Recommended therapy",
										value: assessment.recommendation.therapy,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:212:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Frequency",
										value: assessment.recommendation.frequency,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:213:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sessions per week",
										value: String(assessment.recommendation.sessionsPerWeek),
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:214:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expected duration",
										value: assessment.recommendation.expectedDuration,
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:218:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Home instructions",
										value: assessment.recommendation.homeInstructions,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:219:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border pt-5",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:226:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:227:15",
									children: "Therapy goals"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3 space-y-3",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:230:15",
									children: assessment.recommendation.goals.map((goal, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:232:19",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border bg-muted/50 text-[11px] font-semibold text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:233:21",
											children: index + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 break-words text-sm leading-relaxed text-foreground",
											"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:236:21",
											children: goal
										})]
									}, goal))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Treatment Plan",
							icon: Target,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:245:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "relative space-y-6 border-l border-border pl-6",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:246:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Suggested package",
										value: assessment.treatmentPlan.package,
										caption: `${assessment.treatmentPlan.estimatedSessions} estimated sessions`,
										tone: "info",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:247:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Expected start date",
										value: formatDate(assessment.treatmentPlan.expectedStart),
										caption: `${assessment.recommendation.sessionsPerWeek} sessions per week`,
										tone: "success",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:253:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Expected review date",
										value: formatDate(assessment.treatmentPlan.expectedReview),
										caption: `After ${assessment.recommendation.expectedDuration} of therapy`,
										tone: "warning",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:259:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Next follow-up",
										value: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled",
										caption: "Guardian review appointment",
										tone: "neutral",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:265:15"
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:277:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assessment Progress",
							description: "Completion of the clinical workflow",
							icon: Gauge,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:278:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[26px] font-semibold leading-none tabular-nums text-foreground",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:284:13",
									children: [assessment.progress, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: assessment.progress,
									className: "mt-3",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:287:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:288:13",
									children: assessment.reportReady ? "Report generated and shared with the guardian." : "Report pending clinical sign-off."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assigned Branch",
							description: "Where the assessment was conducted",
							icon: Building2,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:295:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:301:13",
								children: assessment.branch
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:302:13",
								children: ["Assessed by ", assessment.assessor]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Expected Therapy",
							description: "Recommended programme",
							icon: Waves,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:307:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:313:13",
								children: assessment.recommendation.therapy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:316:13",
								children: [
									assessment.recommendation.sessionsPerWeek,
									"× per week ·",
									" ",
									assessment.recommendation.expectedDuration
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Follow-up Date",
							description: "Next scheduled review",
							icon: CalendarClock,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:322:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:328:13",
									children: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:331:13",
									children: ["Guardian contact: ", assessment.guardianPhone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 w-full",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:334:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:335:15"
									}), "Call guardian"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function DetailHeader({ assessment }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:347:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:348:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:349:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
					name: assessment.patientName,
					className: "h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:350:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:354:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:355:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[12.5px] font-medium text-primary",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:356:15",
									children: assessment.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: ASSESSMENT_STATUS_TONE[assessment.status],
									label: assessment.status,
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:359:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: SEVERITY_TONE[assessment.diagnosis.severity],
									label: assessment.diagnosis.severity,
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:363:15"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-[19px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:368:13",
							children: assessment.patientName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:371:13",
							children: [
								assessment.patientCode,
								" · ",
								assessment.patientAge,
								" years ·",
								" ",
								assessment.patientGender,
								" · Guardian ",
								assessment.guardianName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:375:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:376:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:377:17"
								}), assessment.diagnosis.primary]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:380:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:381:17"
									}),
									"Created ",
									formatDateTime(assessment.createdAt)
								]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:388:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:389:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:390:13"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:393:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:394:13"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:397:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:398:13"
						}), "Generate Report"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:401:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:402:13"
						}), "Schedule Therapy"]
					})
				]
			})]
		})
	});
}
function Section({ title, icon: Icon, aside, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 sm:p-6",
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:423:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-4",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:424:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:425:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:426:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:427:13"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:429:11",
					children: title
				})]
			}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:433:18",
				children: aside
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-5",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:435:7",
			children
		})]
	});
}
function Field({ label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 ${className ?? ""}`,
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:450:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:451:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 break-words text-sm leading-relaxed text-foreground",
			"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:452:7",
			children: value
		})]
	});
}
function TimelineStep({ label, value, caption, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative",
		"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:476:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-card ${{
					info: "bg-info",
					success: "bg-success",
					warning: "bg-warning",
					neutral: "bg-muted-foreground"
				}[tone]}`,
				"aria-hidden": "true",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:477:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] uppercase tracking-[0.06em] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:481:7",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm font-medium text-foreground",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:482:7",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.assessments.$assessmentId.tsx:483:7",
				children: caption
			})
		]
	});
}
//#endregion
export { AssessmentDetailsPage as component };
