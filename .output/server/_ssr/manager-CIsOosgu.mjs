import { m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as AppShell } from "./app-shell-DdlU0gAq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager-CIsOosgu.js
var import_jsx_runtime = require_jsx_runtime();
function ManagerLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		workspace: "manager",
		"data-tsd-source": "/src/routes/manager.tsx:10:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/manager.tsx:11:7" })
	});
}
//#endregion
export { ManagerLayout as component };
