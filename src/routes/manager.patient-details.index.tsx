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
  "Search patient by Patient ID to inspect registration details, check service eligibility, and mark package-based services done.";

export const Route = createFileRoute("/manager/patient-details/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: PatientDetailsPage,
});

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
        <div className="flex flex-col items-center justify-center py-12 px-4">
          {/* Icon + Title */}
          <div className="mb-8 text-center space-y-3">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-primary/10 border border-primary/20">
              <UserSearch className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Patient ID Search
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Enter a Patient ID, name, or phone number to instantly retrieve the patient's full profile and service eligibility status.
            </p>
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
          <p className="mt-4 text-xs text-muted-foreground">
            Example IDs: <button onClick={() => handleSelectResult(patients[0]?.id)} className="font-mono font-semibold text-primary hover:underline">{patients[0]?.code}</button>,{" "}
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-rose-500/40 bg-rose-500/8 p-4">
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
                <Button asChild size="sm" className="bg-rose-600 hover:bg-rose-700 text-white text-xs gap-1.5">
                  <Link to="/manager/payments/collect">
                    <CreditCard className="h-3.5 w-3.5" />
                    Collect Payment
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={handleOpenServiceModal} className="text-xs border-rose-500/30 text-rose-600 hover:bg-rose-500/10">
                  Override & Done
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/8 p-4">
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
          )}

          {/* ── Patient Profile Card ── */}
          <Card className="shadow-card overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <PatientAvatar name={patient.name} className="h-16 w-16 text-lg shrink-0" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-foreground">{patient.name}</h2>
                      <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                        {patient.code}
                      </span>
                      <StatusBadge tone={PATIENT_STATUS_TONE[patient.status]} label={patient.status} />
                      <StatusBadge tone={PAYMENT_STATUS_TONE[patient.paymentStatus]} label={patient.paymentStatus} />
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                      <span><strong className="text-foreground font-semibold">Age:</strong> {patient.age} yrs</span>
                      <span><strong className="text-foreground font-semibold">Gender:</strong> {patient.gender}</span>
                      <span><strong className="text-foreground font-semibold">Blood:</strong> {patient.bloodGroup}</span>
                      <span><strong className="text-foreground font-semibold">Branch:</strong> {patient.branch}</span>
                      <span><strong className="text-foreground font-semibold">Registered:</strong> {formatDate(patient.registeredAt)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild className="h-9 text-xs gap-1.5">
                    <Link to="/manager/payments/collect">
                      <Wallet className="h-4 w-4 text-blue-500" />
                      Collect Payment
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="h-9 text-xs gap-1.5">
                    <Link to="/manager/follow-up">
                      <PhoneCall className="h-4 w-4 text-purple-500" />
                      Follow-up
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── Session Progress Card ── */}
          <Card className="shadow-card">
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
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Therapy Type</p>
                  <p className="mt-1 font-bold text-foreground text-sm">{patient.program?.therapyType || "Speech Therapy"}</p>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">Therapist: {patient.program?.therapist}</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Sessions</p>
                  <p className="mt-1 font-bold text-foreground text-lg tabular-nums">
                    {patient.program?.sessionsCompleted || 0} <span className="text-muted-foreground font-normal text-sm">/ {patient.program?.sessionsPlanned || 0}</span>
                  </p>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">
                    {(patient.program?.sessionsPlanned || 0) - (patient.program?.sessionsCompleted || 0)} remaining
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Balance Due</p>
                  <p className={`mt-1 font-bold text-lg tabular-nums ${patient.billing?.due > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {formatTaka(patient.billing?.due || 0)}
                  </p>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">{patient.billing?.paymentType}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-bold text-foreground">{progressPercent}%</span>
                </div>
                <Progress
                  value={progressPercent}
                  className="h-2.5 rounded-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-blue-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* ── Detail Tabs ── */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
            <TabsList className="w-full justify-start overflow-x-auto">
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
                  <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/8 p-3">
                    <div className="flex items-start gap-2.5 text-xs">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <p className="font-bold text-foreground">Emergency Contact</p>
                        <p className="mt-0.5 text-muted-foreground">
                          {patient.emergencyContact.name} ({patient.emergencyContact.relation}) · <span className="font-mono font-semibold">{patient.emergencyContact.phone}</span>
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

            <TabsContent value="billing">
              <WidgetCard title="Financial Ledger" description="Full payment breakdown and dues" icon={Wallet} showMenu={false}>
                <dl className="grid gap-5 sm:grid-cols-2 text-xs">
                  <Field label="Package" value={patient.billing?.packageName || patient.program?.program} />
                  <Field label="Payment Type" value={patient.billing?.paymentType} />
                  <Field label="Registration Fee" value={formatTaka(patient.billing?.registrationFee || 0)} />
                  <Field label="Total Billed" value={formatTaka(patient.billing?.totalBilled || 0)} />
                  <Field label="Total Paid" value={formatTaka(patient.billing?.totalPaid || 0)} />
                  <div>
                    <dt className="text-[11px] text-muted-foreground">Outstanding Balance</dt>
                    <dd className={`text-sm font-bold tabular-nums ${patient.billing?.due > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                      {formatTaka(patient.billing?.due || 0)}
                    </dd>
                  </div>
                  <Field
                    label="Last Payment"
                    value={`${formatTaka(patient.billing?.lastPaymentAmount || 0)} on ${formatDate(patient.billing?.lastPaymentDate)}`}
                    className="sm:col-span-2"
                  />
                  <Field label="Remarks" value={patient.billing?.remarks || "None"} className="sm:col-span-2" />
                </dl>
              </WidgetCard>
            </TabsContent>

            <TabsContent value="logs" className="space-y-5">
              <WidgetCard title="Recorded Service Logs" description="Sessions marked as completed by manager" icon={Activity} showMenu={false}>
                {patientLogs.length === 0 ? (
                  <p className="py-8 text-center text-xs text-muted-foreground">
                    No service sessions logged yet. Click "Mark Service Done" to record the first session.
                  </p>
                ) : (
                  <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                    {patientLogs.map((log) => (
                      <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 text-xs gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground">Session #{log.sessionNumber}</span>
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[10px]">{log.therapyType}</Badge>
                            {log.overrideReason && (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-[10px]">Override</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-0.5">{log.notes}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-medium text-foreground">{formatDate(log.date)}</p>
                          <p className="text-muted-foreground text-[11px]">{log.therapist}</p>
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
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/8 p-3.5 text-xs space-y-1">
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
    </div>
  );
}

function Field({ icon: Icon, label, value, className }: { icon?: any; label: string; value: string; className?: string }) {
  return (
    <div className={`flex items-start gap-2.5 ${className ?? ""}`}>
      {Icon && <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
      <div className="min-w-0">
        <dt className="text-[11px] text-muted-foreground">{label}</dt>
        <dd className="text-xs font-medium text-foreground break-words">{value || "N/A"}</dd>
      </div>
    </div>
  );
}
