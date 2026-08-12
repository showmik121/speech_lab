import { useEffect, useMemo, useState } from "react";
import { Check, ImagePlus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
} from "@/constants/patient-data";
import { PAYMENT_PACKAGES } from "@/constants/payment-data";
import { THERAPY_TYPES } from "@/constants/therapy-types";
import { formatTaka } from "@/constants/dashboard-data";
import { addRevenueTransaction } from "@/lib/revenue-store";

const STEPS = [
  { id: 1, title: "Personal", description: "Identity and contact details" },
  { id: 2, title: "Guardian", description: "Primary caregiver information" },
  { id: 3, title: "Medical", description: "Concerns and clinical history" },
  { id: 4, title: "Programme", description: "Therapy plan and scheduling" },
  { id: 5, title: "Payment", description: "Billing setup and fees" },
];

/**
 * UI-only multi-step patient registration flow.
 * No data is persisted — submission is simulated until the API is connected.
 */
export function RegisterPatientDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [dob, setDob] = useState("");

  const [serviceType, setServiceType] = useState<"package" | "therapy">("package");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");

  const age = useMemo(() => calculateAge(dob), [dob]);

  const selectedServicePrice = useMemo(() => {
    if (!selectedServiceId) return undefined;
    if (serviceType === "package") {
      const pkg = PAYMENT_PACKAGES.find((p) => p.id === selectedServiceId || p.name === selectedServiceId);
      return pkg ? pkg.price : undefined;
    } else {
      const thr = THERAPY_TYPES.find((t) => t.id === selectedServiceId || t.name === selectedServiceId);
      return thr && thr.fees.length > 0 ? thr.fees[0].price : undefined;
    }
  }, [serviceType, selectedServiceId]);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => setStep(1), 200);
  };

  const submit = () => {
    setSubmitting(true);
    const amount = selectedServicePrice ?? 15000;
    addRevenueTransaction({
      patientOrCustomerName: "Newly Registered Patient",
      category: "Patient Enrollment",
      amount,
      paidAmount: amount,
      dueAmount: 0,
      method: "Mobile Banking",
      remarks: "Patient Enrollment & Registration Fee",
    });
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const current = STEPS[step - 1];

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Register patient</DialogTitle>
          <DialogDescription>
            Complete five short steps to create a new patient record.
          </DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item, index) => {
            const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
            return (
              <li key={item.id} className="flex min-w-0 flex-1 items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise",
                    state === "current" && "border-primary bg-primary text-primary-foreground",
                    state === "done" && "border-success/40 bg-success/12 text-success",
                    state === "todo" && "border-border bg-muted/50 text-muted-foreground",
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : item.id}
                </span>
                <span className="hidden min-w-0 lg:block">
                  <span
                    className={cn(
                      "block truncate text-[13px] font-medium",
                      state === "todo" ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="lg:hidden">
          <p className="text-[13px] font-medium text-foreground">
            Step {step} of {STEPS.length} — {current.title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? (
          <StepPersonal dob={dob} onDobChange={setDob} age={age} />
        ) : step === 2 ? (
          <StepGuardian />
        ) : step === 3 ? (
          <StepMedical />
        ) : step === 4 ? (
          <StepProgramme
            serviceType={serviceType}
            onServiceTypeChange={setServiceType}
            selectedServiceId={selectedServiceId}
            onSelectedServiceIdChange={setSelectedServiceId}
          />
        ) : (
          <StepPayment
            key={`${serviceType}-${selectedServiceId}`}
            selectedServicePrice={selectedServicePrice}
            selectedServiceId={selectedServiceId}
            serviceType={serviceType}
          />
        )}

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <div className="flex items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < STEPS.length ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={submit} disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Register patient
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StepPersonal({
  dob,
  onDobChange,
  age,
}: {
  dob: string;
  onDobChange: (value: string) => void;
  age: string;
}) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField
        id="patient-photo"
        label="Patient photo"
        hint="JPG or PNG, up to 2 MB"
        className="sm:col-span-2"
      >
        <div className="flex items-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground">
            <ImagePlus className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-foreground">Upload placeholder</p>
            <p className="text-[12.5px] text-muted-foreground">
              Photo upload is enabled once storage is connected.
            </p>
          </div>
        </div>
      </FormField>

      <FormField id="patient-name" label="Full name" required>
        <Input id="patient-name" placeholder="e.g. Rahim Ahmed" />
      </FormField>
      <FormField id="patient-dob" label="Date of birth" required>
        <Input
          id="patient-dob"
          type="date"
          value={dob}
          onChange={(event) => onDobChange(event.target.value)}
        />
      </FormField>
      <FormField id="patient-age" label="Age" hint="Calculated automatically from date of birth">
        <Input
          id="patient-age"
          readOnly
          value={age ? `${age} years` : ""}
          placeholder="—"
          className="bg-muted/40"
        />
      </FormField>
      <FormField id="patient-gender" label="Gender" required>
        <Select>
          <SelectTrigger id="patient-gender">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {GENDERS.map((gender) => (
              <SelectItem key={gender} value={gender}>
                {gender}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="patient-blood" label="Blood group">
        <Select>
          <SelectTrigger id="patient-blood">
            <SelectValue placeholder="Select blood group" />
          </SelectTrigger>
          <SelectContent>
            {BLOOD_GROUPS.map((group) => (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="patient-phone" label="Contact number" required>
        <Input id="patient-phone" placeholder="+880 17XX-XXXXXX" />
      </FormField>
      <FormField id="patient-address" label="Address" required className="sm:col-span-2">
        <Textarea id="patient-address" rows={2} placeholder="House, road, area, city, postcode" />
      </FormField>
    </div>
  );
}

function StepGuardian() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="guardian-name" label="Guardian name" required>
        <Input id="guardian-name" placeholder="e.g. Md. Karim Ahmed" />
      </FormField>
      <FormField id="guardian-relation" label="Relationship" required>
        <Select>
          <SelectTrigger id="guardian-relation">
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent>
            {GUARDIAN_RELATIONS.map((relation) => (
              <SelectItem key={relation} value={relation}>
                {relation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="guardian-phone" label="Phone" required>
        <Input id="guardian-phone" placeholder="+880 17XX-XXXXXX" />
      </FormField>
      <FormField id="guardian-email" label="Email">
        <Input id="guardian-email" type="email" placeholder="guardian@example.com" />
      </FormField>
      <FormField id="guardian-occupation" label="Occupation">
        <Input id="guardian-occupation" placeholder="e.g. Bank Officer" />
      </FormField>
      <FormField
        id="emergency-contact"
        label="Emergency contact"
        hint="Alternate number reachable during sessions"
        required
      >
        <Input id="emergency-contact" placeholder="+880 18XX-XXXXXX" />
      </FormField>
    </div>
  );
}

function StepMedical() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="primary-concern" label="Primary concern" required className="sm:col-span-2">
        <Textarea
          id="primary-concern"
          rows={2}
          placeholder="e.g. Delayed speech development and unclear articulation"
        />
      </FormField>
      <FormField
        id="diagnosis"
        label="Diagnosis"
        hint="Structured diagnosis codes arrive with the clinical module"
      >
        <Select disabled>
          <SelectTrigger id="diagnosis">
            <SelectValue placeholder="Available after assessment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="placeholder">Placeholder</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="referral-doctor" label="Referral doctor">
        <Input id="referral-doctor" placeholder="e.g. Dr. Sabrina Chowdhury" />
      </FormField>
      <FormField id="medical-history" label="Medical history" className="sm:col-span-2">
        <Textarea
          id="medical-history"
          rows={3}
          placeholder="Birth history, hearing status, previous therapy, medications…"
        />
      </FormField>
      <FormField id="medical-notes" label="Notes" className="sm:col-span-2">
        <Textarea id="medical-notes" rows={2} placeholder="Internal notes for the clinical team" />
      </FormField>
    </div>
  );
}

function StepProgramme({
  serviceType,
  onServiceTypeChange,
  selectedServiceId,
  onSelectedServiceIdChange,
}: {
  serviceType: "package" | "therapy";
  onServiceTypeChange: (val: "package" | "therapy") => void;
  selectedServiceId: string;
  onSelectedServiceIdChange: (val: string) => void;
}) {
  const handleServiceTypeChange = (value: "package" | "therapy") => {
    onServiceTypeChange(value);
    onSelectedServiceIdChange("");
  };

  return (
    <div className="space-y-5 py-2">
      {/* 2 Selectable Cards: Left (Package), Right (Therapy) */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleServiceTypeChange("package")}
          className={cn(
            "flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer",
            serviceType === "package"
              ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
              : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"
          )}
        >
          <span className="text-base font-semibold">Package</span>
        </button>

        <button
          type="button"
          onClick={() => handleServiceTypeChange("therapy")}
          className={cn(
            "flex h-20 items-center justify-center rounded-xl border-2 p-4 text-center transition-all cursor-pointer",
            serviceType === "therapy"
              ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
              : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-muted/30"
          )}
        >
          <span className="text-base font-semibold">Therapy</span>
        </button>
      </div>

      {/* Services dropdown (Full Width below cards) */}
      <FormField id="services-dropdown" label="Services" required className="w-full">
        <Select
          value={selectedServiceId}
          onValueChange={(val) => onSelectedServiceIdChange(val)}
        >
          <SelectTrigger id="services-dropdown" className="w-full">
            <SelectValue
              placeholder={
                serviceType === "package" ? "Select package service..." : "Select therapy service..."
              }
            />
          </SelectTrigger>
          <SelectContent>
            {serviceType === "package"
              ? PAYMENT_PACKAGES.map((pkg) => (
                  <SelectItem key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </SelectItem>
                ))
              : THERAPY_TYPES.map((thr) => (
                  <SelectItem key={thr.id} value={thr.id}>
                    {thr.name}
                  </SelectItem>
                ))}
          </SelectContent>
        </Select>
      </FormField>
    </div>
  );
}

function StepPayment({
  selectedServicePrice,
  selectedServiceId,
  serviceType,
}: {
  selectedServicePrice?: number;
  selectedServiceId?: string;
  serviceType?: "package" | "therapy";
}) {
  const isTherapy = serviceType === "therapy";
  const MONTHLY_PLAN_IDS = ["monthly-individual", "monthly-group"];
  const isMonthlyPlan =
    serviceType === "package" && !!selectedServiceId && MONTHLY_PLAN_IDS.includes(selectedServiceId);

  // Screening & Assessment: no Monthly option — only Full Payment and Installment
  const NO_MONTHLY_IDS = ["screening", "assessment"];
  const isNoMonthlyPlan =
    serviceType === "package" && !!selectedServiceId && NO_MONTHLY_IDS.includes(selectedServiceId);

  const [totalAmount, setTotalAmount] = useState<string>(
    selectedServicePrice ? selectedServicePrice.toString() : ""
  );
  const [paymentType, setPaymentType] = useState<"Full Payment" | "Monthly" | "Installment">(() => {
    if (isTherapy) return "Full Payment";
    if (isMonthlyPlan) return "Monthly";
    return "Full Payment"; // Screening, Assessment, and all others
  });
  const [firstPayment, setFirstPayment] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    if (selectedServicePrice) {
      setTotalAmount(selectedServicePrice.toString());
    }
  }, [selectedServicePrice]);

  // When switching serviceType or serviceId, reset payment type appropriately
  useEffect(() => {
    if (isTherapy) {
      setPaymentType("Full Payment");
    } else if (isMonthlyPlan) {
      setPaymentType("Monthly");
    } else {
      setPaymentType("Full Payment");
    }
    setFirstPayment("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedServiceId, serviceType, isTherapy, isMonthlyPlan]);

  const numericTotal = parseFloat(totalAmount) || 0;
  // For Full Payment & Therapy: total is paid upfront with 0 due amount
  const numericFirst =
    paymentType === "Full Payment"
      ? numericTotal
      : parseFloat(firstPayment) || 0;
  const numericDue = Math.max(0, numericTotal - numericFirst);
  const installmentPeriodAmount = Math.max(0, numericDue / 2);

  return (
    <div className="space-y-5 py-2">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Total Amount */}
        <FormField id="total-amount" label="Total Amount (৳)" required>
          <Input
            id="total-amount"
            type="number"
            placeholder="e.g. 18500"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </FormField>

        {/* Payment Type */}
        <FormField id="payment-type" label="Payment Type" required>
          <Select
            value={paymentType}
            onValueChange={(val) => {
              setPaymentType(val as "Full Payment" | "Monthly" | "Installment");
              setFirstPayment("");
            }}
            disabled={isTherapy}
          >
            <SelectTrigger id="payment-type">
              <SelectValue placeholder="Select payment type" />
            </SelectTrigger>
            <SelectContent>
              {isTherapy ? (
                // Therapy selection: strictly Full Payment only (No due payment)
                <SelectItem value="Full Payment">Full Payment (No Due)</SelectItem>
              ) : isMonthlyPlan ? (
                // Monthly plan packages: only Monthly or Full Payment
                <>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Full Payment">Full Payment</SelectItem>
                </>
              ) : isNoMonthlyPlan ? (
                // Screening & Assessment: only Full Payment or Installment
                <>
                  <SelectItem value="Full Payment">Full Payment</SelectItem>
                  <SelectItem value="Installment">Installment (3 Periods)</SelectItem>
                </>
              ) : (
                // Other packages: Full Payment, Monthly, Installment
                <>
                  <SelectItem value="Full Payment">Full Payment</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Installment">Installment (3 Periods)</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </FormField>

        {/* First Payment — only for Installment (not Monthly, not Full Payment) */}
        {paymentType === "Installment" ? (
          <>
            <FormField id="first-payment" label="First Payment (Period 1)" required>
              <Input
                id="first-payment"
                type="number"
                placeholder="e.g. 6500"
                value={firstPayment}
                onChange={(e) => setFirstPayment(e.target.value)}
              />
            </FormField>
            <FormField id="due-payment" label="Due Payment" hint="Calculated automatically">
              <Input
                id="due-payment"
                type="number"
                readOnly
                placeholder="0"
                value={numericDue}
                className="bg-muted/40 font-semibold text-amber-600 dark:text-amber-400"
              />
            </FormField>
          </>
        ) : paymentType === "Full Payment" ? (
          <FormField id="due-payment-full" label="Due Payment">
            <Input
              id="due-payment-full"
              readOnly
              value="0"
              className="bg-muted/40 font-semibold text-emerald-600 dark:text-emerald-400"
            />
          </FormField>
        ) : null /* Monthly: no Due Payment field */}

        {/* Payment Method */}
        <FormField
          id="payment-method"
          label="Payment Method"
          required
          className={paymentType === "Installment" ? "sm:col-span-2" : ""}
        >
          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cash">Cash</SelectItem>
              <SelectItem value="Bkash">Bkash</SelectItem>
              <SelectItem value="Nagad">Nagad</SelectItem>
              <SelectItem value="Mobile Banking">Mobile Banking</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>

      {/* Monthly Payment Schedule Policy card */}
      {paymentType === "Monthly" ? (
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[13.5px] font-semibold text-primary">
              Monthly Payment Schedule Policy
            </p>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Days 1–5 of each month
            </span>
          </div>
          <p className="text-[12.5px] text-muted-foreground">
            Monthly payments must be settled within the{" "}
            <strong>1st to 5th day</strong> of every month.
          </p>
          <div className="rounded-lg border border-border bg-background p-2.5 text-[12.5px]">
            <span className="text-muted-foreground block text-[11px]">Total Monthly Fee</span>
            <span className="font-bold text-foreground">{formatTaka(numericTotal)}</span>
          </div>
        </div>
      ) : paymentType === "Installment" ? (
        /* 3-Period Installment Breakdown */
        <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
          <p className="text-[13px] font-semibold text-foreground">
            3-Period Installment Schedule Breakdown
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                Period 1 (First Payment)
              </p>
              <p className="mt-1 text-[16px] font-bold text-primary">
                {formatTaka(numericFirst)}
              </p>
              <span className="text-[11px] text-success font-medium">Due Today</span>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                Period 2 (Installment 2)
              </p>
              <p className="mt-1 text-[16px] font-bold text-foreground">
                {formatTaka(installmentPeriodAmount)}
              </p>
              <span className="text-[11px] text-muted-foreground">Due in 30 Days</span>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                Period 3 (Installment 3)
              </p>
              <p className="mt-1 text-[16px] font-bold text-foreground">
                {formatTaka(installmentPeriodAmount)}
              </p>
              <span className="text-[11px] text-muted-foreground">Due in 60 Days</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
