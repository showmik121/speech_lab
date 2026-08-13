import { C as StickyNote, Dt as FileText, En as Activity, J as PhoneCall, Rt as ClipboardList, Sn as ArrowLeft, St as HeartPulse, T as Sparkles, _ as TriangleAlert, a as Wallet, ct as Mail, d as UserPlus, i as Waves, l as User, mn as Banknote, q as Phone, rn as CalendarClock, s as Users, st as MapPin, tn as CalendarPlus, w as Stethoscope, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { c as PATIENT_STATUS_TONE, l as PAYMENT_STATUS_TONE } from "./patient-data-BLExFXXL.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { o as Route$9 } from "./router-DNK85qwG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { t as Badge } from "./badge-C3xjBsL2.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { r as PatientAvatar } from "./patient-table-BXY_8Q-W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients._patientId-PEhVXDWU.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Professional placeholder used by patient profile tabs whose
* business module has not been built yet.
*/
function ComingSoonCard({ icon: Icon = Sparkles, title, description, capabilities, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card sm:p-8", className),
		"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:24:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]",
			"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:30:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:34:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:35:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3.5",
					"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:36:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary shadow-xs",
						"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:37:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:38:15"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:40:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[15px] font-semibold tracking-tight text-foreground",
							"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:41:15",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground",
							"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:42:15",
							children: description
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "info",
					"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:47:11",
					children: "Coming soon"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:50:9",
				children: capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 px-3.5 py-3",
					"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:52:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:56:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/patients/coming-soon-card.tsx:60:15",
						children: capability
					})]
				}, capability))
			})]
		})]
	});
}
var toneClass = {
	success: "border-success/35 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/35 bg-danger/12 text-danger",
	info: "border-primary/30 bg-primary/10 text-primary",
	neutral: "border-border bg-muted/50 text-muted-foreground"
};
/** Icons live in the view layer so timeline data stays serialisable across SSR. */
var timelineIcon = {
	registered: UserPlus,
	assessment: ClipboardCheck,
	therapy: Waves,
	payment: Banknote,
	call: PhoneCall
};
function PatientTimeline({ events }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		className: "relative space-y-6",
		"data-tsd-source": "/src/components/patients/patient-timeline.tsx:30:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-[17px] top-2 bottom-2 w-px bg-border",
			"aria-hidden": "true",
			"data-tsd-source": "/src/components/patients/patient-timeline.tsx:31:7"
		}), events.map((event) => {
			const Icon = timelineIcon[event.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative flex gap-4",
				"data-tsd-source": "/src/components/patients/patient-timeline.tsx:38:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border", toneClass[event.tone]),
					"data-tsd-source": "/src/components/patients/patient-timeline.tsx:39:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-timeline.tsx:45:15"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 pt-0.5",
					"data-tsd-source": "/src/components/patients/patient-timeline.tsx:47:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						"data-tsd-source": "/src/components/patients/patient-timeline.tsx:48:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/patients/patient-timeline.tsx:49:17",
							children: event.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: event.date,
							className: "shrink-0 text-[12px] tabular-nums text-muted-foreground",
							"data-tsd-source": "/src/components/patients/patient-timeline.tsx:50:17",
							children: formatDate(event.date)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/patients/patient-timeline.tsx:57:15",
						children: event.description
					})]
				})]
			}, event.id);
		})]
	});
}
var TABS = [
	{
		value: "overview",
		label: "Overview"
	},
	{
		value: "assessment",
		label: "Assessment"
	},
	{
		value: "therapy",
		label: "Therapy"
	},
	{
		value: "payments",
		label: "Payments"
	},
	{
		value: "followup",
		label: "Follow-up"
	},
	{
		value: "documents",
		label: "Documents"
	},
	{
		value: "notes",
		label: "Notes"
	},
	{
		value: "timeline",
		label: "Activity Timeline"
	}
];
function PatientProfilePage() {
	const { patient } = Route$9.useLoaderData();
	const { tab } = Route$9.useSearch();
	const navigate = Route$9.useNavigate();
	const activeTab = TABS.some((item) => item.value === tab) ? tab : "overview";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:116:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: patient.name,
				description: `${patient.code} · ${patient.age} years · ${patient.gender} · ${patient.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Patient Management",
						to: "/manager/patients"
					},
					{ label: patient.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/patients",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}),
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:117:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileHeader, {
				patient,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:135:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:137:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: (next) => navigate({ search: { tab: next } }),
					className: "min-w-0",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:138:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "-mx-1 overflow-x-auto px-1 pb-1",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:143:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
								className: "w-max",
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:144:13",
								children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: item.value,
									"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:146:17",
									children: item.label
								}, item.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "overview",
							className: "mt-6 space-y-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:153:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, {
								patient,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:154:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "assessment",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:157:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: ClipboardCheck,
								title: "Assessment records",
								description: "Standardised assessment forms, scoring and clinical reports for this patient will appear here.",
								capabilities: [
									"Initial and periodic assessment forms",
									"Automatic score calculation and severity bands",
									"Therapist observations with attachments",
									"Printable assessment report for guardians"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:158:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "therapy",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:171:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: Waves,
								title: "Therapy sessions",
								description: "Session-by-session therapy planning, attendance and progress tracking for this patient.",
								capabilities: [
									"Session plans mapped to programme goals",
									"Attendance and cancellation history",
									"Goal-wise progress charts over time",
									"Home practice assignments for guardians"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:172:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "payments",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:185:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: Wallet,
								title: "Payments and invoices",
								description: "Full billing ledger with invoices, receipts and outstanding balances for this patient.",
								capabilities: [
									"Invoice and receipt history with ৳ totals",
									"Package purchases and instalment schedules",
									"Partial payments and adjustment notes",
									"Due reminders sent to the guardian"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:186:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "followup",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:199:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: PhoneCall,
								title: "Follow-up management",
								description: "Scheduled follow-up calls, outcomes and re-engagement tasks for this patient.",
								capabilities: [
									"Follow-up queue with owner and due date",
									"Call outcome logging and next action",
									"Automatic follow-up after missed sessions",
									"Guardian satisfaction check-ins"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:200:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "documents",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:213:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: FileText,
								title: "Documents",
								description: "Referral letters, medical reports and consent forms stored against this patient record.",
								capabilities: [
									"Secure upload of referrals and reports",
									"Consent form versioning and signatures",
									"Document type tagging and expiry alerts",
									"Download bundle for external specialists"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:214:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "notes",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:227:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: StickyNote,
								title: "Clinical notes",
								description: "Chronological internal notes from therapists, managers and the front desk.",
								capabilities: [
									"Rich text notes with author and timestamp",
									"Pin important notes to the profile header",
									"Role-based visibility for sensitive notes",
									"Mentions to notify colleagues"
								],
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:228:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "timeline",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:241:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
								title: "Activity timeline",
								description: "Complete history of this patient's journey",
								icon: Activity,
								showMenu: false,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:242:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTimeline, {
									events: patient.timeline,
									"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:248:15"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileSidebar, {
					patient,
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:253:9"
				})]
			})
		]
	});
}
function ProfileHeader({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:261:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:262:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:263:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
					name: patient.name,
					className: "h-16 w-16 text-lg sm:h-20 sm:w-20 sm:text-xl",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:264:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:268:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:269:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold tracking-tight text-foreground",
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:270:15",
								children: patient.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PATIENT_STATUS_TONE[patient.status],
								label: patient.status,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:273:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
								label: patient.paymentStatus,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:274:15"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:279:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Patient ID",
								value: patient.code,
								mono: true,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:280:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Age",
								value: `${patient.age} years`,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:281:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Gender",
								value: patient.gender,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:282:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Guardian",
								value: patient.guardian.name,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:283:15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Phone",
								value: patient.guardian.phone,
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:284:15"
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap lg:justify-end",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:289:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:290:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:291:13"
						}), "Assessment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:294:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:295:13"
						}), "Therapy"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:298:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:299:13"
						}), "Collect Payment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:302:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:303:13"
						}), "Follow-up"]
					})
				]
			})]
		})
	});
}
function HeaderMeta({ label, value, mono = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-1.5",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:322:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "shrink-0 text-[12px] uppercase tracking-[0.06em] text-muted-foreground/80",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:323:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `truncate text-foreground ${mono ? "font-mono text-[12.5px]" : ""}`,
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:326:7",
			children: value
		})]
	});
}
function OverviewTab({ patient }) {
	const progress = patient.program.sessionsPlanned > 0 ? Math.round(patient.program.sessionsCompleted / patient.program.sessionsPlanned * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:343:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Personal information",
				description: "Identity and contact details",
				icon: User,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:344:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:350:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							value: patient.name,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:351:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Patient ID",
							value: patient.code,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:352:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Date of birth",
							value: formatDate(patient.dob),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:353:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Age",
							value: `${patient.age} years`,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:354:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Gender",
							value: patient.gender,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:355:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Blood group",
							value: patient.bloodGroup,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:356:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Phone,
							label: "Contact number",
							value: patient.phone,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:357:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Mail,
							label: "Email",
							value: patient.email,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:358:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: MapPin,
							label: "Address",
							value: patient.address,
							className: "sm:col-span-2",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:359:13"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
				title: "Guardian information",
				description: "Primary caregiver and point of contact",
				icon: Users,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:368:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:374:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Guardian name",
							value: patient.guardian.name,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:375:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Relationship",
							value: patient.guardian.relation,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:376:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Phone,
							label: "Phone",
							value: patient.guardian.phone,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:377:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Mail,
							label: "Email",
							value: patient.guardian.email,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:378:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Occupation",
							value: patient.guardian.occupation,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:379:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Registered on",
							value: formatDate(patient.registeredAt),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:380:13"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 rounded-lg border border-warning/30 bg-warning/8 p-4",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:383:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2.5",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:384:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-warning",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:385:15"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:386:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-medium text-foreground",
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:387:17",
								children: "Emergency contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[13px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:388:17",
								children: [
									patient.emergencyContact.name,
									" (",
									patient.emergencyContact.relation,
									") ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:390:19",
										children: patient.emergencyContact.phone
									})
								]
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
			title: "Medical summary",
			description: "Clinical background captured at registration",
			icon: Stethoscope,
			showMenu: false,
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:398:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-5 sm:grid-cols-2",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:404:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Primary concern",
						value: patient.medical.primaryConcern,
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:405:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Diagnosis",
						value: patient.medical.diagnosis,
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:406:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Referral doctor",
						value: patient.medical.referralDoctor,
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:407:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Blood group",
						value: patient.bloodGroup,
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:408:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Medical history",
						value: patient.medical.history,
						className: "sm:col-span-2",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:409:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						value: patient.medical.notes,
						className: "sm:col-span-2",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:414:11"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:418:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
				title: "Current therapy",
				description: "Assigned programme and progress",
				icon: Waves,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:419:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:425:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Therapy type",
							value: patient.program.therapyType,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:426:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Programme",
							value: patient.program.program,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:427:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assigned therapist",
							value: patient.program.therapist,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:428:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assessment date",
							value: formatDate(patient.program.assessmentDate),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:429:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Expected start",
							value: formatDate(patient.program.expectedStart),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:430:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sessions",
							value: patient.program.sessionsPlanned > 0 ? `${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed` : "Not started",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:431:13"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:440:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-[12.5px]",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:441:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:442:15",
							children: "Programme progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium tabular-nums text-foreground",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:443:15",
							children: [progress, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: progress,
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:445:13"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Current package & payments",
				description: "Billing setup and outstanding balance",
				icon: Banknote,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:449:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:455:11",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Package",
							value: patient.billing.packageName,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:456:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Payment type",
							value: patient.billing.paymentType,
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:457:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Registration fee",
							value: formatTaka(patient.billing.registrationFee),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:458:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Total billed",
							value: formatTaka(patient.billing.totalBilled),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:459:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Total paid",
							value: formatTaka(patient.billing.totalPaid),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:460:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Outstanding due",
							value: formatTaka(patient.billing.due),
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:461:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Last payment",
							value: `${formatTaka(patient.billing.lastPaymentAmount)} on ${formatDate(patient.billing.lastPaymentDate)}`,
							className: "sm:col-span-2",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:462:13"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Remarks",
							value: patient.billing.remarks,
							className: "sm:col-span-2",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:469:13"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:474:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Upcoming appointment",
				description: "Next scheduled visit for this patient",
				icon: CalendarClock,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:475:9",
				children: patient.nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:482:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:483:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:484:17",
							children: formatDate(patient.nextSession)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[13px] text-muted-foreground",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:487:17",
							children: [
								patient.program.therapyType,
								" with ",
								patient.program.therapist
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:491:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:492:17"
						}), "Reschedule"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-dashed border-border bg-muted/20 p-4",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:497:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-muted-foreground",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:498:15",
						children: "No upcoming appointment scheduled for this patient."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-3",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:501:15",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:502:17"
						}), "Schedule session"]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Latest follow-up",
				description: "Most recent guardian contact",
				icon: PhoneCall,
				showMenu: false,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:509:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-muted/30 p-4",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:515:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] leading-relaxed text-foreground",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:516:13",
						children: patient.followUp.note
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2.5 text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:517:13",
						children: [
							formatDate(patient.followUp.date),
							" · ",
							patient.followUp.by
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
			title: "Activity timeline",
			description: "Key milestones in this patient's journey",
			icon: Activity,
			showMenu: false,
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:524:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTimeline, {
				events: patient.timeline,
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:530:9"
			})
		})
	] });
}
function ProfileSidebar({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "Patient quick facts",
		className: "space-y-4 xl:sticky xl:top-24 xl:self-start",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:538:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: ClipboardList,
				label: "Patient status",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:539:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: PATIENT_STATUS_TONE[patient.status],
					label: patient.status,
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:540:9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:541:9",
					children: ["Registered ", formatDate(patient.registeredAt)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: CalendarClock,
				label: "Next appointment",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:546:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:547:9",
					children: patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:550:9",
					children: patient.nextSession ? patient.program.therapyType : "Awaiting scheduling"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: Banknote,
				label: "Last payment",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:555:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tabular-nums text-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:556:9",
					children: formatTaka(patient.billing.lastPaymentAmount)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:559:9",
					children: formatDate(patient.billing.lastPaymentDate)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: Wallet,
				label: "Outstanding due",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:564:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm font-semibold tabular-nums ${patient.billing.due > 0 ? "text-danger" : "text-success"}`,
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:565:9",
					children: formatTaka(patient.billing.due)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:572:9",
					children: patient.billing.due > 0 ? "Collection pending" : "No balance outstanding"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: HeartPulse,
				label: "Latest follow-up",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:577:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-relaxed text-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:578:9",
					children: patient.followUp.note
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:579:9",
					children: [
						formatDate(patient.followUp.date),
						" · ",
						patient.followUp.by
					]
				})]
			})
		]
	});
}
function SideWidget({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "p-4",
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:597:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:598:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:599:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:600:11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:602:9",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:606:7",
			children
		})]
	});
}
function Field({ icon: Icon, label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-start gap-2.5 ${className ?? ""}`,
		"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:623:5",
		children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:625:9"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:627:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:628:9",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm leading-relaxed break-words text-foreground",
				"data-tsd-source": "/src/routes/manager.patients.$patientId.tsx:629:9",
				children: value
			})]
		})]
	});
}
//#endregion
export { PatientProfilePage as component };
