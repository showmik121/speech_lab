import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShoppingCart, dt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { g as PAYMENT_METHODS, r as MATERIALS } from "./material-data-BTa-_ze7.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-DQdvbG7c.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as StatusBadge } from "./status-badge-Dga_qCN3.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-x5j_BsLJ.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-sale-dialog-BVBSp0_Q.js
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
			method: method || "Cash",
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New sale" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Record a material sale for a guardian, patient family or institution." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-customer",
							label: "Customer name",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-customer",
								value: customerName,
								onChange: (event) => setCustomerName(event.target.value),
								placeholder: "e.g. Md. Karim Ahmed"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-phone",
							label: "Phone",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-phone",
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								placeholder: "+880 1711-458920"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-material",
							label: "Select material",
							required: true,
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: materialId,
								onValueChange: setMaterialId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-material",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select material" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sellable.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: item.id,
									children: [
										item.name,
										" — ",
										formatTaka(item.sellingPrice),
										" (",
										item.quantity,
										" in stock)"
									]
								}, item.id)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-quantity",
							label: "Quantity",
							required: true,
							error: exceedsStock ? `Only ${material?.quantity} ${material?.unit} in stock` : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-quantity",
								type: "number",
								min: 1,
								value: quantity,
								onChange: (event) => setQuantity(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-discount",
							label: "Discount (৳)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-discount",
								type: "number",
								min: 0,
								value: discount,
								onChange: (event) => setDiscount(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-method",
							label: "Payment method",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: method,
								onValueChange: (next) => setMethod(next),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-method",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select method" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									children: item
								}, item)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-total",
							label: "Total amount",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-total",
								readOnly: true,
								value: formatTaka(total),
								className: "bg-muted/40 font-semibold tabular-nums"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-remarks",
							label: "Remarks",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "sale-remarks",
								rows: 3,
								value: remarks,
								onChange: (event) => setRemarks(event.target.value),
								placeholder: "Any note about this sale…"
							})
						})
					]
				}),
				material ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": "Sale summary",
					className: "rounded-xl border border-border bg-muted/30 p-4 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
							category: material.category,
							size: "lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold text-foreground",
									children: material.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "neutral",
									label: material.code,
									dot: false
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Unit price",
										value: formatTaka(material.sellingPrice)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Quantity",
										value: `${qty} ${material.unit}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Subtotal",
										value: formatTaka(subtotal)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Discount",
										value: off > 0 ? `− ${formatTaka(off)}` : "—"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] font-medium uppercase tracking-[0.06em] text-muted-foreground",
							children: "Total payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-semibold tabular-nums text-foreground",
							children: formatTaka(total)
						})]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting || !material || qty < 1,
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate font-medium tabular-nums text-foreground",
			children: value
		})]
	});
}
//#endregion
export { NewSaleDialog as t };
