import { At as Ellipsis, Tn as Archive, U as Printer, X as PencilLine, a as Wallet, i as Waves, kt as Eye, xt as History, zt as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { c as PATIENT_STATUS_TONE, l as PAYMENT_STATUS_TONE } from "./patient-data-BLExFXXL.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patient-table-BXY_8Q-W.js
var import_jsx_runtime = require_jsx_runtime();
var PATIENT_COLUMNS = [
	{
		key: "code",
		label: "Patient ID",
		hideable: false
	},
	{
		key: "photo",
		label: "Photo",
		hideable: true
	},
	{
		key: "name",
		label: "Patient Name",
		hideable: false
	},
	{
		key: "age",
		label: "Age",
		numeric: true,
		hideable: true
	},
	{
		key: "gender",
		label: "Gender",
		hideable: true
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
		key: "therapyType",
		label: "Therapy Type",
		hideable: true
	},
	{
		key: "package",
		label: "Current Package",
		hideable: true
	},
	{
		key: "paymentStatus",
		label: "Payment Status",
		hideable: true
	},
	{
		key: "status",
		label: "Patient Status",
		hideable: true
	},
	{
		key: "lastVisit",
		label: "Last Visit",
		hideable: true
	},
	{
		key: "nextSession",
		label: "Next Session",
		hideable: true
	}
];
var DEFAULT_VISIBLE_COLUMNS = PATIENT_COLUMNS.map((column) => column.key);
function PatientTable({ rows, visibleColumns }) {
	const columns = PATIENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/patients/patient-table.tsx:55:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/patients/patient-table.tsx:56:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/patients/patient-table.tsx:57:11",
					children: "Registered patients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:58:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:59:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.numeric && "text-right"),
							"data-tsd-source": "/src/components/patients/patient-table.tsx:61:17",
							children: column.key === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								"data-tsd-source": "/src/components/patients/patient-table.tsx:69:45",
								children: "Photo"
							}) : column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:72:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:77:11",
					children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:79:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: cn("px-5 py-3.5 text-sm", column.numeric && "text-right tabular-nums"),
							"data-tsd-source": "/src/components/patients/patient-table.tsx:84:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientCell, {
								column: column.key,
								patient,
								"data-tsd-source": "/src/components/patients/patient-table.tsx:91:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:94:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRowActions, {
								patient,
								"data-tsd-source": "/src/components/patients/patient-table.tsx:95:19"
							})
						})]
					}, patient.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/patients/patient-table.tsx:104:7",
		children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:106:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/patients/patient-table.tsx:107:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
					name: patient.name,
					"data-tsd-source": "/src/components/patients/patient-table.tsx:108:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/patients/patient-table.tsx:109:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:110:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/patients/patient-table.tsx:111:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/patients/$patientId",
									params: { patientId: patient.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/patients/patient-table.tsx:112:21",
									children: patient.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/patients/patient-table.tsx:119:21",
									children: patient.code
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRowActions, {
								patient,
								"data-tsd-source": "/src/components/patients/patient-table.tsx:123:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:126:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PATIENT_STATUS_TONE[patient.status],
								label: patient.status,
								"data-tsd-source": "/src/components/patients/patient-table.tsx:127:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
								label: patient.paymentStatus,
								"data-tsd-source": "/src/components/patients/patient-table.tsx:131:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:137:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Age / Gender",
									value: `${patient.age} yrs · ${patient.gender}`,
									"data-tsd-source": "/src/components/patients/patient-table.tsx:138:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Therapy",
									value: patient.program.therapyType,
									"data-tsd-source": "/src/components/patients/patient-table.tsx:139:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: patient.guardian.name,
									"data-tsd-source": "/src/components/patients/patient-table.tsx:140:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Phone",
									value: patient.guardian.phone,
									"data-tsd-source": "/src/components/patients/patient-table.tsx:141:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Last visit",
									value: formatDate(patient.lastVisit),
									"data-tsd-source": "/src/components/patients/patient-table.tsx:142:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next session",
									value: patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled",
									"data-tsd-source": "/src/components/patients/patient-table.tsx:143:19"
								})
							]
						})
					]
				})]
			})
		}, patient.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/patients/patient-table.tsx:159:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:160:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:161:7",
			children: value
		})]
	});
}
function PatientAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary ring-1 ring-inset ring-primary/15", className),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/patients/patient-table.tsx:174:5",
		children: initialsOf(name)
	});
}
function PatientCell({ column, patient }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:190:9",
			children: patient.code
		});
		case "photo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
			name: patient.name,
			"data-tsd-source": "/src/components/patients/patient-table.tsx:195:14"
		});
		case "name": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block min-w-[160px]",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:198:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/patients/$patientId",
				params: { patientId: patient.id },
				className: "font-medium text-foreground hover:underline",
				"data-tsd-source": "/src/components/patients/patient-table.tsx:199:11",
				children: patient.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/patients/patient-table.tsx:206:11",
				children: patient.branch
			})]
		});
		case "age": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-tsd-source": "/src/components/patients/patient-table.tsx:212:14",
			children: patient.age
		});
		case "gender": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:214:14",
			children: patient.gender
		});
		case "guardian": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block min-w-[150px]",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:217:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-foreground",
				"data-tsd-source": "/src/components/patients/patient-table.tsx:218:11",
				children: patient.guardian.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/patients/patient-table.tsx:219:11",
				children: patient.guardian.relation
			})]
		});
		case "phone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:226:9",
			children: patient.guardian.phone
		});
		case "therapyType": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:231:14",
			children: patient.program.therapyType
		});
		case "package": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block min-w-[170px] truncate text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:234:9",
			children: patient.billing.packageName
		});
		case "paymentStatus": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
			label: patient.paymentStatus,
			"data-tsd-source": "/src/components/patients/patient-table.tsx:240:9"
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PATIENT_STATUS_TONE[patient.status],
			label: patient.status,
			"data-tsd-source": "/src/components/patients/patient-table.tsx:247:9"
		});
		case "lastVisit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:251:9",
			children: formatDate(patient.lastVisit)
		});
		case "nextSession": return patient.nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:257:9",
			children: formatDate(patient.nextSession)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:261:9",
			children: "Not scheduled"
		});
		default: return null;
	}
}
function PatientRowActions({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/patients/patient-table.tsx:270:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/patients/patient-table.tsx:271:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "text-muted-foreground",
				"aria-label": `Actions for ${patient.name}`,
				"data-tsd-source": "/src/components/patients/patient-table.tsx:272:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/patients/patient-table.tsx:278:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/patients/patient-table.tsx:281:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/patients/patient-table.tsx:282:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/patients/$patientId",
						params: { patientId: patient.id },
						"data-tsd-source": "/src/components/patients/patient-table.tsx:283:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:284:13"
						}), "View Profile"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:288:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:289:11"
					}), "Edit Patient"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/patients/patient-table.tsx:292:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:293:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:294:11"
					}), "Schedule Assessment"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:297:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:298:11"
					}), "Schedule Therapy"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:301:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:302:11"
					}), "Collect Payment"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/patients/patient-table.tsx:305:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/patients/$patientId",
						params: { patientId: patient.id },
						search: { tab: "timeline" },
						"data-tsd-source": "/src/components/patients/patient-table.tsx:306:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/patient-table.tsx:311:13"
						}), "View Timeline"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/patients/patient-table.tsx:315:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:316:11"
					}), "Print Card"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/patients/patient-table.tsx:319:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: "text-danger focus:text-danger",
					"data-tsd-source": "/src/components/patients/patient-table.tsx:320:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/patients/patient-table.tsx:321:11"
					}), "Archive"]
				})
			]
		})]
	});
}
//#endregion
export { PatientTable as i, PATIENT_COLUMNS as n, PatientAvatar as r, DEFAULT_VISIBLE_COLUMNS as t };
