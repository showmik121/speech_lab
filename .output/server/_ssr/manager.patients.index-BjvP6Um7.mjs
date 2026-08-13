import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { En as Activity, Ft as Columns3, K as Plus, Lt as Clock, P as Search, T as Sparkles, Ut as CircleCheck, c as UsersRound, d as UserPlus, h as Upload, in as CalendarCheck, jt as Download, s as Users, yn as ArrowUpRight, z as RefreshCw, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { a as PATIENTS, d as THERAPY_TYPES, n as BRANCH_OPTIONS, o as PATIENT_DATE_RANGES, r as GENDERS, s as PATIENT_STATUSES, u as PAYMENT_TYPES } from "./patient-data-BLExFXXL.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { i as PatientTable, n as PATIENT_COLUMNS, t as DEFAULT_VISIBLE_COLUMNS } from "./patient-table-BXY_8Q-W.mjs";
import { t as RegisterPatientDialog } from "./register-patient-dialog-B_bs-cxp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients.index-BjvP6Um7.js
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
		"data-tsd-source": "/src/components/patients/patient-filters.tsx:68:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/patients/patient-filters.tsx:69:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[340px]",
				"data-tsd-source": "/src/components/patients/patient-filters.tsx:70:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:71:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search name, phone, patient ID or guardian…",
					"aria-label": "Search patients",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:75:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/patients/patient-filters.tsx:85:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/patients/patient-filters.tsx:86:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:87:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/patients/patient-filters.tsx:93:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:94:13"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/patients/patient-filters.tsx:97:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:98:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/patients/patient-filters.tsx:99:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/patients/patient-filters.tsx:100:17"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-52",
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:104:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/patients/patient-filters.tsx:105:15",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/patients/patient-filters.tsx:106:15" }),
								PATIENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/patients/patient-filters.tsx:108:17",
									children: column.label
								}, column.key))
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/patients/patient-filters.tsx:122:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Patient status",
					placeholder: "Status",
					width: "w-[170px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: PATIENT_STATUSES,
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:123:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Therapy type",
					placeholder: "Therapy",
					width: "w-[170px]",
					value: value.therapyType,
					onValueChange: (therapyType) => set({ therapyType }),
					allLabel: "All therapies",
					options: THERAPY_TYPES,
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:132:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Payment type",
					placeholder: "Payment",
					width: "w-[160px]",
					value: value.paymentType,
					onValueChange: (paymentType) => set({ paymentType }),
					allLabel: "All payment types",
					options: PAYMENT_TYPES,
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:141:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Gender",
					placeholder: "Gender",
					width: "w-[130px]",
					value: value.gender,
					onValueChange: (gender) => set({ gender }),
					allLabel: "All genders",
					options: GENDERS,
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:150:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:160:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by registration date",
						"data-tsd-source": "/src/components/patients/patient-filters.tsx:161:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date range",
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:162:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/patients/patient-filters.tsx:164:11",
						children: PATIENT_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: range.key,
							"data-tsd-source": "/src/components/patients/patient-filters.tsx:166:15",
							children: range.label
						}, range.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Branch",
					placeholder: "Branch",
					width: "w-[180px]",
					value: value.branch,
					onValueChange: (branch) => set({ branch }),
					allLabel: "All branches",
					options: BRANCH_OPTIONS,
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:173:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_PATIENT_FILTERS),
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:183:9",
					children: "Reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-[12px] text-muted-foreground xl:inline",
					"data-tsd-source": "/src/components/patients/patient-filters.tsx:192:9",
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
		"data-tsd-source": "/src/components/patients/patient-filters.tsx:218:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label.toLowerCase()}`,
			"data-tsd-source": "/src/components/patients/patient-filters.tsx:219:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/patients/patient-filters.tsx:220:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			"data-tsd-source": "/src/components/patients/patient-filters.tsx:222:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/patients/patient-filters.tsx:223:9",
				children: allLabel
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/patients/patient-filters.tsx:225:11",
				children: option
			}, option))]
		})]
	});
}
function PatientKpiCards() {
	const totalPatients = PATIENTS.length;
	const activePatients = PATIENTS.filter((p) => [
		"Active",
		"Therapy Running",
		"Follow-up Required"
	].includes(p.status)).length;
	const newThisMonth = PATIENTS.filter((p) => p.registeredAt >= "2026-07-01").length;
	const assessmentPending = PATIENTS.filter((p) => p.status === "Assessment Pending").length;
	const therapyOngoing = PATIENTS.filter((p) => p.status === "Therapy Running").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
		"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:25:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-purple-500/25 bg-gradient-to-br from-card via-card to-purple-500/10 shadow-card",
				"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:27:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:28:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:29:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:30:13",
								children: "Total Patients"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] font-medium text-muted-foreground",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:33:13",
								children: "Across all branches"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shadow-xs",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:35:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:36:13"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:39:9",
						children: totalPatients
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-purple-600 dark:text-purple-400",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:42:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:43:11"
						}), " +12% growth rate"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-emerald-500/25 bg-gradient-to-br from-card via-card to-emerald-500/10 shadow-card",
				"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:48:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:49:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:50:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:51:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:52:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
										"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:53:17"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500",
										"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:54:17"
									})]
								}), "Active Care"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] font-medium text-muted-foreground",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:58:13",
								children: "Currently in treatment"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-xs",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:60:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:61:13"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:64:9",
						children: activePatients
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-600 dark:text-emerald-400",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:67:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:68:11"
						}), " +4 added this week"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-blue-500/25 bg-gradient-to-br from-card via-card to-blue-500/10 shadow-card",
				"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:73:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:74:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:75:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:76:13",
								children: "New Patients"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] font-medium text-muted-foreground",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:79:13",
								children: "Registered this month"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shadow-xs",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:81:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:82:13"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:85:9",
						children: newThisMonth
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-blue-600 dark:text-blue-400",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:88:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:89:11"
						}), " +2 vs previous month"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-amber-500/25 bg-gradient-to-br from-card via-card to-amber-500/10 shadow-card",
				"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:94:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:95:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:96:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:97:13",
								children: "Pending Assessment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] font-medium text-muted-foreground",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:100:13",
								children: "Awaiting evaluation"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-xs",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:102:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:103:13"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:106:9",
						children: assessmentPending
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-amber-600 dark:text-amber-400",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:109:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:110:11"
						}), " Schedule required"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				interactive: true,
				className: "relative overflow-hidden p-5 border-indigo-500/25 bg-gradient-to-br from-card via-card to-indigo-500/10 shadow-card",
				"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:115:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:116:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:117:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:118:13",
								children: "Therapy Running"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] font-medium text-muted-foreground",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:121:13",
								children: "Active programmes"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-xs",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:123:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								className: "h-5 w-5",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:124:13"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[30px] font-bold leading-none tracking-tight tabular-nums text-foreground",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:127:9",
						children: therapyOngoing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-indigo-600 dark:text-indigo-400",
						"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:130:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-3.5 w-3.5",
							"data-tsd-source": "/src/components/patients/patient-kpi-cards.tsx:131:11"
						}), " +1 active this week"]
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
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_PATIENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_VISIBLE_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return PATIENTS.filter((patient) => {
			return (!query || [
				patient.name,
				patient.code,
				patient.phone,
				patient.guardian.phone,
				patient.guardian.name
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || patient.status === filters.status) && (filters.therapyType === "all" || patient.program.therapyType === filters.therapyType) && (filters.paymentType === "all" || patient.billing.paymentType === filters.paymentType) && (filters.gender === "all" || patient.gender === filters.gender) && (filters.branch === "all" || patient.branch === filters.branch) && withinRange(patient.registeredAt, filters.range);
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
		"data-tsd-source": "/src/routes/manager.patients.index.tsx:99:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Patient Management",
				description: "Manage all patients, registrations and therapy journeys.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Patient Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						disabled: true,
						title: "Import arrives with the data migration tool",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Import"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Register Patient"]
					})
				] }),
				"data-tsd-source": "/src/routes/manager.patients.index.tsx:100:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Patient summary",
				"data-tsd-source": "/src/routes/manager.patients.index.tsx:125:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientKpiCards, { "data-tsd-source": "/src/routes/manager.patients.index.tsx:126:9" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Patients",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				"data-tsd-source": "/src/routes/manager.patients.index.tsx:129:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					visibleColumns,
					onToggleColumn: toggleColumn,
					"data-tsd-source": "/src/routes/manager.patients.index.tsx:133:9"
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
					className: "rounded-none border-0 shadow-none",
					"data-tsd-source": "/src/routes/manager.patients.index.tsx:146:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTable, {
					rows,
					visibleColumns,
					"data-tsd-source": "/src/routes/manager.patients.index.tsx:165:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					"data-tsd-source": "/src/routes/manager.patients.index.tsx:166:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage,
						"data-tsd-source": "/src/routes/manager.patients.index.tsx:167:15"
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterPatientDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen,
				"data-tsd-source": "/src/routes/manager.patients.index.tsx:178:7"
			})
		]
	});
}
//#endregion
export { PatientManagementPage as component };
