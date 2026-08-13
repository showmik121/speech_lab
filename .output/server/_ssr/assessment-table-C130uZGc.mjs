import { At as Ellipsis, Dt as FileText, Tn as Archive, U as Printer, X as PencilLine, kt as Eye, tn as CalendarPlus } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, a as ASSESSMENT_STATUS_TONE } from "./assessment-data-VYEbB3BS.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CKUKb44m.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-xxIuZmE-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assessment-table-C130uZGc.js
var import_jsx_runtime = require_jsx_runtime();
var ASSESSMENT_COLUMNS = [
	{
		key: "code",
		label: "Assessment ID",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "patientCode",
		label: "Patient ID",
		hideable: true
	},
	{
		key: "assessmentDate",
		label: "Assessment Date",
		hideable: true
	},
	{
		key: "assessmentType",
		label: "Assessment Type",
		hideable: true
	},
	{
		key: "diagnosis",
		label: "Diagnosis",
		hideable: true
	},
	{
		key: "recommendation",
		label: "Therapy Recommendation",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	},
	{
		key: "nextFollowUp",
		label: "Next Follow-up",
		hideable: true
	}
];
var DEFAULT_ASSESSMENT_COLUMNS = ASSESSMENT_COLUMNS.map((column) => column.key);
function AssessmentAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/assessments/assessment-table.tsx:42:5",
		children: initialsOf(name)
	});
}
function AssessmentTable({ rows, visibleColumns }) {
	const columns = ASSESSMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		"data-tsd-source": "/src/components/assessments/assessment-table.tsx:66:7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:67:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:68:11",
					children: "Clinical assessments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:69:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border hover:bg-transparent",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:70:13",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							scope: "col",
							className: "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:72:17",
							children: column.label
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:80:15",
							children: "Actions"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:85:11",
					children: rows.map((assessment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "border-border transition-enterprise hover:bg-surface-hover",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:87:15",
						children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-sm",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:92:19",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCell, {
								column: column.key,
								assessment,
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:93:21"
							})
						}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:96:17",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentRowActions, {
								assessment,
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:97:19"
							})
						})]
					}, assessment.id))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		"data-tsd-source": "/src/components/assessments/assessment-table.tsx:106:7",
		children: rows.map((assessment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:108:11",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:109:13",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
					name: assessment.patientName,
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:110:15"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:111:15",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:112:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:113:19",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/assessments/$assessmentId",
									params: { assessmentId: assessment.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:114:21",
									children: assessment.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:121:21",
									children: [
										assessment.code,
										" · ",
										assessment.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentRowActions, {
								assessment,
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:125:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:128:17",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: ASSESSMENT_STATUS_TONE[assessment.status],
								label: assessment.status,
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:129:19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: SEVERITY_TONE[assessment.diagnosis.severity],
								label: assessment.diagnosis.severity,
								"data-tsd-source": "/src/components/assessments/assessment-table.tsx:133:19"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:139:17",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Assessment date",
									value: formatDate(assessment.assessmentDate),
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:140:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Type",
									value: assessment.assessmentType,
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:141:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Diagnosis",
									value: assessment.diagnosis.primary,
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:142:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Recommendation",
									value: assessment.recommendation.therapy,
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:143:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: assessment.guardianPhone,
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:144:19"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next follow-up",
									value: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled",
									"data-tsd-source": "/src/components/assessments/assessment-table.tsx:145:19"
								})
							]
						})
					]
				})]
			})
		}, assessment.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/assessments/assessment-table.tsx:163:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:164:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:165:7",
			children: value
		})]
	});
}
function AssessmentCell({ column, assessment }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/assessments/$assessmentId",
			params: { assessmentId: assessment.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:180:9",
			children: assessment.code
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:190:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
				name: assessment.patientName,
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:191:11"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:192:11",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: assessment.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:193:13",
					children: assessment.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:200:13",
					children: [
						assessment.patientAge,
						" yrs · ",
						assessment.patientGender,
						" · ",
						assessment.guardianName
					]
				})]
			})]
		});
		case "patientCode": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:208:9",
			children: assessment.patientCode
		});
		case "assessmentDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:214:9",
			children: formatDate(assessment.assessmentDate)
		});
		case "assessmentType": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:219:14",
			children: assessment.assessmentType
		});
		case "diagnosis": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:222:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:223:11",
				children: assessment.diagnosis.primary
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:224:11",
				children: [assessment.diagnosis.severity, assessment.diagnosis.secondary !== "None" ? ` · ${assessment.diagnosis.secondary}` : ""]
			})]
		});
		case "recommendation": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:234:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:235:11",
				children: assessment.recommendation.therapy
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:236:11",
				children: [
					assessment.recommendation.sessionsPerWeek,
					"× / week ·",
					" ",
					assessment.recommendation.expectedDuration
				]
			})]
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: ASSESSMENT_STATUS_TONE[assessment.status],
			label: assessment.status,
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:244:9"
		});
		case "nextFollowUp": return assessment.nextFollowUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:251:9",
			children: formatDate(assessment.nextFollowUp)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:255:9",
			children: "Not scheduled"
		});
		default: return null;
	}
}
function AssessmentRowActions({ assessment }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		"data-tsd-source": "/src/components/assessments/assessment-table.tsx:264:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:265:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				className: "text-muted-foreground",
				"aria-label": `Actions for assessment ${assessment.code}`,
				"data-tsd-source": "/src/components/assessments/assessment-table.tsx:266:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
					className: "h-4 w-4",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:272:11"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-52",
			"data-tsd-source": "/src/components/assessments/assessment-table.tsx:275:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					asChild: true,
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:276:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/assessments/$assessmentId",
						params: { assessmentId: assessment.id },
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:277:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/assessments/assessment-table.tsx:281:13"
						}), "View Assessment"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:285:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:286:11"
					}), "Edit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:289:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:290:11"
					}), "Print"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/assessments/assessment-table.tsx:293:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:294:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:295:11"
					}), "Generate Report"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:298:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:299:11"
					}), "Schedule Therapy"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { "data-tsd-source": "/src/components/assessments/assessment-table.tsx:302:9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: "text-danger focus:text-danger",
					"data-tsd-source": "/src/components/assessments/assessment-table.tsx:303:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
						className: "h-4 w-4",
						"aria-hidden": "true",
						"data-tsd-source": "/src/components/assessments/assessment-table.tsx:304:11"
					}), "Archive"]
				})
			]
		})]
	});
}
//#endregion
export { DEFAULT_ASSESSMENT_COLUMNS as i, AssessmentAvatar as n, AssessmentTable as r, ASSESSMENT_COLUMNS as t };
