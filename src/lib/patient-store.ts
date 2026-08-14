import { useEffect, useState } from "react";
import { toast } from "sonner";
import { PATIENTS, type Patient } from "@/constants/patient-data";

const STORAGE_KEY = "speech_lab_patients_v2";
const SERVICE_LOGS_KEY = "speech_lab_service_logs_v1";
const EVENT_NAME = "speech_lab_patients_updated";
const SERVICE_EVENT_NAME = "speech_lab_service_done_updated";

export type ServiceLog = {
  id: string;
  patientId: string;
  patientCode: string;
  patientName: string;
  packageName: string;
  therapyType: string;
  sessionNumber: number;
  totalPlanned: number;
  therapist: string;
  date: string;
  notes: string;
  status: "Completed";
  overrideReason?: string;
};

export type PatientEligibility = {
  isEligible: boolean;
  status: "Eligible" | "Ineligible" | "Warning";
  reason: string;
  dueAmount: number;
  packageType: string;
};

export function getStoredPatients(): Patient[] {
  if (typeof window === "undefined") return PATIENTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(PATIENTS));
      return PATIENTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : PATIENTS;
  } catch {
    return PATIENTS;
  }
}

export function savePatients(patients: Patient[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
    window.dispatchEvent(new Event("storage"));
  } catch (err) {
    console.error("Error saving patients to localStorage", err);
  }
}

