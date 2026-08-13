import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { At as Ellipsis, Ft as Columns3, J as PhoneCall, K as Plus, P as Search, Ut as CircleCheck, X as PencilLine, _ as TriangleAlert, et as PackageCheck, f as UserRoundCheck, jt as Download, kt as Eye, p as UserMinus, pn as BellRing, rn as CalendarClock, u as UserRound, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as FOLLOW_UP_KPIS, c as FOLLOW_UP_REASONS, d as FOLLOW_UP_TODAY_ISO, f as RETENTION_STATS, i as FOLLOW_UP_DATE_RANGES, l as FOLLOW_UP_STATUSES, m as TODAY_REMINDERS, n as FOLLOW_UPS, o as FOLLOW_UP_PRIORITIES, r as FOLLOW_UP_BRANCHES, s as FOLLOW_UP_PRIORITY_TONE, u as FOLLOW_UP_STATUS_TONE } from "./follow-up-data-ocWJfEAb.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { a as DropdownMenuLabel, i as DropdownMenuItem, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as WidgetCard } from "./widget-card-CD1uGIBd.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as KpiCard } from "./kpi-card-CrvhNLUY.mjs";
import { t as TablePagination } from "./table-pagination-BU-nMXgd.mjs";
import { t as NewFollowUpDialog } from "./new-follow-up-dialog-Bq6nK-c9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up.index-DOtb7aAK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOLLOW_UP_COLUMNS = [
	{
		key: "code",
		label: "Follow-up ID",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "guardian",
		label: "Guardian",
		hideable: true
	},
	{
		key: "phone",
		label: "Phone",
		hideable: true
	},
	{
		key: "lastVisit",
		label: "Last Visit",
		hideable: true
	},
	{
		key: "reason",
		label: "Reason",
		hideable: true
	},
	{
		key: "assignedDate",
		label: "Assigned Date",
		hideable: true
	},
	{
		key: "nextFollowUp",
		label: "Next Follow-up",
		hideable: true
	},
	{
		key: "priority",
		label: "Priority",
		hideable: false
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_FOLLOW_UP_COLUMNS = FOLLOW_UP_COLUMNS.map((column) => column.key);
function FollowUpAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:42:5",
		children: initialsOf(name)
	});
}
function PriorityIndicator({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2",
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:56:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("h-2 w-2 shrink-0 rounded-full", item.priority === "High" && "bg-danger", item.priority === "Medium" && "bg-warning", item.priority === "Low" && "bg-muted-foreground/50"),
			"aria-hidden": "true",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:57:7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: FOLLOW_UP_PRIORITY_TONE[item.priority],
			label: item.priority,
			dot: false,
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:66:7"
		})]
	});
}
function FollowUpRowActions({ item, onComplete, onReschedule, onEdit, onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:89:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:90:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": `Actions for ${item.code}`,
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:91:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:97:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:100:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:101:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/follow-up/$followUpId",
						params: { followUpId: item.id },
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:102:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:103:13"
						}), "View"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onEdit?.(item),
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:107:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:108:11"
					}), "Edit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onComplete?.(item),
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:111:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:112:11"
					}), "Complete"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onReschedule?.(item),
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:115:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:116:11"
					}), "Reschedule"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:119:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => onCall?.(item),
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:120:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:121:11"
					}), "Call patient"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:124:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/patients/$patientId",
						params: { patientId: item.patientId },
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:125:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:126:13"
						}), "View patient profile"]
					})
				})
			]
		})]
	});
}
function FollowUpTable({ rows, visibleColumns, onComplete, onReschedule, onEdit, onCall }) {
	const columns = FOLLOW_UP_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	const actions = {
		onComplete,
		onReschedule,
		onEdit,
		onCall
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:156:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:157:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:158:11",
					children: "Patient follow-ups"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:159:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:160:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:162:17",
							children: column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:173:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:178:11",
					children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:180:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:185:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpCell, {
								column: column.key,
								item,
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:192:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:195:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpRowActions, {
								item,
								...actions,
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:196:19"
							})
						})]
					}, item.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:205:7",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:207:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:208:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpAvatar, {
					name: item.patientName,
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:209:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:210:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:211:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:212:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/follow-up/$followUpId",
									params: { followUpId: item.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:213:21",
									children: item.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:220:21",
									children: [
										item.code,
										" · ",
										item.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpRowActions, {
								item,
								...actions,
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:224:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:227:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_STATUS_TONE[item.status],
								label: item.status,
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:228:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_PRIORITY_TONE[item.priority],
								label: `${item.priority} priority`,
								dot: false,
								"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:232:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:239:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: item.guardianName,
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:240:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Phone",
									value: item.guardianPhone,
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:241:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Reason",
									value: item.reason,
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:242:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Last visit",
									value: formatDate(item.lastVisit),
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:243:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Assigned",
									value: formatDate(item.assignedDate),
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:244:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next follow-up",
									value: formatDate(item.nextFollowUp),
									"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:245:19"
								})
							]
						})
					]
				})]
			})
		}, item.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:258:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:259:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:260:7",
			children: value
		})]
	});
}
function FollowUpCell({ column, item }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/follow-up/$followUpId",
			params: { followUpId: item.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:269:9",
			children: item.code
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:279:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpAvatar, {
				name: item.patientName,
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:280:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:281:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: item.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:282:13",
					children: item.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:289:13",
					children: [
						item.patientCode,
						" · ",
						item.patientAge,
						" yrs"
					]
				})]
			})]
		});
		case "guardian": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:297:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:298:11",
				children: item.guardianName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:299:11",
				children: item.guardianRelation
			})]
		});
		case "phone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:304:9",
			children: item.guardianPhone
		});
		case "lastVisit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:310:9",
			children: formatDate(item.lastVisit)
		});
		case "reason": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:316:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:317:11",
				children: item.reason
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:318:11",
				children: item.assignedTo
			})]
		});
		case "assignedDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:323:9",
			children: formatDate(item.assignedDate)
		});
		case "nextFollowUp": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium text-foreground",
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:329:9",
			children: formatDate(item.nextFollowUp)
		});
		case "priority": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityIndicator, {
			item,
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:334:14"
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: FOLLOW_UP_STATUS_TONE[item.status],
			label: item.status,
			"data-tsd-source": "/src/components/follow-up/follow-up-table.tsx:336:14"
		});
		default: return null;
	}
}
var ICONS = {
	"at-risk": TriangleAlert,
	returning: UserRoundCheck,
	renewed: PackageCheck,
	inactive: UserMinus
};
var TONE = {
	success: {
		icon: "bg-success/12 text-success",
		ring: "ring-success/20",
		value: "text-success"
	},
	warning: {
		icon: "bg-warning/15 text-warning",
		ring: "ring-warning/20",
		value: "text-warning"
	},
	danger: {
		icon: "bg-danger/12 text-danger",
		ring: "ring-danger/20",
		value: "text-danger"
	},
	info: {
		icon: "bg-primary/10 text-primary",
		ring: "ring-primary/20",
		value: "text-primary"
	},
	neutral: {
		icon: "bg-muted text-muted-foreground",
		ring: "ring-border",
		value: "text-foreground"
	}
};
function RetentionCard({ stat }) {
	const Icon = ICONS[stat.id] ?? UserRoundCheck;
	const tone = TONE[stat.tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("relative overflow-hidden p-5 ring-1", tone.ring),
		"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:28:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent",
				"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:29:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:33:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:34:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-muted-foreground",
						"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:35:11",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2.5 text-[28px] font-semibold leading-none tracking-tight tabular-nums", tone.value),
						"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:36:11",
						children: stat.value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", tone.icon),
					"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:45:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:46:11"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-3 text-[12.5px] leading-relaxed text-muted-foreground",
				"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:49:7",
				children: stat.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-1 text-[12.5px] font-medium text-foreground",
				"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:52:7",
				children: stat.trend
			})
		]
	});
}
function RetentionCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:59:5",
		children: RETENTION_STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetentionCard, {
			stat,
			"data-tsd-source": "/src/components/follow-up/retention-cards.tsx:61:9"
		}, stat.id))
	});
}
function ReminderPanel({ onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's reminders",
		description: "Scheduled calls and reviews for 31 July 2026",
		icon: BellRing,
		menuItems: [
			"Refresh reminders",
			"Export list",
			"Open call queue"
		],
		contentClassName: "pt-1",
		"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:15:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "divide-y divide-border",
			"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:22:7",
			children: TODAY_REMINDERS.map((reminder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3 py-3.5 first:pt-0 last:pb-0",
				"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:24:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-0.5 shrink-0 rounded-md border px-2 py-1 text-[11.5px] font-semibold tabular-nums", reminder.priority === "High" ? "border-danger/40 bg-danger/10 text-danger" : reminder.priority === "Medium" ? "border-warning/40 bg-warning/12 text-warning" : "border-border bg-muted/60 text-muted-foreground"),
						"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:25:13",
						children: reminder.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:37:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:38:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/manager/follow-up/$followUpId",
								params: { followUpId: reminder.followUpId },
								className: "truncate text-sm font-medium text-foreground hover:underline",
								"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:39:17",
								children: reminder.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_PRIORITY_TONE[reminder.priority],
								label: reminder.priority,
								dot: false,
								"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:46:17"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12.5px] leading-relaxed text-muted-foreground",
							"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:52:15",
							children: reminder.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "shrink-0",
						onClick: () => onCall?.(reminder),
						"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:56:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/follow-up/reminder-panel.tsx:62:15"
						}), "Call"]
					})
				]
			}, reminder.id))
		})
	});
}
var DEFAULT_FOLLOW_UP_FILTERS = {
	search: "",
	priority: "all",
	status: "all",
	reason: "all",
	range: "all",
	branch: "all"
};
function FollowUpFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:67:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:68:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[420px]",
				"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:69:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:70:11"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search patient name, patient ID or guardian phone…",
					"aria-label": "Search follow-ups",
					className: "h-9 bg-muted/40 pl-9 shadow-none",
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:74:11"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:84:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:85:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:86:13"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:92:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:93:13"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:97:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:98:15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:99:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:100:19"
								}), "Columns"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:104:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
									"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:105:17",
									children: "Visible columns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:106:17" }),
								FOLLOW_UP_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
									checked: visibleColumns.includes(column.key),
									onCheckedChange: () => onToggleColumn(column.key),
									onSelect: (event) => event.preventDefault(),
									"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:108:19",
									children: column.label
								}, column.key))
							]
						})]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:123:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "priority",
					placeholder: "Priority",
					width: "w-[150px]",
					value: value.priority,
					onChange: (next) => set({ priority: next }),
					options: FOLLOW_UP_PRIORITIES,
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:124:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: FOLLOW_UP_STATUSES,
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:132:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "reason",
					placeholder: "Reason",
					width: "w-[190px]",
					value: value.reason,
					onChange: (next) => set({ reason: next }),
					options: FOLLOW_UP_REASONS,
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:140:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:148:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by date range",
						"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:149:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Date range",
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:150:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:152:11",
						children: FOLLOW_UP_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:154:15",
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[190px]",
					value: value.branch,
					onChange: (next) => set({ branch: next }),
					options: FOLLOW_UP_BRANCHES,
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:160:9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_FOLLOW_UP_FILTERS),
					"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:169:9",
					children: "Clear"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange: onChange,
		"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:198:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:199:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
				placeholder,
				"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:200:9"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:202:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:203:9",
				children: [
					"All ",
					label,
					"s"
				]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				"data-tsd-source": "/src/components/follow-up/follow-up-filters.tsx:205:11",
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(FOLLOW_UP_TODAY_ISO);
var DAY = 864e5;
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	if (range === "tomorrow") return value.toDateString() === new Date(TODAY.getTime() + DAY).toDateString();
	if (range === "overdue") return value.getTime() < TODAY.getTime();
	return value.getTime() >= TODAY.getTime() && value.getTime() <= TODAY.getTime() + 7 * DAY;
}
function FollowUpPage() {
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [presetPatientId, setPresetPatientId] = (0, import_react.useState)();
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_FOLLOW_UP_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_FOLLOW_UP_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return FOLLOW_UPS.filter((item) => {
			return (!query || [
				item.patientName,
				item.patientCode,
				item.code,
				item.guardianName,
				item.guardianPhone
			].join(" ").toLowerCase().includes(query)) && (filters.priority === "all" || item.priority === filters.priority) && (filters.status === "all" || item.status === filters.status) && (filters.reason === "all" || item.reason === filters.reason) && (filters.branch === "all" || item.branch === filters.branch) && withinRange(item.nextFollowUp, filters.range);
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
	const openDialog = (patientId) => {
		setPresetPatientId(patientId);
		setDialogOpen(true);
	};
	const scheduleButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => openDialog(),
		"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:111:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true",
			"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:112:7"
		}), "Schedule Follow-up"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:118:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Follow-up Management",
				description: "Track patient follow-ups, reminders and communication.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Follow-up Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => openDialog(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "New Follow-up"]
				})] }),
				"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:119:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Follow-up summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:140:7",
				children: FOLLOW_UP_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					kpi,
					"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:145:11"
				}, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Patient retention",
				className: "space-y-4",
				"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:149:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:150:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[15px] font-semibold tracking-tight text-foreground",
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:151:11",
						children: "Patient retention"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:154:11",
						children: "Rolling 90-day retention signals for this branch."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetentionCards, { "data-tsd-source": "/src/routes/manager.follow-up.index.tsx:158:9" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Follow-up queue",
				className: "grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]",
				"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:161:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
					"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:165:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpFilters, {
						value: filters,
						onChange: (next) => {
							setFilters(next);
							setPage(1);
						},
						onRefresh: refresh,
						isRefreshing: refreshing,
						visibleColumns,
						onToggleColumn: toggleColumn,
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:166:11"
					}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: PhoneCall,
						title: "No Follow-ups Scheduled",
						description: "Create your first follow-up reminder.",
						action: scheduleButton,
						secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setFilters(DEFAULT_FOLLOW_UP_FILTERS),
							children: "Reset filters"
						}),
						className: "rounded-none border-0 shadow-none",
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:179:13"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpTable, {
						rows,
						visibleColumns,
						onEdit: (item) => openDialog(item.patientId),
						onComplete: (item) => openDialog(item.patientId),
						onReschedule: (item) => openDialog(item.patientId),
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:193:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border px-4 py-3.5 sm:px-5",
						"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:200:15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
							page: currentPage,
							pageSize: PAGE_SIZE,
							total: filtered.length,
							onPageChange: setPage,
							"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:201:17"
						})
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReminderPanel, {
					onCall: (reminder) => openDialog(reminder.patientId),
					"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:212:9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewFollowUpDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				presetPatientId,
				"data-tsd-source": "/src/routes/manager.follow-up.index.tsx:215:7"
			})
		]
	});
}
//#endregion
export { FollowUpPage as component };
