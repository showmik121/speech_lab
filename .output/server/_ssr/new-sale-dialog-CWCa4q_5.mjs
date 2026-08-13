import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShoppingCart, dt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { g as PAYMENT_METHODS, r as MATERIALS } from "./material-data-BTa-_ze7.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-C8HG_YN1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-sale-dialog-CWCa4q_5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* UI-only sale entry modal with live total calculation.
* Nothing is persisted — the Django REST API will own this later.
*/
function NewSaleDialog({ open, onOpenChange, presetMaterialId }) {
	const sellable = (0, import_react.useMemo)(() => MATERIALS.filter((material) => material.status !== "Inactive"), []);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [customerName, setCustomerName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [materialId, setMaterialId] = (0, import_react.useState)(presetMaterialId ?? sellable[0]?.id ?? "");
	const [quantity, setQuantity] = (0, import_react.useState)("1");
	const [discount, setDiscount] = (0, import_react.useState)("0");
	const [method, setMethod] = (0, import_react.useState)("Cash");
	const [remarks, setRemarks] = (0, import_react.useState)("");
	const material = MATERIALS.find((item) => item.id === materialId);
	const qty = Math.max(Number(quantity || 0), 0);
	const off = Math.max(Number(discount || 0), 0);
	const subtotal = (material?.sellingPrice ?? 0) * qty;
	const total = Math.max(subtotal - off, 0);
	const exceedsStock = Boolean(material && qty > material.quantity);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setCustomerName("");
			setPhone("");
			setMaterialId(presetMaterialId ?? sellable[0]?.id ?? "");
			setQuantity("1");
			setDiscount("0");
			setMethod("Cash");
			setRemarks("");
		}, 200);
	};
	const submit = () => {
		setSubmitting(true);
		if (material) addRevenueTransaction({
			patientOrCustomerName: customerName.trim() || "Walk-in Customer",
			category: "Material Sale",
			amount: subtotal,
			paidAmount: total,
			dueAmount: 0,
			method: method === "Bank" ? "Bank Transfer" : method,
			remarks: remarks.trim() || `Material Sale: ${material.name} (Qty: ${qty})`
		});
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
		"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:98:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:105:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:106:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:107:11",
						children: "New sale"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:108:11",
						children: "Record a material sale for a guardian, patient family or institution."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:113:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-customer",
							label: "Customer name",
							required: true,
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:114:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-customer",
								value: customerName,
								onChange: (event) => setCustomerName(event.target.value),
								placeholder: "e.g. Md. Karim Ahmed",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:115:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-phone",
							label: "Phone",
							required: true,
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:122:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-phone",
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								placeholder: "+880 1711-458920",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:123:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-material",
							label: "Select material",
							required: true,
							className: "sm:col-span-2",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:131:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: materialId,
								onValueChange: setMaterialId,
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:132:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-material",
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:133:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select material",
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:134:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:136:15",
									children: sellable.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: item.id,
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:138:19",
										children: [
											item.name,
											" — ",
											formatTaka(item.sellingPrice),
											" (",
											item.quantity,
											" in stock)"
										]
									}, item.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-quantity",
							label: "Quantity",
							required: true,
							error: exceedsStock ? `Only ${material?.quantity} ${material?.unit} in stock` : void 0,
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:146:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-quantity",
								type: "number",
								min: 1,
								value: quantity,
								onChange: (event) => setQuantity(event.target.value),
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:152:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-discount",
							label: "Discount (৳)",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:160:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-discount",
								type: "number",
								min: 0,
								value: discount,
								onChange: (event) => setDiscount(event.target.value),
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:161:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-method",
							label: "Payment method",
							required: true,
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:170:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: method,
								onValueChange: (next) => setMethod(next),
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:171:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-method",
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:172:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select method",
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:173:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:175:15",
									children: PAYMENT_METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: item,
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:177:19",
										children: item
									}, item))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-total",
							label: "Total amount",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:184:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-total",
								readOnly: true,
								value: formatTaka(total),
								className: "bg-muted/40 font-semibold tabular-nums",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:185:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-remarks",
							label: "Remarks",
							className: "sm:col-span-2",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:193:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "sale-remarks",
								rows: 3,
								value: remarks,
								onChange: (event) => setRemarks(event.target.value),
								placeholder: "Any note about this sale…",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:194:13"
							})
						})
					]
				}),
				material ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": "Sale summary",
					className: "rounded-xl border border-border bg-muted/30 p-4 shadow-card",
					"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:205:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:209:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
							category: material.category,
							size: "lg",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:210:15"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:211:15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:212:17",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold text-foreground",
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:213:19",
									children: material.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "neutral",
									label: material.code,
									dot: false,
									"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:214:19"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2",
								"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:216:17",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Unit price",
										value: formatTaka(material.sellingPrice),
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:217:19"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Quantity",
										value: `${qty} ${material.unit}`,
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:218:19"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Subtotal",
										value: formatTaka(subtotal),
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:219:19"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Discount",
										value: off > 0 ? `− ${formatTaka(off)}` : "—",
										"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:220:19"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4",
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:224:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] font-medium uppercase tracking-[0.06em] text-muted-foreground",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:225:15",
							children: "Total payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-semibold tabular-nums text-foreground",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:228:15",
							children: formatTaka(total)
						})]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:235:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:236:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting || !material || qty < 1,
						"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:239:11",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:241:15"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:243:15"
						}), "Record Sale"]
					})]
				})
			]
		})
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:255:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:256:7",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate font-medium tabular-nums text-foreground",
			"data-tsd-source": "/src/components/materials/new-sale-dialog.tsx:257:7",
			children: value
		})]
	});
}
//#endregion
export { NewSaleDialog as t };
