import { En as Activity, Mt as DoorOpen, Rt as ClipboardList, Sn as ArrowLeft, St as HeartPulse, Tt as Gauge, U as Printer, Ut as CircleCheck, X as PencilLine, a as Wallet, q as Phone, rn as CalendarClock, s as Users, tt as NotebookPen, u as UserRound, x as Target } from "../_libs/lucide-react.mjs";
import { c as THERAPY_STATUS_TONE, f as formatTimeRange, t as ATTENDANCE_TONE, u as averageProgress } from "./therapy-data--L5tymgW.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as Route$3 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate, r as formatDateTime } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { t as TherapyAvatar } from "./therapy-table-CNwJOOwy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy._sessionId-BrPTyqCd.js
var import_jsx_runtime = require_jsx_runtime();
var barTone = {
	success: "[&>div]:bg-success",
	info: "[&>div]:bg-info",
	warning: "[&>div]:bg-warning",
	danger: "[&>div]:bg-danger",
	neutral: "[&>div]:bg-muted-foreground"
};
/** Single skill progress card used on the session details page. */
function ProgressCard({ skill }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-card transition-enterprise hover:bg-surface-hover",
		"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:17:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
				"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:18:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-[13px] font-medium text-foreground",
					"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:19:9",
					children: skill.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: skill.tone,
					label: skill.status,
					"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:20:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[22px] font-semibold leading-none tabular-nums text-foreground",
				"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:22:7",
				children: [skill.value, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: skill.value,
				className: cn("mt-3", barTone[skill.tone]),
				"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:25:7"
			})
		]
	});
}
function ProgressTracker({ skills }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:32:5",
		children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
			skill,
			"data-tsd-source": "/src/components/therapy/progress-tracker.tsx:34:9"
		}, skill.key))
	});
}
function TherapySessionDetailsPage() {
	const { session } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:93:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${session.code} — ${session.patientName}`,
				description: `${session.mode} · ${session.program} · ${formatDate(session.sessionDate)} · ${session.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Therapy Management",
						to: "/manager/therapy"
					},
					{ label: session.code }
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
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:94:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailHeader, {
				session,
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:112:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:114:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:115:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Patient Summary",
							icon: UserRound,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:116:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:117:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient",
										value: session.patientName,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:118:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: session.patientCode,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:119:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Age / Gender",
										value: `${session.patientAge} years · ${session.patientGender}`,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:120:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: session.guardianName,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:124:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian phone",
										value: session.guardianPhone,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:125:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: session.branch,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:126:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 border-t border-border pt-4",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:128:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									asChild: true,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:129:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/patients/$patientId",
										params: { patientId: session.patientId },
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:130:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:131:19"
										}), "Open patient profile"]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Assessment Summary",
							icon: ClipboardList,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:138:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:139:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Diagnosis",
									value: session.diagnosis,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:140:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Clinical summary",
									value: session.assessmentSummary,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:141:15"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Current Therapy Plan",
							icon: Target,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:145:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:146:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapy type",
										value: session.mode,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:147:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Program",
										value: session.program,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:148:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session",
										value: `${session.sessionNumber} of ${session.totalSessions}`,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:149:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapist",
										value: session.therapist,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:153:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Room",
										value: session.room,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:154:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Equipment",
										value: session.equipment.length > 0 ? session.equipment.join(", ") : "None",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:155:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Plan",
										value: session.therapyPlan,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:159:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Package Information",
							icon: Wallet,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:163:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:164:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Package",
									value: session.packageName,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:165:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Sessions used",
									value: `${session.packageSessionsUsed} of ${session.packageSessionsTotal}`,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:166:15"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: Math.round(session.packageSessionsUsed / session.packageSessionsTotal * 100),
								className: "mt-4",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:171:13"
							})]
						}),
						session.mode === "Individual Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Individual Therapy",
							icon: UserRound,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:180:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:181:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session goal",
										value: session.goals.sessionGoal,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:182:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Target skills",
										value: session.goals.targetSkills.join(", ") || "Not set",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:183:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Objectives",
										value: session.notes.objectives,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:187:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Homework",
										value: session.notes.homework,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:188:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expected outcome",
										value: session.goals.expectedOutcome,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:189:17"
									})
								]
							})
						}) : session.group ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Group Therapy",
							icon: Users,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: session.group.groupName,
								dot: false
							}),
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:197:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:202:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Group name",
										value: session.group.groupName,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:203:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session topic",
										value: session.group.sessionTopic,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:204:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Total children",
										value: String(session.group.totalChildren),
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:205:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Present / Absent",
										value: `${session.group.present} present · ${session.group.absent} absent`,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:206:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Group activities",
										value: session.group.activities.join(", "),
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:210:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Remarks",
										value: session.group.remarks,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:215:17"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border pt-4",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:222:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:223:17",
									children: "Group members"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:226:17",
									children: session.group.members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:228:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-3",
											"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:232:23",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
												name: member.name,
												className: "h-8 w-8 text-[11px]",
												"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:233:25"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:234:25",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-[13px] font-medium text-foreground",
													"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:235:27",
													children: member.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "truncate text-[12px] text-muted-foreground",
													"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:238:27",
													children: [
														member.patientCode,
														" · ",
														member.age,
														" yrs"
													]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: ATTENDANCE_TONE[member.attendance],
											label: member.attendance,
											"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:243:23"
										})]
									}, member.id))
								})]
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Session Notes",
							icon: NotebookPen,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:254:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:255:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Objectives",
										value: session.notes.objectives,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:256:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Activities performed",
										value: session.notes.activitiesPerformed,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:257:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient response",
										value: session.notes.patientResponse,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:258:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Behavior",
										value: session.notes.behavior,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:259:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Homework",
										value: session.notes.homework,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:260:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Recommendations",
										value: session.notes.recommendations,
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:261:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapist notes",
										value: session.notes.therapistNotes,
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:262:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Progress Tracker",
							icon: Gauge,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: `Average ${averageProgress(session.progressSkills)}%`,
								dot: false
							}),
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:270:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressTracker, {
								skills: session.progressSkills,
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:281:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Therapy Timeline",
							icon: Activity,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:284:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "relative space-y-6 border-l border-border pl-6",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:285:13",
								children: session.timeline.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
									label: event.title,
									value: formatDate(event.date),
									caption: event.description,
									tone: event.tone === "danger" ? "warning" : event.tone,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:287:17"
								}, event.id))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:299:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Session Progress",
							description: "Overall therapy goal completion",
							icon: Gauge,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:300:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[26px] font-semibold leading-none tabular-nums text-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:306:13",
									children: [session.progress, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: session.progress,
									className: "mt-3",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:309:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:310:13",
									children: [
										"Session ",
										session.sessionNumber,
										" of ",
										session.totalSessions,
										" in the current plan."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Schedule",
							description: "Date, time and room",
							icon: CalendarClock,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:315:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:321:13",
									children: formatDate(session.sessionDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[12.5px] tabular-nums text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:324:13",
									children: formatTimeRange(session.startTime, session.endTime)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:327:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:328:15"
									}), session.room]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assigned Therapist",
							description: "Clinician leading this session",
							icon: UserRound,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:333:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:339:13",
								children: session.therapist
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:340:13",
								children: session.branch
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Guardian Contact",
							description: "Primary contact for this patient",
							icon: Phone,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:343:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:349:13",
									children: session.guardianName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:350:13",
									children: session.guardianPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 w-full",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:351:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:352:15"
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
function DetailHeader({ session }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:364:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start",
			"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:365:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:366:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
					name: session.patientName,
					className: "h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:367:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:371:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:372:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[12.5px] font-medium text-primary",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:373:15",
									children: session.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: THERAPY_STATUS_TONE[session.status],
									label: session.status,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:376:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: ATTENDANCE_TONE[session.attendance],
									label: session.attendance,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:377:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "neutral",
									label: session.mode,
									dot: false,
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:378:15"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-[19px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:380:13",
							children: session.patientName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:383:13",
							children: [
								session.patientCode,
								" · ",
								session.patientAge,
								" years · ",
								session.patientGender,
								" · Guardian ",
								session.guardianName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:387:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:388:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:389:17"
								}), session.program]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:392:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:393:17"
									}),
									"Created ",
									formatDateTime(session.createdAt)
								]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:400:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:401:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:402:13"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:405:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:406:13"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: session.status === "Completed",
						"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:409:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:410:13"
						}), "Complete Session"]
					})
				]
			})]
		})
	});
}
function Section({ title, icon: Icon, aside, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 sm:p-6",
		"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:431:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-4",
			"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:432:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:433:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:434:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:435:13"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:437:11",
					children: title
				})]
			}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:441:18",
				children: aside
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-5",
			"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:443:7",
			children
		})]
	});
}
function Field({ label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 ${className ?? ""}`,
		"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:458:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:459:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 break-words text-sm leading-relaxed text-foreground",
			"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:460:7",
			children: value
		})]
	});
}
function TimelineStep({ label, value, caption, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative",
		"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:484:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-card ${{
					info: "bg-info",
					success: "bg-success",
					warning: "bg-warning",
					neutral: "bg-muted-foreground"
				}[tone]}`,
				"aria-hidden": "true",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:485:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] uppercase tracking-[0.06em] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:489:7",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm font-medium text-foreground",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:490:7",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.therapy.$sessionId.tsx:491:7",
				children: caption
			})
		]
	});
}
//#endregion
export { TherapySessionDetailsPage as component };
