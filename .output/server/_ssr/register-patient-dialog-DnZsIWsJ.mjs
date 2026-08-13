import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { D as ShieldCheck, Ht as CircleCheck, Kt as ChevronRight, Mt as CreditCard, Tn as Activity, Y as Package, a as Users, bt as Hash, f as UserCog, n as X, s as User, st as LoaderCircle, tn as CalendarDays, vt as Heart, x as Stethoscope } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { f as calculateAge, i as GUARDIAN_RELATIONS, r as GENDERS, t as BLOOD_GROUPS } from "./patient-data-BLExFXXL.mjs";
import { f as PAYMENT_PACKAGES } from "./payment-data-Dlqsfv3o.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-DQdvbG7c.mjs";
import { n as getActiveBranch } from "./manager-session-DG-Fmn51.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { t as getStoredDailySessions } from "./daily-session-store-DUqwsGlm.mjs";
import { n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as addRevenueTransaction } from "./revenue-store-CXR3DbCY.mjs";
import { t as addPatient } from "./patient-store-ByOJ7Xje.mjs";
import { a as THERAPY_TYPES } from "./therapy-types-CcVTVE9G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-patient-dialog-DnZsIWsJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		key: "patient",
		title: "Patient & Guardian",
		subtitle: "Identity, contact & caregiver",
		icon: User,
		color: "text-blue-500",
		bg: "bg-blue-500/10",
		border: "border-blue-500/30",
		activeBg: "bg-blue-500"
	},
	{
		id: 2,
		key: "medical",
		title: "Medical Info",
		subtitle: "Concerns & clinical history",
		icon: Heart,
		color: "text-rose-500",
		bg: "bg-rose-500/10",
		border: "border-rose-500/30",
		activeBg: "bg-rose-500"
	},
	{
		id: 3,
		key: "programme",
		title: "Programme & Payment",
		subtitle: "Therapy plan & billing",
		icon: CreditCard,
		color: "text-emerald-500",
		bg: "bg-emerald-500/10",
		border: "border-emerald-500/30",
		activeBg: "bg-emerald-500"
	}
];
function generatePatientId(branchId) {
	const branchCode = branchId ? {
		"dhaka-main": "DHK",
		"gulshan": "GLS",
		"uttara": "UTT",
		"chittagong": "CTG",
		"sylhet": "SYL"
	}[branchId] ?? "BRN" : "DHK";
	const seq = Math.floor(Date.now() % 1e5 / 10);
	return `PT-${branchCode}-${String(seq).padStart(4, "0")}`;
}
function RegisterPatientDialog({ open, onOpenChange }) {
	const branch = getActiveBranch();
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [patientId] = (0, import_react.useState)(() => generatePatientId(branch?.id));
	const [patientName, setPatientName] = (0, import_react.useState)("");
	const [dob, setDob] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("");
	const [bloodGroup, setBloodGroup] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [guardianName, setGuardianName] = (0, import_react.useState)("");
	const [guardianRelation, setGuardianRelation] = (0, import_react.useState)("");
	const [guardianPhone, setGuardianPhone] = (0, import_react.useState)("");
	const [emergencyPhone, setEmergencyPhone] = (0, import_react.useState)("");
	const [primaryConcern, setPrimaryConcern] = (0, import_react.useState)("");
	const [referralDoctor, setReferralDoctor] = (0, import_react.useState)("");
	const [medicalHistory, setMedicalHistory] = (0, import_react.useState)("");
	const [serviceType, setServiceType] = (0, import_react.useState)("package");
	const [selectedServiceId, setSelectedServiceId] = (0, import_react.useState)("");
	const [paymentType, setPaymentType] = (0, import_react.useState)("Full Payment");
	const [firstPayment, setFirstPayment] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("");
	const [customAmount, setCustomAmount] = (0, import_react.useState)("");
	const age = (0, import_react.useMemo)(() => calculateAge(dob), [dob]);
	const clearError = (field) => {
		if (errors[field]) setErrors((prev) => {
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};
	const selectedService = (0, import_react.useMemo)(() => {
		if (!selectedServiceId) return null;
		if (serviceType === "package") return PAYMENT_PACKAGES.find((p) => p.id === selectedServiceId) ?? null;
		if (serviceType === "daily-session") return getStoredDailySessions().find((d) => d.id === selectedServiceId) ?? null;
		return THERAPY_TYPES.find((t) => t.id === selectedServiceId) ?? null;
	}, [serviceType, selectedServiceId]);
	const basePrice = (0, import_react.useMemo)(() => {
		if (!selectedService) return 0;
		if (serviceType === "package" || serviceType === "daily-session") return selectedService.price;
		const thr = selectedService;
		return thr.fees.length > 0 ? thr.fees[0].price : 0;
	}, [selectedService, serviceType]);
	const totalAmount = parseFloat(customAmount) || basePrice;
	const isTherapy = serviceType === "therapy" || serviceType === "daily-session";
	const isMonthlyPlan = serviceType === "package" && ["monthly-individual", "monthly-group"].includes(selectedServiceId);
	const numericFirst = paymentType === "Full Payment" ? totalAmount : parseFloat(firstPayment) || 0;
	const numericDue = Math.max(0, totalAmount - numericFirst);
	(0, import_react.useEffect)(() => {
		if (isTherapy) setPaymentType("Full Payment");
		else if (isMonthlyPlan) setPaymentType("Monthly");
		else setPaymentType("Full Payment");
		setFirstPayment("");
	}, [selectedServiceId, serviceType]);
	(0, import_react.useEffect)(() => {
		setCustomAmount(basePrice > 0 ? String(basePrice) : "");
	}, [basePrice]);
	const reset = () => {
		setStep(1);
		setSubmitted(false);
		setErrors({});
		setPatientName("");
		setDob("");
		setGender("");
		setBloodGroup("");
		setPhone("");
		setAddress("");
		setGuardianName("");
		setGuardianRelation("");
		setGuardianPhone("");
		setEmergencyPhone("");
		setPrimaryConcern("");
		setReferralDoctor("");
		setMedicalHistory("");
		setServiceType("package");
		setSelectedServiceId("");
		setPaymentType("Full Payment");
		setFirstPayment("");
		setPaymentMethod("");
		setCustomAmount("");
	};
	const close = () => {
		onOpenChange(false);
		setTimeout(reset, 300);
	};
	const validateStep1 = () => {
		const newErrors = {};
		if (!patientName.trim()) newErrors.patientName = "Patient full name is required";
		if (!dob) newErrors.dob = "Date of birth is required";
		if (!gender) newErrors.gender = "Gender selection is required";
		if (!phone.trim()) newErrors.phone = "Contact number is required";
		if (!address.trim()) newErrors.address = "Address is required";
		if (!guardianName.trim()) newErrors.guardianName = "Guardian name is required";
		if (!guardianRelation) newErrors.guardianRelation = "Relationship is required";
		if (!guardianPhone.trim()) newErrors.guardianPhone = "Guardian phone is required";
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) {
			toast.error("Required Fields Missing", { description: "Please fill in all required patient and guardian fields marked with *." });
			return false;
		}
		return true;
	};
	const validateStep3 = () => {
		const newErrors = {};
		if (!selectedServiceId) newErrors.selectedServiceId = "Please select a package or therapy service";
		if (!paymentMethod) newErrors.paymentMethod = "Please select a payment method";
		if (paymentType === "Installment") {
			const firstNum = parseFloat(firstPayment) || 0;
			if (!firstPayment.trim() || firstNum <= 0) newErrors.firstPayment = "First payment is required and must be greater than 0";
			else if (firstNum > totalAmount) newErrors.firstPayment = `First payment cannot exceed total amount (৳${totalAmount.toLocaleString()})`;
		}
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) {
			toast.error("Programme & Payment Incomplete", { description: "Please select a service and payment method before completing registration." });
			return false;
		}
		return true;
	};
	const handleContinue = () => {
		if (step === 1) {
			if (!validateStep1()) return;
			setStep(2);
		} else if (step === 2) setStep(3);
	};
	const handleStepClick = (targetStep) => {
		if (targetStep > step) {
			if (step === 1 && !validateStep1()) return;
		}
		setStep(targetStep);
	};
	const submit = () => {
		if (!validateStep3()) return;
		setSubmitting(true);
		const serviceName = selectedService ? "name" in selectedService ? selectedService.name : "" : "No programme";
		addRevenueTransaction({
			patientOrCustomerName: patientName || "New Patient",
			category: "Patient Enrollment",
			amount: totalAmount,
			paidAmount: numericFirst,
			dueAmount: numericDue,
			method: paymentMethod || "Cash",
			remarks: `Registration ${patientId} — ${serviceName}`
		});
		const newPatientRecord = {
			id: `pt-record-${Date.now()}`,
			code: patientId,
			name: patientName || "New Patient",
			dob: dob || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			age: parseInt(age) || 5,
			gender: gender || "Male",
			bloodGroup: bloodGroup || "O+",
			address: address || "Dhaka, Bangladesh",
			phone: phone || "+880 1700-000000",
			email: "",
			branch: branch?.name || "Dhaka Main Branch",
			guardian: {
				name: guardianName || "Caregiver",
				relation: guardianRelation || "Parent",
				phone: guardianPhone || phone || "+880 1700-000000",
				email: "",
				occupation: ""
			},
			emergencyContact: {
				name: guardianName || "Caregiver",
				relation: guardianRelation || "Parent",
				phone: emergencyPhone || guardianPhone || phone || "+880 1700-000000"
			},
			medical: {
				primaryConcern: primaryConcern || "Speech and language evaluation",
				diagnosis: "Provisional",
				history: medicalHistory || "None",
				referralDoctor: referralDoctor || "Self-referred",
				notes: ""
			},
			program: {
				therapyType: serviceType === "package" ? "Package Enrollment" : serviceName,
				program: serviceName,
				assessmentDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				therapist: "Assigned Therapist",
				expectedStart: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				sessionsCompleted: 0,
				sessionsPlanned: 12
			},
			billing: {
				paymentType,
				packageName: serviceName,
				registrationFee: 0,
				totalBilled: totalAmount,
				totalPaid: numericFirst,
				due: numericDue,
				lastPaymentDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				lastPaymentAmount: numericFirst,
				remarks: `Payment via ${paymentMethod}`
			},
			followUp: {
				note: "Initial registration completed",
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				by: "Front Desk"
			},
			status: "Active",
			paymentStatus: numericDue === 0 ? "Paid" : numericFirst > 0 ? "Partially Paid" : "Due",
			lastVisit: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			nextSession: null,
			registeredAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			timeline: [{
				id: `t-${Date.now()}`,
				title: "Patient Registered",
				description: `Enrolled in ${serviceName} with ${paymentType}`,
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				icon: "registered",
				tone: "info"
			}]
		};
		addPatient(newPatientRecord);
		setTimeout(() => {
			setSubmitting(false);
			setSubmitted(true);
		}, 900);
	};
	const currentStep = STEPS[step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-2xl border-border p-0 shadow-2xl [&>button]:hidden",
			onInteractOutside: (e) => e.preventDefault(),
			onEscapeKeyDown: (e) => e.preventDefault(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Register New Patient"
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessScreen, {
				patientId,
				patientName,
				onClose: close
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full max-h-[95vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden w-64 shrink-0 flex-col border-r border-border bg-muted/30 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-foreground",
									children: "New Patient"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Registration Form"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Patient ID"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold tabular-nums text-primary",
										children: patientId
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 p-4 space-y-2",
							children: STEPS.map((s) => {
								const Icon = s.icon;
								const state = step === s.id ? "active" : step > s.id ? "done" : "todo";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleStepClick(s.id),
									className: cn("flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all cursor-pointer", state === "active" && `${s.border} ${s.bg}`, state === "done" && "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10", state === "todo" && "border-transparent bg-transparent opacity-50 hover:opacity-80"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", state === "active" && `${s.activeBg} text-white`, state === "done" && "bg-emerald-500 text-white", state === "todo" && "bg-muted text-muted-foreground"),
										children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4.5 w-4.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("text-[12.5px] font-semibold truncate", state === "active" ? s.color : state === "done" ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"),
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground truncate",
											children: s.subtitle
										})]
									})]
								}, s.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1",
								children: "Branch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] font-medium text-foreground",
								children: branch?.name ?? "Dhaka Main Branch"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-center gap-3 border-b border-border px-6 py-4", currentStep.bg),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white", currentStep.activeBg),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(currentStep.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-[15px] font-bold", currentStep.color),
										children: currentStep.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-muted-foreground",
										children: currentStep.subtitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 lg:hidden",
									children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2 rounded-full transition-all", s.id === step ? `${currentStep.activeBg} w-5` : s.id < step ? "bg-emerald-500 w-2" : "bg-muted w-2") }, s.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden lg:block text-[12px] font-medium text-muted-foreground mr-2",
									children: [
										"Step ",
										step,
										" / ",
										STEPS.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: close,
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer shadow-xs",
									"aria-label": "Close dialog",
									title: "Close dialog (X)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4.5 w-4.5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto px-6 py-5",
							children: [
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatientGuardian, {
									patientId,
									patientName,
									onPatientNameChange: (v) => {
										setPatientName(v);
										clearError("patientName");
									},
									dob,
									onDobChange: (v) => {
										setDob(v);
										clearError("dob");
									},
									age,
									gender,
									onGenderChange: (v) => {
										setGender(v);
										clearError("gender");
									},
									bloodGroup,
									onBloodGroupChange: setBloodGroup,
									phone,
									onPhoneChange: (v) => {
										setPhone(v);
										clearError("phone");
									},
									address,
									onAddressChange: (v) => {
										setAddress(v);
										clearError("address");
									},
									guardianName,
									onGuardianNameChange: (v) => {
										setGuardianName(v);
										clearError("guardianName");
									},
									guardianRelation,
									onGuardianRelationChange: (v) => {
										setGuardianRelation(v);
										clearError("guardianRelation");
									},
									guardianPhone,
									onGuardianPhoneChange: (v) => {
										setGuardianPhone(v);
										clearError("guardianPhone");
									},
									emergencyPhone,
									onEmergencyPhoneChange: setEmergencyPhone,
									errors
								}),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedical, {
									primaryConcern,
									onPrimaryConcernChange: setPrimaryConcern,
									referralDoctor,
									onReferralDoctorChange: setReferralDoctor,
									medicalHistory,
									onMedicalHistoryChange: setMedicalHistory
								}),
								step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepProgrammePayment, {
									serviceType,
									onServiceTypeChange: (v) => {
										setServiceType(v);
										setSelectedServiceId("");
										clearError("selectedServiceId");
									},
									selectedServiceId,
									onSelectedServiceIdChange: (v) => {
										setSelectedServiceId(v);
										clearError("selectedServiceId");
									},
									selectedService,
									basePrice,
									totalAmount,
									customAmount,
									onCustomAmountChange: setCustomAmount,
									isTherapy,
									isMonthlyPlan,
									paymentType,
									onPaymentTypeChange: (v) => {
										setPaymentType(v);
										setFirstPayment("");
										clearError("firstPayment");
									},
									firstPayment,
									onFirstPaymentChange: (v) => {
										setFirstPayment(v);
										clearError("firstPayment");
									},
									numericDue,
									paymentMethod,
									onPaymentMethodChange: (v) => {
										setPaymentMethod(v);
										clearError("paymentMethod");
									},
									errors
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-border bg-muted/20 px-6 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: close,
								className: "text-muted-foreground hover:text-foreground",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => setStep(step - 1),
									className: "gap-1.5",
									children: "Back"
								}), step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleContinue,
									className: cn("gap-1.5 px-5 cursor-pointer", currentStep.activeBg, "border-0 text-white hover:opacity-90"),
									children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: submit,
									disabled: submitting,
									className: "gap-2 bg-emerald-600 px-6 text-white hover:bg-emerald-700 cursor-pointer shadow-md",
									children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "Register Patient"]
								})]
							})]
						})
					]
				})]
			})]
		})
	});
}
function StepPatientGuardian({ patientId, patientName, onPatientNameChange, dob, onDobChange, age, gender, onGenderChange, bloodGroup, onBloodGroupChange, phone, onPhoneChange, address, onAddressChange, guardianName, onGuardianNameChange, guardianRelation, onGuardianRelationChange, guardianPhone, onGuardianPhoneChange, emergencyPhone, onEmergencyPhoneChange, errors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-6 w-6 place-items-center rounded-md bg-blue-500/15 text-blue-500",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[13px] font-bold text-foreground uppercase tracking-wide",
					children: "Patient Information"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-id",
						label: "Patient ID",
						hint: "Auto-generated unique identifier",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold tabular-nums text-primary text-sm",
								children: patientId
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-name",
						label: "Full Name",
						required: true,
						error: errors.patientName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "patient-name",
							placeholder: "e.g. Rahim Ahmed",
							value: patientName,
							onChange: (e) => onPatientNameChange(e.target.value),
							className: cn(errors.patientName && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-dob",
						label: "Date of Birth",
						required: true,
						error: errors.dob,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "patient-dob",
							type: "date",
							value: dob,
							onChange: (e) => onDobChange(e.target.value),
							className: cn(errors.dob && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-age",
						label: "Age",
						hint: "Calculated from date of birth",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "patient-age",
							readOnly: true,
							value: age ? `${age} years` : "",
							placeholder: "—",
							className: "bg-muted/40 text-muted-foreground"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-gender",
						label: "Gender",
						required: true,
						error: errors.gender,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: gender,
							onValueChange: onGenderChange,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "patient-gender",
								className: cn(errors.gender && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select gender" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GENDERS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: g,
								children: g
							}, g)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-blood",
						label: "Blood Group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: bloodGroup,
							onValueChange: onBloodGroupChange,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "patient-blood",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select blood group" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: BLOOD_GROUPS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: b,
								children: b
							}, b)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-phone",
						label: "Contact Number",
						required: true,
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "patient-phone",
							placeholder: "+880 17XX-XXXXXX",
							value: phone,
							onChange: (e) => onPhoneChange(e.target.value),
							className: cn(errors.phone && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "patient-address",
						label: "Address",
						required: true,
						error: errors.address,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "patient-address",
							rows: 2,
							placeholder: "House, road, area, city",
							value: address,
							onChange: (e) => onAddressChange(e.target.value),
							className: cn(errors.address && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-full border-t border-border" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 bg-background px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), "Guardian / Caregiver"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "guardian-name",
						label: "Guardian Name",
						required: true,
						error: errors.guardianName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "guardian-name",
							placeholder: "e.g. Md. Karim Ahmed",
							value: guardianName,
							onChange: (e) => onGuardianNameChange(e.target.value),
							className: cn(errors.guardianName && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "guardian-relation",
						label: "Relationship",
						required: true,
						error: errors.guardianRelation,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: guardianRelation,
							onValueChange: onGuardianRelationChange,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "guardian-relation",
								className: cn(errors.guardianRelation && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select relationship" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GUARDIAN_RELATIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: r,
								children: r
							}, r)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "guardian-phone",
						label: "Guardian Phone",
						required: true,
						error: errors.guardianPhone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "guardian-phone",
							placeholder: "+880 17XX-XXXXXX",
							value: guardianPhone,
							onChange: (e) => onGuardianPhoneChange(e.target.value),
							className: cn(errors.guardianPhone && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "emergency-contact",
						label: "Emergency Contact",
						hint: "Alternate number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "emergency-contact",
							placeholder: "+880 18XX-XXXXXX",
							value: emergencyPhone,
							onChange: (e) => onEmergencyPhoneChange(e.target.value)
						})
					})
				]
			})
		]
	});
}
function StepMedical({ primaryConcern, onPrimaryConcernChange, referralDoctor, onReferralDoctorChange, medicalHistory, onMedicalHistoryChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-rose-500/20 bg-rose-500/5 p-3.5 text-[12.5px] text-rose-700 dark:text-rose-400",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold",
				children: "ℹ️ Optional Step:"
			}), " Medical info helps therapists prepare better. You can skip and fill it later from the patient profile."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "primary-concern",
					label: "Primary Concern",
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "primary-concern",
						rows: 2,
						placeholder: "e.g. Delayed speech development and unclear articulation",
						value: primaryConcern,
						onChange: (e) => onPrimaryConcernChange(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "referral-doctor",
					label: "Referral Doctor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "referral-doctor",
						placeholder: "e.g. Dr. Sabrina Chowdhury",
						value: referralDoctor,
						onChange: (e) => onReferralDoctorChange(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "medical-history",
					label: "Medical History",
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "medical-history",
						rows: 3,
						placeholder: "Birth history, hearing status, previous therapy, medications…",
						value: medicalHistory,
						onChange: (e) => onMedicalHistoryChange(e.target.value)
					})
				})
			]
		})]
	});
}
function StepProgrammePayment({ serviceType, onServiceTypeChange, selectedServiceId, onSelectedServiceIdChange, selectedService, basePrice, totalAmount, customAmount, onCustomAmountChange, isTherapy, isMonthlyPlan, paymentType, onPaymentTypeChange, firstPayment, onFirstPaymentChange, numericDue, paymentMethod, onPaymentMethodChange, errors }) {
	const activePackages = PAYMENT_PACKAGES.filter((p) => p.status === "Active");
	const activeTherapies = THERAPY_TYPES.filter((t) => t.status === "Active");
	const activeDailySessions = getStoredDailySessions().filter((d) => d.status === "Active");
	const serviceList = serviceType === "package" ? activePackages : serviceType === "daily-session" ? activeDailySessions : activeTherapies;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-3",
				children: "Enroll In"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onServiceTypeChange("package"),
						className: cn("flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer", serviceType === "package" ? "border-emerald-500 bg-emerald-500/10" : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-9 w-9 place-items-center rounded-xl shrink-0", serviceType === "package" ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4.5 w-4.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-bold text-[12.5px] truncate", serviceType === "package" ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"),
								children: "Package"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: [activePackages.length, " plans"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onServiceTypeChange("therapy"),
						className: cn("flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer", serviceType === "therapy" ? "border-blue-500 bg-blue-500/10" : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-9 w-9 place-items-center rounded-xl shrink-0", serviceType === "therapy" ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-4.5 w-4.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-bold text-[12.5px] truncate", serviceType === "therapy" ? "text-blue-600 dark:text-blue-400" : "text-foreground"),
								children: "Therapy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: [activeTherapies.length, " types"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onServiceTypeChange("daily-session"),
						className: cn("flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer", serviceType === "daily-session" ? "border-purple-500 bg-purple-500/10" : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-9 w-9 place-items-center rounded-xl shrink-0", serviceType === "daily-session" ? "bg-purple-500 text-white" : "bg-muted text-muted-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4.5 w-4.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-bold text-[12.5px] truncate", serviceType === "daily-session" ? "text-purple-600 dark:text-purple-400" : "text-foreground"),
								children: "Daily Session"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: [activeDailySessions.length, " services"]
							})]
						})]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: [
						"Select ",
						serviceType === "package" ? "Package" : serviceType === "daily-session" ? "Daily Session" : "Therapy",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-rose-500",
							children: "*"
						})
					]
				}), errors.selectedServiceId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-rose-500",
					children: errors.selectedServiceId
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid gap-2.5 sm:grid-cols-2 rounded-xl p-1", errors.selectedServiceId && "ring-2 ring-rose-500/40 bg-rose-500/5"),
				children: serviceList.map((item) => {
					const price = serviceType === "package" || serviceType === "daily-session" ? item.price : item.fees?.[0]?.price ?? 0;
					const desc = serviceType === "package" ? item.durationLabel : serviceType === "daily-session" ? item.durationLabel : item.category;
					const isSelected = selectedServiceId === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectedServiceIdChange(item.id),
						className: cn("flex items-start gap-3 rounded-xl border-2 p-3.5 text-left transition-all w-full cursor-pointer", isSelected ? serviceType === "package" ? "border-emerald-500 bg-emerald-500/8 shadow-xs" : serviceType === "daily-session" ? "border-purple-500 bg-purple-500/8 shadow-xs" : "border-blue-500 bg-blue-500/8 shadow-xs" : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/20"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold", isSelected ? serviceType === "package" ? "bg-emerald-500 text-white" : serviceType === "daily-session" ? "bg-purple-500 text-white" : "bg-blue-500 text-white" : "bg-muted text-muted-foreground"),
							children: isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold text-foreground truncate",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11.5px] text-muted-foreground truncate",
									children: desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: cn("mt-1 text-[13px] font-bold tabular-nums", isSelected ? serviceType === "package" ? "text-emerald-600 dark:text-emerald-400" : serviceType === "daily-session" ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400" : "text-foreground"),
									children: [formatTaka(price), serviceType === "therapy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10.5px] text-muted-foreground font-normal",
										children: " / session"
									})]
								})
							]
						})]
					}, item.id);
				})
			})] }),
			selectedServiceId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-full border-t border-border" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 bg-background px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-3.5 w-3.5" }), "Payment Setup"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "total-amount",
							label: "Total Amount (৳)",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "total-amount",
								type: "number",
								placeholder: "e.g. 18500",
								value: customAmount,
								onChange: (e) => onCustomAmountChange(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "payment-type",
							label: "Payment Type",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: paymentType,
								onValueChange: onPaymentTypeChange,
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
								})] }) : serviceType === "package" && (selectedServiceId === "screening" || selectedServiceId === "assessment") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
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
						paymentType === "Installment" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "first-payment",
							label: "First Payment (Period 1)",
							required: true,
							error: errors.firstPayment,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "first-payment",
								type: "number",
								placeholder: "e.g. 6500",
								value: firstPayment,
								onChange: (e) => onFirstPaymentChange(e.target.value),
								className: cn(errors.firstPayment && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")
							})
						}),
						paymentType !== "Monthly" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "due-amount",
							label: "Due Amount",
							hint: "Auto-calculated",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "due-amount",
								readOnly: true,
								value: numericDue,
								className: cn("font-bold", numericDue === 0 ? "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/8 text-amber-600 dark:text-amber-400")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "payment-method",
							label: "Payment Method",
							required: true,
							error: errors.paymentMethod,
							className: paymentType === "Installment" ? "sm:col-span-2" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: paymentMethod,
								onValueChange: onPaymentMethodChange,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "payment-method",
									className: cn(errors.paymentMethod && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select payment method" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "Cash",
										children: "💵 Cash"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "Mobile Banking",
										children: "📱 bKash / Nagad"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "Card",
										children: "💳 Card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "Bank Transfer",
										children: "🏦 Bank Transfer"
									})
								] })]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-bold uppercase tracking-wider text-muted-foreground mb-3",
						children: "Payment Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[13px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Service"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: selectedService?.name ?? "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[13px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Total Amount"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold tabular-nums text-foreground",
									children: formatTaka(totalAmount)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[13px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Paying Now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold tabular-nums text-emerald-600 dark:text-emerald-400",
									children: formatTaka(paymentType === "Full Payment" ? totalAmount : parseFloat(firstPayment) || 0)
								})]
							}),
							paymentType !== "Monthly" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[13px] border-t border-border pt-2 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Due Later"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-bold tabular-nums", numericDue > 0 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"),
									children: formatTaka(numericDue)
								})]
							})
						]
					})]
				})
			] })
		]
	});
}
function SuccessScreen({ patientId, patientName, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center px-8 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-emerald-500" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-foreground",
				children: "Patient Registered!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: patientName || "New patient" }), " has been successfully registered and enrolled. Their profile and payment record are now active."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/8 px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "h-4 w-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-lg font-bold text-emerald-600 dark:text-emerald-400",
					children: patientId
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[11.5px] text-muted-foreground",
				children: "Patient ID — share this with the guardian"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onClose,
				className: "mt-8 bg-emerald-600 px-8 text-white hover:bg-emerald-700 gap-2 cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), "Done"]
			})
		]
	});
}
//#endregion
export { RegisterPatientDialog as t };
