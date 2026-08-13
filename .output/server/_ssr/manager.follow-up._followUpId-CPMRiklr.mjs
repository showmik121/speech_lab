import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { En as Activity, H as Receipt, J as PhoneCall, Sn as ArrowLeft, U as Printer, Ut as CircleCheck, X as PencilLine, _ as TriangleAlert, a as Wallet, d as UserPlus, et as PackageCheck, it as MessageSquare, rn as CalendarClock, u as UserRound, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { p as RISK_TONE, s as FOLLOW_UP_PRIORITY_TONE, u as FOLLOW_UP_STATUS_TONE } from "./follow-up-data-ocWJfEAb.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { d as Route$18 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { t as NewFollowUpDialog } from "./new-follow-up-dialog-Bq6nK-c9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up._followUpId-CPMRiklr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Serializable icon keys are mapped to components here, in the view layer. */
var ICONS = {
	registered: UserPlus,
	assessment: ClipboardCheck,
	therapy: Activity,
	call: PhoneCall,
	package: PackageCheck,
	completed: CircleCheck,
	message: MessageSquare
};
var TONE = {
	success: "border-success/40 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/40 bg-danger/12 text-danger",
	info: "border-primary/40 bg-primary/10 text-primary",
	neutral: "border-border bg-muted text-muted-foreground"
};
function CommunicationTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:37:5",
		children: items.map((item) => {
			const Icon = ICONS[item.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:41:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border", TONE[item.tone]),
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:42:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:49:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:51:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:52:15",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:53:15",
							children: formatDate(item.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:55:13",
						children: item.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						"data-tsd-source": "/src/components/follow-up/communication-timeline.tsx:58:13",
						children: ["by ", item.by]
					})
				]
			}, item.id);
		})
	});
}
function FollowUpDetailPage() {
	const { followUp } = Route$18.useLoaderData();
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const sessionProgress = Math.round(followUp.clinical.sessionsCompleted / followUp.clinical.sessionsPlanned * 100);
	const paidProgress = Math.round(followUp.billing.totalPaid / followUp.billing.totalBilled * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:101:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${followUp.patientName} — Follow-up`,
				description: `${followUp.code} · ${followUp.reason} · ${followUp.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Follow-up Management",
						to: "/manager/follow-up"
					},
					{ label: followUp.code }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setDialogOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Complete Follow-up"] })
				] }),
				"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:102:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:129:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start gap-5",
					"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:130:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-muted/50 text-sm font-semibold text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:131:11",
							children: initialsOf(followUp.patientName)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:134:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold tracking-tight text-foreground",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:135:13",
									children: followUp.patientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-[13px] text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:138:13",
									children: [
										followUp.patientCode,
										" · ",
										followUp.patientAge,
										" yrs · Guardian",
										" ",
										followUp.guardianName,
										" (",
										followUp.guardianRelation,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:142:13",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: FOLLOW_UP_STATUS_TONE[followUp.status],
											label: followUp.status,
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:143:15"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: FOLLOW_UP_PRIORITY_TONE[followUp.priority],
											label: `${followUp.priority} priority`,
											dot: false,
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:147:15"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: "neutral",
											label: followUp.reason,
											dot: false,
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:152:15"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-4 sm:grid-cols-3",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:155:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Assigned",
									value: formatDate(followUp.assignedDate),
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:156:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Next follow-up",
									value: formatDate(followUp.nextFollowUp),
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:157:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Assigned to",
									value: followUp.assignedTo,
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:158:13"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2.5 border-t border-border pt-4",
					"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:161:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:162:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:163:13"
								}),
								"Call ",
								followUp.guardianRelation.toLowerCase()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:166:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:167:13"
							}), "Reschedule"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:170:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/manager/patients/$patientId",
								params: { patientId: followUp.patientId },
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:171:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:172:15"
								}), "Open patient profile"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:179:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:180:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Patient summary",
							description: "Registry details for this follow-up",
							icon: UserRound,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:182:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:188:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient",
										value: followUp.patientName,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:189:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient ID",
										value: followUp.patientCode,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:190:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian",
										value: followUp.guardianName,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:191:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian phone",
										value: followUp.guardianPhone,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:192:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Branch",
										value: followUp.branch,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:193:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Last visit",
										value: formatDate(followUp.lastVisit),
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:194:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Current package",
										value: followUp.packageName,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:195:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Preferred contact time",
										value: followUp.preferredTime,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:196:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assessment summary",
							description: "Latest clinical assessment findings",
							icon: ClipboardCheck,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:201:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:207:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Assessment date",
										value: formatDate(followUp.clinical.assessmentDate),
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:208:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Diagnosis",
										value: followUp.clinical.diagnosis,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:209:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Severity",
										value: followUp.clinical.severity,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:210:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Therapist",
										value: followUp.clinical.therapist,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:211:15"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-lg border border-border bg-muted/30 p-3.5 text-[13px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:213:13",
								children: followUp.clinical.assessmentSummary
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Therapy progress",
							description: followUp.clinical.therapyProgram,
							icon: Activity,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:219:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:225:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[13px]",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:226:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:227:17",
											children: "Sessions completed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:228:17",
											children: [
												followUp.clinical.sessionsCompleted,
												" of ",
												followUp.clinical.sessionsPlanned
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: sessionProgress,
										"aria-label": "Therapy progress",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:232:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] leading-relaxed text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:233:15",
										children: followUp.clinical.progressNote
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Payment status",
							description: followUp.billing.packageName,
							icon: Receipt,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:240:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid gap-4 sm:grid-cols-4",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:246:13",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Total billed",
											value: formatTaka(followUp.billing.totalBilled),
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:247:15"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Total paid",
											value: formatTaka(followUp.billing.totalPaid),
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:248:15"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Outstanding",
											value: formatTaka(followUp.billing.due),
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:249:15"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Last payment",
											value: formatDate(followUp.billing.lastPaymentDate),
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:250:15"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:252:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[13px]",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:253:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:254:17",
											children: "Collected against billed amount"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:255:17",
											children: [paidProgress, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: paidProgress,
										"aria-label": "Collection progress",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:257:15"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:259:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										asChild: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:260:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/manager/payments",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:261:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
												className: "h-4 w-4",
												"aria-hidden": "true",
												"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:262:19"
											}), "Open billing"]
										})
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Communication history",
							description: "Notes captured during this follow-up",
							icon: MessageSquare,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:270:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:276:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Discussion summary",
										value: followUp.notes.summary,
										wrap: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:277:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient response",
										value: followUp.notes.patientResponse,
										wrap: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:278:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian feedback",
										value: followUp.notes.guardianFeedback,
										wrap: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:279:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Recommendations",
										value: followUp.notes.recommendations,
										wrap: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:280:15"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Next action",
										value: followUp.notes.nextAction,
										wrap: true,
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:281:15"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Communication timeline",
							description: "Full patient journey with this branch",
							icon: CalendarClock,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:286:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunicationTimeline, {
								items: followUp.timeline,
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:292:13"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"aria-label": "Retention widgets",
					"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:297:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Risk level",
							description: "Retention risk for this patient",
							icon: TriangleAlert,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:298:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:304:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: RISK_TONE[followUp.metrics.risk],
									label: `${followUp.metrics.risk} risk`,
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:305:15"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("text-[26px] font-semibold leading-none tabular-nums", followUp.metrics.risk === "High" ? "text-danger" : followUp.metrics.risk === "Moderate" ? "text-warning" : "text-success"),
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:309:15",
									children: [followUp.metrics.attendance, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[12.5px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:322:13",
								children: "Based on attendance, outstanding dues and missed sessions."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "divide-y divide-border p-0",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:327:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Attendance",
									value: `${followUp.metrics.attendance}%`,
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:328:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Remaining sessions",
									value: String(followUp.metrics.remainingSessions),
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:329:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Outstanding due",
									value: formatTaka(followUp.metrics.outstandingDue),
									tone: followUp.metrics.outstandingDue > 0 ? "danger" : "muted",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:333:13"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Next appointment",
									value: followUp.metrics.nextAppointment ? formatDate(followUp.metrics.nextAppointment) : "Not booked",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:338:13"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Quick actions",
							description: "Placeholder actions for this follow-up",
							icon: PhoneCall,
							showMenu: false,
							contentClassName: "space-y-2.5",
							"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:348:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:355:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:356:15"
									}), "Call patient"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:359:13",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-4 w-4",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:360:15"
									}), "Book next appointment"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									asChild: true,
									"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:363:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/follow-up",
										"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:364:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:365:17"
										}), "Back to follow-ups"]
									})
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewFollowUpDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				presetPatientId: followUp.patientId,
				"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:373:7"
			})
		]
	});
}
function HeaderStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:384:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:385:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 truncate text-sm font-medium text-foreground",
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:386:7",
			children: value
		})]
	});
}
function Detail({ label, value, wrap = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:401:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:402:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("mt-0.5 text-[13.5px] text-foreground", wrap ? "leading-relaxed" : "truncate"),
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:403:7",
			children: value
		})]
	});
}
function SidebarStat({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 px-5 py-3.5",
		"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:425:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[13px] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:426:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-sm font-semibold tabular-nums", tone === "danger" ? "text-danger" : tone === "muted" ? "text-muted-foreground" : "text-foreground"),
			"data-tsd-source": "/src/routes/manager.follow-up.$followUpId.tsx:427:7",
			children: value
		})]
	});
}
//#endregion
export { FollowUpDetailPage as component };
