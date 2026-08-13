import { S as Sun, nt as Moon } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { m as useTheme } from "./router-DNK85qwG.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-CpYLW-3Q.js
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "min-h-10 min-w-10 text-muted-foreground hover:text-foreground",
		"data-tsd-source": "/src/components/common/theme-toggle.tsx:9:5",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			className: "h-[18px] w-[18px]",
			"data-tsd-source": "/src/components/common/theme-toggle.tsx:16:27"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: "h-[18px] w-[18px]",
			"data-tsd-source": "/src/components/common/theme-toggle.tsx:16:68"
		})
	});
}
//#endregion
export { ThemeToggle as t };
