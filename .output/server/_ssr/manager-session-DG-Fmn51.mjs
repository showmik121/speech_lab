import { d as findBranchByManagerId } from "./branch-data-DT5AkdAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager-session-DG-Fmn51.js
var STORAGE_KEY = "st-erp-manager-session";
function getManagerSession() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function setManagerSession(session) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}
function clearManagerSession() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(STORAGE_KEY);
}
/**
* Validates a manager unique ID against the branch registry.
* Returns the matching branch, or null if the key is invalid.
*/
function loginWithManagerId(managerId) {
	const branch = findBranchByManagerId(managerId);
	if (!branch) return null;
	setManagerSession({
		managerId: branch.manager.managerId,
		branchId: branch.id,
		branchName: branch.name,
		managerName: branch.manager.name,
		loggedInAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	return branch;
}
function getActiveBranch() {
	const session = getManagerSession();
	if (!session) return null;
	return findBranchByManagerId(session.managerId) ?? null;
}
//#endregion
export { loginWithManagerId as i, getActiveBranch as n, getManagerSession as r, clearManagerSession as t };
