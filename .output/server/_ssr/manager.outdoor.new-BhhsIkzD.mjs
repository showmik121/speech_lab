import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Sn as ArrowLeft, ot as MapPinned, tn as CalendarPlus } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { a as TherapistAvailabilityWidget, s as TodaysScheduleWidget, t as AreaCoverageWidget } from "./outdoor-widgets-DRurj8EB.mjs";
import { t as ScheduleVisitDialog } from "./schedule-visit-dialog-Dvjp059X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor.new-BhhsIkzD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_HINTS = [
	{
		step: 1,
		title: "Select Patient",
		hint: "Search patient, guardian, diagnosis and plan"
	},
	{
		step: 2,
		title: "Visit Information",
		hint: "Type, date, time, duration, priority, purpose"
	},
	{
		step: 3,
		title: "Location",
		hint: "Division, district, area, address, map link"
	},
	{
		step: 4,
		title: "Assign Therapist",
		hint: "Therapist, support staff, vehicle, equipment"
	},
	{
		step: 5,
		title: "Review",
		hint: "Save draft or schedule the visit"
	}
];
function NewOutdoorVisitPage() {
	const [open, setOpen] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:44:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Schedule Outdoor Visit",
				description: "Plan an outdoor therapy visit in five guided steps.",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Outdoor Service",
						to: "/manager/outdoor"
					},
					{ label: "Schedule Visit" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/outdoor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back to visits"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Open wizard"]
				})] }),
				"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:45:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:69:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:70:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:71:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:72:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, {
									className: "h-5 w-5",
									"aria-hidden": "true",
									"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:73:15"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:75:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[15px] font-semibold tracking-tight text-foreground",
									"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:76:15",
									children: "Five-step scheduling"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:79:15",
									children: "Choose the patient, describe the visit, confirm the location, assign the field team, then review before scheduling."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:86:11",
							children: STEP_HINTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-xl border border-border bg-muted/25 p-4",
								"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:88:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[12px] font-semibold text-muted-foreground",
									"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:92:17",
									children: item.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:95:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium text-foreground",
										"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:96:19",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:97:19",
										children: item.hint
									})]
								})]
							}, item.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-6",
							onClick: () => setOpen(true),
							"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:103:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
								className: "h-4 w-4",
								"aria-hidden": "true",
								"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:104:13"
							}), "Schedule Outdoor Visit"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					"aria-label": "Scheduling context",
					"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:109:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysScheduleWidget, { "data-tsd-source": "/src/routes/manager.outdoor.new.tsx:110:11" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, { "data-tsd-source": "/src/routes/manager.outdoor.new.tsx:111:11" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, { "data-tsd-source": "/src/routes/manager.outdoor.new.tsx:112:11" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleVisitDialog, {
				open,
				onOpenChange: setOpen,
				"data-tsd-source": "/src/routes/manager.outdoor.new.tsx:116:7"
			})
		]
	});
}
//#endregion
export { NewOutdoorVisitPage as component };
