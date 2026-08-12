import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Xt as Check, dt as LoaderCircle, vt as ImagePlus } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { d as PROGRAM_OPTIONS_BY_THERAPY, f as THERAPISTS, i as GUARDIAN_RELATIONS, m as calculateAge, p as THERAPY_TYPES, r as GENDERS, t as BLOOD_GROUPS, u as PAYMENT_TYPES } from "./patient-data-Lg_oRlgT.mjs";
import { f as PAYMENT_PACKAGES, v as findPackage } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-DQdvbG7c.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-patient-dialog-DVxkMcX1.js
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
	const [therapyType, setTherapyType] = (0, import_react.useState)("");
	const [programme, setProgramme] = (0, import_react.useState)("");
	const [paymentType, setPaymentType] = (0, import_react.useState)("");
	const [packageId, setPackageId] = (0, import_react.useState)("");
	const age = (0, import_react.useMemo)(() => calculateAge(dob), [dob]);
	const programmeOptions = (0, import_react.useMemo)(() => therapyType ? PROGRAM_OPTIONS_BY_THERAPY[therapyType] ?? [] : [], [therapyType]);
	const packageOptions = (0, import_react.useMemo)(() => PAYMENT_PACKAGES.filter((item) => item.status === "Active" && item.type === paymentType), [paymentType]);
	const selectedPackage = (0, import_react.useMemo)(() => findPackage(packageId), [packageId]);
	const handleTherapyTypeChange = (value) => {
		setTherapyType(value);
		setProgramme("");
	};
	const handlePaymentTypeChange = (value) => {
		setPaymentType(value);
		setPackageId("");
	};
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		const amount = selectedPackage ? selectedPackage.price + selectedPackage.registrationFee : 15e3;
		addRevenueTransaction({
			patientOrCustomerName: "Newly Registered Patient",
			category: "Patient Enrollment",
			amount,
			paidAmount: amount,
			dueAmount: 0,
			method: "Mobile Banking",
			remarks: selectedPackage ? `Enrolled in ${selectedPackage.name}` : "Patient Enrollment & Registration Fee"
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
					therapyType,
					onTherapyTypeChange: handleTherapyTypeChange,
					programme,
					onProgrammeChange: setProgramme,
					programmeOptions
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPayment, {
					paymentType,
					onPaymentTypeChange: handlePaymentTypeChange,
					packageId,
					onPackageIdChange: setPackageId,
					packageOptions,
					selectedPackage
				}),
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
function StepProgramme({ therapyType, onTherapyTypeChange, programme, onProgrammeChange, programmeOptions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-type",
				label: "Therapy type",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: therapyType,
					onValueChange: onTherapyTypeChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "therapy-type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapy type" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: type,
						children: type
					}, type)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "programme",
				label: "Programme",
				hint: therapyType ? "Programmes shown for the selected therapy type" : "Select a therapy type first",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: programme,
					onValueChange: onProgrammeChange,
					disabled: !therapyType,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "programme",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select programme" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: programmeOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item,
						children: item
					}, item)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-date",
				label: "Assessment date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "assessment-date",
					type: "date"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assigned-therapist",
				label: "Assigned therapist",
				hint: "Live availability arrives with the scheduling module",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "assigned-therapist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapist" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPISTS.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: therapist,
					children: therapist
				}, therapist)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-start",
				label: "Expected start date",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-start",
					type: "date"
				})
			})
		]
	});
}
function StepPayment({ paymentType, onPaymentTypeChange, packageId, onPackageIdChange, packageOptions, selectedPackage }) {
	const discountedPrice = selectedPackage ? Math.round(selectedPackage.price * (1 - selectedPackage.discount / 100)) : 0;
	const registrationFee = selectedPackage?.registrationFee ?? 0;
	const totalPayable = discountedPrice + registrationFee;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "payment-type",
				label: "Payment type",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: paymentType,
					onValueChange: onPaymentTypeChange,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "payment-type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select payment type" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: type,
						children: type
					}, type)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package",
				label: "Package",
				hint: paymentType ? `${packageOptions.length} active package${packageOptions.length === 1 ? "" : "s"} for ${paymentType}` : "Select a payment type first",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: packageId,
					onValueChange: onPackageIdChange,
					disabled: !paymentType,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "package",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select package" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: packageOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option.id,
						children: option.name
					}, option.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "registration-fee",
				label: "Registration fee (৳)",
				hint: "Calculated automatically from the selected package",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "registration-fee",
					type: "number",
					readOnly: true,
					value: registrationFee || "",
					placeholder: "—",
					min: 0,
					className: "bg-muted/40"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "payment-remarks",
				label: "Remarks",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "payment-remarks",
					placeholder: "e.g. Guardian pays by bKash"
				})
			}),
			selectedPackage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-muted/30 p-4 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-medium text-foreground",
						children: selectedPackage.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[12.5px] text-muted-foreground",
						children: [
							selectedPackage.type,
							" · ",
							selectedPackage.sessions,
							" session",
							selectedPackage.sessions === 1 ? "" : "s",
							" · ",
							selectedPackage.durationLabel
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-2 text-[12.5px] sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Package price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-foreground",
							children: formatTaka(selectedPackage.price)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Discount"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-foreground",
							children: selectedPackage.discount > 0 ? `${selectedPackage.discount}%` : "—"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Registration fee"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-foreground",
							children: formatTaka(registrationFee)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Total payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-semibold text-primary",
							children: formatTaka(totalPayable)
						})] })
					]
				})]
			}) : null
		]
	});
}
//#endregion
export { RegisterPatientDialog as t };
