import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Bt as ClipboardCheck, Dn as Activity, G as Plus, It as Columns3, Mt as Download, N as Search, R as RefreshCw, Rt as Clock, Wt as CircleCheck, an as CalendarCheck, bn as ArrowUpRight, o as Users, s as UsersRound, u as UserPlus, w as Sparkles } from "../_libs/lucide-react.mjs";
import { d as THERAPY_TYPES, n as BRANCH_OPTIONS, o as PATIENT_DATE_RANGES, r as GENDERS, s as PATIENT_STATUSES, u as PAYMENT_TYPES } from "./patient-data-BLExFXXL.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as EmptyState } from "./empty-state-Cu0SfqSK.mjs";
import { t as TablePagination } from "./table-pagination-BKPw96XE.mjs";
import { n as usePatientStore } from "./patient-store-ByOJ7Xje.mjs";
import { i as PatientTable, n as PATIENT_COLUMNS, t as DEFAULT_VISIBLE_COLUMNS } from "./patient-table-DMcH3I-I.mjs";
import { t as RegisterPatientDialog } from "./register-patient-dialog-DnZsIWsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients.index-DwMnHiRZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_PATIENT_FILTERS = {
	search: "",
	status: "all",
	therapyType: "all",
	paymentType: "all",
	gender: "all",
	range: "all",
	branch: "all"
};
function PatientFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[340px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search name, phone, patient ID or guardian…",
					"aria-label": "Search patients",
					className: "h-9 bg-muted/40 pl-9 shadow-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Columns"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-52",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Visible columns" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							PATIENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
								checked: visibleColumns.includes(column.key),
								onCheckedChange: () => onToggleColumn(column.key),
								onSelect: (event) => event.preventDefault(),
								children: column.label
							}, column.key))
						]
					})] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Patient status",
					placeholder: "Status",
					width: "w-[170px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: PATIENT_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Therapy type",
					placeholder: "Therapy",
					width: "w-[170px]",
					value: value.therapyType,
					onValueChange: (therapyType) => set({ therapyType }),
					allLabel: "All therapies",
					options: THERAPY_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Payment type",
					placeholder: "Payment",
					width: "w-[160px]",
					value: value.paymentType,
					onValueChange: (paymentType) => set({ paymentType }),
					allLabel: "All payment types",
					options: PAYMENT_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Gender",
					placeholder: "Gender",
					width: "w-[130px]",
					value: value.gender,
					onValueChange: (gender) => set({ gender }),
					allLabel: "All genders",
					options: GENDERS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by registration date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PATIENT_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: range.key,
						children: range.label
					}, range.key)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Branch",
					placeholder: "Branch",
					width: "w-[180px]",
					value: value.branch,
					onValueChange: (branch) => set({ branch }),
					allLabel: "All branches",
					options: BRANCH_OPTIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_PATIENT_FILTERS),
					children: "Reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-[12px] text-muted-foreground xl:inline",
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label.toLowerCase()}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: "all",
			children: allLabel
		}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: option,
			children: option
		}, option))] })]
	});
}
function PatientKpiCards() {
	const { totalPatients, activePatients, newThisMonth, assessmentPending, therapyOngoing } = usePatientStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-purple-500/25 bg-gradient-to-br from-card via-card to-purple-500/10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400",
							children: "Total Patients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] font-medium text-muted-foreground",
							children: "Across all branches"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: totalPatients
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-purple-600 dark:text-purple-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" }), " +12% growth rate"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-emerald-500/25 bg-gradient-to-br from-card via-card to-emerald-500/10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
							}), "Active Care"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] font-medium text-muted-foreground",
							children: "Currently in treatment"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: activePatients
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " +4 added this week"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-blue-500/25 bg-gradient-to-br from-card via-card to-blue-500/10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400",
							children: "New Patients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] font-medium text-muted-foreground",
							children: "Registered this month"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: newThisMonth
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-blue-600 dark:text-blue-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " +2 vs previous month"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-amber-500/25 bg-gradient-to-br from-card via-card to-amber-500/10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400",
							children: "Pending Assessment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] font-medium text-muted-foreground",
							children: "Awaiting evaluation"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: assessmentPending
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-amber-600 dark:text-amber-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), " Schedule required"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-indigo-500/25 bg-gradient-to-br from-card via-card to-indigo-500/10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400",
							children: "Therapy Running"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] font-medium text-muted-foreground",
							children: "Active programmes"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						children: therapyOngoing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-indigo-600 dark:text-indigo-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" }), " +1 active this week"]
					})
				]
			})
		]
	});
}
var PAGE_SIZE = 8;
function withinRange(registeredAt, range) {
	if (range === "all") return true;
	const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
	const cutoff = Date.now() - days * 24 * 60 * 60 * 1e3;
	return new Date(registeredAt).getTime() >= cutoff;
}
function PatientManagementPage() {
	const { patients } = usePatientStore();
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_PATIENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_VISIBLE_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return patients.filter((patient) => {
			return (!query || [
				patient.name,
				patient.code,
				patient.phone,
				patient.guardian.phone,
				patient.guardian.name
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || patient.status === filters.status) && (filters.therapyType === "all" || patient.program.therapyType === filters.therapyType) && (filters.paymentType === "all" || patient.billing.paymentType === filters.paymentType) && (filters.gender === "all" || patient.gender === filters.gender) && (filters.branch === "all" || patient.branch === filters.branch) && withinRange(patient.registeredAt, filters.range);
		});
	}, [patients, filters]);
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
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Patient Management",
				description: "Manage all patients, registrations and therapy journeys in real time.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Patient Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "gap-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					className: "gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Register Patient"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Patient summary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientKpiCards, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Patients",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					visibleColumns,
					onToggleColumn: toggleColumn
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: UsersRound,
					title: "No Patients Found",
					description: "Start by registering your first patient. Registered patients appear here with therapy progress, packages and payment status.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Register Patient"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_PATIENT_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTable, {
					rows,
					visibleColumns
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterPatientDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen
			})
		]
	});
}
//#endregion
export { PatientManagementPage as component };
