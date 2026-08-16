import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  CheckCircle2,
  CalendarClock,
  ChevronRight,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Plus,
  Printer,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  User,
  UserSearch,
  Users,
  Wallet,
  Zap,
  ReceiptText,
  TrendingDown,
  CalendarDays,
  BadgeCheck,
  Clock3,
  Banknote,
  ArrowRight,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { PatientTimeline } from "@/components/patients/patient-timeline";
import { PatientAvatar } from "@/components/patients/patient-table";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  PATIENT_STATUS_TONE,
  PAYMENT_STATUS_TONE,
  THERAPISTS,
  THERAPY_TYPES,
} from "@/constants/patient-data";
import { usePatientStore, checkPatientEligibility } from "@/lib/patient-store";

const TITLE = "Patient Details & Service Eligibility — Speech Therapy ERP";
const DESCRIPTION =
  "Search patient by Patient ID to inspect registration details, check service eligibility, and manage session records.";

export const Route = createFileRoute("/manager/patient-details/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: PatientDetailsPage,
});

// ── Installment Schedule Generator ─────────────────────────────────────────
function generateInstallmentSchedule(
  totalAmount: number,
  paidAmount: number,
  startDate: string,
  paymentType: string,
  installments: number = 3
) {
  const due = Math.max(totalAmount - paidAmount, 0);
  if (due === 0 || !paymentType?.toLowerCase().includes("installment")) return null;

  const perInstallment = Math.ceil(due / installments);
  const start = new Date(startDate || new Date().toISOString().split("T")[0]);

  return Array.from({ length: installments }, (_, i) => {
    const dueDate = new Date(start);
    dueDate.setMonth(dueDate.getMonth() + i);
    const isPaid = paidAmount >= totalAmount - (installments - i) * perInstallment;
    const isOverdue = !isPaid && dueDate < new Date();
    return {
      number: i + 1,
      amount: Math.min(perInstallment, due - i * perInstallment > 0 ? due - i * perInstallment : 0),
      dueDate: dueDate.toISOString().split("T")[0],
      status: isPaid ? "Paid" : isOverdue ? "Overdue" : "Pending",
    };
  });
}

