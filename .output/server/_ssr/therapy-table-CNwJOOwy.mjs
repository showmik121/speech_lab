import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as initialsOf } from "./breadcrumbs-CKUKb44m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/therapy-table-CNwJOOwy.js
var import_jsx_runtime = require_jsx_runtime();
function TherapyAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		"data-tsd-source": "/src/components/therapy/therapy-table.tsx:41:5",
		children: initialsOf(name)
	});
}
//#endregion
export { TherapyAvatar as t };
