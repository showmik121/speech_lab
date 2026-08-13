import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Ft as Columns3, K as Plus, P as Search, Rt as ClipboardList, jt as Download, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { c as BRANCH_FILTER_OPTIONS, i as ASSESSMENT_STATUSES, n as ASSESSMENT_DATE_RANGES, o as ASSESSMENT_TYPES, r as ASSESSMENT_KPIS, t as ASSESSMENTS, v as THERAPY_RECOMMENDATIONS } from "./assessment-data-VYEbB3BS.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { i as DEFAULT_ASSESSMENT_COLUMNS, r as AssessmentTable, t as ASSESSMENT_COLUMNS } from "./assessment-table-C130uZGc.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments.index-Dltd5l_r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_ASSESSMENT_FILTERS = {
	search: "",
	status: "all",
	assessmentType: "all",
	therapy: "all",
	branch: "all",
	range: "all"
};
function AssessmentFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:67:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:68:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[360px]",
				"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:69:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:70:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search patient, patient ID, guardian phone or assessment ID…",
					"aria-label": "Search assessments",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:74:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:84:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:85:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:86:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:92:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:93:13"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:96:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:97:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:98:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:99:17"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:103:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:104:15",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/assessments/assessment-filters.tsx:105:15" }),
								ASSESSMENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:107:17",
									children: column.label
								}, column.key))
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:121:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "assessment status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: ASSESSMENT_STATUSES,
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:122:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "assessment type",
					placeholder: "Assessment type",
					width: "w-[185px]",
					value: value.assessmentType,
					onValueChange: (assessmentType) => set({ assessmentType }),
					allLabel: "All assessment types",
					options: ASSESSMENT_TYPES,
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:131:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "therapy type",
					placeholder: "Therapy",
					width: "w-[185px]",
					value: value.therapy,
					onValueChange: (therapy) => set({ therapy }),
					allLabel: "All therapies",
					options: THERAPY_RECOMMENDATIONS,
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:140:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[180px]",
					value: value.branch,
					onValueChange: (branch) => set({ branch }),
					allLabel: "All branches",
					options: BRANCH_FILTER_OPTIONS,
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:149:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:159:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by assessment date range",
						"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:160:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date range",
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:161:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:163:11",
						children: ASSESSMENT_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: range.key,
							"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:165:15",
							children: range.label
						}, range.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_ASSESSMENT_FILTERS),
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:172:9",
					children: "Reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-[12px] text-muted-foreground xl:inline",
					"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:181:9",
					children: "Filters apply instantly and combine with the search box"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onValueChange, allLabel, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange,
		"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:207:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:208:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:209:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:211:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:212:9",
				children: allLabel
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/assessments/assessment-filters.tsx:214:11",
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = /* @__PURE__ */ new Date("2026-07-31");
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function AssessmentManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_ASSESSMENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_ASSESSMENT_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return ASSESSMENTS.filter((assessment) => {
			return (!query || [
				assessment.patientName,
				assessment.patientCode,
				assessment.code,
				assessment.guardianPhone,
				assessment.guardianName
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || assessment.status === filters.status) && (filters.assessmentType === "all" || assessment.assessmentType === filters.assessmentType) && (filters.therapy === "all" || assessment.recommendation.therapy === filters.therapy) && (filters.branch === "all" || assessment.branch === filters.branch) && withinRange(assessment.assessmentDate, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	const toggleColumn = (key) => setVisibleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.assessments.index.tsx:105:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Assessment Management",
				description: "Manage patient assessments and treatment planning.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Assessment Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/assessments/new",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "New Assessment"]
					})
				})] }),
				"data-tsd-source": "/src/routes/manager.assessments.index.tsx:106:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Assessment summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
				"data-tsd-source": "/src/routes/manager.assessments.index.tsx:129:7",
				children: ASSESSMENT_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.assessments.index.tsx:134:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Assessments",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				"data-tsd-source": "/src/routes/manager.assessments.index.tsx:138:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					visibleColumns,
					onToggleColumn: toggleColumn,
					"data-tsd-source": "/src/routes/manager.assessments.index.tsx:142:9"
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: ClipboardList,
					title: "No assessments available.",
					description: "Start by creating your first patient assessment.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/assessments/new",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Create Assessment"]
						})
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_ASSESSMENT_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none",
					"data-tsd-source": "/src/routes/manager.assessments.index.tsx:155:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentTable, {
					rows,
					visibleColumns,
					"data-tsd-source": "/src/routes/manager.assessments.index.tsx:176:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					"data-tsd-source": "/src/routes/manager.assessments.index.tsx:177:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage,
						"data-tsd-source": "/src/routes/manager.assessments.index.tsx:178:15"
					})
				})] })]
			})
		]
	});
}
//#endregion
export { AssessmentManagementPage as component };
