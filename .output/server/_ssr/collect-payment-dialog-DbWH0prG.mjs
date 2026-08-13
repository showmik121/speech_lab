import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as Search, a as Wallet, dt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as PATIENTS } from "./patient-data-BLExFXXL.mjs";
import { d as PAYMENT_METHODS, f as PAYMENT_PACKAGES, v as findPackage } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { a as PaymentSummaryCard, i as PaymentAvatar } from "./payment-summary-card-j0rMUhW-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collect-payment-dialog-DbWH0prG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* UI-only payment collection flow.
* Amounts are calculated in the browser for preview purposes only.
*/
function CollectPaymentDialog({ open, onOpenChange, defaultPackageId, defaultPatientId }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [patientId, setPatientId] = (0, import_react.useState)(defaultPatientId ?? "");
	const [packageId, setPackageId] = (0, import_react.useState)(defaultPackageId ?? "");
	const [discount, setDiscount] = (0, import_react.useState)("");
	const [received, setReceived] = (0, import_react.useState)("");
	const [method, setMethod] = (0, import_react.useState)("Cash");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const patient = PATIENTS.find((item) => item.id === patientId);
	const selectedPackage = findPackage(packageId);
	const results = (0, import_react.useMemo)(() => {
		const value = query.trim().toLowerCase();
		if (!value) return PATIENTS.slice(0, 4);
		return PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name
		].join(" ").toLowerCase().includes(value)).slice(0, 6);
	}, [query]);
	const price = selectedPackage?.price ?? 0;
	const discountValue = Math.min(Number(discount) || 0, price);
	const payable = Math.max(price - discountValue, 0);
	const receivedValue = Math.min(Number(received) || 0, payable);
	const remainingDue = Math.max(payable - receivedValue, 0);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setQuery("");
			setPatientId(defaultPatientId ?? "");
			setPackageId(defaultPackageId ?? "");
			setDiscount("");
			setReceived("");
			setMethod("Cash");
		}, 200);
	};
	const submit = () => {
		setSubmitting(true);
		const amountVal = Number(received || 0) || (selectedPackage ? selectedPackage.price : 3500);
		addRevenueTransaction({
			patientOrCustomerName: patient?.name || "Patient Fee Collection",
			category: selectedPackage ? "Package Subscription" : "Therapy Session",
			amount: amountVal,
			paidAmount: amountVal,
			dueAmount: 0,
			method: method || "Cash",
			remarks: selectedPackage ? `Package Payment Collection: ${selectedPackage.name}` : "Therapy Session Fee Collection"
		});
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const needsReference = method !== "Cash";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:110:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-4xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:117:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:118:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:119:11",
						children: "Collect payment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:120:11",
						children: "Search a patient, pick a package and record the amount received."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 py-2 lg:grid-cols-[minmax(0,1fr)_300px]",
					"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:125:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 space-y-5",
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:126:11",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								id: "collect-search",
								label: "Search patient",
								hint: "Search by name, patient ID, phone or guardian",
								required: true,
								"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:127:13",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:133:15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
										"aria-hidden": "true",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:134:17"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "collect-search",
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "e.g. Rahim Ahmed or PT-DHK-1001",
										className: "pl-9",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:138:17"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "max-h-[184px] space-y-1.5 overflow-y-auto rounded-lg border border-border bg-muted/25 p-2",
								"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:148:13",
								children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "px-2 py-3 text-[13px] text-muted-foreground",
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:150:17",
									children: "No patient matches this search."
								}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:155:19",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPatientId(item.id),
										className: cn("flex w-full items-center gap-3 rounded-md border px-2.5 py-2 text-left transition-enterprise", item.id === patientId ? "border-primary/40 bg-primary/8" : "border-transparent hover:bg-surface-hover"),
										"aria-pressed": item.id === patientId,
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:156:21",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
											name: item.name,
											className: "h-8 w-8",
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:167:23"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:168:23",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-[13px] font-medium text-foreground",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:169:25",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block truncate text-[12px] text-muted-foreground",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:172:25",
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
								className: "rounded-lg border border-border bg-card p-4 shadow-card",
								"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:183:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:184:17",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
										name: patient.name,
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:185:19"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:186:19",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold text-foreground",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:187:21",
												children: patient.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "truncate text-[12.5px] text-muted-foreground",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:190:21",
												children: [
													patient.code,
													" · ",
													patient.age,
													" yrs · ",
													patient.branch
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex flex-wrap items-center gap-2",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:193:21",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
													tone: "info",
													label: patient.program.therapyType,
													dot: false,
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:194:23"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
													tone: patient.billing.due > 0 ? "danger" : "success",
													label: patient.billing.due > 0 ? `Due ${formatTaka(patient.billing.due)}` : "No outstanding due",
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:195:23"
												})]
											})
										]
									})]
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:209:13",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-package",
										label: "Selected package",
										required: true,
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:210:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: packageId,
											onValueChange: setPackageId,
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:211:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "collect-package",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:212:19",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													placeholder: "Select package",
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:213:21"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:215:19",
												children: PAYMENT_PACKAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
													value: item.id,
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:217:23",
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
										id: "collect-amount",
										label: "Amount (৳)",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:225:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-amount",
											value: price ? String(price) : "",
											readOnly: true,
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:226:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-discount",
										label: "Discount (৳)",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:229:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-discount",
											type: "number",
											min: 0,
											value: discount,
											onChange: (event) => setDiscount(event.target.value),
											placeholder: "0",
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:230:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-received",
										label: "Receive amount (৳)",
										required: true,
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:240:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-received",
											type: "number",
											min: 0,
											value: received,
											onChange: (event) => setReceived(event.target.value),
											placeholder: "0",
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:241:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-due",
										label: "Remaining due (৳)",
										hint: "Calculated automatically",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:251:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-due",
											value: formatTaka(remainingDue),
											readOnly: true,
											className: cn("font-medium tabular-nums", remainingDue > 0 ? "text-danger" : "text-success"),
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:256:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-method",
										label: "Payment method",
										required: true,
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:267:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: method,
											onValueChange: setMethod,
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:268:17",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "collect-method",
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:269:19",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													placeholder: "Select method",
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:270:21"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:272:19",
												children: PAYMENT_METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: item,
													"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:274:23",
													children: item
												}, item))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-reference",
										label: "Reference number",
										hint: needsReference ? "Transaction or cheque reference" : "Not required for cash",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:282:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "collect-reference",
											placeholder: needsReference ? "e.g. bKash TRX 8FJ2K9QP" : "—",
											disabled: !needsReference,
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:287:17"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										id: "collect-remarks",
										label: "Remarks",
										className: "sm:col-span-2",
										"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:294:15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "collect-remarks",
											rows: 2,
											placeholder: "Optional note for the receipt…",
											"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:295:17"
										})
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:300:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSummaryCard, {
							packagePrice: price,
							discount: discountValue,
							paid: receivedValue,
							due: remainingDue,
							totalSessions: selectedPackage?.sessions ?? 0,
							remainingSessions: selectedPackage?.sessions ?? 0,
							"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:301:13"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:312:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:313:11",
						children: "Receipt will be generated after the API is connected."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:316:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: close,
							"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:317:13",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting || !patient || !selectedPackage,
							"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:320:13",
							children: [
								submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "h-4 w-4 animate-spin",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:322:17"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
									className: "h-4 w-4",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/payments/collect-payment-dialog.tsx:324:17"
								}),
								"Collect ",
								receivedValue > 0 ? formatTaka(receivedValue) : "payment"
							]
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { CollectPaymentDialog as t };
