import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  BadgeDollarSign,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardPlus,
  CreditCard,
  Hash,
  Heart,
  Loader2,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Stethoscope,
  User,
  UserCog,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import {
  BLOOD_GROUPS,
  GENDERS,
  GUARDIAN_RELATIONS,
  calculateAge,
  type Patient,
} from "@/constants/patient-data";
import { PAYMENT_PACKAGES } from "@/constants/payment-data";
import { THERAPY_TYPES } from "@/constants/therapy-types";
import { getStoredDailySessions, useDailySessionStore } from "@/lib/daily-session-store";
import { formatTaka } from "@/constants/dashboard-data";
import { addRevenueTransaction } from "@/lib/revenue-store";
import { addPatient } from "@/lib/patient-store";
import { getActiveBranch } from "@/lib/manager-session";

/* ─────────────────────────────────────────────
   Step Config — 3 streamlined steps
   ───────────────────────────────────────────── */
const STEPS = [
  {
    id: 1,
    key: "patient",
    title: "Patient & Guardian",
    subtitle: "Identity, contact & caregiver",
    icon: User,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    activeBg: "bg-blue-500",
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
    activeBg: "bg-rose-500",
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
    activeBg: "bg-emerald-500",
  },
];

/* ─────────────────────────────────────────────
   Generate a unique patient ID
   ───────────────────────────────────────────── */
function generatePatientId(branchId?: string): string {
  const BRANCH_CODES: Record<string, string> = {
    "dhaka-main": "DHK",
    "gulshan": "GLS",
    "uttara": "UTT",
    "chittagong": "CTG",
    "sylhet": "SYL",
  };
  const branchCode = branchId ? (BRANCH_CODES[branchId] ?? "BRN") : "DHK";
  const timestamp = Date.now();
  const seq = Math.floor((timestamp % 100000) / 10); // 4-digit from timestamp
  return `PT-${branchCode}-${String(seq).padStart(4, "0")}`;
}

/* ─────────────────────────────────────────────
   Main Dialog Component
   ───────────────────────────────────────────── */
