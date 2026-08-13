import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, Sn as ArrowLeft, a as Wallet, dt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
import { _ as TODAY_ISO, d as PAYMENT_METHODS, f as PAYMENT_PACKAGES, t as COLLECTED_BY, v as findPackage } from "./payment-data-BZ055nra.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { n as FormSection, t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as PaymentSummaryCard, i as PaymentAvatar } from "./payment-summary-card-j0rMUhW-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments.collect-DmFLDI9Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectPaymentPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [patientId, setPatientId] = (0, import_react.useState)("");
	const [packageId, setPackageId] = (0, import_react.useState)("");
	const [discount, setDiscount] = (0, import_react.useState)("");
	const [received, setReceived] = (0, import_react.useState)("");
	const [method, setMethod] = (0, import_react.useState)("Cash");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const patient = PATIENTS.find((item) => item.id === patientId);
	const selectedPackage = findPackage(packageId);
	const results = (0, import_react.useMemo)(() => {
		const value = query.trim().toLowerCase();
		if (!value) return PATIENTS.slice(0, 5);
		return PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name
		].join(" ").toLowerCase().includes(value)).slice(0, 8);
	}, [query]);
	const price = selectedPackage?.price ?? 0;
	const discountValue = Math.min(Number(discount) || 0, price);
	const payable = Math.max(price - discountValue, 0);
	const receivedValue = Math.min(Number(received) || 0, payable);
	const remainingDue = Math.max(payable - receivedValue, 0);
	const needsReference = method !== "Cash";
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setSaved(true);
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.payments.collect.tsx:89:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Collect Payment",
				description: "Manage packages, collect payments and monitor dues.",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Payment & Billing",
						to: "/manager/payments"
					},
					{ label: "Collect Payment" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/payments",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}),
				"data-tsd-source": "/src/routes/manager.payments.collect.tsx:90:7"
			}),
			saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "rounded-xl border border-success/30 bg-success/8 px-5 py-4 text-[13px] text-foreground shadow-card",
				"data-tsd-source": "/src/routes/manager.payments.collect.tsx:109:9",
				children: [
					"Payment of",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold tabular-nums",
						"data-tsd-source": "/src/routes/manager.payments.collect.tsx:114:11",
						children: formatTaka(receivedValue)
					}),
					" recorded in this preview. Receipt generation will be handled by the API."
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				"data-tsd-source": "/src/routes/manager.payments.collect.tsx:119:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 divide-y divide-border rounded-xl border border-border bg-card px-5 shadow-card sm:px-6",
					"data-tsd-source": "/src/routes/manager.payments.collect.tsx:120:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormSection, {
							title: "Patient",
							description: "Search by name, patient ID, phone or guardian name.",
							"data-tsd-source": "/src/routes/manager.payments.collect.tsx:121:11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									id: "collect-page-search",
									label: "Search patient",
									required: true,
									"data-tsd-source": "/src/routes/manager.payments.collect.tsx:125:13",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:126:15",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:127:17"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-search",
											value: query,
											onChange: (event) => setQuery(event.target.value),
											placeholder: "e.g. Rahim Ahmed or PT-DHK-1001",
											className: "pl-9",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:131:17"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-1.5 rounded-lg border border-border bg-muted/25 p-2 sm:grid-cols-2",
									"data-tsd-source": "/src/routes/manager.payments.collect.tsx:141:13",
									children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "px-2 py-3 text-[13px] text-muted-foreground",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:143:17",
										children: "No patient matches this search."
									}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:148:19",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPatientId(item.id),
											className: cn("flex w-full items-center gap-3 rounded-md border px-2.5 py-2 text-left transition-enterprise", item.id === patientId ? "border-primary/40 bg-primary/8" : "border-transparent hover:bg-surface-hover"),
											"aria-pressed": item.id === patientId,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:149:21",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
												name: item.name,
												className: "h-8 w-8",
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:160:23"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:161:23",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block truncate text-[13px] font-medium text-foreground",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:162:25",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block truncate text-[12px] text-muted-foreground",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:165:25",
													children: [
														item.code,
														" · ",
														item.phone
													]
												})]
											})]
										})
									}, item.id))
								}),
								patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-border bg-background p-4",
									"data-tsd-source": "/src/routes/manager.payments.collect.tsx:176:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:177:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
											name: patient.name,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:178:19"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:179:19",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-sm font-semibold text-foreground",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:180:21",
													children: patient.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "truncate text-[12.5px] text-muted-foreground",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:183:21",
													children: [
														patient.code,
														" · ",
														patient.age,
														" yrs · ",
														patient.guardian.name,
														" (",
														patient.guardian.relation,
														") · ",
														patient.phone
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-2 flex flex-wrap items-center gap-2",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:187:21",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
														tone: "info",
														label: patient.program.therapyType,
														dot: false,
														"data-tsd-source": "/src/routes/manager.payments.collect.tsx:188:23"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
														tone: patient.billing.due > 0 ? "danger" : "success",
														label: patient.billing.due > 0 ? `Due ${formatTaka(patient.billing.due)}` : "No outstanding due",
														"data-tsd-source": "/src/routes/manager.payments.collect.tsx:189:23"
													})]
												})
											]
										})]
									})
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Package & amount",
							description: "Discount and due are calculated live.",
							"data-tsd-source": "/src/routes/manager.payments.collect.tsx:204:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:205:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-package",
										label: "Selected package",
										required: true,
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:206:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: packageId,
											onValueChange: setPackageId,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:207:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "collect-page-package",
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:208:19",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													placeholder: "Select package",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:209:21"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:211:19",
												children: PAYMENT_PACKAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
													value: item.id,
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:213:23",
													children: [
														item.name,
														" — ",
														formatTaka(item.price)
													]
												}, item.id))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-amount",
										label: "Amount (৳)",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:220:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-amount",
											value: price ? String(price) : "",
											readOnly: true,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:221:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-discount",
										label: "Discount (৳)",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:223:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-discount",
											type: "number",
											min: 0,
											value: discount,
											onChange: (event) => setDiscount(event.target.value),
											placeholder: "0",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:224:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-received",
										label: "Receive amount (৳)",
										required: true,
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:233:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-received",
											type: "number",
											min: 0,
											value: received,
											onChange: (event) => setReceived(event.target.value),
											placeholder: "0",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:234:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-due",
										label: "Remaining due (৳)",
										hint: "Calculated automatically",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:243:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-due",
											value: formatTaka(remainingDue),
											readOnly: true,
											className: cn("font-medium tabular-nums", remainingDue > 0 ? "text-danger" : "text-success"),
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:248:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-date",
										label: "Payment date",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:258:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-date",
											type: "date",
											defaultValue: TODAY_ISO,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:259:17"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSection, {
							title: "Method & reference",
							description: "How the guardian paid this amount.",
							"data-tsd-source": "/src/routes/manager.payments.collect.tsx:264:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:265:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-method",
										label: "Payment method",
										required: true,
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:266:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: method,
											onValueChange: setMethod,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:267:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "collect-page-method",
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:268:19",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													placeholder: "Select method",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:269:21"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:271:19",
												children: PAYMENT_METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: item,
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:273:23",
													children: item
												}, item))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-reference",
										label: "Reference number",
										hint: needsReference ? "Transaction or cheque reference" : "Not required for cash",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:280:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-page-reference",
											placeholder: needsReference ? "e.g. bKash TRX 8FJ2K9QP" : "—",
											disabled: !needsReference,
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:285:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-collector",
										label: "Collected by",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:291:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											defaultValue: COLLECTED_BY[0],
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:292:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "collect-page-collector",
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:293:19",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													placeholder: "Select staff",
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:294:21"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-tsd-source": "/src/routes/manager.payments.collect.tsx:296:19",
												children: COLLECTED_BY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: item,
													"data-tsd-source": "/src/routes/manager.payments.collect.tsx:298:23",
													children: item
												}, item))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-page-remarks",
										label: "Remarks",
										className: "sm:col-span-2",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:305:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "collect-page-remarks",
											rows: 3,
											placeholder: "Optional note for the receipt…",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:306:17"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 py-5",
							"data-tsd-source": "/src/routes/manager.payments.collect.tsx:315:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:316:13",
								children: "Nothing is saved yet — this screen is UI only."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:319:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									asChild: true,
									"data-tsd-source": "/src/routes/manager.payments.collect.tsx:320:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/manager/payments",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:321:17",
										children: "Cancel"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: submit,
									disabled: submitting || !patient || !selectedPackage,
									"data-tsd-source": "/src/routes/manager.payments.collect.tsx:323:15",
									children: [
										submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											className: "h-4 w-4 animate-spin",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:325:19"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
											className: "h-4 w-4",
											"aria-hidden": "true",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:327:19"
										}),
										"Collect ",
										receivedValue > 0 ? formatTaka(receivedValue) : "payment"
									]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"data-tsd-source": "/src/routes/manager.payments.collect.tsx:335:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSummaryCard, {
						packagePrice: price,
						discount: discountValue,
						paid: receivedValue,
						due: remainingDue,
						totalSessions: selectedPackage?.sessions ?? 0,
						remainingSessions: selectedPackage?.sessions ?? 0,
						"data-tsd-source": "/src/routes/manager.payments.collect.tsx:336:11"
					}), selectedPackage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-border bg-card p-5 shadow-card",
						"data-tsd-source": "/src/routes/manager.payments.collect.tsx:345:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-foreground",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:346:15",
								children: selectedPackage.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[13px] leading-relaxed text-muted-foreground",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:347:15",
								children: selectedPackage.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
								"data-tsd-source": "/src/routes/manager.payments.collect.tsx:350:15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:351:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:352:19",
											children: "Duration"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium text-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:353:19",
											children: selectedPackage.durationLabel
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:355:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:356:19",
											children: "Expiry"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium text-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:357:19",
											children: selectedPackage.expiry
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										"data-tsd-source": "/src/routes/manager.payments.collect.tsx:359:17",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:360:19",
											children: "Registration fee"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums text-foreground",
											"data-tsd-source": "/src/routes/manager.payments.collect.tsx:361:19",
											children: formatTaka(selectedPackage.registrationFee)
										})]
									})
								]
							})
						]
					}) : null]
				})]
			})
		]
	});
}
//#endregion
export { CollectPaymentPage as component };
