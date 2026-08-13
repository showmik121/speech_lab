import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Xt as Check, dt as LoaderCircle, vt as ImagePlus } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { f as calculateAge, i as GUARDIAN_RELATIONS, r as GENDERS, t as BLOOD_GROUPS } from "./patient-data-BLExFXXL.mjs";
import { f as PAYMENT_PACKAGES } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CKx32fwL.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { a as THERAPY_TYPES } from "./therapy-types-CcVTVE9G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-patient-dialog-B_bs-cxp.js
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
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:98:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-3xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:105:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:106:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:107:11",
						children: "Register patient"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:108:11",
						children: "Complete five short steps to create a new patient record."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:114:9",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:118:15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:119:17",
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3.5 w-3.5",
										"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:128:39"
									}) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 lg:block",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:130:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:131:19",
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:141:19"
								}) : null
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:148:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] font-medium text-foreground",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:149:11",
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
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:152:11",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPersonal, {
					dob,
					onDobChange: setDob,
					age,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:156:11"
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGuardian, { "data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:158:11" }) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedical, { "data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:160:11" }) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepProgramme, {
					serviceType,
					onServiceTypeChange: setServiceType,
					selectedServiceId,
					onSelectedServiceIdChange: setSelectedServiceId,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:162:11"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPayment, {
					selectedServicePrice,
					selectedServiceId,
					serviceType,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:169:11"
				}, `${serviceType}-${selectedServiceId}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:177:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:178:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:181:11",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:183:15",
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:188:15",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:190:15",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:192:19"
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
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:214:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-photo",
				label: "Patient photo",
				hint: "JPG or PNG, up to 2 MB",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:215:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-4",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:221:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:222:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
							className: "h-5 w-5",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:223:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:225:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-foreground",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:226:13",
							children: "Upload placeholder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:227:13",
							children: "Photo upload is enabled once storage is connected."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-name",
				label: "Full name",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:234:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-name",
					placeholder: "e.g. Rahim Ahmed",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:235:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-dob",
				label: "Date of birth",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:237:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-dob",
					type: "date",
					value: dob,
					onChange: (event) => onDobChange(event.target.value),
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:238:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-age",
				label: "Age",
				hint: "Calculated automatically from date of birth",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:245:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-age",
					readOnly: true,
					value: age ? `${age} years` : "",
					placeholder: "—",
					className: "bg-muted/40",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:246:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-gender",
				label: "Gender",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:254:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:255:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "patient-gender",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:256:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select gender",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:257:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:259:11",
						children: GENDERS.map((gender) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: gender,
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:261:15",
							children: gender
						}, gender))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-blood",
				label: "Blood group",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:268:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:269:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "patient-blood",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:270:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select blood group",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:271:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:273:11",
						children: BLOOD_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: group,
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:275:15",
							children: group
						}, group))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-phone",
				label: "Contact number",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:282:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-phone",
					placeholder: "+880 17XX-XXXXXX",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:283:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-address",
				label: "Address",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:285:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "patient-address",
					rows: 2,
					placeholder: "House, road, area, city, postcode",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:286:9"
				})
			})
		]
	});
}
function StepGuardian() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:294:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-name",
				label: "Guardian name",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:295:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-name",
					placeholder: "e.g. Md. Karim Ahmed",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:296:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-relation",
				label: "Relationship",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:298:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:299:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "guardian-relation",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:300:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Select relationship",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:301:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:303:11",
						children: GUARDIAN_RELATIONS.map((relation) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: relation,
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:305:15",
							children: relation
						}, relation))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-phone",
				label: "Phone",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:312:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-phone",
					placeholder: "+880 17XX-XXXXXX",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:313:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-email",
				label: "Email",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:315:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-email",
					type: "email",
					placeholder: "guardian@example.com",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:316:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-occupation",
				label: "Occupation",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:318:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-occupation",
					placeholder: "e.g. Bank Officer",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:319:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "emergency-contact",
				label: "Emergency contact",
				hint: "Alternate number reachable during sessions",
				required: true,
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:321:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "emergency-contact",
					placeholder: "+880 18XX-XXXXXX",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:327:9"
				})
			})
		]
	});
}
function StepMedical() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:335:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "primary-concern",
				label: "Primary concern",
				required: true,
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:336:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "primary-concern",
					rows: 2,
					placeholder: "e.g. Delayed speech development and unclear articulation",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:337:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "diagnosis",
				label: "Diagnosis",
				hint: "Structured diagnosis codes arrive with the clinical module",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:343:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					disabled: true,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:348:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "diagnosis",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:349:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Available after assessment",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:350:13"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:352:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "placeholder",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:353:13",
							children: "Placeholder"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "referral-doctor",
				label: "Referral doctor",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:357:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "referral-doctor",
					placeholder: "e.g. Dr. Sabrina Chowdhury",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:358:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-history",
				label: "Medical history",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:360:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-history",
					rows: 3,
					placeholder: "Birth history, hearing status, previous therapy, medications…",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:361:9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-notes",
				label: "Notes",
				className: "sm:col-span-2",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:367:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-notes",
					rows: 2,
					placeholder: "Internal notes for the clinical team",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:368:9"
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
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:391:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:393:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => handleServiceTypeChange("package"),
				className: cn("flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer", serviceType === "package" ? "border-primary bg-primary/10 text-primary font-bold shadow-sm" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"),
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:394:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-semibold",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:404:11",
					children: "Package"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => handleServiceTypeChange("therapy"),
				className: cn("flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer", serviceType === "therapy" ? "border-primary bg-primary/10 text-primary font-bold shadow-sm" : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"),
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:407:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-semibold",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:417:11",
					children: "Therapy"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			id: "services-dropdown",
			label: "Services",
			required: true,
			className: "w-full",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:422:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: selectedServiceId,
				onValueChange: (val) => onSelectedServiceIdChange(val),
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:423:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "services-dropdown",
					className: "w-full",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:427:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
						placeholder: serviceType === "package" ? "Select package service..." : "Select therapy service...",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:428:13"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:434:11",
					children: serviceType === "package" ? PAYMENT_PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: pkg.id,
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:437:19",
						children: pkg.name
					}, pkg.id)) : THERAPY_TYPES.map((thr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: thr.id,
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:442:19",
						children: thr.name
					}, thr.id))
				})]
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
		"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:512:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:513:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "total-amount",
					label: "Total Amount (৳)",
					required: true,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:515:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "total-amount",
						type: "number",
						placeholder: "e.g. 18500",
						value: totalAmount,
						onChange: (e) => setTotalAmount(e.target.value),
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:516:11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "payment-type",
					label: "Payment Type",
					required: true,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:526:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: paymentType,
						onValueChange: (val) => {
							setPaymentType(val);
							setFirstPayment("");
						},
						disabled: isTherapy,
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:527:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "payment-type",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:535:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								placeholder: "Select payment type",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:536:15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:538:13",
							children: isTherapy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Full Payment",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:541:17",
								children: "Full Payment (No Due)"
							}) : isMonthlyPlan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Monthly",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:545:19",
								children: "Monthly"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Full Payment",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:546:19",
								children: "Full Payment"
							})] }) : isNoMonthlyPlan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Full Payment",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:551:19",
								children: "Full Payment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Installment",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:552:19",
								children: "Installment (3 Periods)"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Full Payment",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:557:19",
									children: "Full Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Monthly",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:558:19",
									children: "Monthly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Installment",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:559:19",
									children: "Installment (3 Periods)"
								})
							] })
						})]
					})
				}),
				paymentType === "Installment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "first-payment",
					label: "First Payment (Period 1)",
					required: true,
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:569:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "first-payment",
						type: "number",
						placeholder: "e.g. 6500",
						value: firstPayment,
						onChange: (e) => setFirstPayment(e.target.value),
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:570:15"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "due-payment",
					label: "Due Payment",
					hint: "Calculated automatically",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:578:13",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "due-payment",
						type: "number",
						readOnly: true,
						placeholder: "0",
						value: numericDue,
						className: "bg-muted/40 font-semibold text-amber-600 dark:text-amber-400",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:579:15"
					})
				})] }) : paymentType === "Full Payment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "due-payment-full",
					label: "Due Payment",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:590:11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "due-payment-full",
						readOnly: true,
						value: "0",
						className: "bg-muted/40 font-semibold text-emerald-600 dark:text-emerald-400",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:591:13"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "payment-method",
					label: "Payment Method",
					required: true,
					className: paymentType === "Installment" ? "sm:col-span-2" : "",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:601:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: paymentMethod,
						onValueChange: setPaymentMethod,
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:607:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "payment-method",
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:608:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								placeholder: "Select payment method",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:609:15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:611:13",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Cash",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:612:15",
									children: "Cash"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Bkash",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:613:15",
									children: "Bkash"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Nagad",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:614:15",
									children: "Nagad"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Mobile Banking",
									"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:615:15",
									children: "Mobile Banking"
								})
							]
						})]
					})
				})
			]
		}), paymentType === "Monthly" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-primary/25 bg-primary/5 p-4 space-y-2",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:623:9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:624:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13.5px] font-semibold text-primary",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:625:13",
						children: "Monthly Payment Schedule Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:628:13",
						children: "Days 1–5 of each month"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12.5px] text-muted-foreground",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:632:11",
					children: [
						"Monthly payments must be settled within the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:634:13",
							children: "1st to 5th day"
						}),
						" of every month."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-background p-2.5 text-[12.5px]",
					"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:636:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground block text-[11px]",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:637:13",
						children: "Total Monthly Fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:638:13",
						children: formatTaka(numericTotal)
					})]
				})
			]
		}) : paymentType === "Installment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-muted/30 p-4 space-y-3",
			"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:643:9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] font-semibold text-foreground",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:644:11",
				children: "3-Period Installment Schedule Breakdown"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:647:11",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-primary/20 bg-primary/5 p-3",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:648:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:649:15",
								children: "Period 1 (First Payment)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-primary",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:652:15",
								children: formatTaka(numericFirst)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-success font-medium",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:655:15",
								children: "Due Today"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background p-3",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:657:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:658:15",
								children: "Period 2 (Installment 2)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-foreground",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:661:15",
								children: formatTaka(installmentPeriodAmount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:664:15",
								children: "Due in 30 Days"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background p-3",
						"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:666:13",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:667:15",
								children: "Period 3 (Installment 3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[16px] font-bold text-foreground",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:670:15",
								children: formatTaka(installmentPeriodAmount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								"data-tsd-source": "/src/components/patients/register-patient-dialog.tsx:673:15",
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