export function getStoredServiceLogs(): ServiceLog[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SERVICE_LOGS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveServiceLog(log: ServiceLog) {
  if (typeof window === "undefined") return;
  try {
    const existing = getStoredServiceLogs();
    const updated = [log, ...existing];
    localStorage.setItem(SERVICE_LOGS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(SERVICE_EVENT_NAME));
  } catch (err) {
    console.error("Error saving service log", err);
  }
}

export function checkPatientEligibility(patient: Patient): PatientEligibility {
  if (!patient) {
    return {
      isEligible: false,
      status: "Ineligible",
      reason: "Patient not found.",
      dueAmount: 0,
      packageType: "Unknown",
    };
  }

  const due = patient.billing?.due || 0;
  const paymentStatus = patient.paymentStatus;
  const paymentType = patient.billing?.paymentType || "Monthly";
  const packageName = patient.billing?.packageName || "";

  if (due > 0 || paymentStatus === "Overdue" || paymentStatus === "Due") {
    let reasonDetail = "";
    if (paymentType === "Monthly") {
      reasonDetail = `Unpaid Monthly Package balance of ৳ ${new Intl.NumberFormat("en-IN").format(due)} due. Collect payment to enable today's service.`;
    } else if (patient.status === "Assessment Pending" || packageName.toLowerCase().includes("assessment") || packageName.toLowerCase().includes("screening")) {
      reasonDetail = `Assessment/Screening fee of ৳ ${new Intl.NumberFormat("en-IN").format(due)} pending collection.`;
    } else {
      reasonDetail = `Outstanding due of ৳ ${new Intl.NumberFormat("en-IN").format(due)} is past due.`;
    }

    return {
      isEligible: false,
      status: "Ineligible",
      reason: reasonDetail,
      dueAmount: due,
      packageType: paymentType,
    };
  }

  if (patient.status === "Inactive") {
    return {
      isEligible: false,
      status: "Ineligible",
      reason: "Patient profile is currently inactive.",
      dueAmount: due,
      packageType: paymentType,
    };
  }

  return {
    isEligible: true,
    status: "Eligible",
    reason: "Payment verified. Patient is eligible for today's service.",
    dueAmount: 0,
    packageType: paymentType,
  };
}

export function addPatient(patient: Patient) {
  const existing = getStoredPatients();
  const updated = [patient, ...existing];
  savePatients(updated);

  toast.success(`Patient Registered: ${patient.name}`, {
    description: `ID: ${patient.code} · ${patient.program?.program || "Enrolled"}`,
  });

  return patient;
}

export function updatePatientInStore(updatedPatient: Patient) {
  const existing = getStoredPatients();
  const updated = existing.map((p) => (p.id === updatedPatient.id ? updatedPatient : p));
  savePatients(updated);
  toast.success(`Patient Details Updated`, {
    description: `${updatedPatient.name} (${updatedPatient.code}) updated successfully.`,
  });
}

export function markServiceDone(
  patientId: string,
  sessionDetails?: {
    date?: string;
    notes?: string;
    therapist?: string;
    serviceType?: string;
    overrideReason?: string;
  }
) {
  const existingPatients = getStoredPatients();
  const index = existingPatients.findIndex((p) => p.id === patientId || p.code === patientId);

  if (index === -1) {
    toast.error("Patient not found!");
    return null;
  }

  const patient = { ...existingPatients[index] };
  const currentCompleted = patient.program.sessionsCompleted || 0;
  const newCompleted = currentCompleted + 1;

  patient.program = {
    ...patient.program,
    sessionsCompleted: newCompleted,
  };

  const todayStr = sessionDetails?.date || new Date().toISOString().split("T")[0];
  patient.lastVisit = todayStr;

  const newTimelineEvent = {
    id: `t_${Date.now()}`,
    title: `Service Completed: Session #${newCompleted}`,
    description: sessionDetails?.notes || `Service delivered for ${patient.billing?.packageName || patient.program?.program || "Package"}.`,
    date: todayStr,
    icon: "therapy" as const,
    tone: "success" as const,
  };

  patient.timeline = [newTimelineEvent, ...(patient.timeline || [])];

  if (patient.program.sessionsPlanned > 0 && newCompleted >= patient.program.sessionsPlanned) {
    patient.status = "Therapy Completed";
  }

  existingPatients[index] = patient;
  savePatients(existingPatients);

  const serviceLog: ServiceLog = {
    id: `log_${Date.now()}`,
    patientId: patient.id,
    patientCode: patient.code,
    patientName: patient.name,
    packageName: patient.billing?.packageName || patient.program?.program || "Therapy Package",
    therapyType: sessionDetails?.serviceType || patient.program?.therapyType || "Speech Therapy",
    sessionNumber: newCompleted,
    totalPlanned: patient.program?.sessionsPlanned || 0,
    therapist: sessionDetails?.therapist || patient.program?.therapist || "Branch Therapist",
    date: todayStr,
    notes: sessionDetails?.notes || "Routine therapy session delivered.",
    status: "Completed",
    overrideReason: sessionDetails?.overrideReason,
  };

  saveServiceLog(serviceLog);

  toast.success(`Service Done: ${patient.name}`, {
    description: `Session #${newCompleted} marked done. Package: ${patient.billing?.packageName || patient.program?.program}`,
  });

  return patient;
}

export function resetPatients() {
  savePatients(PATIENTS);
  if (typeof window !== "undefined") {
    localStorage.removeItem(SERVICE_LOGS_KEY);
    window.dispatchEvent(new CustomEvent(SERVICE_EVENT_NAME));
  }
}

export function usePatientStore() {
  const [patients, setPatients] = useState<Patient[]>(getStoredPatients);
  const [serviceLogs, setServiceLogs] = useState<ServiceLog[]>(getStoredServiceLogs);

  useEffect(() => {
    setPatients(getStoredPatients());
    setServiceLogs(getStoredServiceLogs());

    const handleUpdate = () => {
      setPatients(getStoredPatients());
    };

    const handleServiceUpdate = () => {
      setServiceLogs(getStoredServiceLogs());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener(SERVICE_EVENT_NAME, handleServiceUpdate);
    window.addEventListener("storage", handleUpdate);
    window.addEventListener("storage", handleServiceUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener(SERVICE_EVENT_NAME, handleServiceUpdate);
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("storage", handleServiceUpdate);
    };
  }, []);

  const totalPatients = patients.length;
  const activePatients = patients.filter((p) =>
    ["Active", "Therapy Running", "Follow-up Required"].includes(p.status)
  ).length;

  const now = new Date();
  const currentMonthStr = now.toISOString().slice(0, 7);
  const todayStr = now.toISOString().slice(0, 10);
  
  const newThisMonth = patients.filter((p) => p.registeredAt?.startsWith(currentMonthStr) || p.registeredAt >= "2026-08-01").length;
  const assessmentPending = patients.filter((p) => p.status === "Assessment Pending").length;
  const therapyOngoing = patients.filter((p) => p.status === "Therapy Running" || p.status === "Active").length;

  const ineligiblePatients = patients.filter((p) => !checkPatientEligibility(p).isEligible);
  const eligiblePatients = patients.filter((p) => checkPatientEligibility(p).isEligible);

  const totalServicesDone = patients.reduce((sum, p) => sum + (p.program?.sessionsCompleted || 0), 0);
  const servicesDoneToday = serviceLogs.filter((log) => log.date === todayStr).length;

  return {
    patients,
    serviceLogs,
    totalPatients,
    activePatients,
    newThisMonth,
    assessmentPending,
    therapyOngoing,
    ineligiblePatients,
    eligiblePatients,
    ineligibleCount: ineligiblePatients.length,
    eligibleCount: eligiblePatients.length,
    totalServicesDone,
    servicesDoneToday,
    addPatient,
    updatePatient: updatePatientInStore,
    markServiceDone,
    checkEligibility: checkPatientEligibility,
    resetPatients,
  };
}
