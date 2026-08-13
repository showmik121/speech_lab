import { At as Ellipsis, U as Printer, Ut as CircleCheck, X as PencilLine, kt as Eye, q as Phone, rn as CalendarClock, st as MapPin } from "../_libs/lucide-react.mjs";
import { S as VISIT_STATUS_TONE, b as VISIT_PRIORITY_TONE, c as OUTDOOR_PATIENT_STATUS_TONE, h as UPCOMING_VISITS, m as TODAYS_VISITS, p as THERAPIST_STATUS_TONE, t as AREA_COVERAGE, u as OUTDOOR_THERAPISTS, v as VISIT_OUTCOME_TONE } from "./outdoor-data-ClUJqde_.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
import { r as PatientAvatar } from "./patient-table-BXY_8Q-W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/outdoor-widgets-DRurj8EB.js
var import_jsx_runtime = require_jsx_runtime();
var HEAD_CLASS = "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";
function VisitRowActions({ visit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:43:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:44:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": `Actions for ${visit.visitId}`,
				"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:45:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:51:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:54:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:55:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/outdoor/$visitId",
						params: { visitId: visit.id },
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:56:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:57:13"
						}), "View"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:61:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:62:11"
					}), "Edit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:65:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:66:11"
					}), "Reschedule"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:69:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:70:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:71:11"
					}), "Complete Visit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:74:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:75:11"
					}), "Print Visit Sheet"]
				})
			]
		})]
	});
}
var VISIT_HEADS = [
	"Visit ID",
	"Visit Date",
	"Visit Time",
	"Patient",
	"Guardian",
	"Therapist",
	"Visit Type",
	"Location",
	"Status"
];
function OutdoorVisitTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:100:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:101:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:102:11",
					children: "Outdoor therapy visits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:103:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:104:13",
						children: [VISIT_HEADS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: HEAD_CLASS,
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:106:17",
							children: label
						}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: cn(HEAD_CLASS, "text-right"),
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:110:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:113:11",
					children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:115:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:119:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/outdoor/$visitId",
									params: { visitId: visit.id },
									className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:120:19",
									children: visit.visitId
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:128:17",
								children: formatDate(visit.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:131:17",
								children: [visit.time, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-[12px]",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:133:19",
									children: ["· ", visit.duration]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:135:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-2.5",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:136:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
										name: visit.patientName,
										"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:137:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:138:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium text-foreground",
											"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:139:23",
											children: visit.patientName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-mono text-[12px] text-muted-foreground",
											"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:142:23",
											children: visit.patientCode
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:148:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:149:19",
									children: visit.guardian
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:150:19",
									children: [
										visit.guardianRelation,
										" · ",
										visit.guardianPhone
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:154:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:155:19",
									children: visit.therapistName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:156:19",
									children: visit.supportStaff
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:160:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.type,
									tone: "info",
									dot: false,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:161:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:163:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[200px] truncate text-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:164:19",
									children: visit.area
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "max-w-[200px] truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:165:19",
									children: [
										visit.district,
										", ",
										visit.division
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:169:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.status,
									tone: VISIT_STATUS_TONE[visit.status],
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:170:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-right",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:172:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitRowActions, {
									visit,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:173:19"
								})
							})
						]
					}, visit.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:181:7",
		children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:183:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:184:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
					name: visit.patientName,
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:185:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:186:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:187:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:188:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/outdoor/$visitId",
									params: { visitId: visit.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:189:21",
									children: visit.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:196:21",
									children: visit.visitId
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitRowActions, {
								visit,
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:200:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:202:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.status,
									tone: VISIT_STATUS_TONE[visit.status],
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:203:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.type,
									tone: "info",
									dot: false,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:204:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.priority,
									tone: VISIT_PRIORITY_TONE[visit.priority],
									dot: false,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:205:19"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:211:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date",
									value: `${formatDate(visit.date)} · ${visit.time}`,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:212:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Therapist",
									value: visit.therapistName,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:213:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Guardian",
									value: visit.guardian,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:214:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Location",
									value: `${visit.area}, ${visit.district}`,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:215:19"
								})
							]
						})
					]
				})]
			})
		}, visit.id))
	})] });
}
var PATIENT_HEADS = [
	"Patient ID",
	"Patient Name",
	"Guardian",
	"Phone",
	"Last Outdoor Visit",
	"Next Visit",
	"Therapy Program",
	"Status"
];
function OutdoorPatientTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:242:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:243:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:244:11",
					children: "Outdoor patients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:245:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:246:13",
						children: PATIENT_HEADS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: HEAD_CLASS,
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:248:17",
							children: label
						}, label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:254:11",
					children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:256:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:260:17",
								children: patient.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:263:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-2.5",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:264:19",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
										name: patient.name,
										"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:265:21"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:266:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium text-foreground",
											"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:267:23",
											children: patient.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-[12px] text-muted-foreground",
											"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:268:23",
											children: [
												patient.age,
												" yrs · ",
												patient.diagnosis
											]
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:274:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:275:19",
									children: patient.guardian
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:276:19",
									children: patient.relation
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:278:17",
								children: patient.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:281:17",
								children: formatDate(patient.lastVisit)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:284:17",
								children: formatDate(patient.nextVisit)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:287:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[220px] truncate text-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:288:19",
									children: patient.therapyProgram
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:289:19",
									children: [
										patient.totalVisits,
										" visits · ",
										patient.area
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:293:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: patient.status,
									tone: OUTDOOR_PATIENT_STATUS_TONE[patient.status],
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:294:19"
								})
							})
						]
					}, patient.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:305:7",
		children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:307:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:308:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
					name: patient.name,
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:309:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:310:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:311:17",
							children: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:312:17",
							children: patient.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:315:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								label: patient.status,
								tone: OUTDOOR_PATIENT_STATUS_TONE[patient.status],
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:316:19"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:321:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Guardian",
									value: patient.guardian,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:322:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									value: patient.phone,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:323:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last visit",
									value: formatDate(patient.lastVisit),
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:324:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Next visit",
									value: formatDate(patient.nextVisit),
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:325:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Program",
									value: patient.therapyProgram,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:326:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Area",
									value: `${patient.area}, ${patient.district}`,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:327:19"
								})
							]
						})
					]
				})]
			})
		}, patient.id))
	})] });
}
function VisitHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:343:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:344:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:345:11",
					children: "Outdoor visit history"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:346:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:347:13",
						children: [
							"Visit Date",
							"Patient",
							"Therapist",
							"Visit Type",
							"Outcome",
							"Remarks"
						].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: HEAD_CLASS,
							"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:350:19",
							children: label
						}, label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:357:11",
					children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:359:15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:363:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:364:19",
									children: formatDate(visit.date)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:365:19",
									children: visit.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "px-5 py-3.5 text-sm",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:367:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/outdoor/$visitId",
									params: { visitId: visit.id },
									className: "block max-w-[180px] truncate font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:368:19",
									children: visit.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:375:19",
									children: visit.patientCode
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm text-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:379:17",
								children: visit.therapistName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:382:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.type,
									tone: "info",
									dot: false,
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:383:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap px-5 py-3.5",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:385:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.outcome,
									tone: VISIT_OUTCOME_TONE[visit.outcome],
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:386:19"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "px-5 py-3.5 text-sm text-muted-foreground",
								"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:388:17",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[280px] truncate",
									"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:389:19",
									children: visit.remarks || "—"
								})
							})
						]
					}, visit.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-0 md:hidden",
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:397:7",
		children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative px-4 py-4 pl-10",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:399:11",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute left-4 top-6 h-full w-px bg-border last:hidden",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:400:13"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute left-[11px] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/10",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:404:13"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-foreground",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:408:13",
					children: visit.patientName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:409:13",
					children: [
						formatDate(visit.date),
						" · ",
						visit.therapistName
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-center gap-2",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:412:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.type,
						tone: "info",
						dot: false,
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:413:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.outcome,
						tone: VISIT_OUTCOME_TONE[visit.outcome],
						"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:414:15"
					})]
				}),
				visit.remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:417:15",
					children: visit.remarks
				}) : null
			]
		}, visit.id))
	})] });
}
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:433:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:434:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/outdoor/outdoor-tables.tsx:435:7",
			children: value
		})]
	});
}
function TherapistCards({ items = OUTDOOR_THERAPISTS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:20:5",
		children: items.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			interactive: true,
			className: "p-5",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:22:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:23:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:24:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:25:15",
							children: therapist.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:26:15",
							children: therapist.designation
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: therapist.status,
						tone: THERAPIST_STATUS_TONE[therapist.status],
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:30:13"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-2 gap-3",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:36:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:37:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:38:15",
							children: "Today's visits"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[18px] font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:41:15",
							children: therapist.todayVisits
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:45:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:46:15",
							children: "Completed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[18px] font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:49:15",
							children: therapist.completedVisits
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:55:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:56:13",
						children: "Assigned areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:59:13",
						children: therapist.areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: area,
							tone: "neutral",
							dot: false,
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:61:17"
						}, area))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between gap-3 border-t border-border pt-3.5",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:66:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:67:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:68:15"
						}), therapist.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:71:13",
						children: therapist.experience
					})]
				})
			]
		}, therapist.id))
	});
}
function WidgetShell({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:91:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-0.5",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:92:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[14px] font-semibold tracking-tight text-foreground",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:93:9",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:95:11",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:98:7",
			children
		})]
	});
}
function TodaysScheduleWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Today's Outdoor Schedule",
		description: "31 July 2026",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:105:5",
		children: TODAYS_VISITS.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-muted-foreground",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:107:9",
			children: "No visits scheduled today."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:109:9",
			children: TODAYS_VISITS.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg border border-border bg-muted/25 p-3 transition-enterprise hover:bg-surface-hover",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:111:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:115:15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:116:17",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-medium text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:117:19",
							children: visit.patientName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:120:19",
							children: [
								visit.time,
								" · ",
								visit.type
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.status,
						tone: VISIT_STATUS_TONE[visit.status],
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:124:17"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 truncate text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:126:15",
					children: [
						visit.area,
						" · ",
						visit.therapistName
					]
				})]
			}, visit.id))
		})
	});
}
function UpcomingVisitsWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Upcoming Visits",
		description: "Next scheduled field visits",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:139:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:140:7",
			children: UPCOMING_VISITS.slice(0, 5).map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:142:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:143:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:144:15",
						children: visit.patientName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:147:15",
						children: [
							formatDate(visit.date),
							" · ",
							visit.time
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:151:13",
					children: visit.area
				})]
			}, visit.id))
		})
	});
}
function TherapistAvailabilityWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Therapist Availability",
		description: "Field team status right now",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:161:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:162:7",
			children: OUTDOOR_THERAPISTS.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:164:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:165:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:166:15",
						children: therapist.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-[12px] text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:167:15",
						children: [therapist.todayVisits, " visits today"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					label: therapist.status,
					tone: THERAPIST_STATUS_TONE[therapist.status],
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:171:13"
				})]
			}, therapist.id))
		})
	});
}
function AreaCoverageWidget() {
	const max = Math.max(...AREA_COVERAGE.map((item) => item.visits));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Area Coverage",
		description: "Visits by area this quarter",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:185:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:186:7",
			children: AREA_COVERAGE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "space-y-1.5",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:188:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 text-[12.5px]",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:189:13",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate text-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:190:15",
						children: [item.area, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:192:17",
							children: [" · ", item.district]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 tabular-nums text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:194:15",
						children: [item.visits, " visits"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 overflow-hidden rounded-full bg-muted",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:198:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary/70",
						style: { width: `${item.visits / max * 100}%` },
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:199:15"
					})
				})]
			}, item.area))
		})
	});
}
function MapPlaceholderCard({ address, area, distanceKm, travelTime, mapLink }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden p-0",
		"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:227:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-label": "Map preview placeholder",
			role: "img",
			className: "relative grid h-40 place-items-center border-b border-border bg-muted/40 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:228:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary ring-4 ring-primary/10",
				"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:233:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "h-5 w-5",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:234:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-5",
			"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:237:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:238:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] font-semibold tracking-tight text-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:239:11",
						children: area
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:240:11",
						children: address
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-3",
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:242:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:243:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:244:13",
							children: "Distance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-0.5 text-[15px] font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:247:13",
							children: [distanceKm, " km"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:251:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:252:13",
							children: "Travel time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[15px] font-semibold text-foreground",
							"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:255:13",
							children: travelTime
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "w-full",
					disabled: true,
					"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:258:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/outdoor/outdoor-widgets.tsx:259:11"
					}), mapLink ? "Open map link (UI only)" : "Map integration coming soon"]
				})
			]
		})]
	});
}
//#endregion
export { TherapistAvailabilityWidget as a, UpcomingVisitsWidget as c, OutdoorVisitTable as i, VisitHistoryTable as l, MapPlaceholderCard as n, TherapistCards as o, OutdoorPatientTable as r, TodaysScheduleWidget as s, AreaCoverageWidget as t };
