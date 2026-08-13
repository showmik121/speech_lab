import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, jt as Download, ot as MapPinned, tn as CalendarPlus, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { C as VISIT_TYPES, _ as VISIT_HISTORY, d as OUTDOOR_VISITS, l as OUTDOOR_TABS, o as OUTDOOR_KPIS, r as DIVISIONS, s as OUTDOOR_PATIENTS, u as OUTDOOR_THERAPISTS, x as VISIT_STATUSES } from "./outdoor-data-ClUJqde_.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { c as Route$14 } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { a as TherapistAvailabilityWidget, c as UpcomingVisitsWidget, i as OutdoorVisitTable, l as VisitHistoryTable, o as TherapistCards, r as OutdoorPatientTable, s as TodaysScheduleWidget, t as AreaCoverageWidget } from "./outdoor-widgets-DRurj8EB.mjs";
import { t as ScheduleVisitDialog } from "./schedule-visit-dialog-Dvjp059X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor.index-uMSTQYkz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_OUTDOOR_FILTERS = {
	search: "",
	type: "all",
	status: "all",
	division: "all",
	therapist: "all"
};
function OutdoorFilters({ value, onChange, onRefresh, isRefreshing = false, searchPlaceholder = "Search visit ID, patient, guardian or area…" }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:50:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:51:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[430px]",
				"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:52:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:53:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: searchPlaceholder,
					"aria-label": "Search outdoor visits",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:57:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:66:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: onRefresh,
					disabled: isRefreshing,
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:67:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:68:13"
					}), "Refresh"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:74:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:75:13"
					}), "Export"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:81:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "visit types",
					placeholder: "Visit type",
					width: "w-[185px]",
					value: value.type,
					onChange: (next) => set({ type: next }),
					options: VISIT_TYPES,
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:82:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "statuses",
					placeholder: "Status",
					width: "w-[165px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: VISIT_STATUSES,
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:90:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "divisions",
					placeholder: "Division",
					width: "w-[165px]",
					value: value.division,
					onChange: (next) => set({ division: next }),
					options: DIVISIONS,
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:98:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "therapists",
					placeholder: "Therapist",
					width: "w-[210px]",
					value: value.therapist,
					onChange: (next) => set({ therapist: next }),
					options: OUTDOOR_THERAPISTS.map((therapist) => therapist.name),
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:106:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_OUTDOOR_FILTERS),
					"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:114:9",
					children: "Clear"
				})
			]
		})]
	});
}
function Picker({ label, placeholder, width, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange: onChange,
		"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:143:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:144:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:145:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:147:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:148:9",
				children: ["All ", label]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/outdoor/outdoor-filters.tsx:150:11",
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
function OutdoorPage() {
	const { tab } = Route$14.useSearch();
	const navigate = Route$14.useNavigate();
	const activeTab = OUTDOOR_TABS.some((item) => item.value === tab) ? tab : "visits";
	const [wizardOpen, setWizardOpen] = (0, import_react.useState)(false);
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_OUTDOOR_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const visits = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return OUTDOOR_VISITS.filter((visit) => {
			return (!query || [
				visit.visitId,
				visit.patientName,
				visit.guardian,
				visit.area,
				visit.therapistName
			].join(" ").toLowerCase().includes(query)) && (filters.type === "all" || visit.type === filters.type) && (filters.status === "all" || visit.status === filters.status) && (filters.division === "all" || visit.division === filters.division) && (filters.therapist === "all" || visit.therapistName === filters.therapist);
		}).sort((a, b) => b.date.localeCompare(a.date));
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(visits.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = visits.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const scheduleButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setWizardOpen(true),
		"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:92:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
			className: "h-4 w-4",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:93:7"
		}), "Schedule Outdoor Visit"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:99:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Outdoor Service Management",
				description: "Manage outdoor therapy visits, patients and therapists.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Outdoor Service" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [scheduleButton, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				})] }),
				"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:100:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Outdoor service summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:118:7",
				children: OUTDOOR_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:123:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]",
				"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:127:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: (next) => navigate({ search: { tab: next } }),
					className: "min-w-0",
					"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:128:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "-mx-1 overflow-x-auto px-1 pb-1",
							"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:133:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
								className: "w-max",
								"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:134:13",
								children: OUTDOOR_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: item.value,
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:136:17",
									children: item.label
								}, item.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "visits",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:143:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:144:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorFilters, {
									value: filters,
									onChange: (next) => {
										setFilters(next);
										setPage(1);
									},
									onRefresh: () => {
										setRefreshing(true);
										setTimeout(() => setRefreshing(false), 700);
									},
									isRefreshing: refreshing,
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:145:15"
								}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
									icon: MapPinned,
									title: "No Outdoor Visits Scheduled",
									description: "Start by scheduling your first outdoor therapy visit.",
									action: scheduleButton,
									secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										onClick: () => setFilters(DEFAULT_OUTDOOR_FILTERS),
										children: "Reset filters"
									}),
									className: "rounded-none border-0 shadow-none",
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:158:17"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorVisitTable, {
									rows,
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:172:19"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border px-4 py-3.5 sm:px-5",
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:173:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
										page: currentPage,
										pageSize: PAGE_SIZE,
										total: visits.length,
										onPageChange: setPage,
										"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:174:21"
									})
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "patients",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:186:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:187:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorPatientTable, {
									rows: OUTDOOR_PATIENTS,
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:188:15"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "therapists",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:192:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistCards, { "data-tsd-source": "/src/routes/manager.outdoor.index.tsx:193:13" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "history",
							className: "mt-6",
							"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:196:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:197:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitHistoryTable, {
									rows: VISIT_HISTORY,
									"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:198:15"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					"aria-label": "Outdoor service widgets",
					"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:203:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysScheduleWidget, { "data-tsd-source": "/src/routes/manager.outdoor.index.tsx:204:11" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingVisitsWidget, { "data-tsd-source": "/src/routes/manager.outdoor.index.tsx:205:11" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, { "data-tsd-source": "/src/routes/manager.outdoor.index.tsx:206:11" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, { "data-tsd-source": "/src/routes/manager.outdoor.index.tsx:207:11" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleVisitDialog, {
				open: wizardOpen,
				onOpenChange: setWizardOpen,
				"data-tsd-source": "/src/routes/manager.outdoor.index.tsx:211:7"
			})
		]
	});
}
//#endregion
export { OutdoorPage as component };
