import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { Patient } from "@/constants/patient-data";

const STORAGE_KEY = "speech_lab_patients_v2";
const EVENT_NAME = "speech_lab_patients_updated";

const INITIAL_PATIENTS: Patient[] = [];

export function getStoredPatients(): Patient[] {
  if (typeof window === "undefined") return INITIAL_PATIENTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PATIENTS));
      return INITIAL_PATIENTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_PATIENTS;
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

export function addPatient(patient: Patient) {
  const existing = getStoredPatients();
  const updated = [patient, ...existing];
  savePatients(updated);

  toast.success(`Patient Registered: ${patient.name}`, {
    description: `ID: ${patient.code} · ${patient.program?.program || "Enrolled"}`,
  });

  return patient;
}

export function resetPatients() {
  savePatients(INITIAL_PATIENTS);
}

export function usePatientStore() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    setPatients(getStoredPatients());

    const handleUpdate = () => {
      setPatients(getStoredPatients());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const totalPatients = patients.length;
  const activePatients = patients.filter((p) =>
    ["Active", "Therapy Running", "Follow-up Required"].includes(p.status)
  ).length;

  const now = new Date();
  const currentMonthStr = now.toISOString().slice(0, 7);
  const newThisMonth = patients.filter((p) => p.registeredAt?.startsWith(currentMonthStr) || p.registeredAt >= "2026-08-01").length;
  const assessmentPending = patients.filter((p) => p.status === "Assessment Pending").length;
  const therapyOngoing = patients.filter((p) => p.status === "Therapy Running" || p.status === "Active").length;

  return {
    patients,
    totalPatients,
    activePatients,
    newThisMonth,
    assessmentPending,
    therapyOngoing,
    addPatient,
    resetPatients,
  };
}
