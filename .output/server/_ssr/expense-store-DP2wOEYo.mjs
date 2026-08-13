import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/expense-store-DP2wOEYo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var STORAGE_KEY = "speech_lab_expenses_v2";
var EVENT_NAME = "speech_lab_expenses_updated";
var INITIAL_EXPENSES = [];
function getStoredExpenses() {
	if (typeof window === "undefined") return INITIAL_EXPENSES;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EXPENSES));
			return INITIAL_EXPENSES;
		}
		return JSON.parse(raw);
	} catch {
		return INITIAL_EXPENSES;
	}
}
function saveExpenses(records) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
		window.dispatchEvent(new CustomEvent(EVENT_NAME));
	} catch (err) {
		console.error("Error saving expenses to localStorage", err);
	}
}
function addExpenseRecord(data) {
	const existing = getStoredExpenses();
	const count = existing.length + 1;
	const voucherNo = data.voucherNo || `EXP-2026-${String(count).padStart(4, "0")}`;
	const now = /* @__PURE__ */ new Date();
	const realDate = now.toISOString().slice(0, 10);
	const realTimestamp = now.toISOString();
	const newRecord = {
		...data,
		id: data.id || `exp-${Date.now()}-${Math.floor(Math.random() * 1e3)}`,
		voucherNo,
		date: data.date || realDate,
		timestamp: data.timestamp || realTimestamp
	};
	saveExpenses([newRecord, ...existing]);
	toast.success(`Expense Recorded: ${formatTaka(newRecord.amount)}`, { description: `${newRecord.category} · Paid to ${newRecord.paidTo || "Vendor"}` });
	return newRecord;
}
function deleteExpenseRecord(id) {
	saveExpenses(getStoredExpenses().filter((item) => item.id !== id));
	toast.info("Expense Deleted");
}
function updateExpenseRecord(record) {
	saveExpenses(getStoredExpenses().map((item) => item.id === record.id ? record : item));
	toast.success("Expense Updated");
}
function resetExpenses() {
	saveExpenses(INITIAL_EXPENSES);
}
function useExpenseStore() {
	const [expenses, setExpenses] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setExpenses(getStoredExpenses());
		const handleUpdate = () => {
			setExpenses(getStoredExpenses());
		};
		window.addEventListener(EVENT_NAME, handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener(EVENT_NAME, handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);
	const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const currentMonthStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
	let totalExpenses = 0;
	let dailyExpenses = 0;
	let monthlyExpenses = 0;
	let pendingCount = 0;
	expenses.forEach((item) => {
		totalExpenses += item.amount;
		if (item.date === todayStr) dailyExpenses += item.amount;
		if (item.date.startsWith(currentMonthStr)) monthlyExpenses += item.amount;
		if (item.status === "Pending") pendingCount += 1;
	});
	return {
		expenses,
		totalExpenses,
		dailyExpenses,
		monthlyExpenses,
		pendingCount,
		addExpense: addExpenseRecord,
		deleteExpense: deleteExpenseRecord,
		updateExpense: updateExpenseRecord,
		resetExpenses
	};
}
//#endregion
export { useExpenseStore as t };
