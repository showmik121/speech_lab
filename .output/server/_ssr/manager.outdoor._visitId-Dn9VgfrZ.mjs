import { Sn as ArrowLeft, U as Printer, Ut as CircleCheck, ot as MapPinned, rn as CalendarClock, u as UserRound, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { S as VISIT_STATUS_TONE, b as VISIT_PRIORITY_TONE, v as VISIT_OUTCOME_TONE } from "./outdoor-data-ClUJqde_.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { s as Route$13 } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as TherapistAvailabilityWidget, c as UpcomingVisitsWidget, n as MapPlaceholderCard, t as AreaCoverageWidget } from "./outdoor-widgets-DRurj8EB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor._visitId-Dn9VgfrZ.js
var import_jsx_runtime = require_jsx_runtime();
function InfoRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0",
		"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:62:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "min-w-0 text-[12.5px] text-muted-foreground",
			"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:63:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "shrink-0 text-[13px] font-medium text-foreground",
			"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:64:7",
			children: value
		})]
	});
}
function OutdoorVisitDetailPage() {
	const { visit } = Route$13.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:73:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `${visit.visitId} · ${visit.patientName}`,
			description: `${visit.type} in ${visit.area}, ${visit.district} on ${visit.date} at ${visit.time}.`,
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Outdoor Service",
					to: "/manager/outdoor"
				},
				{ label: visit.visitId }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/outdoor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Print Visit Sheet"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Complete Visit"] })
			] }),
			"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:74:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]",
			"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:102:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-6",
				"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:103:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-wrap items-start justify-between gap-4 p-5",
						"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:104:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-start gap-3",
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:105:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:106:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:107:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:109:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[16px] font-semibold tracking-tight text-foreground",
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:110:17",
										children: visit.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:113:17",
										children: [
											"Guardian: ",
											visit.guardian,
											" (",
											visit.guardianRelation,
											") · ",
											visit.guardianPhone
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:116:17",
										children: visit.address
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:119:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_STATUS_TONE[visit.status],
									label: visit.status,
									"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:120:15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_PRIORITY_TONE[visit.priority],
									label: visit.priority,
									"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:121:15"
								}),
								visit.outcome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_OUTCOME_TONE[visit.outcome],
									label: visit.outcome,
									"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:123:17"
								}) : null
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 xl:grid-cols-2",
						"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:128:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Visit Information",
							icon: CalendarClock,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:129:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:130:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Visit type",
										value: visit.type,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:131:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Date",
										value: visit.date,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:132:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Time",
										value: visit.time,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:133:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Duration",
										value: visit.duration,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:134:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Purpose",
										value: visit.purpose,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:135:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Therapist",
										value: visit.therapistName,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:136:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Transport",
										value: visit.vehicle,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:137:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Support staff",
										value: visit.supportStaff,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:138:17"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Location",
							icon: MapPinned,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:142:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:143:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Division",
										value: visit.division,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:144:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "District",
										value: visit.district,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:145:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Area",
										value: visit.area,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:146:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Address",
										value: visit.address,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:147:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Distance",
										value: `${visit.distanceKm} km`,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:148:17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
										label: "Travel time",
										value: visit.travelTime,
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:149:17"
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPlaceholderCard, {
						address: visit.address,
						area: `${visit.area}, ${visit.district}`,
						distanceKm: visit.distanceKm,
						travelTime: visit.travelTime,
						mapLink: visit.mapLink,
						"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:154:11"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 xl:grid-cols-2",
						"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:162:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Visit Outcome",
							icon: ClipboardCheck,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:163:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:164:15",
								children: visit.notes || "Outcome notes will appear after the visit is completed."
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Recommendations",
							icon: CircleCheck,
							showMenu: false,
							"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:168:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:169:15",
								children: (visit.recommendations.length ? visit.recommendations : ["Recommendations pending visit completion."]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[13px] text-foreground",
									"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:172:21",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-success",
										"aria-hidden": "true",
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:173:23"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0",
										"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:177:23",
										children: item
									})]
								}, item))
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				"aria-label": "Outdoor visit widgets",
				"data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:186:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingVisitsWidget, { "data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:187:11" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, { "data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:188:11" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, { "data-tsd-source": "/src/routes/manager.outdoor.$visitId.tsx:189:11" })
				]
			})]
		})]
	});
}
//#endregion
export { OutdoorVisitDetailPage as component };
