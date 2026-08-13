import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $t as ChartColumn, At as Ellipsis, Dt as FileText, G as PowerOff, K as Plus, Lt as Clock, P as Search, X as PencilLine, Xt as Check, Yt as ChevronDown, ct as Mail, dt as LoaderCircle, gt as KeyRound, jt as Download, kt as Eye, m as UserCog, on as Building2, q as Phone, st as MapPin, vt as ImagePlus, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as BRANCH_STATUSES, c as DIVISIONS, l as MANAGERS, o as BRANCH_STATUS_TONE, r as BRANCH_KPIS, s as DATE_RANGES, t as BRANCHES } from "./branch-data-DT5AkdAt.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as initialsOf, i as formatNumber, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.branches.index-X5rHYBP4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HEADERS = [
	"Branch Code",
	"Branch Name",
	"Branch Manager",
	"Manager Key",
	"Phone",
	"City",
	"Patients",
	"Staff",
	"Monthly Revenue",
	"Status",
	"Created Date"
];
function BranchTable({ rows, expandedId, onToggleExpand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-auto",
		style: { maxHeight: "640px" },
		"data-tsd-source": "/src/components/branches/branch-table.tsx:64:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/branches/branch-table.tsx:65:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/branches/branch-table.tsx:66:9",
					children: "Organisation branches"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/branches/branch-table.tsx:67:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/branches/branch-table.tsx:68:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "sticky top-0 z-10 h-11 w-10 bg-muted/50 px-4 backdrop-blur",
								"data-tsd-source": "/src/components/branches/branch-table.tsx:69:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:70:15",
									children: "Expand"
								})
							}),
							HEADERS.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								scope: "col",
								className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", [
									"Patients",
									"Staff",
									"Monthly Revenue"
								].includes(header) && "text-right"),
								"data-tsd-source": "/src/components/branches/branch-table.tsx:73:15",
								children: header
							}, header)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
								"data-tsd-source": "/src/components/branches/branch-table.tsx:84:13",
								children: "Actions"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/branches/branch-table.tsx:89:9",
					children: rows.map((branch) => {
						const expanded = expandedId === branch.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							onClick: () => onToggleExpand(branch.id),
							"aria-expanded": expanded,
							className: cn("cursor-pointer border-border transition-enterprise hover:bg-surface-hover", expanded && "bg-surface-hover"),
							"data-tsd-source": "/src/components/branches/branch-table.tsx:94:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-4 py-3.5",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:102:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										className: cn("h-4 w-4 text-muted-foreground transition-enterprise", expanded && "rotate-180 text-foreground"),
										"aria-hidden": "true",
										"data-tsd-source": "/src/components/branches/branch-table.tsx:103:21"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:111:19",
									children: branch.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "px-5 py-3.5",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:114:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										"data-tsd-source": "/src/components/branches/branch-table.tsx:115:21",
										children: branch.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-[12.5px] text-muted-foreground",
										"data-tsd-source": "/src/components/branches/branch-table.tsx:116:21",
										children: [branch.division, " division"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:120:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2.5",
										"data-tsd-source": "/src/components/branches/branch-table.tsx:121:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary",
											"data-tsd-source": "/src/components/branches/branch-table.tsx:122:23",
											children: initialsOf(branch.manager.name)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											"data-tsd-source": "/src/components/branches/branch-table.tsx:125:23",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-sm text-foreground",
												"data-tsd-source": "/src/components/branches/branch-table.tsx:126:25",
												children: branch.manager.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-[12.5px] text-muted-foreground",
												"data-tsd-source": "/src/components/branches/branch-table.tsx:129:25",
												children: "Branch Manager"
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap px-5 py-3.5",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:135:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[12px] font-medium text-foreground",
										"data-tsd-source": "/src/components/branches/branch-table.tsx:136:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
											className: "h-3.5 w-3.5 text-muted-foreground",
											"aria-hidden": "true",
											"data-tsd-source": "/src/components/branches/branch-table.tsx:137:23"
										}), branch.manager.managerId]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap px-5 py-3.5 text-sm tabular-nums text-muted-foreground",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:141:19",
									children: branch.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5 text-sm",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:144:19",
									children: branch.city
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5 text-right text-sm tabular-nums",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:145:19",
									children: formatNumber(branch.patients)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5 text-right text-sm tabular-nums",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:148:19",
									children: branch.staff
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap px-5 py-3.5 text-right text-sm font-medium tabular-nums",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:151:19",
									children: formatTaka(branch.monthlyRevenue)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:154:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: BRANCH_STATUS_TONE[branch.status],
										label: branch.status,
										"data-tsd-source": "/src/components/branches/branch-table.tsx:155:21"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
									"data-tsd-source": "/src/components/branches/branch-table.tsx:160:19",
									children: formatDate(branch.createdAt)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "px-5 py-3.5 text-right",
									onClick: (event) => event.stopPropagation(),
									"data-tsd-source": "/src/components/branches/branch-table.tsx:163:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
										"data-tsd-source": "/src/components/branches/branch-table.tsx:167:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
											asChild: true,
											"data-tsd-source": "/src/components/branches/branch-table.tsx:168:23",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon-sm",
												className: "text-muted-foreground",
												"aria-label": `Actions for ${branch.name}`,
												"data-tsd-source": "/src/components/branches/branch-table.tsx:169:25",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
													className: "h-4 w-4",
													"data-tsd-source": "/src/components/branches/branch-table.tsx:175:27"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
											align: "end",
											className: "w-48",
											"data-tsd-source": "/src/components/branches/branch-table.tsx:178:23",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													"data-tsd-source": "/src/components/branches/branch-table.tsx:179:25",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/super-admin/branches/$branchId",
														params: { branchId: branch.id },
														"data-tsd-source": "/src/components/branches/branch-table.tsx:180:27",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
															className: "h-4 w-4",
															"aria-hidden": "true",
															"data-tsd-source": "/src/components/branches/branch-table.tsx:184:29"
														}), "View Details"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													"data-tsd-source": "/src/components/branches/branch-table.tsx:188:25",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
														className: "h-4 w-4",
														"aria-hidden": "true",
														"data-tsd-source": "/src/components/branches/branch-table.tsx:189:27"
													}), "Edit Branch"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													"data-tsd-source": "/src/components/branches/branch-table.tsx:192:25",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, {
														className: "h-4 w-4",
														"aria-hidden": "true",
														"data-tsd-source": "/src/components/branches/branch-table.tsx:193:27"
													}), "Assign Manager"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													"data-tsd-source": "/src/components/branches/branch-table.tsx:196:25",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
														className: "h-4 w-4",
														"aria-hidden": "true",
														"data-tsd-source": "/src/components/branches/branch-table.tsx:197:27"
													}), "View Reports"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													"data-tsd-source": "/src/components/branches/branch-table.tsx:200:25",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
														className: "h-4 w-4",
														"aria-hidden": "true",
														"data-tsd-source": "/src/components/branches/branch-table.tsx:201:27"
													}), "View Performance"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/branches/branch-table.tsx:204:25" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													className: "text-danger focus:text-danger",
													"data-tsd-source": "/src/components/branches/branch-table.tsx:205:25",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerOff, {
														className: "h-4 w-4",
														"aria-hidden": "true",
														"data-tsd-source": "/src/components/branches/branch-table.tsx:206:27"
													}), "Deactivate"]
												})
											]
										})]
									})
								})
							]
						}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							className: "border-border bg-muted/30 hover:bg-muted/30",
							"data-tsd-source": "/src/components/branches/branch-table.tsx:215:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								colSpan: HEADERS.length + 2,
								className: "p-0",
								"data-tsd-source": "/src/components/branches/branch-table.tsx:216:21",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchDetailPanel, {
									branch,
									"data-tsd-source": "/src/components/branches/branch-table.tsx:217:23"
								})
							})
						}) : null] }, branch.id);
					})
				})
			]
		})
	});
}
function BranchDetailPanel({ branch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 px-5 py-6 lg:grid-cols-3",
		"data-tsd-source": "/src/components/branches/branch-table.tsx:232:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				"data-tsd-source": "/src/components/branches/branch-table.tsx:233:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
						"data-tsd-source": "/src/components/branches/branch-table.tsx:234:9",
						children: "Branch information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: MapPin,
						label: "Address",
						value: branch.address,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:237:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Mail,
						label: "Email",
						value: branch.email,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:238:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Clock,
						label: "Working hours",
						value: branch.workingHours,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:239:9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				"data-tsd-source": "/src/components/branches/branch-table.tsx:242:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
					"data-tsd-source": "/src/components/branches/branch-table.tsx:243:9",
					children: "Performance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					"data-tsd-source": "/src/components/branches/branch-table.tsx:246:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Monthly revenue",
							value: formatTaka(branch.monthlyRevenue),
							"data-tsd-source": "/src/components/branches/branch-table.tsx:247:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Today's collection",
							value: formatTaka(branch.todaysCollection),
							"data-tsd-source": "/src/components/branches/branch-table.tsx:248:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Patients",
							value: formatNumber(branch.patients),
							"data-tsd-source": "/src/components/branches/branch-table.tsx:249:11"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Sessions today",
							value: String(branch.sessions),
							"data-tsd-source": "/src/components/branches/branch-table.tsx:250:11"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				"data-tsd-source": "/src/components/branches/branch-table.tsx:254:7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
						"data-tsd-source": "/src/components/branches/branch-table.tsx:255:9",
						children: "Manager information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3.5",
						"data-tsd-source": "/src/components/branches/branch-table.tsx:258:9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
							"data-tsd-source": "/src/components/branches/branch-table.tsx:259:11",
							children: initialsOf(branch.manager.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							"data-tsd-source": "/src/components/branches/branch-table.tsx:262:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								"data-tsd-source": "/src/components/branches/branch-table.tsx:263:13",
								children: branch.manager.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/components/branches/branch-table.tsx:264:13",
								children: ["Manager since ", formatDate(branch.manager.since)]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Phone,
						label: "Phone",
						value: branch.manager.phone,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:269:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Mail,
						label: "Email",
						value: branch.manager.email,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:270:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: KeyRound,
						label: "Manager unique key",
						value: branch.manager.managerId,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:271:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						"data-tsd-source": "/src/components/branches/branch-table.tsx:272:9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/super-admin/branches/$branchId",
							params: { branchId: branch.id },
							"data-tsd-source": "/src/components/branches/branch-table.tsx:273:11",
							children: "Open branch profile"
						})
					})
				]
			})
		]
	});
}
function DetailLine({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		"data-tsd-source": "/src/components/branches/branch-table.tsx:292:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true",
			"data-tsd-source": "/src/components/branches/branch-table.tsx:293:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/branches/branch-table.tsx:294:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/branches/branch-table.tsx:295:9",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground",
				"data-tsd-source": "/src/components/branches/branch-table.tsx:296:9",
				children: value
			})]
		})]
	});
}
function MiniStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-3.5",
		"data-tsd-source": "/src/components/branches/branch-table.tsx:304:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12px] text-muted-foreground",
			"data-tsd-source": "/src/components/branches/branch-table.tsx:305:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm font-semibold tabular-nums text-foreground",
			"data-tsd-source": "/src/components/branches/branch-table.tsx:306:7",
			children: value
		})]
	});
}
var DEFAULT_BRANCH_FILTERS = {
	search: "",
	status: "all",
	division: "all",
	manager: "all",
	range: "all"
};
function BranchFilters({ value, onChange, onRefresh, isRefreshing = false }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 border-b border-border px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between sm:px-5",
		"data-tsd-source": "/src/components/branches/branch-filters.tsx:48:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/branches/branch-filters.tsx:49:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full min-w-[220px] flex-1 sm:w-auto sm:max-w-[260px] sm:basis-[240px]",
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:50:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:51:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "search",
						value: value.search,
						onChange: (event) => set({ search: event.target.value }),
						placeholder: "Search branch, code, city…",
						"aria-label": "Search branches",
						className: "h-9 bg-muted/40 pl-9 shadow-none",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:55:11"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.status,
					onValueChange: (status) => set({ status }),
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:65:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[140px]",
						"aria-label": "Filter by status",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:66:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Status",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:67:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:69:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:70:13",
							children: "All statuses"
						}), BRANCH_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: status,
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:72:15",
							children: status
						}, status))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.division,
					onValueChange: (division) => set({ division }),
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:79:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[150px]",
						"aria-label": "Filter by division",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:80:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Division",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:81:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:83:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:84:13",
							children: "All divisions"
						}), DIVISIONS.map((division) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: division,
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:86:15",
							children: division
						}, division))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.manager,
					onValueChange: (manager) => set({ manager }),
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:93:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[170px]",
						"aria-label": "Filter by manager",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:94:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Manager",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:95:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:97:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:98:13",
							children: "All managers"
						}), MANAGERS.map((manager) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: manager,
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:100:15",
							children: manager
						}, manager))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:107:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by created date",
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:108:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date range",
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:109:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/branches/branch-filters.tsx:111:11",
						children: DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: range.key,
							"data-tsd-source": "/src/components/branches/branch-filters.tsx:113:15",
							children: range.label
						}, range.key))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2.5",
			"data-tsd-source": "/src/components/branches/branch-filters.tsx:121:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: onRefresh,
				disabled: isRefreshing,
				"data-tsd-source": "/src/components/branches/branch-filters.tsx:122:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
					className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:123:11"
				}), "Refresh"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				"data-tsd-source": "/src/components/branches/branch-filters.tsx:129:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					className: "h-4 w-4",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/branches/branch-filters.tsx:130:11"
				}), "Export"]
			})]
		})]
	});
}
var STEPS = [
	{
		id: 1,
		title: "Basic Information",
		description: "Location and contact details"
	},
	{
		id: 2,
		title: "Branch Manager",
		description: "Primary point of contact"
	},
	{
		id: 3,
		title: "Branch Settings",
		description: "Hours, currency and status"
	}
];
var DISTRICTS = [
	"Dhaka",
	"Gazipur",
	"Narayanganj",
	"Chattogram",
	"Cumilla",
	"Sylhet",
	"Rajshahi",
	"Khulna",
	"Barishal",
	"Rangpur"
];
/** UI-only multi-step branch creation flow. No data is persisted. */
function CreateBranchDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:68:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:75:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:76:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:77:11",
						children: "Create branch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:78:11",
						children: "Set up a new organisation branch in three short steps."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:83:9",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:87:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:88:17",
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3.5 w-3.5",
										"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:97:39"
									}) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 sm:block",
									"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:99:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:100:19",
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:110:19"
								}) : null
							]
						}, item.id);
					})
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBasic, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:117:23" }) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepManager, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:117:52" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSettings, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:117:70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:119:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:120:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:123:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:125:15",
							children: "Back"
						}) : null, step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:130:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:132:15",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:134:19"
							}) : null, "Create branch"]
						})]
					})]
				})
			]
		})
	});
}
function StepBasic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:148:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-name",
				label: "Branch name",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:149:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-name",
					placeholder: "e.g. Mirpur Branch",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:150:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-code",
				label: "Branch code",
				hint: "Auto-generated, editable",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:152:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-code",
					defaultValue: "BR-DHK-009",
					readOnly: true,
					className: "font-mono",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:153:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-phone",
				label: "Phone",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:155:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-phone",
					placeholder: "+880 2-XXXXXXX",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:156:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-email",
				label: "Email",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:158:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-email",
					type: "email",
					placeholder: "branch@speecherp.com.bd",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:159:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-division",
				label: "Division",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:161:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:162:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "branch-division",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:163:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select division",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:164:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:166:11",
						children: DIVISIONS.map((division) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: division,
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:168:15",
							children: division
						}, division))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-district",
				label: "District",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:175:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:176:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "branch-district",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:177:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select district",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:178:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:180:11",
						children: DISTRICTS.map((district) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: district,
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:182:15",
							children: district
						}, district))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-address",
				label: "Address",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:189:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "branch-address",
					rows: 2,
					placeholder: "House, road, area, city, postcode",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:190:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-map",
				label: "Google Map link",
				hint: "Optional",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:192:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-map",
					placeholder: "https://maps.google.com/…",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:193:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-logo",
				label: "Branch logo",
				hint: "PNG or SVG, up to 2 MB",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:195:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[38px] items-center gap-2.5 rounded-lg border border-dashed border-border bg-muted/30 px-3 text-[13px] text-muted-foreground",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:196:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:197:11"
					}), "Upload placeholder"]
				})
			})
		]
	});
}
function StepManager() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:207:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-name",
				label: "Manager name",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:208:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-name",
					placeholder: "e.g. Rezaul Haque",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:209:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-phone",
				label: "Phone",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:211:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-phone",
					placeholder: "+880 17XX-XXXXXX",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:212:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-email",
				label: "Email",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:214:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-email",
					type: "email",
					placeholder: "manager@speecherp.com.bd",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:215:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-password",
				label: "Temporary password",
				hint: "Manager is prompted to change it on first sign-in",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:217:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-password",
					type: "password",
					placeholder: "••••••••",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:223:9"
				})
			})
		]
	});
}
function StepSettings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:231:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "opening-time",
				label: "Opening time",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:232:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "opening-time",
					type: "time",
					defaultValue: "09:00",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:233:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "closing-time",
				label: "Closing time",
				required: true,
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:235:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "closing-time",
					type: "time",
					defaultValue: "20:00",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:236:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "currency",
				label: "Currency",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:238:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "BDT",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:239:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "currency",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:240:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:241:13" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:243:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "BDT",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:244:13",
							children: "BDT — Bangladeshi Taka (৳)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "USD",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:245:13",
							children: "USD — US Dollar"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "timezone",
				label: "Timezone",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:249:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "Asia/Dhaka",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:250:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "timezone",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:251:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:252:13" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:254:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Asia/Dhaka",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:255:13",
							children: "Asia/Dhaka (GMT+6)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Asia/Kolkata",
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:256:13",
							children: "Asia/Kolkata (GMT+5:30)"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-status",
				label: "Status",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:260:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "Active",
					"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:261:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "branch-status",
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:262:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { "data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:263:13" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:265:11",
						children: BRANCH_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: status,
							"data-tsd-source": "/src/components/branches/create-branch-dialog.tsx:267:15",
							children: status
						}, status))
					})]
				})
			})
		]
	});
}
var PAGE_SIZE = 6;
function withinRange(createdAt, range) {
	if (range === "all") return true;
	const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
	const cutoff = Date.now() - days * 24 * 60 * 60 * 1e3;
	return new Date(createdAt).getTime() >= cutoff;
}
function BranchManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_BRANCH_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return BRANCHES.filter((branch) => {
			return (!query || [
				branch.name,
				branch.code,
				branch.city,
				branch.manager.name,
				branch.division
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || branch.status === filters.status) && (filters.division === "all" || branch.division === filters.division) && (filters.manager === "all" || branch.manager.name === filters.manager) && withinRange(branch.createdAt, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:85:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Branch Management",
				description: "Manage all organization branches from one place.",
				breadcrumbs: [{
					label: "Super Admin",
					to: "/super-admin"
				}, { label: "Branch Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Branch"]
				})] }),
				"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:86:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Branch summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
				"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:107:7",
				children: BRANCH_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:109:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branches",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:113:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:117:9"
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Building2,
					title: "No branches created yet",
					description: "Branches you create will appear here with live performance, staffing and revenue insights across the organisation.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Create First Branch"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_BRANCH_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none",
					"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:128:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchTable, {
					rows,
					expandedId,
					onToggleExpand: (id) => setExpandedId(expandedId === id ? null : id),
					"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:147:13"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:152:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage,
						"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:153:15"
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateBranchDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen,
				"data-tsd-source": "/src/routes/super-admin.branches.index.tsx:164:7"
			})
		]
	});
}
//#endregion
export { BranchManagementPage as component };