function PatientDetailsPage() {
  const {
    patients,
    serviceLogs,
    markServiceDone,
  } = usePatientStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState<string>("");
  const [activeTab, setActiveTab] = useState("overview");
  const [showDropdown, setShowDropdown] = useState(false);

  // Service Done Dialog State
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [sessionNotes, setSessionNotes] = useState("");
  const [sessionTherapist, setSessionTherapist] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [overrideReason, setOverrideReason] = useState("");
  const [isSubmittingService, setIsSubmittingService] = useState(false);

  // Payment Dialog State
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [paymentNote, setPaymentNote] = useState("");
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);

  // Search filter
  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q || q.length < 2) return [];
    return patients.filter((p) =>
      [p.code, p.name, p.phone, p.guardian?.name, p.guardian?.phone]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [patients, searchTerm]);

  // Selected Patient
  const patient = useMemo(() => {
    if (!selectedPatientId) return null;
    return patients.find((p) => p.id === selectedPatientId) ?? null;
  }, [patients, selectedPatientId]);

  const eligibility = useMemo(() => {
    return patient ? checkPatientEligibility(patient) : null;
  }, [patient]);

  const patientLogs = useMemo(() => {
    if (!patient) return [];
    return serviceLogs.filter(
      (log) => log.patientId === patient.id || log.patientCode === patient.code
    );
  }, [serviceLogs, patient]);

  const progressPercent =
    patient && patient.program?.sessionsPlanned > 0
      ? Math.min(
          100,
          Math.round(
            ((patient.program?.sessionsCompleted || 0) /
              patient.program?.sessionsPlanned) *
              100
          )
        )
      : 0;

  // Installment schedule
  const installmentSchedule = useMemo(() => {
    if (!patient) return null;
    return generateInstallmentSchedule(
      patient.billing?.totalBilled || 0,
      patient.billing?.totalPaid || 0,
      patient.registeredAt,
      patient.billing?.paymentType || "",
      3
    );
  }, [patient]);

  const handleOpenServiceModal = () => {
    if (!patient) return;
    setSessionNotes(
      `Session #${(patient.program?.sessionsCompleted || 0) + 1} completed smoothly.`
    );
    setSessionTherapist(patient.program?.therapist || THERAPISTS[0] || "");
    setSessionType(patient.program?.therapyType || THERAPY_TYPES[0] || "");
    setOverrideReason("");
    setServiceDialogOpen(true);
  };

  const handleConfirmServiceDone = () => {
    if (!patient) return;
    setIsSubmittingService(true);
    setTimeout(() => {
      markServiceDone(patient.id, {
        notes: sessionNotes,
        therapist: sessionTherapist,
        serviceType: sessionType,
        overrideReason: !eligibility?.isEligible ? overrideReason : undefined,
      });
      setIsSubmittingService(false);
      setServiceDialogOpen(false);
    }, 400);
  };

  const handleOpenPaymentModal = () => {
    if (!patient) return;
    const dueAmount = patient.billing?.due || 0;
    setPaymentAmount(String(dueAmount));
    setPaymentMethod("Cash");
    setPaymentNote("");
    setPaymentDialogOpen(true);
  };

  const handleConfirmPayment = () => {
    if (!patient) return;
    setIsSubmittingPayment(true);
    setTimeout(() => {
      setIsSubmittingPayment(false);
      setPaymentDialogOpen(false);
    }, 500);
  };

  const handleSelectResult = (id: string) => {
    setSelectedPatientId(id);
    setSearchTerm("");
    setShowDropdown(false);
    setActiveTab("overview");
  };

  const handleClear = () => {
    setSelectedPatientId("");
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <PageHeader
        title="Patient Details"
        description="Search by Patient ID to view registration details, service eligibility, and manage session records."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Patient Details" },
        ]}
        actions={
          patient ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleClear}
                className="gap-1.5 text-xs"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                New Search
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
                className="gap-1.5 text-xs"
              >
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>
          ) : null
        }
      />

      {/* ── SEARCH SECTION ── */}
      {!patient ? (
        /* ─── INITIAL: Full-Screen Centered Search ─── */
        <div className="flex flex-col items-center justify-center py-16 px-4">
          {/* Icon + Title */}
          <div className="mb-10 text-center space-y-4">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-primary/10 border border-primary/20 shadow-lg">
              <UserSearch className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Patient Lookup
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5 max-w-sm mx-auto leading-relaxed">
                Enter a Patient ID, name, or phone number to retrieve the full profile and service eligibility status.
              </p>
            </div>
          </div>

          {/* Large Search Box */}
          <div className="relative w-full max-w-2xl">
            <div className="relative flex items-center">
              <Search className="pointer-events-none absolute left-5 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                autoFocus
                placeholder="Search by Patient ID (e.g. PT-DHK-1001), Name, or Phone..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="h-14 rounded-2xl pl-14 pr-6 text-sm font-medium border-2 border-border focus-visible:border-primary shadow-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-card"
              />
            </div>

            {/* Autocomplete Dropdown */}
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-border bg-popover shadow-2xl overflow-hidden">
                <p className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border">
                  {searchResults.length} Patient{searchResults.length > 1 ? "s" : ""} Found
                </p>
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.map((p) => {
                    const elig = checkPatientEligibility(p);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectResult(p.id)}
                        className="flex w-full items-center justify-between px-4 py-3.5 text-left hover:bg-muted/60 transition-colors border-b border-border/50 last:border-b-0"
                      >
                        <div className="flex items-center gap-3.5">
                          <PatientAvatar name={p.name} className="h-9 w-9 text-sm shrink-0" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-primary">
                                {p.code}
                              </span>
                              <span className="font-semibold text-sm text-foreground">
                                {p.name}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {p.gender} · {p.age} yrs · {p.phone}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {!elig.isEligible ? (
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 px-2.5 py-1 text-[11px] font-semibold text-rose-600">
                              <ShieldAlert className="h-3.5 w-3.5" />
                              Due ৳{elig.dueAmount}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                              <ShieldCheck className="h-3.5 w-3.5" />
                              Eligible
                            </span>
                          )}
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* No Results */}
            {showDropdown && searchTerm.trim().length >= 2 && searchResults.length === 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-border bg-popover shadow-2xl p-6 text-center">
                <p className="text-sm font-semibold text-foreground">No patient found</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try searching with a different Patient ID, name, or phone number.
                </p>
              </div>
            )}
          </div>

          {/* Helper Hint */}
          <p className="mt-5 text-xs text-muted-foreground">
            Example IDs:{" "}
            <button onClick={() => handleSelectResult(patients[0]?.id)} className="font-mono font-semibold text-primary hover:underline">{patients[0]?.code}</button>,{" "}
            <button onClick={() => handleSelectResult(patients[1]?.id)} className="font-mono font-semibold text-rose-500 hover:underline">{patients[1]?.code}</button>
          </p>
        </div>
      ) : (
        /* ─── PATIENT FOUND: Detail View ─── */
        <div className="space-y-5 animate-in fade-in-50 duration-300">

          {/* ── Compact search bar while patient is loaded ── */}
          <div className="relative w-full max-w-lg">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search another patient..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="h-10 pl-10 pr-4 text-xs bg-card border-border focus-visible:ring-primary"
            />
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-72 overflow-y-auto rounded-xl border border-border bg-popover p-1.5 shadow-xl">
                {searchResults.map((p) => {
                  const elig = checkPatientEligibility(p);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectResult(p.id)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-primary text-[11px]">{p.code}</span>
                        <span className="font-semibold text-foreground">{p.name}</span>
                      </div>
                      {!elig.isEligible ? (
                        <span className="text-[10px] font-bold text-rose-600">Due ৳{elig.dueAmount}</span>
                      ) : (
                        <span className="text-[10px] font-bold text-emerald-600">Eligible</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── ELIGIBILITY ALERT BANNER ── */}
          {!eligibility?.isEligible ? (
            <div className="relative overflow-hidden rounded-2xl border border-rose-500/30 bg-rose-500/5">
              {/* decorative stripe */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-rose-400 to-rose-600 rounded-l-2xl" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 pl-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rose-500/15 text-rose-600">
                    <ShieldAlert className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-rose-700 dark:text-rose-400">
                        Service Ineligible
                      </span>
                      <Badge className="bg-rose-600/90 text-white text-[10px] font-bold uppercase tracking-wide">
                        Unpaid Due: {formatTaka(eligibility?.dueAmount || patient.billing?.due || 0)}
                      </Badge>
                    </div>
                    <p className="text-xs text-rose-600/80 dark:text-rose-400/80 mt-0.5">
                      {eligibility?.reason}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    size="sm"
                    onClick={handleOpenPaymentModal}
                    className="bg-rose-600 hover:bg-rose-700 text-white text-xs gap-1.5"
                  >
                    <CreditCard className="h-3.5 w-3.5" />
                    Collect Payment
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleOpenServiceModal}
                    className="text-xs border-rose-500/30 text-rose-600 hover:bg-rose-500/10"
                  >
                    Override & Done
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-l-2xl" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 pl-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                      Eligible for Today's Service
                    </span>
                    <p className="text-xs text-emerald-600/80 mt-0.5">
                      {patient.name} — all dues cleared. Ready for session.
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={handleOpenServiceModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs gap-1.5 shrink-0"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Mark Service Done
                </Button>
              </div>
            </div>
          )}

          {/* ── Patient Profile Card ── */}
          <Card className="overflow-hidden border-border/70 shadow-card">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <PatientAvatar name={patient.name} className="h-16 w-16 text-lg shrink-0 ring-2 ring-border ring-offset-2 ring-offset-card" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-foreground tracking-tight">{patient.name}</h2>
                      <span className="font-mono text-[11px] font-bold text-primary bg-primary/8 border border-primary/20 px-2 py-0.5 rounded-md">
                        {patient.code}
                      </span>
                      <StatusBadge tone={PATIENT_STATUS_TONE[patient.status]} label={patient.status} />
                      <StatusBadge tone={PAYMENT_STATUS_TONE[patient.paymentStatus]} label={patient.paymentStatus} />
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span><strong className="text-foreground font-semibold">Age:</strong> {patient.age} yrs</span>
                      <span><strong className="text-foreground font-semibold">Gender:</strong> {patient.gender}</span>
                      <span><strong className="text-foreground font-semibold">Blood:</strong> {patient.bloodGroup}</span>
                      <span><strong className="text-foreground font-semibold">Branch:</strong> {patient.branch}</span>
                      <span><strong className="text-foreground font-semibold">Registered:</strong> {formatDate(patient.registeredAt)}</span>
                    </div>
                  </div>
                </div>
                {/* Only Follow-up here — Collect Payment is ONLY in the eligibility banner */}
                <Button variant="outline" size="sm" asChild className="h-9 text-xs gap-1.5 shrink-0">
                  <Link to="/manager/follow-up">
                    <PhoneCall className="h-4 w-4 text-violet-500" />
                    Follow-up
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ── Session Progress Card ── */}
          <Card className="shadow-card border-border/70">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Package & Session Progress
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {patient.billing?.packageName || patient.program?.program}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">Therapy Type</p>
                  <p className="mt-1.5 font-bold text-foreground text-sm leading-tight">{patient.program?.therapyType || "Speech Therapy"}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Therapist: {patient.program?.therapist}</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">Sessions</p>
                  <p className="mt-1.5 font-bold text-foreground text-lg tabular-nums leading-none">
                    {patient.program?.sessionsCompleted || 0}{" "}
                    <span className="text-muted-foreground font-normal text-sm">/ {patient.program?.sessionsPlanned || 0}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {(patient.program?.sessionsPlanned || 0) - (patient.program?.sessionsCompleted || 0)} remaining
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">Balance Due</p>
                  <p className={`mt-1.5 font-bold text-lg tabular-nums leading-none ${patient.billing?.due > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {formatTaka(patient.billing?.due || 0)}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">{patient.billing?.paymentType}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground font-medium">Completion</span>
                  <span className="font-bold text-foreground tabular-nums">{progressPercent}%</span>
                </div>
                <Progress
                  value={progressPercent}
                  className="h-2 rounded-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-blue-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* ── Detail Tabs ── */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
            <TabsList className="w-full justify-start overflow-x-auto gap-0.5">
              <TabsTrigger value="overview" className="gap-1.5 text-xs">
                <User className="h-3.5 w-3.5" /> Registration
              </TabsTrigger>
              <TabsTrigger value="medical" className="gap-1.5 text-xs">
                <Stethoscope className="h-3.5 w-3.5" /> Medical
              </TabsTrigger>
              <TabsTrigger value="billing" className="gap-1.5 text-xs">
                <Wallet className="h-3.5 w-3.5" /> Billing Ledger
              </TabsTrigger>
              <TabsTrigger value="logs" className="gap-1.5 text-xs">
                <Activity className="h-3.5 w-3.5" /> Service Logs ({patientLogs.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <WidgetCard title="Personal Information" description="Demographics & contact" icon={User} showMenu={false}>
                  <dl className="grid gap-4 sm:grid-cols-2 text-xs">
                    <Field label="Full Name" value={patient.name} />
                    <Field label="Patient ID" value={patient.code} />
                    <Field label="Date of Birth" value={formatDate(patient.dob)} />
                    <Field label="Age" value={`${patient.age} years`} />
                    <Field label="Gender" value={patient.gender} />
                    <Field label="Blood Group" value={patient.bloodGroup} />
                    <Field icon={Phone} label="Phone" value={patient.phone} />
                    <Field icon={Mail} label="Email" value={patient.email} />
                    <Field icon={MapPin} label="Address" value={patient.address} className="sm:col-span-2" />
                  </dl>
                </WidgetCard>
                <WidgetCard title="Guardian & Emergency" description="Caregiver contact details" icon={Users} showMenu={false}>
                  <dl className="grid gap-4 sm:grid-cols-2 text-xs">
                    <Field label="Guardian Name" value={patient.guardian.name} />
                    <Field label="Relationship" value={patient.guardian.relation} />
                    <Field icon={Phone} label="Guardian Phone" value={patient.guardian.phone} />
                    <Field icon={Mail} label="Guardian Email" value={patient.guardian.email} />
                    <Field label="Occupation" value={patient.guardian.occupation} />
                    <Field label="Registered" value={formatDate(patient.registeredAt)} />
                  </dl>
                  <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/6 p-3.5">
                    <div className="flex items-start gap-2.5 text-xs">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <p className="font-bold text-foreground">Emergency Contact</p>
                        <p className="mt-0.5 text-muted-foreground">
                          {patient.emergencyContact.name} ({patient.emergencyContact.relation}) ·{" "}
                          <span className="font-mono font-semibold">{patient.emergencyContact.phone}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </WidgetCard>
              </div>
            </TabsContent>

            <TabsContent value="medical">
              <WidgetCard title="Medical & Clinical Summary" description="Clinical details from registration" icon={Stethoscope} showMenu={false}>
                <dl className="grid gap-5 sm:grid-cols-2 text-xs">
                  <Field label="Primary Concern" value={patient.medical.primaryConcern} />
                  <Field label="Provisional Diagnosis" value={patient.medical.diagnosis} />
                  <Field label="Referral Doctor" value={patient.medical.referralDoctor} />
                  <Field label="Blood Group" value={patient.bloodGroup} />
                  <Field label="Medical History" value={patient.medical.history} className="sm:col-span-2" />
                  <Field label="Clinical Notes" value={patient.medical.notes} className="sm:col-span-2" />
                </dl>
              </WidgetCard>
            </TabsContent>

            <TabsContent value="billing" className="space-y-5">
              {/* Financial Summary */}
              <WidgetCard title="Financial Ledger" description="Full payment breakdown and dues" icon={Wallet} showMenu={false}>
                <div className="grid gap-3 sm:grid-cols-3 mb-5">
                  <BillingStatCard
                    label="Total Billed"
                    value={formatTaka(patient.billing?.totalBilled || 0)}
                    icon={ReceiptText}
                    tone="default"
                  />
                  <BillingStatCard
                    label="Total Paid"
                    value={formatTaka(patient.billing?.totalPaid || 0)}
                    icon={BadgeCheck}
                    tone="success"
                  />
                  <BillingStatCard
                    label="Outstanding"
                    value={formatTaka(patient.billing?.due || 0)}
                    icon={TrendingDown}
                    tone={patient.billing?.due > 0 ? "danger" : "success"}
                  />
                </div>
                <dl className="grid gap-4 sm:grid-cols-2 text-xs border-t border-border pt-4">
                  <Field label="Package" value={patient.billing?.packageName || patient.program?.program} />
                  <Field label="Payment Type" value={patient.billing?.paymentType} />
                  <Field label="Registration Fee" value={formatTaka(patient.billing?.registrationFee || 0)} />
                  <Field
                    label="Last Payment"
                    value={`${formatTaka(patient.billing?.lastPaymentAmount || 0)} on ${formatDate(patient.billing?.lastPaymentDate)}`}
                  />
                  <Field label="Remarks" value={patient.billing?.remarks || "None"} className="sm:col-span-2" />
                </dl>

                {/* Payment progress bar */}
                {(patient.billing?.totalBilled || 0) > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-muted-foreground font-medium">Payment Collected</span>
                      <span className="font-bold text-foreground tabular-nums">
                        {Math.round(((patient.billing?.totalPaid || 0) / (patient.billing?.totalBilled || 1)) * 100)}%
                      </span>
                    </div>
                    <Progress
                      value={Math.round(((patient.billing?.totalPaid || 0) / (patient.billing?.totalBilled || 1)) * 100)}
                      className="h-2 rounded-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-400"
                    />
                  </div>
                )}
              </WidgetCard>

              {/* ── Professional Installment Schedule ── */}
              {installmentSchedule && (
                <Card className="shadow-card border-border/70 overflow-hidden">
                  <CardHeader className="pb-3 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-sm font-semibold flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-blue-500" />
                          Installment Payment Schedule
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Structured payment plan based on outstanding balance
                        </p>
                      </div>
                      {patient.billing?.due > 0 && (
                        <Button
                          size="sm"
                          onClick={handleOpenPaymentModal}
                          className="text-xs gap-1.5 h-8"
                        >
                          <CreditCard className="h-3.5 w-3.5" />
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Summary row */}
                    <div className="grid grid-cols-3 border-b border-border bg-muted/20">
                      <div className="px-4 py-3 text-xs">
                        <p className="text-muted-foreground">Total Due</p>
                        <p className="font-bold text-rose-600 tabular-nums">{formatTaka(patient.billing?.due || 0)}</p>
                      </div>
                      <div className="px-4 py-3 text-xs border-x border-border">
                        <p className="text-muted-foreground">Installments</p>
                        <p className="font-bold text-foreground">3 Monthly</p>
                      </div>
                      <div className="px-4 py-3 text-xs">
                        <p className="text-muted-foreground">Per Installment</p>
                        <p className="font-bold text-foreground tabular-nums">
                          {formatTaka(Math.ceil((patient.billing?.due || 0) / 3))}
                        </p>
                      </div>
                    </div>

                    {/* Installment rows */}
                    <div className="divide-y divide-border">
                      {installmentSchedule.map((inst) => (
                        <div
                          key={inst.number}
                          className="flex items-center justify-between px-4 py-3.5 hover:bg-muted/20 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold
                              ${inst.status === "Paid" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" :
                                inst.status === "Overdue" ? "bg-rose-500/10 text-rose-600 border border-rose-500/20" :
                                "bg-blue-500/10 text-blue-600 border border-blue-500/20"}`}>
                              {inst.number}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-foreground">
                                Installment #{inst.number}
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Clock3 className="h-3 w-3 text-muted-foreground" />
                                <p className="text-[11px] text-muted-foreground">Due: {formatDate(inst.dueDate)}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold tabular-nums text-foreground">
                              {formatTaka(inst.amount)}
                            </span>
                            <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10.5px] font-bold border
                              ${inst.status === "Paid" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" :
                                inst.status === "Overdue" ? "bg-rose-500/10 text-rose-600 border-rose-500/20" :
                                "bg-blue-500/10 text-blue-500 border-blue-500/20"}`}>
                              {inst.status === "Paid" && <CheckCircle2 className="h-3 w-3" />}
                              {inst.status === "Overdue" && <AlertTriangle className="h-3 w-3" />}
                              {inst.status === "Pending" && <Clock3 className="h-3 w-3" />}
                              {inst.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer note */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/10 border-t border-border">
                      <Info className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <p className="text-[11px] text-muted-foreground">
                        Installment dates are calculated from registration date. Contact the branch manager to restructure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Non-installment CTA if due but no schedule */}
              {!installmentSchedule && patient.billing?.due > 0 && (
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600">
                      <Banknote className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Payment Pending</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Outstanding balance of {formatTaka(patient.billing.due)} needs to be collected.
                      </p>
                    </div>
                  </div>
                  <Button size="sm" onClick={handleOpenPaymentModal} className="text-xs gap-1.5 shrink-0">
                    <CreditCard className="h-3.5 w-3.5" />
                    Collect Payment
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="logs" className="space-y-5">
              <WidgetCard title="Recorded Service Logs" description="Sessions marked as completed by manager" icon={Activity} showMenu={false}>
                {patientLogs.length === 0 ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted/50 text-muted-foreground mb-3">
                      <Activity className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-foreground">No sessions logged yet</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click "Mark Service Done" to record the first session.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                    {patientLogs.map((log) => (
                      <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 text-xs gap-2 hover:bg-muted/20 transition-colors">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground">Session #{log.sessionNumber}</span>
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[10px]">{log.therapyType}</Badge>
                            {log.overrideReason && (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-[10px]">Override</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-0.5 leading-relaxed">{log.notes}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-semibold text-foreground">{formatDate(log.date)}</p>
                          <p className="text-muted-foreground text-[11px] mt-0.5">{log.therapist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </WidgetCard>
              <WidgetCard title="Patient Journey Timeline" description="Milestones from registration to present" icon={CalendarClock} showMenu={false}>
                <PatientTimeline events={patient.timeline || []} />
              </WidgetCard>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* ── SERVICE DONE DIALOG ── */}
      <Dialog open={serviceDialogOpen} onOpenChange={setServiceDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              Mark Service Completed — {patient?.name}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Package: <strong>{patient?.billing?.packageName || patient?.program?.program}</strong>
            </DialogDescription>
          </DialogHeader>

          {!eligibility?.isEligible && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/6 p-3.5 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-rose-700 dark:text-rose-400">
                <AlertOctagon className="h-4 w-4 shrink-0" />
                <span>Patient has an unpaid balance. Override reason required.</span>
              </div>
              <p className="text-rose-600 text-[11.5px]">{eligibility?.reason}</p>
            </div>
          )}

          <div className="space-y-4 py-2 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="sessNumber" className="text-xs font-semibold">Session Number</Label>
                <Input id="sessNumber" disabled value={`Session #${(patient?.program?.sessionsCompleted || 0) + 1} of ${patient?.program?.sessionsPlanned || 0}`} className="h-9 bg-muted text-xs mt-1" />
              </div>
              <div>
                <Label htmlFor="sessDate" className="text-xs font-semibold">Date</Label>
                <Input id="sessDate" type="date" defaultValue={new Date().toISOString().split("T")[0]} className="h-9 text-xs mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="sessType" className="text-xs font-semibold">Therapy Type</Label>
              <Select value={sessionType} onValueChange={setSessionType}>
                <SelectTrigger id="sessType" className="h-9 text-xs mt-1">
                  <SelectValue placeholder="Select therapy type" />
                </SelectTrigger>
                <SelectContent>
                  {THERAPY_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sessTherapist" className="text-xs font-semibold">Therapist</Label>
              <Select value={sessionTherapist} onValueChange={setSessionTherapist}>
                <SelectTrigger id="sessTherapist" className="h-9 text-xs mt-1">
                  <SelectValue placeholder="Select therapist" />
                </SelectTrigger>
                <SelectContent>
                  {THERAPISTS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sessNotes" className="text-xs font-semibold">Session Notes</Label>
              <Textarea id="sessNotes" rows={3} value={sessionNotes} onChange={(e) => setSessionNotes(e.target.value)} placeholder="Observations, exercises, or caregiver instructions..." className="text-xs mt-1" />
            </div>
            {!eligibility?.isEligible && (
              <div>
                <Label htmlFor="override" className="text-xs font-bold text-rose-600">Manager Override Reason *</Label>
                <Input id="override" value={overrideReason} onChange={(e) => setOverrideReason(e.target.value)} placeholder="e.g. Guardian will pay tomorrow / Emergency session authorized" className="h-9 text-xs mt-1 border-rose-500/40" />
              </div>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" size="sm" onClick={() => setServiceDialogOpen(false)}>Cancel</Button>
            <Button
              size="sm"
              disabled={isSubmittingService || (!eligibility?.isEligible && !overrideReason.trim())}
              onClick={handleConfirmServiceDone}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
            >
              {isSubmittingService ? "Saving..." : "Confirm Service Done"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── COLLECT PAYMENT DIALOG ── */}
      <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <CreditCard className="h-5 w-5 text-primary" />
              Collect Payment — {patient?.name}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Outstanding balance: <strong className="text-rose-600">{formatTaka(patient?.billing?.due || 0)}</strong>
            </DialogDescription>
          </DialogHeader>

          {/* Quick summary strip */}
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-muted/20 p-3 text-xs">
            <div>
              <p className="text-muted-foreground">Package</p>
              <p className="font-semibold text-foreground mt-0.5 truncate">{patient?.billing?.packageName || "N/A"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Payment Type</p>
              <p className="font-semibold text-foreground mt-0.5">{patient?.billing?.paymentType || "N/A"}</p>
            </div>
          </div>

          {installmentSchedule && (
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-blue-600 mb-2">
                <CalendarDays className="h-3.5 w-3.5" />
                Next Installment Due
              </div>
              {(() => {
                const nextPending = installmentSchedule.find(i => i.status !== "Paid");
                if (!nextPending) return <p className="text-muted-foreground">All installments cleared.</p>;
                return (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Installment #{nextPending.number} · {formatDate(nextPending.dueDate)}</span>
                    <span className="font-bold text-foreground tabular-nums">{formatTaka(nextPending.amount)}</span>
                  </div>
                );
              })()}
            </div>
          )}

          <div className="space-y-3 py-1">
            <div>
              <Label htmlFor="pay-amount" className="text-xs font-semibold">Amount to Collect (৳)</Label>
              <Input
                id="pay-amount"
                type="number"
                min={0}
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                placeholder="Enter amount"
                className="h-10 text-sm font-bold mt-1"
              />
            </div>
            <div>
              <Label htmlFor="pay-method" className="text-xs font-semibold">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger id="pay-method" className="h-10 text-xs mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Cash", "bKash", "Nagad", "Rocket", "Bank Transfer", "Card"].map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pay-note" className="text-xs font-semibold">Note (Optional)</Label>
              <Input
                id="pay-note"
                value={paymentNote}
                onChange={(e) => setPaymentNote(e.target.value)}
                placeholder="Transaction ref, remarks..."
                className="h-9 text-xs mt-1"
              />
            </div>
          </div>

          {/* Remaining after payment preview */}
          {paymentAmount && (
            <div className="rounded-xl border border-border bg-muted/20 p-3 text-xs flex items-center justify-between">
              <span className="text-muted-foreground">Remaining after payment</span>
              <span className={`font-bold tabular-nums ${Math.max((patient?.billing?.due || 0) - Number(paymentAmount), 0) > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                {formatTaka(Math.max((patient?.billing?.due || 0) - Number(paymentAmount), 0))}
              </span>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" size="sm" onClick={() => setPaymentDialogOpen(false)}>Cancel</Button>
            <Button
              size="sm"
              disabled={isSubmittingPayment || !paymentAmount || Number(paymentAmount) <= 0}
              onClick={handleConfirmPayment}
              className="font-bold text-xs gap-1.5"
            >
              {isSubmittingPayment ? "Processing..." : (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Confirm Payment
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Billing stat mini-card ──────────────────────────────────────────────────
function BillingStatCard({
  label,
  value,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  icon: typeof Wallet;
  tone: "default" | "success" | "danger";
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg
          ${tone === "success" ? "bg-emerald-500/10 text-emerald-600" :
            tone === "danger" ? "bg-rose-500/10 text-rose-600" :
            "bg-primary/10 text-primary"}`}>
          <Icon className="h-3.5 w-3.5" />
        </span>
        <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
      <p className={`text-base font-bold tabular-nums
        ${tone === "success" ? "text-emerald-600" :
          tone === "danger" && value !== "৳ 0" ? "text-rose-600" :
          "text-foreground"}`}>
        {value}
      </p>
    </div>
  );
}

// ── Field component ─────────────────────────────────────────────────────────
function Field({ icon: Icon, label, value, className }: { icon?: any; label: string; value: string; className?: string }) {
  return (
    <div className={`flex items-start gap-2.5 ${className ?? ""}`}>
      {Icon && <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
      <div className="min-w-0">
        <dt className="text-[11px] text-muted-foreground">{label}</dt>
        <dd className="text-xs font-medium text-foreground break-words mt-0.5">{value || "N/A"}</dd>
      </div>
    </div>
  );
}
