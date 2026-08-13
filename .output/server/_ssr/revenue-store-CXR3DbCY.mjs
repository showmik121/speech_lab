import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as getActiveBranch } from "./manager-session-DG-Fmn51.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/revenue-store-CXR3DbCY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var STORAGE_KEY = "speech_lab_revenue_transactions_v2";
var EVENT_NAME = "speech_lab_revenue_updated";
var INITIAL_TRANSACTIONS = [];
function getStoredTransactions() {
	if (typeof window === "undefined") return INITIAL_TRANSACTIONS;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
			return INITIAL_TRANSACTIONS;
		}
		return JSON.parse(raw);
	} catch (err) {
		console.error("Error reading revenue transactions from localStorage", err);
		return INITIAL_TRANSACTIONS;
	}
}
function saveTransactions(transactions) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
		window.dispatchEvent(new CustomEvent(EVENT_NAME));
	} catch (err) {
		console.error("Error saving revenue transactions to localStorage", err);
	}
}
function addRevenueTransaction(tx) {
	const currentBranch = getActiveBranch();
	const branchId = tx.branchId || currentBranch?.id || "dhaka-main";
	const branchName = tx.branchName || currentBranch?.name || "Dhaka Main Branch";
	const count = getStoredTransactions().length + 1;
	const receiptNo = `REC-2026-${String(count).padStart(3, "0")}`;
	const newTx = {
		...tx,
		id: `tx-${Date.now()}-${Math.floor(Math.random() * 1e3)}`,
		receiptNo,
		branchId,
		branchName,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		isLive: true
	};
	saveTransactions([newTx, ...getStoredTransactions()]);
	toast.success(`Revenue Updated: +${formatTaka(newTx.paidAmount)}`, { description: `New ${newTx.category} recorded for ${newTx.patientOrCustomerName} (${newTx.branchName}).` });
	return newTx;
}
function resetRevenueTransactions() {
	saveTransactions(INITIAL_TRANSACTIONS);
}
/**
* Custom React Hook to observe revenue state in real-time
*/
function useRevenueStore(selectedBranchId) {
	const [transactions, setTransactions] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setTransactions(getStoredTransactions());
		const handleUpdate = () => {
			setTransactions(getStoredTransactions());
		};
		window.addEventListener(EVENT_NAME, handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener(EVENT_NAME, handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);
	const filtered = selectedBranchId && selectedBranchId !== "all" ? transactions.filter((tx) => tx.branchId === selectedBranchId) : transactions;
	const now = /* @__PURE__ */ new Date();
	const todayStr = now.toISOString().slice(0, 10);
	const currentMonthStr = now.toISOString().slice(0, 7);
	let dailyRevenue = 0;
	let dailyCount = 0;
	let monthlyRevenue = 0;
	let monthlyCount = 0;
	let entireRevenue = 0;
	let totalCount = filtered.length;
	let enrollmentRevenue = 0;
	let salesRevenue = 0;
	let sessionRevenue = 0;
	filtered.forEach((tx) => {
		const txDate = tx.timestamp.slice(0, 10);
		const txMonth = tx.timestamp.slice(0, 7);
		entireRevenue += tx.paidAmount;
		if (txDate === todayStr || txDate === "2026-08-12") {
			dailyRevenue += tx.paidAmount;
			dailyCount += 1;
		}
		if (txMonth === currentMonthStr || txMonth === "2026-08") {
			monthlyRevenue += tx.paidAmount;
			monthlyCount += 1;
		}
		if (tx.category === "Patient Enrollment" || tx.category === "Package Subscription") enrollmentRevenue += tx.paidAmount;
		else if (tx.category === "Material Sale") salesRevenue += tx.paidAmount;
		else sessionRevenue += tx.paidAmount;
	});
	const branchMap = {
		"dhaka-main": {
			branchId: "dhaka-main",
			branchName: "Dhaka Main Branch",
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 184e3,
			transactionCount: 0
		},
		"gulshan": {
			branchId: "gulshan",
			branchName: "Gulshan Branch",
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 162500,
			transactionCount: 0
		},
		"uttara": {
			branchId: "uttara",
			branchName: "Uttara Branch",
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 135e3,
			transactionCount: 0
		},
		"chittagong": {
			branchId: "chittagong",
			branchName: "Chittagong Branch",
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 98e3,
			transactionCount: 0
		},
		"sylhet": {
			branchId: "sylhet",
			branchName: "Sylhet Branch",
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 76e3,
			transactionCount: 0
		}
	};
	transactions.forEach((tx) => {
		const bId = tx.branchId || "dhaka-main";
		if (!branchMap[bId]) branchMap[bId] = {
			branchId: bId,
			branchName: tx.branchName || bId,
			dailyRevenue: 0,
			monthlyRevenue: 0,
			entireRevenue: 0,
			transactionCount: 0
		};
		const b = branchMap[bId];
		b.entireRevenue += tx.paidAmount;
		b.transactionCount += 1;
		const txDate = tx.timestamp.slice(0, 10);
		const txMonth = tx.timestamp.slice(0, 7);
		if (txDate === todayStr || txDate === "2026-08-12") b.dailyRevenue += tx.paidAmount;
		if (txMonth === currentMonthStr || txMonth === "2026-08") b.monthlyRevenue += tx.paidAmount;
	});
	return {
		transactions: filtered,
		allTransactions: transactions,
		dailyRevenue,
		dailyCount,
		monthlyRevenue,
		monthlyCount,
		entireRevenue,
		totalCount,
		enrollmentRevenue,
		salesRevenue,
		sessionRevenue,
		branchSummaries: Object.values(branchMap),
		addTransaction: addRevenueTransaction,
		resetTransactions: resetRevenueTransactions
	};
}
//#endregion
export { useRevenueStore as n, addRevenueTransaction as t };
