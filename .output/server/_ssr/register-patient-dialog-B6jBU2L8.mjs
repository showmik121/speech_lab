import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Jt as Check, gt as ImagePlus, lt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { f as calculateAge, i as GUARDIAN_RELATIONS, r as GENDERS, t as BLOOD_GROUPS } from "./patient-data-BLExFXXL.mjs";
import { f as PAYMENT_PACKAGES } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-DQdvbG7c.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { a as THERAPY_TYPES } from "./therapy-types-CcVTVE9G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-patient-dialog-B6jBU2L8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		title: "Personal",
		description: "Identity and contact details"
	},
	{
		id: 2,
		title: "Guardian",
		description: "Primary caregiver information"
	},
	{
		id: 3,
		title: "Medical",
		description: "Concerns and clinical history"
	},
	{
		id: 4,
		title: "Programme",
		description: "Therapy plan and scheduling"
	},
	{
		id: 5,
		title: "Payment",
		description: "Billing setup and fees"
	}
];
/**
* UI-only multi-step patient registration flow.
* No data is persisted — submission is simulated until the API is connected.
*/
function RegisterPatientDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [dob, setDob] = (0, import_react.useState)("");
	const [serviceType, setServiceType] = (0, import_react.useState)("package");
	const [selectedServiceId, setSelectedServiceId] = (0, import_react.useState)("");
	const age = (0, import_react.useMemo)(() => calculateAge(dob), [dob]);
	const selectedServicePrice = (0, import_react.useMemo)(() => {
		if (!selectedServiceId) return void 0;
		if (serviceType === "package") {
			const pkg = PAYMENT_PACKAGES.find((p) => p.id === selectedServiceId || p.name === selectedServiceId);
			return pkg ? pkg.price : void 0;
		} else {
			const thr = THERAPY_TYPES.find((t) => t.id === selectedServiceId || t.name === selectedServiceId);
			return thr && thr.fees.length > 0 ? thr.fees[0].price : void 0;
		}
	}, [serviceType, selectedServiceId]);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		const amount = selectedServicePrice ?? 15e3;
		addRevenueTransaction({
			patientOrCustomerName: "Newly Registered Patient",
			category: "Patient Enrollment",
			amount,
			paidAmount: amount,
			dueAmount: 0,
			method: "Mobile Banking",
			remarks: "Patient Enrollment & Registration Fee"
		});
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const current = STEPS[step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-3xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Register patient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Complete five short steps to create a new patient record." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 lg:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true"
								}) : null
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] font-medium text-foreground",
						children: [
							"Step ",
							step,
							" of ",
							STEPS.length,
							" — ",
							current.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPersonal, {
					dob,
					onDobChange: setDob,
					age
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGuardian, {}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedical, {}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepProgramme, {
					serviceType,
					onServiceTypeChange: setServiceType,
					selectedServiceId,
					onSelectedServiceIdChange: setSelectedServiceId
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPayment, {
					selectedServicePrice,
					selectedServiceId,
					serviceType
				}, `${serviceType}-${selectedServiceId}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : null, "Register patient"]
						})]
					})]
				})
			]
		})
	});
}
function StepPersonal({ dob, onDobChange, age }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-photo",
				label: "Patient photo",
				hint: "JPG or PNG, up to 2 MB",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-foreground",
							children: "Upload placeholder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: "Photo upload is enabled once storage is connected."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-name",
				label: "Full name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-name",
					placeholder: "e.g. Rahim Ahmed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-dob",
				label: "Date of birth",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-dob",
					type: "date",
					value: dob,
					onChange: (event) => onDobChange(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-age",
				label: "Age",
				hint: "Calculated automatically from date of birth",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-age",
					readOnly: true,
					value: age ? `${age} years` : "",
					placeholder: "—",
					className: "bg-muted/40"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-gender",
				label: "Gender",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "patient-gender",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select gender" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GENDERS.map((gender) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: gender,
					children: gender
				}, gender)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-blood",
				label: "Blood group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "patient-blood",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select blood group" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: BLOOD_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: group,
					children: group
				}, group)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-phone",
				label: "Contact number",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-phone",
					placeholder: "+880 17XX-XXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-address",
				label: "Address",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "patient-address",
					rows: 2,
					placeholder: "House, road, area, city, postcode"
				})
			})
		]
	});
}
function StepGuardian() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-name",
				label: "Guardian name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-name",
					placeholder: "e.g. Md. Karim Ahmed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-relation",
				label: "Relationship",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "guardian-relation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select relationship" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GUARDIAN_RELATIONS.map((relation) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: relation,
					children: relation
				}, relation)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-phone",
				label: "Phone",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-phone",
					placeholder: "+880 17XX-XXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-email",
				label: "Email",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-email",
					type: "email",
					placeholder: "guardian@example.com"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-occupation",
				label: "Occupation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-occupation",
					placeholder: "e.g. Bank Officer"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "emergency-contact",
				label: "Emergency contact",
				hint: "Alternate number reachable during sessions",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "emergency-contact",
					placeholder: "+880 18XX-XXXXXX"
				})
			})
		]
	});
}
function StepMedical() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "primary-concern",
				label: "Primary concern",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "primary-concern",
					rows: 2,
					placeholder: "e.g. Delayed speech development and unclear articulation"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "diagnosis",
				label: "Diagnosis",
				hint: "Structured diagnosis codes arrive with the clinical module",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					disabled: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "diagnosis",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Available after assessment" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "placeholder",
						children: "Placeholder"
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "referral-doctor",
				label: "Referral doctor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "referral-doctor",
					placeholder: "e.g. Dr. Sabrina Chowdhury"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-history",
				label: "Medical history",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-history",
					rows: 3,
					placeholder: "Birth history, hearing status, previous therapy, medications…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-notes",
				label: "Notes",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-notes",
					rows: 2,
					placeholder: "Internal notes for the clinical team"
				})
			})
		]
	});
}
function StepProgramme({ serviceType, onServiceTypeChange, selectedServiceId, onSelectedServiceIdChange }) {
	const handleServiceTypeChange = (value) => {
		onServiceTypeChange(value);
		onSelectedServiceIdChange("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => handleServiceTypeChange("package"),
				className: cn("flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer", serviceType === "package" ? "border-primary bg-primary/10 text-primary font-bold shadow-sm" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-semibold",
					children: "Package"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => handleServiceTypeChange("therapy"),
				className: cn("flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer", serviceType === "therapy" ? "border-primary bg-primary/10 text-primary font-bold shadow-sm" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-semibold",
					children: "Therapy"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			id: "services-dropdown",
			label: "Services",
			required: true,
			className: "w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: selectedServiceId,
				onValueChange: (val) => onSelectedServiceIdChange(val),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "services-dropdown",
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: serviceType === "package" ? "Select package service..." : "Select therapy service..." })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: serviceType === "package" ? PAYMENT_PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: pkg.id,
					children: pkg.name
				}, pkg.id)) : THERAPY_TYPES.map((thr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: thr.id,
					children: thr.name
				}, thr.id)) })]
			})
		})]
	});
}
function StepPayment({ selectedServicePrice, selectedServiceId, serviceType }) {
	const isTherapy = serviceType === "therapy";
	const isMonthlyPlan = serviceType === "package" && !!selectedServiceId && ["monthly-individual", "monthly-group"].includes(selectedServiceId);
	const isNoMonthlyPlan = serviceType === "package" && !!selectedServiceId && ["screening", "assessment"].includes(selectedServiceId);
	const [totalAmount, setTotalAmount] = (0, import_react.useState)(selectedServicePrice ? selectedServicePrice.toString() : "");
	const [paymentType, setPaymentType] = (0, import_react.useState)(() => {
		if (isTherapy) return "Full Payment";
		if (isMonthlyPlan) return "Monthly";
		return "Full Payment";
	});
	const [firstPayment, setFirstPayment] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (selectedServicePrice) setTotalAmount(selectedServicePrice.toString());
	}, [selectedServicePrice]);
	(0, import_react.useEffect)(() => {
		if (isTherapy) setPaymentType("Full Payment");
		else if (isMonthlyPlan) setPaymentType("Monthly");
		else setPaymentType("Full Payment");
		setFirstPayment("");
	}, [
		selectedServiceId,
		serviceType,
		isTherapy,
		isMonthlyPlan
	]);
	const numericTotal = parseFloat(totalAmount) || 0;
	const numericFirst = paymentType === "Full Payment" ? numericTotal : parseFloat(firstPayment) || 0;
	const numericDue = Math.max(0, numericTotal - numericFirst);
	const installmentPeriodAmount = Math.max(0, numericDue / 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "total-amount",
					label: "Total Amount (৳)",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "total-amount",
						type: "number",
						placeholder: "e.g. 18500",
						value: totalAmount,
						onChange: (e) => setTotalAmount(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "payment-type",
					label: "Payment Type",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: paymentType,
						onValueChange: (val) => {
							setPaymentType(val);
							setFirstPayment("");
						},
						disabled: isTherapy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "payment-type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select payment type" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: isTherapy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Full Payment",
							children: "Full Payment (No Due)"
						}) : isMonthlyPlan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Monthly",
							children: "Monthly"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Full Payment",
							children: "Full Payment"
						})] }) : isNoMonthlyPlan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Full Payment",
							children: "Full Payment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Installment",
							children: "Installment (3 Periods)"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Full Payment",
								children: "Full Payment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Monthly",
								children: "Monthly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Installment",
								children: "Installment (3 Periods)"
							})
						] }) })]
					})
				}),
				paymentType === "Installment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "first-payment",
					label: "First Payment (Period 1)",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "first-payment",
						type: "number",
						placeholder: "e.g. 6500",
						value: firstPayment,
						onChange: (e) => setFirstPayment(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "due-payment",
					label: "Due Payment",
					hint: "Calculated automatically",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "due-payment",
						type: "number",
						readOnly: true,
						placeholder: "0",
						value: numericDue,
						className: "bg-muted/40 font-semibold text-amber-600 dark:text-amber-400"
					})
				})] }) : paymentType === "Full Payment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "due-payment-full",
					label: "Due Payment",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "due-payment-full",
						readOnly: true,
						value: "0",
						className: "bg-muted/40 font-semibold text-emerald-600 dark:text-emerald-400"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "payment-method",
					label: "Payment Method",
					required: true,
					className: paymentType === "Installment" ? "sm:col-span-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: paymentMethod,
						onValueChange: setPaymentMethod,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "payment-method",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select payment method" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Cash",
								children: "Cash"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Bkash",
								children: "Bkash"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Nagad",
								children: "Nagad"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Mobile Banking",
								children: "Mobile Banking"
							})
						] })]
					})
				})
			]
		}), paymentType === "Monthly" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-primary/25 bg-primary/5 p-4 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13.5px] font-semibold text-primary",
						children: "Monthly Payment Schedule Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary",
						children: "Days 1–5 of each month"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12.5px] text-muted-foreground",
					children: [
						"Monthly payments must be settled within the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1st to 5th day" }),
						" of every month."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-background p-2.5 text-[12.5px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[11px]",
						children: "Total Monthly Fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground",
						children: formatTaka(numericTotal)
					})]
				})
			]
		}) : paymentType === "Installment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-muted/30 p-4 space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] font-semibold text-foreground",
				children: "3-Period Installment Schedule Breakdown"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-primary/20 bg-primary/5 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								children: "Period 1 (First Payment)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-primary",
								children: formatTaka(numericFirst)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-success font-medium",
								children: "Due Today"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								children: "Period 2 (Installment 2)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-foreground",
								children: formatTaka(installmentPeriodAmount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								children: "Due in 30 Days"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								children: "Period 3 (Installment 3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-foreground",
								children: formatTaka(installmentPeriodAmount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								children: "Due in 60 Days"
							})
						]
					})
				]
			})]
		}) : null]
	});
}
//#endregion
export { RegisterPatientDialog as t };