export function RegisterPatientDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const branch = getActiveBranch();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Patient identity
  const [patientId] = useState(() => generatePatientId(branch?.id));
  const [patientName, setPatientName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Guardian
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  // Medical
  const [primaryConcern, setPrimaryConcern] = useState("");
  const [referralDoctor, setReferralDoctor] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  // Programme & Payment
  const [serviceType, setServiceType] = useState<"package" | "therapy" | "daily-session">("package");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");
  const [paymentType, setPaymentType] = useState<"Full Payment" | "Monthly" | "Installment">("Full Payment");
  const [firstPayment, setFirstPayment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const age = useMemo(() => calculateAge(dob), [dob]);

  // Clear a specific field error
  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Derive selected service info
  const selectedService = useMemo(() => {
    if (!selectedServiceId) return null;
    if (serviceType === "package") {
      return PAYMENT_PACKAGES.find((p) => p.id === selectedServiceId) ?? null;
    }
    if (serviceType === "daily-session") {
      return getStoredDailySessions().find((d) => d.id === selectedServiceId) ?? null;
    }
    return THERAPY_TYPES.find((t) => t.id === selectedServiceId) ?? null;
  }, [serviceType, selectedServiceId]);

  const basePrice = useMemo(() => {
    if (!selectedService) return 0;
    if (serviceType === "package" || serviceType === "daily-session") {
      return (selectedService as any).price;
    }
    const thr = selectedService as typeof THERAPY_TYPES[0];
    return thr.fees.length > 0 ? thr.fees[0].price : 0;
  }, [selectedService, serviceType]);

  const totalAmount = parseFloat(customAmount) || basePrice;

  const isTherapy = serviceType === "therapy" || serviceType === "daily-session";
  const MONTHLY_PLAN_IDS = ["monthly-individual", "monthly-group"];
  const isMonthlyPlan = serviceType === "package" && MONTHLY_PLAN_IDS.includes(selectedServiceId);

  const numericFirst = paymentType === "Full Payment" ? totalAmount : parseFloat(firstPayment) || 0;
  const numericDue = Math.max(0, totalAmount - numericFirst);

  // Reset payment type when service changes
  useEffect(() => {
    if (isTherapy) setPaymentType("Full Payment");
    else if (isMonthlyPlan) setPaymentType("Monthly");
    else setPaymentType("Full Payment");
    setFirstPayment("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedServiceId, serviceType]);

  // Sync custom amount when service changes
  useEffect(() => {
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

  /* ─────────────────────────────────────────────
     Validation
     ───────────────────────────────────────────── */
  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

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
      toast.error("Required Fields Missing", {
        description: "Please fill in all required patient and guardian fields marked with *.",
      });
      return false;
    }
    return true;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedServiceId) {
      newErrors.selectedServiceId = "Please select a package or therapy service";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    if (paymentType === "Installment") {
      const firstNum = parseFloat(firstPayment) || 0;
      if (!firstPayment.trim() || firstNum <= 0) {
        newErrors.firstPayment = "First payment is required and must be greater than 0";
      } else if (firstNum > totalAmount) {
        newErrors.firstPayment = `First payment cannot exceed total amount (৳${totalAmount.toLocaleString()})`;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Programme & Payment Incomplete", {
        description: "Please select a service and payment method before completing registration.",
      });
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    if (step === 1) {
      if (!validateStep1()) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleStepClick = (targetStep: number) => {
    if (targetStep > step) {
      if (step === 1 && !validateStep1()) return;
    }
    setStep(targetStep);
  };

  const submit = () => {
    if (!validateStep3()) return;

    setSubmitting(true);

    const serviceName = selectedService
      ? "name" in selectedService
        ? selectedService.name
        : ""
      : "No programme";

    // 1. Add revenue transaction
    addRevenueTransaction({
      patientOrCustomerName: patientName || "New Patient",
      category: "Patient Enrollment",
      amount: totalAmount,
      paidAmount: numericFirst,
      dueAmount: numericDue,
      method: (paymentMethod as any) || "Cash",
      remarks: `Registration ${patientId} — ${serviceName}`,
    });

    // 2. Add patient record to patient-store
    const newPatientRecord: Patient = {
      id: `pt-record-${Date.now()}`,
      code: patientId,
      name: patientName || "New Patient",
      dob: dob || new Date().toISOString().slice(0, 10),
      age: parseInt(age) || 5,
      gender: (gender as any) || "Male",
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
        occupation: "",
      },
      emergencyContact: {
        name: guardianName || "Caregiver",
        relation: guardianRelation || "Parent",
        phone: emergencyPhone || guardianPhone || phone || "+880 1700-000000",
      },
      medical: {
        primaryConcern: primaryConcern || "Speech and language evaluation",
        diagnosis: "Provisional",
        history: medicalHistory || "None",
        referralDoctor: referralDoctor || "Self-referred",
        notes: "",
      },
      program: {
        therapyType: serviceType === "package" ? "Package Enrollment" : serviceName,
        program: serviceName,
        assessmentDate: new Date().toISOString().slice(0, 10),
        therapist: "Assigned Therapist",
        expectedStart: new Date().toISOString().slice(0, 10),
        sessionsCompleted: 0,
        sessionsPlanned: 12,
      },
      billing: {
        paymentType: paymentType as any,
        packageName: serviceName,
        registrationFee: 0,
        totalBilled: totalAmount,
        totalPaid: numericFirst,
        due: numericDue,
        lastPaymentDate: new Date().toISOString().slice(0, 10),
        lastPaymentAmount: numericFirst,
        remarks: `Payment via ${paymentMethod}`,
      },
      followUp: {
        note: "Initial registration completed",
        date: new Date().toISOString().slice(0, 10),
        by: "Front Desk",
      },
      status: "Active",
      paymentStatus: numericDue === 0 ? "Paid" : numericFirst > 0 ? "Partially Paid" : "Due",
      lastVisit: new Date().toISOString().slice(0, 10),
      nextSession: null,
      registeredAt: new Date().toISOString().slice(0, 10),
      timeline: [
        {
          id: `t-${Date.now()}`,
          title: "Patient Registered",
          description: `Enrolled in ${serviceName} with ${paymentType}`,
          date: new Date().toISOString().slice(0, 10),
          icon: "registered",
          tone: "info",
        },
      ],
    };

    addPatient(newPatientRecord);

    if (numericFirst > 0) {
      addRevenueTransaction({
        patientOrCustomerName: patientName.trim(),
        category: serviceType === "package" ? "Package Subscription" : "Therapy Session",
        amount: totalAmount,
        paidAmount: numericFirst,
        dueAmount: numericDue,
        method: (paymentMethod as any) || "Cash",
        remarks: `Registration Payment (${serviceName})`,
      });
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const currentStep = STEPS[step - 1];

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent
        className="max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-2xl border-border p-0 shadow-2xl [&>button]:hidden"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Register New Patient</DialogTitle>

        {submitted ? (
          <SuccessScreen patientId={patientId} patientName={patientName} onClose={close} />
        ) : (
          <div className="flex h-full max-h-[95vh]">
            {/* ── Left Sidebar ── */}
            <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-muted/30 lg:flex">
              {/* Header */}
              <div className="border-b border-border p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <UserCog className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-foreground">New Patient</p>
                    <p className="text-[11px] text-muted-foreground">Registration Form</p>
                  </div>
                </div>
                {/* Patient ID Badge */}
                <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                  <Hash className="h-3.5 w-3.5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Patient ID</p>
                    <p className="text-[13px] font-bold tabular-nums text-primary">{patientId}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <nav className="flex-1 p-4 space-y-2">
                {STEPS.map((s) => {
                  const Icon = s.icon;
                  const state = step === s.id ? "active" : step > s.id ? "done" : "todo";
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleStepClick(s.id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all cursor-pointer",
                        state === "active" && `${s.border} ${s.bg}`,
                        state === "done" && "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10",
                        state === "todo" && "border-transparent bg-transparent opacity-50 hover:opacity-80"
                      )}
                    >
                      <span className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                        state === "active" && `${s.activeBg} text-white`,
                        state === "done" && "bg-emerald-500 text-white",
                        state === "todo" && "bg-muted text-muted-foreground",
                      )}>
                        {state === "done"
                          ? <CheckCircle2 className="h-4.5 w-4.5" />
                          : <Icon className="h-4 w-4" />}
                      </span>
                      <div className="min-w-0">
                        <p className={cn("text-[12.5px] font-semibold truncate",
                          state === "active" ? s.color : state === "done" ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
                        )}>
                          {s.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">{s.subtitle}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Branch Info */}
              <div className="border-t border-border p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Branch</p>
                <p className="text-[12.5px] font-medium text-foreground">{branch?.name ?? "Dhaka Main Branch"}</p>
              </div>
            </aside>

            {/* ── Right Main Content ── */}
            <div className="flex min-w-0 flex-1 flex-col">
              {/* Step Header */}
              <div className={cn(
                "flex items-center gap-3 border-b border-border px-6 py-4",
                currentStep.bg
              )}>
                <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white", currentStep.activeBg)}>
                  <currentStep.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className={cn("text-[15px] font-bold", currentStep.color)}>{currentStep.title}</p>
                  <p className="text-[12px] text-muted-foreground">{currentStep.subtitle}</p>
                </div>
                {/* Mobile: step indicator */}
                <div className="flex items-center gap-1.5 lg:hidden">
                  {STEPS.map((s) => (
                    <span key={s.id} className={cn(
                      "h-2 rounded-full transition-all",
                      s.id === step ? `${currentStep.activeBg} w-5` : s.id < step ? "bg-emerald-500 w-2" : "bg-muted w-2"
                    )} />
                  ))}
                </div>
                <span className="hidden lg:block text-[12px] font-medium text-muted-foreground mr-2">
                  Step {step} / {STEPS.length}
                </span>

                {/* ── Prominent Working Close (X) Button ── */}
                <button
                  type="button"
                  onClick={close}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer shadow-xs"
                  aria-label="Close dialog"
                  title="Close dialog (X)"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                {step === 1 && (
                  <StepPatientGuardian
                    patientId={patientId}
                    patientName={patientName} onPatientNameChange={(v) => { setPatientName(v); clearError("patientName"); }}
                    dob={dob} onDobChange={(v) => { setDob(v); clearError("dob"); }}
                    age={age}
                    gender={gender} onGenderChange={(v) => { setGender(v); clearError("gender"); }}
                    bloodGroup={bloodGroup} onBloodGroupChange={setBloodGroup}
                    phone={phone} onPhoneChange={(v) => { setPhone(v); clearError("phone"); }}
                    address={address} onAddressChange={(v) => { setAddress(v); clearError("address"); }}
                    guardianName={guardianName} onGuardianNameChange={(v) => { setGuardianName(v); clearError("guardianName"); }}
                    guardianRelation={guardianRelation} onGuardianRelationChange={(v) => { setGuardianRelation(v); clearError("guardianRelation"); }}
                    guardianPhone={guardianPhone} onGuardianPhoneChange={(v) => { setGuardianPhone(v); clearError("guardianPhone"); }}
                    emergencyPhone={emergencyPhone} onEmergencyPhoneChange={setEmergencyPhone}
                    errors={errors}
                  />
                )}
                {step === 2 && (
                  <StepMedical
                    primaryConcern={primaryConcern} onPrimaryConcernChange={setPrimaryConcern}
                    referralDoctor={referralDoctor} onReferralDoctorChange={setReferralDoctor}
                    medicalHistory={medicalHistory} onMedicalHistoryChange={setMedicalHistory}
                  />
                )}
                {step === 3 && (
                  <StepProgrammePayment
                    serviceType={serviceType} onServiceTypeChange={(v) => { setServiceType(v); setSelectedServiceId(""); clearError("selectedServiceId"); }}
                    selectedServiceId={selectedServiceId} onSelectedServiceIdChange={(v) => { setSelectedServiceId(v); clearError("selectedServiceId"); }}
                    selectedService={selectedService}
                    basePrice={basePrice}
                    totalAmount={totalAmount}
                    customAmount={customAmount} onCustomAmountChange={setCustomAmount}
                    isTherapy={isTherapy}
                    isMonthlyPlan={isMonthlyPlan}
                    paymentType={paymentType} onPaymentTypeChange={(v) => { setPaymentType(v as any); setFirstPayment(""); clearError("firstPayment"); }}
                    firstPayment={firstPayment} onFirstPaymentChange={(v) => { setFirstPayment(v); clearError("firstPayment"); }}
                    numericDue={numericDue}
                    paymentMethod={paymentMethod} onPaymentMethodChange={(v) => { setPaymentMethod(v); clearError("paymentMethod"); }}
                    errors={errors}
                  />
                )}
              </div>

              {/* Footer Nav */}
              <div className="flex items-center justify-between border-t border-border bg-muted/20 px-6 py-4">
                <Button variant="ghost" onClick={close} className="text-muted-foreground hover:text-foreground">
                  Cancel
                </Button>
                <div className="flex items-center gap-3">
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)} className="gap-1.5">
                      Back
                    </Button>
                  )}
                  {step < STEPS.length ? (
                    <Button
                      onClick={handleContinue}
                      className={cn("gap-1.5 px-5 cursor-pointer", currentStep.activeBg, "border-0 text-white hover:opacity-90")}
                    >
                      Continue
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={submit}
                      disabled={submitting}
                      className="gap-2 bg-emerald-600 px-6 text-white hover:bg-emerald-700 cursor-pointer shadow-md"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ShieldCheck className="h-4 w-4" />
                      )}
                      Register Patient
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─────────────────────────────────────────────
   Step 1 — Patient & Guardian (combined)
   ───────────────────────────────────────────── */
function StepPatientGuardian({
  patientId,
  patientName, onPatientNameChange,
  dob, onDobChange, age,
  gender, onGenderChange,
  bloodGroup, onBloodGroupChange,
  phone, onPhoneChange,
  address, onAddressChange,
  guardianName, onGuardianNameChange,
  guardianRelation, onGuardianRelationChange,
  guardianPhone, onGuardianPhoneChange,
  emergencyPhone, onEmergencyPhoneChange,
  errors,
}: {
  patientId: string;
  patientName: string; onPatientNameChange: (v: string) => void;
  dob: string; onDobChange: (v: string) => void; age: string;
  gender: string; onGenderChange: (v: string) => void;
  bloodGroup: string; onBloodGroupChange: (v: string) => void;
  phone: string; onPhoneChange: (v: string) => void;
  address: string; onAddressChange: (v: string) => void;
  guardianName: string; onGuardianNameChange: (v: string) => void;
  guardianRelation: string; onGuardianRelationChange: (v: string) => void;
  guardianPhone: string; onGuardianPhoneChange: (v: string) => void;
  emergencyPhone: string; onEmergencyPhoneChange: (v: string) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      {/* Patient Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-blue-500/15 text-blue-500">
            <User className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-[13px] font-bold text-foreground uppercase tracking-wide">Patient Information</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Auto-generated patient ID — read-only */}
          <FormField id="patient-id" label="Patient ID" hint="Auto-generated unique identifier">
            <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5">
              <Hash className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-bold tabular-nums text-primary text-sm">{patientId}</span>
            </div>
          </FormField>

          <FormField id="patient-name" label="Full Name" required error={errors.patientName}>
            <Input
              id="patient-name"
              placeholder="e.g. Rahim Ahmed"
              value={patientName}
              onChange={(e) => onPatientNameChange(e.target.value)}
              className={cn(errors.patientName && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
            />
          </FormField>

          <FormField id="patient-dob" label="Date of Birth" required error={errors.dob}>
            <Input
              id="patient-dob"
              type="date"
              value={dob}
              onChange={(e) => onDobChange(e.target.value)}
              className={cn(errors.dob && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
            />
          </FormField>

          <FormField id="patient-age" label="Age" hint="Calculated from date of birth">
            <Input
              id="patient-age"
              readOnly
              value={age ? `${age} years` : ""}
              placeholder="—"
              className="bg-muted/40 text-muted-foreground"
            />
          </FormField>

          <FormField id="patient-gender" label="Gender" required error={errors.gender}>
            <Select value={gender} onValueChange={onGenderChange}>
              <SelectTrigger id="patient-gender" className={cn(errors.gender && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                {GENDERS.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField id="patient-blood" label="Blood Group">
            <Select value={bloodGroup} onValueChange={onBloodGroupChange}>
              <SelectTrigger id="patient-blood">
                <SelectValue placeholder="Select blood group" />
              </SelectTrigger>
              <SelectContent>
                {BLOOD_GROUPS.map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField id="patient-phone" label="Contact Number" required error={errors.phone}>
            <Input
              id="patient-phone"
              placeholder="+880 17XX-XXXXXX"
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              className={cn(errors.phone && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
            />
          </FormField>

          <FormField id="patient-address" label="Address" required error={errors.address} className="sm:col-span-2">
            <Textarea
              id="patient-address"
              rows={2}
              placeholder="House, road, area, city"
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              className={cn(errors.address && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
            />
          </FormField>
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="flex items-center gap-1.5 bg-background px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            Guardian / Caregiver
          </span>
        </div>
      </div>

      {/* Guardian Section */}
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="guardian-name" label="Guardian Name" required error={errors.guardianName}>
          <Input
            id="guardian-name"
            placeholder="e.g. Md. Karim Ahmed"
            value={guardianName}
            onChange={(e) => onGuardianNameChange(e.target.value)}
            className={cn(errors.guardianName && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
          />
        </FormField>

        <FormField id="guardian-relation" label="Relationship" required error={errors.guardianRelation}>
          <Select value={guardianRelation} onValueChange={onGuardianRelationChange}>
            <SelectTrigger id="guardian-relation" className={cn(errors.guardianRelation && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}>
              <SelectValue placeholder="Select relationship" />
            </SelectTrigger>
            <SelectContent>
              {GUARDIAN_RELATIONS.map((r) => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        <FormField id="guardian-phone" label="Guardian Phone" required error={errors.guardianPhone}>
          <Input
            id="guardian-phone"
            placeholder="+880 17XX-XXXXXX"
            value={guardianPhone}
            onChange={(e) => onGuardianPhoneChange(e.target.value)}
            className={cn(errors.guardianPhone && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
          />
        </FormField>

        <FormField id="emergency-contact" label="Emergency Contact" hint="Alternate number">
          <Input
            id="emergency-contact"
            placeholder="+880 18XX-XXXXXX"
            value={emergencyPhone}
            onChange={(e) => onEmergencyPhoneChange(e.target.value)}
          />
        </FormField>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Step 2 — Medical Info
   ───────────────────────────────────────────── */
function StepMedical({
  primaryConcern, onPrimaryConcernChange,
  referralDoctor, onReferralDoctorChange,
  medicalHistory, onMedicalHistoryChange,
}: {
  primaryConcern: string; onPrimaryConcernChange: (v: string) => void;
  referralDoctor: string; onReferralDoctorChange: (v: string) => void;
  medicalHistory: string; onMedicalHistoryChange: (v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-3.5 text-[12.5px] text-rose-700 dark:text-rose-400">
        <span className="font-semibold">ℹ️ Optional Step:</span> Medical info helps therapists prepare better. You can skip and fill it later from the patient profile.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="primary-concern" label="Primary Concern" className="sm:col-span-2">
          <Textarea
            id="primary-concern"
            rows={2}
            placeholder="e.g. Delayed speech development and unclear articulation"
            value={primaryConcern}
            onChange={(e) => onPrimaryConcernChange(e.target.value)}
          />
        </FormField>

        <FormField id="referral-doctor" label="Referral Doctor">
          <Input
            id="referral-doctor"
            placeholder="e.g. Dr. Sabrina Chowdhury"
            value={referralDoctor}
            onChange={(e) => onReferralDoctorChange(e.target.value)}
          />
        </FormField>

        <FormField id="medical-history" label="Medical History" className="sm:col-span-2">
          <Textarea
            id="medical-history"
            rows={3}
            placeholder="Birth history, hearing status, previous therapy, medications…"
            value={medicalHistory}
            onChange={(e) => onMedicalHistoryChange(e.target.value)}
          />
        </FormField>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Step 3 — Programme & Payment (combined)
   ───────────────────────────────────────────── */
function StepProgrammePayment({
  serviceType, onServiceTypeChange,
  selectedServiceId, onSelectedServiceIdChange,
  selectedService,
  basePrice,
  totalAmount,
  customAmount, onCustomAmountChange,
  isTherapy, isMonthlyPlan,
  paymentType, onPaymentTypeChange,
  firstPayment, onFirstPaymentChange,
  numericDue,
  paymentMethod, onPaymentMethodChange,
  errors,
}: {
  serviceType: "package" | "therapy" | "daily-session"; onServiceTypeChange: (v: "package" | "therapy" | "daily-session") => void;
  selectedServiceId: string; onSelectedServiceIdChange: (v: string) => void;
  selectedService: any;
  basePrice: number;
  totalAmount: number;
  customAmount: string; onCustomAmountChange: (v: string) => void;
  isTherapy: boolean; isMonthlyPlan: boolean;
  paymentType: "Full Payment" | "Monthly" | "Installment"; onPaymentTypeChange: (v: string) => void;
  firstPayment: string; onFirstPaymentChange: (v: string) => void;
  numericDue: number;
  paymentMethod: string; onPaymentMethodChange: (v: string) => void;
  errors: Record<string, string>;
}) {
  const activePackages = PAYMENT_PACKAGES.filter((p) => p.status === "Active");
  const activeTherapies = THERAPY_TYPES.filter((t) => t.status === "Active");
  const activeDailySessions = getStoredDailySessions().filter((d) => d.status === "Active");

  const serviceList =
    serviceType === "package"
      ? activePackages
      : serviceType === "daily-session"
      ? activeDailySessions
      : activeTherapies;

  return (
    <div className="space-y-6">
      {/* Service Type Toggle */}
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Enroll In</p>
        <div className="grid grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => onServiceTypeChange("package")}
            className={cn(
              "flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer",
              serviceType === "package"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
            )}
          >
            <span className={cn("grid h-9 w-9 place-items-center rounded-xl shrink-0",
              serviceType === "package" ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
            )}>
              <Package className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className={cn("font-bold text-[12.5px] truncate", serviceType === "package" ? "text-emerald-600 dark:text-emerald-400" : "text-foreground")}>
                Package
              </p>
              <p className="text-[11px] text-muted-foreground truncate">{activePackages.length} plans</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onServiceTypeChange("therapy")}
            className={cn(
              "flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer",
              serviceType === "therapy"
                ? "border-blue-500 bg-blue-500/10"
                : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
            )}
          >
            <span className={cn("grid h-9 w-9 place-items-center rounded-xl shrink-0",
              serviceType === "therapy" ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"
            )}>
              <Stethoscope className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className={cn("font-bold text-[12.5px] truncate", serviceType === "therapy" ? "text-blue-600 dark:text-blue-400" : "text-foreground")}>
                Therapy
              </p>
              <p className="text-[11px] text-muted-foreground truncate">{activeTherapies.length} types</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onServiceTypeChange("daily-session")}
            className={cn(
              "flex items-center gap-2.5 rounded-xl border-2 p-3 text-left transition-all cursor-pointer",
              serviceType === "daily-session"
                ? "border-purple-500 bg-purple-500/10"
                : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
            )}
          >
            <span className={cn("grid h-9 w-9 place-items-center rounded-xl shrink-0",
              serviceType === "daily-session" ? "bg-purple-500 text-white" : "bg-muted text-muted-foreground"
            )}>
              <CalendarDays className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className={cn("font-bold text-[12.5px] truncate", serviceType === "daily-session" ? "text-purple-600 dark:text-purple-400" : "text-foreground")}>
                Daily Session
              </p>
              <p className="text-[11px] text-muted-foreground truncate">{activeDailySessions.length} services</p>
            </div>
          </button>
        </div>
      </div>

      {/* Service List — Card Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
            Select {serviceType === "package" ? "Package" : serviceType === "daily-session" ? "Daily Session" : "Therapy"} <span className="text-rose-500">*</span>
          </p>
          {errors.selectedServiceId && (
            <p className="text-xs font-semibold text-rose-500">{errors.selectedServiceId}</p>
          )}
        </div>
        <div className={cn("grid gap-2.5 sm:grid-cols-2 rounded-xl p-1", errors.selectedServiceId && "ring-2 ring-rose-500/40 bg-rose-500/5")}>
          {serviceList.map((item: any) => {
            const price =
              serviceType === "package" || serviceType === "daily-session"
                ? item.price
                : (item.fees?.[0]?.price ?? 0);
            const desc =
              serviceType === "package"
                ? item.durationLabel
                : serviceType === "daily-session"
                ? item.durationLabel
                : item.category;
            const isSelected = selectedServiceId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectedServiceIdChange(item.id)}
                className={cn(
                  "flex items-start gap-3 rounded-xl border-2 p-3.5 text-left transition-all w-full cursor-pointer",
                  isSelected
                    ? serviceType === "package"
                      ? "border-emerald-500 bg-emerald-500/8 shadow-xs"
                      : serviceType === "daily-session"
                      ? "border-purple-500 bg-purple-500/8 shadow-xs"
                      : "border-blue-500 bg-blue-500/8 shadow-xs"
                    : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/20"
                )}
              >
                <span className={cn(
                  "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold",
                  isSelected
                    ? serviceType === "package"
                      ? "bg-emerald-500 text-white"
                      : serviceType === "daily-session"
                      ? "bg-purple-500 text-white"
                      : "bg-blue-500 text-white"
                    : "bg-muted text-muted-foreground"
                )}>
                  {isSelected ? <CheckCircle2 className="h-4 w-4" /> : <Activity className="h-3.5 w-3.5" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-foreground truncate">{item.name}</p>
                  <p className="text-[11.5px] text-muted-foreground truncate">{desc}</p>
                  <p className={cn("mt-1 text-[13px] font-bold tabular-nums",
                    isSelected
                      ? serviceType === "package"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : serviceType === "daily-session"
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-blue-600 dark:text-blue-400"
                      : "text-foreground"
                  )}>
                    {formatTaka(price)}
                    {serviceType === "therapy" && <span className="text-[10.5px] text-muted-foreground font-normal"> / session</span>}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Payment Section — only show if service selected */}
      {selectedServiceId && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="flex items-center gap-1.5 bg-background px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                Payment Setup
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Total Amount */}
            <FormField id="total-amount" label="Total Amount (৳)" required hint={isTherapy ? "Fixed service fee" : undefined}>
              <Input
                id="total-amount"
                type="number"
                placeholder="e.g. 18500"
                value={customAmount}
                onChange={(e) => onCustomAmountChange(e.target.value)}
                readOnly={isTherapy}
                className={cn(
                  isTherapy && "bg-muted/60 text-foreground font-bold cursor-not-allowed select-none border-border/80"
                )}
              />
            </FormField>

            {/* Payment Type */}
            <FormField id="payment-type" label="Payment Type" required>
              <Select
                value={paymentType}
                onValueChange={onPaymentTypeChange}
                disabled={isTherapy}
              >
                <SelectTrigger id="payment-type">
                  <SelectValue placeholder="Select payment type" />
                </SelectTrigger>
                <SelectContent>
                  {isTherapy ? (
                    <SelectItem value="Full Payment">Full Payment (No Due)</SelectItem>
                  ) : isMonthlyPlan ? (
                    <>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Full Payment">Full Payment</SelectItem>
                    </>
                  ) : (serviceType === "package" && (selectedServiceId === "screening" || selectedServiceId === "assessment")) ? (
                    <>
                      <SelectItem value="Full Payment">Full Payment</SelectItem>
                      <SelectItem value="Installment">Installment (3 Periods)</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="Full Payment">Full Payment</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Installment">Installment (3 Periods)</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </FormField>

            {/* First Payment — Installment only */}
            {paymentType === "Installment" && (
              <FormField id="first-payment" label="First Payment (Period 1)" required error={errors.firstPayment}>
                <Input
                  id="first-payment"
                  type="number"
                  placeholder="e.g. 6500"
                  value={firstPayment}
                  onChange={(e) => onFirstPaymentChange(e.target.value)}
                  className={cn(errors.firstPayment && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}
                />
              </FormField>
            )}

            {/* Due Amount */}
            {paymentType !== "Monthly" && (
              <FormField id="due-amount" label="Due Amount" hint="Auto-calculated">
                <Input
                  id="due-amount"
                  readOnly
                  value={numericDue}
                  className={cn(
                    "font-bold cursor-not-allowed select-none",
                    numericDue === 0
                      ? "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                      : "bg-amber-500/8 text-amber-600 dark:text-amber-400 border-amber-500/30"
                  )}
                />
              </FormField>
            )}

            {/* Payment Method */}
            <FormField
              id="payment-method"
              label="Payment Method"
              required
              error={errors.paymentMethod}
              className={paymentType === "Installment" ? "sm:col-span-2" : ""}
            >
              <Select value={paymentMethod} onValueChange={onPaymentMethodChange}>
                <SelectTrigger id="payment-method" className={cn(errors.paymentMethod && "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5")}>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cash">💵 Cash</SelectItem>
                  <SelectItem value="Mobile Banking">📱 bKash / Nagad</SelectItem>
                  <SelectItem value="Card">💳 Card</SelectItem>
                  <SelectItem value="Bank Transfer">🏦 Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>

          {/* Payment Summary Card */}
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <p className="text-[12px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Payment Summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Service</span>
                <span className="font-semibold text-foreground">{selectedService?.name ?? "—"}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Total Amount</span>
                <span className="font-bold tabular-nums text-foreground">{formatTaka(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-muted-foreground">Paying Now</span>
                <span className="font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
                  {formatTaka(paymentType === "Full Payment" ? totalAmount : parseFloat(firstPayment) || 0)}
                </span>
              </div>
              {paymentType !== "Monthly" && (
                <div className="flex justify-between text-[13px] border-t border-border pt-2 mt-2">
                  <span className="text-muted-foreground">Due Later</span>
                  <span className={cn("font-bold tabular-nums", numericDue > 0 ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400")}>
                    {formatTaka(numericDue)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Success Screen
   ───────────────────────────────────────────── */
function SuccessScreen({ patientId, patientName, onClose }: { patientId: string; patientName: string; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-emerald-500/15">
        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">Patient Registered!</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">
        <strong>{patientName || "New patient"}</strong> has been successfully registered and enrolled. Their profile and payment record are now active.
      </p>
      <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/8 px-5 py-3">
        <Hash className="h-4 w-4 text-emerald-500" />
        <span className="font-mono text-lg font-bold text-emerald-600 dark:text-emerald-400">{patientId}</span>
      </div>
      <p className="mt-2 text-[11.5px] text-muted-foreground">Patient ID — share this with the guardian</p>
      <Button onClick={onClose} className="mt-8 bg-emerald-600 px-8 text-white hover:bg-emerald-700 gap-2 cursor-pointer">
        <CheckCircle2 className="h-4 w-4" />
        Done
      </Button>
    </div>
  );
}
