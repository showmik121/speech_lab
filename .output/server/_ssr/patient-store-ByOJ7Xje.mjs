import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patient-store-ByOJ7Xje.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var STORAGE_KEY = "speech_lab_patients_v2";
var EVENT_NAME = "speech_lab_patients_updated";
var INITIAL_PATIENTS = [];
function getStoredPatients() {
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
function savePatients(patients) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
		window.dispatchEvent(new CustomEvent(EVENT_NAME));
	} catch (err) {
		console.error("Error saving patients to localStorage", err);
	}
}
function addPatient(patient) {
	savePatients([patient, ...getStoredPatients()]);
	toast.success(`Patient Registered: ${patient.name}`, { description: `ID: ${patient.code} · ${patient.program?.program || "Enrolled"}` });
	return patient;
}
function resetPatients() {
	savePatients(INITIAL_PATIENTS);
}
function usePatientStore() {
	const [patients, setPatients] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
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
	const activePatients = patients.filter((p) => [
		"Active",
		"Therapy Running",
		"Follow-up Required"
	].includes(p.status)).length;
	const currentMonthStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
	return {
		patients,
		totalPatients,
		activePatients,
		newThisMonth: patients.filter((p) => p.registeredAt?.startsWith(currentMonthStr) || p.registeredAt >= "2026-08-01").length,
		assessmentPending: patients.filter((p) => p.status === "Assessment Pending").length,
		therapyOngoing: patients.filter((p) => p.status === "Therapy Running" || p.status === "Active").length,
		addPatient,
		resetPatients
	};
}
//#endregion
export { usePatientStore as n, addPatient as t };
