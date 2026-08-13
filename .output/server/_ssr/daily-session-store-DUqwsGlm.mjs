import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/daily-session-store-DUqwsGlm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var DAILY_SESSIONS = [{
	id: "ds-outdoor",
	code: "DS-OUTDOOR-01",
	name: "Outdoor Session",
	category: "Outdoor Session",
	type: "Outdoor Session",
	description: "Home visit or outdoor speech & language therapy session conducted at the patient's residence or designated location.",
	price: 3e3,
	durationLabel: "60 mins / visit",
	sessions: 1,
	status: "Active",
	hint: "Includes transport, home environment assessment & one-on-one therapy intervention.",
	iconName: "MapPin"
}, {
	id: "ds-consult",
	code: "DS-CONSULT-01",
	name: "Consultation Fee",
	category: "Consultation Fee",
	type: "Consultation Fee",
	description: "Initial or follow-up clinical speech-language consultation, assessment review, and personalized therapy plan recommendation.",
	price: 2e3,
	durationLabel: "45 mins / consultation",
	sessions: 1,
	status: "Active",
	hint: "Detailed clinical evaluation, diagnostic screening & expert consultation report.",
	iconName: "Stethoscope"
}];
var STORAGE_KEY = "speech_lab_daily_sessions_v1";
var EVENT_NAME = "speech_lab_daily_sessions_updated";
function getStoredDailySessions() {
	if (typeof window === "undefined") return DAILY_SESSIONS;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(DAILY_SESSIONS));
			return DAILY_SESSIONS;
		}
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) && parsed.length > 0 ? parsed : DAILY_SESSIONS;
	} catch {
		return DAILY_SESSIONS;
	}
}
function saveDailySessions(items) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		window.dispatchEvent(new CustomEvent(EVENT_NAME));
	} catch (err) {
		console.error("Error saving daily sessions to localStorage", err);
	}
}
function updateDailySessionItem(updatedItem) {
	saveDailySessions(getStoredDailySessions().map((item) => item.id === updatedItem.id ? updatedItem : item));
	toast.success(`${updatedItem.name} Updated`, { description: `New Fee: ${formatTaka(updatedItem.price)} (${updatedItem.durationLabel})` });
}
function useDailySessionStore() {
	const [sessions, setSessions] = (0, import_react.useState)(getStoredDailySessions);
	(0, import_react.useEffect)(() => {
		setSessions(getStoredDailySessions());
		const handleUpdate = () => {
			setSessions(getStoredDailySessions());
		};
		window.addEventListener(EVENT_NAME, handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener(EVENT_NAME, handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);
	return {
		sessions,
		updateSession: updateDailySessionItem
	};
}
//#endregion
export { useDailySessionStore as n, getStoredDailySessions as t };
